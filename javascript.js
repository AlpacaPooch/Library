
let myLibrary = [];

function Book(author, title, pages, readd) {
  // the constructor...
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.readd = readd
};
function isRead(read) 
  {if(read == 'on'){
  this.read = 'read';}
  else{
  this.read = 'unread';}};

function addBookToLibrary(forum) {
  
  // do stuff here
}
const formEle = document.querySelector('form');
formEle.addEventListener('submit', (e) =>{
  e.preventDefault();
  new FormData(formEle);
});
formEle.addEventListener('formdata', (e) => {
  const data = e.formData;
  let bookInput = '';
  for (value of data.values()) {
    bookInput += `${value} `
    console.log(bookInput)
  }
  const bookInputLess = bookInput.slice(0, -1);
  const splitBookInputLess = bookInputLess.split(' ');
  const readbook = new isRead(splitBookInputLess[3])
  const book = new Book(splitBookInputLess[0], splitBookInputLess[1], splitBookInputLess[2], readbook);
  myLibrary.push(book);
  console.log(myLibrary);
})