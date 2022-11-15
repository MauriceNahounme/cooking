import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/Card";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [seach, setSeach] = useState("");

  const fetchMeals = () => {
    axios({
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato",
    })
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSeach(e.target.value);

    axios({
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + seach,
    }).then((res) => {
      setMeals(res.data.meals);
    });
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h2 className="title">Cooking app</h2>
        <input
          type="text"
          placeholder="Taper le nom d'un aliment (en anglais)"
          onChange={handleSearch}
        />
      </div>

      <p style={{ textAlign: "center" }}>{meals.length} résultats trouvés</p>

      <div className="meal">
        {meals.map((meal, index) => (
          <Card key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
