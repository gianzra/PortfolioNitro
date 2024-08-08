import * as React from "react";

type HomeImageBlobProps = {
  image: string;
};

export default function HomeImageBlob({ image }: HomeImageBlobProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: 10 }}
    >
      <mask id="mask0" mask-type="alpha">
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          rx="0" // Radius set to half of the width and height for full rounding
          ry=""
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          rx="0" // Radius set to half of the width and height for full rounding
          ry="0"
          fill="none"
        />
        <image
          x="0"
          y="0"
          href={image}
          width="200"
          height="200"
        />
      </g>
    </svg>
  );
}
