import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pikachu from '../Pikachu.png'

class Home extends Component {
    state = {
        posts : []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }

    render (){
        const posts = this.state.posts;
        const postslist = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pikachu} alt="This is an image of pikachu"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title">
                                {post.title}
                            </span>
                            </Link>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts as of yet</div>
        )
        return (
            <div className = "container home">
                <h4 className="center">Home Page</h4>
                {postslist}
            </div>
        )
    }
}

export default Home