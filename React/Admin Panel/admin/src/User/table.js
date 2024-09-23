import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/getUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/user/deleteUser/${id}`);
        setUsers(users.filter(user => user._id !== id));
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire(
          'Error!',
          'There was a problem deleting the user.',
          'error'
        );
      }
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">User List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.status === 'Active' ? (
                  <Button variant="success" disabled>
                    Active
                  </Button>
                ) : (
                  <Button variant="secondary" disabled>
                    Inactive
                  </Button>
                )}
              </td>
              <td>
                <Button variant="success" className="me-2">
                  <Link
                    to={`/edit/${user._id}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Edit
                  </Link>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Button
          as={Link}
          to="/adduser"
          variant="primary"
          className="ms-auto mb-3"
        >
          Add user
        </Button>
      </div>
    </Container>
  );
};

export default UserTable;
