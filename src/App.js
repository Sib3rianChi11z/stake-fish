import './App.css';
import { Link } from "react-router-dom"
import { getTopExchanges } from "./api/coingecko"
import { useEffect, useState } from "react"
import Card from "./components/Card.jsx"

function App() {
  const [exchanges, setExchanges] = useState()

  //Get call trigger for top 10 exchanges and setting them into state.
  useEffect(() => {
    getTopExchanges().then((response) => setExchanges(response)).catch()
  }, []);

  //Mapping the data from Array, passing each through props and  returning them with a card on front page
  function exchangeCards() {
    return exchanges.map((item, i) => {
      return <Card key={item.id} props={item} />
    })
  }

  return (
    <div className="App">
      <h1>Top 10 Crypto Exchanges</h1>
      <div className="cardContainer">{exchanges && exchangeCards()}</div>
      <Link to="/exchanges">Exchanges</Link>
    </div>
  );
}

export default App;
