import Card from "./Card";

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
                    text-center heading-m
                    text-transparent
                    bg-linear-to-b from-primary-600 to-primary-800 
                    bg-clip-text
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