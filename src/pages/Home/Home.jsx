import "./Home.css"
import {data} from "../../data.js"
import StudentCard from "../../components/StudentCard/StudentCard"
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    localStorage.setItem("data", JSON.stringify(data));
    let storedData = JSON.parse(localStorage.getItem("data"));
    const [students, setStudents] = useState(storedData);
    
    useEffect(()=>{
        setInterval(() => {
            storedData = JSON.parse(localStorage.getItem("data"));
            if(students !== storedData){
                setStudents(storedData);
            }
        }, 10);
    }, [students])
  return (
    <div className="home">
        <Navbar />
        <div className="student-container">
            {students.map((student)=>{
                return <StudentCard studentData={student}/>
            })}
        </div>
    </div>
  )
}

export default Home