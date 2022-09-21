import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  const articleList = posts.map(article =>(
    <Article 
    key={article.id}
    title={article.title}
    date={article.date}
    preview={article.preview}
    minutes={article.minutes}
    />
  ))
    return (
    <main>{articleList}</main>
  )
}

export default ArticleList