import React from "react";

function TeachersCard(props) {
  return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3">
        <div className="card">
          <img
            src={props.img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-white tchr">
            <h5 className="card-title">David Kanuel</h5>
            <h6 className="card-subtitle mb-2 fst-italic">Teacher</h6>
          </div>
        </div>
      </div>
  );
}

export default TeachersCard;
