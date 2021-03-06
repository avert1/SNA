import React from 'react';
import PropTypes from 'prop-types';
const navLinks = require('./navLinks.json').links;
import './navigation.scss';

//Navigation bar. Reads navigation links from navLinks.json
//To make this component more flexible, can pass in navLinks as a prop instead
class Navigation extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentTab:this.props.currentTab
      }
    }

    generateNavLinks(links) {
      return navLinks.map((link, index)=>{
        if(link === "Search"){
          let activeStyle = (this.props.currentTab === link ? " active" : "");
          return (
            <div key={index} className={"nav-link search-container" + activeStyle}
            onMouseDown={()=>{this.props.setPage(link)}}>
              <div className={"search-button" + activeStyle}>
                <div className="search-button__circle"></div>
                <div className="search-button__rectangle"></div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className={("nav-link") + (this.props.currentTab === link ? " active" : "")} key={link}
            onMouseDown={()=>{this.props.setPage(link)}}>{link}</div>
          );
        }
      });
    }

    setCurrentTab(tab){
      if(navLinks.indexOf(tab)>-1){
        this.setState({
          currentTab:tab
        });
      } else{
        console.log(tab + " not found");
      }
    }

    render(){
      return(
        <nav>
          {this.generateNavLinks(navLinks)}
        </nav>
      );
    }
}

Navigation.propTypes = {
  currentTab:PropTypes.string.isRequired
}

export default Navigation;
