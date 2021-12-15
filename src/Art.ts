import { BookType } from "./BookType";
import { Books } from "./Books";

export class Art implements Books{

    getBookType(): string{
        return BookType.Activity;
    }

    getPrice(): number{
        return 150;
    }
}