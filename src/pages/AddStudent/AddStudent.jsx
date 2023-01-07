import { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import "./AddStudent.css"
import { addData} from "../../data";
import Toast from "../../components/Toast/Toast";

const AddStudent = () => {
    const rollNo = useRef();
    const name = useRef();

    const [text, setText] = useState("");

    const showToast =()=>{
        setTimeout(() => {
            setText("");
        }, 3000);
    }

    const handleClick = (e)=>{
        e.preventDefault();
        const student = {
            roll_no: rollNo.current.value,
            name: name.current.value,
            checkin: Date.now(),
            checkout: null
        }
        
        if(student.roll_no.length && student.name.length){
            const result = addData(student);
            if(result){
                setText(student.name + " with Roll no. " + student.roll_no + " was added successfully");
            }
            else{
                setText("Student with Roll No. " + student.roll_no + " already exist");
            }

            showToast();
            setTimeout(() => {
                rollNo.current.value = "";
                name.current.value = "";
            }, 3000);
             
        }
        
    }
  return (
    <>
    <div className="addStudent">
        <Navbar />
        <div className="container">
            <div className="title">
                Add Student
            </div>
            <input type="number" placeholder="Enter Roll no."  ref={rollNo}/>
            <input type="text" placeholder="Enter Name" ref={name}/>
            <button className="checkinBtn" onClick={handleClick}>
                Check in
            </button>
        </div>
        
    </div>
    <Toast text={text}/>
    </>
  )
}

export default AddStudent