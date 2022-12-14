import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalStyle";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import * as API from 'services/api';
import { mapper } from 'helpers/mapper';
import Modal from './Modal';
import Loader from "./Loader";
import IdleCaption from "./IdleCaption";
import Error from "./Error";
import Button from "./Button";

// Задачи:
//   - Переделать форму в Формик
//   - Добавить PropTypes

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

export class App extends Component {
  state = {
    items: [],
    searchValue: "",
    page: 1,
    status: Status.IDLE,
    fullScreenImage: null,
  }

  componentDidUpdate(_, prevState) {
    const { searchValue, items, page} = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({status: Status.PENDING})
      this.searchImages(searchValue, page);
    }

    if (prevState.items !== items && page !== 1) {
      window.scrollBy({
        top: document.body.scrollHeight
      });
    }
  }

  handleOpenModal = image => this.setState({ fullScreenImage: image });

  handleCloseModal = () => this.setState({ fullScreenImage: null });

  searchImages = async (searchValue, page) => {
    try {
      const responce = await API.searchImage(searchValue, page);

      if (responce.length === 0) {
        throw new Error();
      }

      this.setState({
        items: [...this.state.items, ...mapper(responce)],
        status: Status.RESOLVED,
      });
    }
    catch(error) {
      this.setState({
        status: Status.REJECTED
      });
    }
  }

  handleSearch = (searchValue) =>
    this.setState({
      searchValue,
      items: [],
      page: 1
    });

    handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  
  render() {
    const { status, items, fullScreenImage, page } = this.state;

    const totalPages = Math.ceil((items.length + 1) / 12);

    return (
      <>
        <Searchbar onSearch={this.handleSearch} />
      
        {status === Status.IDLE && <IdleCaption caption="Enter search value" />}
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && <ImageGallery items={items} onClick={this.handleOpenModal} />}
        {status === Status.RESOLVED && page < totalPages && <Button caption="Load more" handleClick={this.handleLoadMore} />}
        {status === Status.REJECTED && <Error caption="Error. Please try again." />}
        {fullScreenImage && <Modal onClose={this.handleCloseModal} imageURL={fullScreenImage} />}
        <GlobalStyle />
        <ToastContainer />
      </>
    );
  }  
};
