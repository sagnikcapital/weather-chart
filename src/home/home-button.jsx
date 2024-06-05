import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HomeButton = () => {
  let history = useNavigate();

  const handleHistory = () => {
    history("/");
  }

  return (
    <Button variant="link" onClick={handleHistory}>
      Home
    </Button>
  );

}

export default HomeButton;