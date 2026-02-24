import type { ReactNode } from "react";

export default function Alert({
    children,
    pulse,
}: {
    children: ReactNode;
    pulse?: boolean;
}) {
    return (
        <div
            className={`
                p-2
                w-full
                rounded-lg
                bg-radial from-primary-600 via-primary-500 to-primary-700 
                text-center alert-r text-neutral-50
                shadow-lg
                ${pulse === true && "animate-pulse"}
            `}
        >
            {children}
        </div>
    );
}