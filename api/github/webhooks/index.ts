
import dotenv from 'dotenv';
import { createNodeMiddleware, createProbot } from 'probot';
import app from '../../../app';

console.log(process.env.APP_ID);

dotenv.config();
const cb = createNodeMiddleware(app, { probot: createProbot(), webhooksPath: '/api/github/webhooks' });

export default cb;
