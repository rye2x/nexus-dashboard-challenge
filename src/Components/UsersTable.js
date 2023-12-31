import { useState } from "react";
import "../styles/table.css";
const UsersTable = () =>{

    const initialUsers = [
        { id: 1, name: 'John Doe', date: '2023-12-25' },
        { id: 2, name: 'Jane Smith', date: '2023-12-26' },
        { id: 3, name: 'Jane Smith', date: '2023-12-26' },
        { id: 4, name: 'Jane Smith', date: '2023-12-26' },
        { id: 5, name: 'Jane Smith', date: '2023-12-26' },
        { id: 6, name: 'Jane Smith', date: '2023-12-26' },
        { id: 7, name: 'Jane Smith', date: '2023-12-26' },
        { id: 8, name: 'Jane Smith', date: '2023-12-26' }
    ];

    const [users,setUsers] = useState(initialUsers);

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user)=> user.id !== id);
        setUsers(updatedUsers); 
    }
    return (
        <div className="users-list">
            <h2>Users list</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.date}</td>
                            <td>
                                <button onClick={()=>deleteUser(user.id)}>
                                    <span>X</span>
                                </button>
                            </td>
                        </tr>
                    )
                    
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;