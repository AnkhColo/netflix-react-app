import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Now Playing' fetchURL={requests.requestNowPlaying} />
      <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='3' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Home
