import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <div  id="grid-fixed-cols" className={styles.container}>  
     <ArticleImage  articleImage = {props.article} alttitle ={props.article.title} ></ArticleImage> 
    <section className = {styles.section}>
      <h3 className={styles.title}>{props.article.title}</h3>
      <p>{props.article.shortText}</p>
      <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      </section>
      <SlugButton slug={props.article.slug} buttonText={props.article.author} />
      </div>
  );
};

export default ArticleListItem;
