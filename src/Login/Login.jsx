import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logoImage from "../assets/login.png"

const animateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  background: linear-gradient(
    -135deg,
    #273437, #220f4b, #661fff, #00C9FF, #ceff1a ,#edffa9
  );
  background-size: 400% 400%;
  animation: ${animateGradient} 24s linear infinite;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: 0;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 70%;

  @media (max-width: 768px) {
    width: 80%;
    padding: 8px
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 4px
  };`

const LoginForm = styled.form`
width: 100 %;
`;

const Input = styled.input`
width: 100 %;
padding: 10px;
margin: 5px 0;
border: 1px solid #ccc;
border-radius: 5px;
`;

const Button = styled.button`
width: 100 %;
padding: 10px;
margin: 10px 0;
border: none;
border-radius: 5px;
background: #007bff;
color: #fff;
cursor: pointer;
`;

const Image = styled.img`
width: 100%;
height: 0%;
object-fit: cover;
object-position: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #000;
`;

const Text = styled.h4`
font-size: 1rem;
color: #000;
margin-bottom: 0px;
`

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <LeftColumn>
        <Image src={logoImage} alt="Login" />
      </LeftColumn>
      <RightColumn>
        <Title>Login</Title>
        <LoginForm onSubmit={handleLogin}>
          <div>
            <Text>Login ID</Text>
            <Input
              type="text"
              placeholder="Enter Login ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Text>Password</Text>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </LoginForm>
      </RightColumn>
    </Container>
  );
};

export default Login;