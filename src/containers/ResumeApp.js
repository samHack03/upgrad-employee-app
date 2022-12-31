import React from "react";

import ResumeHeader from "../components/Resume/ResumeHeader";
import ResumeLeftColumn from '../components/Resume/ResumeLeftColumn';
import ResumeRightColumn from '../components/Resume/ResumeRightColumn';

import '../css/styles.css'

// This is the Component where we have statically made our Resume.

const ResumeApp= (props) =>  {

  return (
    <div className="maindiv">
      <div className="borderdiv">
        <ResumeHeader/>
        <div className="middleContent">
          <ResumeLeftColumn/>
          <ResumeRightColumn/>
        </div>
      </div>

    </div>
  );
}

export default ResumeApp;

