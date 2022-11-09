import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import "./IndividualBlog.css";

export const IndividualBlog = ({ heading, description, delay, link }) => {
  const navigate = useNavigate();
  return (
    <Row style={{ paddingBottom: "2%" }}>
      <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      <Col xxl={13} xl={15} lg={18} xs={20} md={18} sm={18}>
        <div
          className="individual-blog-container"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/${link}`)}
          data-aos="fade-up"
          data-aos-delay={delay}
          data-aos-duration="1000"
          data-aos-once
        >
          <h2 className="blog-titles">{heading}</h2>
          <p className="description">{description}</p>
        </div>
      </Col>
      <Col lg={3} xs={2} md={3} sm={3} />
    </Row>
  );
};
