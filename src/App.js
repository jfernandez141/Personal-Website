import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import ReactGA from "react-ga";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;

    const TRACKING_ID = "UA-232790640-1";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
  }, []);
  return <Portfolio />;
}

export default App;
