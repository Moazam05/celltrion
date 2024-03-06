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
