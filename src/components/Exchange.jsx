import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExchangeById } from "../api/coingecko";
import CardExchange from "./CardExchange";

//Get the id from the url you can use history or window.location.pathname

export default function Exchange() {
  const [exchange, setExchange] = useState();

  // useEffect(() => {
  //   const id = window.location.pathname.split("/")[2];
  //   console.log(id);
  //   const a = getExchangeById(id)
  //     .then((a) => setExchange(a))
  //     .catch();
  // }, []);

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getExchangeById(id)
      .then((response) => setExchange(response))
      .catch();
  }, []);

  function exchangeCard() {
    return <CardExchange props={exchange} />;
  }

  // function exchangeCards() {
  //   console.log(exchange);

  //   return (
  //     <div>
  //       <CardExchange />
  //       <div key={exchange.name} className="float-container">
  //         <div className="image-container">
  //           {" "}
  //           <a href={exchange.url}>
  //             <img src={exchange.image} alt="descriptive text" />
  //           </a>
  //         </div>
  //         <div class="float-child">
  //           <a href={"/exchanges/" + exchange.id}>{exchange.name}</a> <br />
  //           Country: {exchange.country} <br />
  //           Trust Rank: {exchange.trust_score_rank} <br />
  //           Year of Establishment: {exchange.year_established}
  //           <br />
  //           <a href={exchange.facebook_url}>{exchange.facebook_url}</a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <div className="title">Top 10 Crypto Exchanges</div>
      <div className="exchangeCard">{exchange && exchangeCard()}</div>
    </div>
  );
}
