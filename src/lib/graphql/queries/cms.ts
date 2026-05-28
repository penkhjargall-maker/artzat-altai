import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
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

export const GET_POSTS = gql`
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

export const GET_POST_BY_SLUG = gql`
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

export const GET_CATEGORIES = gql`
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

export const GET_TAGS = gql`
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

export const GET_HEADER_MENU = gql`
  query GetHeaderMenu($language: String) {
    cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
    }
  }
`;

export const GET_FOOTER_MENU = gql`
  query GetFooterMenu($language: String) {
    cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
    }
  }
`;

export const VERIFY_CMS = gql`
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
