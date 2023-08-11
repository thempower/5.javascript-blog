
const templates = {

  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
  tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
  tagCloudLink: Handlebars.compile(document.querySelector('#template-tagcloud-link').innerHTML),
  authorCloudLink: Handlebars.compile(document.querySelector('#template-authorcloud-link').innerHTML)
};

const opts = {
  tagSizes: {
    count: 5,
    classPrefix: 'tag-size-',
  },
};

const select = {
  all: {
    articles: '.post',
    linksTo: {
      tags: 'a[href^="#tag-"]',
      authors: 'a[href^="#author-"]',
    },
  },
  article: {
    tags: '.post-tags .list',
    author: '.post-author',
    titles: '.post-title',
  },
  listOf: {
    titles: '.titles',
    tags: '.tags',
    authors: '.authors',
  },
  left: {
    sidebar: {
      header: '.left-h2',
      list: '.left-ul',
      sleepDelay: 1000,
    }
  },
};

/* [DONE] remove class 'active' from all ar031ticle links  */
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


/*[DONE] remove contents of titleList */
/*[DONE]for each article */
/*[DONE] get the article id */
/*[DONE] find the title element */
/*[DONE] get the title from the title element */
/*[DONE] create HTML of the link */
/*[DONE] insert link into titleList */
function generateTitleLinks(customSelector = ''){
  const titleList = document.querySelector(select.listOf.titles);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(select.all.articles + customSelector);
  let html = '';
  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(select.article.titles).innerHTML;

    const linkHTMLData = {id: articleId, title: articleTitle};
    const linkHTML = templates.articleLink(linkHTMLData);
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}


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
function calculateTagsParams(tags) {
  const params = {max: 0, min: 999999};

  for (let tag in tags) {

    if (tags[tag] > params.max) {
      params.max = tags[tag];
    }

    if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }

  return params;
}


/**
 *
 */
function calculateTagClass(count, params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (opts.tagSizes.count - 1) + 1 );
  return (opts.tagSizes.classPrefix + classNumber);
}
function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
  const articles = document.querySelectorAll('article');

  for(let article of articles) {

    const tagsWrapper = article.querySelector(select.article.tags);
    let linkHTML = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');

    for (let tag of articleTagsArray) {

      const tagHTML = {id: tag, title: tag};
      linkHTML =  linkHTML + tagHTML;
      // [NEW] check if this link is not already in allTags
      if(!allTags.hasOwnProperty(tag)){
        // [NEW] add tag to allTags object
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }
    tagsWrapper.innerHTML = linkHTML;
  }

  const tagList = document.querySelector(select.listOf.tags);
  const allTagsData = {tags: []};
  const tagsParams = calculateTagsParams(allTags);

  for (let singleTag in allTags) {
    allTagsData.tags.push({
      tag: singleTag,
      count: allTags[singleTag],
      className: calculateTagClass(allTags[singleTag], tagsParams)
    });
  }

  tagList.innerHTML = templates.tagCloudLink(allTagsData);
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
  const articles = document.querySelectorAll(select.all.articles);
  const authorsList = document.querySelector(select.listOf.authors);
  authorsList.innerHTML = '';

  let allAuthors = {};
  const allAuthorsData = {authors: []};

  for (let article of articles) {
    const authorWrapper = article.querySelector(select.article.author);
    authorWrapper.innerHTML = '';
    const articleAuthor = article.getAttribute('data-author');
    const linkHtml = {id: articleAuthor, title: articleAuthor};
    authorWrapper.innerHTML = linkHtml;

    if(!allAuthors.hasOwnProperty(articleAuthor)){
      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
    }
  }

  for (let articleAuthor in allAuthors) {
    allAuthorsData.authors.push({
      author: articleAuthor,
      count: allAuthors[articleAuthor]
    });
  }

  authorsList.innerHTML = templates.authorCloudLink(allAuthorsData);
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