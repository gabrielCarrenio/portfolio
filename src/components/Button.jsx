import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 15px 10px;
  margin: 0;
  max-width: 470px;
  background: rgb(83, 52, 131);
  background: linear-gradient(
    146deg,
    rgba(83, 52, 131, 0.43599438066242124) 0%,
    rgba(0, 0, 0, 0.371568610354298) 100%
  );
  border: 0;
  cursor: pointer;
  color: #fff;
`;

export const Button = ({ name }) => {
  const handleNavigate = () => {
    Navigate('https://google.com');
  };

  return <Btn onClick={handleNavigate}>{name}</Btn>;
};
