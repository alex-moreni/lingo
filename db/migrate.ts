import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { migrate } from "drizzle-orm/neon-http/migrator"

import "dotenv/config"

import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "./db/migrations" })

    console.log("Migration successful!")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()

export default db
