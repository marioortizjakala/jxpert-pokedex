import styled from 'styled-components';

const Skip = styled.a`
  position: absolute;
  left: -9999px;
  width: 150px;
  background: ${({ theme }) => theme.colors.background9};
  color: ${({ theme }) => theme.colors.background0};
  padding: ${({ theme }) => theme.spacing.l};
  z-index: 100;
  opacity: 0;

  &:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

function SkipLink() {
  return <Skip href="#main-content">Skip to main content</Skip>;
}

export default SkipLink;
