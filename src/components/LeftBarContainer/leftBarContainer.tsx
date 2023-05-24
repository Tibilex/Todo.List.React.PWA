import { BsFillJournalBookmarkFill } from "react-icons/bs"
import styles from "./leftBarContainer.module.scss"
export const LeftBar: React.FC = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.iconContainer}>
        <div className={styles.iconBorder}>
          <BsFillJournalBookmarkFill size={56} className={styles.icon}/>
        </div>
        <div className={styles.labelContainer}>
          <p className={styles.paragraph}>Task</p>
          <p className={styles.paragraph}>Book</p>
        </div>
          
      </div>
    </div>
  )
}