export const GET_PAGES = `
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!, $language: String) {
    cpPage(slug: $slug, language: $language) {
      _id
      name
      slug
      content
      status
      createdAt
    }
  }
`;

export const GET_POSTS = `
  query GetPosts($language: String, $status: String) {
    cpPosts(language: $language, status: $status) {
      _id
      title
      slug
      excerpt
      content
      status
      categoryIds
      tagIds
      createdAt
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!, $language: String) {
    cpPost(slug: $slug, language: $language) {
      _id
      title
      slug
      excerpt
      content
      status
      categoryIds
      tagIds
      createdAt
    }
  }
`;

export const GET_CATEGORIES = `
  query GetCategories($language: String) {
    cpCategories(language: $language) {
      list {
        _id
        name
        slug
      }
    }
  }
`;

export const GET_TAGS = `
  query GetTags($language: String) {
    cpCmsTags(language: $language) {
      tags {
        _id
        name
        slug
      }
    }
  }
`;

export const GET_HEADER_MENU = `
  query GetHeaderMenu($language: String) {
    cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
    }
  }
`;

export const GET_FOOTER_MENU = `
  query GetFooterMenu($language: String) {
    cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
    }
  }
`;

export const VERIFY_CMS = `
  query VerifyCMS($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
    cpPosts(language: $language, status: published) {
      _id
      title
      slug
    }
    header: cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
    }
    footer: cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
    }
  }
`;
