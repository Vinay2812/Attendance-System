import { useNavigate } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
  return (
   <navbar className="navbar">
    <div className="logo" onClick={()=>navigate("/")}>
        Attendance System
    </div>
    <div className="buttons">
        <button className='navbar-btn' onClick={()=>navigate("/present")}>
            Present Students
        </button>
        <button className="navbar-btn" onClick={()=>navigate("/add")}>
            Add Student
        </button>
    </div>
   </navbar>
  )
}

export default Navbar