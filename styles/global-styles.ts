import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: "Noto Sans CJK KR", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  /* 웹앱으로 안에 들어갈시 필수로 넣어야함 */
  select,input {
    border-style:none;
    background-color:transparent;
    border-radius: 0;
    appearance:none;
    -moz-appearance:none;
   -webkit-appearance:none;
  }
  /*********************************/
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;
// Background center
export const BgCover = css`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
//popup
export const Popup = css`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
// flex
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FlexRowCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OneLine = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TwoLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Threeline = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export const px2rem = px => {
  const rem = 72;
  return px / rem + 'rem';
};
export default GlobalStyle;
