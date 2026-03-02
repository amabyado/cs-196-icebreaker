import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal";

type Modal3Props = {
    showEmailModal: boolean;
    setShowEmailModal: (value: boolean) => void;
    setEnteredEmail: (value: boolean) => void;
};

export default function Modal3({
    showEmailModal,
    setShowEmailModal,
    setEnteredEmail,
}: Modal3Props) {
    const [email, setEmail] = useState("");

    const validateEmail = (email: string) => {
        return email.endsWith("@up.edu.ph");
    };

    const handleUnlock = () => {
        if (validateEmail(email)) {
            toast(`Email accepted: ${email}`, { icon: "✅" });

            setEnteredEmail(true);
            setShowEmailModal(false);
        } else {
            toast.error("Please enter a valid UP mail (ending with @up.edu.ph).");
        }
    };

    return (
        <>
            <Toaster />

            <Modal
                visible={showEmailModal}
                title="Wait!"
                actions={[
                    {
                        label: "Unlock Full Access",
                        color: "green",
                        onClick: handleUnlock,
                    },
                    {
                        label: "I prefer incomplete and less high-quality materials.",
                        onClick: () => setShowEmailModal(false),
                    },
                ]}
            >
                <p
                    className="
                        mb-4
                        text-center body-l text-neutral-700
                    "
                >
                    Before you download, enter your email to unlock the{" "}
                    <strong>FULL VERSION</strong>.
                </p>

                <input
                    type="email"
                    placeholder="Enter your email now!"
                    className="
                        px-4 py-2
                        flex justify-start items-center 
                        w-full
                        border border-neutral-500 hover:border-neutral-700 outline-none focus:ring-2 focus:ring-neutral-200 rounded-lg
                        bg-neutral-50
                        body-r text-neutral-500
                        transition-standard
                    "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(
                        event: React.KeyboardEvent<HTMLInputElement>,
                    ) => {
                        if (event.key === "Enter") {
                            handleUnlock();
                        }
                    }}
                />
            </Modal>
        </>
    );
}
