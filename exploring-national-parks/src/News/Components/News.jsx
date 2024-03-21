import React from 'react'

/**
 * Component representing the welcome section of the homepage.
 * @module Welcome
 * @memberof News
 * @returns {JSX.Element} The rendered welcome section.
 */
const News = () => {
    return (
        <div className = "News">
            <br/>
            <br/>
            <br/>
            <a class="twitter-timeline" target="_blank" href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by TempleUniv</a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    )
}

export default News