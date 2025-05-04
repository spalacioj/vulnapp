import Header from "../components/Header"
import { useState, useEffect } from "react";
import '../assets/styles/AdminPanel.css'

function AdminPanel(){
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const user = JSON.parse(localStorage.getItem('user'));

    const isAdmin = user && user.role === 'admin';

    useEffect(() => {
        if (!isAdmin) {
          setError('Access denied: Only admins can view this page.');
          return;
        }

        const fetchUsers = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/users');
              if (!response.ok) throw new Error('Failed to fetch users');
              const data = await response.json();
              console.log(data);
              setUsers(data);
            } catch (err) {
              setError(err.message);
            }
        };
      
        fetchUsers();

    },[isAdmin, refreshKey])

    const handleDelete = async (userId) => {
      if (window.confirm('Are you sure you want to delete this user?')) {
        try {
          const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: 'DELETE',
          });
          if (!response.ok) throw new Error('Failed to delete user');
          setRefreshKey(prev => prev + 1);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    if (!isAdmin) {
        return (
          <div className="admin-error">
            <h2>Access Denied</h2>
            <p>{error}</p>
          </div>
        );
    }

    return(
        <>
        <Header />
        <div className="admin-page">
          <h1>Admin Panel</h1>
          {error && <p className="error">{error}</p>}
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.user_id}>
                  <td>{u.user_id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(u.user_id)}
                      disabled={u.role === 'admin'}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
    )
}

export default AdminPanel;
