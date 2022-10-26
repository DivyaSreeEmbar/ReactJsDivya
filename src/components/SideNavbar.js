import React from 'react';
import Analytics from './Images/Analytics.png';
import Payments from './Images/Payments.png';
import Cards from './Images/Cards.png';
import Settings from './Images/Settings.png';
import Accounts from './Images/Accounts.png';
import NavBar from './Navbar';
function SideNavbar() {
    return (
        <div className='sidenavbar mt-0'>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='side'>
                        <ul>
                            <li><a class="active" href="#home"><img src={Accounts} />Accounts</a></li>
                            <li><a href="#news"><img src={Analytics} />Analytics</a></li>
                            <li><a href="#contact"><img src={Payments} />Payments</a></li>
                            <li><a href="#about"><img src={Cards} />Cards</a></li>
                            <li><a href="#about"><img src={Settings} />Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideNavbar