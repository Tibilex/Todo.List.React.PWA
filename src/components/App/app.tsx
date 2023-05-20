import React from "react";
import { TaskContainer } from "../TaskContainer/task.container";
import styles from './app.module.scss';

export const App: React.FC = () => {
 
  return (
    <main className={styles.main}>
      <aside className={styles.leftBar}>
        <div className={styles.categoryContainer}>stat</div>
      </aside>

      <TaskContainer />

      <section className={styles.infoSection}>
        <div className={styles.temp}></div>
        <div className={styles.timeContainer}>stat</div>
        <div className={styles.weatherContainer}>stat</div>
      </section>
    </main>
  )
}