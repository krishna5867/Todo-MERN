import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()

    const [inp, setInp] = useState({
        name: "",
        email: "",
        address: "",
        studentclass: "",
        roll: ''
    });

    const setInpValue = (e) => {
        const { name, value } = e.target;
        setInp({ ...inp, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, address, studentclass, roll } = inp;

        const res = await axios.post('/createStudent', inp);
        if (res.status === 201) {
            navigate('/')
            setInp({
                name: "",
                email: "",
                address: "",
                studentclass: "",
                roll: ''
            })
            console.log("Student added successfully");
        } else {
            console.log("Student Not Added");
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="sm:mt-10 mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add Student</h2>
                </div>
                {/* Name */}
                <div className="sm:mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">
                    <form className="space-y-4 p-4" onSubmit={handleSubmit}>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Student Name</label>
                            </div>
                            <div className="mt-2">
                                <input id="name" name="name" type="name" value={inp.name} onChange={setInpValue} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>
                        {/* Email */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Student Email</label>
                            </div>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" value={inp.email} onChange={setInpValue} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>
                        {/* Address */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                            </div>
                            <div className="mt-2">
                                <input id="address" name="address" type="text" value={inp.address} onChange={setInpValue} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>
                        {/* class  */}
                        <div className='sm:flex'>
                            <div className="sm:flex text-left w-full">
                                <label htmlFor="studentclass" className='text-sm font-medium leading-6 text-gray-900'>Class</label>
                                <input id="studentclass" name="studentclass" type="text" value={inp.studentclass} onChange={setInpValue} autocomplete="current-password" required className="sm:mt-0 mt-2 block sm:ms-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>

                            {/* Roll */}
                            <div className="sm:flex text-left w-full sm:mt-0 mt-5">
                                <label htmlFor="roll" className='sm:ms-10 text-sm font-medium leading-6 text-gray-90 w-1/6 border-'>Roll No</label>
                                <input id="roll" name="roll" type="text" value={inp.roll} onChange={setInpValue} autocomplete="current-password" required className="sm:mt-0 mt-2 block sm:ms-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6" />
                            </div>
                        </div>
                        {/* Register Button */}
                            <div className='mt-5'>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add New Student</button>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
