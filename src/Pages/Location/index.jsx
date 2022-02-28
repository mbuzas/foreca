import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../../Context";
import Layout from "../Layout";
import { ArrowLeft20 } from "@carbon/icons-react";
import "./Location.scss";
import { Link } from "react-router-dom";
const Location = () => {
    const { selectedLocation, locationName } = useContext(WeatherContext);
    const [currentData, setCurrentData] = useState();
    const [dailyData, setDailyData] = useState();

    const getRandom = () => {
        return Math.floor(Math.random() * 1000000);
    };

    const sendLocationLog = async (locationDetails) => {

        await axios.post("http://localhost:5000/location", { locationDetails: locationDetails })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        const currentOptions = {
            method: "GET",
            url: `https://foreca-weather.p.rapidapi.com/current/${selectedLocation}`,
            params: { alt: "0", tempunit: "C", windunit: "MS", tz: "Europe/London", lang: "en" },
            headers: {
                "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
                "x-rapidapi-key": "0b20c24bc4msh993b29196ffed96p1b64a2jsn2c6a007d9566"
            }
        };

        selectedLocation && axios.request(currentOptions)
            .then(function (response) {
                setCurrentData(response.data);
                sendLocationLog(response.data && response.data);
            })
            .catch(function (error) {
                console.error(error);
            });


    }, [selectedLocation]);
    useEffect(() => {
        const dailyOptions = {
            method: "GET",
            url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${selectedLocation}`,
            params: { alt: "0", tempunit: "C", windunit: "MS", periods: "8", dataset: "full" },
            headers: {
                "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
                "x-rapidapi-key": "0b20c24bc4msh993b29196ffed96p1b64a2jsn2c6a007d9566"
            }
        };

        selectedLocation && axios.request(dailyOptions)
            .then(function (response) {
                setDailyData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });


    }, [selectedLocation]);


    return (
        <Layout>
            <Link to="/" className="get-back"> <ArrowLeft20 /> Get Back</Link>
            {currentData &&
                <>
                    <div className="block-mb">
                        <h4>Current Conditions at <span className="bold">{locationName}</span></h4>
                        <div className="content">
                            <p >Temperature: {currentData.current.temperature}C</p>
                            <p >Feels like: {currentData.current.feelsLikeTemp}C</p>
                            <p>Humidity: {currentData.current.relHumidity}%</p>
                            <p > Wind: {currentData.current.windSpeed}m/s</p>
                            <img src={`https://developer.foreca.com/static/images/symbols/${currentData.current.symbol}.png`} alt="" />
                        </div>
                    </div>

                </>
            }
            <p className="title">7 Days Forecast</p>
            {
                dailyData &&
                <div className="daily-wrapper">
                    <div className="daily-grid">
                        {dailyData.forecast.slice(0, 7).map((day) => {
                            return (
                                <div className="block-mb" key={getRandom}>
                                    <div className="content">
                                        <p>{day.date}</p>
                                        <p>Day: {day.maxTemp}</p>
                                        <p>Night: {day.minTemp}</p>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            }

        </Layout>
    );
};

export default Location;