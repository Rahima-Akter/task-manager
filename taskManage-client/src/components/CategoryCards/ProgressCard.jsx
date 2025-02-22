/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


const ProgressCard = ({ progress, handleModal, handleDelete,handleDone }) => {
    const navigate = useNavigate()
    return (
        <div className="w-60 bg-[#F4A8A3] rounded-3xl shadow-lg p-4 flex flex-col items-center">

            {/* Task Name Placeholder */}
            <div className="w-full bg-[#F4A8A3] rounded-full py-1 shadow-[rgba(0,0,0,0.20)_0px_5px_15px] mt-4">
                <p className="text-yellow-300 text-2xl font-bold text-center capitalize -mt-1">In-Progress</p>
            </div>

            {/* Task Details */}
            <div className="w-full flex justify-center items-center mt-6">
                <div onClick={() => handleModal(`${progress._id}`)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-lg text-gray-700">🔍</span>
                </div>
                <div onClick={() => navigate(`/dashboard/update/${progress._id}`)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-lg text-gray-700">✍</span>
                </div>
                <div onClick={() => handleDelete(`${progress._id}`)}  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-lg text-gray-700">⛔</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-lg text-gray-700">↺</span>
                </div>
                {/* <div className="flex-1 h-8 bg-white rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"></div> */}
            </div>

            {/* Task List */}
            <div className="w-full bg-white rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px] p-3 mt-4">
                <h2 className="text-md font-bold text-black">{progress.title}</h2>
                <ul className="mt-1 text-gray-600 text-xs">
                    <p>{progress.description.slice(0, 60)}.........</p>
                </ul>
                <h2 className="text-sm font-bold text-black mt-2">Due Date: <span>{progress?.dueDate}</span></h2>
            </div>

            {/* Add Task Button */}
            <button onClick={() => handleDone(`${progress._id}`)} className="w-full font-bold mt-4 py-2 bg-[#F4A8A3] text-white rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.3)] duration-500"
            >Task Done</button>
        </div>
    );
};

export default ProgressCard;