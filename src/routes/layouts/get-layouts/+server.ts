import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'fs/promises';
import path from 'path';

export const GET: RequestHandler = async () => {
    const fileContent = await fs.readFile('/usr/share/X11/xkb/rules/base.lst', 'utf8');

    const lines = fileContent.split('\n');
    const startIndex = lines.findIndex(line => line.trim() === '! layout');
    const endIndex = lines.findIndex(line => line.trim() === '! variant');
    const layoutContent = lines.slice(startIndex + 1, endIndex).join('\n');

    const layouts = layoutContent.split('\n').slice(0,98).map(line => {

        const layoutCode = line.slice(0, 8).trim();
        const layoutName = line.slice(8).trim();

        return {
            code: layoutCode,
            name: layoutName
        }
    });

    return json(layouts);
};