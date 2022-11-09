import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./BlogPage.css";

import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import axios from "axios";
import { Row, Col } from "antd";

function useMDX(content) {
  const [exports, setExports] = useState({ default: runtime.Fragment });

  useEffect(() => {
    evaluate(content, { ...runtime }).then((exports) => setExports(exports));
  }, [content]);

  return exports;
}

export const BlogPage = () => {
  const { link } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (link) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/${link}`).then((resp) => {
        setBlog(resp.data);
      });
    }
  }, [link]);

  const exports = useMDX(blog);
  const Content = exports.default;
  return (
    <Row style={{ marginTop: "17vh" }}>
      <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      <Col xxl={13} xl={15} lg={18} xs={20} md={18} sm={18}>
        <Content />
      </Col>
    </Row>
  );
};
