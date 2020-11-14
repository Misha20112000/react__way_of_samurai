//other import
import React from 'react';
import {Route} from 'react-router-dom';
//styles
import styles from './App.module.scss';
//my components
import {Header} from './Header/Header';
import {Messages} from './Messages/Messages';
import {Profile} from './Profile/Profile';


export const App = () => {
    return (
        <div className='container'>
            <Header/>
            <div className={styles.contentWrapper}>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages' render={() => <Messages/>}/>
            </div>
        </div>
    );
}

