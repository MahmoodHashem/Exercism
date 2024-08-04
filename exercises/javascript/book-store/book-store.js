//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  
  let price = books.length * 800; 
  let discount = {5:0.25, 4: 0.20, 3: 0.10, 2: 0.05}; 
  let bookSet = []; 

  while(books.length > 0){
    bookSet.push(new Set(books).size); 
    for (const book of new Set(books)) {
      books.splice(books.indexOf(book), 1); 
    }
  }

  while(bookSet.includes(3) && bookSet.includes(5)){
    bookSet.splice(bookSet.indexOf(3), 1); 
    bookSet.splice(bookSet.indexOf(5), 1); 
    bookSet.push(4,4); 
  }
  
  return price - bookSet.reduce((pre, curr) => pre + (discount[curr] || 0) * 800 * curr, 0)


};