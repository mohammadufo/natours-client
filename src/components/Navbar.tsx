import LogoImg from '../assets/img/logo-white.png'
import UserImg from '../assets/img/users/default.jpg'
import SearchIcon from '@mui/icons-material/Search'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="#" className="nav__el">
          All tours
        </a>
        <form className="nav__search">
          <button className="nav__search-btn">
            {/* <svg>
              <use xlink:href="img/icons.svg#icon-search"></use>
            </svg> */}
            <SearchIcon />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src={LogoImg} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <a href="#" className="nav__el">
          My bookings
        </a>
        <a href="#" className="nav__el">
          <img src={UserImg} alt="User photo" className="nav__user-img" />
          <span>Jonas</span>
        </a>

        {/* <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>  */}
      </nav>
    </header>
  )
}

export default Navbar
