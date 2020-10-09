import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Container} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootsrap.min.css';

ReactDOM.render(
  <Container>
   <App/>
   </Container>, 
  document.querySelector('#root')
);
