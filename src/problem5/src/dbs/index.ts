import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Load environment variables
const env = {
    DB_HOST: process.env.DB_HOST || 'nhphu19.info',
    DB_NAME: process.env.DB_NAME || 'code_challenge',
    DB_USER: process.env.DB_USER || 'ec2user',
    DB_PASS: process.env.DB_PASS || 'yourpassword',
}

// Create Sequelize instance
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: "mysql",
    logging: false,
});

// database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync({ force: false, alter: true });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, connectDB };
