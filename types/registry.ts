export type RegistryType = "registry:ui" | "registry:component" | "registry:block" | "registry:lib" | "registry:hook";

export interface RegistryFile {
  path: string;
  content?: string;
  type: RegistryType;
  target?: string;
}

export interface RegistryItem {
  name: string;
  type: RegistryType;
  description?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
  tailwind?: {
    config?: Record<string, any>;
  };
  cssVars?: {
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
  meta?: Record<string, any>;
}

export interface Registry {
  [name: string]: RegistryItem;
}

export interface RegistryTheme {
  name: string;
  type: "registry:theme";
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}
