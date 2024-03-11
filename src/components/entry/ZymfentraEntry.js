// React Imports
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// Images
import entryImage from "../../assets/img/yuflyma-entry.jpg";

const ZymfentraEntry = () => {
  return (
    <section
      className="entry"
      style={{ backgroundImage: `url(${entryImage})` }}
    >
      <Container>
        <div className="entry-text">
          <Link to="/role-selection/zymfentra" className="theme-btn">
            Enroll in Co-Pay Program
          </Link>
          <p className="text-1">
            Commercially insured patients taking ZYMFENTRA
            <sup>&trade;</sup> may be able to receive assistance through the
            Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program
          </p>
          <h5>
            If eligible, patients may pay as little as $0 for ZYMFENTRA
            <sup>&trade;</sup>.
          </h5>
          <p className="text-2">
            Celltrion CARES<sup>&trade;</sup> provides assistance to help with
            patient out-of-pocket costs for ZYMFENTRA
            <sup>&trade;</sup>.
          </p>
          <p className="text-3">
            In order to be eligible for Celltrion CARES<sup>&trade;</sup> Co-Pay
            Assistance, patients:
          </p>
          <ul>
            <li>Must have commercial insurance</li>
            <li>
              Must not have Medicare, Medicaid, or other government insurance
            </li>
            <li style={{ lineHeight: 1.5 }}>
              Must meet certain guidelines set forth in the Terms and Conditions
              for the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance
              Program
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ZymfentraEntry;
