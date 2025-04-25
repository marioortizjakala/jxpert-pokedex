import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  & h2 {
    margin: unset;
  }
`;

export const Number = styled.span`
  color: #d8f0d0;
`;

export const Card = styled.article<{ $mainType: string }>`
  border: 1px solid ${({ theme }) => theme.colors.background2};
  border-radius: ${({ theme }) => theme.radius.m};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme, $mainType }) => theme.colors[$mainType]};
  box-shadow: ${({ theme }) => theme.shadows.m};
`;

export const Figure = styled.figure`
  text-align: center;
  margin: 1rem 0;
  position: relative;
  margin-bottom: -80px;
  z-index: 1;
`;

export const StyledImage = styled.img`
  width: 200px;
`;

export const TypeList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const TypeBadge = styled.li<{ type: string }>`
  background-color: ${({ theme, type }) => theme.colors[type]};
  color: white;
  text-transform: capitalize;

  padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.radius.xl};
  align-items: center;
`;

export const Info = styled.address`
  display: flex;
  justify-content: space-around;
  font-style: normal;
  font-size: 0.9rem;
  margin: 1rem 0;
`;

export const StatsSection = styled.section`
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background0};
  border-radius: ${({ theme }) => theme.radius.m};
  padding: ${({ theme }) =>
    `${theme.spacing['4xl']} ${theme.spacing['m']} ${theme.spacing['xs']}`};
  position: relative;
`;

export const StatRow = styled.li`
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
`;

export const StatLabel = styled.span`
  width: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StatBar = styled.div<{ value: number }>`
  background: #eee;
  height: 6px;
  flex: 1;
  border-radius: 4px;
  margin-left: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${(props) => (props.value / 255) * 100}%;
    background: #000;
    border-radius: 4px;
  }
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;
