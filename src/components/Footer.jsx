import React from "react";

export default function Footer() {
  return (
    <div className="text-white " id="footer">
      <div className="container pt-4">
        <div className="row justify-space-around">
          <div className="col-4">
            <h4>LOCATION</h4>
            <p className="footerAddress">
              2215 John Daniel Drive Clark, MO 65243
            </p>
          </div>
          <div className="col-4">
            <h4>AROUND THE WEB</h4>
            <ul className=" d-flex justify-content-around">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-basketball"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4>ABOUT FREELANCER</h4>
            <p className="footerAddress">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by Route
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 text-center" id="copyrightFooter">
        <span>Copyright © Your Website 2021</span>
      </div>
    </div>
  );
}
