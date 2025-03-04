import './App.css';
import React, {Component} from 'react';
import Navbar from "./Component/Navbar";
import News from './Component/News';
import{
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Alert from './Component/Alert';

export default class App extends Component {
  pageSize = "10";
  render() {
    return (
      <Router>
        <Navbar />
        <Alert />
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
        <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
        <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
        <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business"/>} />
        <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science"/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology"/>} />
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health"/>} />
        </Routes>
      </Router>
        
    )
  }
}
