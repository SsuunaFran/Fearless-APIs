import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar() {
    const [selectRegion, setselectRegion] = useState('');

    const handleRegionChange = (e) => {
        setselectRegion(e.target.value)
    }

    const search = () => {
        console.log(selectRegion)
    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <select className="form-select me-4" aria-label="Search" onChange={handleRegionChange} value={selectRegion}>
                            <option selected hidden>Search By Region</option>
                            <option value="UG">Uganda</option>
                            <option value="GB">United Kingdom</option>
                            <option value="BE">Belgium</option>
                        </select>
                        <button className="btn btn-primary" type="submit" onClick={search}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
