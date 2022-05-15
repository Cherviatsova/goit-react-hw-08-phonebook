import { Flexbox, Text, Button } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Text>
        PHONEBOOK
         <br />Manage your contacts!
      </Text>
      <Flexbox>
        <li>
          <Button to={'/register'}>Register</Button>
        </li>
        <li>
          <Button to={'/login'}>Sign In</Button>
        </li>
      </Flexbox>
    </>
  );
};
