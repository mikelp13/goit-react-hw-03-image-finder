import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";
import Notification from "./notification/Notification";
import Searchbar from "./searchbar/Searchbar";
import imagesApi from "../api/galleryApi";
import Button from "./button/Button";
import { AppStyled } from "./AppStyled";
import Modal from "./modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageURL: null,
    hideBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    prevQuery !== nextQuery && this.fetchImages();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) => {
        images.length
          ? this.setState((prevState) => ({
              images: [...prevState.images, ...images],
              page: prevState.page + 1,
            }))
          : this.setState({ hideBtn: true });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  setModalImage = (e) => {
    this.setState({ largeImageURL: e.target.dataset.source });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, isLoading, largeImageURL, error, hideBtn } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.setModalImage} />
        )}
        {images.length > 0 && !isLoading && !hideBtn && (
          <Button onClick={this.fetchImages} />
        )}
        {isLoading && <Loader />}
        {error && <Notification message={error.message} />}
        {largeImageURL && (
          <Modal largeImage={largeImageURL} closeModal={this.closeModal} />
        )}
      </AppStyled>
    );
  }
}
