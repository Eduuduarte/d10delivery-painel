import { Category } from "./Category";

export type Product = {
    id: number;
    image: string;
    categoty: Category;
    name: string;
    price: number;
    description?: string;
}