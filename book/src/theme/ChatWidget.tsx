import React from 'react';
import styles from './ChatWidget.module.css';

export default function ChatWidget(): JSX.Element {
  return (
    <div className={styles.widgetContainer}>
        <button className={styles.glowingCircleButton}>
            💬
        </button>
    </div>
  );
}