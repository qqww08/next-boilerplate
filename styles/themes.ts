import baseStyled, { css, ThemedStyledInterface } from 'styled-components';
// Iterate through the sizes and create a media template
const sizes = {
    desktop: 1167,
    tablet: 778,
    phone: 576,
  },
  media = {
    desktop: (...args) => undefined,
    tablet: (...args) => undefined,
    phone: (...args) => undefined,
  };

Object.keys(sizes).reduce((acc, label: string) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

const color = {
  blue: '#2054ae',
  pink: '#c43683',
  black: '#24272a',
};

const themes = {
  color,
  media,
};

export type Theme = typeof themes;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default themes;
