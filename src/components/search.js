import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <select class="form-select me-4" aria-label="Search">
                            <option selected hidden>Search By Region</option>
                            <option value="UG">Uganda</option>
                            <option value="GB">United Kingdom</option>
                            <option value="BE">Belgium</option>
                        </select>
                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
