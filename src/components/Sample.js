import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useBootstrapMinBreakpoint } from 'react-bootstrap/esm/ThemeProvider'
import logo1 from './Images/Remove.png'

function Sample() {

    const [isShow, invokeModal] = useState(false)

    const initModal = () => {

        return invokeModal(!false)

    }
    return (
        <div>
            <Button variant="success" onClick={initModal}>

                Open Modal

            </Button>
            <dialog open className='modalcheck' >
            <Modal show={isShow}>
                <div className="ModelCenter">
                    <Modal.Header closeButton onClick={initModal}>
                        <img src={logo1} alt="remove" style={{margin_left:"50px"}}/>
                        {/* <Modal.Title>React Modal Popover Example</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>

                        <h6>Expresso bank LTD </h6>
                        <small>Mastercard *6854</small>
                        <br />
                        <p>This card has been deleted</p>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="danger" onClick={initModal}>

                            Done

                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
            </dialog>
           
        </div>
    )
}

export default Sample
