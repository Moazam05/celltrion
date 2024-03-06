import React from "react";
import { Container } from "react-bootstrap";

const ZymfentraHCP = ({
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
              <strong>IMPORTANT SAFETY INFORMATION </strong>
            </p>
            <br />
            <p>
              <strong>WARNING: SERIOUS INFECTIONS and MALIGNANCY</strong>
            </p>
            <br />
            <p>
              <ul>
                <li>
                  <strong>
                    Increased risk of serious infections leading to
                    hospitalization or death, including tuberculosis (TB),
                    bacterial sepsis, invasive fungal infections (such as
                    histoplasmosis) and infections due to other opportunistic
                    pathogens.
                  </strong>
                </li>
                <li>
                  <strong>
                    Discontinue ZYMFENTRA if a patient develops a serious
                    infection or sepsis.
                  </strong>
                </li>
                <li>
                  <strong>
                    Perform test for latent TB; if positive, start treatment for
                    TB prior to starting ZYMFENTRA. Monitor all patients for
                    active TB during treatment, even if initial latent TB test
                    is negative.
                  </strong>
                </li>
              </ul>
            </p>
          </div>
        </Container>
      </div>

      <div className="isi-text" ref={isiTextRef}>
        <Container className="position-relative">
          <div className="isi-text-wrap">
            <button onClick={readLess} className="isi-text-open">
              <i class="fas fa-times"></i>
            </button>
            <p>
              <strong>IMPORTANT SAFETY INFORMATION </strong>
            </p>
            <br />
            <p>
              <strong>WARNING: SERIOUS INFECTIONS and MALIGNANCY</strong>
            </p>
            <ul>
              <li>
                <strong>
                  Increased risk of serious infections leading to
                  hospitalization or death, including tuberculosis (TB),
                  bacterial sepsis, Invasive fungal Infections (such as
                  histoplasmosis) and infections due to other opportunistic
                  pathogens.
                </strong>
              </li>
              <li>
                <strong>
                  Discontinue ZYMFENTRA If a patient develops a serious
                  Infection or sepsis.
                </strong>
              </li>
              <li>
                <strong>
                  Perform test for latent TB; if positive, start treatment for
                  TB prior to starting ZYMFENTRA. Monitor all patients for
                  active TB during treatment, even If Initial latent TB test is
                  negative.
                </strong>
              </li>
              <li>
                <strong>
                  Lymphoma and other malignancies, some fatal, have been
                  reported in children and adolescent patients treated with
                  tumor necrosis factor (TNF) blockers, Including infliximab.
                </strong>
              </li>
              <li>
                <strong>
                  Postmarketing cases of fatal hepatosplenic T-cell lymphoma
                  (HSTCL) have been reported in patients treated with TNF
                  blockers including infliximab products. Almost all had
                  received azathioprine or 6-mercaptopurine concomitantly with a
                  TNF blocker at or prior to diagnosis. The majority of cases
                  were reported in patients with Crohn's disease or ulcerative
                  colitis, most of whom were adolescent or young adult males.
                </strong>
              </li>
            </ul>
            <br />
            <p>
              <strong>Contraindications</strong>
            </p>
            <ul>
              <li>
                <p>
                  ZYMFENTRA is contraindicated in patients with a history of a
                  severe hypersensitivity reaction to other infliximab products,
                  any of its ingredients, or any murine proteins. Reactions have
                  included anaphylaxis.
                </p>
              </li>
            </ul>
            <br />
            <p>
              <strong>Warnings and Precautions</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Serious infections:</strong> Avoid in patients with
                  active infection. If infection develops, conduct a
                  prompt/complete diagnostic workup appropriate for
                  immunocompromised patients and initiate antimicrobials. If
                  systemic illness develops in patients who reside or travel to
                  regions where mycoses are endemic, consider empiric
                  antifungals.
                </p>
              </li>
              <li>
                <p>
                  <strong>Malignancies:</strong> Malignancies, including
                  lymphoma, were greater in TNF-blocker-treated patients.
                  Consider the higher risk of hepatosplenic T-cell lymphoma
                  (HSTCL) with combination therapy versus increased risk of
                  immunogenicity and hypersensitivity reactions with
                  monotherapy.
                </p>
              </li>
              <li>
                <p>
                  <strong>Hepatitis B virus (HBV) reactivation:</strong> Test
                  for HBV infection before starting treatment. Monitor HBV
                  carriers during and several veral months after therapy for
                  active HBV infection. If occurs, stop ZYMFENTRA and begin
                  anti-viral therapy. reactivation
                </p>
              </li>
              <li>
                <p>
                  <strong>Hepatotoxicity:</strong> Severe hepatic reactions,
                  some fatal or necessitating liver transplantation have
                  occurred in patients receiving infliximab products. Monitor
                  hepatic enzymes and liver function tests every 3-4 months
                  during treatment; investigate liver enzyme elevations and
                  interrupt treatment if drug-induced liver injury is suspected.
                  Instruct patients to seek immediate medical attention if
                  symptoms develop.
                </p>
              </li>
              <li>
                <p>
                  <strong>Congestive heart failure (CHF):</strong> New onset or
                  worsening symptoms may occur. Avoid in patients with CHF.
                  Monitor for new/worsening symptoms when administering
                  ZYMFENTRA.
                </p>
              </li>
              <li>
                <p>
                  <strong>Hematologic Reactions:</strong> Advise patients to
                  seek immediate medical attention if signs and symptoms of
                  cytopenia develop; consider stopping if significant
                  hematologic abnormalities develop.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Hypersensitivity and Other Administration Reactions:
                  </strong>{" "}
                  Serious hypersensitivity reactions, including anaphylaxis have
                  occurred with intravenous formulations of infliximab;
                  discontinue ZYMFENTRA and start appropriate therapy.
                </p>
              </li>
              <li>
                <p>
                  <strong>Neurologic Reactions:</strong> Exacerbation or new
                  onset CNS demyelinating disorders may occur, consider
                  discontinuation of ZYMFENTRA.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Risk of infection with concurrent administration of other
                    biological products:
                  </strong>{" "}
                  Concurrent use with other immunosuppressive biologics may
                  increase risk of infection.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Risk of additive immunosuppressive effects from prior
                    biological products:
                  </strong>{" "}
                  Consider the half- life and mode of action of prior biologics.
                </p>
              </li>
              <li>
                <p>
                  <strong>Autoimmunity:</strong> Formation of autoantibodies and
                  development of lupus-like syndrome may occur; discontinue
                  ZYMFENTRA if symptoms develop.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Vaccinations and Use of Live Vaccines/Therapeutic Infectious
                    Agents:
                  </strong>{" "}
                  Prior to initiating ZYMFENTRA bring patients up to date with
                  vaccinations. Live vaccines or therapeutic infectious agents
                  should not be given with ZYMFENTRA. A 6-month waiting period
                  following birth is recommended before the administration of
                  live vaccines to infants exposed in utero to infliximab.
                </p>
              </li>
            </ul>
            <br />

            <p>
              <strong>Common Adverse Reactions (≥3%)</strong>
            </p>

            <ul>
              <li>
                <p>
                  <strong>Ulcerative Colitis:</strong> COVID-19, anemia,
                  arthralgia, injection site reaction, increased alanine
                  aminotransferase, and abdominal pain.
                </p>
              </li>
              <li>
                <p>
                  <strong>Crohn's Disease:</strong> COVID-19, upper respiratory
                  tract infection, headache, injection site reaction, diarrhea,
                  increased alanine aminotransferase, and increased blood
                  creatine phosphokinase, neutropenia, hypertension, urinary
                  tract infection, dizziness, and leukopenia.
                </p>
              </li>
            </ul>

            <br />
            <p>
              <strong>Drug Interactions</strong>
            </p>
            <ul>
              <li>
                <p>
                  Concurrent use with immunosuppressive biologics used to treat
                  UC and CD is not recommended due to risk of infection.
                </p>
              </li>
              <li>
                <p>
                  Formation of CYP450 enzymes may be suppressed by increased
                  levels of cytokines during chronic inflammation. ZYMFENTRA
                  could normalize the formation of CYP450 énzymes potentially
                  resulting in decreased exposure of CYP450 substrates and
                  requiring dose adjustments.
                </p>
              </li>
            </ul>

            <br />
            <p>
              For more information, see Full Prescribing Information including
              <strong> BOXED WARNING.</strong>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ZymfentraHCP;
