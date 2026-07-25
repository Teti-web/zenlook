'use client';

import Heading from '@/components/atoms/Heading/Heading';
import Button from '@/components/atoms/Button/Button';
import Label from '@/components/atoms/Label/Label';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[Unhandled render error]', error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <Label text="Oops! Something went wrong" />
        <Heading text="We hit a snag loading this page" variant="h1" />
      </div>
      <Button variant="primary" size="medium" onClick={reset} label="Try again">
        Try again
      </Button>
    </div>
  );
}
