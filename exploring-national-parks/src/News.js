import React from 'react';
import NewsComponent from './News/Components/News.jsx';
/**
 * Renders the News component page.
 * @component
 * @module News
 * 
 * @returns {JSX.Element} The rendered ParkInfo component.
 */
function News(){
    return(
        <div className="news-info-parent">
            <NewsComponent />
        </div>
    );
}

export default News;