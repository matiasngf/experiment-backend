import type { Request, Response } from 'express';
import Joi from 'joi';
import { validateRequest } from '../helpers/validateRequest';

export const hello = (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
}

export const helloName = (req: Request<{name: string}>, res: Response) => {
  const params = req.params;
  res.status(200).send(`Hello ${params.name}!`);
}

export const createHelloValidation = (req: Request, res: Response, next: Function) => {
  const schema = Joi.object({
    name: Joi.string().required()
  })
  validateRequest(req, res, next, schema);
}

export const createHello = (req: Request, res: Response) => {
  const params = req.body;
  res.status(200).send(`Hello ${params.name}!`);
}