import React from "react";

import '../../css/styles.css';

const ResumeRightColumn= () =>  {

  return (
 

    <div className="rightContent">

        <div>
            <h4>SKILLS</h4>
            <p># Frameworks</p>
            <ul>
                <li>• React JS </li> <li>• Node.js </li> <li>• Django</li>
            </ul>
            <p># Languages</p>
            <ul>
                <li>• Javascript </li> <li>• Java </li> <li>• C</li> <li>• Python</li>
            </ul>
            <p># Tools</p>
            <ul>
                <li>• Git&Github </li> <li>• VS Code </li> <li>• Puppeteer</li>
            </ul>
        </div>
        <div className="cdiv"></div>
        <div>
            <h4>EDUCATION</h4>
            <p><b>• GGSIPU</b></p>
            <ul>
                <li><b>Bhagwan Parshuram Institute of Technology</b></li>
                <br/>
                <li>B. Tech Computer Science</li><br/>
                <li>CGPA : 9.73</li>
            </ul>
            <p><b>• SARVODAYA VIDYALAYA</b></p>
            <ul>
                <li><b>CBSE</b></li>
                <br/>
                <li><b>PCMB</b></li> <br/>
                <li>PERCENTAGE : 92</li>
            </ul>
        </div>

        <div className="cdiv"></div>

        <div>
            <h4>LINKS</h4>
            <ul>
            • Leetcode : <li><a href='https://leetcode.com/Sumant03/'>Sumant03</a></li><br/>
            • CodeChef : <li><a href='https://www.codechef.com/users/sumant03'>Sumant03</a></li><br/>
            • LinkedIn : <li><a href='https://www.linkedin.com/in/sumant-sharma03/'>Sumant Sharma</a></li><br/>
            • Github : <li><a href='https://github.com/Sumant03'>Sumant03</a></li>
            </ul>
        </div>

        <div className="cdiv"></div>

        <div>
            <h4>ACHIEVEMENT</h4>
            <ul>
                <li>• University Rank 2 - Semester 2</li>  <br/>
                <li>• University Rank 5 - Semester 1 </li>  <br/>
                <li>• 3rd RunnerUp Pep Hackathon</li>  <br/>
                <li>• Head #define technical society</li> <br/>
                <li>• Google DevFest'21  Quiz Winner</li><br/>
                <li>• Codechef rating 1645</li> <br/>
                <li>• Developed Bodh Journal BPIT website</li>
            </ul>
        </div>

        <div className="cdiv"></div>

        <div>
            <h4>OPEN SOURCE</h4>
            <ul>
                <li>• Contributed in GWOC’21, GSSOC’21</li>  <br/>
                <li>• Contributed in HacktoberFest’21 </li>  <br/>
            </ul>
            <div className="cdiv"></div>
        </div>

    </div>

  );
}

export default ResumeRightColumn;

