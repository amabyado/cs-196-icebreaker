import Modal from "./Modal";
import Alert from "../components/Alert";
import Emphasis from "../components/Emphasis";

type Modal2Props = {
    showModal1: boolean;
    setShowModal1: (value: boolean) => void;
    handleRedirect1: () => void;
};

export default function Modal2({
    showModal1,
    setShowModal1,
    handleRedirect1,
}: Modal2Props) {
    return (
        <Modal
            visible={showModal1}
            title="🎊 YOU'VE BEEN PICKED"
            actions={[
                {
                    label: "🔥 CLAIM MY FREE iPHONE NOW",
                    color: "green",
                    onClick: () => {
                        setShowModal1(false);
                        handleRedirect1();
                    },
                },
                {
                    label: "No thanks, I love paying full price like a dumbass.",
                    onClick: () => setShowModal1(false),
                },
            ]}
        >
            <div className="relative mb-4">
                <img
                    src="iphone.jpg"
                    className="
                            w-full h-full 
                            rounded-lg 
                            shadow-lg
                        "
                    alt="Free iPhone 17 Pro Max"
                />

                <div
                    className="
                            absolute top-2 right-2 p-2
                            rounded-md
                            bg-primary-600 
                            text-center body-s text-neutral-50
                            animate-pulse
                        "
                >
                    ONLY 1 LEFT
                </div>
            </div>

            <Alert>
                You've been randomly selected to receive a{" "}
                <Emphasis text={"100% FREE"} /> iPhone 17 Pro Max!
            </Alert>

            <p
                className="
                        mt-2
                        text-center body-l text-neutral-700
                    "
            >
                Hurry!!!!! If you don't act NOW, you'll NEVER get this again.
            </p>
        </Modal>
    );
}
