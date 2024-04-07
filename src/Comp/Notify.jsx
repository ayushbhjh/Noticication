import React from 'react'
import styles from './Notify.module.css'
export default function Notify() {
  const handleSendNotification = () => {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else {
      // Check if permission is already granted
      if (Notification.permission === "granted") {
        // If it's granted, show the notification
        showNotification();
      } else if (Notification.permission !== "denied") {
        // If it's not granted but not denied, request permission
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            showNotification();
          }
        });
      }
    }
  };

  const showNotification = () => {
    // Create a new notification
    new Notification("New Notification", {
      body: "This is a sample notification",
      icon: "/path/to/icon.png" // Path to the notification icon
    });
  };
  return (
    <div className={styles.body}>
      <h1>Lorem Epsum</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className={styles.fifth}>
        <div className={styles.fourth}>
          <div className={styles.third}>
            <div className={styles.second}>
              <div className={styles.first}>

              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={handleSendNotification}>Send Notifiaction</button>
    </div>
  )
}
