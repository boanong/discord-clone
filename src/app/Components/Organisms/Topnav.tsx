import React from "react";
import {
  FaUserFriends,
  FaCircle,
  FaUsers,
  FaUserPlus,
  FaBan,
  FaPlus,
  FaInbox,
  FaQuestionCircle,
} from "react-icons/fa";

const Topnav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17.5C7.24 17.5 5 15.26 5 12.5C5 9.74 7.24 7.5 10 7.5C12.76 7.5 15 9.74 15 12.5C15 15.26 12.76 17.5 10 17.5ZM17.5 12C17.5 14.33 15.83 16.25 13.67 16.47C14.08 15.59 14.29 14.64 14.29 13.67C14.29 10.87 11.92 8.5 9.12 8.5C6.32 8.5 4 10.87 4 13.67C4 16.46 6.37 18.83 9.16 18.83C9.74 18.83 10.31 18.75 10.85 18.6C10.38 17.81 10.12 16.89 10.12 15.93C10.12 14.16 11.5 12.79 13.25 12.79C14.21 12.79 15.11 13.11 15.79 13.67H13.67C12.93 13.67 12.34 14.26 12.34 15C12.34 15.74 12.93 16.33 13.67 16.33C14.41 16.33 15 15.74 15 15C15 14.26 14.41 13.67 13.67 13.67H17.5Z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">Discord</span>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center bg-gray-800 rounded-full py-1 px-4">
          <svg
            className="fill-current text-gray-500 h-4 w-4 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 16.5C9 17.33 8.33 18 7.5 18C6.67 18 6 17.33 6 16.5C6 15.67 6.67 15 7.5 15C8.33 15 9 15.67 9 16.5ZM12 16.5C12 17.33 11.33 18 10.5 18C9.67 18 9 17.33 9 16.5C9 15.67 9.67 15 10.5 15C11.33 15 12 15.67 12 16.5ZM15 16.5C15 17.33 14.33 18 13.5 18C12.67 18 12 17.33 12 16.5C12 15.67 12.67 15 13.5 15C14.33 15 15 15.67 15 16.5Z" />
          </svg>
          <input
            className="bg-gray-800 text-gray-100 rounded-full text-sm py-1 px-2 leading-tight focus:outline-none w-40"
            type="text"
            placeholder="Start or search a conversation"
          />
        </div>

        <div className="ml-6">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">Friends</span>
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">Online</span>
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">All</span>
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">Pending</span>
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">Blocked</span>
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <span className="text-gray-500 text-sm font-medium">
              Add Friends
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-6">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <FaPlus className="text-gray-500 h-4 w-4" />
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <FaInbox className="text-gray-500 h-4 w-4" />
          </button>
        </div>

        <div className="ml-2">
          <button className="flex items-center bg-gray-800 rounded-full py-1 px-4">
            <FaQuestionCircle className="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
