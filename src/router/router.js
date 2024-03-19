import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Projet from '../components/projetDetail/projetDetail';
import MainPage from '../mainPage/mainPage';

function route() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/projet/:id" element={<Projet/>}></Route>
            </Routes>
        </div>
    )
}

export default route;