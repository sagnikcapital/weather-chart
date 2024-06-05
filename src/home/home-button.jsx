import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  let history = useNavigate();

  const handleHistory = () => {
    history("/");
  }

  return (
    <button className="home-button" onClick={handleHistory}>
      Home
    </button>
  );

}

export default HomeButton;