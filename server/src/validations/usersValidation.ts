import Joi from "@hapi/joi";
import {Request} from "express";

export const registerValidation = (data: Request) => {
  const userSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    displayName: Joi.string().required(),
    email: Joi.string().required().email(),
  });
  return userSchema.validate(data);
};
