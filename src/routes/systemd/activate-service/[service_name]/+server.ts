// @ts-ignore
import { spawn } from 'node:child_process';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    let unitName = params.service_name;

    spawn('systemctl', ['enable', '--now', unitName]);

    return new Response();
};