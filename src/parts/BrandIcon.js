import React from 'react'

import Button from 'elements/Button'

export default function BrandIcon() {
    return (
        <Button
            type="link"
            href="/"
        >
            <h1 className="font-handwriting text-white text-2xl sm:text-3xl leading-none">
                Today's<br/>
                Target 
            </h1>
        </Button>
    )
}
