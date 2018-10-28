import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id
        console.log (id)
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            console.log(res.data)
            this.setState({
                post : res.data
            })
        })
    }
    render() {
        const post = this.state.post ? 
            (
                <div className="container">
                    <h4 className="center">{this.state.post.title}</h4>
                    <p>{this.state.post.body}</p>
                </div>
            ) : 
            (
                <div className="center">
                    <h4>Loadng post...</h4>
                </div>
            )
        console.log({post})
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post