import React, { Component } from 'react';
import { Grid, Container, Image, Button, Header, Rating } from 'semantic-ui-react';
import styles from './productDetail.scss';

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <div className={styles.productDetail}>
          <Header as="h2" size="huge" className={styles.title} textAlign="center">Product Name</Header>
          <Container className={styles.productContainer}>
            <Grid >
              <Grid.Column mobile={4}>
                test
              </Grid.Column>
              <Grid.Column mobile={8}>
              test2
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
