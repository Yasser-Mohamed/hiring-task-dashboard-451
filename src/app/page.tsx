'use client';
import BookingCheckout from "@/components/Booking-Checkout";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("AED");
  return (
    <>
      <Navbar selected={selected} setSelected={setSelected} />
      <div className="flex justify-center items-center h-full">
        <BookingCheckout selected={selected} />
      </div>
    </>
  );
}
