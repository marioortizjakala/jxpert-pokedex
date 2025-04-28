import { css } from 'styled-components';
import { Theme } from './styled';

type Variant = keyof Theme['typography'];

export const getTypographyCss =
  (variant: Variant) =>
  ({ theme }) => {
    const styles = theme.typography[variant];

    return css`
      font-family: ${styles.desktop.fontFamily};
      font-style: ${styles.desktop.fontStyle};
      font-weight: ${styles.desktop.fontWeight};
      font-size: ${styles.desktop.fontSize};
      line-height: ${styles.desktop.lineHeight};

      @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: ${styles.mobile.fontSize};
        line-height: ${styles.mobile.lineHeight};
      }
    `;
  };
