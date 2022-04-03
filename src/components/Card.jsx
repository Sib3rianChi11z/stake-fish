export default function Card({ props }) {
  return (
    <div
      className="card text-dark bg-light mb-3"
      style={{ width: "18rem", margin: "1rem" }}
    >
      <img src={props.image} className="card-img-top cardImage" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Trust Rank: #{props.trust_score_rank}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-light">
          Country of Origin: {props.country ? props.country : "Unknown"}
        </li>
      </ul>
      <div className="card-body">
        <a href={"/exchanges/" + props.id} className="card-link">
          More Details
        </a>
        <a href={props.url} className="card-link">
          Go to Exchange
        </a>
      </div>
    </div>
  );
}

//The main page should be a list with the first ten exchanges with some high-level information (name, country, URL, logo, trust rank).

// country: "Cayman Islands"
// description: ""
// has_trading_incentive: false
// id: "binance"
// image: "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"
// name: "Binance"
// trade_volume_24h_btc: 515054.76128086686
// trade_volume_24h_btc_normalized: 515054.76128086686
// trust_score: 10
// trust_score_rank: 1
// url: "https://www.binance.com/"
// year_established: 2017
