import { Schema, model, InferSchemaType } from "mongoose";
import { Role } from "../entities/enums/Role";
import { Status } from "../entities/enums/Status";

const userSchema = new Schema(
    {
        _id: {
            type: String,
            required: true
        },

        name: { 
            type: String, 
            required: true 
        },

        email: { 
            type: String, 
            required: true 
        },

        passwordHash: { 
            type: String, 
            required: true 
        },

        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.CUSTOMER,
            required: true
        },

        status: {
            type: String,
            enum: Object.values(Status),
            default: Status.ACTIVE,
            required: true
        },
        
        restaurant: { 
            type: String, 
            required: false 
        },
    },
    {
        timestamps: true
    }
);

export type UserDocument = InferSchemaType<typeof userSchema>;

export const MongoUserModel = model<UserDocument>(
    "User",
    userSchema
);