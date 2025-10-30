import { SVGProps } from "react";

export function GrifkubaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      shapeRendering="crispEdges"
    >
        <path fill="currentColor" d="M2 2h6v1H3v5H2V2z"/>
        <path fill="currentColor" d="M8 2h1v6H8v1H4V8h3V5H4v1H3V3h5v-1z"/>
    </svg>
  );
}
