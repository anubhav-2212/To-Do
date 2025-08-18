// import React from 'react'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//  <div>
// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link to="/getUser" className="navbar-brand" >Welcome User <i className="fa-solid fa-user-tie" />
// </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarScroll">
//       <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{"-bsScrollHeight": "100"}}>
//         <li className="nav-item ms-3">
//           <Link to="" className="nav-link active" aria-current="page" href="#">Home</Link>
//         </li>
//         <li className="nav-item ms-3">
//           <Link to="" className="nav-link" href="#">Todo</Link>
//         </li>
//        <li className="nav-item ms-3 d-flex align-items-center">
//          <button className="border-0 bg-transparent p-0 nav-link" 
//      type="button" ><i className="fa-solid fa-power-off"></i>
//          </button>
//          </li> 
        
        
//       </ul>
      
       
      
//     </div>
//   </div>
//   </nav>
  
// </div>

//   )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        {/* Left side - Welcome user */}
        <Link to="/getUser" className="navbar-brand">
          Welcome User <i className="fa-solid fa-user-tie" />
        </Link>

        {/* Toggler for small screen */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarScroll" 
          aria-controls="navbarScroll" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Right side nav links */}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul 
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" 
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link to="/todo" className="nav-link">
                Todo
              </Link>
            </li>

            {/* Logout button - aligned properly */}
            <li className="nav-item ms-3">
              <a 
                href="#logout" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  console.log("Logout clicked"); 
                }}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-power-off text-danger"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    
  )
}

export default Navbar

