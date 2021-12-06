import React from "react";
import PreviewCollection from "../../components/collection/preview/PreviewCollection.jsx";
import SHOP_DATA from "./Data.js";


class ShopPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: SHOP_DATA
      };
    }
  
    render() {
    return(
        <div className='shop-page'>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
        </div>
    )
}
}

export default ShopPage