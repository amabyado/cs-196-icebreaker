import type { ReactNode } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TertiaryButton from "../components/TertiaryButton";
import type { PrimaryButtonProps } from "../types";
import PopUpOverlay from "./PopUpOverlay";

type ModalAction = {
    label: string;
    color?: PrimaryButtonProps["color"];
    onClick: () => void;
};

export default function Modal({
    visible,
    title,
    children,
    actions,
}: {
    visible: boolean;
    title: string;
    children: ReactNode;
    actions: ModalAction[];
}) {
    if (!visible) return null;

    return (
        <>
            <PopUpOverlay />

            <div
                className="
                    fixed top-1/2 left-1/2 z-60 transform -translate-x-1/2 -translate-y-1/2 
                    p-10
                    flex flex-col justify-center items-center gap-6
                    w-[90vw] max-w-lg
                    rounded-4xl
                    bg-neutral-50 
                    shadow-xl
                "
            >
                <h2 className="text-center heading-l text-primary-500">{title}</h2>

                <div>{children}</div>

                <div className="flex flex-col justify-center items-center gap-2">
                    {actions.map((action, index) =>
                        action.color !== undefined ? (
                            <PrimaryButton
                                key={index}
                                color={action.color}
                                onClick={action.onClick}
                            >
                                {action.label}
                            </PrimaryButton>
                        ) : (
                            <TertiaryButton
                                key={index}
                                onClick={action.onClick}
                            >
                                {action.label}
                            </TertiaryButton>
                        ),
                    )}
                </div>
            </div>
        </>
    );
}