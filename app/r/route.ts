import { NextResponse } from "next/server";

const index = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "metincn",
  homepage: "https://metincn.vercel.app",
  items: [
    {
      name: "button",
      type: "registry:ui",
      title: "Button",
      description: "Displays a Metin2-styled button.",
      dependencies: ["@radix-ui/react-slot"],
      files: [
        {
          path: "button.tsx",
          type: "registry:ui",
        }
      ]
    }
  ]
};

export async function GET() {
  return NextResponse.json(index);
}
