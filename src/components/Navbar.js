import React from 'react'
import Girl from './Images/Girl.png';
import Bell from './Images/Bell.png';
function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand ms-3" href="javascript:void(0)"><img className='logo' src='https://consultme.bg/wp-content/uploads/2020/09/payvoo_logo.png' alt='logo' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
          </ul>
          <li>
            <a class="navbar-brand" href="#">
              <img src={Bell} alt="bell" className='bell'/>
            </a>
          </li>
          <li>
            <a class="navbar-brand" href="#">
              <img src={Girl} alt="profile" className='profile'/>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Laura johnson</a>
          </li>
        </div>
      </div>
    </nav>
  )
}
export default NavBar