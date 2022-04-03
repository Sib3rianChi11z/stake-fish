export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            //src="https://stake.fish/static/colored-logomark-1504e9fc997f395708c7c453591666c1.png"
            src="https://stake.fish/static/do-logo-1ccb418d9555c83468c4b0957427c603.png"
            alt=""
            // width="60"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link home active mb-0"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
        </ul>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link home active mb-0"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
