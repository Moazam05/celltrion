import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUP(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='popup'
            >
                <Modal.Body className='popup-padding'>
                    <p>Thank you for your interest in the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program.</p>
                    <p>This program is offered by Celltrion USA to provide {props.isVegzelma ? "Vegzelma" : "Yuflyma"}<sup className="reg">&reg;</sup> for as little as
                        $0 for eligible patients. We have reviewed the application and determined that
                        the patient is not eligible to participate in the Celltrion CARES<sup>&trade;</sup> Co-Pay
                        Assistance Program.</p>
                    <p>If the patient's situation changes, please notify the Celltrion CARES<sup>&trade;</sup> Co-Pay
                        Assistance Program and we will be pleased to reassess the request.</p>
                    <p>If you have any questions and would like to further discuss this decision, please
                        don’t hesitate to contact us at 1-877-81CONNC (1-877-812-6662), 8:00 AM-8:00
                        PM EST, Monday-Friday.</p>
                    {/* {JSON.parse(props.content)} */}

                </Modal.Body>
                <Modal.Footer className='popup-footer'>
                    <Button className='theme-btn' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default PopUP

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }
