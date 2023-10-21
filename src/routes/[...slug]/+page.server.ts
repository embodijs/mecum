import type { EntryGenerator } from './$types.js';

export const entries = (() => {
    return [
        { slug: '' }
    ];
}) satisfies EntryGenerator;

export * from '@embodi/generator/routes/+page.server';