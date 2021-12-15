import { Books } from './Books';
import { History } from './History';
import { Mystery } from './Mystery';
import { Art } from './Art';

export class BookFactory{

    static getBook(bookType: string): Books{
      
        switch(bookType){
            case 'H': return new History();
            break;

            case 'M': return new Mystery();
            break;

            default: return new Art();
            break;
        }
    }
}