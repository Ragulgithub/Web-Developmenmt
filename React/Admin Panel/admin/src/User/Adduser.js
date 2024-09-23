import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

function Adduser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
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
    }

    const validate = async () => {
        console.log("Validating input...");
        if (name.trim() && email.trim()) {
            setNameError(false);
            setEmailError(false);

            // Post request to add user to MongoDB
            try {
                const response = await axios.post('http://localhost:5000/employee/addUser', {
                    name: name,
                    email: email
                });

                console.log("Response from server:", response.data.data);

                swal({
                    title: "Success!",
                    text: "User has been added successfully!",
                    icon: "success",
                    button: "OK",
                });

                // Redirect to another page if needed
                navigate("/table");
            } catch (error) {
                console.error("There was an error adding the user:", error);
                swal({
                    title: "Error",
                    text: "Failed to add user",
                    icon: "error",
                    button: "OK",
                });
            }
        } else {
            console.log("Validation failed");
            setNameError(!name.trim());
            setEmailError(!email.trim());
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        swal({
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
    }

    return (
        <div className="form-container">
            <h1>Add User</h1>
            <div>
                <label>Name :</label>
                <input type='text' placeholder='Enter your name' id='name' value={name} onChange={handleInput} />
                {nameError && <span style={{ color: 'red' }}>*Required</span>}
            </div>
            <div>
                <label>Email :</label>
                <input type='text' placeholder='Enter your email' id='email' value={email} onChange={handleInput} />
                {emailError && <span style={{ color: 'red' }}>*Required</span>}
            </div>

            <input type='button' value="Submit" className='mb-3' onClick={validate} />
            <Button as={Link} to="/table" variant="danger" className='btn2' onClick={handleCancel}>
                Cancel
            </Button>
        </div>
    )
}

export default Adduser;
