import React from "react";

import {data} from '../../data';

import '../../css/styles.css';

 
//This component is build to display all the bank details user has liked .


//It check if the heart icon is active or not ,
// if it is active it will display all the favourite banks 
//else it will display no data found  

const ResumeHeader= (props) =>  {

 let eData=data[0];


  return (
    <>
    <div className="maindiv" align='center'>

      <div> <h1>{eData["first_name"]+" " +eData["last_name"]}</h1></div>
      <div> {eData.phone_number} || {eData.email} || {eData.country}</div>



        
    </div>
          <div className="ptitle">An aspiring Software Developer  with 6 months of working experiece as SDE intern at Groww.I am an open source enthusiat and an Intuitive learner. I always  aspire to excel in my field, I believe in team spirit and work in collaboration.</div>
   </>
  );
}

export default ResumeHeader;

