import { Button, Column, Row } from "carbon-components-react";
import React, { useContext } from "react";
import "./ResultItem.scss";
import { Location32 } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import WeatherContext from "../../Context";

const ResultItem = ({ location }) => {
    const { setSelectedLocation, setLocationName } = useContext(WeatherContext);
    const handleOnClick = () => {
        setSelectedLocation(location.id);
        setLocationName(location.name);
    };

    return (
        <article className="result-item">
            <Row condensed>
                <Column>
                    <Location32 />
                </Column>
                <Column>
                    <span className="bold"> {location.name}</span>
                </Column>
                <Column>
                    {location.country}
                </Column>
                <Link to="/location">
                    <Button onClick={handleOnClick}>See Forecast</Button >
                </Link>
            </Row>
        </article >
    );
};

export default ResultItem;