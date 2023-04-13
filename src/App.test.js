import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Booking from './components/Booking';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<Booking />)
  const headingText = screen.getByText("Available table: 6");
  expect(headingText).toBeInTheDocument();
});

test("available times", () => {
  const time = "17:00";
  const firstName = "Aktan";
  const surName = "Nurkaydarpv";
  const handleSubmit = jest.fn();

  render(<BookingForm onSubmit={handleSubmit}/>);

  const firstNameArea = screen.getByLabelText(/First Name/);
  fireEvent.change(firstNameArea,{target: {value: firstName}});

  const surNameArea = screen.getByLabelText("Surname");
  fireEvent.change(surNameArea, {target: {value: surName}});

  const availableTimeArea = screen.getByTestId("time");
  fireEvent.change(availableTimeArea, {target: {value: time}})

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalledWith({
    firstName,
    surName

  })
})
