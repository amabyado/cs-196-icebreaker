import Modal from "./Modal";
import Alert from "../components/Alert";

type Modal2Props = {
    showModal2: boolean;
    setShowModal2: (value: boolean) => void;
    handleRedirect1: () => void;
};

export default function Modal2({
    showModal2,
    setShowModal2,
    handleRedirect1,
}: Modal2Props) {
    return (
        <Modal
            visible={showModal2}
            title="⚠ CRITICAL SECURITY ALERT ⚠"
            actions={[
                {
                    label: "🛡 FIX NOW",
                    color: "primary",
                    onClick: () => {
                        setShowModal2(false);
                        handleRedirect1();
                    },
                },
                {
                    label: "Ignore & Risk It: Hackers Are Already Watching YOU!",
                    onClick: () => setShowModal2(false),
                },
            ]}
        >
            <Alert pulse={true}>
                SYSTEM COMPROMISED
            </Alert>

            <h3
                className="
                        mt-4 mb-2
                        text-center heading-m text-neutral-950
                        animate-bounce
                    "
            >
                4 VIRUSES DETECTED
            </h3>

            <ul
                className="
                        mb-4
                        space-y-1
                        text-center body-r text-primary-700 
                    "
            >
                <li>Trojan: DataStealer.exe</li>
                <li>Spyware: KeyLogger-X</li>
                <li>Ransomware: CryptoLock Variant</li>
                <li>Adware Injection Script</li>
            </ul>

            <p
                className="
                        mb-2 
                        text-center body-l text-neutral-900
                    "
            >
                Immediate Action Required to Prevent:
            </p>

            <ul
                className="
                        mb-6
                        space-y-1
                        text-center body-r text-primary-700 
                    "
            >
                <li>Banking information leak</li>
                <li>Password theft</li>
                <li>Permanent file corruption</li>
            </ul>

            <Alert pulse={true}>
                Upgrade to premium to remove threat
            </Alert>
        </Modal>
    );
}
