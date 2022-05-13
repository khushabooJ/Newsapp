// import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const Navbar =() =>{

    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" >NewsApp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Home</NavLink>
        </li>
       

        <li className="nav-item">
          <NavLink className="nav-link" to="/business" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/general" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>General</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/science" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports" style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology"style={({isActive}) =>{return{color:isActive?"pink": ""}}}>Technology</NavLink>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }



export default Navbar