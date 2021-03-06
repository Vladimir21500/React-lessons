import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }
  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly,
    });
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText,
    });
  };
  render() {
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}
export default FilterableProductTable;
