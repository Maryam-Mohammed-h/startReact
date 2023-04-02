import React from "react";
import cabin from "../assets/images/cabin.png";
import cake from "../assets/images/cake.png";
import game from "../assets/images/game.png";
import circus from "../assets/images/circus.png";
import safe from "../assets/images/safe.png";
import submarine from "../assets/images/submarine.png";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container pt-4">
        <div className="websiteTitle websiteTitleDark">
          <h2 className="text-uppercase mb-0">Portfolio</h2>
        </div>
        <div className="dividerParent  my-3">
          <div className="row justify-content-center ">
            <div className=" divider-line divider-line-dark"></div>
            <div className="divider-icon divider-icon-dark">
              <i className="fa fa-star"></i>
            </div>
            <div className="divider-line divider-line-dark"></div>
          </div>
        </div>

        <div className="row" id="portfolioModal">
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content"></div>
            </div>
          </div>
        </div>
        <div className="row py-4 g-3" id="portfolioImages">
          <div
            className="col-4 "
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              <img src={cabin} alt="LOG CABIN" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="  col-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              <img src={cake} alt="TASTY CAKE" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" col-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              <img src={circus} alt="CIRCUS TENT" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              <img src={game} alt="CONTROLLER" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              {" "}
              <img src={safe} alt="LOCKED SAFE" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <div className="card position-relative">
              <img src={submarine} alt="SUBMARINE" />
              <div className="overlayImage position-absolute ">
                <div className="overlayIcon">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
