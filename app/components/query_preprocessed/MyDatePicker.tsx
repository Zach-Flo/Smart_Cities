import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'

export default function MyDatePicker({ onDateChange }) {
    const minDate = new Date('2020-11-19');
    const maxDate = new Date('2020-12-13');
    const [startDate, setStartDate] = useState(minDate);

    const handleDateChange = (date) => {
        setStartDate(date); // Update the state with the new date
        if (onDateChange) {
            onDateChange(date); // Call the onDateChange function with the new date
        }
    };

    return (
        <DatePicker className='text-center rounded-lg text-xl border-black z-50 font-bold'
            selected={startDate}
            onChange={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            showIcon
            customTimeInput={false}
            onKeyDown={(e) => {
                e.preventDefault();
            }}
        />
    );
}
