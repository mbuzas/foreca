import React, { useContext, useEffect, useState } from "react";
import ResultItem from "../../Components/ResultItem";
import Layout from "../Layout";
import axios from "axios";
import "./Home.scss";
import { Search } from "carbon-components-react";
import WeatherContext from "../../Context";

const Home = () => {
    const { searchQuery, setSearchQuery } = useContext(WeatherContext);
    const [searchInput, setSearchInput] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [locations, setLocations] = useState([]);


    const handleOnChange = (e) => {
        const regex = /^[a-zA-Z\s]*$/;
        setSearchInput(e.target.value);
        if (!regex.test(e.target.value)) {
            setAlertMessage("Query supposed to have just strings");
        } else if (e.target.value.length > 30) {
            setAlertMessage("Query supposed to be 30 characters max");
        } else {
            setAlertMessage("");
        }
    };

    const handleSubmit = (e) => {
        if (e.keyCode === 13 && !alertMessage) {
            setSearchQuery(e.target.value);
        }
    };

    const sendSearchKeywordLog = async (searchQuery) => {
        await axios.post("http://localhost:5000/", { searchQuery: searchQuery })
            .catch(function (error) {
                console.log(error);
            });
    };


    useEffect(() => {
        const options = {
            method: "GET",
            url: `https://foreca-weather.p.rapidapi.com/location/search/${searchQuery}`,
            params: { lang: "en", country: "" },
            headers: {
                "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
                "x-rapidapi-key": "0b20c24bc4msh993b29196ffed96p1b64a2jsn2c6a007d9566"
            }
        };

        axios.request(options).then(function (response) {
            setLocations(response.data.locations);
        }).catch(function (error) {
            console.error(error);
        });
        sendSearchKeywordLog(searchQuery);


    }, [searchQuery]);

    return (
        <Layout>

            <Search className="search-input" labelText="search" onKeyDown={handleSubmit} placeholder="Enter location..." value={searchInput} onChange={handleOnChange} />
            <div className="alert">{alertMessage}</div>
            {locations.slice(0, 5).map((location) => {
                return <ResultItem key={location.id} location={location} />;
            })}

        </Layout>
    );
};

export default Home;