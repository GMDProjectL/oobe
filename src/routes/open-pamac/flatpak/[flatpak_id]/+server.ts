// @ts-ignore
import { spawn } from 'node:child_process';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    spawn('pamac-manager', [`--details-id=${params.flatpak_id}`]);
    return new Response();
};