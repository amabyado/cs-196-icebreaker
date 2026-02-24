import type { ReactNode } from "react";

export type BaseButtonProps = {
    children: ReactNode;
    onClick: () => void;
};

export type PrimaryButtonProps = BaseButtonProps & {
    color: "primary" | "blue" | "green" | "neutral";
    width?: "w-full" | "w-fit";
    icon?: ReactNode;
};

export const colorMap: Record<
    NonNullable<PrimaryButtonProps["color"]>,
    { base: string; hover: string }
> = {
    primary: { base: "bg-primary-500", hover: "hover:bg-primary-600" },
    blue: { base: "bg-blue-500", hover: "hover:bg-blue-600" },
    green: { base: "bg-green-500", hover: "hover:bg-green-600" },
    neutral: { base: "bg-neutral-300", hover: "hover:bg-neutral-600" },
};