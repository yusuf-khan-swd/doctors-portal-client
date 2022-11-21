import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price
    };

    fetch('https://doctors-portal-server-alpha.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking Confirm');
          refetch();
        }
        else {
          toast.error(data.message);
          setTreatment(null);
        }
      })

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
          <h3 className="text-lg font-bold mb-12"> {treatmentName} </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input type="text" disabled value={date} className="input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, index) => <option key={index} value={slot}> {slot} </option>)
              }
            </select>
            <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered w-full" />
            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
            <input className="btn bg-accent" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
