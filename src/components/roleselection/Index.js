// React Imports
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// Custom
import Role from "./Role";
// Images
import PhysicianImg from "../../assets/img/physician.jpg";
import PharmacistImg from "../../assets/img/pharmacist.jpg";
import PatientImg from "../../assets/img/patient.jpg";

const RoleSelection = () => {
  const { category } = useParams();

  const data = [
    {
      title: "Prescriber",
      img: PhysicianImg,
      link: "/inquiry-form/" + category + "?role=prescriber",
    },
    {
      title: "Pharmacist",
      img: PharmacistImg,
      link: "/inquiry-form/" + category + "?role=pharmacist",
    },
    {
      title: "Patient",
      img: PatientImg,
      link: "/inquiry-form/" + category + "?role=patient",
    },
  ];
  return (
    <section className="rselection">
      <Container>
        <div className="rselection-wrap">
          <p>PLEASE CHOOSE WHICH ROLE BEST DESCRIBES YOU</p>
          <Row>
            {data &&
              data.map((item, index) => (
                <Col md={4} key={index}>
                  <Role name={item.title} img={item.img} link={item.link} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default RoleSelection;
