import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import styles from './checkBox.module.scss';

interface ICheckProps {
  isChecked: boolean;
}

export const CheckBox: React.FC<ICheckProps> = ({isChecked}) => {
  return (
    <div className={`${styles.checkBorder} 
     ${isChecked ? 'bg-[#ace69a]' : ''} ${styles.checkSizes}`}>
      {isChecked &&
        <HiOutlineCheck size={22} className='text-black'/>
      }
    </div>
  )
}