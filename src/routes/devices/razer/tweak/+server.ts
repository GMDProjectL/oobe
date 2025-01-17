// @ts-ignore
import { spawn } from 'node:child_process';
import { userInfo } from 'node:os';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const username = userInfo().username;
    const usermod = spawn("pkexec", ['usermod', '-aG', 'plugdev', username]);

    usermod.on('close', code => {
        if (code != 0) {
            return;
        }

        spawn('reboot');
    })

    return new Response();
};