import { dbConnect } from "$db/mongoose";
dbConnect();

export async function handle({ event, resolve }) {
      return resolve(event);
}