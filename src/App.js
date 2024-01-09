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
        <br />
        <br />
        <footer>
          This project was created by Anna N. TYmoshenko,{" "}
          <a
            href="https://github.com/AnnaNatali/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-soursed on Github
          </a>
        </footer>
      </div>
    </StrictMode>
  );
}
