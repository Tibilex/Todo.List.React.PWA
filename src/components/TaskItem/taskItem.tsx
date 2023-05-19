import cn from 'classnames';
import React from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { CheckBox } from '../CheckBox/checkBox';
import styles from './taskItem.module.scss';

interface ItemProps {
  id: number;
  title: string;
  isComplete: boolean;
  taskStatus: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onRemove: (id: number) => void;
}

export const TaskItem: React.FC<ItemProps> = ({
  id,
  title,
  isComplete,
  taskStatus,
  onRemove,
 // onEdit,
}) => {
  
  return (
    <div className={styles.itemBorder}>  
    <div className={styles.itemContainer}>
      <button 
        className={styles.checkButton}
        onClick={() => taskStatus(id)}>
        <CheckBox
          isChecked={isComplete}
        />
        <span className={cn({'line-through text-zinc-500' : isComplete})}>{title}</span>
      </button>  
          <CiEdit className={styles.editButton}
          size={24}/>
      </div>
      <button
        className={styles.inputButton}
        aria-label='remove'
        onClick={() => onRemove(id)}>
        <CiTrash className={styles.trashButton}
        size={24}
        onClick={() => onRemove(id)}
        />
      </button>
    </div> 
    
  )
}