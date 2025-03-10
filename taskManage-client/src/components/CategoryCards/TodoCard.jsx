/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


const TodoCard = ({ todo, handleModal, handleDelete, handleInProgress }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#eaeadd] rounded-3xl shadow-lg p-4 flex flex-col items-center w-52">

            {/* Task Name Placeholder */}
            <div className="w-full bg-white rounded-full py-1 mt-2">
                <p className="text-red-500 text-lg font-bold text-center capitalize -mt-1">To-Do</p>
            </div>

            {/* Task Details */}
            <div className="w-full flex justify-center items-center mt-2">
                <div onClick={() => handleModal(`${todo._id}`)} className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-sm">🔍</span>
                </div>
                <div onClick={() => navigate(`/dashboard/update/${todo._id}`)} className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-sm -mt-1">✍</span>
                </div>
                <div onClick={() => handleDelete(`${todo._id}`)} className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-sm">⛔</span>
                </div>
                <div className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                    <span className="text-sm">↺</span>
                </div>
                {/* <div className="flex-1 h-8 bg-white rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"></div> */}
            </div>

            {/* Task List */}
            <div className="w-full bg-white rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px] p-3 mt-2 mb-4">
                <h2 className="font-bold text-black">{todo.title}</h2>
                <ul className="mt-1 text-gray-600 text-xs">
                    <p>{todo.description.slice(0, 20)}.........</p>
                </ul>
                <h2 className="text-xs font-bold text-black mt-2">Due Date: <span>{todo?.dueDate}</span></h2>
            </div>

            {/* Add Task Button */}
            <button onClick={() => { handleInProgress(`${todo._id}`); navigate('/dashboard/progress'); }} className="w-full text-sm font-bold mt-auto py-1 bg-white text-gray-950 rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:shadow-[inset_0px_1px_5px_rgba(0,0,0,0.5)] duration-500"
            >Start Task</button>
        </div>
    );
};

export default TodoCard;