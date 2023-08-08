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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorsSelector = '.post-author',
  optTagsListSelector = '.tags.list';


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
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
  const articles = document.querySelectorAll('article');

  for(let article of articles) {

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    let linkHTML = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');

    for (let tag of articleTagsArray) {

      const tagHTML = '<li><a href="#tag-'+ tag + '">'+ tag +'</a>';
      linkHTML =  linkHTML + tagHTML;
      if(allTags.indexOf(tagHTML) == -1){
        /* [NEW] add generated code to allTags array */
        allTags.push(tagHTML);
      }
    }
    tagsWrapper.innerHTML = linkHTML;
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');
  console.log(allTags);

}





/*[DONE] prevent default action for this event */
/*[DONE] make new constant named "clickedElement" and give it the value of "this" */
/*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */
/*[DONE] make a new constant "tag" and extract tag from the "href" constant */
/*[DONE] find all tag links with class active */
/*[DONE] START LOOP: for each active tag link */
/*[DONE] remove class active */
/*[DONE] END LOOP: for each active tag link */
/*[DONE] find all tag links with "href" attribute equal to the "href" constant */
/*[DONE] START LOOP: for each found tag link */
/*[DONE] add class active */
/*[DONE] END LOOP: for each found tag link */
/*[DONE] execute function "generateTitleLinks" with article selector as argument */
function tagClickHandler(event){

  event.preventDefault();

  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  for (let activeTagLink of activeTagLinks){
    activeTagLink.classList.remove('.active');
  }
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  for (let tagLink of tagLinks) {
    tagLink.classList.add('.active');
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

/*[DONE] find all links to tags */
/*[DONE] START LOOP: for each link */
/*[DONE] add tagClickHandler as event listener for that link */
/*[DONE] END LOOP: for each link */
function addClickListenersToTags(){
  const links = document.querySelectorAll('a[href^="#tag-"]');

  for(let link of links) {
    link.addEventListener('click', tagClickHandler);
  }
}

// [DONE] Create variable for all articles
// [DONE] START LOOP for every article:
// [DONE] Find author wrapper
// [DONE] Get author from data-author attribute
// [DONE] Create html link for author
// [DONE] Insert html link in to author wrapper
// [DONE] End of loop
function generateAuthors(){

  const articles = document.querySelectorAll('article');
  for(let article of articles) {

    const authorsWrapper = article.querySelector(optArticleAuthorsSelector);
    let html = '';
    const articleAuthor = article.getAttribute('data-author');
    const authorLink = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
    html = html + authorLink;
    authorsWrapper.innerHTML = html;
  }

}

/*
* [DONE] prevent default action for this event
* [DONE] make new constant named "clickedElement" and give it the value of "this"
* [DONE]make a new constant "href" and read the attribute "href" of the clicked element
* [DONE]make a new constant "author" and extract author from the "href" constant
* [DONE]find all author links with class active
* {DONE]START LOOP: for each active author link
* [DONE]remove class active
* [DONE]END LOOP: for each active author link
* [DONE] find all author links with "href" attribute equal to the "href" constant
* [DONE] START LOOP: for each found author link
* [DONE]add class active
* [DONE]END LOOP: for each found author link
* execute function "generateTitleLinks" with article selector as argument
*/

function authorClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author-', '');
  const activeAuthorLinks = document.querySelectorAll('.post-author a.active');
  console.log(activeAuthorLinks);

  for (let activeAuthorLink of activeAuthorLinks) {
    activeAuthorLink.classList.remove('active');
  }
  const activeAuthors = document.querySelectorAll('.authors a');
  for (let activeAuthor  of activeAuthors) {
    activeAuthor.classList.remove('active');
  }
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  for(let authorLink of authorLinks){
    authorLink.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');

}

/*[DONE] find all links to tags */
/*[DONE] START LOOP: for each link */
/*[DONE] add tagClickHandler as event listener for that link */
/*[DONE] END LOOP: for each link */
function addClickListenersToAuthors(){
  const links = document.querySelectorAll('a[href^="#author-"]');


  for(let link of links) {
    link.addEventListener('click', authorClickHandler);

  }
}

generateTags();

generateAuthors();

generateTitleLinks();

addClickListenersToTags();

addClickListenersToAuthors();