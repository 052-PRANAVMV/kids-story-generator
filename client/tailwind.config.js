import flowbite from "flowbite-react/tailwind";
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./src//*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
});
