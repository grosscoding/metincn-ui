import { RegistryTheme, Registry } from "@/types/registry";

export const registry: Registry = {
  button: {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "button.tsx",
        type: "registry:ui",
      },
    ],
  },
};
