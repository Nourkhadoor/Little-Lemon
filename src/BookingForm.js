import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api.js';
import ConfirmedBooking from './pages/ConfirmedBooking.jsx';
import './App.css';

function BookingForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        fetchAvailableTimes(new Date());
    }, []);

    const fetchAvailableTimes = async (selectedDate) => {
        try {
            const response = await fetchAPI(selectedDate);
            setAvailableTimes(response);
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name,
            email,
            date,
            time,
            numberOfPeople,
            occasion,
        };
        try {
            const submitted = await submitAPI(formData);
            if (submitted) {
                setIsSubmitted(true);
            } else {
                console.log('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="booking-form-container">
            <h2>Reservation Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="time">Time:</label>
                    <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="">Select a time</option>
                        {availableTimes.map((timeOption, index) => (
                            <option key={index} value={timeOption}>{timeOption}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="numberOfPeople">Number of People:</label>
                    <input type="number" id="numberOfPeople" value={numberOfPeople} min="1" onChange={(e) => setNumberOfPeople(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Engagement">Engagement</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && <ConfirmedBooking onClose={handleClose} />}
        </div>
    );
}

export default BookingForm;
