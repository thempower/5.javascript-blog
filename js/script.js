/* [DONE] remove class 'active' from all article links  */
/* [DONE]add class 'active' to the clicked link */
/* [DONE] remove class 'active' from all articles */
/* [DONE] get 'href' attribute from the clicked link */
/* [DONE]find the correct article value of 'href' attribute) */
/* [DONE] add class 'active' to the correct article */
'use strict';
function titleClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
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
function generateTitleLinks(customSelector = ''){
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

//[DONE] find all articles //
//[DONE] START LOOP: for every article: //
//[DONE]  find tags wrapper //
//[DONE] make html variable with empty string//
//[DONE]get tags from data-tags attribute */
//[DONE]split tags into array */
//[DONE] generate HTML of the link */
//[DONE] add generated code to html variable */
//[DONE] END LOOP: for each tag */
//[DONE]insert HTML of all the links into the tags wrapper */
//[DONE]END LOOP: for every article: */
function generateTags() {

  const articles = document.querySelectorAll('article');

  for(let article of articles) {

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    let html = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');

    for (let tag of articleTagsArray) {

      const tagHTML = '<li><a href="#tag-'+ tag + '">'+ tag +'</a>';
      html =  html + tagHTML;
      tagsWrapper.innerHTML = html;
    }
  }
}

generateTags();

function tagClickHandler(event){
  /*[DONE] prevent default action for this event */
  event.preventDefault();
  /*[DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /*[DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /*[DONE] find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /*[DONE] START LOOP: for each active tag link */
  for (let activeTagLink of activeTagLinks){
  /*[DONE] remove class active */
    activeTagLink.classList.remove('.active');
  /*[DONE] END LOOP: for each active tag link */
  }
  /*[DONE] find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  /*[DONE] START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
  /*[DONE] add class active */
    tagLink.classList.add('.active');
  /*[DONE] END LOOP: for each found tag link */
  }
  /*[DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
/* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

/* END LOOP: for each link */
}
function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();