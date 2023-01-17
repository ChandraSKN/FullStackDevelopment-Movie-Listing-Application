import React from 'react';
import { Link } from "react-router-dom";
import "./WebseriesCard.scss"
const WebseriesCard = (props) => {
    const { data } = props;
    return (
      <div className="card-item">
        <Link to={`/series/${data.imdbID}`}>
          <div className="card-inner">
            <div className="card-top">
              <img src={data.Poster} alt={data.Title} />
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default WebseriesCard;