"use client";

import { useLayoutEffect } from "react";

export function ScrollManager() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}
