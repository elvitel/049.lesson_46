import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
 
    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => setUsers(response))        
    };    
  
    useEffect(() => {
        fetchUsers()
    }, [])
     
    return (        
        <div>                  
            {users.map((user) => {
                return (                
                <div key={user.id}>
                    <p>{user.name}</p>
                    <button type='button' onClick={() => {
                        navigate(`/${user.id}`);
                    }}
                    >Album</button>                    
                </div>        
                )
            })}              
        </div>        
    );
}
  
export default UserList;
  