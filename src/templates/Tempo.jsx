import './Tempo.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@material-ui/core/styles';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import FadeIn from 'react-fade-in';
export const Tempo = props => {
    const [cidade, setCidade] = useState(null)
    const [resposta, setResposta] = useState([])
    const [pesquisar, setPesquisar] = useState(null)
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(0)
    const key = '82aeecacd28e617a4b3ecf0ad45652fe'
    function api()
    {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + key + "&units=metric&lang=pt_br"
        axios.get(url)
        .then((response) => {
            console.log(response.data)
            setResposta(response.data)
            setStatus(response.status)
            console.log('debug' + response.status)
            setPesquisar(false)
        })
        .catch(function(error){
            if(error.response){
                console.log(error.response.data)
                setStatus(error.response.status)
                console.log(error.response.status)
                setPesquisar(false)
            }
        })
    }
    function limpar(){
        setCidade('')
        setStatus(100)
    }
    const theme = createTheme({
        palette: {
            mode: 'dark',
        }
      });
    return(
        <div className = "tempo">
            <ThemeProvider theme={theme}>
                <div className="info">
                    <p>Para saber informações insira o nome da cidade</p>
                </div>
                <hr />
                <div className = 'info'>
                    <span>Cidade:</span>
                    <input  value={cidade} type="text" onChange={e => setCidade(e.target.value)}  data-testid = "inp1" className="inp"/>
                </div>
                <div className="info">
                    <br />
                    <span>{cidade != null ? 
                        <Button data-testid = "btn1" color="inherit" variant='contained' onClick={() => {api();}} endIcon={<SearchIcon/>}>Pesquisar</Button>
                        : 'Preencha os campos para continuar'}</span>
                </div>
                {   status === 200 ?
                        <FadeIn>
                            <div className='resultado' >
                                <h3>Cidade Encontrada</h3>
                                <h3>{resposta.name} está com {resposta.weather[0].description} </h3>
                                <h3>Segue agora a Temperatura</h3>
                                <h3>Temperatura máxima: {resposta.main.temp}</h3>
                                <h3>Temperatura máxima: {resposta.main.temp_max}</h3>
                                <h3>Temperatura mínima: {resposta.main.temp_min}</h3>
                                <Button  color="inherit" variant='contained' onClick={() => limpar()} endIcon={<SearchIcon/>}>Limpar</Button>
                            </div>
                        </FadeIn>
                    : status === 404 ? 
                        <div className='resultado'>
                            <h3>Cidade não encontrada.</h3>
                        </div>
                    : ''
                }
               
            </ThemeProvider>
            
            
        </div>
    )
}