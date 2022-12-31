import React from "react";

import '../../css/styles.css';

 
const ResumeLeftColumn= () =>  {

  return (

    <div className="leftContent">
        <div>
                <h4>EXPERIENCE</h4>
                <p><b># GROWW</b> | SOFTWARE DEVELOPER INTERN</p>
                <p>July 2022 – Present | Bangalore,India</p>
                <ul>
                    <li>• Working in Stocks Investment team at Groww</li> <br/>
                    <li>• Reduced the manual effort ofBackOffice Business team by 90% by
                            creating portal for updating stock core data </li> <br/>
                    <li>• Restructured the codebase for Option Chain and made stocks expiry persistent, reduced user’s effort by 25%.</li> <br/>
                    <li>• Tech Stack :- React, Typescript, Github.</li> <br/>
                </ul>
                <p><b># EDUDICTIVE </b> | WEB DEVELOPER</p> 
                <p>February 2021 – April 2021 | Delhi, India</p>
                <ul>
                    <li>• Developed a web portal for educational courses offered by Edudictive.The web app was user friendly and helps school kids to learn asily from our platform .</li> <br/>
                    <li>• Designed web portal layout using Figma and implemented using Plugins in WordPress. </li> <br/>
                    <li>• Tech Stack :- Wordpress, Plugins, Figma .</li> <br/>
                </ul>
        </div>
        <br/>
        <div className="cdiv"></div>
     
        <div>
                <h4>PROJECTS</h4>
                <p><b>EASYCV</b> | React Application | <a href="https://github.com/Sumant03/ResumeBuilder">Link</a></p>
                <ul>
                    <li>• Developed a web app to help all professionals to easily make their CV which is as per Industry Standards and looks professional.</li> <br/>
                    <li>• Web app helped 10 - 15 users to create resume by choosing among different templates based on job role .</li> <br/>
                    <li>• Tech Stack :- ReactJs (Redux, Hooks), Firebase, Javascript, Css, Html.</li> <br/>
                </ul>
                <p><b># EXCELYOURDATA </b> | Front-End Application | <a href='https://elaborate-buttercream-85a190.netlify.app/'>Link</a></p> 
                <ul>
                    <li>• ExcelYourData project aims to develop Excel Clone that performsall logical operations and Excel functionalities using Javascript and LocalStorage.</li> <br/>
                    <li>• Graph and Recursion as a data structure concept are being used toimplement parent child relationship.</li> <br/>
                    <li>• Tech Stack :- Javascript, Css(Bootstrap), Html, LocalStorage.</li> <br/>
                </ul>
                <p><b># COVID RELIEF </b> | Automation Script | <a href='https://github.com/Sumant03/Covid-Relief/'>Link</a></p> 
                <ul>
                    <li>• Aims to help people affected by Covid19. Using automation script it retrieves available oxygen beds in nearby hospitals, shows available vaccine slots on COWIN portal.</li> <br/>
                    <li>• End-to-end automated service can help to reduce hassle and improve productivity by 50%.</li> <br/>
                    <li>• Tech Stack :- NodeJS, Puppeteer, Cheerio, Automation.</li> <br/>
                </ul>
        </div>

        <div className="cdiv"></div>
    </div>
        
  );
}

export default ResumeLeftColumn;

