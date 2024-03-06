import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ExitTerms(props) {
    const { externalLink } = props;
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
                    <div style={{ textAlign: "center" }}>
                        <h3>You are now leaving CelltrionCARES.com</h3>
                        <p style={{ paddingTop: "20px" }}>Please click "OK" if you with to continue, or click "cancel."</p>
                    </div>
                    
                    {/* {JSON.parse(props.content)} */}

                </Modal.Body>
                <Modal.Footer className='popup-footer'>
                    <Button className='theme-btn' onClick={() => { window.open(externalLink, "_blank"); props.onHide() }}>Ok</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='theme-btn' onClick={props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default ExitTerms

