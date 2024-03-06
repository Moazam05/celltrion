import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function PrivacyPolicy(props) {
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
               <div className='txt-just'> 
                    <div className='txt-algn heading'> Privacy Policy</div>
                    <div className='txt-algn mr-15'>Last updated: February 23, 2023</div>
                    <div className='fw-600'> PLEASE READ THIS POLICY CAREFULLY TO UNDERSTAND HOW WE TREAT YOUR PERSONAL INFORMATION AND YOUR RELATED CHOICES AND RIGHTS. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS POLICY, YOU SHOULD NOT ACCESS OR USE OUR SITE.</div>
                    <div className='fw-600 mt10'>OUR SITE IS INTENDED FOR USERS LOCATED IN THE UNITED STATES, AND IS NOT INTENDED FOR USERS LOCATED IN OTHER COUNTRIES, INCLUDING THE EUROPEAN UNION AND THE EUROPEAN ECONOMIC AREA.</div>
                    <div className='intro mt20'>INTRODUCTION</div>
                    <div className='mt20'>Celltrion USA, Inc. (referred to as “Celltrion USA,” “we,” “us,” and “our”) is committed to protecting the privacy and security of the personal information we collect, use, share, and otherwise process as part of our business. We also believe in transparency, and we are committed to informing you about how we treat the data we collect and process. </div>
                    <div className='mt20'><span className='textDeco'>When Does this Policy Apply?</span> This Privacy Policy (the “Policy”) describes our practices regarding your personal information when you visit our website, , (the “Site”). </div>
                    <div className='intro mt20'>WHAT INFORMATION DO WE COLLECT?</div>
                    <div className='mt20'>We may collect the information listed below for the purposes described in the “How Do We Use and Share Your Information?” section of this Policy.</div>
                    <div className='mt10'>
                    <Table bordered hover className='customTable'>
                        <thead className='tdcustom'>
                            <tr className='tdcustom'>
                            <th className='tdcustom'>Category</th>
                            <th className='tdcustom'>Description</th>
                            </tr>
                        </thead>
                        <tbody className='tdcustom'>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Name, Contact Information, and Identifiers</td>
                            <td className='tdcustom'>dentifiers such as a real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, user name, social security number, tax ID, driver’s license number, passport number, or other similar identifiers.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Customer and Other Records</td>
                            <td className='tdcustom'>Paper and electronic customer records containing personal data, such as name, signature, physical characteristics or description, address, telephone number, driver’s license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Protected Classifications</td>
                            <td className='tdcustom'>Characteristics of protected classifications under applicable state or federal law such as race, color, sex, gender, age, national origin, disability, and citizenship status.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Purchase History and Tendencies</td>
                            <td className='tdcustom'>Commercial information, including records of products or services considered, purchased, or owned.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Biometric Information</td>
                            <td className='tdcustom'>Physiological, biological or behavioral characteristics that can be used alone or in combination with each other to establish individual identity, including DNA, fingerprint, diagnostic or lab results, imagery of the face from which an identifier template can be extracted, and sleep, health, or exercise data that contain identifying information.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Usage Data</td>
                            <td className='tdcustom'>Internet or other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding a resident’s interaction with an internet website, application, or advertisement.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Geolocation Data</td>
                            <td className='tdcustom'>Precise geographic location information about a particular individual or device.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Audio/Visual</td>
                            <td className='tdcustom'>Audio, electronic, or visual recordings, or similar information.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Professional or Employment-Related Information</td>
                            <td className='tdcustom'>Work experience, name, phone number, email address, performance evaluations.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Education Information</td>
                            <td className='tdcustom'>Information that is not publicly available personally identifiable information as defined in the federal Family Educational Rights and Privacy Act (20 U.S.C. section 1232g, 34 C.F.R. Part 99).</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Sensitive Information</td>
                            <td className='tdcustom'>As defined under applicable local law, such as certain characteristics of protected classifications, precise geolocation, account login credential and passwords, health information, and financial information.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Communications and Questions</td>
                            <td className='tdcustom'>Comments, content, questions, or other information that you choose to provide</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Cookies and Similar Technologies</td>
                            <td className='tdcustom'>Please see the “Cookies and Similar Technologies” section of this Policy for more information.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Profiles and Inferences</td>
                            <td className='tdcustom'>Inferences drawn from any of the information identified above to create a profile about a resident reflecting the resident’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.</td>
                            </tr>
                            
        
                        </tbody>
                    </Table>
                    </div>
                    <div className='mt10'>
                        <p>Cookies and Similar Technologies</p>
                        <div className='mt10 textDeco pl-60'>First and Third-Party Cookies</div>
                        <div className='mt10'>A “cookie” is a small file created by a web server that can be stored on your device (if you allow) for use either during a particular browsing session (a “session” cookie) or a future browsing session (a “persistent” or “permanent” cookie). “Session” cookies are temporarily stored on your hard drive and only last until they expire at the end of your browsing session. “Persistent” or “permanent” cookies remain stored on your hard drive until they expire or are deleted by you. First-party cookies are set by the website you’re visiting, and they can only be read by that site. Third-party cookies are set by a party other than that website.</div>
                        <div className='mt10 textDeco pl-60'>Other Similar Technologies</div>
                        <div className='mt10'>In addition to cookies, there are other automatic data collection technologies, such as Internet tags, web beacons (clear gifs, pixel tags, and single-pixel gifs), and navigational data collection (log files, server logs, etc.) that can be used to collect data as users navigate through and interact with a website. For example, web beacons are tiny graphics with unique identifiers that are used to understand browsing activity. In addition, UTM codes are strings that can appear in a URL when you move from one web page or website to another. The string can represent information about browsing, such as which advertisement, page, or publisher sent the user to the receiving website.</div>
                        <div className='mt10 textDeco pl-60'>What Cookies and Similar Technologies Are in Use and Why Do We Use Them? </div>
                        <div className='mt10'>We use first-party and third-party cookies and similar technologies for purposes such as to improve Site functionality, to measure and track how users interact with the Site, and to perform similar analytics. We may also use first-party and third-party cookies and similar technologies on the Site in order to otherwise tailor our communications with you.</div>
                        <div className='mt10 textDeco pl-60'>Other Third-Party Technologies</div>
                        <div className='mt10'>Some third parties may use automated data collection technologies to collect information about you when you browse the Internet. The information they collect about your online browsing activities over time and across different websites and other online services may be associated with your personal information and used to provide you with targeted content. We do not control these third parties’ technologies or how they may be used. If you have any questions about targeted content, you should contact the responsible party directly or consult their privacy policies.</div>
                        <div className='mt10 textDeco pl-60'>Choices About Cookies</div>
                        <div className='mt10'>Most web browsers are set by default to accept cookies. If you do not wish to receive cookies, you may set your browser to refuse all or some types of cookies or to alert you when cookies are being sent by website tracking technologies and advertising. These settings may affect your enjoyment of the full functionality of the Site. In addition, adjusting the cookie settings may not fully delete all of the cookies that have already been created. To delete them, visit your web browser settings after you have changed your cookie settings. Additional information is provided below about how to disable cookies or manage the cookie settings for some of the leading web browsers:
                            <div className='mt10 ml10' > <span >Google Chrome:</span> <a className='link' href='https://support.google.com/chrome/answer/95647?hl=en '>https://support.google.com/chrome/answer/95647?hl=en </a> </div>
                            <div className='mt10 ml10' > <span >Firefox: </span> <a className='link' href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences '>https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a> </div>
                            <div className='mt10 ml10' > <span >Internet Explorer:</span> <a className='link' href='http://windows.microsoft.com/en-GB/windows-vista/Block-or-allow-cookies'>http://windows.microsoft.com/en-GB/windows-vista/Block-or-allow-cookies</a> </div>
                            <div className='mt10 ml10' > <span >Safari:</span> <a className='link' href='https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac  '>https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac </a> </div>
                            <div className='mt10'>For more information about how to modify your browser settings to block or filter cookies, visit <a className='link' href='http://www.aboutcookies.org/'>http://www.aboutcookies.org/</a>. You may learn more about internet advertising practices and related consumer resources at <a className='link' href='http://www.aboutads.info/consumers/'>http://www.aboutads.info/consumers/</a>, <a className='link' href='http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work'>http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>, or <a className='link' href='http://www.networkadvertising.org/choices'>http://www.networkadvertising.org/choices</a>.</div>
                        </div>
                        <div className='intro mt20'>HOW DO WE USE AND SHARE YOUR INFORMATION?</div>
                        <div className='mt20'> <span className='fw-500'>How do we use the information described in this Policy?</span> To the extent permitted by applicable law, we may use the information described in the “What Information Do We Collect” section above for purposes listed below. </div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Provide you with services, content, customer service, and functionality;</div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Manage your access to and use of our services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Honor our terms of service and contracts;</div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Process and complete payments and other transactions; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Operate and improve our operations, business, services, and the Site,; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Develop new products and services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Improve our customer service; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Communicate with you and respond to your feedback, requests, questions, or inquiries; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Manage our relationship with you; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Maintain our databases and back-ups, including records of our communications with you; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Ensure the privacy and security of our Site, and services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Detect fraud and prevent loss; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Support and improve the Site, including evaluations of functionality and features; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Promote our services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Contact you about other products and services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Invite you to participate in surveys or to personalize your experience with our services; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Analyze use of the Site, and our services and prepare aggregate traffic information; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Provide you with a more personal and interactive experience on the Site; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>General business support purposes, including but not limited to procurement, financial and fiscal management, risk and compliance management, and external reporting </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Facilitate corporate mergers, acquisitions, reorganizations, dissolutions, or other transfers; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Accomplish any other purpose related to and/or ancillary to any of the purposes and uses described in this Policy for which your information was provided to us; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Accomplish another purpose described to you when you provide the information, for which you have consented, or for which we have a legal basis under law; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Comply with federal, state, or local laws; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Comply with a civil, governmental, or regulatory inquiry, order, subpoena, summons, or process;  </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Determine and track user interests, trends, needs, and preferences; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Cooperate with law enforcement agencies; </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Exercise or defend legal rights or claims; and  </div></div>
                        <div className='mt10 pl-30'> • <div className='custli2'>Create, use, retain, or disclose de-identified or aggregated data. </div></div>
                        <div className='mt20'> <span className='fw-500'>How do we disclose or share the information described in this Policy?</span>To the extent permitted by applicable law, we may share the information described in the “What Information Do We Collect” section above for purposes listed below. </div>
                        <div className='mt10'>
                        <Table  bordered hover className='customTable'>
                        <thead className='tdcustom'>
                            <tr className='tdcustom'>
                            <th className='tdcustom'>Category</th>
                            <th className='tdcustom'>Description</th>
                            </tr>
                        </thead>
                        <tbody className='tdcustom'>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Affiliates</td>
                            <td className='tdcustom'>We may share your information with our subsidiaries and affiliates and with their respective officers, directors, employees, and agents.</td>
                            </tr>

                            <tr className='tdcustom'>
                            <td className='tdcustom'>Acquisitions and Similar Transactions</td>
                            <td className='tdcustom'>We may disclose your information in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our company assets. If our business is acquired by or merged with another company, your information may be transferred to the new owners</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Disclosures with Your Consent</td>
                            <td className='tdcustom'>We may ask if you would like us to share your information with other unaffiliated third parties who are not described elsewhere in this Policy. We will only disclose your information in this context with your consent.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Legal Obligations and Rights (Subpoenas, Court Orders, and Warrants)</td>
                            <td className='tdcustom'>We may disclose information in response to subpoenas, warrants, court orders or other legal process, or to comply with relevant laws. We may also share information in order to establish or exercise our legal rights or claims; to defend against a legal claim; and to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, safety of person or property, or a violation of our contracts.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Third Parties</td>
                            <td className='tdcustom'>We may provide information about you to third parties that may offer products and services specifically requested by you, including authorized representatives and health care providers.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Service Providers</td>
                            <td className='tdcustom'>We may share information with our service providers that need access to information to provide operational or other support services on our behalf (e.g., for managing or hosting services and/or underpinning technology for the Services we are providing). Among other things, service providers help us to administer the Site; support our operations; provide technical support; send communications to you; provide payment processing; and assist with other legitimate purposes permitted by law.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Professional Advisors</td>
                            <td className='tdcustom'>We may share your information with our and our affiliates’ insurers, auditors, and professional advisors, including attorneys and accountants, that need access to your information to provide operational or other support services on our behalf.</td>
                            </tr>
                            <tr className='tdcustom'>
                            <td className='tdcustom'>Deidentified or Aggregated Data</td>
                            <td className='tdcustom'>We may disclose aggregated information or de-identified information that does not identify any specific individual, such as groupings of demographic data or customer preferences.</td>
                            </tr>
        
                        </tbody>
                    </Table>
                    </div>

                    <div className='intro mt20'>HOW LONG DO WE STORE AND USE YOUR INFORMATION?</div>
                    <div className='mt20'>We retain and use your information for as long as is necessary to fulfill the purposes for which it was collected, to comply with our business requirements and legal obligations, to resolve disputes, to protect our assets, to operate our business, and to enforce our agreements.</div>
                    <div className='mt20'>We may delete your information if we believe it is incomplete, inaccurate, or that our continued storage of it is contrary to our objectives or legal obligations. When we delete data, it will be removed from our active servers and databases, but it may remain in our archives when it is not practical or possible to delete it.</div>
                    <div className='mt20'>To the extent permitted by law, we may retain and use anonymous, de-identified, or aggregated information for performance reporting, benchmarking, and analytic purposes and for operational improvement.</div>
                    <div className='intro mt20'>HOW DO WE PROTECT YOUR INFORMATION?</div>  
                    <div className='mt20'>We have put security measures in place to protect the personal information that you share with us from being accidentally lost, used, altered, disclosed, or accessed in an unauthorized manner. From time to time, we review our security procedures to consider appropriate new technologies and methods.</div>
                    <div className='mt20'>While our security measures seek to protect the personal information in our possession, no security system is perfect, and no data transmission is 100% secure. As a result, while we strive to protect your information, we cannot guarantee or warrant the security of any information transmitted to or from the Site. Your use of the Site is at your own risk. We cannot guarantee that your data will remain secure in all circumstances.</div>
                    <div className='mt20'>If a data breach compromises your personal information, we will notify you and any applicable regulator when we are required to do so by applicable law.</div>
                    <div className='intro mt20'>YOUR RIGHTS AND CHOICES REGARDING PERSONAL INFORMATION</div>
                    <div className='mt20'>Please use the “Contact Us” details provided at the end of this Policy to exercise your rights and choices under this Policy. We honor such requests when we are required to do so under applicable law. </div>
                    <div className='mt20'><span className='fw-600'>Email Opt-Out.</span> We may send you emails about our services and other updates. If you no longer wish to receive communications from us via email, you may opt-out by clicking the “unsubscribe” link at the bottom of our emails, if applicable, or by submitting a request via the “Contact Us” details at the end of this Policy and providing your name and email address so that we may identify you in the opt-out process. Once we receive your instruction, we will promptly take corrective action. Please note that registered users cannot opt out of receiving transactional e-mails related to their account.</div>
                    <div className='mt20'><span className='fw-600'>Accuracy and Updating Your Information.</span> Our goal is to keep your information accurate, current, and complete. If any of the information you have provided to us changes, please let us know via the “Contact Us” details at the end of this Policy. For instance, if your email address changes, you may wish to let us know so that we can communicate with you. If you become aware of inaccurate personal information about you, you may want to update your information. We are not responsible for any losses arising from any inaccurate, inauthentic, deficient or incomplete personal data that you provide to us.</div>
                    <div className='mt20'><span className='fw-600'>Complaints. </span>If you believe your rights relating to your personal information have been violated, please contact us via the “Contact Us” details provided at the end of this Policy.</div>
                    <div className='mt20'><span className='fw-600'>California Shine the Light.</span> Under California Civil Code Section 1798.83, California residents who provide personal information in obtaining products or services for personal, family, or household use may be entitled to request and obtain from us once a calendar year information about the information we shared, if any, with other businesses for direct marketing uses. Please be aware that not all information sharing is covered by the “Shine the Light” requirements and only information on covered sharing, if any, will be included in our response. As part of the California Online Privacy Protection Act, all users of our Site may make any changes to their information at any time by contacting us at privacy_usa@celltrionhc.com.</div>
                    <div className='mt20'><span className='fw-600'>Nevada Residents.</span> You may submit a verified request to us at privacy_usa@celltrionhc.com to request that we not make any sale (as defined under Nevada law) of any covered information (as defined under Nevada law) that we have collected or will collect about you. Please provide your name and contact information in your request. We will respond to your request in accordance with Nevada law.</div>
                    <div className='intro mt20'>THIRD-PARTY SITES AND SERVICES</div>
                    <div className='mt20'>This Policy only applies to the Site, and it does not apply to any third-party websites or applications.</div>
                    <div className='mt20'>The Site may contain links to, and media or other content from, third parties. These links are to external resources and third parties that have their own privacy policies. Because of the dynamic media capabilities of the Site, it may not be clear to you which links are to external, third-party resources. If you click on an embedded third-party link, you will be redirected away from the Site to the external third-party website. You can check the URL to confirm that you have left the Site.</div>
                    <div className='mt20'>We cannot and do not (1) guarantee the adequacy of the privacy or security practices employed by or the content and media provided by any third parties or their websites, (2) control third parties’ independent collection or use or your information, or (3) endorse any third-party information, products, services or websites that may be reached through embedded links on the Site.</div>
                    <div className='mt20'>Any information provided by you or automatically collected from you by a third party will be governed by that party’s privacy policy and terms of use. If you are unsure whether a website is controlled, affiliated, or managed by us, you should review the privacy policy and practices applicable to each linked website.</div>
                    <div className='intro mt20'>CROSS BORDER TRANSFERS</div>
                    <div className='mt20'>While the Site is intended for users located in the United States, any information you provide to us through use of the Site may be stored and processed, transferred between and accessed from the United States and other countries that may not guarantee the same level of protection of personal information as the one in which you reside. However, we will handle your personal information in accordance with this Policy regardless of where your personal information is stored/accessed.</div>
                    <div className='intro mt20'>CHILDREN’S ONLINE PRIVACY PROTECTION ACT</div>
                    <div className='mt20'>The Children’s Online Privacy Protection Act (“COPPA”), as well as other data privacy regulations, restrict the collection, use, or disclosure of personal information from and about children on the Internet. Our Site and services are not directed to children aged 13 or younger, nor is information knowingly collected from children under the age of 13. No one under the age of 13 may access, browse, or use the Site or provide any information to or on the Site. If you are under 13, please do not use or provide any information on the Site (including, for example, your name, telephone number, email address, or username). If we learn that we have collected or received personal information from a child under the age of 13 without a parent’s or legal guardian’s consent, we will take steps to stop collecting that information and delete it. If you believe we might have any information from or about a child under the age of 13, please contact us via the “Contact Us” details provided at the end of this Policy.</div>
                    <div className='mt20'>For more information about COPPA, please visit the Federal Trade Commission’s website at: <a className='link' href='https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule'>https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule</a>.</div>
                    <div className='intro mt20'>UPDATES AND CHANGES TO THIS POLICY</div>
                    <div className='mt20'>We may add to, change, update, or modify this Policy to reflect any changes to how we treat your information or in response to changes in law. Should this Policy change, we will post all changes to this Policy on this page. Any such changes, updates, or modifications will be effective immediately upon posting. The date on which this Policy was last modified is identified at the beginning of this Policy.</div>
                    <div className='mt20'>You are expected to, and you acknowledge and agree that it is your responsibility to, carefully review this Policy prior to using the Site, and from time to time, so that you are aware of any changes. Your continued use of the Site after the “Last Updated” date will constitute your acceptance of and agreement to such changes and to our collection and sharing of your information according to the terms of the then-current Policy. If you do not agree with this Policy and our practices, you should not use the Site.</div>
                    <div className='intro mt20'>CONTACT US</div>
                    <div className='mt20'>For more information, or if you have any questions or concerns regarding this Policy, you may contact us using the information below, and we will do our best to assist you. </div>
                    <div className='mt10 pl-60'><span className='fw-600'>By Postal Mail:</span> <div className='custli135'>Celltrion USA, Inc. Attn: US Compliance 1 Evertrust Plaza Jersey City, NJ 07302</div></div>
                    <div className='mt10 pl-60'><span className='fw-600'>By Email: </span> <div className='custli135'> <a className='link' href='privacy_usa@celltrionhc.com'>privacy_usa@celltrionhc.com</a></div></div>
                    </div>
                    
               
               
               
               
               
               
               
               
               
               </div>
                  
                </Modal.Body>
                <Modal.Footer className='popup-footer'>
                    <Button className='theme-btn' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default PrivacyPolicy