// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Anass',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aek676' }],
      sidebar: [
        {
          label: 'Inicio',
          items: [
            { label: 'Introducción', slug: 'home/introduction' },
          ],
        },
        {
          label: 'Máster',
          items: [
            { label: 'Índice', slug: 'master' },
            {
              label: 'Desarrollo de Aplicaciones Híbridas',
              autogenerate: { directory: 'master/dah' },
            }
          ]
        }
      ],
    }),
  ],
});
