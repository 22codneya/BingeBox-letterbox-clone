import 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  const[query, setQuery]= useState('')

  const handleSearch=(e)=>{
     e.preventDefault();
    //  if(!query.trim()) return;
    navigate(`/search?search=${encodeURIComponent(query)}`);
  }
  return (
  <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md border-b border-base-content/10">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
        <label
  htmlFor="sidebar-drawer"
  className="btn btn-square btn-ghost lg:hidden"
>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     <Link to="/" className="text-2xl font-bold text-primary"> BINGE BOX</Link>
    </div>
    <div className="navbar-center hidden lg:flex ">
      
    </div>
    <div className="navbar-end">
      <form onSubmit={handleSearch} className='flex items-center gap-3 '>
      <input type="text" placeholder="Search movies..." className="input w-64 lg:w-auto" value={query}
        onChange={(e)=>setQuery(e.target.value)}/>

      <button className="btn btn-primary" >
        Search
      </button>
      </form>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
</div>
      
  )
}

export default Navbar
