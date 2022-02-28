import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home";
import Location from "./Pages/Location";
import WeatherContext from "./Context";
import { useState } from "react";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationName, setLocationName] = useState([]);
  const dbUrl = "http://localhost:5000";

  const getRandom = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const initialState = {
    selectedLocation: selectedLocation,
    setSelectedLocation,
    searchQuery: searchQuery,
    setSearchQuery,
    locationName: locationName,
    setLocationName,
    dbUrl,
    getRandom
  };

  return (
    <WeatherContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </WeatherContext.Provider>
  );
}
export default App;
