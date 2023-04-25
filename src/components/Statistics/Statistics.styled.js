import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 20px;
  width: 300px;
  border: solid;
  background-color: var(--bg);
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: var(--main-shadow);
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 5);
`;

export const Label = styled.span`
  font-weight: 500;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;

export const Percentage = styled.span`
  font-weight: 700;
  color: var(--accent);
  text-shadow: var(--main-shadow);
`;
