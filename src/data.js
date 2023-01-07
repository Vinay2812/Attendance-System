export let data = [
    {
        roll_no: 1,
        name: "Vinay",
        checkin: 1673099301429,
        checkout: null
    },
    {
        roll_no: 2,
        name: "Apeksha",
        checkin: 1673099301427,
        checkout: null
    },
    {
        roll_no: 3,
        name: "Zaid",
        checkin: 1673099301429,
        checkout: 1673099301430
    },
    {
        roll_no: 4,
        name: "Neha",
        checkin: 1673099301429,
        checkout: 1673099301429
    }
];

export const addData = (student)=>{
    if(data.filter(curr => curr.roll_no === student.roll_no).length){
        return false;
    }
    data.push(student);
    localStorage.setItem("data", JSON.stringify(data));
    return true;
    // console.log(data);
}

export const updateData = (student)=>{
    data = data.map((curr)=>{
        if(student.roll_no === curr.roll_no && student.name === curr.name){
            return student;
        }
        else{
            return curr;
        }
    });
    // console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
}