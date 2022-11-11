import React, { useEffect } from "react";
// import PropTypes from "prop-types";

function Headings(props) {
  return (
    <div className="container">
      <div className="row pt-5 text-center justify-content-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <h2>{props.heading}</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Headings;

// Headings.propTypes = {
//   heading: PropTypes.string,
// };
