import React from "react";

const SectionTitle = (props) => {
  return (
    <>
      <div className="container">
        <div className="SecTitleBox mb-3">
          <h1 className="SecTitle text-capitalize">{props.title}</h1>
          <p className="SecTitleBg text-uppercase">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
