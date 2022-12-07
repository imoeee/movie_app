import React from 'react'
import Search from './components/Search'
import Movie from './components/Movie'

const Home = () => {
  return (<>
    <div className="container">
      <Search />
      <Movie />
    </div>
  </>
  )
}

export default Home

