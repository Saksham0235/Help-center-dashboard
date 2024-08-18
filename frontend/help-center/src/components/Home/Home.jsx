import React, { useEffect, useState } from 'react'
import './module.css'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import CardList from '../Cards/CardList'
import { Spin } from 'antd';


const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  console.log(search, "From search");

  const fetchCards = async () => {
    setloading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/cards");
      setData(response.data);
      setloading(false)
    }
    catch (err) {
      console.log(err, "Error in fetching cards")
    }
  }
  useEffect(() => {
  fetchCards()
  }, [])

  const filteredData = data.filter(e => {
    return search.toLowerCase() === '' ? e : e.title.toLowerCase().includes(search)
  })
  return (
    <div className='container'>
      <Nav />
      <div className="hero">
        <h1 className='hero_h1'>How can we help? </h1>
        <form >
          <input type='text' onChange={(e) => setSearch(e.target.value)} className='inputdiv' placeholder='Search' />
        </form>
      </div>
      {loading ? <center> <Spin size="large" style={{ margin: "50px" }} /> </center> : <div className='cards'>
        {
          filteredData.length >= 0 ? filteredData.map((ele) => {
            return (
              <CardList data={ele} />
            )
          })
            :
            <h4>No data found</h4>
        }
      </div>}

      <Footer />
    </div>
  )
}

export default Home
