import React from 'react';

import '../../App.scss';

import Header from '../block/Header';
import Answers from '../block/Answers';

export default class MainPage extends React.Component {


    render() {
        return(
            <>
            <Header/>
            <Answers/>
            <h1>SongBird body</h1>
            </>
        )
    }
} 