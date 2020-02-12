import React from 'react';
import SlugButton from './SlugButton';
import './ArticleListItem.module.css';

const ArticleListItem = ({articlelist})=>{ 
      return (
        <div>
      <head>
        <title>Assignment Week-5</title>
      </head>
    
                  <article>   
                    <h2>{articlelist.title}</h2>
                    <p>{articlelist.shortText}</p>
                    <time dateTime={articlelist.pubYear}>
                    {articlelist.pubDate}
                    </time>
                    <SlugButton  slugButton = {articlelist}></SlugButton>
                  </article>
        </div>

                
      );
    
}
  
export default ArticleListItem;