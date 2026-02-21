import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import { PopUpOverlay } from "./components/PopUpOverlay";
import Star from "./icons/Star";
import RunningPerson from "./icons/RunningPerson";
import Shield from "./icons/Shield";
import Notebook from "./icons/Notebook";
import Blackboard from "./icons/Blackboard";
import School from "./icons/School";

export function Emphasis({ text }: {text: string }) {
    return <span 
        className="
            text-transparent
            bg-linear-to-r from-accent-300 to-accent-500 
            bg-clip-text
        "
    >
        {text}
    </span>;
}
export function Alert({
    children,
    pulse,
}: {
    children: React.ReactNode;
    pulse?: boolean;
}) {
    return (
        <div
            className={`
                p-2
                w-full
                rounded-lg
                bg-radial from-red-600 via-red-500 to-red-700 
                text-center alert-r text-neutral-50
                shadow-lg
                ${pulse === true && "animate-pulse"}
            `}
        >
            {children}
        </div>
    );
}

function UrgencyScarcityBanner() {
    const [time, setTime] = useState(119);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time) => (time > 0 ? time - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <Alert pulse={true}>
            🚨 WARNING: ONLY
            {" "}
            <span className="underline">2 DOWNLOADS</span>
            {" "}
            LEFT — LOCKING IN
            {" "}
            <Emphasis text={`0${minutes}:${seconds.toString().padStart(2, "0")}`} />
            {" "}
            ⏳
        </Alert>
    );
}

type BaseButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};

type PrimaryButtonProps = BaseButtonProps & {
    color: "red" | "blue" | "green" | "neutral";
    width?: "w-full" | "w-fit";
    icon?: React.ReactNode;
};

const colorMap: Record<
    NonNullable<PrimaryButtonProps["color"]>,
    { base: string; hover: string }
> = {
    red: { base: "bg-red-500", hover: "hover:bg-red-600" },
    blue: { base: "bg-blue-500", hover: "hover:bg-blue-600" },
    green: { base: "bg-green-500", hover: "hover:bg-green-600" },
    neutral: { base: "bg-neutral-300", hover: "hover:bg-neutral-600" },
};

export function PrimaryButton({
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

export function TertiaryButton({ children, onClick }: BaseButtonProps) {
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

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
                p-4
                flex flex-col justify-center items-center
                w-full 
                border border-neutral-300 rounded-lg 
                bg-neutral-50
                shadow-md
            "
        >
            {children}
        </div>
    );
}

export function CredentialCard({
    text,
    logo,
}: {
    text: string;
    logo?: React.ReactNode;
}) {
    return (
        <Card>
            {logo}

            <p
                className="
                    mt-2 
                    text-center body-l text-primary-800
                "
            >
                {text}
            </p>
        </Card>
    );
}

export function Credentials() {
    return (
        <div className="">
            <h3
                className="
                    mb-4
                    text-center heading-m text-primary-800
                "
            >
                Why Trust Us
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <CredentialCard
                    text="Trusted by 200+ Students"
                    logo={<Notebook className="text-primary-950 w-12 h-12" />}
                />

                <CredentialCard
                    text="Backed by 10+ Professors"
                    logo={<Blackboard className="text-primary-950 w-12 h-12" />}
                />

                <CredentialCard
                    text="An Official DCS Partner"
                    logo={<School className="text-primary-950 w-12 h-12" />}
                />
            </div>
        </div>
    );
}

export function TestimonialCard({
    text,
    person,
    image,
}: {
    text: string;
    person: string;
    image?: string;
}) {
    return (
        <Card>
            <div>
                {image && (
                    <img
                        src={image}
                        width="500"
                        className="
                            w-full h-full 
                            rounded-lg
                        "
                        alt="Testimonial"
                    />
                )}
            </div>

            <p
                className="
                    mt-2 
                    text-center body-l text-primary-800
                "
            >
                {person}
            </p>

            <p
                className="
                    mt-1
                    text-center body-r text-neutral-700
                "
            >
                {text}
            </p>
        </Card>
    );
}

export function Testimonials() {
    return (
        <div className="">
            <h3
                className="
                mb-4
                text-center heading-m text-primary-800
                "
            >
                Testimonials
            </h3>

            <div className="flex flex-col sm:flex-row items-start gap-4">
                <TestimonialCard
                    text="This website saved my grade! 10/10 🙌"
                    person="Gelo"
                    image="Gelo.jpg"
                />

                <TestimonialCard
                    text="I officially endorse this helpful website."
                    person="Sir Rom"
                    image="SirRom.png"
                />

                <TestimonialCard
                    text="Way better than Sir Rom's study guides."
                    person="Erika"
                    image="Erika.jpg"
                />
            </div>
        </div>
    );
}

type ModalAction = {
    label: string;
    color?: PrimaryButtonProps["color"];
    onClick: () => void;
};

export function Modal({
    visible,
    title,
    children,
    actions,
}: {
    visible: boolean;
    title: string;
    children: React.ReactNode;
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
                <h2 className="text-center heading-l text-red-500">{title}</h2>

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
                            color="red"
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
                            handleRedirect1
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
                            bg-red-600 
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
                        color: "red",
                        onClick: () => {
                            setShowModal2(false)
                            handleRedirect1
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
                        mt-4 mb-4
                        text-center heading-m text-neutral-950
                        animate-ping
                    "
                >
                    4 VIRUSES DETECTED
                </h3>
                    
                <ul className="
                        mb-4
                        space-y-1
                        text-center body-r text-neutral-700 
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
                        text-center body-r text-red-500 
                    "
                >
                    <li>Permanent file corruption</li>
                    <li>Password theft</li>
                    <li>Banking information leak</li>
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
                            setShowEmailModal(false)},
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
