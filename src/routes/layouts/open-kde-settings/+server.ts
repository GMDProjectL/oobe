// @ts-ignore
import { spawn } from 'node:child_process';
import { userInfo } from 'os';
import type { RequestHandler } from './$types';
import { env } from 'node:process';

export const GET: RequestHandler = async ({ request }) => {
    if (env.XDG_SESSION_DESKTOP !== 'KDE') {
        return new Response();
    }
    
    const childProcess = spawn('systemsettings', ['kcm_keyboard']);
    
    return new Response();
};