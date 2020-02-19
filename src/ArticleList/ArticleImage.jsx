import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = props => {
    return (
      
        <div class="image">
           <img src={props.articleImage.image._url} alt={props.alttitle}/>
    </div>
        
    
    );
  };
  ArticleImage.propTypes = {
    articleImage: PropTypes.object.isRequired,
    alttitle: PropTypes.string.isRequired
};
  export default ArticleImage;