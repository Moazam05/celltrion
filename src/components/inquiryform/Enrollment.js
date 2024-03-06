import moment from 'moment';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Note from "../../assets/img/note-edit.svg";
import { states } from '../../utilities/states';
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';



const Enrollment = ({ prevStep, handleCancel, register, errors, control, step, apiError, loader }) => {

    const { category } = useParams();
    const [role, setRole] = useState("");
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const passedRole = searchParams.get("role");
        if (passedRole) { setRole(passedRole); }
    }, [role]);

    const isVegzelma = category === "vegzelma";

    const today = moment(new Date()).format('YYYY-MM-DD');

    return (
        <div className='step2'>
            <div className='heads-icon'>
                <div className='hi-icon'>
                    <img src={Note} />
                </div>
                <div>
                    <Card.Subtitle className="mb-2 text-muted">Step 2 of 2</Card.Subtitle>
                    <Card.Title>Enrollment Form</Card.Title>
                </div>
            </div>
            <p className='s-description'>Please enter all the required details to submit your enrollment form.</p>
            <h4 className='s-title h4 ptitles'>Patient Information</h4>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" >
                        <Form.Label>Patient First Name*</Form.Label>
                        <Form.Control className={errors.Q_FIRSTNAME && "error"} id='Q_FIRSTNAME' name="Q_FIRSTNAME" {...register("Q_FIRSTNAME", { required: true })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" >
                        <Form.Label>Patient Last Name*</Form.Label>
                        <Form.Control className={errors.Q_LASTNAME && "error"} id='Q_LASTNAME' name="Q_LASTNAME" {...register("Q_LASTNAME", { required: true })} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_ADDRESS1">
                        <Form.Label>Patient Address Line 1*</Form.Label>
                        <Form.Control className={errors.Q_ADDRESS1 && "error"} maxLength="40" id='Q_ADDRESS1' name="Q_ADDRESS1" {...register("Q_ADDRESS1", { required: true })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_ADDRESS2">
                        <Form.Label>Patient Address Line 2</Form.Label>
                        <Form.Control id='Q_ADDRESS2' name="Q_ADDRESS2" maxLength="40" {...register("Q_ADDRESS2")} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_CITY">
                        <Form.Label>Patient City*</Form.Label>
                        <Form.Control className={errors.Q_CITY && "error"} id='Q_CITY' name="Q_CITY" {...register("Q_CITY", { required: true })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_STATE">
                        <Form.Label>Patient State*</Form.Label>
                        {/* <Form.Control maxLength="2" style={{ textTransform: "uppercase" }} className={errors.Q_STATE && "error"} id='Q_STATE' name="Q_STATE" {...register("Q_STATE", { required: true })} /> */}
                        <Form.Select className={errors.Q_STATE && "error"} name="Q_STATE" id="Q_STATE" {...register("Q_STATE", { required: true })}>
                            <option selected disabled value="">Choose</option>
                            {states && states.map((state) => (
                                <option value={state.abbreviation} key={state.name}>{state.name}</option>
                            ))}

                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_ZIP">
                        <Form.Label>Patient Zipcode*</Form.Label>
                        <Form.Control maxLength="5" className={errors.Q_ZIP && "error"} id='Q_ZIP' name="Q_ZIP" {...register("Q_ZIP", { required: true })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_CONTACT_METHOD">
                        <Form.Label>Preferred Method of Contact*</Form.Label>
                        <Form.Select className={errors.Q_CONTACT_METHOD && "error"} name="Q_CONTACT_METHOD" id="Q_CONTACT_METHOD" {...register("Q_CONTACT_METHOD", { required: true })}>
                            <option selected disabled value="">Choose</option>
                            <option value="1">Home</option>
                            <option value="2">Cell</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>

                    <Form.Group className="mb-2 formgroup" controlId="Q_PHONE">
                        <Form.Label>Phone Number *</Form.Label>
                        <InputMask
                            mask="(999) 999-9999"
                            maskChar="_"
                            {...register("Q_PHONE", { required: true })}
                        >
                            {(inputProps) => (
                                <Form.Control
                                    type="tel"
                                    className={errors.Q_PHONE && "error"}
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                    </Form.Group>

            
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHONE_TYPE">
                        <Form.Label>Primary Phone Type*</Form.Label>
                        <Form.Select className={errors.Q_PHONE_TYPE && "error"} name="Q_PHONE_TYPE" id="Q_PHONE_TYPE" {...register("Q_PHONE_TYPE", { required: true })}>
                            <option selected disabled value="">Choose</option>
                            <option value="1">Home</option>
                            <option value="2">Cell</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    {/* <Form.Group className="mb-2 formgroup" controlId="Q_PHONE_2">
                        <Form.Label>Secondary Phone Number</Form.Label>
                        <Form.Control maxLength="10" id='Q_PHONE_2' name="Q_PHONE_2" {...register("Q_PHONE_2")} />
                    </Form.Group> */}



                    <Form.Group className="mb-2 formgroup" controlId="Q_PHONE_2">
                    <Form.Label>Secondary Phone Number</Form.Label>
                        <InputMask
                            mask="(999) 999-9999"
                            maskChar="_"
                            {...register("Q_PHONE_2")}
                        >
                            {(inputProps) => (
                                <Form.Control
                                    type="tel"
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHONE_TYPE_2">
                        <Form.Label>Secondary Phone Type</Form.Label>
                        <Form.Select className={errors.Q_PHONE_TYPE_2 && "error"} name="Q_PHONE_TYPE_2" id="Q_PHONE_TYPE_2" {...register("Q_PHONE_TYPE_2")}>
                            <option selected disabled value="">Choose</option>
                            <option value="1">Home</option>
                            <option value="2">Cell</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_DOB">
                        <Form.Label>Date of Birth*</Form.Label>
                        <Form.Control max={today} type='date' className={errors.Q_DOB && "error"} id='Q_DOB' name="Q_DOB" {...register("Q_DOB", { required: true })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_GENDER">
                        <Form.Label>Sex*</Form.Label>

                        <Form.Select className={errors.Q_GENDER && "error"} name="Q_GENDER" id="Q_GENDER" {...register("Q_GENDER", { required: true })}>
                            <option selected disabled value="">Choose</option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                            <option value="3">Prefer not to answer</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup ms-0" controlId="Q_EMAIL">
                        <Form.Label>Email Address*</Form.Label>
                        <Form.Control className={errors.Q_EMAIL && "error"} type='email' id='Q_EMAIL' name="Q_EMAIL" {...register("Q_EMAIL", {
                            required: true, pattern: {
                                value: /\S+@\S+\.\S+/,
                            }
                        })} />
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <h4 className='s-title h4 step2title'>Prescriber Information</h4>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_FIRSTNAME">
                        <Form.Label>Provider First Name{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control className={errors.Q_PHYSICIAN_FIRSTNAME && "error"} id='Q_PHYSICIAN_FIRSTNAME' name="Q_PHYSICIAN_FIRSTNAME" {...register("Q_PHYSICIAN_FIRSTNAME", { required: isVegzelma })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_LASTNAME">
                        <Form.Label>Provider Last Name{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control className={errors.Q_PHYSICIAN_LASTNAME && "error"} id='Q_PHYSICIAN_LASTNAME' name="Q_PHYSICIAN_LASTNAME" {...register("Q_PHYSICIAN_LASTNAME", { required: isVegzelma })} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_ADDRESS_1">
                        <Form.Label>Provider Address Line 1{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control className={errors.Q_PHYSICIAN_ADDRESS_1 && "error"} maxLength="40" id='Q_PHYSICIAN_ADDRESS_1' name="Q_PHYSICIAN_ADDRESS_1" {...register("Q_PHYSICIAN_ADDRESS_1", { required: isVegzelma })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_ADDRESS_2">
                        <Form.Label>Provider Address Line 2</Form.Label>
                        <Form.Control maxLength="40" id='Q_PHYSICIAN_ADDRESS_2' name="Q_PHYSICIAN_ADDRESS_2" {...register("Q_PHYSICIAN_ADDRESS_2")} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_CITY">
                        <Form.Label>Provider City{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control className={errors.Q_PHYSICIAN_CITY && "error"} maxLength="40" id='Q_PHYSICIAN_CITY' name="Q_PHYSICIAN_CITY" {...register("Q_PHYSICIAN_CITY", { required: isVegzelma })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_STATE">
                        <Form.Label>Provider State{isVegzelma ? "*" : ""}</Form.Label>
                        {/* <Form.Control maxLength="2" id='Q_PHYSICIAN_STATE' name="Q_PHYSICIAN_STATE" {...register("Q_PHYSICIAN_STATE")} /> */}
                        <Form.Select className={errors.Q_PHYSICIAN_STATE && "error"} name="Q_PHYSICIAN_STATE" id="Q_STAQ_PHYSICIAN_STATETE" {...register("Q_PHYSICIAN_STATE", { required: isVegzelma })}>
                            <option selected disabled value="">Choose</option>
                            {states && states.map((state) => (
                                <option value={state.abbreviation} key={state.name}>{state.name}</option>
                            ))}

                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_ZIP">
                        <Form.Label>Provider Zipcode{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control className={errors.Q_PHYSICIAN_ZIP && "error"} maxLength="5" id='Q_PHYSICIAN_ZIP' name="Q_PHYSICIAN_ZIP" {...register("Q_PHYSICIAN_ZIP", { required: isVegzelma })} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    {/* <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_PHONE">
                        <Form.Label>Provider Phone Number{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control maxLength="10" className={errors.Q_PHYSICIAN_PHONE && "error"} id='Q_PHYSICIAN_PHONE' name="Q_PHYSICIAN_PHONE" {...register("Q_PHYSICIAN_PHONE", { required: isVegzelma })} />
                    </Form.Group> */}


                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_PHONE">
                    <Form.Label>Provider Phone Number{isVegzelma ? "*" : ""}</Form.Label>
                        <InputMask
                            mask="(999) 999-9999"
                            maskChar="_"
                            {...register("Q_PHYSICIAN_PHONE", { required: isVegzelma })}
                        >
                            {(inputProps) => (
                                <Form.Control
                                    type="tel"
                                    className={errors.Q_PHYSICIAN_PHONE && "error"}
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={role !== "patient" ? 6 : 5}>
                    {/* <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_FAX">
                        <Form.Label>Provider Fax Number{isVegzelma ? "*" : ""}</Form.Label>
                        <Form.Control maxLength="10" className={errors.Q_PHYSICIAN_FAX && "error"} id='Q_PHYSICIAN_FAX' name="Q_PHYSICIAN_FAX" {...register("Q_PHYSICIAN_FAX", { required: isVegzelma })} />
                    </Form.Group> */}

                    <Form.Group className="mb-2 formgroup" controlId="Q_PHYSICIAN_FAX">
                    <Form.Label>Provider Fax Number{isVegzelma ? "*" : ""}</Form.Label>
                        <InputMask
                            mask="(999) 999-9999"
                            maskChar="_"
                            {...register("Q_PHYSICIAN_FAX", { required: isVegzelma })}
                        >
                            {(inputProps) => (
                                <Form.Control
                                    type="tel"
                                    className={errors.Q_PHYSICIAN_FAX && "error"}
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                    </Form.Group>
                </Col>
                {role !== "patient" &&
                    <Col sm={6}>
                        <Form.Group className="mb-2 formgroup" controlId="Q_NPI">
                            <Form.Label>Provider NPI Number</Form.Label>
                            <Form.Control maxLength="10" id='Q_NPI' name="Q_NPI" {...register("Q_NPI")} />
                        </Form.Group>
                    </Col>
                }
            </Row>
            {role !== "patient" && <Row>
                <Col sm={6}>
                    <Form.Group className="mb-2 formgroup ms-0" controlId="Q_TIN">
                        <Form.Label>Provider Tax ID Number (TIN)</Form.Label>
                        <Form.Control maxLength="9" id='Q_TIN' name="Q_TIN" {...register("Q_TIN")} />
                    </Form.Group>
                </Col>
            </Row>
            }
            <Form.Control type='hidden' id='Q_GOVT_PAID' defaultValue="N" name="Q_GOVT_PAID" {...register("Q_GOVT_PAID")} />
            <Form.Control type='hidden' id='Q_HIPAA_DATE_TIME' name="Q_HIPAA_DATE_TIME" {...register("Q_HIPAA_DATE_TIME")} />
            <Form.Control type='hidden' id='Q_HIPAA_CONSENT' defaultValue="Y" name="Q_HIPAA_CONSENT" {...register("Q_HIPAA_CONSENT")} />
            <Form.Control type='hidden' id='Q_CAM_ID' defaultValue="8109" name="Q_CAM_ID" {...register("Q_CAM_ID")} />
            <Form.Control type='hidden' id='Q_PHYSICIAN_CONSENT' defaultValue="Y" name="Q_PHYSICIAN_CONSENT" {...register("Q_PHYSICIAN_CONSENT")} />
            <Form.Control type='hidden' id='Q_BENEFIT_TYPE' name="Q_BENEFIT_TYPE" {...register("Q_BENEFIT_TYPE")} />
            <Form.Control type='hidden' id='Q_DRUG' name="Q_DRUG" {...register("Q_DRUG")} />
            <Form.Control type='hidden' id='Q_ENROLLER_TYPE' name="Q_ENROLLER_TYPE" {...register("Q_ENROLLER_TYPE")} />
            <hr />
            <span className='error'>{apiError}</span>
            <div className='form-buttons'>
                <div className='s2-button'>

                    <Button className='backbtn' onClick={prevStep}>
                        Back
                    </Button>
                    <Button className="theme-button theme-button-primary nextlg" disabled={loader} type="submit">
                        {loader ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Next"}
                    </Button>
                </div>
                <Button onClick={handleCancel} variant="light" className='theme-button theme-button-text'>
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default Enrollment