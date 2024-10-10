
import React from 'react'
import Logo from '../assets/logo.png'
import LangSwitcher from './LangSwitcher'
import ThemeSwitcher from './Switcher'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-scroll'


function Navbar({ t }) {


  const menuItem = (label, sender) => {
    return (
      <div>
        <Link >
          <p>{t()}</p>
        </Link>
      </div>
    )
  }

  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>m</li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <img className='w-24 h-24' src={Logo} alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1"> {t('settings')} </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><LangSwitcher /></li>
            <li><ThemeSwitcher /></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default withTranslation()(Navbar)