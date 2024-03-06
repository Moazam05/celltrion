import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Celltrion(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='popup'
            >
                {props.isVegzelma && 
                    <Modal.Body className='popup-padding'>
                    <div className='txt-just'>
                        <p>Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program:</p><p className='lhight'>Definition, Rules and Eligibility, and Terms and Conditions</p>

                        <p className='lhight2'>1. Definition</p>
                        <div className='pl-17 mt-15'>The Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program allows eligible commerically insured patients to receive up to $25,000 of co-pay assistance per calendar year. Eligible commerically insured patients may pay as little as $0 for VEGZELMA<sup className="reg">&reg;</sup> (bevacizumab-adcd). </div>

                        <p className='lhight2'>2. Rules and Eligibility</p>
                        <div className='pl-17 mt-15'><div className='mb10'>To be eligible for Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program, patients must:</div>
                            <div className='mt10'>a)<div className='custli'>Have commercial insurance</div></div>
                            <div className='mt10'>b)<div className='custli'>Not have Medicare, Medicaid, or other government insurance</div></div>
                            <div className='mt10'>c)<div className='custli'>Meet the criteria listed in the Terms and Conditions for the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program</div></div>
                        </div>

                        <p className='lhight2'>3. Terms and Conditions</p>
                        <div className='pl-17 mt-15'> • <div className='custli'>To qualify for Co-Pay Assistance Program benefits, the patient must enroll in the program and meet the following eligibility requirements:</div>
                            <div className='pl-30 mt10'> - <div className='custli'>Patient must have private/commercial health insurance that provides coverage for the cost of VEGZELMA<sup className="reg">&reg;</sup>.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Patients do not qualify if they are covered, in whole or in part, under Medicaid (including Medicaid patients enrolled in a qualified health plan purchased through a health insurance exchange [marketplace] established by a state government or the federal government), Medicare, a Medicare Part D or Medicare Advantage plan (regardless of whether a specific prescription is covered), TRICARE, CHAMPUS, Puerto Rico Government Health Insurance Plan (“Healthcare Reform”), or any other state or federal medical or pharmaceutical benefit program or pharmaceutical assistance program (collectively, “Government Programs”).</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Patient must be a resident of the United States or the Commonwealth of Puerto Rico. Product must originate and be administered to patient in the United States or the Commonwealth of Puerto Rico.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Patient must be under the care of a physician for one of the following FDA-approved indications:</div>
                                <div className='pl-30 mt10'> a.  <div className='custli'>Metastatic colorectal cancer, in combination with intravenous fluorouracil-based chemotherapy for first- or second-line treatment.</div></div>
                                <div className='pl-30 mt10'>b. <div className='custli'>Metastatic colorectal cancer, in combination with fluoropyrimidine irinotecan- or fluoropyrimidine-oxaliplatin-based chemotherapy for second-line treatment in patients who have progressed on a first-line bevacizumab product-containing regimen. </div></div>
                                <div className='pl-30 mt10'>c. <div className='custli'>Unresectable, locally advanced, recurrent or metastatic non-squamous non-small cell lung cancer, in combination with carboplatin and paclitaxel for first-line treatment. </div> </div>
                                <div className='pl-30 mt10'>d. <div className='custli'>Recurrent glioblastoma in adults.</div></div>
                                <div className='pl-30 mt10'>e. <div className='custli'>Metastatic renal cell carcinoma in combination with interferon alfa.</div></div>
                                <div className='pl-30 mt10'>f. <div className='custli'>Persistent, recurrent, or metastatic cervical cancer, in combination with paclitaxel and cisplatin, or paclitaxel and topotecan.</div> </div>
                                <div className='pl-30 mt10'>g. <div className='custli'>Epithelial ovarian, fallopian tube, or primary peritoneal cancer: </div>
                                    <div className='pl-30 mt10'>i. <div className='custli'>In combination with carboplatin and paclitaxel, followed by VEGZELMA<sup className="reg">&reg;</sup> as a single agent, for stage III or IV disease following initial surgical resection.</div></div>
                                    <div className='pl-30 mt10'>ii.<div className='custli'>In combination with paclitaxel, pegylated liposomal doxorubicin, or topotecan for platinum-resistant recurrent disease who received no more than 2 prior chemotherapy regimens.</div></div>
                                    <div className='pl-30 mt10'>iii.<div className='custli'>In combination with carboplatin and paclitaxel or carboplatin and gemcitabine, followed by VEGZELMA<sup className="reg">&reg;</sup> as a single agent, for platinum-sensitive recurrent disease.</div></div>
                                </div>
                            </div>
                            <div className='pl-30 mt10'> - <div className='custli'>Patient must have an out-of-pocket cost for VEGZELMA<sup className="reg">&reg;</sup> and be administered VEGZELMA<sup className="reg">&reg;</sup> prior to the expiration date of the Co-Pay Assistance Program. The benefit available under the Co-Pay Assistance Program is valid for the patient’s out-of-pocket cost for VEGZELMA<sup className="reg">&reg;</sup> only. It is not valid for any other out-of-pocket costs (for example, office visit charges or medication administration charges) even if such costs are associated with the administration of VEGZELMA<sup className="reg">&reg;</sup>. A claim for VEGZELMA<sup className="reg">&reg;</sup> must be submitted by the provider to the patient’s private health insurance separately from any other services and products.</div></div>
                        </div>
                        <div className='pl-17 mt10'>• <div className='custli'>Eligible patients may pay as little as $0 for VEGZELMA<sup className="reg">&reg;</sup>. The benefit available under the Co-Pay Assistance Program is limited to the amount the patient’s private health insurance company indicates on the Explanation of Benefits (EOB) that the patient is obligated to pay for VEGZELMA<sup className="reg">&reg;</sup> up to an annual maximum. The maximum Co-Pay Assistance Program benefit per patient, per calendar year (January 1 through December 31), is $25,000. Enrolled patients are responsible for all co-pays and any other balances not covered by the Co-Pay Assistance Program.</div></div>
                        <div className='pl-17 mt10'> • <div className='custli'>An Explanation of Benefits (EOB) from patient’s private health insurance must be submitted within 180 days of the date of administration for the patient to receive any applicable co-pay assistance benefit; provided, however, that no EOB may be submitted more than 365 days after the expiration date of Co-Pay Assistance Program. The EOB must reflect the patient’s out-of-pocket cost for VEGZELMA<sup className="reg">&reg;</sup> and submission of the claim by the patient’s provider for the cost of VEGZELMA<sup className="reg">&reg;</sup>.</div></div>
                        <div className='pl-17 mt10'>• <div className='custli'>Patient and provider agree not to seek reimbursement for all or any part of the benefit received by the patient through the Co-Pay Assistance Program. Patient and provider are responsible for reporting receipt of Co-Pay Assistance Program benefits to any insurer, health plan, or other third party who pays for or reimburses any part of the medication cost paid for by the Co-Pay Assistance Program, as may be required.</div></div>
                        <div className='pl-17 mt10'> • <div className='custli'>The Co-Pay Assistance Program</div>
                            <div className='pl-30 mt10'> - <div className='custli'>May apply to patient out-of-pocket costs incurred for VEGZELMA<sup className="reg">&reg;</sup> within 180 days prior to the date patient is enrolled in the Co-Pay Assistance Program, subject to annual Program maximum and the applicable Terms and Conditions based on VEGZELMA<sup className="reg">&reg;</sup> administration date. Patient or provider may contact Celltrion CARES<sup>&trade;</sup> for more information.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Is not insurance. If your insurance status changes, you must notify Celltrion CARES<sup>&trade;</sup> immediately.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Is void where prohibited by law, taxed, or restricted. </div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Is not transferable. No substitutions are permitted.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Cannot be combined with any other Co-Pay Assistance Program, free trial, discount, prescription savings card, or other offer.</div></div>
                            <div className='pl-30 mt10'> - <div className='custli'>Is not contingent on any past or future commercial sale of any VEGZELMA<sup className="reg">&reg;</sup>.</div></div>
                        </div>
                        <div className='pl-17 mt10'>• <div className='custli'>Celltrion CARES<sup>&trade;</sup> reserves the right to rescind, revoke, or amend the Co-Pay Assistance Program at any time without notice.</div></div>
                        <div className='pl-17 mt10'> • <div className='custli'>These Terms and Conditions are valid for VEGZELMA<sup className="reg">&reg;</sup> administered between April 3, 2023 and December 31, 2023. These terms and conditions may be changed without prior notice.</div></div></div>


                </Modal.Body>
                }
                {!props.isVegzelma &&
                    <Modal.Body className='popup-padding'>
                        <div className='txt-just'>
                            <p>Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program:</p><p className='lhight'>YUFLYMA Terms and Conditions</p>

                            <div className='pl-17 small-text'>These Terms and Conditions are valid for YUFLYMA as of the date published until amended or terminated by Celltrion CARES<sup>&trade;</sup> (“Program Period”). As a condition of participation in the Program, participants understand and agree that Celltrion may, in its sole discretion, limit, rescind, revoke, terminate, or amend the Program at any time, for any reason, without notice. It is the responsibility of participants to review these Terms and Conditions each time before relying on any Program benefits</div>

                            <p className='lhight2'>1. Program Overview</p>
                            <div className='pl-17 mt-15'>The Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program (“Program”) seeks to help Eligible Patients (defined below) with certain out-of-pocket costs for YUFLYMA<sup className="reg">&reg;</sup> (adalimumab-aaty). Under the Program, Eligible Patients may pay as little as $0 for YUFLYMA<sup className="reg">&reg;</sup> each time they present their Co-Pay Card to fill their prescription. The Program is subject to certain limitations set out below, including Qualifying Expenses (defined below), maximum limits, available funding, and patient eligibility requirements or other restrictions. Actual per prescription savings for Qualifying Expenses may vary, and patients may be responsible for out-of-pocket costs not covered under this Program. </div>

                            <p className='lhight2'>2. Patient Eligibility</p>
                            <div className='pl-17 mt-15'>
                                <div className='mb10'>To qualify for Program benefits, the patient must meet the following eligibility requirements<br/>(“Eligible Patients”):
                                    <ul className="first-ul">
                                        <li>
                                            <strong>Have Commercial Insurance:</strong> Patient must have and use private/commercial health insurance that provides at least some coverage for YUFLYMA<sup className="reg">&reg;</sup> (adalimumab-aaty). Patients who do not have coverage for YUFLYMA or do not elect to use their commercial health plan to cover at least some of the cost of YUFLYMA are ineligible for the Program. Additionally, patients are ineligible for the Program where their insurance policy prohibits such co-pay assistance programs. It is the patient’s responsibility to check with their insurance carrier to confirm that their participation in the Program is not inconsistent with insurance carrier’s requirements; including satisfying any conditions imposed by their carrier for participation in the Program
                                        </li>
                                        <li>
                                            <strong>No Federal or State Health Insurance:</strong> Patients are ineligible for the Program if they are covered, in whole or in part, under:
                                            <ul className="second-ul">
                                                <li>
                                                    Medicaid (including Medicaid patients enrolled in a qualified health plan purchased through a health insurance exchange marketplace established by a state government or the federal government),
                                                </li>
                                                <li>Medicare (Part A or B), </li>
                                                <li>Medicare Part D or Medicare Advantage plan (regardless of whether a specific prescription is covered),</li>
                                                <li>TRICARE, Veterans Affairs healthcare or the Civilian Health and Medical Program (CHAMPVA),</li>
                                                <li>Puerto Rico Government Health Insurance Plan (“Healthcare Reform” formerly known as “La Reforma de Salud”),</li>
                                                <li>A State prescription drug assistance program, or</li>
                                                <li>Any other state or federal medical or pharmaceutical benefit program or pharmaceutical assistance program (collectively, “Government Programs”).</li>
                                            </ul>
                                            If at any time in the future, a patient begins receiving prescription drug coverage for YUFLYMA under any such Government Program(s), the patient is ineligible for the Program and must call Celltrion CARES<sup>&trade;</sup> at <a href='tel:8778126662'>1-877-81CONNC (1-877-812-6662)</a> to stop participation in the Program immediately.
                                        </li>
                                        <li><strong>No Self-Pay:</strong> The Program is not valid for self-pay or cash-paying patients (i.e., patients without commercial health insurance, patients with health insurance who lack coverage for YUFLYMA, or patients who do not seek to use commercial health insurance to pay for YUFLYMA under their plan). </li>
                                        <li><strong>Residency & Age:</strong> Patient must be a resident of the United States or the Commonwealth of Puerto Rico and must be 18 years or older (or have a caregiver or legal guardian duly authorized to provide legal consent to these Terms and Conditions on behalf of the patient). Additionally, YUFLYMA covered under the Program must originate, be administered to the patient, and shipped to locations in the United States or the Commonwealth of Puerto Rico.</li>
                                        <li>
                                            On-label Prescription: Patient must be under the care of a physician and prescribed YUFLYMA for one of the following FDA-approved indications:
                                            <ul className="second-ul">
                                                <li><i>Rheumatoid Arthritis (RA): </i> reducing signs and symptoms, inducing major clinical response, inhibiting the progression of structural damage, and improving physical function in adult patients with moderately to severely active RA.</li>
                                                <li><i>Juvenile Idiopathic Arthritis (JIA): </i>reducing signs and symptoms of moderately to severely active polyarticular JIA in patients 2 years of age and older.</li>
                                                <li><i>Psoriatic Arthritis (PsA): </i>reducing signs and symptoms, inhibiting the progression of structural damage, and improving physical function in adult patients with active PsA</li>
                                                <li><i>Ankylosing Spondylitis (AS): </i>reducing signs and symptoms in adult patients with active AS</li>
                                                <li><i>Crohn’s Disease (CD): </i>treatment of moderately to severely active Crohn’s disease in adults and pediatric patients 6 years of age and older.</li>
                                                <li><i>Ulcerative Colitis (UC): </i>treatment of moderately to severely active ulcerative colitis in adults. <u>Limitations of Use:</u> Effectiveness has not been established in patients who have lost response to or were intolerant to tumor necrosis factor (TNF) blockers.</li>
                                                <li><i>Plaque Psoriasis (Ps): </i>treatment of adult patients with moderate to severe chronic plaque psoriasis who are candidates for systemic therapy or phototherapy, and when other systemic therapies are medically less appropriate</li>
                                                <li><i>Hidradenitis Suppurativa (HS): </i>treatment of adult patients with moderate to severe hidradenitis suppurativa.</li>
                                            </ul> 
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className='lhight2'>3. Program Enrollment for Co-Pay Cards</p>
                            <div className='pl-17 mt-15'>
                                <ul className="first-ul">
                                    <li>Eligible Patients must be enrolled in the Program and meet all Patient Eligibility requirements</li>
                                    <li>Patients or their duly licensed Provider(s), Pharmacist(s), Caretakers or Legal Guardians may complete Program Enrollment applications on behalf of the patient by providing all required information and legal consents necessary for Program administration by Celltrion CARES<sup>&trade;</sup>. Anyone enrolling the patient in the Program represents and warrants all information provided is true and accurate as of the date provided.</li>
                                    <li>Celltrion CARES<sup>&trade;</sup> will review the application to determine if the Patient is Eligible for the Program. </li>
                                    <li>If the Patient is eligible for the program, Celltrion CARES<sup>&trade;</sup> will provide the Patient with an electronic debit card (Co-Pay Card) that can be used to cover the cost of Qualifying Expenses. </li>
                                    <li>The Patient may print out the Co-Pay Card and use it at participating retail or specialty pharmacies</li>
                                </ul>
                            </div>
                            <p className='lhight2'>4. Patient Enrollment for Rebates</p>
                            <div className='pl-17 mt-15'>
                                <ul className="first-ul">
                                    <li>If Patient’s retail or specialty pharmacy does not participate in the Program, Eligible Patients may be able to submit a request for a rebate in connection with any Qualifying Expenses. To apply for a Co-Pay rebate, Eligible Patients must submit Qualifying Expenses according to the Rebate Process found at <a target="_blank" href="https://www.patientrebateonline.com">www.patientrebateonline.com</a>.</li>
                                    <li>For Eligible Patients who are receiving their medication via Mail Order Pharmacies that do not allow the use of Co-Pay Cards, Eligible Patients must submit Qualifying Expenses according to the Rebate Process found at <a target="_blank" href="https://www.patientrebateonline.com">www.patientrebateonline.com</a>.</li>
                                    <li>Patients may also apply for a rebate for Qualifying Expense incurred for YUFLYMA within 90 days prior to the date the patient is enrolled in the Program based on the YUFLYMA administration date. Patient or Provider may contact Celltrion CARES<sup>&trade;</sup> for more information.</li>
                                </ul>
                            </div>
                            <p className='lhight2'>5. Qualifying Expenses</p>
                            <div className='pl-17 mt-15'>
                                <ul className="first-ul">
                                    <li><strong>Qualifying Expenses:</strong> Are those out-of-pocket costs incurred by Eligible Patients for YUFLYMA under their commercial insurance plan during the Program period, subject to maximum allowable limits. Qualifying Expenses are not valid for ancillary services including office visit charges or medication administration charges even if such costs are associated with the administration of YUFLYMA. Enrolled patients are responsible for all co-pays, deductibles, coinsurance, and any other balances not covered by the Program.</li>
                                    <li><strong>Maximum Limit:</strong> Is the total maximum limit an Eligible Patient may receive for Qualifying Expenses during the Program calendar year. The maximum limit is set by Celltrion CARES<sup>&trade;</sup> and may be subject to change.</li>
                                    <li><strong>Adjustments:</strong> Qualifying Expenses may be adjusted if accumulator or maximizer programs are in effect to ensure that the Program is for the sole benefit of the patient.</li>
                                </ul>

                            </div>
                            <p className='lhight2'>6. Additional Restrictions</p>
                            <div className='pl-17 mt-15'>
                                <ul className="first-ul">
                                    <li>The Co-Pay Card is limited to 1 Eligible Patient per application and may only be used by such patient during the Program Period. The Co-Pay Card is void if transferred or substituted to any other person or be combined with any other Co-Pay Assistance Program, free trial, discount, prescription savings card, or other offer. Co-Pay cards may also not be offered for sale, sold, purchased, traded, reproduced, counterfeited, or duplicated.</li>
                                    <li>Patient and Providers agree not to seek reimbursement for all or any part of the benefit received by the Patient through the Program and are responsible for reporting receipt of Program benefits to any insurer, health plan, or other third party who pays for or reimburses any part of the medication cost paid for by the Program, as may be required.</li>
                                    <li>Patients must promptly contact Celltrion CARES<sup>&trade;</sup> if their insurance coverage changes.</li>
                                    <li>The Program is not contingent on any past or future commercial sale of YUFLYMA or otherwise void where prohibited by law, taxed, or restricted. </li>
                                </ul>
                            </div>
                            <p className='lhight2'>7. Consents and Disclaimers</p>
                            <div className='pl-17 mt-15'>
                                <ul className="first-ul">
                                    <li><strong>Data Use and Consent:</strong> Data related to a patient’s participation in the Program may be collected, analyzed, or shared with Celltrion CARES<sup>&trade;</sup> for market research and other purposes related to assessing its co-pay assistance programs. Data shared with Celltrion CARES<sup>&trade;</sup> for these purposes will be de-identified, meaning it will not identify the patient specifically.</li>
                                    <li><strong>Modification and Termination of Program:</strong> Celltrion CARES<sup>&trade;</sup> reserves the right to limit, rescind, revoke, terminate, or amend the Program at any time without notice.</li>
                                </ul>
                            </div>
                         </div>    
                    </Modal.Body>
                }
                <Modal.Footer className='popup-footer'>
                    <Button className='theme-btn' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default Celltrion