import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-primary'  href="#home">Weather App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;