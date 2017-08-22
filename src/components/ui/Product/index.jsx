import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Image, Button, Header, Rating } from 'semantic-ui-react';

import styles from './product.scss';

const MEDIA_URI_BASE = 'http://smktesting.herokuapp.com/static/';
const PRODUCT_ROUTE_URI_BASE = '/products';

class Product extends Component {
  render() {
    const {
      id,
      img,
      title,
      history,
    } = this.props;
    const imgUrl = `${MEDIA_URI_BASE}${img}`;
    const PRODUCT_URI_FULL = `${PRODUCT_ROUTE_URI_BASE}/${id}`;
    return (
      <div className={styles.product}>
        <Link to={PRODUCT_URI_FULL} >
          <Image
            src={imgUrl || 'https://react.semantic-ui.com/assets/images/wireframe/image-text.png'}
            fluid
            className={styles.image}
          />
        </Link>
        <div className={styles.description}>
          <div className={styles.productRating} onClick={() => this.props.getProducts()}>
            <Rating
              maxRating={5}
              defaultRating={5}
              icon="star"
              size="large"
              disabled
            />
          </div>
          <Header as="h4" size="medium" className={styles.caption}>
            <Link to="/products/123" className={styles.captionLink}>{title}</Link>
          </Header>
          <Button color="purple" className={styles.readMore} onClick={() => history.push(PRODUCT_URI_FULL)}>View more</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
