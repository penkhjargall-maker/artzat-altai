export interface Media {
  readonly url: string;
  readonly altText?: string;
  readonly width?: number;
  readonly height?: number;
}

export interface Category {
  readonly _id: string;
  readonly name: string;
  readonly code: string;
  readonly description?: string;
  readonly order?: number;
}

export interface NavItem {
  readonly _id: string;
  readonly label: string;
  readonly url: string;
  readonly order: number;
  readonly target?: string;
}

export interface CmsPage {
  readonly _id: string;
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
  readonly content?: string;
}

export interface Post {
  readonly _id: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt?: string;
  readonly content?: string;
  readonly publishedDate?: string;
  readonly featuredImage?: Media;
}

export interface Product {
  readonly _id: string;
  readonly name: string;
  readonly nameEn?: string;
  readonly slug: string;
  readonly description: string;
  readonly descriptionEn?: string;
  readonly price: number;
  readonly unit: string;
  readonly category: string;
  readonly image?: string;
  readonly inStock: boolean;
  readonly badge?: string;
  readonly minOrder?: string;
  readonly sizes?: string[];
}
