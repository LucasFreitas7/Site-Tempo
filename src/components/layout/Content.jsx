import './Content.css'
import React from "react";
import { Switch ,Route } from 'react-router-dom';
import {Tempo} from '../../templates/Tempo'
import {Home} from '../../templates/Home'
export const Content = (props) => {
    return(
        <main className='Content'>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/tempo'>
                    <Tempo/>
                </Route>
            </Switch>
        </main>
    )
    
}