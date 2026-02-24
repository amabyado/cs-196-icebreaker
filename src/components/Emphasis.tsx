export default function Emphasis({ text }: {text: string }) {
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