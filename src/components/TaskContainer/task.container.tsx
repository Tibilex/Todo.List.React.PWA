import { useEffect, useState } from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { AddInput } from "../AddInput/addInput";
import { TaskItem } from "../TaskItem/taskItem";
import styles from './task.container.module.scss';

export const TaskContainer: React.FC = () => {
 
  const tasks = useToDoStore((state) => state.tasks)
  const completeStatus = useToDoStore((state) => state.completeStatus)
  const updateTask = useToDoStore((state) => state.updateTask)
  const removeTask = useToDoStore((state) => state.removeTask)

  const [completeTodo, setComplete] = useState(tasks)
  const [activeTodo, setActive] = useState(tasks)

  const isComplete = () => {
    const copyList = [...tasks]
    const completed = copyList.filter(t => t.isComplete === true)
    setComplete(completed)
  }

  const isActive = () => {
    const copyList = [...tasks]
    const active = copyList.filter(t => t.isComplete === false)
    setActive(active)
  }

  useEffect(() => {
    isComplete()
    isActive()
  }, [tasks])

  return (

    <section className={styles.taskSection}>
        <AddInput/>

        <div className={styles.statisticsContainer}>stat</div>
        <div className={styles.tasksListContainer}>
          <div className={styles.tasksList}>
            <article className={styles.tasksTitle}>Active tasks</article>
            {!activeTodo.length && (<p className={styles.emptyTasks}>Task list is empty</p>)}
            {activeTodo.map((task) => (
              <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              taskStatus={completeStatus}
              onEdit={updateTask}
              onRemove={removeTask}
              />
            ))}
          </div>
          <div className={styles.tasksList}>
            <article className={styles.tasksTitle}>Completed tasks</article>
            {
            !completeTodo.length && (<p className={styles.emptyTasks}>you haven't done anything yet</p>)}
            {completeTodo.map((task) => (
              <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              taskStatus={completeStatus}
              onEdit={updateTask}
              onRemove={removeTask}
              />
            ))}
          </div>
        </div>
      </section>
  )
}