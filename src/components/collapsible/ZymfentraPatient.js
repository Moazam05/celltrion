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
              <li>
                <p>
                  Have recently received or are scheduled to receive a vaccine.
                  Adults should have all of their vaccines brought up to date
                  before starting treatment with ZYMFENTRA.
                </p>
              </li>
              <li>
                <p>
                  Are pregnant or plan to become pregnant, are breastfeeding or
                  plan to breastfeed.
                </p>
              </li>
            </ul>
            <br />
            <p>
              <strong>What should I avoid while taking ZYMFENTRA?</strong>
            </p>
            <ul>
              <li>
                <p>
                  Do not take ZYMFENTRA together with other medicines called
                  biologics that are used to treat the same conditions as
                  ZYMFENTRA.
                </p>
              </li>
            </ul>
            <br />
            <p>
              <strong>What are the possible side effects of ZYMFENTRA?</strong>
            </p>
            <p>ZYMFENTRA can cause serious side effects, including:</p>
            <ul>
              <li>
                <strong>Serious Infections:</strong>
                <ul>
                  <li>
                    <p>
                      Tell your doctor right away if you have any of the
                      following signs of an infection, including a fever, feel
                      very tired, have a cough, have flu-like symptoms, warm,
                      red, or painful skin.
                    </p>
                  </li>
                  <li>
                    <p>
                      Your doctor will examine you for TB and perform a test to
                      see if you have TB.
                    </p>
                  </li>
                  <li>
                    <p>
                      If you are a chronic carrier of the hepatitis B virus, the
                      virus can become active while you are being treated with
                      ZYMFENTRA. In some cases, patients have died as a result
                      of hepatitis B virus being reactivated. Your doctor should
                      do a blood test for hepatitis B virus before you start
                      treatment, while you are being treated and for several
                      months after you finish treatment. Tell your doctor if you
                      have symptoms such as feeling unwell, poor appetite,
                      tiredness (fatigue), fever, skin rash, or joint pain.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Liver Injury:</strong>
                <ul>
                  <li>
                    <p>
                      Some patients receiving infliximab products have developed
                      serious liver problems. Tell your doctor if you have
                      jaundice (skin and eyes turning yellow), dark,
                      brown-colored urine, pain on the right side of your
                      stomach, area (right-sided abdominal pain), fever, extreme
                      tiredness (severe fatigue).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Heart Failure:</strong>
                <ul>
                  <li>
                    <p>
                      if you have a heart problem called congestive heart
                      failure, your doctor should check you closely while you
                      are receiving ZYMFENTRA, Your congestive heart failure may
                      get worse while you are receiving ZYMFENTRA Be sure to
                      tell your doctor of any new or worse symptoms including
                      shortness of breath, swelling of ankles or feet, sudden
                      weight gain.
                    </p>
                  </li>
                  <li>
                    <p>
                      Treatment may need to be stopped if you get new or worse
                      congestive heart failure.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Blood Problems:</strong>
                <ul>
                  <li>
                    <p>
                      in some patients receiving infliximab products, the body
                      may not make enough of the blood cells that help fight
                      infections or help stop bleeding. Tell your doctor if you
                      have a fever that does not go away, bruise or bleed very
                      easily, look very pale.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <strong>Allergic Reactions:</strong>
                <ul>
                  <li>
                    <p>
                      Signs of an allergic reaction can include hives (red,
                      raised, itchy patches of skin), difficulty breathing,
                      chest pain, high or low blood pressure, fever, chills.
                    </p>
                  </li>
                  <li>
                    <p>
                      Tell your doctor right away if you have any of these signs
                      of delayed allergic reaction such as, fever, rash,
                      headache, sore throat, muscle or joint pain, swelling of
                      the face and hands, difficulty swallowing.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <strong>Nervous System Disorders:</strong>
                <ul>
                  <li>
                    <p>
                      Tell your doctor if you have changes in your vision,
                      numbness or tingling in any part of your body, seizures,
                      weakness in your arms or legs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Some patients have experienced a stroke within
                      approximately 24 hours of their infusion with infliximab
                      products. Tell your doctor right away if you have symptoms
                      of a stroke which may include numbness or weakness of the
                      face, arm or leg, especially on one side of the body;
                      sudden confusion, trouble speaking or understanding;
                      sudden trouble seeing in one or both eyes, sudden trouble
                      walking, dizziness, loss of balance or coordination or a
                      sudden, severe headache.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lupus-like Syndrome:</strong>
                <ul>
                  <li>
                    <p>
                      Your doctor may decide to stop treatment if you develop
                      symptoms such as chest discomfort or pain that does not go
                      away, shortness of breath, joint pain, rash on the cheeks
                      or arms that gets worse in the sun.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <p>
              The most common side effects include COVID-19, joint pain,
              respiratory infections, such as sinus infections and sore throat,
              diarrhea, injection site reactions, high blood pressure, headache,
              urinary tract infections, abdominal pain, dizziness, abnormal
              liver enzymes.
            </p>
            <br />
            <strong>
              Call your doctor for medical advice about side effects. You may
              report side effects to FDA at 1-800- FDA-1088.
            </strong>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ZymfentraPatient;
