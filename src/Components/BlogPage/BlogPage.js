import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      axios
        .get(
          `https://ipfs.filebase.io/ipfs/QmZJrLq2SC5qsMRKzNQnyZsWzV5m2oiZTRu7SuhKEmGiaD`
        )
        .then((resp) => {
          setBlog(resp.data);
        });
    }
  }, []);

  const exports = useMDX(blog);
  const Content = exports.default;
  return <Content />;
};
