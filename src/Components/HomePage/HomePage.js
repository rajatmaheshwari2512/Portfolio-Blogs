import { useState, useEffect } from "react";

import { IndividualBlog } from "../IndividualBlog/IndividualBlog";

import { Row, Col } from "antd";
import axios from "axios";

export const HomePage = () => {
  const [listofblogs, setListOfBlogs] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://ipfs.filebase.io/ipfs/QmSe6jJF5s6XWvD4N7NEPn9AEjxa337BPF1iY2E1qJm86K"
      )
      .then((resp) => {
        resp.data = resp.data.split("\n");
        resp.data.shift();
        let blogData = [];
        resp.data.map((blog) => {
          blog = blog.split(",");
          blogData.push({
            heading: blog[0],
            description: blog[1],
            link: blog[2],
          });
        });
        setListOfBlogs(blogData);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <h1 data-aos="fade-in" data-aos-duration="1500">
          Home Page
        </h1>
      </Row>
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
  );
};
