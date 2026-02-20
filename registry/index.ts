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
  card: {
    name: "card",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "card.tsx",
        type: "registry:ui",
      },
    ],
  },
};
