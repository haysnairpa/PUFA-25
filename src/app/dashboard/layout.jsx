// /app/dashboard/layout.jsx

"use client";

import { Karla } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";

const karla = Karla({
    subsets: ['latin'],
    display: "swap",
});

export default function DashboardLayout({ children }) {
    return (
        <html lang="en" className="select-none">
            <body className={karla.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}