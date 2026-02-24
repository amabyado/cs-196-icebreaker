import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div
            className="
                p-4
                flex flex-col justify-center items-center
                w-full 
                border border-neutral-300 rounded-lg 
                bg-neutral-50
                shadow-md
            "
        >
            {children}
        </div>
    );
}