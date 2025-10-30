import { SVGProps } from "react";

export function GrifkubaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="bricks" patternUnits="userSpaceOnUse" width="40" height="20">
            <rect width="40" height="20" fill="#7d342b"></rect>
            <path d="M 40 0 L 40 20 M 20 10 L 40 10 M 0 10 L 20 10 M 20 0 L 20 10" stroke="#57241e" strokeWidth="1"></path>
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#bricks)" />
      <rect width="200" height="200" fill="black" opacity="0.4" />
      
      <text
        x="50%"
        y="55%"
        fontFamily="Arial, sans-serif"
        fontSize="34"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        filter="url(#glow)"
        style={{
          transform: 'skewX(-10deg)',
          letterSpacing: '-1px',
          paintOrder: 'stroke',
          stroke: '#ccc',
          strokeWidth: '0.5px'
        }}
      >
        grifkuba
      </text>
    </svg>
  );
}
