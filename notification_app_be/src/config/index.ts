import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  dbPath: process.env.DB_PATH || "./notifications.db",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  affordmed: {
    email: process.env.EMAIL || "",
    name: process.env.NAME || "",
    rollNo: process.env.ROLL_NO || "",
    accessCode: process.env.ACCESS_CODE || "",
    clientID: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    baseUrl: "http://20.207.122.201/evaluation-service",
  },
};
