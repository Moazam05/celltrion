import React from 'react'
import { Container } from 'react-bootstrap'

const YuflymaPatient = ({ shouldHideDiv, collapseText, isiTextRef, readLess }) => {
    return (
        <>
            <div className={`isi-text-sticky isi-text ${shouldHideDiv ? 'd-none' : ''}`}>
                <Container className='position-relative'>
                    <button className='isi-text-open' onClick={collapseText}><i class="fas fa-plus"></i></button>
                    <div className='isi-text-wrap'>
                        <br />
                        <p><strong>IMPORTANT SAFETY INFORMATION </strong></p>
                        <br />
                        <p><strong>ABOUT YUFLYMA<sup className="reg">&reg;</sup> (adalimumab-aaty)</strong></p>
                        <br />
                        <p><strong>What is the most important information I should know about YUFLYMA?</strong> </p>
                        <p>You should discuss treatment characteristics of YUFLYMA with your doctor, including potential benefits and risks. YUFLYMA is a TNF blocker medicine that can lower the ability of your immune system to fight infections. Notify your doctor if you have any kind of infection before you start taking YUFLYMA. </p>
                        <br />
                    </div>
                </Container>
            </div>



            <div className='isi-text' ref={isiTextRef}>
                <Container className='position-relative'>
                    <div className='isi-text-wrap'>
                        <button onClick={readLess} className='isi-text-open'><i class="fas fa-times"></i> </button>
                        <p><strong>IMPORTANT SAFETY INFORMATION </strong></p>
                        <br />
                        <p><strong>ABOUT YUFLYMA<sup className="reg">&reg;</sup> (adalimumab-aaty)</strong></p>
                        <br />
                        <p><strong>What is the most important information I should know about YUFLYMA?</strong> </p>
                        <p>You should discuss treatment characteristics of YUFLYMA with your doctor, including potential benefits and risks. YUFLYMA is a TNF blocker medicine that can lower the ability of your immune system to fight infections. Notify your doctor if you have any kind of infection before you start taking YUFLYMA. </p>
                        <ul>
                            <li>
                                <strong>Serious infections have happened in people taking adalimumab products, including tuberculosis (TB) and infections caused by viruses, fungi, or bacteria that have spread throughout the body. Some of these infections have been fatal.</strong>  Your doctor should test you for TB prior to treatment with YUFLYMA, and monitor closely for signs and symptoms of TB throughout treatment with YUFLYMA, regardless of your TB test results. Your doctor may choose to treat you with a medicine for TB if they feel you are at risk.
                            </li>
                            <li>
                                <strong>Cancer.</strong> The chance of getting cancer may increase for children and adults taking TNF blockers, including adalimumab, including cases of unusual cancers. Some people have developed a rare type of cancer called hepatosplenic T-cell lymphoma, which is often fatal. Your chance of getting two types of skin cancer (basal cell and squamous cell) may increase while using TNF blockers, including adalimumab. Basal cell and squamous cell skin cancer are typically not life-threatening if treated. You should tell your doctor if you notice a bump or open sore that doesn’t heal.
                            </li>
                        </ul>
                        <br />

                        <p><strong>What should I tell my doctor BEFORE starting YUFLYMA? </strong></p>
                        <p><strong>Give your doctor a complete description of your health</strong>, including the following: </p>

                        <ul>
                            <li>  Current infection, treatment for infection, or symptoms of an infection</li>
                            <li>Frequent infections or infections that don’t resolve with treatment</li>
                            <li> Diabetes</li>
                            <li>Confirmed TB or close contact with someone who has TB, or were born in, lived in, or traveled where there is more risk for getting TB</li>
                            <li>  Current or prior residence in major river valleys where risk for getting certain kinds of fungal infections (histoplasmosis, coccidioidomycosis, or blastomycosis) is increased. These infections may happen or become more severe if you use YUFLYMA. Ask your doctor about these infections to check if they are common in your area.</li>
                            <li>Current or prior hepatitis B infection</li>
                            <li>Scheduled for major surgery</li>
                            <li>Current or prior cancer</li>
                            <li>Disease that affects your nervous system that results in numbness or tingling in your extremities (multiple sclerosis, Guillain-Barré syndrome, etc.)</li>
                            <li>Heart failure</li>
                            <li>Recent or scheduled vaccines. While taking YUFLYMA, patients may continue to receive vaccines except for live vaccines. Children should receive all recommended vaccines before starting YUFLYMA.</li>
                            <li>Known allergy to YUFLYMA or any of its ingredients</li>
                            <li> Current or planned pregnancy, or if you are currently breastfeeding or plan to</li>
                            <li> If you have a baby while taking YUFLYMA during your pregnancy. Tell your baby’s doctor before your baby receives any vaccines</li>
                        </ul>
                        <p><strong>Also, tell your doctor about all the medicines you take.</strong> You should not take YUFLYMA with ORENCIA<sup className="reg">&reg;</sup> (abatacept), KINERET<sup className="reg">&reg;</sup> (anakinra), REMICADE<sup className="reg">&reg;</sup> (infliximab), ENBREL<sup className="reg">&reg;</sup> (etanercept), CIMZIA<sup className="reg">&reg;</sup> (certolizumab pegol), or SIMPONI<sup className="reg">&reg;</sup> (golimumab). Tell your doctor if you have ever used RITUXAN<sup className="reg">&reg;</sup> (rituximab), IMURAN<sup className="reg">&reg;</sup> (azathioprine), or PURINETHOL<sup className="reg">&reg;</sup> (mercaptopurine, 6-MP). </p>

                        <br />

                        <p><strong>What should I watch for AFTER starting YUFLYMA? </strong></p>
                        <p><strong>Adalimumab products, including YUFLYMA, can cause serious side effects,</strong> including the following: </p>
                        <ul>
                            <li> <strong>Serious infections.</strong> Any infection caused by viruses, fungi, or bacteria, including TB. Common TB symptoms include cough, low-grade fever, weight loss, or loss of body fat and muscle.</li>
                            <li><strong>Hepatitis B infection in carriers of the virus.</strong> Common hepatitis B symptoms include muscle aches, feeling very tired, dark urine, skin or eyes that look yellow, little or no appetite, vomiting, clay-colored bowel movements, fever, chills, stomach discomfort, and skin rash.</li>
                            <li><strong>Allergic reactions.</strong> Common symptoms of a serious allergic reaction include hives, trouble breathing, and swelling of the face, eyes, lips, or mouth.</li>
                            <li> <strong>Nervous system problems.</strong> Common signs and symptoms include numbness or tingling, problems with vision, weakness in your arms or legs, and dizziness.</li>
                            <li><strong>Blood problems</strong> (decreased blood cells that help fight infections or stop bleeding). Common symptoms include a fever that does not go away, bruising or bleeding very easily, or very pale skin tone.</li>
                            <li>   <strong> Heart failure</strong> (new or worsening). Common symptoms include shortness of breath, swelling in the ankles or feet, and sudden weight gain.</li>
                            <li> <strong> Immune reactions including a lupus-like syndrome.</strong>  Common symptoms include chest discomfort or pain that does not go away, shortness of breath, joint pain, or a rash on cheeks or arms that gets worse in the sun.</li>
                            <li> <strong>Liver problems.</strong>  Common symptoms include feeling very tired, skin or eyes that look yellow, poor appetite or vomiting, and pain on the right side of the stomach (abdomen). These problems can lead to liver failure and death.</li>
                            <li><strong>Psoriasis </strong> (new or worsening). Common symptoms include red scaly patches or raised, pus-filled bumps.</li>
                        </ul>
                        <br />
                        <p><strong>Call your doctor or get medical care right away if you develop any of the above symptoms. </strong></p>
                        <br />
                        <p><strong>Common side effects of adalimumab products include injection site reactions</strong> (redness, rash, swelling, itching, or bruising), <strong>upper respiratory infections</strong> (sinus infections),<strong> headaches</strong>, and <strong>rash</strong>. These are not all the possible side effects with adalimumab products, including YUFLYMA. Tell your doctor if you have any side effect that bothers you or that does not go away. </p>
                        <p><strong>Remember, tell your doctor right away if you have an infection or symptoms of an infection, including: </strong></p>
                        <ul>
                            <li>Fever, sweats, or chills</li>
                            <li>Muscle aches</li>
                            <li>Cough</li>
                            <li>Shortness of breath</li>
                            <li>Blood in phlegm</li>
                            <li>Weight loss</li>
                            <li>Warm, red, or painful skin or sores on your body</li>
                            <li>Diarrhea or stomach pain</li>
                            <li>Burning when you urinate</li>
                            <li>Urinating more often than normal</li>
                            <li>Feeling very tired</li>
                        </ul>
                        <br />
                        <p><strong>YUFLYMA is given by injection under the skin. </strong></p>
                        <br />
                        <p><strong>This is the most important information to know about YUFLYMA. For more information, talk to your health care provider. </strong></p>
                        <br />
                        <p><strong>Uses </strong></p>
                        <p>YUFLYMA is a prescription medicine used: </p>
                        <ul>
                            <li>

                                <strong> To reduce the signs and symptoms of:</strong>

                                <ul>
                                    <li> <strong> Moderate to severe rheumatoid arthritis (RA) in adults.</strong>  YUFLYMA can be used alone, with methotrexate, or with certain other medicines.</li>
                                    <li>  <strong>Moderate to severe polyarticular juvenile idiopathic arthritis (JIA) in children</strong>  2 years of age and older. YUFLYMA can be used alone or with methotrexate.</li>
                                    <li> <strong>Psoriatic arthritis (PsA) in adults.</strong>  YUFLYMA can be used alone or with certain other medicines.</li>
                                    <li> <strong>Ankylosing spondylitis (AS) in adults.</strong></li>
                                    <li><strong>Moderate to severe hidradenitis suppurativa (HS) in adults.</strong></li>
                                </ul>

                            </li>
                            <li><strong>To treat moderate to severe Crohn’s disease (CD) in adults and children 6 years of age and older.</strong></li>
                            <li><strong>To treat moderate to severe ulcerative colitis (UC) in adults.</strong> It is not known if YUFLYMA is effective in people who stopped responding to or could not tolerate anti-TNF medicines.</li>
                            <li> <strong>To treat moderate to severe chronic plaque psoriasis (Ps) in adults</strong> treatment of adult patients with moderate to severe chronic plaque psoriasis who are candidates for systemic therapy or phototherapy, and when other systemic therapies are medically less appropriate.</li>
                        </ul>
                    </div>
                </Container>
            </div >
        </>
    )
}

export default YuflymaPatient