import React from "react";
import styles from './index.module.scss';

export const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <aside className={styles.leftBar}>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </aside>
      <section className={styles.taskSection}>
        <div className={styles.addTaskContainer}>stat</div>
        <div className={styles.statisticsContainer}>stat</div>
        <div className={styles.tasksListContainer}>stat</div>
      </section>
      <section className={styles.infoSection}>
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </section>
    </main>
  )
}