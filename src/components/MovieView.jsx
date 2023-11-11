import React, { useEffect, useState } from "react";
import MovieNavbar from "./MovieNavbar";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyapi.online/api/movies").then((response) => {
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
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqrUiAsOqRACzZlS6761TaDl8jcKlvl9Stw&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{value.movie}</h5>
                        <p class="card-text">{value.rating}</p>
                        <a href={value.imdb_url} class="btn btn-primary">
                          Go here
                        </a>
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
