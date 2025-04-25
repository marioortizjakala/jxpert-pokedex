import { getTypographyCss } from '@/styles/getTypography';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  ${getTypographyCss('subheadline')}
  & h2 {
    margin: unset;
    text-transform: capitalize;
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.background0};
  opacity: 70%;
`;

export const Card = styled.article<{ $mainType: string }>`
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
  width: 250px;
`;

export const TypeBadge = styled.li<{ type: string }>`
  background-color: ${({ theme, type }) => theme.colors[type]};
  color: white;
  text-transform: capitalize;

  padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.radius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: grid;
  align-items: center;
  margin: 0.3rem 0;
  grid-template-columns: 40px 40px 1fr;
  & span {
    ${getTypographyCss('body')}
  }
`;

export const StatLabel = styled.span`
  ${getTypographyCss('body')}
  color:${({ theme }) => theme.colors.background2};
  text-transform: uppercase;
`;

export const StatBar = styled.progress`
  width: 100%;
  height: 8px;
  appearance: none;
  border-radius: ${({ theme }) => theme.radius.m};
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.background2};
    border-radius: ${({ theme }) => theme.radius.m};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.background9 || 'black'};
    border-radius: ${({ theme }) => theme.radius.m};
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.background9 || 'black'};
    border-radius: ${({ theme }) => theme.radius.m};
  }
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;
