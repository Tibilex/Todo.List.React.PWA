import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";

import { AddInput } from "../AddInput";
import styles from './index.module.scss';

export const App: React.FC = () => {

  const [
    tasks,
    createTask,
    updateTask,
    removeTask
  ] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ])

  console.log(tasks)

  return (
    <main className={styles.main}>
      <aside className={styles.leftBar}>
        <div className={styles.categoryContainer}>stat</div>
      </aside>
      <section className={styles.taskSection}>
        <AddInput
          onAdd={(title) => {
            if (title){
              createTask(title)
            }
          }}
        />
       
        <div className={styles.statisticsContainer}>stat</div>
        <div className={styles.tasksListContainer}>
          {!tasks.length && (<p>Task list is empty</p>)}
          {tasks.map((task) => (<p>{task.title}</p>))
            
          }
        </div>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.temp}></div>
        <div className={styles.timeContainer}>stat</div>
        <div className={styles.weatherContainer}>stat</div>
      </section>
    </main>
  )
}