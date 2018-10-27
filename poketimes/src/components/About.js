import React from 'react'
import Rainbow from '../hoc/rainbow'

const About = () => {
    return (
        <div className = "container">
            <h4 className="center">About Page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas neque excepturi eligendi dolor possimus deleniti, nisi doloribus aliquam eaque placeat rerum? Omnis accusantium neque architecto officiis ex placeat esse!</p>
        </div>
    )
}

export default Rainbow(About)