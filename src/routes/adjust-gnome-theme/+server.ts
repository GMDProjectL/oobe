// @ts-ignore
import { spawn } from 'node:child_process';
import { userInfo } from 'os';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const childProcess = spawn('gsettings', ['set', 'org.gnome.desktop.interface', 'gtk-theme', 'adw-gtk3-dark' ]);
    const childProcess1 = spawn('gsettings', ['set', 'org.gnome.desktop.interface', 'monospace-font-name', 'Adwaita Mono 10' ]);
    const childProcess2 = spawn('gsettings', ['set', 'org.gnome.desktop.interface', 'font-name', 'Adwaita Sans 10' ]);
    const childProcess3 = spawn('gsettings', ['set', 'org.gnome.desktop.interface', 'color-scheme', 'prefer-dark' ]);
    
    return new Response();
};
