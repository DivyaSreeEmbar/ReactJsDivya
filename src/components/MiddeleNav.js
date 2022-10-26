import React from 'react'
import { Card } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import Remove from './Images/Remove.png'
import { TypeH1 } from 'react-bootstrap-icons';
function MiddeleNav() {
  return (
    <div>
      <div>
        <div className='col-md-8'>
          <div>
            <b class="bi bi-arrow-left">  Exchange</b><br></br>
            Accounts/Exchange
          </div>
          <Card>
            <div class="container">
              <div class="row">
                <div class="col">
                  <button type="button" class="btn  bg-transparent btn-lg btn-block"> Rates</button>
                </div>
                <div class="col">
                  <button type="button" class="btn bg-transparent btn-lg btn-block" >Convert</button>
                </div>
                <div class="col">
                  <button type="button" class="btn bg-transparent btn-lg btn-block">Action</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h6>Eur</h6>
                  Euro
                </div>
                <div class="col">
                  <h1 class="bi bi-clouds"></h1>
                </div>
                <div class="col">
                  <h6>0.91</h6>
                  British Pound - GBP <img src={Remove}></img>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h6>Eur</h6>
                  Euro
                </div>
                <div class="col">
                  <h1 class="bi bi-clouds"></h1>
                </div>
                <div class="col">
                  <h6>1.11</h6>
                  US Dollar - USD<img src={Remove}></img>
                </div>
              </div>
            </div>


          </Card>
        </div>
      </div>
      <div>
        <div className='col-md-4'>
          <Card>
            <button type="button" class="btn  bg-transparent btn-lg btn-block"><h6>Exchange currency</h6> </button>
            <h6>EUR</h6>
            <small>Balance: € 0.00</small>
            <br></br>
            <i class="bi bi-arrow-down-up"></i>€1 = $1.2162
          </Card>
        </div>
         

      </div>
  
         
    </div>
  )
}

export default MiddeleNav
