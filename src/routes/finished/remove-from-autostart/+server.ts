import 'fs';
import { userInfo } from 'node:os';
import type { RequestHandler } from './$types';
import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const { username } = userInfo();
    const path = '/home/' + username + '/.config/autostart/oobe.desktop';

    if (!existsSync(path)){
        return new Response("No autostart file was found.");
    }

    try {
        await rm(path);
    }
    catch {
        return error(500, "Failed to remove OOBE autostart file somehow...");
    }

    return new Response("Success!");
};