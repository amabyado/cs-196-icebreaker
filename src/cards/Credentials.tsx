import type { ReactNode } from "react";
import Blackboard from "../icons/Blackboard";
import Notebook from "../icons/Notebook";
import School from "../icons/School";
import Card from "./Card";

export function CredentialCard({
    text,
    logo,
}: {
    text: string;
    logo?: ReactNode;
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
                    text-center heading-m
                    text-transparent
                    bg-linear-to-b from-primary-600 to-primary-800 
                    bg-clip-text
                "
            >
                Why Trust Us
            </h3>

            <div className="flex flex-col sm:flex-row items-start gap-4">
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