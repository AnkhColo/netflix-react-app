import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main />
      <Row title='Now Playing' fetchURL={requests.requestNowPlaying} />
      <Row title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row title='Popular' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Home
