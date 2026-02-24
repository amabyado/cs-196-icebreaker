import type { BaseButtonProps } from "../types";

export default function TertiaryButton({ children, onClick }: BaseButtonProps) {
    return (
        <button
            className="
                body-r underline text-neutral-500 hover:text-neutral-700 
                transition-standard
            "
            onClick={onClick}
        >
            {children}
        </button>
    );
}