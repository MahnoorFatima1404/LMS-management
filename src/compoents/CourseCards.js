import React from "react";

function CourseCards(props) {
  return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
        <div className="card text-center">
          <div className="img-tip">
            <img src={props.course} className="card-img-top" alt="..." />
            <span className="card-tip">{props.tip}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              ELIT DUIED AIUSMOD TEMPOR DID LABORE DOLORY
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="text-white btn">
              Apply Online
            </a>
          </div>
        </div>
      </div>
  );
}

export default CourseCards;
