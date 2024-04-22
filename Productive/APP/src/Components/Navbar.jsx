import React from "react";

export default function Navbar(){
    return(
        <>
       <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-darkOrange font-Heading">Productivity.</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>
            Pages
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>PAGES 1</a></li>
            <li><a>PAGES 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        </>
    )
}