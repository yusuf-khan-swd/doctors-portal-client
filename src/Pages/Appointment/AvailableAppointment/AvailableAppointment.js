import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentOptions');
      const data = await res.json();
      return data;
    }
  });

  return (
    <div className="mt-4">
      <p className="text-xl text-secondary text-center p-12">
        Available Appointments on {format(selectedDate, "PP")}{" "}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {
        treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
