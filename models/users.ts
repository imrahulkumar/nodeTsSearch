import * as mongoose from "mongoose";
import {model} from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
});

export default model('user', userSchema);
