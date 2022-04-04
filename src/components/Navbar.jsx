export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <img
          src="https://stake.fish/static/do-logo-1ccb418d9555c83468c4b0957427c603.png"
          alt=""
          height="40"
          className="d-inline-block align-text-top"
        />
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
      </div>
    </nav>
  );
}
