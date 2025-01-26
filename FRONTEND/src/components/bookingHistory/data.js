// Dummy Data
const dummyBookings = [
  {
    id: 1,
    restaurantName: "The Gourmet Kitchen",
    date: "2025-02-15",
    time: "7:00 PM",
    guests: 4,
    onModify: (id) => console.log("Modify booking with ID:", id),
    onCancel: (id) => console.log("Cancel booking with ID:", id),
  },
  {
    id: 2,
    restaurantName: "Ocean Breeze",
    date: "2025-03-01",
    time: "6:00 PM",
    guests: 2,
    onModify: (id) => console.log("Modify booking with ID:", id),
    onCancel: (id) => console.log("Cancel booking with ID:", id),
  },
  {
    id: 3,
    restaurantName: "Mountain Retreat",
    date: "2025-04-10",
    time: "8:00 PM",
    guests: 6,
    onModify: (id) => console.log("Modify booking with ID:", id),
    onCancel: (id) => console.log("Cancel booking with ID:", id),
  },
];
