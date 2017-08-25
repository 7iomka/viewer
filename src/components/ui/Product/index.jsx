import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Image, Button, Header, Rating } from 'semantic-ui-react';

import styles from './product.scss';

const MEDIA_URI_BASE = 'http://smktesting.herokuapp.com/static/';
const PRODUCT_ROUTE_URI_BASE = '/products';

class Product extends Component {
  constructor(props) {
    super(props);
    const {
      id,
      img,
    } = this.props;
    this.imgUrl = `${MEDIA_URI_BASE}${img}`;
    this.PRODUCT_URI_FULL = `${PRODUCT_ROUTE_URI_BASE}/${id}`;

    this.goToProduct = this.goToProduct.bind(this, this.PRODUCT_URI_FULL);
  }
  goToProduct(url) {
    this.props.history.push(url);
  }
  render() {
    const { title } = this.props;
    return (
      <div className={styles.product}>
        <Link to={this.PRODUCT_URI_FULL} >
          <Image
            src={this.imgUrl || 'https://react.semantic-ui.com/assets/images/wireframe/image-text.png'}
            fluid
            className={styles.image}
          />
        </Link>
        <div className={styles.description}>
          <div className={styles.productRating} >
            <Rating
              maxRating={5}
              defaultRating={5}
              icon="star"
              size="large"
              disabled
            />
          </div>
          <Header as="h4" size="medium" className={styles.caption}>
            <Link to={this.PRODUCT_URI_FULL} className={styles.captionLink}>{title}</Link>
          </Header>
          <Button color="purple" className={styles.readMore} onClick={this.goToProduct}>View more</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
