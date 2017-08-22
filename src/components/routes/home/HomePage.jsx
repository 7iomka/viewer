import React, { Component } from 'react';
import { Grid, Container, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onGetProducts } from 'actions/productActions';

import Product from 'components/ui/Product';
import styles from './HomePage.scss';

class HomePage extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  // componentWillReceiveProps(nextProps) {
  //   this.renderProducts()
  // }
  renderProducts() {
    if (this.props.products.length) {
      return this.props.products.map(product => {
        const { ...productProps } = product;
        return (
          <Grid.Column key={`${product.id}-column`}>
            <Product {...productProps} />
          </Grid.Column>
        );
      });
    }
    return (
      <div className={styles.noProducts}>Products preloading ... Please wait!</div>
    );
  }

  render() {
    return (
      <div className="root">
        <div className={styles.homeHeader}>
          <Container>
            <h2 className={styles.title}>Would you like to leave a review about the product?</h2>
            <div className={styles.list}>
              <Button.Group size="large">
                <Button className={styles.item}>Login</Button>
                <Button.Or />
                <Button color="purple" className={styles.item}>Register</Button>
              </Button.Group>
            </div>
          </Container>
        </div>
        <div className={styles.products}>
          <Header as="h2" size="huge" className={styles.title} textAlign="center">Trending Products</Header>
          <Container className={styles.productsContainer}>
            <Grid columns={3} >
              { this.renderProducts() }
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(onGetProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
