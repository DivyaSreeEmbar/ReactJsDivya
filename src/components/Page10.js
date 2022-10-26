
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Page10() {
    const [isShow, invokeModal] = useState(false)

    const initModal = () => {

        return invokeModal(!false)

    }
    return (
        <div className='align'>
            <Button variant="success" onClick={initModal}>

                Open Modal

            </Button>

            <Modal show={isShow}>
                <div className="ModelCenter">

                    <Modal.Body>
                        <h4 className="Heading">Debit Card?</h4>
                        <p>This card will be removed from your top-up methods  </p>
                        {/* <small>Mastercard *6854</small> */}
                        <br />
                        {/* <p>This card has been deleted</p> */}
                    </Modal.Body>
                    <div className>
                        <div class="row g-2 mt-6">
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-danger" >
                                    Skip
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-danger">
                                    Add Money
                                </button>
                            </div><br /><br /><br />
                        </div>
                    </div>

                </div>
            </Modal>
           
        </div>
    )
}

export default Page10
