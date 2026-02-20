import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to MetinCN</h1>
      <p className="text-muted-foreground">
        A Metin2-inspired React UI component registry built on top of shadcn/ui.
      </p>
      <div className="mt-8 flex justify-center">
        <Link href="/docs" className="text-metin-gold hover:underline">
          Go to Documentation
        </Link>
      </div>
    </main>
  );
}
