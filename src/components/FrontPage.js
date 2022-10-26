import React from 'react'
import Bell from './Images/Bell.png';
import Girl from './Images/Girl.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './SideNav';
function FrontPage() {
  return (
    <div>
      <div className="App">
        
        <div className="container-fluid">
          <div className='nav'>
            <div className='col-md-3'>
              <img src="https://consultme.bg/wp-content/uploads/2020/09/payvoo_logo.png" alt="logo" height="60px" width="180"></img>
            </div>
            <div className='col-md-6'>
            </div>
            <div className='col-md-3'>
              <div className='row'>
                <div className='col-md-4 col-sm-4'><img src={Bell} /></div>
                <div className='col-md-2 col-sm-4' ><img src={Girl}></img></div>
                <div className='col-md-6 col-sm-4'>
                  <label>Laura Johnson</label>
                  <select>
                    <option></option>
                    <option>hi</option>
                    <option>hi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
      <SideNav/>
        </div>
            
      </div>
    </div>

  )
}

export default FrontPage
