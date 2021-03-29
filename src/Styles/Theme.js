import styled from "styled-components";

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
};

export const TitleArea = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #252e3f;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;
export const ContentArea = styled.div`
  width: 100%;
`;

const e = {
  common,
};

export default e;
