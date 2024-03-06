import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import CelltrionCare from './popup/celltrionCare'
import Terms from './popup/termsOfUse'
import ExitPrivacy from './popup/exitPrivacy'
// images
import WLogo from '../assets/img/logo-white.png'
import CelltrionLogo from '../assets/img/celltrion.png'



const Footer = () => {
    const [modalShow, setModalShow] = useState(false);
    const [exitPrivacy, setExitPrivacy] = useState(false);
    const [terms, setTerms] = useState(false);
    const { category } = useParams();
    const isVegzelma = window.location.href.includes("vegzelma");

    return (
        <>
            <CelltrionCare
                show={modalShow}
                onHide={() => setModalShow(false)}
                isVegzelma={isVegzelma}
            />

            <ExitPrivacy
                show={exitPrivacy}
                externalLink="https://www.celltrionconnect.com/patient-privacy-policy"
                onHide={() => setExitPrivacy(false)}
            />

            <Terms
                show={terms}
                onHide={() => setTerms(false)}
            />

            <footer className='footer'>
                <Container>
                    <div className='footerT'>
                        <img src={WLogo} alt="logo" />
                        <img src={CelltrionLogo} alt="logo" />
                    </div>
                </Container>
                <Container>
                    <div className='footerB'>
                        <div style={{ lineHeight: 1.5 }}>Celltrion product and service names used on this website are the respective trademarks of </div>
                        <div style={{ lineHeight: 1.5 }}>Celltrion Inc. and Celltrion Holdings, Co., Ltd., used under license by Celltrion USA, Inc.</div>                        
                        <div className='footerB-info'>
                            <div className='footerB-item'>
                                <p><strong>&copy;Celltrion USA, Inc.</strong> • 1 Evertrust Plaza, Suite 1207, Jersey City, NJ 07302-3087</p>
                            </div>
                            <div className='footerB-item'>
                                <a href='tel:8778126662'><strong>Contact us at 877-81CONNC (877-812-6662)</strong></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onClick={() => setExitPrivacy(true)}>Privacy Policy</a> • <a href="javascript:void(0)" onClick={() => setModalShow(true)}>Terms and Conditions</a>&nbsp;&nbsp;&nbsp;&nbsp;OTH-2304-2403-WS001
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>

        </>
    )
}

export default Footer