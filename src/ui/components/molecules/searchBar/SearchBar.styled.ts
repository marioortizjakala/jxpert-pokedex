import { getTypographyCss } from '@/ui/styles/getTypography';
import styled from 'styled-components';

export const SearchSection = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.l}`};
  background: ${({ theme }) => theme.colors.background1};
  border: ${({ theme }) =>
    `${theme.spacing['3xs']} solid ${theme.colors.background2}`};
  border-radius: ${({ theme }) => theme.radius.s};
  height: fit-content;
  margin: ${({ theme }) => theme.spacing['4xl']};
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.background9};
  }
`;

export const SearchInput = styled.input`
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

export const DropDownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background3};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: ${({ theme }) =>
    `${theme.spacing['3xs']} solid ${theme.colors.background5}`};
  text-align: center;
  display: flex;
  padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing.xs}`};
  gap: ${({ theme }) => theme.spacing.m};
  margin: auto;
  position: relative;
  ${getTypographyCss('caption')}
`;

export const DropDownList = styled.ol<{ $show: boolean }>`
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
    border-bottom: ${({ theme }) =>
      `${theme.spacing['3xs']} solid ${theme.colors.background2}`};
    &:last-child {
      border-bottom: none;
      padding-bottom: unset;
    }
    &.active {
      color: ${({ theme }) => theme.colors.background9};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 0;
    top: auto;
    position: fixed;
    background: ${({ theme }) => theme.colors.background1};
    border-radius: ${({ theme }) => `${theme.radius.m}`};
    padding: ${({ theme }) => `${theme.spacing.l}`};

    pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};

    transform: translateY(${({ $show }) => ($show ? '0%' : '100%')});
    transition: transform 0.3s ease-out;
  }
`;
