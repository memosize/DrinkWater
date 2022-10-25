import * as mongoose from 'mongoose';
export type UserDocument = User & Document;
export class User {
  name: string;
  age: number;
  weight: number;
  password: string;
}
export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  password: String,
});
