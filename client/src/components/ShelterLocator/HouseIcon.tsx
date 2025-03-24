
const HouseIcon = () => {
  return (
    <svg
      width="150"
      height="155"
      viewBox="0 0 150 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="house-icon"
      style={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <g filter="url(#filter0_d_18_4)">
        <path
          d="M120.345 61.5458C119.328 60.5999 118.75 59.2734 118.75 57.8844V30.8333C118.75 28.0719 116.511 25.8333 113.75 25.8333H105C102.239 25.8333 100 28.0719 100 30.8333V31.1469C100 35.5146 94.7932 37.7827 91.5949 34.8083L78.4051 22.5417C76.4859 20.7569 73.5141 20.7569 71.5949 22.5417L21.8133 68.8386C18.487 71.9321 20.6759 77.5 25.2184 77.5H26.25C29.0114 77.5 31.25 79.7386 31.25 82.5V124.167C31.25 126.928 33.4886 129.167 36.25 129.167H57.5C60.2614 129.167 62.5 126.928 62.5 124.167V95.4167C62.5 92.6552 64.7386 90.4167 67.5 90.4167H82.5C85.2614 90.4167 87.5 92.6552 87.5 95.4167V124.167C87.5 126.928 89.7386 129.167 92.5 129.167H113.75C116.511 129.167 118.75 126.928 118.75 124.167V82.5C118.75 79.7386 120.989 77.5 123.75 77.5H124.782C129.324 77.5 131.513 71.9321 128.187 68.8386L120.345 61.5458ZM67.5 64.5833C64.7386 64.5833 62.4106 62.2661 63.4326 59.7008C65.3058 54.9988 69.7946 51.6667 75 51.6667C80.2054 51.6667 84.6942 54.9988 86.5674 59.7008C87.5894 62.2661 85.2614 64.5833 82.5 64.5833H67.5Z"
          fill="#5EB1BB"
          fillOpacity="0.89"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_18_4"
          x="-4"
          y="0"
          width="158"
          height="163"
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
            mode="plus-darker"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HouseIcon; 