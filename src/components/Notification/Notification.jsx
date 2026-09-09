import { useEffect, useState } from "react";
import styles from "./Notification.module.css";

const DISMISS_DELAY = 4500;
const EXIT_DURATION = 180;

export default function Notification({ notification, onDismiss }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissTimer = setTimeout(() => setVisible(false), DISMISS_DELAY);
    const removeTimer = setTimeout(onDismiss, DISMISS_DELAY + EXIT_DURATION);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, [notification.id, onDismiss]);

  const isError = notification.type === "error";

  return (
    <div
      className={`${styles.notification} ${visible ? styles.visible : ""}`}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      <strong>$ ./send-message</strong>
      <span className={isError ? styles.error : styles.success}>
        {isError ? "✗ delivery failed" : "✓ message delivered"}
      </span>
      <span>&nbsp;&nbsp;{isError ? "Please try again or reach me directly." : "I'll get back to you soon."}</span>
    </div>
  );
}
