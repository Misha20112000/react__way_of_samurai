//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './Messages.module.scss';
//my components

export const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.dialogs}>
                <NavLink activeClassName={styles.active} className={styles.dialogItem} to='/messages/1'>
                    Valera
                </NavLink>
                <NavLink activeClassName={styles.active} className={styles.dialogItem} to='/messages/2'>
                    Denis
                </NavLink>
                <NavLink activeClassName={styles.active} className={styles.dialogItem} to='/messages/3'>
                    Misha
                </NavLink>
            </div>
            <div className={styles.messagesField}>
                <div className={`${styles.messageItem} ${styles.myMessage}`}>
                    <span>hello world</span>
                </div>
                <div className={`${styles.messageItem} ${styles.yourMessage}`}>
                    <span>hello world</span>
                </div>
                <div className={`${styles.messageItem} ${styles.myMessage}`}>
                    <span>hello world</span>
                </div>
            </div>
        </div>
    );
}

