/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      type="link"
      href="/"
    >
      <h1 className="py-1 font-handwriting text-2xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 sm:text-3xl leading-none">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Today's
        <br />
        Target
      </h1>
    </Button>
  );
}
