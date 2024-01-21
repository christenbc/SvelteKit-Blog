import type { LayoutLoad } from './$types';

export const prerender = true // all the links on the site are crawled and the pages are goind to pre-render at build time

export const load = (async ({ url }) => {
    return {
        url: url.pathname
    };
}) satisfies LayoutLoad;