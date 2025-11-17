// components/IntroSection.tsx
import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section id="about" className="intro">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="intro-inner">
              <div className="inner-left">
                <h1 className="title">YEP! THAT'S ME</h1>
                <p className="description">With T POSE</p>
              </div>
              <div className="inner-right">
                <img
                  src="assets/"
                  alt="Picture"
                  className="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
