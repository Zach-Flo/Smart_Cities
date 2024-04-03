import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'

export default function MyDatePicker( { onDateChange }){
    const minDate = new Date('2020-11-19');
    const maxDate = new Date('2020-12-13');
    const [startDate, setStartDate] = useState(minDate);

    return(
        <DatePicker className=' text-center rounded-lg text-xl border-black z-50 font-bold'
            selected={startDate} 
            onChange={onDateChange} 
            minDate={minDate}
            maxDate={maxDate}
            showIcon
        />
    )
}