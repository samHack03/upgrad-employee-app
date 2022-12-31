import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



//All empList are being displayed using this functional component . It renders all details of employee in different rows . 
//If the data is not present it will redirect that employee details not found 
//Material UI TableContainer is being used to display employee details in table format 

const EmpList = (props) =>  {
  const {
    empList,
    loading
  } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: "300px", width:"80%" ,margin:"auto"}} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#4f4c4c", height: '30px' }}>
            <TableRow>
              <TableCell align="center"style={{color: "white"}}>First Name</TableCell>
              <TableCell align="center" style={{color: "white"}}>Last Name</TableCell>
              <TableCell align="center" style={{color: "white"}}>Profession</TableCell>
              <TableCell align="center" style={{color: "white"}}>Level</TableCell>
               <TableCell align="center" style={{color: "white"}}>Country</TableCell> 
               <TableCell align="center" style={{color: "white"}}>Favourite</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="progress"><CircularProgress /></div>
                </TableCell>
              </TableRow>
            ) : 
                <>
                { empList.length>0 ? empList.map((eData)=>{
                   return (
                   <TableRow>
                  <TableCell align="center" width="150" className="column">
                    {eData["first_name"]}
                    
                  </TableCell>
                  <TableCell align="center" width="120" className="column">
                  {eData.last_name}
                  </TableCell>
                  <TableCell align="center" width="150" className="column">
                  {eData.profession}
                  </TableCell>
                  <TableCell align="center" width="50" className="column" >
                  {eData.level}
                  </TableCell>
                  <TableCell align="center" className="column">
                    {eData.country}
                  </TableCell>
                  <TableCell align="center" className="column">
                    <div>
                  <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} />
                      </div>
                  </TableCell>
                   
                  </TableRow>
                   )
                }):
                <TableRow>
                  <TableCell colSpan={6}>
                   <div className="error">
                   No such Employee exist , please fill correct details
                    </div>
                  </TableCell>
                </TableRow>
                }
                </>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmpList;

