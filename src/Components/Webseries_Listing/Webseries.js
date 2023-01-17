import React from 'react';
import { useSelector } from 'react-redux';
import { getAllWebseries } from '../../Features/webseries/webseriesSlice';
import WebseriesCard from '../WebseriesCard/WebseriesCard';

const Webseries = () => {
    const webSeries = useSelector(getAllWebseries);
    let renderWebSeries = "";

    renderWebSeries = webSeries.Response === "True"?(
        webSeries.Search.map((series, index) => (
            <WebseriesCard key={index} data={series}/>
        ))
    ) : (
    <div className="webSeries-error">
        <h3>{webSeries.error}
    </h3>
    </div>
    )
    return (
        <div className= "webSeries-wrapper" >
        <div className = "webSeries-list">
        <h2>
            WebSeries
        </h2>
        <div className= "webSeries-container">
        {renderWebSeries}
        </div>
        </div>
                    </div>
    );
};

export default Webseries;