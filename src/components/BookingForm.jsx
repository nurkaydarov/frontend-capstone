
import { useEffect, useState,useReducer, createRef, useRef } from "react";
import * as Yup from 'yup';

function reducer(state, action){
    if(action.type === "firstName"){
        return {
            ...state, firstName: action.firstName
        }
    }
    else if(action.type === "surname"){
        return {
            ...state, surname: action.surname
        }
    }
    else if(action.type === "date"){
        return {
            ...state, date: action.date
        }
    }
    else if(action.type === "time"){
        //const newTimes = state.availableTime.filter(time => time !== action.currentTime)
        ///console.log(action.currentTime, "REDUCER", state.availableTime.length)
        // availableTime: state.availableTime.filter(time => time !== action.currentTime)
        return {
            ...state, time: action.time
        }
    }
    else if(action.type === "occasion"){
        return {
            ...state, occasion: action.occasion
        }
    }
    else if(action.type === "guests"){
        return {
            ...state, guests: action.guests
        }
    }
    else{
        throw Error("Unknown action " + action.type)
    }
}


const BookingForm = ({availableTime, setAvailableTimes}) => {
    const initialState = {firstName: '', surname: '', date: null,time: '17:00', occasion: 'Birthday', guests: 1 };
    const [inputs, dispatch] = useReducer(reducer,initialState )
    const selectRef= useRef(null);
    const handleFirstNameInput = (event) => {
        dispatch({type: "firstName", firstName: event.target.value});
    }
    const handleSurNameInput = (event) => {
        dispatch({type: "surname", surname: event.target.value})
    }
    const handleDateInput = (event) => {
        dispatch({type: "date", date: event.target.value})
    }
    const handleTimeInput = (event) => {
        dispatch({type: "time", time: event.target.value})
    }
    const handleOccasionInput = (event) => {
        dispatch({type: "occasion", occasion: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setAvailableTimes(availableTime.filter((time) => time !== inputs.time))
        dispatch({type: 'time', time: selectRef.current.value})
        //console.log(inputs.time, "STATE")
    }

    const getFormIsValid = () =>{
        return (
            inputs.firstName.length >1 &&  inputs.surname.length > 1
        )
    }
    useEffect(() => {
        console.log(inputs.firstName.length, "INPUTS")
      
        console.log(!getFormIsValid())
        fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js").then(file => file.text())
        .then(text => console.log(text));
    })

    return(
        <form action="" onSubmit={handleSubmit}>
            <div className="form_wrapper">
            <div className="form_control">
                    <label htmlFor="firstName" aria-label="First Name">First Name</label>
                    <input type="text"  id="firstName" name="firstName" placeholder="John" onChange={handleFirstNameInput}/>
                    <div className="err"></div>
                </div>
                <div className="form_control">
                    <label htmlFor="surname">Surname</label>
                    <input type="text"  id="surname" name="surname" placeholder="Doe"  onChange={handleSurNameInput}/>
                    <div className="err"></div>
                </div>
                <div className="form_control">
                    <label htmlFor="date">Select Date</label>
                    <input type="date"  id="date" name="date"  onChange={handleDateInput}/>
                    <div className="err"></div>
                </div>
                <div className="form_control">
                    <label htmlFor="time">Select time</label>
                   <select id='time'  aria-label="Select Time" data-test-id = "time" required onClick={handleTimeInput} ref={selectRef} disabled={availableTime.length <= 0}>
                        {
                        availableTime.map((time) => <option key={time} value={time} defaultValue>{time}</option>)
                        }

                    </select>

                    <div className="err">{}</div>
                </div>

                <div className="form_control">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" required/>
                </div>
                <div className="form_control">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onClick={handleOccasionInput} required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <div className="err"></div>
                </div>
                <button type="sumbit" aria-label="Submit" className="btn" disabled={!getFormIsValid()}>Reserve a table</button>
                
            </div>

        </form>
    );
}
export default BookingForm;