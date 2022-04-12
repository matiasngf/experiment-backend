import express from 'express';
import { createHello, createHelloValidation, hello, helloName } from '../controller/hello';

const router = express.Router();

router.get('/', hello);
router.get('/:name', helloName)

router.post('/', createHelloValidation, createHello);

export default router;