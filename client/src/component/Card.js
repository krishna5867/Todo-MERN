import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const Card = ({ e }) => {
    return (
        <>
            <div className="p-4 md:w-1/3">
                <Link to={`/add-todo/${e._id}`}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{e?.email}</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{e?.name.toUpperCase()}</h1>
                            <p className="leading-relaxed mb-">Class: {e?.studentclass}</p>
                            <p className="leading-relaxed mb-">Roll No: {e?.roll}</p>
                            <p className="leading-relaxed">({e?.address})</p>
                            <div className="flex items-center flex-wrap">
                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Add Task</a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                    {moment(e?.createdAt).format('MMMM Do YYYY')}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
};

export default Card;
