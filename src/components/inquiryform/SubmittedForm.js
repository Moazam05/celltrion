import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Check from "../../assets/img/check.svg";
import card from "../../assets/img/card.png";
import cardyuflyma from "../../assets/img/card-yuflyma.png";
import bevacizumab from "../../assets/img/Color_bevacizumab_adcdHigh.png"
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import yuflymaLogo from "../../assets/img/yuflyma-logo.png"

const SubmittedForm = ({ data }) => {
    const [role, setRole] = useState("");
    const [searchParams] = useSearchParams();
    const { category } = useParams();

    let cardID = data.cardID[0];
    const passedRole = searchParams.get("role");
    const roleName = passedRole.charAt(0).toUpperCase() + passedRole.slice(1);
    localStorage.setItem("cardID", cardID);
    useEffect(() => {
        const passedRole = searchParams.get("role");
        if (passedRole) { setRole(passedRole); }
    }, [role]);


    return (
        <section className='rselection roles-section2'>
            {category === "yuflyma" ?
                <img src={yuflymaLogo} className="bevacizumab" />
                : category === "vegzelma" ?
                    <img src={bevacizumab} className="bevacizumab" />
                    : null
            }
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8} xl={6}>
                        <div className='rselection-wrap role-wrap firstCard'>
                            <div className='heads-icon'>
                                <div className='hi-icon me-4'>
                                    <img src={Check} />
                                </div>
                                <div className='all-set'>
                                    <p className='mainText mt1'>{roleName} Enrollment</p>
                                    <p className='mainText mt1'>You’re all set!</p>
                                    <p className='fw-medium mt2'>Congratulations! Your patient is now enrolled in the
                                        Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program!</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-center title-saving font-16 fw-medium'>Co-Pay Savings Card Information</p>
                                <div className='card-wrapper'>
                                    {category === "yuflyma" ?
                                        <img src={cardyuflyma} alt="card" />
                                        : category === "vegzelma" ?
                                            <img src={card} alt="card" />
                                            : null
                                    }
                                    <span className={category === "yuflyma" ? "spanYuflyma" : "" }>{cardID}</span>
                                </div>
                                <div className='button-holders'>
                                    <Link to={`/${role === "prescriber" ? "download-pdf" : "pharma-pdf"}/${category}?downloadPDF=true`} target="_blank" className='theme-btn theme-button theme-button-primary'>
                                        DOWNLOAD DETAILS
                                    </Link>
                                    <Button className='theme-button theme-button-text secondary-color fw-medium'>
                                        INSTRUCTIONS FOR USE
                                    </Button>
                                </div>
                            </div>


                            {role === "prescriber" ?
                                <div className='font-14'>
                                    <p className='font-16 fw-medium'> MEDICAL BENEFIT CO-PAY CLAIM ADJUDICATION:</p>
                                    <p>Once you have received the primary EOB from your patient’s insurance provider, please follow the steps listed below for submitting claims:</p>
                                    <p> Please submit the following documents via fax to <a href="tel:1-844-806-1719">844-806-1719</a> or the following website: <a href='#'>https://copayhelp.mckesson.com</a></p>
                                    <ul>
                                        <li>Completed claim form (Universal, UB or CMS-1500 Claim Form).</li>
                                        <li>Primary Explanation of Benefits (EOB) showing itemized claim from the patient’s private insurance company with the cost for each NDC listed separately.</li>
                                    </ul>
                                    <p>Your office will receive reimbursement of the patient’s applicable copay or coinsurance as determined by the Program Terms and Conditions. Please allow 7-10 business days for receipt of payment. Your office will collect patient out-of-pocket responsibility, based on the program benefit design. You are responsible for</p>
                                    <p className='font-16 fw-medium'>PHARMACY CLAIMS PROCESSING:</p><p> When you use this card, you are certifying that you have not submitted and will not submit a claim for reimbursement under any federal, state or other governmental programs for this prescription.</p>

                                    <ul>
                                        <li>Submit transaction to RxC Acquisition Company d/b/a RxCrossroads by McKesson using BIN #610524</li>
                                        <li>If primary commercial prescription insurance exists, input card information as secondary coverage and transmit using the COB segment of the NCPDP transaction. Applicable discounts will be displayed in the transaction response.</li>
                                        <li>Acceptance of this card and your submission of claims for the Copay Program are subject to the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program Terms and Conditions posted at www.mckesson.com/mprstnc</li>
                                        <li>Patient is not eligible if prescriptions are paid in part or full by any state or federally funded programs, including but not limited to Medicare or Medicaid, Medigap, VA, DOD or TriCare and where prohibited by law.</li>
                                        <li>The Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance card is not valid for use with any other prescription drug discount or cash cards. Claims submitted utilizing the program are subject to audit or validation.</li>
                                    </ul>
                                    <p>For questions regarding setup, claim transmission, patient eligibility or other issues, call the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program at <span className='fw-medium'>877-81CONNC (877-812-6662)</span>, 8:00 AM-8:00 PM EST, Monday - Friday.</p>
                                </div>
                                :
                                <div className='font-14'>
                                    <p className='font-16 fw-medium'> PHARMACY CLAIMS PROCESSING:</p>
                                    <p>When you use this card, you are certifying that you have not submitted and will not submit a claim for reimbursement under any federal, state or other governmental programs for this prescription.</p>
                                    <ul>
                                        <li>Submit transaction to RxC Acquisition Company d/b/a RxCrossroads by McKesson using BIN #610524</li>
                                        <li>If primary commercial prescription insurance exists, input card information as secondary coverage and transmit using the COB segment of the NCPDP transaction. Applicable discounts will be displayed in the transaction response.</li>
                                        <li>Acceptance of this card and your submission of claims for the Copay Program are subject to the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program Terms and Conditions posted at www.mckesson.com/mprstnc</li>
                                        <li>Patient is not eligible if prescriptions are paid in part or full by any state or federally funded programs, including but not limited to Medicare or Medicaid, Medigap, VA, DOD or TriCare and where prohibited by law.</li>
                                        <li>The Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance card is not valid for use with any other prescription drug discount or cash cards. Claims submitted utilizing the program are subject to audit or validation.</li>
                                    </ul>

                                    <p>For questions regarding setup, claim transmission, patient eligibility or other issues, call the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program at <span className='fw-medium'>1-877-81CONNC (1-877-812-6662)</span>, 8:00 AM-8:00 PM EST, Monday - Friday.</p>
                                </div>

                            }







                        </div>
                    </Col>

                </Row>
                {/* </div> */}
            </Container>
        </section>
    )
}

export default SubmittedForm