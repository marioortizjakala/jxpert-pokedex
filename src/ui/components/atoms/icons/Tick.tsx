import styled from 'styled-components';

const StyledSvg = styled.svg`
  margin-top: auto;
  margin-left: ${({ theme }) => theme.spacing['3xl']};
  path {
    stroke: ${({ theme }) => theme.colors.accent};
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

function Tick() {
  return (
    <StyledSvg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2174_34)">
        <path
          d="M3.33334 8L6.66667 11.3333L13.3333 4.66666"
          // stroke="#7D3BEC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2174_34">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
}

export default Tick;
