import { Category } from "../__generated__/graphql";

export default function categoryParser(categories: any) {
  let categoriesString = "";
  categories.map((category: Category, index: number) => {
    if (index === 0) {
      categoriesString = `${category.name}`;
      return;
    } else {
      categoriesString = `${categoriesString},${category.name}`;
      return;
    }
  });
  return categoriesString;
}
