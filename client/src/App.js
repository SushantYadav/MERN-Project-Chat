import React, { Component } from 'react'
import Form from './components/form';
import "./App.css";
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: null
    };
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  componentDidMount() {
    this.fetchTweets();
  };

  async fetchTweets() {
    const tweets = await axios.get('/api/feed');
    this.setState({ tweet: tweets.data })
  };

  render() {
    let tweet;

    if (this.state.tweet === null) {
      tweet = <h1>Loading..</h1>
    } else {
      tweet = <section>
        {this.state.tweet.map(tweet =>
          <div>
            <h3>Comment: {tweet.tweet}</h3>
            <p>Name: {tweet.name}</p>
          </div>
        )}
      </section>
    }

    return (
      <div>
        <h1>Simple Twitter</h1>
        <Form />
        {tweet}
      </div>
    )
  }
}

export default App;