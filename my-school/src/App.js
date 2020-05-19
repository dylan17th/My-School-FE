import React from 'react';
// import './App.css';
import TopNav from './Components/TopNav';
// import ActivityContainer from './Components/ActivityContainer';
import Portfolio from './Components/Portfolio';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import {PDFViewer} from '@react-pdf/renderer';
import MyDocument from './Components/PDFExporter';
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

function App() {


  return (
        <ThemeProvider>
          <CSSReset />
          <div className="App">
           
            <Router>
            <TopNav />
            <Box>
            <p>This is the app.</p>
            <Portfolio />
            </Box>
            </Router>
            <PDFViewer>
              <MyDocument />
            </PDFViewer>
          </div>
        </ThemeProvider>
     
  );
}

export default App;