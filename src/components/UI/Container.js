import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    max-width: 640px;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 720px;
    padding: 0;
  }
  @media ${({ theme }) => theme.mediaQuery.laptop} {
    max-width: 960px;
  }
  @media ${({ theme }) => theme.mediaQuery.desktopL} {
    max-width: 1140px;
  }
  @media ${({ theme }) => theme.mediaQuery.desktopL} {
    max-width: 1240px;
  }
`;

export default Wrapper;
