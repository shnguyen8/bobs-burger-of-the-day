import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [burgerData, setBurgerData] = useState({});
  const [dayOfTheYear, setDayOfTheYear] = useState(1);

  const dayOfYear = (date) =>
    Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    ) % 332;

  useEffect(() => {
    setDayOfTheYear(dayOfYear(new Date()));
    axios
      .get(
        `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${dayOfTheYear}`
      )
      .then((res) => {
        setBurgerData(res.data);
      });
  }, [dayOfTheYear]);

  return (
    <div className="App">
      <h1>Bob's Burger of the Day</h1>
      <hr />
      <h1>{burgerData.name}</h1>
      <h1 style={{ color: "green" }}>{burgerData.price}</h1>
    </div>
  );
}

export default App;
