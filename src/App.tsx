import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import Star from "./icons/Star";
import RunningPerson from "./icons/RunningPerson";
import Shield from "./icons/Shield";
import UrgencyScarcityBanner from "./components/UrgencyScarcityBanner";
import PrimaryButton from "./components/PrimaryButton";
import { Credentials } from "./cards/Credentials";
import { Testimonials } from "./cards/Testimonials";
import TertiaryButton from "./components/TertiaryButton";
import Modal from "./modals/Modal";
import Alert from "./components/Alert";
import Emphasis from "./components/Emphasis";

export default function App() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState(false);

    useEffect(() => {
        if (enteredEmail) return;

        const seconds = Math.random() * (10000 - 5000) + 5000;
    
        const interval = setInterval(() => {
            if (!showModal1 && !showModal2 && !showEmailModal) {
                setShowEmailModal(true);
            }
        }, seconds);

        return () => clearInterval(interval);
    }, [enteredEmail, showModal1, showModal2, showEmailModal]);

    const handleRedirect1 = () => {

        if (Math.random() < 0.1) {
            window.location.href = "https://dcs.upd.edu.ph/";
        }
    };

    const handleRedirect2 = () => {
        window.location.href = "https://dcs.upd.edu.ph/people/rpferia";
    }

    return (
        <div 
            className="
                relative p-8 w-full min-h-screen
            "
            onClick={handleRedirect1} 
            onTouchStart={handleRedirect1}
        >
            <Toaster/>

            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #ffdfe0 1px, transparent 1px),
                    linear-gradient(to bottom, #ffdfe0 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
                    repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                `,
                WebkitMaskImage: `
                    repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                }}
            />

            <div
                className="
                flex flex-col 
                gap-8 px-6 md:px-30 lg:px-60
            "
            >
                {/* Heading */}
                <h1
                    className="
                        relative z-10
                        text-center display-s text-primary-950 
                    "
                >
                    Download the BEST
                    {" "}
                    <span
                        className="
                            text-transparent
                            bg-linear-to-r from-accent-500 to-accent-700 
                            bg-clip-text 
                        "
                    >
                        CS 196
                    </span>
                    {" "}
                    Deceptive Patterns Presentation
                    {" "}
                    <span
                        className="
                            text-transparent
                            bg-linear-to-r from-accent-500 to-accent-700 
                            bg-clip-text 
                        "
                    >
                        FOR FREE
                    </span>
                    !
                </h1>

                {/* Urgency Scarcity Banner and Primary Buttons */}
                <div
                    className="
                        relative z-10 
                        flex flex-col gap-4
                        max-w-lg mx-auto
                    "
                >
                    <UrgencyScarcityBanner />

                    <div>
                        <PrimaryButton
                            color="primary"
                            icon={<Star />}
                            width="w-full"
                            onClick={() => setShowModal1(true)}
                        >
                            Download Now (Recommended)
                        </PrimaryButton>

                        <div
                            className="
                                mt-2
                                flex flex-col sm:flex-row items-center gap-2
                                w-full
                            "
                        >
                            <PrimaryButton
                                color="green"
                                icon={<RunningPerson />}
                                width="w-full"
                                onClick={handleRedirect2}
                            >
                                Fast Download
                            </PrimaryButton>

                            <PrimaryButton
                                color="blue"
                                icon={<Shield />}
                                width="w-full"
                                onClick={() => setShowModal2(true)}
                            >
                                Secure Download
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                {/* Credentials */}
                <div className="relative z-10">
                    <Credentials />
                </div>

                {/* Testimonials */}
                <div className="relative z-10">
                    <Testimonials />
                </div>

                {/* Tertiary Buttons */}
                <div
                    className="
                        relative z-10
                        flex flex-col justify-center items-center gap-4
                    "
                >
                    <label
                        className="
                            flex items-center gap-2 
                            text-justify body-s text-neutral-500
                        "
                    >
                        <input
                            type="checkbox"
                            defaultChecked
                            className="accent-neutral-500"
                        />
                        I consent to have my data given to third-party
                        advertisers.
                    </label>

                    <a
                        href="/CS 196 Presentation.pdf"
                        download
                    >
                        <TertiaryButton onClick={() => toast.success("Let's begin the report!")}>
                            Download
                        </TertiaryButton>
                    </a>
                </div>
            </div>

            {/* Modals */}
            <Modal
                visible={showModal1}
                title="🎊 YOU'VE BEEN PICKED"
                actions={[
                    {
                        label: "🔥 CLAIM MY FREE iPHONE NOW",
                        color: "green",
                        onClick: () => {
                            setShowModal1(false)
                            handleRedirect1()
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
                    You've been randomly selected to receive a
                    {" "}
                    <Emphasis text={"100% FREE"} />
                    {" "}
                    iPhone 17 Pro Max!
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

            <Modal
                visible={showModal2}
                title="⚠ CRITICAL SECURITY ALERT ⚠"
                actions={[
                    {
                        label: "🛡 FIX NOW",
                        color: "primary",
                        onClick: () => {
                            setShowModal2(false)
                            handleRedirect1()
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
                    
                <ul className="
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

                <ul className="
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

            <Modal
                visible={showEmailModal}
                title="Wait!"
                actions={[
                    {
                        label: "Unlock Full Access",
                        color: "green",
                        onClick: () => {
                            {setShowEmailModal(false)}},
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
                    Before you download, enter your email to unlock the <strong>FULL VERSION</strong>.
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
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        if (event.key === "Enter") {
                            const input = event.target as HTMLInputElement; 

                            toast(`Email entered: ${input.value}`, {
                                icon: '📧',
                            });

                            setEnteredEmail(true);
                        }
                    }}
                />
            </Modal>
        </div>
    );
}
