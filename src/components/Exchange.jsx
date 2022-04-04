import { useEffect, useState } from "react";
import { getExchangeById } from "../api/coingecko";
import CardExchange from "./CardExchange";

export default function Exchange() {
  const [exchange, setExchange] = useState();

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getExchangeById(id)
      .then((response) => setExchange(response))
      .catch();
  }, []);

  function exchangeCard() {
    return <CardExchange props={exchange} />;
  }

  return (
    <div className="App">
      <div className="title">Top 10 Crypto Exchanges</div>
      <div className="exchangeCard">{exchange && exchangeCard()}</div>
    </div>
  );
}
