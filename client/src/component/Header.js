import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [search,setSearch] = useState();
    const navigate = useNavigate()

    const handleSearch =(e)=>{
        const searchValue = e.target.value;
        if (searchValue !== "") {
            setSearch(...search,searchValue);
            navigate(`/search/query=${searchValue}`);
        } else {
            navigate("/");
        }
    }
    return (
        <>
            <header className="bg-slate-700 text-white">
                <div className="flex flex-wrap p-5 flex-co sm:flex-row justify-between items-center  align-baseline py-3">
                    <Link to="/">
                        <span className="ml-3 text-2xl font-extrabold">TODO</span>
                    </Link>
                    <span className='flex sm:w-1/2'>
                        <input onChange={handleSearch} className="sm:max-w- bg-gay-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" type="text" placeholder='Search' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" text-black ms-[-26px] h-8 w-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Link to='/add-student'>
                        <button className="inline-flex items-center bg-slate-900 border-0 py-1 px-3 focus:outline-none text-white hover:bg-slate-600 font-bold rounded-2xl text-base md:mt-0">Add Student</button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header

