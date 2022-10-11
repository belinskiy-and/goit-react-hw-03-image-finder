import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalStyle";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";

// Задачи:
//   - Переделать форму в Формик
//   - Добавить PropTypes

export class App extends Component {
  state = {
    searchValue: "",
  }

  handleSearch = (searchValue) =>
    this.setState({ searchValue });
  
  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery ></ImageGallery>
        <GlobalStyle />
        <ToastContainer />
      </>
    );
  }  
};
