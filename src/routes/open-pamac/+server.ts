import type { RequestHandler } from './$types';
// @ts-ignore
import { spawn } from 'node:child_process';

export const GET: RequestHandler = async () => {
    spawn('pamac-manager');

    return new Response();
};