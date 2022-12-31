import React from "react";

import ResumeHeader from "../components/Resume/ResumeHeader";
import ResumeLeftColumn from '../components/Resume/ResumeLeftColumn';
import ResumeRightColumn from '../components/Resume/ResumeRightColumn';

import '../css/styles.css'


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

