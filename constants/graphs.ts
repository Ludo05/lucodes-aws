export const GET_BLOGS = `
  query getBlogs {
    blogs {
      title
      summary
    }
  }
`;

export const GET_CASES = `
query getCaseStudies {
  caseStudies {
    title
    url
  }
}`;

export const GET_NEWS = `
query getNews {
  news {
      title
      source
      imageurl
      description
      snippet
      publishedat
      url
      keywords
  }
}`;

export const ADD_CASE = (title: string, url: string) =>
  `mutation addCaseStudy {
  addCaseStudy(title: "${title}", url: "${url}") 
}`;
