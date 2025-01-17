// @ts-ignore
import { spawn } from 'node:child_process';
import { userInfo } from 'os';
import { writeFile } from 'fs/promises';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const body: {selectedLayouts: Array<string>} = await request.json();

    const content = `[Layout]
DisplayNames=${body.selectedLayouts.map(l => {
    if (l == "us") {
        return "EN";
    }
    return l.toUpperCase();
}).join(',')}
LayoutList=${body.selectedLayouts.join(',')}
Options=grp:win_space_toggle,grp:alt_shift_toggle
ResetOldOptions=true
Use=true
VariantList=,`

    const username = userInfo().username;
    const filePath = `/home/${username}/.config/kxkbrc`;

    await writeFile(filePath, content);

    spawn('dbus-send', [
        ' --session', '--type=signal', '--reply-timeout=100', 
        '--dest=org.kde.keyboard', '/Layouts', 
        'org.kde.keyboard.reloadConfig'
    ]); // dbus fuckage

    return new Response();
};