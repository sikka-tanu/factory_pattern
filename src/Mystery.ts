import { BookType } from "./BookType";
import { Books } from "./Books";

export class Mystery implements Books{

    getBookType(): string{
        return BookType.Fiction;
    }

    getPrice(): number{
        return 200;
    }
}