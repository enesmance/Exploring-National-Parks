import React from 'react';
import NewsComponent from './News/Components/News.jsx';
/**
 * Renders the News component page.
 * @component
 * @module News
 * 
 * @returns {JSX.Element} The rendered ParkInfo component.
 */
const News = () => {
    return(
        <div className="news-info">
            <NewsComponent />
        </div>
    );
}

export default News;