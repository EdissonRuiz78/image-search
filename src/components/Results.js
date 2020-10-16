import React, { Component } from "react";
import Image from "./Image";
import Pages from "./Pages";

class Results extends Component {

  showImages = () => {
    const images = this.props.images;
    
    if (images.length === 0){
      return null;
    }

    return (
      <React.Fragment>
        <div className="col-12 row">
          {images.map(image => (
            <Image
            key={image.id}
            image={image} 
            />
          ))}
        </div>
        <Pages
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage} 
        />
      </React.Fragment>
    )
  }
  
  render(){
    return(
      <React.Fragment>
        {this.showImages()}
      </React.Fragment>
    );
  }
}

export default Results;