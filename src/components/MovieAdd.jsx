import React, { useState } from "react";
import MovieNavbar from "./MovieNavbar";
import axios from "axios";

const MovieAdd = () => {
  const [inputData, changeInputData] = useState({
    name: "",
    actor: "",
    actress: "",
    director: "",
    producer: "",
  });
  const inputHandler = (event) => {
    changeInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const readValue = () => {
    console.log(inputData);
    axios.post("http://127.0.0.1:8000/api/add/", inputData).then((response) => {
      alert(response.data.status);
    });
  };
  return (
    <div>
      <MovieNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputData.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Director
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="director"
                  value={inputData.director}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Producer
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="producer"
                  value={inputData.producer}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Actor
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="actor"
                  value={inputData.actor}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Actress
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="actress"
                  value={inputData.actress}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  onClick={readValue}
                  type="submit"
                  className="btn btn-primary"
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieAdd;
