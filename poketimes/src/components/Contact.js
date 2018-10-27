import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    },5000)
    return (
        <div className = "container">
            <h4 className="center">Contact Page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas neque excepturi eligendi dolor possimus deleniti, nisi doloribus aliquam eaque placeat rerum? Omnis accusantium neque architecto officiis ex placeat esse!</p>
        </div>
    )
}

export default Contact