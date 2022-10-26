import React from 'react'
import Accounts from './Images/Accounts.png'
import Analytics from './Images/Analytics.png'
import Cards from './Images/Cards.png'
import Settings from './Images/Settings.png'
function SideNav() {
  return (
    <div>
      <div className='container-fliuid'>
      <div className='row'>
      <div className='col-md-2' >
      
     
      <div className='left'>
     
     
        <div className='Accounts'> <img src={Accounts}></img>Accounts </div>
     
        <div className='Analytics'> <img src={Analytics}></img>Analytics </div>

        <div className='Cards'><img src={Cards}></img> Cards  </div>
       
        <div className='Settings'><img src={Settings}></img> Settings </div>
        </div>
        </div>
        </div>
     </div>
     </div>


    
    
  )
}

export default SideNav
