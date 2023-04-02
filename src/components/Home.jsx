import React from "react";
import imgSrc from "../assets/images/avataaars.svg";
export default function Home() {
  return (
    <div
      className="  text-white py-4 justify-content-center align-items-center"
      id="home"
    >
      <div className="container pt-5">
        <div className="row ">
          <div className="homeImage pt-5 mb-5">
            <img src={imgSrc} />
          </div>
          <div className="websiteTitle homeTitle">
            <h1 className="text-uppercase mb-0">Start React</h1>
          </div>
          <div className="dividerParent  my-3">
            <div className="row justify-content-center ">
              <div className=" divider-line divider-line-light"></div>
              <div className="divider-icon ">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-line divider-line-light"></div>
            </div>
          </div>
          <div className="homeDescreption">
            <p className="py-3 mb-5">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
