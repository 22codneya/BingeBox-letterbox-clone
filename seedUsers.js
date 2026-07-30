import dns from "dns";

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

import mongoose from "mongoose";
import "dotenv/config";
import User from "./model/user.js";


const users = [
  {
    userName: "Bhumi Sharma",
    email: "bhumi@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    userName: "Aarav Sharma",
    email: "aarav@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    userName: "Ananya Verma",
    email: "ananya@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    userName: "Rohan Singh",
    email: "rohan@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    userName: "Isha Kapoor",
    email: "isha@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    userName: "Kabir Mehta",
    email: "kabir@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    userName: "Meera Joshi",
    email: "meera@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    userName: "Aditya Rao",
    email: "aditya@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    userName: "Sneha Patel",
    email: "sneha@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    userName: "Yash Verma",
    email: "yash@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },

  // International users

  {
    userName: "James Anderson",
    email: "james.anderson@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    userName: "Emma Wilson",
    email: "emma.wilson@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    userName: "Oliver Smith",
    email: "oliver.smith@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    userName: "Sophia Brown",
    email: "sophia.brown@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    userName: "William Taylor",
    email: "william.taylor@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    userName: "Olivia Davis",
    email: "olivia.davis@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    userName: "Ethan Miller",
    email: "ethan.miller@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    userName: "Ava Johnson",
    email: "ava.johnson@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    userName: "Noah Williams",
    email: "noah.williams@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    userName: "Mia Thompson",
    email: "mia.thompson@gmail.com",
    password: "$2b$10$SSG8Qnw5VpFgHYvh0TETYOON1uU8ynWzUQd7BBaut7CeK.7xapFiK",
    profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];


const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected ✅");

    await User.deleteMany({});
    console.log("Old users deleted");

    await User.insertMany(users);

    console.log("Users inserted successfully ✅");

    process.exit(0);

  } catch (error) {
    console.log("Seed error ❌", error.message);
    process.exit(1);
  }
};


seedUsers();