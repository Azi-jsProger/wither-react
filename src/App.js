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
    const getWither = async function (city) {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
            setWitherData(response.data)
        } catch (e) {
            if (e?.response?.status === 400) {
                alert('There is no such city')
            } else if (e.response.status === 401) {
                alert('Вы не авторизованы')
            } else if (e.response.status === 402) {
                alert('Зарезервировано')
            } else if (e.response.status === 403) {
                alert('Нет прав на просмотр')
            } else if (e.response.status === 404) {
                alert('Связь с сервером установлена, но данных по заданному запросу на сервере нет')
            } else {
                alert('server is temporarily unavailable')
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
            />
            {isLoading ?
                <Loading />
                :
                <>
                    <Card
                        witherData={witherData}
                    />
                </>

        }
        </div>
    );
};

export default App;
