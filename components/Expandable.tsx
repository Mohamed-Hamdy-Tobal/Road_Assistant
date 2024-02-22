'use client';

import { useState } from 'react';

export default function Expandable({ title }: { title: any }) {
    const [expanded, setExpanded] = useState(false);

    function onToggle() {
        setExpanded(!expanded);
    }

    return (
        <div>
            <button onClick={onToggle}>{title}</button>
        </div>
    );
}
