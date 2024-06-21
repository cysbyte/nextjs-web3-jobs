import {Schema, model, models} from "mongoose";

const developerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String]
});

const DeveloperModel = models.Developer || model('Developer', developerSchema);

export default DeveloperModel