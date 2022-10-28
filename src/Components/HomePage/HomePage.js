import { useState } from "react";

import { IndividualBlog } from "../IndividualBlog/IndividualBlog";

import { Row, Col } from "antd";

export const HomePage = () => {
  const [tempBlog, setTempBlog] = useState([
    {
      heading: "heading1",
      description: "description1",
    },
    {
      heading: "heading2",
      description: "description2",
    },
    {
      heading: "heading3",
      description: "description3",
    },
  ]);
  return (
    <div>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <h1>Home Page</h1>
      </Row>
      {tempBlog &&
        tempBlog.map((blog, index) => {
          console.log(index);
          return (
            <IndividualBlog
              delay={index * 100}
              heading={blog.heading}
              description={blog.description}
            />
          );
        })}
    </div>
  );
};
