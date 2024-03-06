import { Container } from "react-bootstrap";

const ZymfentraPatient = ({
  shouldHideDiv,
  collapseText,
  isiTextRef,
  readLess,
}) => {
  return (
    <>
      <div
        className={`isi-text-sticky isi-text ${shouldHideDiv ? "d-none" : ""}`}
      >
        <Container className="position-relative">
          <button className="isi-text-open" onClick={collapseText}>
            <i class="fas fa-plus"></i>
          </button>
          <div className="isi-text-wrap">
            <br />
            <p>
              <strong>IMPORTANT SAFETY INFORMATION</strong>
            </p>
            <br />
            <p>
              <strong>
                What is the most important information I should know about
                ZYMFENTRA?
              </strong>
            </p>
            <p>
              <strong>
                ZYMFENTRA may cause serious side effects, including risk of
                infection and cancer.
              </strong>{" "}
            </p>
            <p>
              <strong>Risk of infection:</strong> ZYMFENTRA can lower the
              ability of your immune system to fight infections. Serious
              infections have happened in patients receiving ZYMFENTRA. These
              infections include tuberculosis (TB) and infections caused by
              viruses, fungi, or bacteria that have spread throughout the body.
              Some patients have died from these infections
            </p>
            <br />
          </div>
        </Container>
      </div>

      <div className="isi-text" ref={isiTextRef}>
        <Container className="position-relative">
          <div className="isi-text-wrap">
            <button onClick={readLess} className="isi-text-open">
              <i class="fas fa-times"></i>{" "}
            </button>
            <p>
              <strong>IMPORTANT SAFETY INFORMATION </strong>
            </p>
            <br />
            <p>
              <strong>
                What is the most important information I should know about
                ZYMFENTRA?
              </strong>
            </p>
            <p>
              <strong>
                ZYMFENTRA may cause serious side effects, including risk of
                infection and cancer.
              </strong>{" "}
            </p>
            <ul>
              <li>
                <p>
                  <strong> Risk of infection:</strong> ZYMFENTRA can lower the
                  ability of your immune system to fight infections. Serious
                  infections have happened in patients receiving ZYMFENTRA.
                  These infections include tuberculosis (TB) and infections
                  caused by viruses, fungi, or bacteria that have spread
                  throughout the body. Some patients have died from these
                  infections.
                </p>
                <ul>
                  <li>
                    <p>
                      Your doctor should test you for TB before starting
                      ZYMFENTRA, and should monitor you closely for signs and
                      symptoms of TB during treatment.
                    </p>
                  </li>
                  <li>
                    <p>
                      If you have an infection, any sign of an infection
                      including a fever, cough, flu-like symptoms, or have open
                      cuts or sores on your body, call your doctor right away.
                      ZYMFENTRA can make you more likely to get infections or
                      make any infection that you have worse.
                    </p>
                  </li>
                </ul>
                <li>
                  <p>
                    <strong>Risk of Cancer:</strong> There have been cases of
                    unusual cancers in children and teenage patients using tumor
                    necrosis factor (TNF) blocker medicines, such as ZYMFENTRA.
                  </p>
                  <ul>
                    <li>
                      <p>
                        For people receiving TNF blocker medicines, the chances
                        of getting lymphoma or other cancers may increase.
                      </p>
                    </li>
                    <li>
                      <p>
                        Some people receiving TNF blockers, developed a rare
                        type of cancer called hepatosplenic T-cell lymphoma.
                        This type of cancer often results in death. Most of
                        these people were male teenagers or young men. Also,
                        most people were being treated for Crohn's disease or
                        ulcerative colitis with a TNF blocker and another
                        medicine called azathioprine or 6- mercaptopurine.
                      </p>
                    </li>
                    <li>
                      <p>
                        People who have been treated for Crohn's disease,
                        ulcerative colitis, for a long time may be more likely
                        to develop lymphoma. This is especially true for people
                        with very active disease.
                      </p>
                    </li>
                    <li>
                      <p>
                        Some people treated with infliximab products, have
                        developed certain kinds of skin cancer. If any changes
                        in the appearance of your skin or growths on your skin
                        occur during or after your treatment, tell your doctor.
                      </p>
                    </li>
                    <li>
                      <p>
                        Patients with Chronic Obstructive Pulmonary Disease
                        (COPD), a specific type of lung disease, may have an
                        increased risk for getting cancer while being treated
                        with ZYMFENTRA.
                      </p>
                    </li>
                    <li>
                      <p>
                        Tell your doctor if you have ever had any type of
                        cancer. Discuss with your doctor any need to adjust
                        medicines you may be taking.
                      </p>
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
            <br />
            <p>
              <strong>Do not take ZYMFENTRA if you:</strong>
            </p>
            <ul>
              <li>
                <p>
                  Have had an allergic reaction to ZYMFENTRA, other infliximab
                  products, any murine proteins or any of the ingredients in
                  ZYMFENTRA.
                </p>
              </li>
            </ul>
            <br />
            <p>
              <strong>
                Before you receive ZYMFENTRA, tell your doctor about all of your
                medical conditions, including if you:
              </strong>
            </p>
            <ul>
              <li>
                <p>Have an infection.</p>
              </li>
              <li>
                <p>Have other liver problems including liver failure.</p>
              </li>
              <li>
                <p> Have heart failure or other heart conditions.</p>
              </li>
              <li>
                <p>Have or have had any type of cancer.</p>
              </li>
              <li>
                <p>
                  Have COPD (Chronic Obstructive Pulmonary Disease), a specific
                  type of lung disease.
                </p>
              </li>
              <li>
                <p>
                  Have or have had a condition that affects your nervous system
                  such as multiple sclerosis, or Guillain-Barré syndrome, or if
                  you experience any numbness or tingling, or if you have had a
                  seizure.
                </p>
              </li>
            </ul>
            {/* End */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ZymfentraPatient;
