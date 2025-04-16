const RedDotIndicator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      className="red-dot-indicator"
    >
      <g filter="url(#filter0_d_21_47)">
        <circle cx="28.5" cy="24.5" r="24.5" fill="url(#paint0_radial_21_47)" />
      </g>
      <defs>
        <filter
          id="filter0_d_21_47"
          x="0"
          y="0"
          width="57"
          height="57"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_21_47"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_47"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_21_47"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.5 24.5) rotate(90) scale(24.5)"
        >
          <stop offset="0.635" stopColor="#C9283E" />
          <stop offset="1" stopColor="#63141F" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default RedDotIndicator
