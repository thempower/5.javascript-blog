'use strict';
function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */
  /* [DONE]add class 'active' to the clicked link */
  /* [DONE] remove class 'active' from all articles */
  /* [DONE] get 'href' attribute from the clicked link */
  /* [DONE]find the correct article value of 'href' attribute) */
  /* [DONE] add class 'active' to the correct article */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');
  const activeArticles = document.querySelectorAll('article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
}
// eslint-disable-next-line no-unused-vars
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

/*[DONE] remove contents of titleList */
/*[DONE]for each article */
/*[DONE] get the article id */
/*[DONE] find the title element */
/*[DONE] get the title from the title element */
/*[DONE] create HTML of the link */
/*[DONE] insert link into titleList */
function generateTitleLinks(){
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll('.post');
  let html = '';
  for( let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

function generateTags(){
//[DONE] find all articles */
  const articles = document.querySelectorAll('article');
  //[DONE] START LOOP: for every article: */
  for(let article of articles) {
    //[DONE]  find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    //[DONE] make html variable with empty string */
    let html = '';
    //   /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    //   /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    for (let tag of articleTagsArray) {
    //   /* generate HTML of the link */  }
      const tagHTML = '<li><a href="#tag-'+ tag + '">'+ tag +'</a>';
      //   /* add generated code to html variable */
      html =  html + tagHTML;
      //   /* END LOOP: for each tag */
    }
    //   /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    console.log(html);

    //   /* END LOOP: for every article: */
  }

}

generateTags();