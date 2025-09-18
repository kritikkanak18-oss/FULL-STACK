const express = require("express");
const app = express();
const PORT = 3000;

// In-memory seat storage
let seats = {
  1: { status: "available" },
  2: { status: "available" },
  3: { status: "available" },
  4: { status: "available" },
  5: { status: "available" }
};

// Store lock timers
let lockTimers = {};

// Endpoint: View all seats
app.get("/seats", (req, res) => {
  res.json(seats);
});

// Endpoint: Lock a seat
app.post("/lock/:id", (req, res) => {
  const seatId = req.params.id;

  if (!seats[seatId]) {
    return res.status(404).json({ message: "Seat not found" });
  }

  if (seats[seatId].status === "booked") {
    return res.status(400).json({ message: `Seat ${seatId} is already booked` });
  }

  if (seats[seatId].status === "locked") {
    return res.status(400).json({ message: `Seat ${seatId} is already locked` });
  }

  // Lock seat
  seats[seatId].status = "locked";

  // Clear any previous lock timer
  if (lockTimers[seatId]) clearTimeout(lockTimers[seatId]);

  // Auto release lock after 1 minute
  lockTimers[seatId] = setTimeout(() => {
    if (seats[seatId].status === "locked") {
      seats[seatId].status = "available";
    }
  }, 60000);

  res.json({ message: `Seat ${seatId} locked successfully. Confirm within 1 minute.` });
});

// Endpoint: Confirm a seat booking
app.post("/confirm/:id", (req, res) => {
  const seatId = req.params.id;

  if (!seats[seatId]) {
    return res.status(404).json({ message: "Seat not found" });
  }

  if (seats[seatId].status === "booked") {
    return res.status(400).json({ message: `Seat ${seatId} is already booked` });
  }

  if (seats[seatId].status !== "locked") {
    return res.status(400).json({ message: "Seat is not locked and cannot be booked" });
  }

  // Confirm booking
  seats[seatId].status = "booked";

  // Clear lock timer
  if (lockTimers[seatId]) {
    clearTimeout(lockTimers[seatId]);
    delete lockTimers[seatId];
  }

  res.json({ message: `Seat ${seatId} booked successfully!` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
