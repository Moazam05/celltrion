import React, { useEffect, useRef } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Check from "../../assets/img/check.svg";
import card from "../../assets/img/card.png";
import bevacizumab from "../../assets/img/Color_bevacizumab_adcdHigh.png";
import { useParams, useSearchParams } from 'react-router-dom';
import DownloadPDF from '../../utilities/pdfDownloader';
import yuflymaLogo from "../../assets/img/yuflyma-logo.png"
import cardyuflyma from "../../assets/img/card-yuflyma.png";


const Pharma = (props) => {
    const [searchParams] = useSearchParams();
    const isFirstRender = useRef(false)
    let cardID = localStorage.getItem("cardID");
    const { category } = useParams();
    useEffect(async () => {
        if (isFirstRender.current) {
            const downloadFile = searchParams.get("downloadPDF");
            if (downloadFile === "true") await DownloadPDF('root', 'Instructions.pdf');
            setTimeout(() => {
                window.close();
            }, 500);
        }
        isFirstRender.current = true
    }, []);

    return (
        <>
            <section className='rselection roles-section2'>
                {category === "yuflyma" ?
                    <img src={yuflymaLogo} className="bevacizumab" />
                    : category === "vegzelma" ?
                        <img src={bevacizumab} className="bevacizumab" />
                        : null
                }
                <Container>
                    <Row>
                        <Col>
                            <div className='rselection-wrap role-wrap firstCard firstCardDownload'>
                                <div className='heads-icon'>
                                    <div className='all-set'>
                                        <p className='mainText mt1'>You’re all set!</p>
                                        <p className='mainText mt2'>Congratulations! Your patient is now enrolled in the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program!</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p className='text-center title-saving mainText'>Co-Pay Savings Card Information</p>
                                    <div className='card-wrapper'>
                                        {category === "yuflyma" ?
                                            <img src={cardyuflyma} alt="card" />
                                            : category === "vegzelma" ?
                                                <img src={card} alt="card" />
                                                : null
                                        }
                                        <span className={category === "yuflyma" ? "spanYuflyma" : ""}>{cardID}</span>
                                    </div>
                                    <div className='button-holders'>

                                        <Button className='theme-button theme-button-text secondary-color font-14 fw-medium' type='submit'>
                                            INSTRUCTIONS FOR USE
                                        </Button>
                                    </div>
                                </div>

                                <div className='font-14'>
                                    <p className='font-16 fw-medium'>PHARMACY CLAIMS PROCESSING:</p>
                                    <p>When you use this card, you are certifying that you have not submitted and will not submit a claim for reimbursement under any federal, state or other governmental programs for this prescription.</p>
                                    <ul>
                                        <li>Submit transaction to RxC Acquisition Company d/b/a RxCrossroads by McKesson using BIN #610524</li>
                                        <li>If primary commercial prescription insurance exists, input card information as secondary coverage and transmit using the COB segment of the NCPDP transaction. Applicable discounts will be displayed in the transaction response.</li>
                                        <li>Acceptance of this card and your submission of claims for the Copay Program are subject to the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program Terms and Conditions posted at www.mckesson.com/mprstnc</li>
                                        <li>Patient is not eligible if prescriptions are paid in part or full by any state or federally funded programs, including but not limited to Medicare or Medicaid, Medigap, VA, DOD or TriCare and where prohibited by law.</li>
                                        <li>The Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance card is not valid for use with any other prescription drug discount or cash cards. Claims submitted utilizing the program are subject to audit or validation.</li>
                                    </ul>

                                    <p>For questions regarding setup, claim transmission, patient eligibility or other issues, call the Celltrion CARES<sup>&trade;</sup> Co-Pay Program at <span className='fw-medium'>1-877-81CONNC (1-877-812-6662)</span>, 8:00 AM-8:00 PM EST, Monday - Friday.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* </div> */}
                </Container>
            </section>
        </>
    )
}

export default Pharma