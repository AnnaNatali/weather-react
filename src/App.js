import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export default function App() {
  return root.render(
    <StrictMode>
      <div className="App">
        <div>
          <h1>Weather Search Engine</h1>
          <WeatherSearch />
        </div>
      </div>
    </StrictMode>
  );
}
