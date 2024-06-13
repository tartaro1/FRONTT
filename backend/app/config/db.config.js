import { config } from "dotenv"
config();
export const configDB = {
    host:process.env.MYSQLHOST,
    port:process.env.MYSQLPORT,
    user:process.env.MYSQLUSER || 'root',
    password:process.env.MYSQLPASSWORD || '',
    database:process.env.MYSQLDATABASE ||'tartaro'
}