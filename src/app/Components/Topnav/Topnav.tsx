import React from 'react'

type Props = {}

const Topnav = (props: Props) => {
  return (
    <div>
    <nav className="bg-gray-800">
  <div className="container mx-auto px-6 py-3"> 
    <div className="flex items-center justify-between">
      <div className="hidden md:block">  
        <a className="text-gray-300 hover:text-white mr-4" href="#">Home</a>  
        <a className="text-gray-300 hover:text-white mr-4" href="#">About</a>  
        <a className="text-gray-300 hover:text-white" href="#">Contact</a>
      </div>
      <div className="flex items-center">  
        <button className="text-gray-300 hover:text-white focus:outline-none">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V6.75zm2.25-.75v10.5h10.5V6.75H6.75zm3.375 7.688a.563.563 0 10-.797.797l2.25 2.25a.563.563 0 00.797 0l2.25-2.25a.563.563 0 10-.797-.797L11 14.689l-1.625-1.626z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="ml-3 text-gray-300 hover:text-white focus:outline-none">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25zm2.25-.75v13.5h13.5V4.5H5.25zM8.5 14.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zm0-3a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zm0-3a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}