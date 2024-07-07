import { Link } from 'react-router-dom';

function NavBar(){
return(
  <nav className="navbar navbar-expand-lg fixed-top navbar-scroll mx-3">
    <div className="container-fluid">
      <a href="/"className="navbar-brand keania-one-regular">Valoplay</a>
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
   <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      More
    </a>
    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
      <li><a className="dropdown-item" href="/maps">MAPS</a></li>
      <li><a className="dropdown-item" href="/lineups">LINEUPS</a></li>
      <li><a className="dropdown-item" href="/setups">SETUPS</a></li>
    </ul>
  </li>
</ul>
    </div>
    </div>
</nav>
    );
}
export default NavBar;

