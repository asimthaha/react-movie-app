import React, { useEffect, useState } from "react";
import MovieNavbar from "./MovieNavbar";
import axios from "axios";

const MovieView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MovieNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3 d-flex ">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card shadow border-secondary">
                      <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text">{value.director}</p>
                        <p class="card-text">{value.producer}</p>
                        <p class="card-text">{value.actor}</p>
                        <p class="card-text">{value.actress}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
