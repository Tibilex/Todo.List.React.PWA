import { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { ContainerLabel } from "../ContainerLabel/containerLabel"
import styles from "./infoContainer.module.scss"

export const InfoContainer: React.FC = () => {
 
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
    <div className={styles.infoSection}>
      <div className={styles.timeContainer}>
        <ContainerLabel title='Time date zone'/>
        <div className={styles.dateTimeContainer}>
          <div className={styles.timeBlock}>
            <p>On our watch</p>
            <span className={styles.time}><BiTimeFive size={36} className="mr-2"/>{time}</span>
            
          </div>
          <div className={styles.dateBlock}>
            <p>Today we have</p>
            <span className={styles.date}><AiOutlineCalendar size={36} className="mr-2"/>{date}</span>
          </div>
        </div>
      </div> 
    </div>
  )
}