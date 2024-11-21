// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container text-center py-5">
            <h1 className="display-4">Welcome to Doctor Appointments</h1>
            <p className="lead mt-3">
                Book appointments with top doctors from the comfort of your home.
                Access quality healthcare with ease and convenience.
            </p>
            <Link to="/contact">
                <button className="btn btn-primary btn-lg mt-4">Book an Appointment</button>
            </Link>
        </div>
    );
};

export default Home;
