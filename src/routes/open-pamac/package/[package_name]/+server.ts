// @ts-ignore
import { spawn } from 'node:child_process';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    spawn('pamac-manager', [`--details=${params.package_name}`]);
    return new Response();
};