import React, { useState } from "react";
import BookNowModal from "./BookNowModal";

const Booking = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && <BookNowModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
};

export default Booking;