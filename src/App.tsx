import { useEffect, useState } from "react";
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
import Modal3 from "./modals/Modal3";
import Modal2 from "./modals/Modal2";
import Modal1 from "./modals/Modal1";

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

            <Modal1
                showModal1={showModal1}
                setShowModal1={setShowModal1}
                handleRedirect1={handleRedirect1}
            />

            <Modal2
                showModal2={showModal2}
                setShowModal2={setShowModal2}
                handleRedirect1={handleRedirect1}
            />

            <Modal3 
                showEmailModal={showEmailModal} 
                setShowEmailModal={setShowEmailModal} 
                setEnteredEmail={setEnteredEmail} 
            />
        </div>
    );
}
