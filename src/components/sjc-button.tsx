interface SjcButtonProps {
    text: string;
    type: 'primary' | 'secondary' | 'danger' | 'outline';
    onClick?: () => void;
}

export default function SjcButton({ text, type, onClick }: SjcButtonProps) {
    const buttonStyles: Record<string, string> = {
        primary: 'bg-[#185CFF] rounded-md text-white hover:bg-[#154ED6] px-4 sm:px-6 text-base sm:text-lg py-1 font-bold border-2 border-[#185CFF]',
        secondary: 'bg-[#185CFF] rounded-md text-white hover:bg-[#154ED6] px-4 sm:px-6 text-base sm:text-lg py-1 font-bold border-2 border-[#185CFF]',
        danger: 'bg-red-300 rounded-md text-white hover:bg-red-700 px-4 sm:px-6 text-base sm:text-lg py-1 font-bold border-2 border-red-600',
        outline: 'bg-white rounded-md text-[#185CFF] hover:bg-[#185CFF] hover:text-white border-2 border-[#185CFF] text-base sm:text-lg px-4 sm:px-5 py-1 font-bold'
    };

    return <button className={buttonStyles[type]} onClick={onClick}>{text}</button>;
}
