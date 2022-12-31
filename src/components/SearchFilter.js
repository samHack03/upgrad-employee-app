import React, {useCallback} from "react";

import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem, 
  TextField, 
  Tooltip
} from "@material-ui/core";

//This functional component is used to implement search functionalty based on the category and query provided by the user.


// It takes 
//1.category 
//2.query(data) 
//display employee details in corresponds to the data provided  


//There are various cities,categories options provided to the user .

const SearchFilter = (props) => {
  const {
    category,
    selectedCategory,
    selectedSearchQuery
  } = props;

  const _setData = (value) => {
    selectedSearchQuery(value)
  }

  //Debounce function is being called from here .
  const betterFunc =_setData; // added useCallback to memoize function //

  // const _onChangeCity = (e) => {
  //   selectedCity(e.target.value);
  // }

  const _onChangeCategory = (e) => {
    selectedCategory(e.target.value)
  }


  return (
     <div className="searchFilterContainer">
        <FormControl
            variant="outlined"
            style={{ 
              minWidth: 150, 
              marginRight: "30px" 
            }}
          >
          
            <InputLabel id="select-category-label">Select Category</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              label="Select category"
              value={category}
              onChange={_onChangeCategory}
            >

              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"first_name"}>First Name</MenuItem>
              <MenuItem value={"last_name"}>Last Name</MenuItem>
              <MenuItem value={"profession"}>Profession</MenuItem>
              <MenuItem value={"country"}>Country</MenuItem>
            </Select>
          </FormControl>
          <Tooltip >
          <div className="searchBar">
              <TextField
                disabled={!category}
                fullWidth
                onKeyUp={(e) => {betterFunc(e.target.value)}}
                label="Search"
                variant="outlined"
              />
            </div>
          </Tooltip>
     </div>
  );
}

export default SearchFilter;
