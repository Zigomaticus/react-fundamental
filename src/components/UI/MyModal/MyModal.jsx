import React from "react";
// Css
import styles from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootStyles = [styles.myModal];
  if (visible) {
    rootStyles.push(styles.active);
  }

  return (
    <div className={rootStyles.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;