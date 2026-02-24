import { colorMap, type PrimaryButtonProps } from "../types";

export default function PrimaryButton({
    children,
    onClick,
    color,
    width,
    icon,
}: PrimaryButtonProps) {
    const backgroundClasses = colorMap[color];

    return (
        <button
            className={`
                px-4 py-2
                flex justify-center items-center gap-2
                ${width ?? "w-fit"}
                rounded-lg
                ${backgroundClasses.base} ${backgroundClasses.hover}
                heading-s text-neutral-50
                shadow-md
                hover:-translate-y-0.5
                transition-standard cursor-pointer neutral-50space-nowrap
            `}
            onClick={onClick}
        >
            {icon && <span>{icon}</span>}

            {children}
        </button>
    );
}