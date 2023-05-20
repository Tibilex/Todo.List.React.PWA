import React, { useCallback, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useToDoStore } from "../../data/stores/useToDoStore";
import styles from './addInput.module.scss';

export const AddInput: React.FC = () => {
  const createTask = useToDoStore((state) => state.createTask)

  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(() => {
    createTask(inputValue);
    setInputValue('');
  }, [inputValue])

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.inputField}
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter'){
            addTask();
          }
        }}
        placeholder='Type your task'
      />
      <button
        className={styles.inputButton}
        onClick={addTask}
        aria-label='add'>
        <FiPlusCircle size={24}/>
      </button>
        
      
    </div>
  )
}