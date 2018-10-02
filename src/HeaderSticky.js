import React, { Component } from 'react';



export default class StickyHeader extends Component {
constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };

    this.handleScroll = this.handleScroll.bind(this)
}
// ******************************
// End of constructor
// ******************************


componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {

  if (window.scrollY > 100) {
    console.log("should lock");
    this.setState({
      scrollingLock: true
    });
  } else if (window.scrollY < 100) {
    console.log("not locked" );
    this.setState({
      scrollingLock: false
    });
  }

}

// ******************************
// And Finally, the render
// ******************************
render() {
    return (
            <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
                    {this.props.children}
            </div>
          )
            }
   }


