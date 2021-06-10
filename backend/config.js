import dotenv from 'dotenv';
dotenv.config()
export default{
    //GET THE INCAPSULATED URL
    MONGODB_URL:process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'somethingSecret'
}