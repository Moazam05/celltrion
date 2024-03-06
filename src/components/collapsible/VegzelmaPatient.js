import React from 'react'
import { Container } from 'react-bootstrap'

const VegzelmaPatient = ({ shouldHideDiv, collapseText, isiTextRef, readLess }) => {
    return (
        <>
            <div className={`isi-text-sticky isi-text ${shouldHideDiv ? 'd-none' : ''}`}>
                <Container className='position-relative'>
                    <button className='isi-text-open' onClick={collapseText}><i class="fas fa-plus"></i></button>
                    <div className='isi-text-wrap'>
                        <p><strong>What is VEGZELMA approved for?</strong></p>

                        <p><strong>Metastatic Colorectal Cancer (mCRC)</strong>
                            <ul>
                                <li>VEGZELMA combined with chemotherapy is approved for the first- or second-line treatment of patients with colorectal cancer that has spread to other parts of the body</li>
                                <li>VEGZELMA combined with chemotherapy is approved for the second-line treatment of patients whose colorectal cancer has spread and progressed following a first-line treatment containing bevacizumab</li>
                            </ul>
                        </p>
                        <br />
                    </div>
                </Container>
            </div>



            <div className='isi-text' ref={isiTextRef}>
                <Container className='position-relative'>
                    <div className='isi-text-wrap'>
                        <button onClick={readLess} className='isi-text-open'><i class="fas fa-times"></i> </button>

                        <p><strong>What is VEGZELMA approved for?</strong></p>

                        <p><strong>Metastatic Colorectal Cancer (mCRC)</strong>
                            <ul>
                                <li>VEGZELMA combined with chemotherapy is approved for the first- or second-line treatment of patients with colorectal cancer that has spread to other parts of the body</li>
                                <li>VEGZELMA combined with chemotherapy is approved for the second-line treatment of patients whose colorectal cancer has spread and progressed following a first-line treatment containing bevacizumab</li>
                            </ul>
                        </p>
                        <p><strong>Limitations of Use:</strong> VEGZELMA is not approved for use if surgery was used as the primary treatment in patients with colon cancer.
                        </p>
                        <p><strong>First-Line Non-Squamous Non-Small Cell Lung Cancer (NSCLC)</strong><br />
                            VEGZELMA combined with chemotherapy is approved for the first-line treatment of patients whose non-squamous NSCLC cannot be removed by surgery, has spread locally, comes back, or has spread to other parts of the body.
                        </p>
                        <p><strong>Recurrent Glioblastoma (GBM)</strong><br />
                            VEGZELMA is approved for the treatment of GBM that comes back in adults.
                        </p>
                        <p><strong>Metastatic Renal Cell Carcinoma (mRCC)</strong>
                            VEGZELMA combined with a pharmaceutical drug is approved for the treatment of renal cell carcinoma that has spread to other parts of the body.</p>

                        <p><strong>Persistent, Recurrent, or Metastatic Cervical Cancer</strong>
                            VEGZELMA combined with chemotherapy is approved for the treatment of patients whose cervical cancer is resistant to treatment, comes back, or has spread to other parts of the body.</p>

                        <p><strong>Epithelial Ovarian, Fallopian Tube, or Primary Peritoneal Cancer</strong>
                            <ul>
                                <li>VEGZELMA combined with chemotherapy, followed by VEGZELMA alone, is approved for the treatment of patients with advanced epithelial ovarian, fallopian tube, or primary peritoneal cancer following the initial removal of the cancer by surgery</li>
                                <li>VEGZELMA combined with chemotherapy is approved for the treatment of patients who received no more than 2 prior chemotherapy regimens and have epithelial ovarian, fallopian tube, or primary peritoneal cancer that is resistant to certain chemotherapies and comes back</li>
                                <li>VEGZELMA combined with chemotherapy, followed by VEGZELMA alone, is approved for the treatment of patients with epithelial ovarian, fallopian tube, or primary peritoneal cancer that is sensitive to certain chemotherapies and comes back</li>
                            </ul>
                        </p>
                            <p><strong>Important Safety Information </strong></p>

                            <p><strong>VEGZELMA can cause serious side effects, including:</strong><br />
                                <strong>Gastrointestinal (GI) perforations and fistulae:</strong> A GI perforation is a hole that can develop in your esophagus, intestines, or stomach. A GI fistula is an irregular connection that can occur between either the intestines or stomach to another body part. Immediately contact your doctor for high fever, shivering, persistent or severe abdominal pain, severe constipation, or vomiting.</p>

                            <p><strong>Wounds that won’t heal:</strong> VEGZELMA can increase the risk of wounds not healing properly. Do not undergo surgery without first discussing this potential risk with your doctor. Do not use VEGZELMA for at least 28 days following a major surgery, to allow time for the wound to heal.</p>

                            <p><strong>Bleeding.</strong> VEGZELMA can increase the risk of serious bleeding. Immediately contact your doctor for signs and symptoms of serious or unusual bleeding, including coughing up or vomiting blood, nose bleeds, or vaginal bleeding.</p>

                            <p><strong>Increased risk of blood clots:</strong> VEGZELMA can increase the risk of blood clots forming in an artery or vein, which can slow or stop blood flow. Tell your doctor right away if you have any signs and symptoms of blood clots, including unexplained chest pain and difficulty breathing.</p>

                            <p><strong>High blood pressure:</strong> VEGZELMA can increase blood pressure, so you will undergo routine blood pressure monitoring. Blood pressure should be monitored every 2 to 3 weeks during treatment with VEGZELMA and after stopping treatment. </p>

                            <p><strong>New or worsening nervous system problems:</strong> Posterior reversible encephalopathy syndrome (PRES) has been associated with VEGZELMA treatment, which can cause a headache, seizure, visual loss, or confusion. Contact your doctor if you experience nervous system or vision problems.</p>

                            <p><strong>Kidney problems:</strong> Your kidneys filter waste from your blood and eliminate it through your urine. When there is too much protein in the urine, it can sometimes be fatal. Treatment with VEGZELMA may affect kidney function and requires regular monitoring.</p>

                            <p><strong>Infusion-related reactions:</strong> Infusion reactions can happen when your body has a strong immune response to treatment with VEGZELMA. Infusion-related reactions can include wheezing, high blood pressure, chest pain, headache, shivering, and sweating. You will be monitored for signs of infusion-related reactions.</p>

                            <p><strong>Heart problems:</strong> VEGZELMA can increase the risk of developing congestive heart failure, which is when your heart is too weak to pump blood to other parts of the body.</p>

                            <p><strong>The most common side effects of VEGZELMA include:</strong> back pain, bleeding, nose bleeds, high blood pressure, too much protein in the urine, taste change, headache, inflammation of the skin/nose, dry skin, and watery eyes.
                            </p>
                            <p>
                                These are not all the possible side effects with VEGZELMA. Be sure to contact your doctor about any side effects that bother you or won’t go away.
                            </p>
                            <p><strong>Before taking VEGZELMA, tell your doctor if you are: </strong><br />
                                <strong>Undergoing surgery:</strong> Patients should wait 28 days before or after surgery before treatment with VEGZELMA.</p>

                            <p><strong>Pregnant or plan to become pregnant:</strong> VEGZELMA may cause harm to your unborn baby. Inform your doctor with a known or suspected pregnancy. Females should use effective contraception during treatment with VEGZELMA and for 6 months after the last dose.
                            </p>
                            
                            <p>VEGZELMA may lead to ovarian failure. Ask your doctor for potential options to preserve your eggs prior to starting treatment.</p>

                            <p><strong>Breastfeeding or plan to breastfeed:</strong> Women should not breastfeed during treatment with VEGZELMA and for 6 months after the last dose.</p>

                        <p>You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <strong><a href="https://www.fda.gov/medwatch" target="_blank">www.fda.gov/medwatch</a></strong> or call <strong><a href="tel:1-800-332-1088">1-800-FDA-1088</a></strong>.</p>

                            <p><strong>Please see full Prescribing Information for complete product information.</strong></p>

                            </div>
                        </Container>
                    </div >
                </>
                )
}

                export default VegzelmaPatient