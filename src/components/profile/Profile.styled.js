import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbe1f5;
  border-radius: 4px;
  background-color: #a5cdf2;
  margin-top: 60px;
  width: 300px;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 50%;
  margin-top: 40px;
  border-radius: 50%;
  background-color: #e8f1fa;
`;

export const PName = styled.p`
  font-size: 24px;
  color: #0f2942;
  font-weight: bold;
  padding-top: 16px;
`;

export const PTag = styled.p`
  padding-top: 16px;
  font-size: 16px;
`;

export const PLocation = styled.p`
  font-style: italic;
  font-size: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  border: 1px solid #8ac0f2;
  border-style: solid none none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  border: 1px solid #cbe1f5;
  background-color: #d3e4f5;
  width: 100px;
`;

export const ListSpan = styled.span`
  font-size: 14px;
  border: 2px solid #70aae0;
  border-style: none none dotted none;
`;
