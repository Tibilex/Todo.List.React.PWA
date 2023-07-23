import React, { useCallback, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useToDoStatistic } from '../../../data/stores/useToDoStatisticStore';
import { useToDoStore } from "../../../data/stores/useToDoStore";
import { SendNotification } from '../../../scripts/notifications';
import styles from './addInput.module.scss';

export const AddInput: React.FC = () => {
  const createTask = useToDoStore((state) => state.createTask)
  const createScore = useToDoStatistic((state) => state.updateCreateScore)

  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(() => {
    createTask(inputValue);
    setInputValue('');
  }, [inputValue])

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter'){
              addTask();
              createScore(1)
              Notification.requestPermission().then(perm => {
                if (perm === "granted"){
                  SendNotification('Task added !!!');
                }
              })
            }
          }}
          placeholder='Type your task'
        />
        <button
          className={styles.inputButton}
          onClick={() => [addTask(), createScore(1), 
            Notification.requestPermission().then(perm => {
            if (perm === "granted"){
              navigator.serviceWorker.getRegistration().then((reg) => {
                console.log(reg)
                const options = {
                  body: 'Task added !!!',
                  icon: '/icon/icon-512x512.png',
                  vibrate: [100, 50, 100],
                  data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 0,
                  },
                }
          
                reg?.showNotification("PWA", options)
              })
            }
          })]}
          aria-label='add'>
          <FiPlusCircle size={24}/>
        </button>
          
        
      </div>
    </>
  )
}