import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString?:any) {

    if (searchString == '') {
      return value;
    }

    const searchResult = [];
    for(const book of value){
      if(book.bookName.toLowerCase().includes(searchString.toLowerCase()) || 
          book.authorName.toLowerCase().includes(searchString.toLowerCase()) || 
            book.bookDetail.toLowerCase().includes(searchString.toLowerCase())){
              searchResult.push(book);
      }
    }
    return searchResult;
  }
}
