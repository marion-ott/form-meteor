import { Mongo } from 'meteor/mongo';

const users = new Mongo.Collection("users");

export default users;