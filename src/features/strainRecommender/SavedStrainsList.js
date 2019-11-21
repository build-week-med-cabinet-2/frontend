import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Strain from "./Strain";

const SavedStrainsList = (props) => {
  const savedStrains = useSelector(state => state.strains.savedStrains);

  const [filters, setFilters] = useState({
    search: '',
    type: 'select'
  })
  const [searchResults, setSearchResults] = useState(savedStrains);

  useEffect(() => {
    const lowerCaseSearch = filters.search.toLowerCase();
    let results = savedStrains.filter(strain => 
        strain.name.toLowerCase().includes(lowerCaseSearch)
        || strain.benefit.toLowerCase().includes(lowerCaseSearch)
        || strain.type.toLowerCase().includes(lowerCaseSearch)
        || strain.description.toLowerCase().includes(lowerCaseSearch)
      );

      results = results.filter(strain => 
          filters.type === 'select' || strain.type.toLowerCase().includes(filters.type)
        );
    
      setSearchResults(results);
  },[filters])

  const handleChange = e => {
    setFilters({...filters, [e.target.name]: e.target.value});
  }

  return (
    <>
      <h2>Saved Strains</h2>
      {props.allowSearch &&
        <form>
          <input type='text' name='search' placeholder='Search' onChange={handleChange}/>
          <select name='type' onChange={handleChange}>
            <option value='select' >Select type...</option>
            <option value='indica' >Indica</option>
            <option value='sativa' >Sativa</option>
            <option value='hybrid' >Hybrid</option>

          </select>
        </form>
      }
      {searchResults.map((item, index) => (
        <Strain strain={item} key={index} allowRemove/>
      ))}
    </>
  );
};

export default SavedStrainsList;
