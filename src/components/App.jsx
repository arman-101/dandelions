import "../styles/App.css";
import Header from "./Header";
import List from "./List";
import Map from "./Map";
import Footer from "./Footer";
import Input from "./Input";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import locations from "../data/locations.json";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedLocation) {
      setSelectedLocation(location.state.selectedLocation);
    } else {
      setSelectedLocation(null);
    }
  }, [location.state]);

  return (
    <div className="bg-myDarkPink min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Input onSelect={setSelectedLocation} />
              <Map selectedLocation={selectedLocation} />
            </>
          }
        />
        <Route
          path="/list"
          element={
            <List
              locations={locations}
              onSelectLocation={(loc) => {
                setSelectedLocation(loc);
                // Optional: Clear location state if you want to prevent pin reset on back navigation
                // but your navigation logic in List component should handle that well.
              }}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
