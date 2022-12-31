import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import SearchFilter from '../components/SearchFilter';
import EmpList from '../components/EmpList';
import Pagination from '../components/Pagination';

import {data} from '../data'; 

import '../App.css';

//This is the Main Function component of app which gathers all the child component.


//Child Components:-


//1. Navbar :- it has various search filters for city , category and a input field for writing query by the user 

//2. EmpList :- it displays all the employee details fetched by the provided API .

//3. Pagination :- it help to implement the feature of pagination , to display only specified 
//number of employees per page 

//4. Dynamic Pagination :- this component takes input value from user and displays only that 
//number of employee per page 


const AllEmp = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [val,setVal]=useState(7);
    const [empList, setEmpList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [paginatedList, setPaginatedList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
      if (searchQuery !== "" && category !=="") {
        setFilteredList(
          empList.filter((emp) => {
            return emp[category].toLowerCase().startsWith(searchQuery.toLowerCase());
          })
        );
      }
    }, [empList, category, searchQuery]);



    useEffect(() => {
            setEmpList(data)
            setFilteredList(data)
            setLoading(false);
    },[])

    useEffect(() => {
        setFilteredList(empList);
        if (searchQuery !== "" && category !=="") {
          setFilteredList(
            empList.filter((emp) => {
              return emp[category].toLowerCase().startsWith(searchQuery.toLowerCase());
            })
          );
        }
      }, [empList, category, searchQuery]);


    useEffect(() => {
        setVal(val)
        const lastPageIndex = currentPage *val;   //  Number of employees on each page : default 10 //
        const firstPageIndex = lastPageIndex - val;
        const modilyList = filteredList.slice(firstPageIndex, lastPageIndex);
        setPaginatedList(modilyList);
      }, [filteredList, currentPage,val]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   return (
    <div className="allEmpsContainer">
        <div className="searchFilter" >
        <div className="heading" style={{display:"flex" ,paddingRight:"20px"}}>
          <div style={{display:"flex" ,paddingRight:"20px"}}>Home</div> 
          <div className="empsList"><Link to="/resume-app" style={{textDecoration:'none',color:'black'}}>ResumeApp</Link>
           </div>
        </div>
          <SearchFilter
           category={category}
           selectedCategory={setCategory}
           selectedSearchQuery={setSearchQuery}    
          />
        </div>


        <div className="empsList">
          <EmpList
           empList={paginatedList}
           loading={loading}
           />
        </div>
        <div style={{display:"flex", position:"relative"}}>
        <div className="pagination" align="center">
          <Pagination
          
            totalLength={filteredList.length}
            paginate={paginate}
          />
        </div>
        <div>Enter No. of Employee to Display</div>
         <div align="center"><input type="text" onKeyUp={(e)=> {if(e.key==="Enter"){
           setVal(e.target.value)}
         }}/></div>
        </div>
    </div>
  );
}

export default AllEmp;
