import React, { useState } from "react";

function FeaturesCard({ heading, description, isLike }) {
  const [like, changeLike] = useState(isLike);
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-3">
      <div className="card crd-cntnt">
        <div className="card-body text-center">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{description}</p>
          {/* <p
            onClick={() => {
              changeLike(!like);
            }}
            style={{ backgroundColor: like ? "green" : "red" }}
          >
            Like
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
