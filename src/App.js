import React, { Component } from 'react';
import Card from './components/Card';

export class App extends Component {

  state = {
    posts: null
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.setState({posts: data});
  }

  render() {
    return (
      <>
        <h1>blogs</h1>
        <ul className='blogs'>
        {
          this.state.posts !== null ? this.state.posts.map(value => {
            return <Card key={value.id} id={value.id} title={value.title} body={value.body}/>
            })
            : null
        }
        </ul>
      </>
      
      
    )
  }
}

export default App
