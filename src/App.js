import './App.css';
import {
  ChakraProvider, Container
} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Agenda from './components/pages/Agenda';
import Menupg from './components/Menupg';


function App() {
  return (


    <ChakraProvider>
      <Container maxW='3x1' p="0">



        <BrowserRouter>
          
            <Menupg />

          



          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/sobre" element={<Sobre />}></Route>
            <Route exact path="/contato" element={<Contato />}></Route>
            <Route exact path="/agenda" element={<Agenda />}></Route>
          </Routes>


        </BrowserRouter>
      </Container>
    </ChakraProvider>


  );
}

export default App;
