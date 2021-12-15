import { BookType } from "./BookType";
import { Books } from "./Books";

export class History implements Books{

    getBookType(): string{
        return BookType.NonFiction;
    }

    getPrice(): number{
        return 500;
    }
}