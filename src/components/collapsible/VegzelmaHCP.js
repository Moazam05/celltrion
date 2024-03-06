import React from 'react'
import { Container } from 'react-bootstrap'

const VegzelmaHCP = ({ shouldHideDiv, collapseText, isiTextRef, readLess }) => {
    return (
        <>
            <div className={`isi-text-sticky isi-text ${shouldHideDiv ? 'd-none' : ''}`}>
                <Container className='position-relative'>
                    <button className='isi-text-open' onClick={collapseText}><i class="fas fa-plus"></i></button>
                    <div className='isi-text-wrap'>
                        <br />
                        <p><strong>Indications</strong></p>
                        <br />

                        <p><strong>Metastatic Colorectal Cancer (mCRC)</strong></p>
                        <ul>
                            <li>VEGZELMA, in combination with intravenous fluorouracil-based chemotherapy, is indicated for the first- or second-line treatment of patients with mCRC</li>
                            <li>VEGZELMA, in combination with fluoropyrimidine-irinotecan- or fluoropyrimidine-oxaliplatin-based chemotherapy, is indicated for the second-line treatment of patients with mCRC who have progressed on a first-line bevacizumab product-containing regimen</li>
                        </ul>
                        <br />
                    </div>
                </Container>
            </div>



            <div className='isi-text' ref={isiTextRef}>
                <Container className='position-relative'>
                    <div className='isi-text-wrap'>
                        <button onClick={readLess} className='isi-text-open'><i class="fas fa-times"></i> </button>
                        <br />
                        <p><strong>Indications</strong></p>
                        <br />

                        <p><strong>Metastatic Colorectal Cancer (mCRC)</strong></p>
                        <ul>
                            <li>VEGZELMA, in combination with intravenous fluorouracil-based chemotherapy, is indicated for the first- or second-line treatment of patients with mCRC</li>
                            <li>VEGZELMA, in combination with fluoropyrimidine-irinotecan- or fluoropyrimidine-oxaliplatin-based chemotherapy, is indicated for the second-line treatment of patients with mCRC who have progressed on a first-line bevacizumab product-containing regimen</li>
                        </ul>
                        <br />
                        <p><strong>Limitations of Use:</strong> VEGZELMA is not indicated for adjuvant treatment of colon cancer.
                        </p>
                        <p><strong>First-Line Non-Squamous Non-Small Cell Lung Cancer (NSCLC)</strong><br />
                        VEGZELMA, in combination with carboplatin and paclitaxel, is indicated for the first-line treatment of patients with unresectable, locally advanced, recurrent, or metastatic non-squamous NSCLC.
                        </p>
                            <p><strong>Recurrent Glioblastoma (GBM)</strong><br/>
                        VEGZELMA is indicated for the treatment of recurrent GBM in adults.
                        </p>
                        <p><strong>Metastatic Renal Cell Carcinoma (mRCC)</strong><br />
                        VEGZELMA, in combination with interferon alfa, is indicated for the treatment of mRCC.
                        </p>
                        <p><strong>Persistent, Recurrent, or Metastatic Cervical Cancer</strong><br />
                        VEGZELMA, in combination with paclitaxel and cisplatin or paclitaxel and topotecan, is indicated for the
                        treatment of patients with persistent, recurrent, or metastatic cervical cancer.
                        </p>
                        <p><strong>Epithelial Ovarian, Fallopian Tube, or Primary Peritoneal Cancer</strong><br />
                        •	VEGZELMA, in combination with carboplatin and paclitaxel, followed by VEGZELMA as a single agent, is
                        indicated for the treatment of patients with stage III or IV epithelial ovarian, fallopian tube, or primary
                        peritoneal cancer following initial surgical resection
                        •	VEGZELMA, in combination with paclitaxel, pegylated liposomal doxorubicin, or topotecan, is indicated for
                        the treatment of patients with platinum-resistant recurrent epithelial ovarian, fallopian tube, or primary
                        peritoneal cancer who received no more than 2 prior chemotherapy regimens
                        •	VEGZELMA, in combination with carboplatin and paclitaxel, or with carboplatin and gemcitabine, followed by VEGZELMA as a single agent, is indicated for the treatment of patients with platinum-sensitive recurrent epithelial ovarian, fallopian tube, or primary peritoneal cancer
                        </p>
                        <p><strong>Important Safety Information</strong><br />
                        </p>
                        <p><strong>WARNINGS AND PRECAUTIONS</strong><br />
                            <strong>Gastrointestinal Perforations and Fistulae:</strong> Serious, and sometimes fatal, gastrointestinal perforation occurred at a higher incidence in patients receiving bevacizumab products vs chemotherapy.The incidence ranged from 0.3% to 3% across clinical studies, with the highest incidence in patients with a history of prior pelvic radiation.Serious fistulae ranged from &lt; 1% to 1.8% across clinical studies, with the highest incidence in patients with cervical cancer. Avoid VEGZELMA in patients with ovarian cancer who have evidence of recto-sigmoid involvement by pelvic examination or bowel involvement on CT scan or clinical symptoms of bowel obstruction. Discontinue in
                        patients who develop gastrointestinal perforation, tracheoesophageal fistula, or any Grade 4 fistula. Discontinue in patients with fistula formation involving any internal organ.
                        </p>
                        <p><strong>Surgery and Wound Healing Complications:</strong> The incidence of surgery and wound healing complications, including serious and fatal complications, was increased in patients receiving bevacizumab products. In patients who experience wound healing complications during treatment, withhold VEGZELMA until adequate wound healing. Discontinue VEGZELMA in patients who develop necrotizing fasciitis.
                        </p>
                        <p><strong>Hemorrhage:</strong> Severe or fatal hemorrhage occurred up to 5-fold more frequently in patients receiving bevacizumab products vs chemotherapy alone. Discontinue VEGZELMA in patients who develop a Grades 3-4 hemorrhage.
                        </p>
                        <p><strong>Arterial Thromboembolic Events:</strong> Serious, sometimes fatal, arterial thromboembolic events (ATE) occurred at a higher incidence in patients receiving bevacizumab vs chemotherapy. Discontinue VEGZELMA in patients who develop a severe ATE. The safety of reinitiating bevacizumab products after an ATE is resolved is not known.
                        </p>
                        <p><strong>Venous Thromboembolic Events:</strong> An increased risk of venous thromboembolic events (VTE) was observed across clinical studies. Discontinue VEGZELMA in patients with a Grade 4 VTE, including pulmonary embolism.
                        </p>
                        <p><strong>Hypertension:</strong> Severe hypertension occurred at a higher incidence in patients receiving bevacizumab products vs chemotherapy alone. Monitor blood pressure every two to three weeks during treatment with VEGZELMA. Treat with appropriate anti-hypertensive therapy and monitor blood pressure regularly. Discontinue in patients who develop hypertensive crisis or hypertensive encephalopathy.
                        </p>
                        <p><strong>Posterior Reversible Encephalopathy Syndrome:</strong> Posterior reversible encephalopathy syndrome (PRES) was reported in  &lt;0.5% of patients across clinical studies. Discontinue VEGZELMA in patients who develop PRES.
                        </p>
                        <p><strong>Renal Injury and Proteinuria:</strong> The incidence and severity of proteinuria was higher in patients receiving bevacizumab products vs chemotherapy. Nephrotic syndrome occurred in &lt;1% of patients receiving bevacizumab products across clinical studies, in some instances with fatal outcome. Discontinue VEGZELMA in patients who develop nephrotic syndrome.
                        </p>
                        <p><strong>Infusion-Related Reactions:</strong> In clinical studies, infusion-related reactions with the first dose of bevacizumab products occurred in  &lt;3% of patients and severe reactions occurred in 0.4% of patients. Decrease the rate of infusion for mild, clinically insignificant infusion-related reactions. Interrupt the infusion in patients with clinically significant infusion-related reactions and consider resuming at a slower rate following resolution. Discontinue VEGZELMA in patients who develop a severe infusion-related reaction and administer appropriate medical therapy.
                        </p>
                        <p><strong>Embryo-Fetal Toxicity:</strong> Bevacizumab products may cause fetal harm when administered to pregnant women. Advise pregnant women of the potential risk to a fetus. Advise females of reproductive potential to use effective contraception during treatment with VEGZELMA and for 6 months after the last dose.
                        </p>
                        <p><strong>Ovarian Failure:</strong> The incidence of ovarian failure was 34% vs 2% in premenopausal women receiving bevacizumab with chemotherapy vs chemotherapy alone for adjuvant treatment of a solid tumor. Inform females of reproductive potential of the risk of ovarian failure prior to initiating treatment with VEGZELMA.
                        </p>
                        <p><strong>Congestive Heart Failure (CHF):</strong> VEGZELMA is not indicated for use with anthracycline-based chemotherapy. Discontinue VEGZELMA in patients who develop CHF.
                        </p>
                        <p><strong>MOST COMMON ADVERSE REACTIONS</strong><br />
                         The most common adverse reactions observed in patients receiving bevacizumab products as a single agent or in combination with other anti-cancer therapies at a rate >10% were epistaxis, headache, hypertension, rhinitis, proteinuria, taste alteration, dry skin, hemorrhage, lacrimation disorder, back pain, and exfoliative dermatitis.
                            <br /><br />
                        Across clinical studies, bevacizumab was discontinued in 8% to 22% of patients because of adverse reactions.
                        </p>
                        <p><strong>ADVERSE REACTIONS BY INDICATION</strong><br />
                        Metastatic colorectal cancer, in combination with intravenous fluorouracil-based chemotherapy for first- or second-line treatment
                            <ul>
                                <li><strong>Study AVF2107g:</strong> Grades 3-4 adverse reactions occurring at higher incidence (2%) in patients receiving bevacizumab with IFL (N=392) vs placebo with IFL (N=396) were leukopenia (37% vs 31%), neutropenia (21% vs 14%), diarrhea (34% vs 25%), abdominal pain (8% vs 5%), constipation (4% vs 2%), hypertension (12% vs 2%), deep vein thrombosis (9% vs 5%), intra-abdominal thrombosis (3% vs 1%), syncope (3% vs 1%), asthenia (10% vs 7%), and pain (8% vs 5%)</li>
                            </ul>                                
                        </p>
                        <p><strong>Metastatic colorectal cancer, in combination with fluoropyrimidine-irinotecan- or fluoropyrimidine-oxaliplatin-based chemotherapy for second-line treatment in patients who have progressed on a first-line bevacizumab product-containing regimen</strong><br />
                        <ul>
                                <li><strong>Study E3200:</strong> Selected Grades 35 (non-hematologic) and Grades 45 (hematologic) reactions occurring at a higher incidence (2%) in patients receiving bevacizumab with FOLFOX4 (N=521) vs FOLFOX4 alone were fatigue (19% vs 13%), diarrhea (18% vs 13%), sensory neuropathy (17% vs 9%), nausea (12% vs 5%), vomiting (11% vs 4%), dehydration (10% vs 5%), hypertension (9% vs 2%), abdominal pain (8% vs 5%), hemorrhage (5% vs 1%), other neurological (5% vs 3%), ileus (4% vs 1%), and headache (3% vs 0%)
                            </li>
                        </ul>
                        </p>
                        <p><strong>Unresectable, locally advanced, recurrent or metastatic non-squamous non-small cell lung cancer, in combination with carboplatin and paclitaxel for first-line treatment</strong><br />
                            <ul>
                                <li><strong>Study E4599:</strong> Grades 3-5 (non-hematologic) and Grades 4-5 (hematologic) adverse reactions occurring at a higher incidence (≥2%) in patients receiving bevacizumab with paclitaxel and carboplatin (N=422) vs chemotherapy alone were neutropenia (27% vs 17%), fatigue (16% vs 13%), hypertension (8% vs 0.7%), infection without neutropenia (7% vs 3%), venous thromboembolism (5% vs 3%), febrile neutropenia (5% vs 2%), pneumonitis/pulmonary infiltrates (5% vs 3%), infection with Grade 3 or 4 neutropenia (4% vs 2%), hyponatremia (4% vs 1%), headache (3% vs 1%), and proteinuria (3% vs 0%)
                                </li>
                            </ul>
                        </p>        
                        <p><strong>Recurrent glioblastoma in adults</strong><br />
                            <ul>
                                <li><strong>Study EORTC 26101:</strong> In the bevacizumab with lomustine arm (N=278), 22% of patients discontinued treatment due to adverse reactions vs 10% of patients in the lomustine arm. In patients receiving bevacizumab with lomustine, the adverse reaction profile was similar to that observed in other approved indications
                                </li>
                            </ul>
                        </p>   
                        <p><strong>Metastatic renal cell carcinoma in combination with interferon alfa</strong><br />
                            <ul>
                                <li><strong>Study BO17705:</strong> Grades 3-5 adverse reactions occurring at a higher incidence (>2%) in patients receiving bevacizumab with interferon alfa (N=337) vs placebo with interferon alfa (N=304) were fatigue (13% vs 8%), asthenia (10% vs 7%), proteinuria (7% vs 0%), hypertension (6% vs 1%; including hypertension and hypertensive crisis), and hemorrhage (3% vs 0.3%; including epistaxis, small intestinal hemorrhage, aneurysm ruptured, gastric ulcer hemorrhage, gingival bleeding, hemoptysis, hemorrhage intracranial, large intestinal hemorrhage, respiratory tract hemorrhage, and traumatic hematoma)
                                </li>
                            </ul>
                        </p>  
                        <p><strong>Persistent, recurrent, or metastatic cervical cancer, in combination with paclitaxel and cisplatin, or paclitaxel and topotecan</strong><br />
                            <ul>
                                <li><strong>Study GOG-0240:</strong> Grades 3-4 adverse reactions occurring at a higher incidence (2%) in patients receiving bevacizumab with chemotherapy (N=218) vs chemotherapy alone (N=222) were abdominal pain (12% vs 10%), hypertension (11% vs 0.5%), thrombosis (8% vs 3%), diarrhea (6% vs 3%), anal fistula (4% vs 0%), proctalgia (3% vs 0%), urinary tract infection (8% vs 6%), cellulitis (3% vs 0.5%), fatigue (14% vs 10%), hypokalemia (7% vs 4%), hyponatremia (4% vs 1%), dehydration (4% vs 0.5%), neutropenia (8% vs 4%), lymphopenia (6% vs 3%), back pain (6% vs 3%), and pelvic pain (6% vs 1%)
                                </li>
                            </ul>
                        </p> 
                        <p><strong>Epithelial ovarian, fallopian tube, or primary peritoneal cancer in combination with carboplatin and paclitaxel, followed by VEGZELMA as a single agent, for stage III or IV disease following initial surgical resection</strong><br />
                            <ul>
                                <li><strong>Study GOG-0218:</strong> Grades 3-4 adverse reactions occurring at a higher incidence (≥2%) in either of the bevacizumab arms (N=608, N=607) vs control arm (N=602) were fatigue (CPB15+ - 9%, CPB15 - 6%, CPP - 6%), hypertension (CPB15+ - 10%, CPB15 - 6%, CPP - 2%), thrombocytopenia (CPB15+ - 21%, CPB15 - 20%, CPP - 15%), and leukopenia (CPB15+ - 51%, CPB15 - 53%, CPP - 50%)
                                </li>
                            </ul>
                        </p> 
                            <p><strong>Epithelial ovarian, fallopian tube, or primary peritoneal cancer in combination with paclitaxel, pegylated liposomal doxorubicin, or topotecan for platinum-resistant recurrent disease who received no more than 2 prior chemotherapy regimens</strong><br />
                            <ul>
                                <li><strong>Study MO22224:</strong> Grades 3-4 adverse reactions occurring at a higher incidence (≥2%) in patients receiving bevacizumab with chemotherapy (N=179) vs chemotherapy alone (N=181) were hypertension (6.7% vs 1.1%) and palmar-plantar erythrodysaesthesia syndrome (4.5% vs 1.7%)
                                </li>
                            </ul>
                        </p> 
                                <p><strong>Epithelial ovarian, fallopian tube, or primary peritoneal cancer in combination with carboplatin and paclitaxel or carboplatin and gemcitabine, followed by VEGZELMA as a single agent, for platinum-sensitive recurrent disease</strong><br />
                            <ul>
                                <li><strong>Study AVF4095g:</strong> Grades 3-4 adverse reactions occurring at a higher incidence (2%) in patients receiving bevacizumab with chemotherapy (N=247) vs placebo with chemotherapy (N=233) were thrombocytopenia (40% vs 34%), nausea (4% vs 1.3%), fatigue (6% vs 4%), headache (4% vs 0.9%), proteinuria (10% vs 0.4%), dyspnea (4% vs 1.7%), epistaxis (5% vs 0.4%), and hypertension (17% vs 0.9%)
                                </li>
                            </ul>
                        </p> 

                        <p>You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <strong><a href="https://www.fda.gov/medwatch" target="_blank">www.fda.gov/medwatch</a></strong> or call <strong><a href="tel:1-800-332-1088">1-800-FDA-1088</a></strong>.</p>

                        <p><strong>Please see full Prescribing Information for complete information.</strong></p> 

                    </div>
                </Container>
            </div >
        </>
    )
}

export default VegzelmaHCP