import React from "react";

export default function About() {
  return (
    <div className=" text-white py-3" id="about">
      <div className="container pt-4">
        <div className="websiteTitle homeTitle">
          <h2 className="text-uppercase mb-0">About</h2>
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
        <div className="row justify-content-center py-5">
          <div className="col-4">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization
            </p>
          </div>
          <div className="col-4">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
