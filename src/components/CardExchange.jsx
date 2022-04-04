//This is a card for the second page with conditional statements for Social Media, Description, Year and Country of Origin because that information is not available for all the exchanges.
export default function CardExchange({ props }) {
  return (
    <div className="card  bg-light cardExchange mb-3">
      {console.log(props)}
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            className="img-fluid card-img rounded-start cardImage"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <a className="card-title h5" href={props.url}>
              {props.name}
            </a>
            <p className="card-text">
              Description:{" "}
              {props.description
                ? props.description
                : "Description not available."}
            </p>
            <div className="card-text">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  Trust Rank: #{props.trust_score_rank}
                </li>
                <li className="list-group-item bg-light">
                  Country of Origin: {props.country ? props.country : "Unknown"}
                </li>
                <li className="list-group-item bg-light">
                  Year Established:{" "}
                  {props.year_established ? props.year_established : "N/A"}
                </li>
                <li className="list-group-item bg-light"></li>
              </ul>
              {props.facebook_url && (
                <a className="facebook" href={props.facebook_url} role="button">
                  <img
                    className="socialLink"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
                    alt=""
                  />
                </a>
              )}
              {props.reddit_url && (
                <a className="reddit" href={props.reddit_url} role="button">
                  <img
                    className="socialLink"
                    src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?width=640&crop=smart&auto=webp&s=bfd318557bf2a5b3602367c9c4d9cd84d917ccd5"
                    alt=""
                  />
                </a>
              )}
              {props.telegram_url && (
                <a className="telegram" href={props.telegram_url} role="button">
                  <img
                    className="socialLink"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    alt=""
                  />
                </a>
              )}
              {props.twitter_handle && (
                <a
                  className="twitter"
                  href={"https://twitter.com/" + props.twitter_handle}
                  role="button"
                >
                  <img
                    className="socialLink"
                    src="https://www.torqlite.com/wp-content/uploads/2017/02/60414c58e954d7236837248225e0216f_new-twitter-logo-vector-eps-twitter-logo-clipart_518-518.png"
                    alt=""
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
