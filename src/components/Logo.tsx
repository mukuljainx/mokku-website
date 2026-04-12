interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "h-8 w-8" }: LogoProps) => (
  <img
    src="/logos/mokku-128.png"
    alt="Mokku"
    className={`object-contain ${className}`}
  />
);
