import styles from "./statCounter.module.scss";
interface ICounterProps {
  count: number;
  label: string;
}

export const StatisticCounter: React.FC<ICounterProps> = ({count, label}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.radialContainer}>
        <p className={styles.counter}>{count}</p>
        <label className={styles.label}>tasks</label>
      </div>
    </div>
  )
}