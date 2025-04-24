import 'styled-components';
import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      [key: string]: string;
    };
    typography: {
      [key in
        | 'display1'
        | 'headline'
        | 'subheadline'
        | 'body'
        | 'caption'
        | 'link']: {
        desktop: {
          fontFamily: string;
          fontStyle: string;
          fontWeight: number;
          fontSize: string;
          lineHeight: string;
        };
        mobile: {
          fontFamily: string;
          fontStyle: string;
          fontWeight: number;
          fontSize: string;
          lineHeight: string;
        };
      };
    };
    breakpoints: {
      mobile: string;
    };
    shadows: {
      [key in 's' | 'l' | 'm']: string;
    };
    radius: {
      [key: string]: string;
    };
    spacing: {
      [key: string]: string;
    };
  }
}
