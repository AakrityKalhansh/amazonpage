import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component{
  state={
    productData: ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0,
  }

  onColorOptionClick =(pos)=>{
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemCLick =(pos)=>{
    this.setState({currentSelectedFeature:pos})
  }
  render(){
    return (
      <div className="App">
           <Topbar/>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions
          [this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature=
          {this.state.currentSelectedFeature}/>
        </div>
        <div className={classes.ProductData}>
          <ProductDetails data={this.state.productData} onColorOptionClick=
          {this.onColorOptionClick}currentPreviewImagePos=
          {this.state.currentPreviewImagePos} onFeatureItemCLick=
          {this.onFeatureItemCLick} currentSelectedFeature=
          {this.state.currentSelectedFeature}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
