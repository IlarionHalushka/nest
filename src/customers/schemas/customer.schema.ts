import * as Joi from '@hapi/joi';
import * as mongoose from 'mongoose';

// export const createCustomerSchema = Joi.object().keys({
//   name: Joi.string()
//     .min(1)
//     .max(100),
//   age: Joi.number()
//     .integer()
//     .min(0)
//     .max(100),
// });

export const CustomerSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
