import React, {useEffect, useState} from 'react';
import Form from "./components/form/form";
import Card from "./components/card/card";
import './App.css'
import axios from "axios";
import Loading from "./components/Loading/loading";

const App = () => {

    const APIKEY = 'e00d19ad612641c6a75110738241603'
    const [witherData, setWitherData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const getWither = async function (city) {
        setIsLoading(true)

        console.log(witherData)



        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
            setWitherData(response.data)
        } catch (e) {
            if (e?.response?.status === 400) {
                // alert('There is no such city')
                setError('There is no such city')
            } else if (e?.response?.status === 401) {
                setError('Вы не авторизованы')
            } else if (e?.response?.status === 402) {
                setError('Зарезервировано')
            } else if (e?.response?.status === 403) {
                setError('Нет прав на просмотр')
            } else if (e?.response?.status === 404) {
                setError('Связь с сервером установлена, но данных по заданному запросу на сервере нет')
            } else {
                setError('server is temporarily unavailable')
            }
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getWither('Bishkek')
    }, []);

    return (
        <div className='container'>
            <Form
                getWither={getWither}
                setError={setError}
            />
            {isLoading ?
                <Loading />
                :
                    <Card
                        witherData={witherData}
                    />


        }
        <div className="e-div">
            {error && <h1 className='error-h1'>{error}</h1>}
        </div>
        </div>
    );
};

export default App;
