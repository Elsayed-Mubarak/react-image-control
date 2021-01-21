import './App.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


function App(props) {

  const [rSelected, setRSelected] = useState('B One');
  const [photo, setPhoto] = useState("./profile.jpg");

  const handleClickB1 = () => {
    setPhoto("./profile.jpg")
  }
  const handleClickB2 = () => {
    setPhoto("./angrybirds.jpg")
  }
  const handleClickB3 = () => {
    setPhoto("./harry.jpg")
  }
  const handleClickPhoto = () => {
    setRSelected(rSelected)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <div>
              <Button color="primary"
                onClick={
                  () => {
                    setRSelected('B One');
                    handleClickB1();
                  }
                } active={rSelected === 'B One'}
                style={{
                  marginTop: '-30rem'
                }}
              >B One</Button>
              <Button color="primary"
                onClick={
                  () => {
                    setRSelected('B Two')
                    handleClickB2();
                  }} active={rSelected === 'B Two'}
                style={{
                  marginTop: '40rem',
                  marginLeft: '-54px'
                }}
              >B Two</Button>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <img src={photo} alt="Girl in a jacket" width="300" height="300"
              onClick={handleClickPhoto}
              style={{
                border: '5px solid yellow',
                position: 'static',
                marginTop: '70%'
              }} />

            <div style={{ alignItems: 'center' }}>
              <h5 >Selected Button: [{rSelected}]</h5>
            </div>
          </Col>
          <Col sm="4">
            <Button color="primary"
              onClick={
                () => {
                  setRSelected('B Three')
                  handleClickB3();
                }} active={rSelected === 'B Three'}
              style={{
                marginTop: '108%'
              }}
            >B Three</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;