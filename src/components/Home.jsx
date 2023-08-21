import React, { useEffect, useState } from 'react'
import './Home.css'
import { Form } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchUser, updateUser } from '../userAction';





const Home = () => {
    var { users } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setgender] = useState("");

    function handleClick(e) {
        const newUser = {

            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender,
        }
        const updatedUsers = users ? [...users, newUser] : [newUser];

        dispatch(updateUser(updatedUsers));
        navigate('/users')
    }

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (

        <div className='conatiner' >
            <h1>Form</h1>
            <Form className='form-container' >
                <Form.Item>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" id="name" required value={firstName} onChange={(e) => { setfirstName(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="name" id="name" required value={lastName} onChange={(e) => { setlastName(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="phone" required value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" id="gender" required value={gender} onChange={(e) => { setgender(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <button id='submit-button' type="submit" onClick={handleClick}>Submit</button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Home