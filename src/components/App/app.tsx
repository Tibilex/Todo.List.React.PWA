import React from "react";
import { DateContainer } from "../Date/date-container";
import { TaskContainer } from "../Task/task.container";
import styles from './app.module.scss';

export const App: React.FC = () => {

  return (
    <main className={styles.main}>
      <section>
        <DateContainer />  
        <TaskContainer />
      </section>
    </main>
  )
}