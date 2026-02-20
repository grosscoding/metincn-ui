import { NextResponse } from "next/server";
import { registry } from "@/registry";
import fs from "fs";
import path from "path";

export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  
  if (!registry[name]) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }

  const item = registry[name];
  const files = item.files.map((file) => {
    // Determine the actual path based on type
    let basePath = "";
    if (file.type === "registry:ui") {
      basePath = path.join(process.cwd(), "components", "ui");
    } else if (file.type === "registry:lib") {
      basePath = path.join(process.cwd(), "lib");
    } else {
      basePath = path.join(process.cwd(), "components");
    }

    const filePath = path.join(basePath, file.path);
    let content = "";
    try {
      content = fs.readFileSync(filePath, "utf-8");
    } catch (e) {
      console.error(`Failed to read file: ${filePath}`);
    }

    return {
      ...file,
      content,
    };
  });

  return NextResponse.json({
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...item,
    files,
  });
}
