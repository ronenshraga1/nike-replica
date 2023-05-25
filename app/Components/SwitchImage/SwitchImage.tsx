import React from 'react'
import Image from 'next/image';
import styles from './SwitchImage.module.css';

function SwitchImage() {
  return (
    <div className={styles.buttonContainer}>
        <button className={styles.customButton}>
            <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 185.4 300">
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
            </svg>
        </button>
        <button className={styles.customButton}>
            <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 185.4 300">
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
            </svg>
        </button>
    </div>
  )
}

export default SwitchImage