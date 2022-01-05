import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = props =>{
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className={styles.modal}>
      <div onClick={(e)=>e.stopPropagation()} className={styles.dialogbox}>
      <i onClick={props.onDismiss} className="close icon"></i>
        <div className={styles.title}>{props.title}</div>
          <hr />
          <div className={styles.content}>
           {props.content}
          </div>
          <div className={styles.actions}>
            {props.actions}
          </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
