import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    process.exit(0);
    return new Response();
};