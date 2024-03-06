import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import CookieAccept from "../popup/cookieAccept";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Captcha = () => {
    const navigate = useNavigate();
    useEffect(() => {
        loadCaptchaEnginge(8, "#F1F8FB");
    }, []);

    const doSubmit = () => {
        let user_captcha = document.getElementById("user_captcha_input").value;
        // if (validateCaptcha(user_captcha) == true) {
        //     navigate('entry');
        //     loadCaptchaEnginge(6, "#F1F8FB");
        //     document.getElementById("user_captcha_input").value = "";
        // } else {
        //     alert("Captcha Does Not Match");
        //     document.getElementById("user_captcha_input").value = "";
        // }
        if (validateCaptcha(user_captcha) === true) {
            localStorage.setItem("captcha", user_captcha);
            navigate('entry');
            loadCaptchaEnginge(6, "#F1F8FB");
            document.getElementById("user_captcha_input").value = "";
        } else {
            navigate('entry');
            // alert("Captcha Does Not Match");
            document.getElementById("user_captcha_input").value = "";
        }
    };

    return (
        <section className='captcha'>
            <Container>
                <div className='captcha-box'>
                    <div className='captcha-header'>
                        <h5>Match the characters in the picture</h5>
                    </div>
                    <div className='captcha-body'>
                        <p>To continue, type the characters you see in the picture.</p>

                        <div className='captcha-recaptcha'>
                            <LoadCanvasTemplate
                                reloadText={`<i class="fas fa-sync"></i>`}
                                reloadColor="black" />
                            <p>The picture contains 8 characters.</p>
                        </div>
                        <form onSubmit={doSubmit}>
                            <div className='captcha-input'>
                                <span>Characters:</span>
                                <input
                                    id="user_captcha_input"
                                    name="user_captcha_input"
                                    type="text"
                                ></input>
                            </div>
                            <div className='captcha-submit'>
                                <button type='submit'>
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                    <CookieAccept />
                </div>
            </Container>
        </section>
    )
}

export default Captcha