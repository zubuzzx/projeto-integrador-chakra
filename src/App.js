import './App.css';
import {
  ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Container 
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
      <Container>
      <Flex alignItems="center">
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Sobre</Tab>
          <Tab>Contato</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Home</p>
          </TabPanel>
          <TabPanel>
            <p>Sobre</p>
          </TabPanel>
          <TabPanel>
            <p>Contato</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Flex>
      </Container>
      
      <BrowserRouter>

        <Menupg />



        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="/contato" element={<Contato />}></Route>
          <Route exact path="/agenda" element={<Agenda />}></Route>
        </Routes>


      </BrowserRouter>
    </ChakraProvider>


  );
}

export default App;
