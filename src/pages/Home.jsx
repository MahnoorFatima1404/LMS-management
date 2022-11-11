import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import CourseCards from "../compoents/CourseCards";
import FeaturesCard from "../compoents/FeaturesCard";
import Headings from "../compoents/Headings";
import NewsCard from "../compoents/NewsCard";
import TeachersCard from "../compoents/TeachersCard";

const FEATURES_DATA = [
  {
    isLike: true,
    heading: "Expert Faculty",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    heading: "Expert Faculty",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    heading: "Expert Faculty",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    heading: "Expert Faculty",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

function Home() {
  const [entries, upsdateEntries] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.publicapis.org/entries")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       upsdateEntries(data.entries)
  //     })
  //     .catch(() => {});
  // }, []);
  return (
    <>
      <Container fluid className="bg-img">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={8} sm={12} xs={12}>
              <h2>Best Free Educational Templates</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a place holder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <Button type="button" className="btn btn-theme text-white">
                Apply Online
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Headings heading="Key Features" />
      <Container>
        <Row>
          {FEATURES_DATA.map((item, index) => {
            const { description, heading, isLike } = item;
            return (
              <FeaturesCard
                // isLike={isLike}
                description={description}
                heading={heading}
              />
            );
          })}

          {/* <FeaturesCard heading="Well Equipped Labs" />
          <FeaturesCard heading="Quality Education" />
          <FeaturesCard heading="24 x 7 Access" /> */}
        </Row>
      </Container>
      <Headings heading="Our Courses" />
      <Container>
        <Row>
          <CourseCards
            course={require("../assets/images/4.jpg")}
            tip="Advanced Physics"
          />
          <CourseCards
            course={require("../assets/images/5 (1).jpg")}
            tip="Web Development"
          />
          <CourseCards
            course={require("../assets/images/6.jpg")}
            tip="Nuclear Science"
          />
        </Row>
      </Container>
      <div className="container">
        <div className="row">
          <CourseCards
            course={require("../assets/images/7.jpg")}
            tip="Digital Marketing"
          />
          <CourseCards
            course={require("../assets/images/8.jpg")}
            tip="Artificial Intelligence"
          />
          <CourseCards
            course={require("../assets/images/5 (1).jpg")}
            tip="Environmental science"
          />
        </div>
      </div>
      <Headings heading="Latest News" />
      <div className="container">
        <div className="row">
          <NewsCard news={require("../assets/images/b1.jpg")} />
          <NewsCard news={require("../assets/images/b2.jpg")} />
        </div>
      </div>
      <Headings heading="Our Teachers" />
      <div className="container">
        <div className="row">
          <TeachersCard img={require("../assets/images/team-memb1.jpg")} />
          <TeachersCard img={require("../assets/images/team-memb2.jpg")} />
          <TeachersCard img={require("../assets/images/team-memb3.jpg")} />
          <TeachersCard img={require("../assets/images/team-memb4.jpg")} />
        </div>
      </div>
    </>
  );
}

export default Home;
