import cn from 'classnames';
import React from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { useToDoStatistic } from '../../data/stores/useToDoStatisticStore';
import { CheckBox } from '../CheckBox/checkBox';
import styles from './taskItem.module.scss';

interface IItemProps {
  id: string;
  title: string;
  isComplete: boolean;
  taskStatus: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
}

export const TaskItem: React.FC<IItemProps> = ({
  id,
  title,
  isComplete,
  taskStatus,
  onRemove,
 // onEdit,
}) => {
  const [completeStatIncrement, deleteStatIncrement] = useToDoStatistic((state) => [state.updateCompleteScore, state.updateDeleteScore])
  return (
    <div className={styles.itemBorder}>  
    <div className={styles.itemContainer}>
      <button 
        className={styles.checkButton}
        onClick={() => [taskStatus(id), isComplete ? completeStatIncrement(-1) : completeStatIncrement(1)]}>
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
        onClick={() => [onRemove(id), deleteStatIncrement(1)]}
        />
      </button>
    </div> 
    
  )
}