import { useFormik } from "formik";
import { useState ,useEffect} from "react";
import * as Yup from 'yup';
import BookingForm from "./BookingForm";
const Booking = () => {
    const [availableTimes,setAvailableTimes] = useState(["17:00", "18:00", "19:00","20:00", "21:00", "22:00"]);
    useEffect(() => {
        
    }, [])
    return (
        <>
            <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Available table: {availableTimes.length}</h1>
            <BookingForm availableTime={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </>
    )
}
export default Booking;