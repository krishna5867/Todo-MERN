import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const { query } = useParams();
    const [data, setData] = useState([]);

  return (
    <div>Search</div>
  )
}

export default Search