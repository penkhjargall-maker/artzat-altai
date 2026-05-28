import { CmsPage, NavItem, Post, Product } from "@/types/cms";

export const mockPages: CmsPage[] = [
  { _id: "1", name: "Нүүр", slug: "home", description: "Монголын хүнсний боловсруулалтын тэргүүлэгч" },
  { _id: "2", name: "Бидний тухай", slug: "about", description: "Арцат Алтайн Уулс ХХК-ийн түүх, үнэт зүйлс" },
  { _id: "3", name: "Бүтээгдэхүүн", slug: "products", description: "Манай бүтээгдэхүүнүүд" },
  { _id: "4", name: "Тендер", slug: "tender", description: "Томоохон худалдан авалтын шийдэл" },
  { _id: "5", name: "Холбоо барих", slug: "contact", description: "Бидэнтэй холбоо барина уу" },
];

export const mockPosts: Post[] = [
  { _id: "1", title: "Монголын махны экспорт 2024", slug: "meat-export-2024", excerpt: "Монголын махны экспортын талаар...", publishedDate: "2024-01-15" },
  { _id: "2", title: "Шинэ бүтээгдэхүүн танилцуулга", slug: "new-product-launch", excerpt: "Шинэ бүтээгдэхүүнүүд...", publishedDate: "2024-02-20" },
];

export const mockHeaderMenu: NavItem[] = [
  { _id: "1", label: "БҮТЭЭГДЭХҮҮН", url: "/products", order: 1 },
  { _id: "2", label: "ТЕНДЕР", url: "/tender", order: 2 },
  { _id: "3", label: "МЭДЭЭ", url: "/news", order: 3 },
  { _id: "4", label: "БИДНИЙ ТУХАЙ", url: "/about", order: 4 },
  { _id: "5", label: "ХОЛБОО", url: "/contact", order: 5 },
];

export const mockFooterMenu: NavItem[] = [
  { _id: "1", label: "Бүтээгдэхүүн", url: "/products", order: 1 },
  { _id: "2", label: "Тендер", url: "/tender", order: 2 },
  { _id: "3", label: "Мэдээ", url: "/news", order: 3 },
  { _id: "4", label: "Бидний тухай", url: "/about", order: 4 },
];

export const mockProducts: Product[] = [
  { _id: "1", name: "Үхрийн мах", nameEn: "Beef", slug: "beef", description: "Шинэхэн, чанартай үхрийн мах", descriptionEn: "Fresh, quality beef", price: 45000, unit: "кг", category: "Свежий мах", inStock: true, badge: "Шинэхэн", minOrder: "50кг" },
  { _id: "2", name: "Хонины мах", nameEn: "Mutton", slug: "mutton", description: "Монголын уулын хонины мах", descriptionEn: "Mongolian mountain lamb", price: 52000, unit: "кг", category: "Свежий мах", inStock: true, badge: "Бестселлер", minOrder: "50кг" },
  { _id: "3", name: "Тахианы мах", nameEn: "Chicken", slug: "chicken", description: "Антибиотикгүй тахианы мах", descriptionEn: "Antibiotic-free chicken", price: 28000, unit: "кг", category: "Свежий мах", inStock: false, minOrder: "50кг" },
  { _id: "4", name: "Хагас боловсруулсан", nameEn: "Semi-processed", slug: "semi-processed", description: "Хүндийн ажил хөнгөвчилсэн", descriptionEn: "Semi-processed meat", price: 38000, unit: "кг", category: "Хагас боловсруулсан", inStock: true, minOrder: "30кг" },
  { _id: "5", name: "Давсалсан мах", nameEn: "Salted meat", slug: "salted-meat", description: "Уламжлалт аргаар давсалсан", descriptionEn: "Traditionally salted", price: 42000, unit: "кг", category: "Давсалсан мах", inStock: true, minOrder: "30кг" },
  { _id: "6", name: "Банш", nameEn: "Dumplings", slug: "dumplings", description: "Гарын аргаар элсэх банш", descriptionEn: "Handmade dumplings", price: 35000, unit: "кг", category: "Банш", inStock: true, minOrder: "200ш" },
];

export function getPages() {
  return mockPages;
}

export function getPageBySlug(slug: string) {
  return mockPages.find((p) => p.slug === slug);
}

export function getPosts() {
  return mockPosts;
}

export function getPostBySlug(slug: string) {
  return mockPosts.find((p) => p.slug === slug);
}

export function getHeaderMenu() {
  return mockHeaderMenu;
}

export function getFooterMenu() {
  return mockFooterMenu;
}

export function getProducts() {
  return mockProducts;
}
