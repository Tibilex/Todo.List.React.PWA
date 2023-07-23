import { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { ContainerLabel } from "../Task/ContainerLabel/container-label"
import styles from "./date-container.module.scss"

export const DateContainer: React.FC = () => {
 
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const currentTime = () => {
    var today = new Date();
    setTime(today.getHours() + ':' + today.getMinutes() + ':'  + today.getSeconds());
  }

  const currentDate = () => {
    let month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var today = new Date();
    setDate( today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      currentTime();
      currentDate();
    }, 1000);
    return () => clearInterval(interval);
  })
  
  return (
    <>
      <div className={styles.infoSection}>
        <div className={styles.timeContainer}>
          <ContainerLabel title='Time date zone'/>
          <div className={styles.dateTimeContainer}>
            <div className={styles.timeBlock}>
              <p>On our watch</p>
              <span className={styles.time}><BiTimeFive size={30} className={styles.icon}/>{time}</span>
              
            </div>
            <div className={styles.dateBlock}>
              <p>Today we have</p>
              <span className={styles.date}><AiOutlineCalendar size={30} className={styles.icon}/>{date}</span>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}