// @ts-ignore
import { spawn } from 'node:child_process';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    spawn("reboot");
    return new Response();
};