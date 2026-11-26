'use client';

import { captureException } from '@doxa-innovations/watch/next/client';
import { useEffect } from 'react';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => captureException(error), [error]);
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#19003a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ textAlign: 'center', padding: 24 }}>
          <p>Something went wrong.</p>
          <button type="button" onClick={() => window.location.reload()}>Reload</button>
        </main>
      </body>
    </html>
  );
}
