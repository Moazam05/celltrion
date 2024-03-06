import React from "react";
import "./cookieAccept.scss";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieAccept = () => {
    return (
        <div className="cookieAccept">
            {/* Basic */}
            {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

            {/* option */}
            <CookieConsent
                disableStyles
                location="none"
                buttonText="Accept"
                cookieName="celltrionCoPayAnalytics"
                buttonClasses="theme-btn"
                enableDeclineButton="true"
                declineButtonClasses="theme-btn"
                declineButtonText="Decline"
                buttonWrapperClasses="btn-wrapper"
                overlay
                overlayClasses="overlayclass"
            // style={{ background: "#2B373B" }}
            // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            // expires={150}
            >
                <div id="sf-consent__id" tabindex="0" >
                    <div className="sf-consent__content">

                        <header className="sf-consent__header"><h4 className="header_title">We use cookies</h4></header>
                        <div className="modal-main">
                            <p className="content-description">This website uses cookies to monitor and improve site performance, analyze traffic, and to show you things you may be interested in. If you agree to the use of these cookies, click Accept below.</p>

                        </div>
                    </div>
                </div>
            </CookieConsent>
        </div>
    );
};

export default CookieAccept;
