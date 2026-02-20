import * as React from 'react';
import fs from 'fs';
import path from 'path';
import { Pre } from 'fumadocs-ui/components/codeblock';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Button } from '@/components/ui/button'; // Import components statically for preview

const Previews: Record<string, React.ReactNode> = {
  button: (
    <div className="flex items-center gap-4">
      <Button variant="default">Close</Button>
      <Button variant="default">Accept</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  ),
};

export async function ComponentPreview({ name }: { name: string }) {
  const tsxPath = path.join(process.cwd(), 'components/ui', `${name}.tsx`);
  let tsxContent = '';
  try {
    tsxContent = fs.readFileSync(tsxPath, 'utf-8');
  } catch (e) {
    tsxContent = '// Component code not found.';
  }

  // We read the global CSS for now as the CSS content
  const cssPath = path.join(process.cwd(), 'app/globals.css');
  let cssContent = '';
  try {
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  } catch (e) {
    cssContent = '/* CSS not found */';
  }

  const Preview = Previews[name];

  return (
    <div className="my-8 flex flex-col rounded-lg border metin-border bg-[#1e1a14]/50 overflow-hidden">
      <div className="flex min-h-[350px] items-center justify-center p-10 bg-background/50">
        {Preview || <div>No preview available</div>}
      </div>
    </div>
  );
}

export async function ComponentSource({ name }: { name: string }) {
  const tsxPath = path.join(process.cwd(), 'components/ui', `${name}.tsx`);
  let tsxContent = '';
  try {
    tsxContent = fs.readFileSync(tsxPath, 'utf-8');
  } catch (e) {
    tsxContent = '// Component code not found.';
  }

  // We read the global CSS for now as the CSS content
  const cssPath = path.join(process.cwd(), 'app/globals.css');
  let cssContent = '';
  try {
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  } catch (e) {
    cssContent = '/* CSS not found */';
  }

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">TypeScript (React)</h4>
          <DynamicCodeBlock lang="tsx" code={tsxContent} />
        </div>
        <div className="hidden md:block">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">CSS (Tailwind Base)</h4>
          <DynamicCodeBlock lang="css" code={cssContent} />
        </div>
      </div>
    </div>
  );
}
