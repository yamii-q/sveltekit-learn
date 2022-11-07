import { writable } from "svelte/store";
import type { BookItem } from "../../src/repositories/book";

export const books = writable<BookItem[]>([])