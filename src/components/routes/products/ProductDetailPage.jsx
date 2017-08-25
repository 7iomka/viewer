import React, { Component } from 'react';
import ProductDetail from 'components/ui/ProductDetail/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { find } from 'lodash';
import { onGetProducts } from 'actions/productActions';
import {
  Loader,
} from 'semantic-ui-react';

class ProductDetailPage extends Component {
  componentWillMount() {
    if (!this.props.products.length) {
      this.props.getProducts();
    }
  }

  renderProduct() {
    if (this.props.product) {
      if (this.props.products.length) {
        return <ProductDetail product={this.props.product} />;
      }
    }

    return (
      <Loader
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
        active
        inline="centered"
        size="large"
      >Product loading ... Please wait!</Loader>
    );
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps.product', nextProps.product);
  // }
  render() {
    return (
      <div className="root">
        {this.renderProduct()}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  product: find(state.products, (p) => p.id === Number(props.match.params.id)),
});
const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(onGetProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
