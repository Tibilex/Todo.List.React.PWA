import { useEffect, useState } from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { AddInput } from "../AddInput/addInput";
import { TaskItem } from "../TaskItem/taskItem";
import styles from './task.container.module.scss';



export const TaskContainer: React.FC = () => {
  const [tasks,createTask,updateTask,removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ])

  const [task, setTasks] = useState(tasks)
  const [completeTodo, setComplete] = useState(task)
  const [activeTodo, setActive] = useState(task)

  const changeTodoStatus = (id: number) => {
    const copyList = [...task]
    const current = copyList.find(t => t.id === id)
    if (current != undefined){
      current.isComplete = !current.isComplete
      setTasks(copyList)
    }
  }

  const isComplete = () => {
    const copyList = [...task]
    const completed = copyList.filter(t => t.isComplete === true)
    setComplete(completed)
  }

  const isActive = () => {
    const copyList = [...task]
    const active = copyList.filter(t => t.isComplete === false)
    setActive(active)
  }

  const removeTodo = (id:number) => {
    setTasks([...task].filter(t => t.id !== id))
  }

  useEffect(() => {
    isComplete()
    isActive()
  }, [task])
  return (

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
            {activeTodo.map((task) => (
              <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              taskStatus={changeTodoStatus}
              onEdit={updateTask}
              onRemove={removeTodo}
              />
            ))}
          </div>
          <div className={styles.tasksList}>
            <article className={styles.tasksTitle}>Completed tasks</article>
            {completeTodo.map((task) => (
              <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              taskStatus={changeTodoStatus}
              onEdit={updateTask}
              onRemove={removeTodo}
              />
            ))}
          </div>
        </div>
      </section>
  )
}