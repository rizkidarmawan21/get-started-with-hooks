import { css } from 'emotion';

export const inputWrapper = css`
  margin: 16px 0 0 0;
  width: 100%;
`;

export const inputStyle = css`
  height: 30px;
  width: calc(80% - 8px);
  margin-right: 8px;
  font-style: italic;
  box-sizing: border-box;
`;

export const buttonStyle = css`
  width: 20%;
  color: #fff;
  font-weight: 400;
  border-radius: 5px;
  padding: 8px;
  background-color: #2ecc71;
  border-color: #2ecc71;
  border-style: none;
  box-sizing: border-box;

  &:hover {
    background-color: #27ae60;
  }
`;