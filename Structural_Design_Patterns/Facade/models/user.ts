import { Post } from "./post";
import { Todo } from "./todo";

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    posts: Post[],
    todos: Todo[],
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: number;
        lng: number;
    }
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}