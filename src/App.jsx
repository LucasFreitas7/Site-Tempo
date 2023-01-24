import './App.css'
import React from "react";
import {Navbar} from "./components/layout/Navbar";
import {Content} from "./components/layout/Content";
import { BrowserRouter as Router} from 'react-router-dom';
export const App = () => {
    return(
        <div className="App">
            <Router>
                <Navbar title="Inicio" subtitle="Tempo"/>
                <Content/>
            </Router>
        </div>
    )
}