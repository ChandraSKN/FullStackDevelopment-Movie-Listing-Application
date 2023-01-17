import React, { useEffect } from "react";
import Webseries from "../Webseries_Listing/Webseries";
import WebSeriesApi from "../apis/WebSeriesApi";
import {APIKey} from "../apis/WebseriesApiKey";
import { useDispatch } from "react-redux";
import { addWebseries } from "../../Features/webseries/webseriesSlice";
const Home = () => {
  const webSeriesText = "Harry";
  const dispatch = useDispatch();
    useEffect(() =>{
        
        const fetchWebSeries = async () => {            //async because it returns a promise
            const response = await WebSeriesApi
            .get(`?apiKey=${APIKey}&s=${webSeriesText}&type=series`) 
            .catch((err) => {
                console.log("Err :", err);
            });
            console.log("The response from API", response);
            dispatch(addWebseries(response.data))
        };
        

        fetchWebSeries();
    }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <Webseries />
    </div>
  );
};

export default Home;
