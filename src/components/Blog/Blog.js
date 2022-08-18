import React, { useState } from "react";
import BlogMap from "../Blog/BlogMap";

import {Link} from 'react-router-dom';

export const Blog = () => {
  const [blog, setBlog] = useState(BlogMap);
  return (
    <div className="blog padding-top padding-bottom">
      <div className="container">
          <h1 className="my-3">Blog</h1>
        <div className="row equal">
          {blog.map((item, index) => (
            <div className="col-md-6 col-lg-4 col-sm-12" key={index}>
              <div className="blog-card">
                <div className="blog-card-image">
                  <Link to="/blog-details">
                  <img
                    src={item.image}
                    alt="images"
                    className="img-fluid d-block m-auto"
                  />
                  </Link>
                  <div className="card-detail">
                    <p>{item.date}</p>
                    <h5>
                      The Window Know to <br /> say beside you
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};
