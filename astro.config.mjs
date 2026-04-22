// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightKatex } from "starlight-katex";

import d2 from "astro-d2";

// https://astro.build/config
export default defineConfig({
  site: "https://aek676.github.io",
  base: "/docs",
  integrations: [
    starlight({
      plugins: [starlightKatex()],
      title: "Anass",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/aek676" },
      ],
      sidebar: [
        {
          label: "Inicio",
          items: [{ label: "Introducción", slug: "home/introduction" }],
        },
        {
          label: "Máster",
          items: [
            { label: "Índice", slug: "master" },
            {
              label: "Desarrollo de Aplicaciones Híbridas",
              autogenerate: { directory: "master/dah" },
            },
            {
              label: "Desarrollo web basado en servicios y componentes",
              autogenerate: { directory: "master/dwsc" },
            },
          ],
        },
      ],
    }),
    d2({
      experimental: { useD2js: true }
    }),
  ],
});

