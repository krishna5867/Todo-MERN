import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment';

const Todo = () => {
    const { id } = useParams();
    const [task, setTask] = useState('');
    const [data, setData] = useState();
    const [todo, setTodo] = useState([]);
    const [editTaskId, setEditTaskId] = useState('');
    const [user,setUser] = useState()

    const createTodo = async () => {
        const res = await axios.post(`/createTodo/${id}`, { task });
        if (res.status === 200) {
            setData(res.data?.student);
            setTask('');
        }
    };

    const fetchTodo = async () => {
        const res = await axios.get(`/getStudent/${id}`);
        if (res.status === 200) {
            setUser(res.data?.student)
            setTodo(res.data?.student?.todo || []);
        }
    };

    const handleEditTask = (taskId) => {
        setEditTaskId(taskId);
        const taskToEdit = todo.find((task) => task._id === taskId);
        if (taskToEdit) {
            setTask(taskToEdit.main);
        }
    };

    const handleUpdateTask = async () => {
        try {
            await axios.put(`/updateTask/${id}/${editTaskId}`, { task });
            setEditTaskId('');
            setTask('');
            fetchTodo();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const res = await axios.delete(`/deleteTask/${id}/${taskId}`);
            if (res.status !== 404) {
                alert('Deleted');
                fetchTodo();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTodo();
    }, [task]);



    return (
        <div className='mt-10 mx-10'>
            <div className='sm:flex'>
                {/* Student Details */}
                <div className='sm:w-full sm:max-w-sm h-[400px] border-2'>
                    <div className='text-xl font-bold p-2'>
                        <p className='font-extrabold text-3xl mb-10'>DETAILS</p>

                    <div className="p-6">
                            <p className="leading-relaxed mb-3">Class: {user?.name}</p>
                            <p className="leading-relaxed mb-3">Class: {user?.studentclass}</p>
                            <p className="leading-relaxed mb-3">Roll No: {user?.roll}</p>
                            <p className="leading-relaxed mb-3">({user?.address})</p>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Name: {user?.email}</h1>
                            <div className="flex items-center flex-wrap ">
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto  leading-none text-sm pr-3 py-1">
                                    {moment(user?.createdAt).format('MMMM Do YYYY')}
                                </span>                              
                            </div>
                        </div>
                    
                    </div>
                </div>
                {/* Create Todo */}
                <div className='w-full sm:mt-0 mt-5'>
                    <div className=''>
                        <div className='flex'>
                            <input
                                type='text'
                                placeholder='Add Todo...'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                required
                                className='block sm:w-1/2 w-[310px] sm:ms-20  rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg p-2 sm:leading-6 h-[40px]'
                            />
                            <div>
                                <button
                                    type='submit'
                                    onClick={createTodo}
                                    className='bg-indigo-600 ms-1 rounded px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-[40px]'
                                >
                                    Add Todo
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Show Created Todos */}
                    <div className='sm:w-full sm:max-w-lg sm:ms-20 mt-10 h-[400px]'>
                        <>
                            {todo.map((e) => (
                                    <div className='border-2 border-gray-200 border-opacity-60 py-3 m-2 px-6'>
                                <div key={e._id} className='flex justify-between'>
                                    <div>{e.main}</div>
                                    {editTaskId === e._id ? (
                                        <div>
                                            <button onClick={handleUpdateTask}
                                                className='ms-2 bg-green-600 hover:bg-green-500 text-white p-1 rounded font-bold'>
                                                Update
                                            </button>
                                            <button
                                                onClick={() => setEditTaskId('')}
                                                className='ms-2 bg-red-600 hover:bg-red-500 text-white p-1 rounded font-bold'>
                                                    Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={() => handleEditTask(e._id)}
                                                className='ms-2 bg-green-600 hover:bg-green-500 text-white p-1 rounded font-bold'>
                                                    Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTask(e._id)}
                                                className='ms-2 bg-red-600 hover:bg-red-500 text-white p-1 rounded font-bold'>
                                                    Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                                </div>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
