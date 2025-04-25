const CardSkelleton = () => (
  <article>
    <svg
      width="301"
      height="416"
      viewBox="0 0 301 416"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_2174_493)">
        <path
          d="M8 27C8 13.7452 18.7452 3 32 3H269C282.255 3 293 13.7452 293 27V379C293 392.255 282.255 403 269 403H32C18.7452 403 8 392.255 8 379V27Z"
          fill="white"
          shape-rendering="crispEdges"
        />
        <path
          d="M16 31C16 19.9543 24.9543 11 36 11H265C276.046 11 285 19.9543 285 31V375C285 386.046 276.046 395 265 395H36C24.9543 395 16 386.046 16 375V31Z"
          fill="#EAEAEB"
        />
        <g clip-path="url(#clip0_2174_493)">
          <path
            d="M90.5 203C90.5 210.879 92.0519 218.681 95.0672 225.961C98.0825 233.241 102.502 239.855 108.074 245.426C113.645 250.998 120.259 255.417 127.539 258.433C134.819 261.448 142.621 263 150.5 263C158.379 263 166.181 261.448 173.461 258.433C180.741 255.417 187.355 250.998 192.926 245.426C198.498 239.855 202.917 233.241 205.933 225.961C208.948 218.681 210.5 210.879 210.5 203C210.5 195.121 208.948 187.319 205.933 180.039C202.917 172.759 198.498 166.145 192.926 160.574C187.355 155.002 180.741 150.583 173.461 147.567C166.181 144.552 158.379 143 150.5 143C142.621 143 134.819 144.552 127.539 147.567C120.259 150.583 113.645 155.002 108.074 160.574C102.502 166.145 98.0825 172.759 95.0672 180.039C92.0519 187.319 90.5 195.121 90.5 203Z"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M130.5 203C130.5 208.304 132.607 213.391 136.358 217.142C140.109 220.893 145.196 223 150.5 223C155.804 223 160.891 220.893 164.642 217.142C168.393 213.391 170.5 208.304 170.5 203C170.5 197.696 168.393 192.609 164.642 188.858C160.891 185.107 155.804 183 150.5 183C145.196 183 140.109 185.107 136.358 188.858C132.607 192.609 130.5 197.696 130.5 203Z"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M90.5 203H130.5"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M170.5 203H210.5"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_2174_493"
          x="0"
          y="0"
          width="301"
          height="416"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_2174_493"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.490196 0 0 0 0 0.231373 0 0 0 0 0.92549 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2174_493"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_2174_493"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.490196 0 0 0 0 0.231373 0 0 0 0 0.92549 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2174_493"
            result="effect2_dropShadow_2174_493"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2174_493"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2174_493">
          <rect
            width="160"
            height="160"
            fill="white"
            transform="translate(70.5 123)"
          />
        </clipPath>
      </defs>
    </svg>
  </article>
);

export default CardSkelleton;
