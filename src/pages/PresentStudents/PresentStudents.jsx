import { useEffect, useState } from "react";
import "./PresentStudents.css"
import StudentCard from "../../components/StudentCard/StudentCard";
import Navbar from "../../components/Navbar/Navbar";
const PresentStudents = () => {
    let storedData = JSON.parse(localStorage.getItem("data"));
    const [students, setStudents] = useState(storedData);
    
    useEffect(()=>{
        setInterval(() => {
            storedData = JSON.parse(localStorage.getItem("data"));
            if(students !== storedData){
                setStudents(storedData);
            }
        }, 10);
    }, [students]);
  return (
    <>
        <Navbar />
        <div className="present-title">
            Present Students ({students.filter((student)=>student.checkout === null).length})
        </div>
        <div className='student-container'>
        {students.filter((student)=>student.checkout === null).map((student)=>{
            return <StudentCard studentData={student}/>
        })}
        </div>
    </>
  )
}

export default PresentStudents
