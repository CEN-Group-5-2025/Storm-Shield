const WarningIcon = () => {
  return (
    <svg
      width="135"
      height="129"
      viewBox="0 0 135 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="warning-icon"
      style={{
        width: '135px',
        height: '135px',
        filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
      }}
    >
      <g filter="url(#filter0_d_18_6)">
        <path
          d="M15.3281 112.875C14.2969 112.875 13.3594 112.63 12.5156 112.139C11.6719 111.648 11.0156 110.997 10.5469 110.187C10.0781 109.378 9.82125 108.503 9.77625 107.564C9.73125 106.626 9.98812 105.708 10.5469 104.812L62.5781 18.8125C63.1406 17.9167 63.8681 17.2448 64.7606 16.7969C65.6531 16.349 66.5662 16.125 67.5 16.125C68.4338 16.125 69.3488 16.349 70.245 16.7969C71.1413 17.2448 71.8669 17.9167 72.4219 18.8125L124.453 104.812C125.016 105.708 125.274 106.627 125.229 107.57C125.184 108.512 124.926 109.385 124.453 110.187C123.981 110.99 123.324 111.641 122.484 112.139C121.644 112.637 120.707 112.882 119.672 112.875H15.3281ZM67.5 96.75C69.0938 96.75 70.4306 96.234 71.5106 95.202C72.5906 94.17 73.1287 92.8943 73.125 91.375C73.1213 89.8557 72.5812 88.58 71.505 87.548C70.4287 86.516 69.0938 86 67.5 86C65.9062 86 64.5713 86.516 63.495 87.548C62.4188 88.58 61.8787 89.8557 61.875 91.375C61.8713 92.8943 62.4113 94.1718 63.495 95.2074C64.5788 96.243 65.9137 96.7572 67.5 96.75ZM67.5 80.625C69.0938 80.625 70.4306 80.109 71.5106 79.077C72.5906 78.045 73.1287 76.7693 73.125 75.25V59.125C73.125 57.6021 72.585 56.3264 71.505 55.298C70.425 54.2696 69.09 53.7536 67.5 53.75C65.91 53.7464 64.575 54.2624 63.495 55.298C62.415 56.3336 61.875 57.6092 61.875 59.125V75.25C61.875 76.7729 62.415 78.0504 63.495 79.0824C64.575 80.1144 65.91 80.6286 67.5 80.625Z"
          fill="#5EB1BB"
          fillOpacity="0.89"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_18_6"
          x="-4"
          y="0"
          width="143"
          height="137"
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
            result="effect1_dropShadow_18_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default WarningIcon
