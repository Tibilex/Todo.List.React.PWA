import React, { useCallback, useState } from 'react';

import { FiPlusCircle } from 'react-icons/fi';
import styles from './index.module.scss';

interface InputProps {
  onAdd: (title: string) => void;
}

export const AddInput: React.FC<InputProps> = ({
  onAdd,
}) => {

  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(() => {
    onAdd(inputValue);
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