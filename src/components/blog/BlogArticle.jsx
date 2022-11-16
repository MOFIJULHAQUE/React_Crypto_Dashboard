import React, { useContext, useState } from "react";
import { BlogContext } from "./BlogContext";

import "../../styles/Blog.css";

const BlogArticle = (props) => {
  const { data } = useContext(BlogContext);

  const default__img = `https://media.istockphoto.com/id/904658652/es/foto/litecoin-y-bitcoin-etereum.jpg?s=612x612&w=0&k=20&c=BTQ1dso4v_nC5rFe93UH_xvXwZAdX5iiOxrOuFGN1BI=`;

  return (
    <>
      <div className="header__text">
        <h1>Crypto Blog</h1>
        <p>Get crypto market updates every day</p>
      </div>

      <div className="separator"></div>

      <div className="all__blogs">
        {data ? (
          data.results.map((blog) => {
            return (
              <>
                <div className="blogs">
                  <div className="blog__img">
                    <img
                      src={blog.image_url ? blog.image_url : default__img}
                      alt="image"
                    />
                  </div>
                  <div className="blog__content">
                    <h1 className="blog__title">{blog.title}</h1>
                    <p className="blog__desc">{blog.description}</p>
                    <div className="more__info">
                      <span className="blog__author">
                        <b>Author :</b> {blog.creator}
                      </span>{" "}
                      <a href={blog.link} className="readMore" target="_blank">
                        Read More...
                      </a>
                    </div>
                    <br />
                    <span className="blog__country">{blog.country}</span>
                    <span className="blog__published">{blog.pubDate}</span>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1 className="loading__text">Loading....</h1>
        )}
      </div>
    </>
  );
};

export default BlogArticle;
