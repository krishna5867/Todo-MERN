import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Dashboard = () => {
    const [data,setData] = useState();
    console.log(data);

    const fetchStudents = async () => {
        const res = await axios.get('/getStudents');
        if(res.status === 200){
            setData(res.data?.student)
        }
    }

    useEffect(()=> {
        fetchStudents();
    },[])

    return (
    <div className='flex flex-wrap'>
    {data && data.map(e =>
        <Card e={e}/>
    )}
        </div>
    )
}

export default Dashboard