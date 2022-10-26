import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import logo1 from './Images/Remove.png';
import mastercard from './Images/mastercard.png';
import './Page11.css'


import Bank from './Images/bank.png';
function Page11() {


    const carddata=[
        {
            "CardNumber": "**** **** **** 6547",
            "CardName":"Expresso Bank Limited"
        },
    ]

    const [isShow, invokeModal] = useState(false)

    const initModal = () => {

        return invokeModal(!false)
    }
    return (
        <div>
            <div className='Slide9'>
      <a class="navbar-brand"><i class="bi bi-arrow-left"></i>Add Money</a>
      <p>Accounts/Add Money</p>
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4">
          <div class="card 1">
            <div class="card-body">
              <h5 class="card-title">How would you like to add money?</h5>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button"><i class="bi bi-plus-circle-fill"></i>Add debit or credit card</button>
                <button class="btn btn-light" type="button"><i class="bi bi-bank"></i>Transfer to your PayVoo account</button>
                
                <div class="card add bank2">
                  <div class="card-body2">
                    <div className='cardnumber'>Card number</div>
                    <div className='info'><i class="bi bi-info-circle"></i></div>
                    <div className='num'>**** **** **** 6942</div>
                    <div className='bank'>Trailer Bank Ltd</div>
                    <div className='master'><img src={mastercard} /></div>
                  </div>
                </div>
                <div class="card add bank3">
                  <div class="card-body3">
                    <div className='cardnumber'>Card number</div>
                    <div className='info'><i class="bi bi-info-circle"></i></div>
                    <div className='num'>**** **** **** 9872</div>
                    <div className='bank'>Yugestasto bank</div>
                    <div className='master'><img src={mastercard} /></div>
                  </div>
                </div>
                <dialog open className='modalcheck' >
                    <div className="image">
                    <img src={logo1} width="31px" ></img>
                </div>
                <p style={{marginLeft:"59px"}}> Expresso bank LTD  <small>Mastercard *6854</small></p>
                        <p style={{marginLeft:"59px"}}>This card has been deleted</p>
                        <Button  className=" wow" variant="warning" onClick={initModal}>
                             Done
                        </Button>
                    </dialog>
              </div>
            </div>
          </div>
        </div>
        </div></div>

        </div>
    )
}

export default Page11
