import { useEffect, useState } from "react";
import { useToDoStatistic } from "../../data/stores/useToDoStatisticStore";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { AddInput } from "../AddInput/addInput";
import { ContainerLabel } from "../ContainerLabel/containerLabel";
import { StatisticCounter } from "../StatCounter/statCounter";
import { TaskItem } from "../TaskItem/taskItem";
import styles from './task.container.module.scss';

export const TaskContainer: React.FC = () => {
 
  const [tasks, completeStatus, updateTask, removeTask] = useToDoStore((state) => 
  [state.tasks, state.completeStatus, state.updateTask, state.removeTask])
  const [createScore, completeScore, deleteScore] = useToDoStatistic((state) => 
  [state.createdTaskScore, state.completedTaskScore, state.deletedTaskScore])

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

        <div className={styles.statisticsContainer}>
            <ContainerLabel title={'Total progress'}/>
          <div className={styles.roundedContainer}>
            <StatisticCounter count={createScore} label={'Created'}/>
            <StatisticCounter count={completeScore} label={'Completed'}/>
            <StatisticCounter count={deleteScore} label={'Deleted'}/>
          </div>
        </div>
        <div className={styles.tasksListContainer}>
          <div className={styles.tasksList}>
            <ContainerLabel title={'Active tasks'}/>
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
            <ContainerLabel title={'Completed tasks'}/> 
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
