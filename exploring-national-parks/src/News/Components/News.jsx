import React, { useEffect } from 'react';

/**
 * Component representing the welcome section of the homepage.
 * @module Welcome
 * @memberof News
 * @returns {JSX.Element} The rendered welcome section.
 */
const News = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="News">
            <br />
            <br />
            <br />
            <a
                className="twitter-timeline"
                href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw"
                data-tweet-limit="3"
            >
                Tweets by TempleUniv
            </a>
        </div>
    );
};

export default News;
