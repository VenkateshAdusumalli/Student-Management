import React,{useState} from 'react';
import axios from 'axios';

function Form(){
    const [data,setData]= useState({
        rollno: "",
        name: "",
        branch: "",
        phno: "",
        year: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleData = async (e) => {
        e.preventDefault(); 
        try {
            const result = await axios.post('http://localhost:5401/students', data);
            console.log(result.data);
            setData({
                rollno: "",
                name: "",
                branch: "",
                phno: "",
                year: ""
            });
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div className='body'>
            <h1>Student Details</h1>
            <form action="" className='formContainer' onSubmit={handleData}>
                <div>
                <label htmlFor="rollno">Reg No : </label>
                <input type="text" name="rollno" id="rollno" value={data.rollno} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="branch">Branch  : </label>
                <input type="text" name="branch" id="branch" value={data.branch} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="phno">Mobile :</label>
                <input type="number" name="phno" id="phno" value={data.phno} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="year">Year :</label>
                <select className="form-select" name="year" id="year" value={data.year} onChange={handleChange}>
                    <option value="">Select  the current Year(Btech)</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
                </div>
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}
export default Form;