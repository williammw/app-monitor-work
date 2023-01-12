import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv';

const mode = process.env.RUNNING_MODE
const envPath = `.env.${mode}`
dotenv.config({ path: envPath })
// https://astro.build/config
export default defineConfig({
    integrations: [react()],
});
