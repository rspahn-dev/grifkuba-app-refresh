import type { SVGProps } from "react";

export function GrifkubaLogo(props: SVGProps<SVGSVGElement> & {className?: string}) {
  // Using the uploaded logo directly as an image to ensure it's an exact match.
  // Assuming the uploaded file is available as /grifkuba-logo.svg in the public directory.
  return (
    <img
      src="/grifkuba-logo.svg"
      alt="Grifkuba Logo"
      className={props.className}
      // The SVGProps are not all applicable to `<img>`, but className, width, and height are common.
      // We can cast props to any to avoid TypeScript errors with spreading.
      {...(props as any)}
    />
  );
}
