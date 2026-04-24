import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
};

export default function CTAButton({ text, href = "#", onClick }: Props) {
  const baseStyles =
    "inline-block bg-brand.accent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition";

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {text}
    </button>
  );
}
