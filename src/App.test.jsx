import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { send } from "@emailjs/browser";
import App from "./App";

vi.mock("@emailjs/browser", () => ({
  send: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

test("renders the portfolio introduction", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Jhamil\s*Fernandez/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /ls \.\/experience/i })).toHaveAttribute("href", "#experience");
});

test("submits the contact form and resets it after a successful delivery", async () => {
  send.mockResolvedValueOnce({});
  render(<App />);

  fireEvent.change(screen.getByLabelText("YOUR NAME"), { target: { value: "Ada Lovelace" } });
  fireEvent.change(screen.getByLabelText("EMAIL ADDRESS"), { target: { value: "ada@example.com" } });
  fireEvent.change(screen.getByLabelText("A FEW DETAILS"), { target: { value: "Build an API" } });
  fireEvent.click(screen.getByRole("button", { name: "./send-message" }));

  await waitFor(() => {
    expect(screen.getByRole("status")).toHaveTextContent("message delivered");
  });

  expect(send).toHaveBeenCalledTimes(1);
  expect(screen.getByLabelText("YOUR NAME")).toHaveValue("");
  expect(screen.getByLabelText("EMAIL ADDRESS")).toHaveValue("");
  expect(screen.getByLabelText("A FEW DETAILS")).toHaveValue("");
});

test("keeps the form values and shows an error notification when delivery fails", async () => {
  send.mockRejectedValueOnce(new Error("EmailJS unavailable"));
  render(<App />);

  fireEvent.change(screen.getByLabelText("YOUR NAME"), { target: { value: "Ada Lovelace" } });
  fireEvent.change(screen.getByLabelText("EMAIL ADDRESS"), { target: { value: "ada@example.com" } });
  fireEvent.change(screen.getByLabelText("A FEW DETAILS"), { target: { value: "Build an API" } });
  fireEvent.click(screen.getByRole("button", { name: "./send-message" }));

  await waitFor(() => {
    expect(screen.getByRole("alert")).toHaveTextContent("delivery failed");
  });

  expect(screen.getByLabelText("YOUR NAME")).toHaveValue("Ada Lovelace");
  expect(screen.getByLabelText("EMAIL ADDRESS")).toHaveValue("ada@example.com");
  expect(screen.getByLabelText("A FEW DETAILS")).toHaveValue("Build an API");
});

test("disables the submit button while delivery is pending", async () => {
  let resolveDelivery;
  send.mockReturnValueOnce(new Promise((resolve) => {
    resolveDelivery = resolve;
  }));
  render(<App />);

  fireEvent.change(screen.getByLabelText("YOUR NAME"), { target: { value: "Ada Lovelace" } });
  fireEvent.change(screen.getByLabelText("EMAIL ADDRESS"), { target: { value: "ada@example.com" } });
  fireEvent.change(screen.getByLabelText("A FEW DETAILS"), { target: { value: "Build an API" } });
  fireEvent.click(screen.getByRole("button", { name: "./send-message" }));
  const submitButton = screen.getByRole("button", { name: "./send-message" });

  expect(submitButton).toBeDisabled();
  expect(submitButton).toHaveAttribute("aria-busy", "true");

  resolveDelivery();
  await waitFor(() => expect(submitButton).not.toBeDisabled());
});
