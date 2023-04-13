import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

const BookingForm = ({availableTime, setAvailableTimes}) => {
    const [response, setResponse]= useState(null);
    const [time, setTime] = useState(null);
    const times = availableTime;
    const handleTime = (time) => {
        console.log(time)
        setAvailableTimes((prevstate) => {
            return availableTime.filter(cTime => cTime !== time) 
        })
    }
    useEffect(() => {
        if(response){
            console.log(response)
            console.log(times)
            handleTime(time)
        }
        
    }, [response])
    const formik = useFormik({
        initialValues: {date: '', time: '', firstName: '', surname: '', occasion: 'Birthday', guests: 1},
        onSubmit: (values) => {
            setResponse(values)
        },
        validationSchema: Yup.object({
            date: Yup.date().min(new Date(), "Must be current date", ).required(),
            time: Yup.string().required(),
            firstName: Yup.string().required(),
            surname: Yup.string().required(),
            occasion: Yup.mixed().oneOf(['Birthday', 'Anniversary']).required('Please select an event type'),
            time: Yup.mixed().oneOf(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']).required('Please select an event type'),
            guests: Yup.number().min(1).max(10).required(),
        }),
    });
    return(
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="form_wrapper">
            <div className="form_control">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"  id="firstName" name="firstName" placeholder="John" {...formik.getFieldProps('firstName')}/>
                    <div className="err">{formik.errors.firstName}</div>
                </div>
                <div className="form_control">
                    <label htmlFor="surname">Surname</label>
                    <input type="text"  id="surname" name="surname" placeholder="Doe" {...formik.getFieldProps('surname')}/>
                    <div className="err">{formik.errors.surname}</div>
                </div>
                <div className="form_control">
                    <label htmlFor="date">Select Date</label>
                    <input type="date"  id="date" name="date" {...formik.getFieldProps('date')} />
                    <div className="err">{formik.errors.date}</div>
                </div>
                <div className="form_control">
                    <label htmlFor="time">Select time</label>
                   
                    <select id='time' {...formik.getFieldProps("time")} disabled={!times} onChange={e => setTime(e.target.value)}>
                    {
                    times.map((time) => <option key={time} value={time} defaultValue>{time}</option>)
                    }

                    </select>
                    <div className="err">{formik.errors.time}</div>
                </div>

                <div className="form_control">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"{...formik.getFieldProps("guests")}/>
                </div>
                <div className="form_control">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" {...formik.getFieldProps("occasion")}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <div className="err">{formik.errors.occasion}</div>
                </div>
                <button type="sumbit" className="btn">Reserve a table</button>
                
            </div>

        </form>
    );
}
export default BookingForm;