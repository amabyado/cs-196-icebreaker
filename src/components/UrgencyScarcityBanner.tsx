import { useEffect, useState } from "react";
import Alert from "./Alert";
import Emphasis from "./Emphasis";

export default function UrgencyScarcityBanner() {
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