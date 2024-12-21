import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "src/db/migrations", // must be an absolute path
    });
    console.log("Migration complete");
  } catch (error) {
    console.error("Error during migration: ", error);
    process.exit(1);
  }
};

main();
