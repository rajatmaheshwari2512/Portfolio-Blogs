import { Row, Col } from "antd";

export const IndividualBlog = ({ heading, description, delay }) => {
  return (
    <Row>
      <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      <Col xxl={6} xl={6} lg={18} xs={20} md={18} sm={18}>
        <div data-aos="fade-up" data-aos-delay={delay} data-aos-duration="1000">
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </Col>
      <Col lg={3} xs={2} md={3} sm={3} />
    </Row>
  );
};
