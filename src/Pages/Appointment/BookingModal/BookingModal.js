import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-12"> {name} </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input type="text" disabled value={date} className="input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, index) => <option key={index} value={slot}> {slot} </option>)
              }
            </select>
            <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" />
            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
            <input className="btn bg-accent" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;