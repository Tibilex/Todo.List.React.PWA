import React from "react";
import { TaskContainer } from "../TaskContainer/task.container";
import styles from './app.module.scss';

export const App: React.FC = () => {
/*
  const [
    tasks,
    createTask,
    updateTask,
    removeTask
  ] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ])
  console.log(tasks)
  */
//  {!tasks.length && (<p>Task list is empty</p>)}
  return (
    <main className={styles.main}>
      <aside className={styles.leftBar}>
        <div className={styles.categoryContainer}>stat</div>
      </aside>

      <TaskContainer />
      {/*
      
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
          <div className={styles.tasksList}>
            <article className={styles.tasksTitle}>Active tasks</article>
            {tasks.map((task) => (
              <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              onComplete={task.isComplete}
              onEdit={updateTask}
              onRemove={removeTask}
              />
            ))}
          </div>
          <div className={styles.tasksList}>
            <article className={styles.tasksTitle}>Completed tasks</article>
            
          </div>
        </div>
      </section>
      */}
      <section className={styles.infoSection}>
        <div className={styles.temp}></div>
        <div className={styles.timeContainer}>stat</div>
        <div className={styles.weatherContainer}>stat</div>
      </section>
    </main>
  )
}