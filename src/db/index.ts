import "dotenv/config";
import { drizzle } from 'drizzle-orm/libsql';
import { usersTable } from './schema';

// You can specify any property from the libsql connection options
const db = drizzle({ 
    connection: { 
      url: process.env.TURSO_DATABASE_URL!, 
      authToken: process.env.TURSO_AUTH_TOKEN!
    }
  });

console.log('TURSO_DATABASE_URL:', process.env.TURSO_DATABASE_URL);
console.log('TURSO_AUTH_TOKEN:', process.env.TURSO_AUTH_TOKEN);


export async function fetchAllUsers() {
    try {
      const result = await db.select().from(usersTable).execute();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  
  // Llamada a la función para obtener los datos
  fetchAllUsers();