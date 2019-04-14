import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Post from "./components/Post/Post"
import Loading from "./components/Loading/Loading"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }

    this.getPosts = this.getPosts.bind(this)
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts() {
    fetch("http://localhost:8080")
      .then(
          res => res.ok ? res.json() : Promise.reject(res)
        )
        .then(
          body => this.setState({ posts: body })
        )
          .catch(err => console.error(err))
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <Header text="Welcome to the simple mirror of the reddit"/>
        { posts.length === 0 
        ?
          <Loading/>
          :

          posts.map((post, id) => (
            <Post post={ post } key={id}/>
          ))
         }
        
      </div>
      
    )
  }

}
  

export default App;
