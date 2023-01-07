import { updateData } from "../../data";
import "./StudentCard.css"


const StudentCard = ({studentData}) => {
    const checkout = (e)=>{
        const student = {...studentData, checkout: Date.now()};
        updateData(student);
    }

    const getTime = (date)=>{
        if(date === null){
            return "NA"
        }
        const d = new Date(Number.parseInt(date));
        return d.toLocaleTimeString() + ", "+d.toDateString();

    }
  return (
    <div className="card">
        <div className="roll-no">
            Roll No.:- {studentData.roll_no}
        </div>
        <div className="name">
            Name:- {studentData.name}
        </div>
        <div className="time">
            Checkin:- {getTime(studentData.checkin)}
        </div>
        <div className="time">
            Checkout:- {getTime(studentData.checkout)}
        </div>
        <button className="checkoutBtn" disabled={studentData.checkin && studentData.checkout} onClick={checkout}>
            Checkout
        </button>
    </div>
  )
}

export default StudentCard