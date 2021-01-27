import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // delete all of the items in the db before attempting
    // to add more items
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // import items from the data folder into the db
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}.red.inverse`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // delete all of the items in the db before attempting
    // to add more items
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}.red.inverse`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
