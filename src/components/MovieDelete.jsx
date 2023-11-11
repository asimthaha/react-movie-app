import React, { useState } from "react";
import MovieNavbar from "./MovieNavbar";

const MovieDelete = () => {
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
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <button className="btn btn-danger">Danger</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDelete;
