// @ts-ignore
import { spawn } from 'node:child_process';
import { userInfo } from 'os';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const body: {selectedLayouts: Array<string>} = await request.json();

    const sources = `[${body.selectedLayouts.map(l => `('xkb', '${l}')`).join(', ')}]`;

    const childProcess = spawn('gsettings', ['set', 'org.gnome.desktop.input-sources', 'sources', sources ]);
    
    return new Response();
};