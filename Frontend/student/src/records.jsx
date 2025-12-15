import React, { useState } from 'react';
import axios from 'axios';
import './records.css';
function Record() {
  const [num, setNum] = useState('');
  const [users, setUsers] = useState([]);

  const FetchData = async () => {
    if (!num.trim()) {
      setUsers([]);
      return;
    }

    try {
      const result = await axios.get(`http://localhost:5401/get/${num}`);
      setUsers(result.data);
      setNum('');
    } catch (err) {
      console.log(err);
    }
  };
    return(
        <div className='recordContainer'>
            <h1>Student Records</h1>
            <div className='record-search-container'>
                <input type="text" name="record" id="record" value={num} onChange={(e)=>setNum(e.target.value)} className='record-input'/>
                <button className='recordbutton' onClick={FetchData}>Fetch</button>
            </div>
            <div>
        <h2>Student Details</h2>

        {users.length === 0 ? (
          <p>No records found</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="studentCard">
              <p>Roll No: {user.rollno}</p>
              <p>Name: {user.name}</p>
              <p>Branch: {user.branch}</p>
              <p>Phone: {user.phno}</p>
              <p>Year: {user.year}</p>
            </div>
          ))
        )}
      </div>
        </div>
    );
};
    export default Record;