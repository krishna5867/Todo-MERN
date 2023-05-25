import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const Search = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);
  // console.log(data);

  const fetchSearch = async () => {
    try {
      const res = await axios.get(`/searchStudent/${query}`);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [query]);

  return (
    <div>
      {data.length > 0 ? (
        <p className="mx-auto mt-5 font-bold text-xl">
          Results Found: {data.length}
        </p>
      ) : (
        <p className="mx-auto mt-10 font-bold text-xl">No Result Found !</p>
      )}
      <div className="flex flex-wrap">
        {data.map((e) => (
          <Card key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Search;
