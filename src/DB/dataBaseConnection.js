import { Sequelize } from "sequelize";

const dataBaseConnection = new Sequelize('dbztechnology2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: true, // -->Add this line. for reading from database
    },
    timezone: '-05:00', // -->Add this line. for writing to database
})

export default dataBaseConnection