//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './Menu.module.scss';
//my components

export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><NavLink activeClassName={styles.active} to='/myProfile'>My profile</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/messages'>Messages</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/music'>Music</NavLink></li>
            </ul>
        </nav>
    );
}

