import styled from 'styled-components';

const StyledSvg = styled.svg`
  path {
    stroke: ${({ theme }) => theme.colors.background6};
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

function VerticalChevron() {
  return (
    <StyledSvg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33337 5.99999L8.00004 3.33333L10.6667 5.99999"
        stroke="var(--color-neutral-600)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 10L8.00004 12.6667L5.33337 10"
        stroke="var(--color-neutral-600)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
}

export default VerticalChevron;
