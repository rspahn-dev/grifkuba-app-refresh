import { SVGProps } from "react";

export function GrifkubaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M85.41 12.3H14.59C13.52 12.3 12.63 13.18 12.63 14.24V57.6C12.63 64.9 16.52 73.17 23.36 78.3L46.86 96.51C48.59 97.83 51.41 97.83 53.14 96.51L76.64 78.3C83.48 73.17 87.37 64.9 87.37 57.6V14.24C87.37 13.18 86.48 12.3 85.41 12.3Z"
        className="text-primary"
        fill="currentColor"
      />
      <path
        d="M68.79 56.43C68.79 63.63 63.35 69.41 56.62 69.41H43.38C36.65 69.41 31.21 63.63 31.21 56.43V43.57C31.21 36.37 36.65 30.59 43.38 30.59H51.58V40.7H43.38C42.13 40.7 41.12 41.8 41.12 43.23V56.77C41.12 58.2 42.13 59.3 43.38 59.3H56.62C57.87 59.3 58.88 58.2 58.88 56.77V48.64H68.79V56.43Z"
        fill="hsl(var(--background))"
      />
    </svg>
  );
}
