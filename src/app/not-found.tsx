import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <main className="grid min-h-screen place-items-center px-5 text-center"><div><p className="text-sm font-black uppercase tracking-[.2em] text-brand">404 — Not found</p><h1 className="mt-4 text-4xl font-black text-title">This page doesn&apos;t exist.</h1><p className="mt-3 text-body">The project may have moved, or the URL may be incorrect.</p>
      <Link href="/" className="btn btn-primary mt-7">Back to portfolio</Link>
     </div>
     </main>
    );
};

export default notFoundPage;
