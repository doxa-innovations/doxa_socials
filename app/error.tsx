'use client';

import { captureException } from '@doxa-innovations/watch/next/client';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => captureException(error), [error]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center text-white">
      <p>Something went wrong.</p>
      <button type="button" onClick={() => reset()} className="rounded-full bg-white/10 px-5 py-2 hover:bg-white/20">
        Try again
      </button>
    </main>
  );
}
