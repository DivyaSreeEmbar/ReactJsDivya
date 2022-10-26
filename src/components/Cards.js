import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import Remove from './Images/Remove.png'
import Exchange from './Images/Exchange.png'
import Bell from './Images/Bell.png'
function Cards() {
    return (
        <div>
            <b class="bi bi-arrow-left">  Exchange</b><br></br>
            Accounts/Exchange
            <div className="container-fluid">
                <div class="row">

                    <div className="col-md-7 col-lg-7 col-7">
                        <div class="card">

                            <div class="card-body"></div>
                            <div class="row">
                                    <div class="col">
                                        <button type="button" class="navbutton"> Rates</button>
                                        <div className='Rates'><hr></hr></div>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="navbutton" >Convert</button>
                                        <div className='Convert'><hr></hr>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="navbutton">Action</button>
                                        <div className='Action'><hr></hr>
                                        </div>
                                    </div>
                                </div>
                          
                       

                            <div className='AddAction'>
                                <div class="Addblue">
                                    <h5 class="bi bi-plus-circle-fill" style={{ color: "#246BAD" }}>
                                        Add currency Pair
                                    </h5>
                                    <br />

                                </div>
                            </div>
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
                                    <small> British Pound - GBP </small> <img src={Remove}></img>
                                </div>
                                <div><hr></hr></div>
                            </div>
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

                            <hr></hr>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                    <div className='col-md-5 col-lg-5 col-5'>
                        <div class="card">
                            <div class="card-body">

                                <button type="button" class="btn  bg-transparent btn-lg btn-block"><h6>Exchange currency</h6> </button>
                                <div><h6>EUR</h6></div>


                                <small>Balance: € 0.00</small>
                                <div className='col-6'>

                                </div>
                                <div className='row euro'>
                                    <div className='col-6'>

                                        <i class="bi bi-arrow-down-up"></i>
                                    </div>
                                    <div className='col-6'>
                                        <center><h6>0</h6></center> <hr></hr>
                                    </div>
                                </div>
                                <div className='balance'>

                                    <div class="dropdown show">
                                        <a class="btn  bg-transparent btn-lg btn-block" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            USD
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-6'>
                                            Balance: $ 0.00
                                        </div>
                                        <div className='col-6'>
                                            <center><h6>0</h6></center> <hr></hr>
                                        </div>
                                    </div>
                                </div>

                                <div className='row exchange'>
                                    <div className='col-6'>

                                    </div>
                                    <div className='col-6'>

                                        <button type="button" class="btn btn-warning">Exchange</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="card">
                            <div class="card-body">
                                <div className='AutoExchange'>
                                    <div className='row'>
                                        <div className='col-2'>


                                            <img src={Exchange} style={{ backgroundColor: "#2A3477", width: "50px" }}></img></div>

                                        <div className='col-10'>
                                            Auto Exchange
                                            <h6>Exchange currencies when they hit a certain value</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div class="card">
                            <div class="card-body">
                                <div className='AutoExchange'>
                                    <div className='row'>
                                        <div className='col-2'>

                                            <img src={Bell} style={{ backgroundColor: "#2A3477" }}></img>
                                        </div>

                                        <div className='col-10'>
                                            Price Alert
                                            <h6>We'll let you know when that currency this that value</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards
