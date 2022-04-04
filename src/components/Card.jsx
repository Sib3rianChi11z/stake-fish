export default function Card({ props }) {
  return (
    <div className="card cardMain text-dark bg-light mb-3">
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
