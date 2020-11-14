//other import
import React from 'react';
//styles
import styles from './Header.module.scss';
//my components
import {Logo} from './Logo/Logo';
import {Menu} from './Menu/Menu';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Menu/>
        </header>
    );
}

