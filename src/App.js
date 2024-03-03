import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ReservationPage from "./pages/Reservationpage.jsx";
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservations" element={<ReservationPage />} />
      <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
  </Routes>
  );
}

export default App;
