import React from 'react'
import { Card } from 'react-bootstrap'
function Rightbar() {
  return (
    <div >
      <Card>
      <button type="button" class="btn  bg-transparent btn-lg btn-block"><h6>Exchange currency</h6> </button>
      <h6>EUR</h6>
      <small>Balance: € 0.00</small>
      <br></br>
        <div class="row">
          <div class="col">

            <i class="bi bi-arrow-down-up"></i>         €1 = $1.2162
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Rightbar
