"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/0-100-cohort?sslmode=require",
        });
        yield client.connect();
        try {
            // await client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username123', 'user123@example.com', 'user_password123');";
            const res = yield client.query(insertQuery);
            console.log("Insertion success:", res); // Output insertion result
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
createUsersTable();
