import React from "react";
import { InfoContainer } from "../InfoContainer/infoContainer";
import { LeftBar } from "../LeftBarContainer/leftBarContainer";
import { TaskContainer } from "../TaskContainer/task.container";
import { WeatherContainer } from "../WeatherContainer/weatherContainer";
import styles from './app.module.scss';

export const App: React.FC = () => {

  return (
    <main className={styles.main}>
      <aside className={styles.leftBar}>
        <LeftBar/>
      </aside>
      <TaskContainer />
      <div className={styles.infoSection}>
        <div className={styles.temp}></div>
        <InfoContainer />
        <WeatherContainer />
      </div>
      
    </main>
  )
}