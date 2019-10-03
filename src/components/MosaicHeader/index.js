import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class MosaicHeader extends Component {
  state = {
    imageIndex: 0,
    lightboxIsOpen: false,
  };

  toggleLightbox = imageIndex => {
    this.setState(prevState => ({
      lightboxIsOpen: !prevState.lightboxIsOpen,
      imageIndex,
    }));
  };

  render() {
    const { name, images } = this.props;
    const { imageIndex, lightboxIsOpen } = this.state;

    if (name === undefined || images === undefined) {
      return null;
    }

    return (
      <>
        <header className="mosaic-header">
          <div className="mosaic-header__logo">
            <Link to="/" className="mosaic-header__logo-link">
              <img
                src="/images/hero-logo_block.svg"
                alt="WhiteSpace Logo"
                className="mosaic-header__logo-img"
              />
            </Link>
          </div>
          <div className="mosaic-header__items">
            {images.map((image, index) => (
              <div
                key={index}
                className={`mosaic-header__item mosaic-header__item--${index + 1}`}
                onClick={() => this.toggleLightbox(index)}
              >
                <img src={image} alt={name} className="mosaic-header__img" />
              </div>
            ))}
          </div>
        </header>

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={images[imageIndex]}
            nextSrc={images[(imageIndex + 1) % images.length]}
            prevSrc={images[(imageIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                imageIndex: (imageIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                imageIndex: (imageIndex + 1) % images.length,
              })
            }
            imageCaption={name}
          />
        )}
      </>
    );
  }
}

export default MosaicHeader;
