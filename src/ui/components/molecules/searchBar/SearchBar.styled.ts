import { getTypographyCss } from '@/styles/getTypography';
import styled from 'styled-components';

export const SearchSectionStyled = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.l}`};
  background: ${({ theme }) => theme.colors.background1};
  border: 1px solid #c1bfc2;
  border-radius: ${({ theme }) => theme.radius.s};
  height: fit-content;
  margin: ${({ theme }) => theme.spacing['4xl']};
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.background9};
  }
`;

export const SearchInputStyled = styled.input`
  background-color: unset;
  border: none;
  margin-left: ${({ theme }) => theme.spacing.m};
  flex-grow: 1;
  ${getTypographyCss('caption')}
  &:focus-visible {
    outline: none;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const DropDownButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.background3};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme }) => theme.colors.background5};
  text-align: center;
  display: flex;
  padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing.xs}`};
  gap: ${({ theme }) => theme.spacing.m};
  margin: auto;
  position: relative;
  ${getTypographyCss('caption')}
`;

export const DropDownListStyled = styled.ol<{ $show: boolean }>`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows.s};

  display: ${(props) => (props.$show ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing.m};

  background: ${({ theme }) => theme.colors.background1};
  border: 1px solid ${({ theme }) => theme.colors.background3};

  border-radius: ${({ theme }) => theme.spacing.m};
  list-style: none;
  padding: ${({ theme }) => theme.spacing.s};
  z-index: 4;
  & li {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.background6};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    padding-right: ${({ theme }) => theme.spacing.l};
    border-bottom: 1px solid ${({ theme }) => theme.colors.background3};
    &:last-child {
      border-bottom: none;
      padding-bottom: unset;
    }
    &.active {
      color: ${({ theme }) => theme.colors.background9};
    }
  }
`;
