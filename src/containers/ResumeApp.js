import React from "react";

import ResumeHeader from "../components/Resume/ResumeHeader";
import ResumeMiddle from '../components/Resume/ResumeMiddle'

import '../css/styles.css'

 
//This component is build to display all the bank details user has liked .


//It check if the heart icon is active or not ,
// if it is active it will display all the favourite banks 
//else it will display no data found  

const ResumeApp= (props) =>  {




  return (
    <div className="maindiv">
      <div className="borderdiv">
        <ResumeHeader/>
        <ResumeMiddle/>
      </div>

    </div>
  );
}

export default ResumeApp;

