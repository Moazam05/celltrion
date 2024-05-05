import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PopUP from "../popup/Index";
import bevacizumab from "../../assets/img/Color_bevacizumab_adcdHigh.png";
import yuflymaLogo from "../../assets/img/yuflyma-logo.png";
import ZymfentraLogo from "../../assets/img/Zymfentra_brand.png";
import Eligibility from "./Eligibility";
import { useNavigate, useParams } from "react-router-dom";
import Enrollment from "./Enrollment";
import { useForm } from "react-hook-form";
import SubmittedForm from "./SubmittedForm";
import { useSearchParams } from "react-router-dom";
import { FieldsMetaData } from "../../utilities/FieldsMetaData";
import tokenStore from "../../token-store";
import Helper from "../../utilities/helper";
import moment from "moment";
import { useRef } from "react";
import YuflymaPatient from "../collapsible/YuflymaPatient";
import YuflymaHCP from "../collapsible/YuflymaHCP";
import VegzelmaHCP from "../collapsible/VegzelmaHCP";
import VegzelmaPatient from "../collapsible/VegzelmaPatient";
import ZymfentraHCP from "../collapsible/ZymfentraHCP";
import ZymfentraPatient from "../collapsible/ZymfentraPatient";

const InquiryForm = () => {
  var [role, setRole] = useState("");
  const [product, setProduct] = useState("");
  let [isPatient, setIsPatient] = useState(true);
  const [searchParams] = useSearchParams();
  const [modalShow, setModalShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState(1);
  const [lastStep, setLastStep] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isValid, isDirty },
    setValue,
    getValues,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState("");
  const [shouldHideDiv, setShouldHideDiv] = useState(false);
  const isiTextRef = useRef(null);

  const { category } = useParams();
  const isZymfentra = category === "zymfentra";

  useEffect(() => {
    const passedRole = searchParams.get("role");
    if (passedRole) {
      setRole(passedRole);
      passedRole === "patient" ? setIsPatient(true) : setIsPatient(false);
    }
  }, [role]);

  const [enroller_type, setEnroller_type] = useState("");
  useEffect(() => {
    const passedRole = searchParams.get("role");
    if (passedRole === "patient") {
      setEnroller_type("1");
    }
    if (passedRole === "prescriber") {
      setEnroller_type("2");
    }
    if (passedRole === "pharmacist") {
      setEnroller_type("3");
    }
  }, [enroller_type]);

  const [drug, setDrug] = useState("");
  useEffect(() => {
    const passedRole = searchParams.get("role");
    if (category === "yuflyma") {
      setDrug("2");
    }
    if (category === "vegzelma") {
      setDrug("1");
    }
  }, [drug]);

  const [benefit_type, setBenefit_type] = useState("");
  useEffect(() => {
    const passedRole = searchParams.get("role");
    if (category === "yuflyma") {
      setBenefit_type("2");
    }
    if (category === "vegzelma") {
      setBenefit_type("4");
    }
  }, [benefit_type]);

  const nextStep = () => {
    if (isValid && isDirty) {
      setStep(step + 1);
    }
    if (step === 2) {
      setLastStep(true);
    } else {
      setLastStep(false);
    }
    setError(
      category === "yuflyma"
        ? "Q_INDICATION_YUFLYMA"
        : isZymfentra
        ? "Q_INDICATION_ZYMFENTRA"
        : "Q_INDICATION_VEGZELMA",
      { type: "focus" },
      { shouldFocus: true }
    );
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const handleCancel = () => {
    navigate("/role-selection/" + category);
  };

  const postDataToRest = async function (formData) {
    setLoader(true);
    // const token = await tokenStore.getToken();
    try {
      setApiError("");
      const postPayload = { ReqType: "ENROLLMENT", Answer: [] };
      for (let key of Object.keys(formData)) {
        let field = FieldsMetaData.find((x) => x.QuestionID === key);
        if (!field) continue;
        let value = formData[key];
        if (field.Datatype.toUpperCase() === "DATETYPE")
          value = moment(value).format("MM/DD/YYYY");
        if (field.QuestionID === "Q_HIPAA_DATE_TIME")
          value = moment().format("YYYYMMDD hh:mm:ss");
        if (field.QuestionID === "Q_BENEFIT_TYPE") value = benefit_type;
        if (field.QuestionID === "Q_ENROLLER_TYPE") value = enroller_type;
        if (field.QuestionID === "Q_DRUG") value = drug;
        if (field.QuestionID === "Q_PHONE")
          value = getValues("Q_PHONE").replace(/\D/g, "");
        if (field.QuestionID === "Q_PHONE_2")
          value = getValues("Q_PHONE_2").replace(/\D/g, "");
        if (field.QuestionID === "Q_PHYSICIAN_PHONE")
          value = getValues("Q_PHYSICIAN_PHONE").replace(/\D/g, "");
        if (field.QuestionID === "Q_PHYSICIAN_FAX")
          value = getValues("Q_PHYSICIAN_FAX").replace(/\D/g, "");
        if (field.QuestionID === "Q_DOB") {
          var today = new Date();
          var birthDate = new Date(value); // create a date object directly from `dob1` argument
          var age_now = today.getFullYear() - birthDate.getFullYear();
          if (age_now < 18 && category === "vegzelma") {
            setApiError("Patient must be at least 18 years old.");
            setLoader(false);
            return;
          }
        }
        if (value)
          postPayload.Answer.push({
            QuestionID: field.QuestionID,
            Datatype: field.Datatype,
            Value: value,
          });
        formData[key] = field.Datatype;
      }
      // console.log("postPayload", postPayload);
      // return;
      const isZymfentraUrl =
        "https://mckesson-wrapper-dev-api.azure-api.net/api/submit_patient";

      const subscriptionKey = Helper.getOCPAPIMSubscriptionKey();
      let response = await fetch(
        isZymfentra ? isZymfentraUrl : Helper.getRegistrationURL(),
        {
          method: "POST",
          body: JSON.stringify(postPayload),
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": subscriptionKey,
          },
        }
      );
      let data = await response.json();
      // console.log("data", data);
      setData(data);
      if (response.status === 201) {
        setLoader(false);
        return response.status === 201;
      }
      setLoader(false);
      setApiError(
        data.message.length > 0
          ? data.message
          : "An error has occured, please call support"
      );
    } catch (error) {
      console.error(error);
      setLoader(false);
      setApiError(
        "A sever error occured while synchronizing the data. Please try later."
      );
    }
    return false;
  };

  const onSubmit = async (data) => {
    if (data && isValid) {
      const isSuccess = await postDataToRest(data);
      if (isZymfentra) {
        setStep(step + 1);
        setLastStep(true);
      }
      if (isSuccess) {
        setStep(step + 1);
        setLastStep(true);
      } else {
        setStep(step);
      }
    } else {
      setLastStep(false);
    }
  };

  // ISI Collapse
  const readLess = () => {
    window.scrollTo(0, 0);
  };

  const collapseText = () => {
    window.scrollTo(0, isiTextRef.current.offsetTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isiTextRef.current) {
        const sectionTop = isiTextRef.current.getBoundingClientRect().top + 245;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight) {
          setShouldHideDiv(true);
        } else {
          setShouldHideDiv(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {lastStep ? (
        <SubmittedForm data={data} />
      ) : (
        <>
          <section className="rselection roles-section">
            {category === "yuflyma" ? (
              <img src={yuflymaLogo} className="bevacizumab" alt="yuflyma" />
            ) : category === "vegzelma" ? (
              <img src={bevacizumab} className="bevacizumab" alt="vegzelma" />
            ) : category === "zymfentra" ? (
              <img
                src={ZymfentraLogo}
                className="bevacizumab"
                alt="zymfentra"
              />
            ) : null}

            <Container>
              <Row className="justify-content-center">
                <Col lg={8} xl={6}>
                  <div className="rselection-wrap role-wrap">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      {step === 1 && (
                        <Eligibility
                          isPatient={isPatient}
                          nextStep={nextStep}
                          handleCancel={handleCancel}
                          register={register}
                          errors={errors}
                          setModalShow={setModalShow}
                        />
                      )}

                      {step === 2 && (
                        <Enrollment
                          prevStep={prevStep}
                          handleCancel={handleCancel}
                          register={register}
                          errors={errors}
                          apiError={apiError}
                          step={step}
                          loader={loader}
                          control={control}
                        />
                      )}
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {category === "yuflyma" && role === "patient" ? (
            <YuflymaPatient
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}

          {/* Zymfentra */}
          {category === "zymfentra" && role === "patient" ? (
            <ZymfentraPatient
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}

          {category === "yuflyma" && role !== "patient" ? (
            <YuflymaHCP
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}

          {/* Zymfentra */}
          {category === "zymfentra" && role !== "patient" ? (
            <ZymfentraHCP
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}

          {category === "vegzelma" && role === "patient" ? (
            <VegzelmaPatient
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}

          {category === "vegzelma" && role !== "patient" ? (
            <VegzelmaHCP
              shouldHideDiv={shouldHideDiv}
              collapseText={collapseText}
              isiTextRef={isiTextRef}
              readLess={readLess}
            />
          ) : null}
        </>
      )}

      <PopUP
        show={modalShow}
        onHide={() => setModalShow(false)}
        isVegzelma={category === "vegzelma"}
      />
    </>
  );
};

export default InquiryForm;
