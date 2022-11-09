import { useState, useEffect } from "react";

import { IndividualBlog } from "../IndividualBlog/IndividualBlog";

import "./HomePage.css";

import { Row, Col } from "antd";
import axios from "axios";

export const HomePage = () => {
  const [listofblogs, setListOfBlogs] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((resp) => {
        let blogData = [];
        resp.data.map((blog) => {
          return blogData.push({
            heading: blog[0],
            description: blog[1],
            link: blog[2],
          });
        });
        setListOfBlogs(blogData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homepage-container">
      <Row style={{ marginTop: "17vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={14}
          xl={14}
          lg={17}
          xs={20}
          md={18}
          sm={18}
          style={{
            textAlign: "left",
          }}
        >
          <p
            className="blog-heading"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-once
          >
            <b>Blogs</b>
          </p>
          <p
            data-aos="fade"
            data-aos-delay="1000"
            data-aos-once
            className="blog-description"
          >
            A glimpse into my jumbled mess of a mind
          </p>
        </Col>
      </Row>
      <div style={{ marginTop: "20px" }}>
        {listofblogs &&
          listofblogs.map((blog, index) => {
            return (
              <IndividualBlog
                key={index}
                delay={index * 100}
                heading={blog.heading}
                description={blog.description}
                link={blog.link}
              />
            );
          })}
      </div>
    </div>
  );
};
