import React, { useState } from "react";
import MovieNavbar from "./MovieNavbar";

const MovieDelete = () => {
  const [inputData, changeInputData] = useState({
    movie: "",
  });
  const inputHandler = (event) => {
    changeInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const readValue = () => {
    console.log(inputData);
  };
  return (
    <div>
      <MovieNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Delete Movie
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="movie"
                  value={inputData.movie}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12">
                <button onClick={readValue} className="btn btn-danger">
                  Danger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDelete;
