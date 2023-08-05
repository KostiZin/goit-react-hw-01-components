import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 60px;
`;

export const ListItem = styled.li`
  background-color: #f2f7f6;
  border: 1px solid #d2d9d4;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 220px;
  box-shadow: 2px 10px 20px #d2d9d4;
`;

export const SpanStatus = styled.span`
  border: 10px solid
    ${props => (props.$status === 'true' ? '#13b310' : '#bbbdbf')};
  border-radius: 50px;
`;
