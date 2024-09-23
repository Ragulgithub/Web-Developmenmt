import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

function Edituser() {
    const { id } = useParams(); // Get the ID from the URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInput = (event) => {
        const fieldId = event.target.id;
        const fieldValue = event.target.value;

        if (fieldId === 'name') {
            setName(fieldValue);
        }
        if (fieldId === 'email') {
            setEmail(fieldValue);
        }
    };

    const validate = () => {
        console.log("Validating input...");
        if (name.trim() && email.trim()) {
            setNameError(false);
            setEmailError(false);
            console.log("Updating user with data:", { name, email });
            handleSubmit(); // Call handleSubmit if validation is successful
        } else {
            console.log("Validation failed");
            setNameError(!name.trim());
            setEmailError(!email.trim());
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        console.log("User ID:", id); // Log the user ID for debugging
        try {
            const response = await axios.put(`http://localhost:5000/user/updateUser/${id}`, { name, email });
            setLoading(false);
            if (response.data.status === 1) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/table'); // Redirect to the list user page
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error updating user',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.log('Backend response:', response.data);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error occurred:', error);
            setError('Error updating user');
            Swal.fire({
                title: 'Error!',
                text: 'Error updating user',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to cancel the operation?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willCancel) => {
            if (willCancel) {
                navigate("/table");
            }
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div className="form-container">
            <h1>Edit User</h1>
            <div>
                <label>Name:</label>
                <input type='text' placeholder='Enter your name' id='name' value={name} onChange={handleInput} />
                {nameError && <span style={{ color: 'red' }}>*Required</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' placeholder='Enter your email' id='email' value={email} onChange={handleInput} />
                {emailError && <span style={{ color: 'red' }}>*Required</span>}
            </div>
            <input type='button' value="Submit" className='mb-3' onClick={validate} />
            <Button as={Link} to="/table" variant="danger" className='btn2' onClick={handleCancel}>
                Cancel
            </Button>
        </div>
    );
}

export default Edituser;
