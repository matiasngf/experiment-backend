import type { Request, Response } from 'express';
import { Schema } from 'joi';

export const  validateRequest = (req: Request, res: Response, next: Function, schema: Schema) => {
  const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    res.status(400).json({
      error: 'invalid-request',
      data: error.details.map(i => i.message)
    });
      // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
  } else {
    req.body = value;
    next();
  }
}