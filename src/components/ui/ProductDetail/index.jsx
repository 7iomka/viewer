import React, { Component } from 'react';
import { Grid, Container, Image, Button, Header, Rating } from 'semantic-ui-react';
import styles from './productDetail.scss';

const MEDIA_URI_BASE = 'http://smktesting.herokuapp.com/static/';

export default function ProductDetail(props) {
  // if (!props.product) {
  //   return null;
  // }
  const {
    id,
    img,
    title,
    text,
    history,
  } = props.product;
  const imgUrl = `${MEDIA_URI_BASE}${img}`;
  return (
    <div>
      <div className={styles.productDetail}>
        <Header as="h2" size="huge" className={styles.title} textAlign="center">{title}</Header>
        <div className="container">
          <div className="row">

          </div>
        </div>
        <Container className={styles.productContainer}>
          <Grid >
            <Grid.Column mobile={4}>
              <Image
                src={imgUrl || 'https://react.semantic-ui.com/assets/images/wireframe/image-text.png'}
                fluid
                className={styles.image}
              />
            </Grid.Column>
            <Grid.Column mobile={8}>
              <Header as="h4" size="medium" className={styles.caption}>
                {title}
              </Header>
              <p className={styles.text}>{text}</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
