import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Note from "../../assets/img/note.svg";
import ExitTerms from "../popup/exitTerms";
import ExitPrivacy from "../popup/exitPrivacy";

const Eligibility = ({
  nextStep,
  handleCancel,
  register,
  setModalShow,
  isPatient,
  errors,
}) => {
  const [indication, setIndication] = useState(false);
  const [insuranceType, setInsuranceType] = useState(false);
  const [qountry, setQountry] = useState(false);
  const [ageeighteen, setAgeeighteen] = useState(false);
  const [patconsent, setPatconsent] = useState(false);
  const [textOptIn, setTextOptIn] = useState(false);
  const [qhippaconsent, setQhippaconsent] = useState(false);
  const [qreadterms, setReadTerms] = useState(false);
  const [role, setRole] = useState("");
  const [searchParams] = useSearchParams();
  const [exitPrivacy, setExitPrivacy] = useState(false);
  const [exitTerms, setExitTerms] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const passedRole = searchParams.get("role");
    if (passedRole) {
      setRole(passedRole);
    }
  }, [role]);

  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  const IndicationHandler = (e) => {
    const value = e.target.value;
    if (
      (value === "8" && category === "vegzelma") ||
      (value === "9" && category === "yuflyma")
    ) {
      setModalShow(true);
      setIndication(true);
    } else {
      setIndication(false);
    }
  };
  const InsuranceTypeHandler = (e) => {
    const value = e.target.value;
    if (value !== "2") {
      setModalShow(true);
      setInsuranceType(true);
    } else {
      setInsuranceType(false);
    }
  };
  const QountryHandler = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setQountry(true);
    } else {
      setQountry(false);
    }
  };
  const age18Handler = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setAgeeighteen(true);
    } else {
      setAgeeighteen(false);
    }
  };

  const PATConsent = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setPatconsent(true);
    } else {
      setPatconsent(false);
    }
  };

  const TextOptIn = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setTextOptIn(true);
    } else {
      setTextOptIn(false);
    }
  };

  const QHIPPACONSENT = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setQhippaconsent(true);
    } else {
      setQhippaconsent(false);
    }
  };

  const QREADTERMS = (e) => {
    const value = e.target.value;
    if (value === "N") {
      setModalShow(true);
      setReadTerms(true);
    } else {
      setReadTerms(false);
    }
  };

  const insuranceTypeLabel = `What type of prescription insurance coverage ${
    isPatient ? "do you" : "does the patient"
  } have?`;
  const residencyLabel = `${
    isPatient
      ? "Are you a resident of the United States or a U.S. Territory?"
      : "Is the patient a resident of the United States or Puerto Rico?"
  }`;
  const ageLabel = `${
    isPatient
      ? "Are you 18 years of age or older OR the caregiver or legal guardian of the patient?"
      : "Is the patient, caregiver or legal guardian of the patient 18 years of age or older ?"
  } `;
  const hippaRelationshipLabel = `What is the relationship of the caregiver or guardian to the patient?`;
  // const patConsentLabel = ``;

  // const textOptInLabel = ``;
  const hippaConsentLabel = "";

  return (
    <>
      <ExitPrivacy
        show={exitPrivacy}
        externalLink="https://www.celltrionconnect.com/patient-privacy-policy"
        onHide={() => setExitPrivacy(false)}
      />

      <ExitTerms
        show={exitTerms}
        externalLink="https://www.celltrionconnect.com/terms-of-use/"
        onHide={() => setExitTerms(false)}
      />

      <div className="heads-icon">
        <div className="hi-icon">
          <img src={Note} />
        </div>
        <div>
          <Card.Subtitle className="mb-2 text-muted">
            {roleName} Enrollment
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Step 1 of 2</Card.Subtitle>
          <Card.Title>Let’s check your eligibility.</Card.Title>
        </div>
      </div>
      <div>
        {category === "yuflyma" ? (
          <Form.Group className="mb-4" controlId="Q_INDICATION_YUFLYMA">
            <div>
              {isPatient ? "Have you been" : "Has the patient been "} prescribed
              YUFLYMA<sup className="reg">&reg;</sup> for any one of the
              following conditions?
            </div>
            <Form.Select
              id="Q_INDICATION_YUFLYMA"
              name="Q_INDICATION_YUFLYMA"
              className={indication && "error"}
              {...register("Q_INDICATION_YUFLYMA", {
                onChange: (e) => {
                  IndicationHandler(e);
                },
              })}
            >
              <option selected disabled>
                Choose
              </option>
              <option value="1">Rheumatoid Arthritis</option>
              <option value="2">Juvenile Idiopathic Arthritis</option>
              <option value="3">Psoriatic Arthritis</option>
              <option value="4">Ankylosing Spondylitis</option>
              <option value="5">Crohn’s Disease</option>
              <option value="6">Ulcerative Colitis</option>
              <option value="7">Plaque Psoriasis</option>
              <option value="8">Hidradenitis Suppurativa</option>
              <option value="9">Other</option>
            </Form.Select>
          </Form.Group>
        ) : (
          <Form.Group className="mb-4" controlId="Q_INDICATION_VEGZELMA">
            <div>
              {isPatient ? "Have you been" : "Has the patient been "} prescribed
              VEGZELMA<sup className="reg">&reg;</sup> for any one of the
              following conditions?
            </div>
            <Form.Select
              id="Q_INDICATION_VEGZELMA"
              name="Q_INDICATION_VEGZELMA"
              className={indication && "error"}
              {...register("Q_INDICATION_VEGZELMA", {
                onChange: (e) => {
                  IndicationHandler(e);
                },
              })}
            >
              <option selected disabled>
                Choose
              </option>
              <option value="1">
                Metastatic cancer of the colon or rectum
              </option>
              <option value="2">Non-small cell lung cancer</option>
              <option value="3">Metastatic renal cell (kidney) cancer</option>
              <option value="4">Recurrent glioblastoma</option>
              <option value="5">Ovarian/fallopian tube cancer</option>
              <option value="6">Peritoneal cancer</option>
              <option value="7">Cervical cancer</option>
              <option value="8">Other</option>
            </Form.Select>
          </Form.Group>
        )}
        <Form.Group className="mb-4" controlId="Q_INSURANCE_TYPE">
          <Form.Label>{insuranceTypeLabel}</Form.Label>
          <Form.Select
            name="Q_INSURANCE_TYPE"
            id="Q_INSURANCE_TYPE"
            className={insuranceType && "error"}
            {...register("Q_INSURANCE_TYPE", {
              onChange: (e) => {
                InsuranceTypeHandler(e);
              },
            })}
          >
            <option selected disabled>
              Choose
            </option>
            <option value="1">
              Any government, state or federally funded prescription benefit
              program.This includes Medicare, Medicaid, Medigap, VA, DOD and
              Tricare
            </option>
            <option value="2">Commercially insured (private insurance)</option>
            <option value="3">
              Do not have prescription drug coverage - paying cash
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4" controlId="Q_COUNTRY">
          <Form.Label>{residencyLabel}</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              required
              inline
              label="Yes"
              value="Y"
              name="Q_COUNTRY"
              type={"radio"}
              id={`Q_COUNTRY_Y`}
              {...register("Q_COUNTRY", {
                onChange: (e) => {
                  QountryHandler(e);
                },
              })}
            />
            <Form.Check
              inline
              label="No"
              value="N"
              name="Q_COUNTRY"
              className={qountry && "error"}
              type={"radio"}
              id={`Q_COUNTRY_N`}
              {...register("Q_COUNTRY", {
                onChange: (e) => {
                  QountryHandler(e);
                },
              })}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="Q_AGE_18">
          <Form.Label>{ageLabel}</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              required
              inline
              label="Yes"
              value="Y"
              name="Q_AGE_18"
              type={"radio"}
              id={`Q_AGE_18_Y`}
              {...register("Q_AGE_18", {
                onChange: (e) => {
                  age18Handler(e);
                },
              })}
            />
            <Form.Check
              inline
              label="No"
              value="N"
              name="Q_AGE_18"
              type={"radio"}
              className={ageeighteen && "error"}
              id={`Q_AGE_18_N`}
              {...register("Q_AGE_18", {
                onChange: (e) => {
                  age18Handler(e);
                },
              })}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="Q_HIPAA_PATIENT_RELATIONSHIP">
          <Form.Label>{hippaRelationshipLabel}</Form.Label>
          <Form.Select
            className={errors.Q_HIPAA_PATIENT_RELATIONSHIP && "error"}
            name="Q_HIPAA_PATIENT_RELATIONSHIP"
            id="Q_HIPAA_PATIENT_RELATIONSHIP"
            {...register("Q_HIPAA_PATIENT_RELATIONSHIP", { required: true })}
          >
            <option selected disabled>
              Choose
            </option>
            <option value="1">Patient</option>
            <option value="2">Caregiver</option>
            <option value="3">Advocate</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="Q_READ_TERMS">
          <Form.Label>
            I confirm that I have read, consent, and agree to the User Privacy
            Policy at{" "}
            <a href="javascript:void(0)" onClick={() => setExitPrivacy(true)}>
              www.celltrionconnect.com/patient-privacy-policy
            </a>{" "}
            and the Terms and Conditions at{" "}
            <a href="javascript:void(0)" onClick={() => setExitTerms(true)}>
              www.celltrionconnect.com/terms-of-use/
            </a>
            , and that I am of legal age.
          </Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Yes"
              value="Y"
              name="Q_READ_TERMS"
              type={"radio"}
              id={`readterms-yes`}
              {...register("Q_READ_TERMS", {
                required: true,
                onChange: (e) => {
                  QREADTERMS(e);
                },
              })}
            />
            <Form.Check
              inline
              label="No"
              value="N"
              name="Q_READ_TERMS"
              type={"radio"}
              className={qreadterms && "error"}
              id={`readterms-no`}
              {...register("Q_READ_TERMS", {
                required: true,
                onChange: (e) => {
                  QREADTERMS(e);
                },
              })}
            />
          </div>
        </Form.Group>

        {role === "patient" && (
          <Form.Group className="mb-4 eligibility" controlId="Q_HIPPA_CONSENT">
            <Form.Label>
              By signing this form, you certify that the patient gives their
              permission for their physicians, pharmacies, laboratories, and
              other healthcare providers (“Healthcare Providers”) and their
              health insurers to share their individually identifiable health
              information with Celltrion USA, Inc., the Celltrion Patient
              Assistance Foundation, Celltrion USA affiliates and its vendors
              (collectively, “Celltrion USA”). The patient understands that
              their individually identifiable health information may include
              their full name, address, date of birth, demographic information,
              financial information, insurance information and information
              related to medical condition, treatment, care management,
              medication history, and prescriptions (collectively, “Health
              Information”), whether in written or verbal form, including
              portions of their medical record. The patient’s Health Information
              will be shared with Celltrion USA so that Celltrion USA may
              provide them with various support and information to help them
              access a Celltrion USA medicine, which may include the following,
              depending on the program (collectively, “Patient Support
              Activities”).
            </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                value="Y"
                name="Q_HIPPA_CONSENT"
                type={"radio"}
                id={`signsin-yes`}
                {...register("Q_HIPPA_CONSENT", {
                  required: true,
                  onChange: (e) => {
                    QHIPPACONSENT(e);
                  },
                })}
              />
              <Form.Check
                inline
                label="No"
                value="N"
                name="Q_HIPPA_CONSENT"
                type={"radio"}
                className={qhippaconsent && "error"}
                id={`signsin-no`}
                {...register("Q_HIPPA_CONSENT", {
                  required: true,
                  onChange: (e) => {
                    QHIPPACONSENT(e);
                  },
                })}
              />
            </div>
          </Form.Group>
        )}
        <Form.Group className="mb-4" controlId="Q_PAT_CONSENT">
          <Form.Label>
            The patient understands that the personal information provided and
            information pertaining to using the Celltrion CARES
            <sup>&trade;</sup> Co-Pay Assistance Program will be shared with
            Celltrion USA, its third-party partners and entities. Does the
            patient also authorize Celltrion USA, its partners and entities to
            communicate with him/her about products, health conditions, co-pay
            and financial assistance. The patient agrees to be contacted by
            mail, email, and at the phone number provided to leave voice
            messages, and interactive voice recordings. The patient may opt out
            of individual communications of the program entirely at any time by
            calling 1-877-812-6662 (1-877-81CONNC), or by clicking on the
            "unsubscribe" link. Celltrion USA and companies providing services
            to Celltrion USA will not sell or rent personally identifiable
            information, as described in the Privacy Policy, which can be viewed
            by visiting CelltrionCares.com.
          </Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              required
              inline
              label="Agree"
              value="Y"
              name="Q_PAT_CONSENT"
              type={"radio"}
              id={`patientn-yes`}
              {...register("Q_PAT_CONSENT", {
                required: true,
                onChange: (e) => {
                  PATConsent(e);
                },
              })}
            />
            <Form.Check
              inline
              label="Disagree"
              value="N"
              name="Q_PAT_CONSENT"
              type={"radio"}
              className={patconsent && "error"}
              id={`patientn-no`}
              {...register("Q_PAT_CONSENT", {
                required: true,
                onChange: (e) => {
                  PATConsent(e);
                },
              })}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="Q_TEXT_OPT_IN">
          <Form.Label>
            As part of the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance
            Program, the patient understands and agrees to receive autodialed
            text messages from Celltrion USA, any companies working with
            Celltrion USA and McKesson entities that support this program, which
            may include refill reminders and other offers. The patient
            understands he/she is not required to agree to receive text messages
            as a condition of this savings offer, that message and data rates
            may apply, and that these text messages will reoccur monthly. The
            patient may text 'STOP' to opt out at any time. For help at any
            time, text 'HELP'. For additional support call 1-877-812-6662
            (1-877-81CONNC). Participating Carriers: All U.S. Based Carriers.
            Messages may be delayed or undelivered for various factors.
            McKesson, carriers (including, but not limited to, T-Mobile) and any
            service providers utilized by McKesson to send messages are not
            liable for delayed or undelivered messages.
          </Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              required
              inline
              label="Agree"
              value="Y"
              name="Q_TEXT_OPT_IN"
              type={"radio"}
              id={`cares-yes`}
              {...register("Q_TEXT_OPT_IN", {
                required: true,
              })}
            />
            <Form.Check
              inline
              label="Disagree"
              value="N"
              name="Q_TEXT_OPT_IN"
              type={"radio"}
              className={textOptIn}
              id={`cares-no`}
              {...register("Q_TEXT_OPT_IN", {
                required: true,
              })}
            />
          </div>
        </Form.Group>
      </div>

      <div className="form-buttons">
        <div className="s2-button">
          <Button
            className="theme-button theme-button-primary"
            onClick={nextStep}
            disabled={
              indication ||
              insuranceType ||
              qountry ||
              ageeighteen ||
              patconsent ||
              textOptIn ||
              qhippaconsent ||
              qreadterms
            }
          >
            Next
          </Button>
        </div>
        <Button
          onClick={handleCancel}
          variant="light"
          className="theme-button theme-button-text"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Eligibility;
