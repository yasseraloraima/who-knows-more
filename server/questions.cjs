"use strict";

// 1,250 bilingual quiz questions for Who Knows More?
const questions = [
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Hobbit”?",
    "ar": "من مؤلف رواية «The Hobbit»؟",
    "options": [
      "Miguel de Cervantes",
      "Amy Tan",
      "J. R. R. Tolkien",
      "Jules Verne"
    ],
    "optionsAr": [
      "Miguel de Cervantes",
      "Amy Tan",
      "J. R. R. Tolkien",
      "Jules Verne"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0001"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Lord of the Rings”?",
    "ar": "من مؤلف رواية «The Lord of the Rings»؟",
    "options": [
      "J. R. R. Tolkien",
      "Umberto Eco",
      "Stephen King",
      "Lois Lowry"
    ],
    "optionsAr": [
      "J. R. R. Tolkien",
      "Umberto Eco",
      "Stephen King",
      "Lois Lowry"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0002"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Pride and Prejudice”?",
    "ar": "من مؤلف رواية «Pride and Prejudice»؟",
    "options": [
      "Jane Austen",
      "Mark Twain",
      "Chinua Achebe",
      "Arthur Conan Doyle"
    ],
    "optionsAr": [
      "Jane Austen",
      "Mark Twain",
      "Chinua Achebe",
      "Arthur Conan Doyle"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0003"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Emma”?",
    "ar": "من مؤلف رواية «Emma»؟",
    "options": [
      "H. G. Wells",
      "Jane Austen",
      "Emily Brontë",
      "Toni Morrison"
    ],
    "optionsAr": [
      "H. G. Wells",
      "Jane Austen",
      "Emily Brontë",
      "Toni Morrison"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0004"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Sense and Sensibility”?",
    "ar": "من مؤلف رواية «Sense and Sensibility»؟",
    "options": [
      "Miguel de Cervantes",
      "Jane Austen",
      "Ernest Hemingway",
      "Harper Lee"
    ],
    "optionsAr": [
      "Miguel de Cervantes",
      "Jane Austen",
      "Ernest Hemingway",
      "Harper Lee"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0005"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “1984”?",
    "ar": "من مؤلف رواية «1984»؟",
    "options": [
      "Roald Dahl",
      "George Orwell",
      "Antoine de Saint-Exupéry",
      "Arthur Conan Doyle"
    ],
    "optionsAr": [
      "Roald Dahl",
      "George Orwell",
      "Antoine de Saint-Exupéry",
      "Arthur Conan Doyle"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0006"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Animal Farm”?",
    "ar": "من مؤلف رواية «Animal Farm»؟",
    "options": [
      "Lewis Carroll",
      "Yann Martel",
      "Bram Stoker",
      "George Orwell"
    ],
    "optionsAr": [
      "Lewis Carroll",
      "Yann Martel",
      "Bram Stoker",
      "George Orwell"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0007"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “To Kill a Mockingbird”?",
    "ar": "من مؤلف رواية «To Kill a Mockingbird»؟",
    "options": [
      "Harper Lee",
      "Lois Lowry",
      "F. Scott Fitzgerald",
      "Aldous Huxley"
    ],
    "optionsAr": [
      "Harper Lee",
      "Lois Lowry",
      "F. Scott Fitzgerald",
      "Aldous Huxley"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0008"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Great Gatsby”?",
    "ar": "من مؤلف رواية «The Great Gatsby»؟",
    "options": [
      "F. Scott Fitzgerald",
      "J. D. Salinger",
      "E. B. White",
      "Stephen King"
    ],
    "optionsAr": [
      "F. Scott Fitzgerald",
      "J. D. Salinger",
      "E. B. White",
      "Stephen King"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0009"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Moby-Dick”?",
    "ar": "من مؤلف رواية «Moby-Dick»؟",
    "options": [
      "Ernest Hemingway",
      "Gabriel García Márquez",
      "Herman Melville",
      "Mary Shelley"
    ],
    "optionsAr": [
      "Ernest Hemingway",
      "Gabriel García Márquez",
      "Herman Melville",
      "Mary Shelley"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0010"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Frankenstein”?",
    "ar": "من مؤلف رواية «Frankenstein»؟",
    "options": [
      "Ernest Hemingway",
      "Mary Shelley",
      "Lois Lowry",
      "Arthur Conan Doyle"
    ],
    "optionsAr": [
      "Ernest Hemingway",
      "Mary Shelley",
      "Lois Lowry",
      "Arthur Conan Doyle"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0011"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Dracula”?",
    "ar": "من مؤلف رواية «Dracula»؟",
    "options": [
      "Bram Stoker",
      "Charlotte Brontë",
      "H. G. Wells",
      "Gabriel García Márquez"
    ],
    "optionsAr": [
      "Bram Stoker",
      "Charlotte Brontë",
      "H. G. Wells",
      "Gabriel García Márquez"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0012"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Time Machine”?",
    "ar": "من مؤلف رواية «The Time Machine»؟",
    "options": [
      "Yann Martel",
      "H. G. Wells",
      "Amy Tan",
      "E. B. White"
    ],
    "optionsAr": [
      "Yann Martel",
      "H. G. Wells",
      "Amy Tan",
      "E. B. White"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0013"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The War of the Worlds”?",
    "ar": "من مؤلف رواية «The War of the Worlds»؟",
    "options": [
      "Stephen King",
      "Toni Morrison",
      "H. G. Wells",
      "Jane Austen"
    ],
    "optionsAr": [
      "Stephen King",
      "Toni Morrison",
      "H. G. Wells",
      "Jane Austen"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0014"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Twenty Thousand Leagues Under the Seas”?",
    "ar": "من مؤلف رواية «Twenty Thousand Leagues Under the Seas»؟",
    "options": [
      "Cormac McCarthy",
      "Umberto Eco",
      "Jules Verne",
      "Chinua Achebe"
    ],
    "optionsAr": [
      "Cormac McCarthy",
      "Umberto Eco",
      "Jules Verne",
      "Chinua Achebe"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0015"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Around the World in Eighty Days”?",
    "ar": "من مؤلف رواية «Around the World in Eighty Days»؟",
    "options": [
      "Amy Tan",
      "Jules Verne",
      "Aldous Huxley",
      "Paulo Coelho"
    ],
    "optionsAr": [
      "Amy Tan",
      "Jules Verne",
      "Aldous Huxley",
      "Paulo Coelho"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0016"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Adventures of Sherlock Holmes”?",
    "ar": "من مؤلف رواية «The Adventures of Sherlock Holmes»؟",
    "options": [
      "Mark Haddon",
      "Arthur Conan Doyle",
      "Toni Morrison",
      "Agatha Christie"
    ],
    "optionsAr": [
      "Mark Haddon",
      "Arthur Conan Doyle",
      "Toni Morrison",
      "Agatha Christie"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0017"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Murder on the Orient Express”?",
    "ar": "من مؤلف رواية «Murder on the Orient Express»؟",
    "options": [
      "Margaret Atwood",
      "Chinua Achebe",
      "Mark Haddon",
      "Agatha Christie"
    ],
    "optionsAr": [
      "Margaret Atwood",
      "Chinua Achebe",
      "Mark Haddon",
      "Agatha Christie"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0018"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “And Then There Were None”?",
    "ar": "من مؤلف رواية «And Then There Were None»؟",
    "options": [
      "Agatha Christie",
      "F. Scott Fitzgerald",
      "J. D. Salinger",
      "Charles Dickens"
    ],
    "optionsAr": [
      "Agatha Christie",
      "F. Scott Fitzgerald",
      "J. D. Salinger",
      "Charles Dickens"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0019"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Oliver Twist”?",
    "ar": "من مؤلف رواية «Oliver Twist»؟",
    "options": [
      "Lewis Carroll",
      "Louisa May Alcott",
      "Suzanne Collins",
      "Charles Dickens"
    ],
    "optionsAr": [
      "Lewis Carroll",
      "Louisa May Alcott",
      "Suzanne Collins",
      "Charles Dickens"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0020"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Great Expectations”?",
    "ar": "من مؤلف رواية «Great Expectations»؟",
    "options": [
      "Amy Tan",
      "Charles Dickens",
      "Miguel de Cervantes",
      "Stephen King"
    ],
    "optionsAr": [
      "Amy Tan",
      "Charles Dickens",
      "Miguel de Cervantes",
      "Stephen King"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0021"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Jane Eyre”?",
    "ar": "من مؤلف رواية «Jane Eyre»؟",
    "options": [
      "Charlotte Brontë",
      "Emily Brontë",
      "Jane Austen",
      "Arthur Conan Doyle"
    ],
    "optionsAr": [
      "Charlotte Brontë",
      "Emily Brontë",
      "Jane Austen",
      "Arthur Conan Doyle"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0022"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Wuthering Heights”?",
    "ar": "من مؤلف رواية «Wuthering Heights»؟",
    "options": [
      "Suzanne Collins",
      "Cormac McCarthy",
      "Charlotte Brontë",
      "Emily Brontë"
    ],
    "optionsAr": [
      "Suzanne Collins",
      "Cormac McCarthy",
      "Charlotte Brontë",
      "Emily Brontë"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0023"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “War and Peace”?",
    "ar": "من مؤلف رواية «War and Peace»؟",
    "options": [
      "Leo Tolstoy",
      "Markus Zusak",
      "Charles Dickens",
      "J. R. R. Tolkien"
    ],
    "optionsAr": [
      "Leo Tolstoy",
      "Markus Zusak",
      "Charles Dickens",
      "J. R. R. Tolkien"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0024"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Anna Karenina”?",
    "ar": "من مؤلف رواية «Anna Karenina»؟",
    "options": [
      "Umberto Eco",
      "Amy Tan",
      "Arthur Conan Doyle",
      "Leo Tolstoy"
    ],
    "optionsAr": [
      "Umberto Eco",
      "Amy Tan",
      "Arthur Conan Doyle",
      "Leo Tolstoy"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0025"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Crime and Punishment”?",
    "ar": "من مؤلف رواية «Crime and Punishment»؟",
    "options": [
      "Charlotte Brontë",
      "Fyodor Dostoevsky",
      "J. R. R. Tolkien",
      "Antoine de Saint-Exupéry"
    ],
    "optionsAr": [
      "Charlotte Brontë",
      "Fyodor Dostoevsky",
      "J. R. R. Tolkien",
      "Antoine de Saint-Exupéry"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0026"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Brothers Karamazov”?",
    "ar": "من مؤلف رواية «The Brothers Karamazov»؟",
    "options": [
      "Louisa May Alcott",
      "Charles Dickens",
      "Fyodor Dostoevsky",
      "Toni Morrison"
    ],
    "optionsAr": [
      "Louisa May Alcott",
      "Charles Dickens",
      "Fyodor Dostoevsky",
      "Toni Morrison"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0027"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Les Misérables”?",
    "ar": "من مؤلف رواية «Les Misérables»؟",
    "options": [
      "Leo Tolstoy",
      "George Orwell",
      "Victor Hugo",
      "Mark Haddon"
    ],
    "optionsAr": [
      "Leo Tolstoy",
      "George Orwell",
      "Victor Hugo",
      "Mark Haddon"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0028"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Hunchback of Notre-Dame”?",
    "ar": "من مؤلف رواية «The Hunchback of Notre-Dame»؟",
    "options": [
      "Victor Hugo",
      "J. D. Salinger",
      "Stephen King",
      "J. R. R. Tolkien"
    ],
    "optionsAr": [
      "Victor Hugo",
      "J. D. Salinger",
      "Stephen King",
      "J. R. R. Tolkien"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0029"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Don Quixote”?",
    "ar": "من مؤلف رواية «Don Quixote»؟",
    "options": [
      "Aldous Huxley",
      "Paulo Coelho",
      "Miguel de Cervantes",
      "Cormac McCarthy"
    ],
    "optionsAr": [
      "Aldous Huxley",
      "Paulo Coelho",
      "Miguel de Cervantes",
      "Cormac McCarthy"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0030"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “One Hundred Years of Solitude”?",
    "ar": "من مؤلف رواية «One Hundred Years of Solitude»؟",
    "options": [
      "Bram Stoker",
      "Cormac McCarthy",
      "Gabriel García Márquez",
      "Charlotte Brontë"
    ],
    "optionsAr": [
      "Bram Stoker",
      "Cormac McCarthy",
      "Gabriel García Márquez",
      "Charlotte Brontë"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0031"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Love in the Time of Cholera”?",
    "ar": "من مؤلف رواية «Love in the Time of Cholera»؟",
    "options": [
      "J. D. Salinger",
      "Charles Dickens",
      "Frank Herbert",
      "Gabriel García Márquez"
    ],
    "optionsAr": [
      "J. D. Salinger",
      "Charles Dickens",
      "Frank Herbert",
      "Gabriel García Márquez"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0032"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Alchemist”?",
    "ar": "من مؤلف رواية «The Alchemist»؟",
    "options": [
      "Roald Dahl",
      "Paulo Coelho",
      "Yann Martel",
      "Umberto Eco"
    ],
    "optionsAr": [
      "Roald Dahl",
      "Paulo Coelho",
      "Yann Martel",
      "Umberto Eco"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0033"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Little Prince”?",
    "ar": "من مؤلف رواية «The Little Prince»؟",
    "options": [
      "Paulo Coelho",
      "F. Scott Fitzgerald",
      "Toni Morrison",
      "Antoine de Saint-Exupéry"
    ],
    "optionsAr": [
      "Paulo Coelho",
      "F. Scott Fitzgerald",
      "Toni Morrison",
      "Antoine de Saint-Exupéry"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0034"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Alice’s Adventures in Wonderland”?",
    "ar": "من مؤلف رواية «Alice’s Adventures in Wonderland»؟",
    "options": [
      "Lewis Carroll",
      "Alice Walker",
      "Dan Brown",
      "Khaled Hosseini"
    ],
    "optionsAr": [
      "Lewis Carroll",
      "Alice Walker",
      "Dan Brown",
      "Khaled Hosseini"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0035"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Through the Looking-Glass”?",
    "ar": "من مؤلف رواية «Through the Looking-Glass»؟",
    "options": [
      "Margaret Atwood",
      "Lewis Carroll",
      "Jules Verne",
      "Roald Dahl"
    ],
    "optionsAr": [
      "Margaret Atwood",
      "Lewis Carroll",
      "Jules Verne",
      "Roald Dahl"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0036"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Adventures of Huckleberry Finn”?",
    "ar": "من مؤلف رواية «Adventures of Huckleberry Finn»؟",
    "options": [
      "Victor Hugo",
      "Mark Twain",
      "Roald Dahl",
      "Lewis Carroll"
    ],
    "optionsAr": [
      "Victor Hugo",
      "Mark Twain",
      "Roald Dahl",
      "Lewis Carroll"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0037"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Adventures of Tom Sawyer”?",
    "ar": "من مؤلف رواية «The Adventures of Tom Sawyer»؟",
    "options": [
      "Ernest Hemingway",
      "Mark Twain",
      "Suzanne Collins",
      "Victor Hugo"
    ],
    "optionsAr": [
      "Ernest Hemingway",
      "Mark Twain",
      "Suzanne Collins",
      "Victor Hugo"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0038"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Little Women”?",
    "ar": "من مؤلف رواية «Little Women»؟",
    "options": [
      "Roald Dahl",
      "Chinua Achebe",
      "Louisa May Alcott",
      "Agatha Christie"
    ],
    "optionsAr": [
      "Roald Dahl",
      "Chinua Achebe",
      "Louisa May Alcott",
      "Agatha Christie"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0039"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Chronicles of Narnia”?",
    "ar": "من مؤلف رواية «The Chronicles of Narnia»؟",
    "options": [
      "C. S. Lewis",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "George Orwell"
    ],
    "optionsAr": [
      "C. S. Lewis",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "George Orwell"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0040"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Lion, the Witch and the Wardrobe”?",
    "ar": "من مؤلف رواية «The Lion, the Witch and the Wardrobe»؟",
    "options": [
      "C. S. Lewis",
      "Leo Tolstoy",
      "Roald Dahl",
      "Agatha Christie"
    ],
    "optionsAr": [
      "C. S. Lewis",
      "Leo Tolstoy",
      "Roald Dahl",
      "Agatha Christie"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0041"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Hunger Games”?",
    "ar": "من مؤلف رواية «The Hunger Games»؟",
    "options": [
      "Aldous Huxley",
      "Suzanne Collins",
      "Khaled Hosseini",
      "Jane Austen"
    ],
    "optionsAr": [
      "Aldous Huxley",
      "Suzanne Collins",
      "Khaled Hosseini",
      "Jane Austen"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0042"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Catching Fire”?",
    "ar": "من مؤلف رواية «Catching Fire»؟",
    "options": [
      "Yann Martel",
      "Suzanne Collins",
      "Bram Stoker",
      "Markus Zusak"
    ],
    "optionsAr": [
      "Yann Martel",
      "Suzanne Collins",
      "Bram Stoker",
      "Markus Zusak"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0043"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Shining”?",
    "ar": "من مؤلف رواية «The Shining»؟",
    "options": [
      "Mary Shelley",
      "Stephen King",
      "Alice Walker",
      "Louisa May Alcott"
    ],
    "optionsAr": [
      "Mary Shelley",
      "Stephen King",
      "Alice Walker",
      "Louisa May Alcott"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0044"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “It”?",
    "ar": "من مؤلف رواية «It»؟",
    "options": [
      "Stephen King",
      "Frank Herbert",
      "Fyodor Dostoevsky",
      "Margaret Atwood"
    ],
    "optionsAr": [
      "Stephen King",
      "Frank Herbert",
      "Fyodor Dostoevsky",
      "Margaret Atwood"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0045"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Da Vinci Code”?",
    "ar": "من مؤلف رواية «The Da Vinci Code»؟",
    "options": [
      "J. D. Salinger",
      "George Orwell",
      "Dan Brown",
      "Toni Morrison"
    ],
    "optionsAr": [
      "J. D. Salinger",
      "George Orwell",
      "Dan Brown",
      "Toni Morrison"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0046"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Angels & Demons”?",
    "ar": "من مؤلف رواية «Angels & Demons»؟",
    "options": [
      "E. B. White",
      "Roald Dahl",
      "Leo Tolstoy",
      "Dan Brown"
    ],
    "optionsAr": [
      "E. B. White",
      "Roald Dahl",
      "Leo Tolstoy",
      "Dan Brown"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0047"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Kite Runner”?",
    "ar": "من مؤلف رواية «The Kite Runner»؟",
    "options": [
      "Louisa May Alcott",
      "Khaled Hosseini",
      "Cormac McCarthy",
      "Herman Melville"
    ],
    "optionsAr": [
      "Louisa May Alcott",
      "Khaled Hosseini",
      "Cormac McCarthy",
      "Herman Melville"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0048"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “A Thousand Splendid Suns”?",
    "ar": "من مؤلف رواية «A Thousand Splendid Suns»؟",
    "options": [
      "Roald Dahl",
      "Arthur Conan Doyle",
      "Khaled Hosseini",
      "Umberto Eco"
    ],
    "optionsAr": [
      "Roald Dahl",
      "Arthur Conan Doyle",
      "Khaled Hosseini",
      "Umberto Eco"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0049"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Things Fall Apart”?",
    "ar": "من مؤلف رواية «Things Fall Apart»؟",
    "options": [
      "Jules Verne",
      "Chinua Achebe",
      "Mark Haddon",
      "F. Scott Fitzgerald"
    ],
    "optionsAr": [
      "Jules Verne",
      "Chinua Achebe",
      "Mark Haddon",
      "F. Scott Fitzgerald"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0050"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Beloved”?",
    "ar": "من مؤلف رواية «Beloved»؟",
    "options": [
      "Stephen King",
      "Ernest Hemingway",
      "Toni Morrison",
      "Paulo Coelho"
    ],
    "optionsAr": [
      "Stephen King",
      "Ernest Hemingway",
      "Toni Morrison",
      "Paulo Coelho"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0051"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Handmaid’s Tale”?",
    "ar": "من مؤلف رواية «The Handmaid’s Tale»؟",
    "options": [
      "J. D. Salinger",
      "Jules Verne",
      "Margaret Atwood",
      "Victor Hugo"
    ],
    "optionsAr": [
      "J. D. Salinger",
      "Jules Verne",
      "Margaret Atwood",
      "Victor Hugo"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0052"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Brave New World”?",
    "ar": "من مؤلف رواية «Brave New World»؟",
    "options": [
      "Aldous Huxley",
      "Amy Tan",
      "Paulo Coelho",
      "Charlotte Brontë"
    ],
    "optionsAr": [
      "Aldous Huxley",
      "Amy Tan",
      "Paulo Coelho",
      "Charlotte Brontë"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0053"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Fahrenheit 451”?",
    "ar": "من مؤلف رواية «Fahrenheit 451»؟",
    "options": [
      "Chinua Achebe",
      "Miguel de Cervantes",
      "Lewis Carroll",
      "Ray Bradbury"
    ],
    "optionsAr": [
      "Chinua Achebe",
      "Miguel de Cervantes",
      "Lewis Carroll",
      "Ray Bradbury"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0054"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Martian Chronicles”?",
    "ar": "من مؤلف رواية «The Martian Chronicles»؟",
    "options": [
      "J. D. Salinger",
      "Jane Austen",
      "F. Scott Fitzgerald",
      "Ray Bradbury"
    ],
    "optionsAr": [
      "J. D. Salinger",
      "Jane Austen",
      "F. Scott Fitzgerald",
      "Ray Bradbury"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0055"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Dune”?",
    "ar": "من مؤلف رواية «Dune»؟",
    "options": [
      "Aldous Huxley",
      "Arthur Conan Doyle",
      "Chinua Achebe",
      "Frank Herbert"
    ],
    "optionsAr": [
      "Aldous Huxley",
      "Arthur Conan Doyle",
      "Chinua Achebe",
      "Frank Herbert"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0056"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Name of the Rose”?",
    "ar": "من مؤلف رواية «The Name of the Rose»؟",
    "options": [
      "Umberto Eco",
      "Amy Tan",
      "Fyodor Dostoevsky",
      "Mark Haddon"
    ],
    "optionsAr": [
      "Umberto Eco",
      "Amy Tan",
      "Fyodor Dostoevsky",
      "Mark Haddon"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0057"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Old Man and the Sea”?",
    "ar": "من مؤلف رواية «The Old Man and the Sea»؟",
    "options": [
      "Yann Martel",
      "Harper Lee",
      "J. R. R. Tolkien",
      "Ernest Hemingway"
    ],
    "optionsAr": [
      "Yann Martel",
      "Harper Lee",
      "J. R. R. Tolkien",
      "Ernest Hemingway"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0058"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “A Farewell to Arms”?",
    "ar": "من مؤلف رواية «A Farewell to Arms»؟",
    "options": [
      "Ernest Hemingway",
      "Fyodor Dostoevsky",
      "Paulo Coelho",
      "Chinua Achebe"
    ],
    "optionsAr": [
      "Ernest Hemingway",
      "Fyodor Dostoevsky",
      "Paulo Coelho",
      "Chinua Achebe"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0059"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Catcher in the Rye”?",
    "ar": "من مؤلف رواية «The Catcher in the Rye»؟",
    "options": [
      "Gabriel García Márquez",
      "J. D. Salinger",
      "Aldous Huxley",
      "Harper Lee"
    ],
    "optionsAr": [
      "Gabriel García Márquez",
      "J. D. Salinger",
      "Aldous Huxley",
      "Harper Lee"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0060"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Color Purple”?",
    "ar": "من مؤلف رواية «The Color Purple»؟",
    "options": [
      "Umberto Eco",
      "Herman Melville",
      "J. D. Salinger",
      "Alice Walker"
    ],
    "optionsAr": [
      "Umberto Eco",
      "Herman Melville",
      "J. D. Salinger",
      "Alice Walker"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0061"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Joy Luck Club”?",
    "ar": "من مؤلف رواية «The Joy Luck Club»؟",
    "options": [
      "Jane Austen",
      "Lois Lowry",
      "Louisa May Alcott",
      "Amy Tan"
    ],
    "optionsAr": [
      "Jane Austen",
      "Lois Lowry",
      "Louisa May Alcott",
      "Amy Tan"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0062"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Book Thief”?",
    "ar": "من مؤلف رواية «The Book Thief»؟",
    "options": [
      "Miguel de Cervantes",
      "Lois Lowry",
      "Fyodor Dostoevsky",
      "Markus Zusak"
    ],
    "optionsAr": [
      "Miguel de Cervantes",
      "Lois Lowry",
      "Fyodor Dostoevsky",
      "Markus Zusak"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0063"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Life of Pi”?",
    "ar": "من مؤلف رواية «Life of Pi»؟",
    "options": [
      "Yann Martel",
      "Jules Verne",
      "Mark Haddon",
      "Frank Herbert"
    ],
    "optionsAr": [
      "Yann Martel",
      "Jules Verne",
      "Mark Haddon",
      "Frank Herbert"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0064"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Road”?",
    "ar": "من مؤلف رواية «The Road»؟",
    "options": [
      "Suzanne Collins",
      "Gabriel García Márquez",
      "Cormac McCarthy",
      "Harper Lee"
    ],
    "optionsAr": [
      "Suzanne Collins",
      "Gabriel García Márquez",
      "Cormac McCarthy",
      "Harper Lee"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0065"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Giver”?",
    "ar": "من مؤلف رواية «The Giver»؟",
    "options": [
      "J. D. Salinger",
      "Toni Morrison",
      "Lois Lowry",
      "Victor Hugo"
    ],
    "optionsAr": [
      "J. D. Salinger",
      "Toni Morrison",
      "Lois Lowry",
      "Victor Hugo"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0066"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Charlotte’s Web”?",
    "ar": "من مؤلف رواية «Charlotte’s Web»؟",
    "options": [
      "Stephen King",
      "Jules Verne",
      "Louisa May Alcott",
      "E. B. White"
    ],
    "optionsAr": [
      "Stephen King",
      "Jules Verne",
      "Louisa May Alcott",
      "E. B. White"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0067"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Matilda”?",
    "ar": "من مؤلف رواية «Matilda»؟",
    "options": [
      "Amy Tan",
      "Margaret Atwood",
      "Louisa May Alcott",
      "Roald Dahl"
    ],
    "optionsAr": [
      "Amy Tan",
      "Margaret Atwood",
      "Louisa May Alcott",
      "Roald Dahl"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0068"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “Charlie and the Chocolate Factory”?",
    "ar": "من مؤلف رواية «Charlie and the Chocolate Factory»؟",
    "options": [
      "George Orwell",
      "Lewis Carroll",
      "Roald Dahl",
      "Margaret Atwood"
    ],
    "optionsAr": [
      "George Orwell",
      "Lewis Carroll",
      "Roald Dahl",
      "Margaret Atwood"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0069"
  },
  {
    "category": "General Knowledge",
    "en": "Who wrote “The Curious Incident of the Dog in the Night-Time”?",
    "ar": "من مؤلف رواية «The Curious Incident of the Dog in the Night-Time»؟",
    "options": [
      "Aldous Huxley",
      "Amy Tan",
      "Mark Haddon",
      "Ernest Hemingway"
    ],
    "optionsAr": [
      "Aldous Huxley",
      "Amy Tan",
      "Mark Haddon",
      "Ernest Hemingway"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0070"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the World Wide Web?",
    "ar": "من يُنسب إليه عادةً ابتكار the World Wide Web؟",
    "options": [
      "Richard Trevithick",
      "Jacob Perkins",
      "Tim Berners-Lee",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "Richard Trevithick",
      "Jacob Perkins",
      "Tim Berners-Lee",
      "Louis Pasteur"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0071"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the dynamite?",
    "ar": "من يُنسب إليه عادةً ابتكار the dynamite؟",
    "options": [
      "Dmitri Mendeleev",
      "Richard Trevithick",
      "Alfred Nobel",
      "René Laennec"
    ],
    "optionsAr": [
      "Dmitri Mendeleev",
      "Richard Trevithick",
      "Alfred Nobel",
      "René Laennec"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0072"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the Braille writing system?",
    "ar": "من يُنسب إليه عادةً ابتكار the Braille writing system؟",
    "options": [
      "Daniel Gabriel Fahrenheit",
      "Louis Braille",
      "Edward Jenner",
      "Alessandro Volta"
    ],
    "optionsAr": [
      "Daniel Gabriel Fahrenheit",
      "Louis Braille",
      "Edward Jenner",
      "Alessandro Volta"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0073"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the diesel engine?",
    "ar": "من يُنسب إليه عادةً ابتكار the diesel engine؟",
    "options": [
      "Rudolf Diesel",
      "Charles Babbage",
      "Louis Pasteur",
      "James Watt"
    ],
    "optionsAr": [
      "Rudolf Diesel",
      "Charles Babbage",
      "Louis Pasteur",
      "James Watt"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0074"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical telephone?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical telephone؟",
    "options": [
      "Ada Lovelace",
      "Michael Faraday",
      "Alexander Graham Bell",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "optionsAr": [
      "Ada Lovelace",
      "Michael Faraday",
      "Alexander Graham Bell",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0075"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the phonograph?",
    "ar": "من يُنسب إليه عادةً ابتكار the phonograph؟",
    "options": [
      "Thomas Edison",
      "Ada Lovelace",
      "Eli Whitney",
      "Wilhelm Conrad Röntgen"
    ],
    "optionsAr": [
      "Thomas Edison",
      "Ada Lovelace",
      "Eli Whitney",
      "Wilhelm Conrad Röntgen"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0076"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the steam engine improvements?",
    "ar": "من يُنسب إليه عادةً ابتكار the steam engine improvements؟",
    "options": [
      "Robert H. Goddard",
      "Ada Lovelace",
      "Norman Joseph Woodland and Bernard Silver",
      "James Watt"
    ],
    "optionsAr": [
      "Robert H. Goddard",
      "Ada Lovelace",
      "Norman Joseph Woodland and Bernard Silver",
      "James Watt"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0077"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful airplane?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful airplane؟",
    "options": [
      "the Wright brothers",
      "Louis Daguerre",
      "Johannes Gutenberg",
      "Chester Carlson"
    ],
    "optionsAr": [
      "the Wright brothers",
      "Louis Daguerre",
      "Johannes Gutenberg",
      "Chester Carlson"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0078"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric light bulb?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric light bulb؟",
    "options": [
      "Joseph Murray",
      "Douglas Engelbart",
      "Thomas Edison",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino"
    ],
    "optionsAr": [
      "Joseph Murray",
      "Douglas Engelbart",
      "Thomas Edison",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0079"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the printing press in Europe?",
    "ar": "من يُنسب إليه عادةً ابتكار the printing press in Europe؟",
    "options": [
      "Johannes Gutenberg",
      "John Mauchly and J. Presper Eckert",
      "Wilhelm Conrad Röntgen",
      "Christopher Latham Sholes"
    ],
    "optionsAr": [
      "Johannes Gutenberg",
      "John Mauchly and J. Presper Eckert",
      "Wilhelm Conrad Röntgen",
      "Christopher Latham Sholes"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0080"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the periodic table?",
    "ar": "من يُنسب إليه عادةً ابتكار the periodic table؟",
    "options": [
      "Dmitri Mendeleev",
      "Elisha Otis",
      "Rosalind Franklin",
      "the Soviet space program"
    ],
    "optionsAr": [
      "Dmitri Mendeleev",
      "Elisha Otis",
      "Rosalind Franklin",
      "the Soviet space program"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0081"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used smallpox vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used smallpox vaccine؟",
    "options": [
      "Charles Babbage",
      "Ray Tomlinson",
      "Jack Kilby",
      "Edward Jenner"
    ],
    "optionsAr": [
      "Charles Babbage",
      "Ray Tomlinson",
      "Jack Kilby",
      "Edward Jenner"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0082"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of penicillin?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of penicillin؟",
    "options": [
      "Alexander Fleming",
      "Joseph Lister",
      "Dmitri Mendeleev",
      "Michael Faraday"
    ],
    "optionsAr": [
      "Alexander Fleming",
      "Joseph Lister",
      "Dmitri Mendeleev",
      "Michael Faraday"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0083"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first polio vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first polio vaccine؟",
    "options": [
      "Jonas Salk",
      "John Logie Baird",
      "Charles Babbage",
      "Nikola Tesla"
    ],
    "optionsAr": [
      "Jonas Salk",
      "John Logie Baird",
      "Charles Babbage",
      "Nikola Tesla"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0084"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical typewriter?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical typewriter؟",
    "options": [
      "Nikola Tesla",
      "Christopher Latham Sholes",
      "Werner von Siemens",
      "Alfred Nobel"
    ],
    "optionsAr": [
      "Nikola Tesla",
      "Christopher Latham Sholes",
      "Werner von Siemens",
      "Alfred Nobel"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0085"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the cotton gin?",
    "ar": "من يُنسب إليه عادةً ابتكار the cotton gin؟",
    "options": [
      "Eli Whitney",
      "John Logie Baird",
      "Douglas Engelbart",
      "David Bushnell"
    ],
    "optionsAr": [
      "Eli Whitney",
      "John Logie Baird",
      "Douglas Engelbart",
      "David Bushnell"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0086"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the modern sewing machine?",
    "ar": "من يُنسب إليه عادةً ابتكار the modern sewing machine؟",
    "options": [
      "Evangelista Torricelli",
      "Ada Lovelace",
      "Thomas Edison",
      "Isaac Singer"
    ],
    "optionsAr": [
      "Evangelista Torricelli",
      "Ada Lovelace",
      "Thomas Edison",
      "Isaac Singer"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0087"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the diesel motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the diesel motor؟",
    "options": [
      "Rudolf Diesel",
      "Richard Trevithick",
      "Willis Carrier",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "Rudolf Diesel",
      "Richard Trevithick",
      "Willis Carrier",
      "Douglas Engelbart"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0088"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the safety elevator?",
    "ar": "من يُنسب إليه عادةً ابتكار the safety elevator؟",
    "options": [
      "Michael Faraday",
      "Ada Lovelace",
      "Elisha Otis",
      "James Chadwick"
    ],
    "optionsAr": [
      "Michael Faraday",
      "Ada Lovelace",
      "Elisha Otis",
      "James Chadwick"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0089"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical incandescent lamp?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical incandescent lamp؟",
    "options": [
      "Thomas Edison",
      "Alessandro Volta",
      "Nikola Tesla",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "optionsAr": [
      "Thomas Edison",
      "Alessandro Volta",
      "Nikola Tesla",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0090"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the radio control system?",
    "ar": "من يُنسب إليه عادةً ابتكار the radio control system؟",
    "options": [
      "the Soviet space program",
      "Henri Becquerel",
      "Rosalind Franklin",
      "Nikola Tesla"
    ],
    "optionsAr": [
      "the Soviet space program",
      "Henri Becquerel",
      "Rosalind Franklin",
      "Nikola Tesla"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0091"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the alternating-current induction motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the alternating-current induction motor؟",
    "options": [
      "Charles Babbage",
      "Christopher Latham Sholes",
      "Nikola Tesla",
      "René Laennec"
    ],
    "optionsAr": [
      "Charles Babbage",
      "Christopher Latham Sholes",
      "Nikola Tesla",
      "René Laennec"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0092"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first computer algorithm?",
    "ar": "من يُنسب إليه عادةً ابتكار the first computer algorithm؟",
    "options": [
      "Alessandro Volta",
      "Ada Lovelace",
      "John Logie Baird",
      "Daniel Gabriel Fahrenheit"
    ],
    "optionsAr": [
      "Alessandro Volta",
      "Ada Lovelace",
      "John Logie Baird",
      "Daniel Gabriel Fahrenheit"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0093"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the analytical engine design?",
    "ar": "من يُنسب إليه عادةً ابتكار the analytical engine design؟",
    "options": [
      "Thomas Edison",
      "Charles Babbage",
      "Eli Whitney",
      "Robert H. Goddard"
    ],
    "optionsAr": [
      "Thomas Edison",
      "Charles Babbage",
      "Eli Whitney",
      "Robert H. Goddard"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0094"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first general-purpose electronic computer design?",
    "ar": "من يُنسب إليه عادةً ابتكار the first general-purpose electronic computer design؟",
    "options": [
      "J. J. Thomson",
      "John Mauchly and J. Presper Eckert",
      "Christiaan Barnard",
      "Rosalind Franklin"
    ],
    "optionsAr": [
      "J. J. Thomson",
      "John Mauchly and J. Presper Eckert",
      "Christiaan Barnard",
      "Rosalind Franklin"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0095"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful kidney transplant operation?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful kidney transplant operation؟",
    "options": [
      "René Laennec",
      "Jonas Salk",
      "Joseph Murray",
      "Ada Lovelace"
    ],
    "optionsAr": [
      "René Laennec",
      "Jonas Salk",
      "Joseph Murray",
      "Ada Lovelace"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0096"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful heart transplant operation?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful heart transplant operation؟",
    "options": [
      "Dmitri Mendeleev",
      "Joseph Murray",
      "John Bardeen, Walter Brattain and William Shockley",
      "Christiaan Barnard"
    ],
    "optionsAr": [
      "Dmitri Mendeleev",
      "Joseph Murray",
      "John Bardeen, Walter Brattain and William Shockley",
      "Christiaan Barnard"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0097"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first artificial satellite?",
    "ar": "من يُنسب إليه عادةً ابتكار the first artificial satellite؟",
    "options": [
      "the Soviet space program",
      "Jonas Salk",
      "J. J. Thomson",
      "Richard Trevithick"
    ],
    "optionsAr": [
      "the Soviet space program",
      "Jonas Salk",
      "J. J. Thomson",
      "Richard Trevithick"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0098"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first liquid-fueled rocket?",
    "ar": "من يُنسب إليه عادةً ابتكار the first liquid-fueled rocket؟",
    "options": [
      "Louis Daguerre",
      "Robert H. Goddard",
      "Alessandro Volta",
      "Werner von Siemens"
    ],
    "optionsAr": [
      "Louis Daguerre",
      "Robert H. Goddard",
      "Alessandro Volta",
      "Werner von Siemens"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0099"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical helicopter?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical helicopter؟",
    "options": [
      "J. J. Thomson",
      "Louis Pasteur",
      "Igor Sikorsky",
      "Albert Sabin"
    ],
    "optionsAr": [
      "J. J. Thomson",
      "Louis Pasteur",
      "Igor Sikorsky",
      "Albert Sabin"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0100"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first commercial barcode system?",
    "ar": "من يُنسب إليه عادةً ابتكار the first commercial barcode system؟",
    "options": [
      "Norman Joseph Woodland and Bernard Silver",
      "Alfred Nobel",
      "Dmitri Mendeleev",
      "Ada Lovelace"
    ],
    "optionsAr": [
      "Norman Joseph Woodland and Bernard Silver",
      "Alfred Nobel",
      "Dmitri Mendeleev",
      "Ada Lovelace"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0101"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first laser?",
    "ar": "من يُنسب إليه عادةً ابتكار the first laser؟",
    "options": [
      "Alexander Graham Bell",
      "Wilhelm Conrad Röntgen",
      "the Soviet space program",
      "Theodore Maiman"
    ],
    "optionsAr": [
      "Alexander Graham Bell",
      "Wilhelm Conrad Röntgen",
      "the Soviet space program",
      "Theodore Maiman"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0102"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working transistor?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working transistor؟",
    "options": [
      "Christopher Latham Sholes",
      "Werner von Siemens",
      "Thomas Edison",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "optionsAr": [
      "Christopher Latham Sholes",
      "Werner von Siemens",
      "Thomas Edison",
      "John Bardeen, Walter Brattain and William Shockley"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0103"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical photocopier?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical photocopier؟",
    "options": [
      "Jacob Perkins",
      "Alfred Nobel",
      "John Logie Baird",
      "Chester Carlson"
    ],
    "optionsAr": [
      "Jacob Perkins",
      "Alfred Nobel",
      "John Logie Baird",
      "Chester Carlson"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0104"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern air conditioner?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern air conditioner؟",
    "options": [
      "Alexander Graham Bell",
      "Isaac Singer",
      "David Bushnell",
      "Willis Carrier"
    ],
    "optionsAr": [
      "Alexander Graham Bell",
      "Isaac Singer",
      "David Bushnell",
      "Willis Carrier"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0105"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical refrigerator?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical refrigerator؟",
    "options": [
      "Louis Pasteur",
      "Christiaan Barnard",
      "Joseph Lister",
      "Jacob Perkins"
    ],
    "optionsAr": [
      "Louis Pasteur",
      "Christiaan Barnard",
      "Joseph Lister",
      "Jacob Perkins"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0106"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful powered flight in Europe?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful powered flight in Europe؟",
    "options": [
      "Alessandro Volta",
      "Alberto Santos-Dumont",
      "John Logie Baird",
      "Ray Tomlinson"
    ],
    "optionsAr": [
      "Alessandro Volta",
      "Alberto Santos-Dumont",
      "John Logie Baird",
      "Ray Tomlinson"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0107"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical submarine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical submarine؟",
    "options": [
      "Robert H. Goddard",
      "David Bushnell",
      "Charles Babbage",
      "John Logie Baird"
    ],
    "optionsAr": [
      "Robert H. Goddard",
      "David Bushnell",
      "Charles Babbage",
      "John Logie Baird"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0108"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working steam locomotive?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working steam locomotive؟",
    "options": [
      "Richard Trevithick",
      "Edward Jenner",
      "Thomas Edison",
      "René Laennec"
    ],
    "optionsAr": [
      "Richard Trevithick",
      "Edward Jenner",
      "Thomas Edison",
      "René Laennec"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0109"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric battery?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric battery؟",
    "options": [
      "Dmitri Mendeleev",
      "Christopher Latham Sholes",
      "Theodore Maiman",
      "Alessandro Volta"
    ],
    "optionsAr": [
      "Dmitri Mendeleev",
      "Christopher Latham Sholes",
      "Theodore Maiman",
      "Alessandro Volta"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0110"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical mechanical television system?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical mechanical television system؟",
    "options": [
      "Isaac Singer",
      "John Logie Baird",
      "Alfred Nobel",
      "Edward Jenner"
    ],
    "optionsAr": [
      "Isaac Singer",
      "John Logie Baird",
      "Alfred Nobel",
      "Edward Jenner"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0111"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful polio vaccine used widely?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful polio vaccine used widely؟",
    "options": [
      "Willis Carrier",
      "Jonas Salk",
      "Ray Tomlinson",
      "Martin Cooper"
    ],
    "optionsAr": [
      "Willis Carrier",
      "Jonas Salk",
      "Ray Tomlinson",
      "Martin Cooper"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0112"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful rabies vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful rabies vaccine؟",
    "options": [
      "Douglas Engelbart",
      "John Logie Baird",
      "Louis Pasteur",
      "Robert Noyce"
    ],
    "optionsAr": [
      "Douglas Engelbart",
      "John Logie Baird",
      "Louis Pasteur",
      "Robert Noyce"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0113"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful anthrax vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful anthrax vaccine؟",
    "options": [
      "Tim Berners-Lee",
      "Louis Pasteur",
      "Henri Becquerel",
      "James Watt"
    ],
    "optionsAr": [
      "Tim Berners-Lee",
      "Louis Pasteur",
      "Henri Becquerel",
      "James Watt"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0114"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern antiseptic surgery method?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern antiseptic surgery method؟",
    "options": [
      "James Chadwick",
      "Elisha Otis",
      "J. J. Thomson",
      "Joseph Lister"
    ],
    "optionsAr": [
      "James Chadwick",
      "Elisha Otis",
      "J. J. Thomson",
      "Joseph Lister"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0115"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical stethoscope?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical stethoscope؟",
    "options": [
      "René Laennec",
      "Norman Joseph Woodland and Bernard Silver",
      "Johannes Gutenberg",
      "James Watt"
    ],
    "optionsAr": [
      "René Laennec",
      "Norman Joseph Woodland and Bernard Silver",
      "Johannes Gutenberg",
      "James Watt"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0116"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical mercury thermometer?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical mercury thermometer؟",
    "options": [
      "Frederick Banting and Charles Best",
      "Louis Daguerre",
      "Daniel Gabriel Fahrenheit",
      "Igor Sikorsky"
    ],
    "optionsAr": [
      "Frederick Banting and Charles Best",
      "Louis Daguerre",
      "Daniel Gabriel Fahrenheit",
      "Igor Sikorsky"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0117"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical barometer?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical barometer؟",
    "options": [
      "Alfred Nobel",
      "Evangelista Torricelli",
      "Henri Becquerel",
      "Bryan Allen and Paul MacCready’s team"
    ],
    "optionsAr": [
      "Alfred Nobel",
      "Evangelista Torricelli",
      "Henri Becquerel",
      "Bryan Allen and Paul MacCready’s team"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0118"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used type of vaccination against smallpox?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used type of vaccination against smallpox؟",
    "options": [
      "Edward Jenner",
      "Igor Sikorsky",
      "Louis Daguerre",
      "Isaac Singer"
    ],
    "optionsAr": [
      "Edward Jenner",
      "Igor Sikorsky",
      "Louis Daguerre",
      "Isaac Singer"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0119"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical electric motor?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical electric motor؟",
    "options": [
      "Douglas Engelbart",
      "Nikola Tesla",
      "Edward Jenner",
      "Michael Faraday"
    ],
    "optionsAr": [
      "Douglas Engelbart",
      "Nikola Tesla",
      "Edward Jenner",
      "Michael Faraday"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0120"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical dynamo?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical dynamo؟",
    "options": [
      "Werner von Siemens",
      "Louis Braille",
      "John Bardeen, Walter Brattain and William Shockley",
      "Richard Trevithick"
    ],
    "optionsAr": [
      "Werner von Siemens",
      "Louis Braille",
      "John Bardeen, Walter Brattain and William Shockley",
      "Richard Trevithick"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0121"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first modern periodic table arrangement?",
    "ar": "من يُنسب إليه عادةً ابتكار the first modern periodic table arrangement؟",
    "options": [
      "Richard Trevithick",
      "Dmitri Mendeleev",
      "Alfred Nobel",
      "Martin Cooper"
    ],
    "optionsAr": [
      "Richard Trevithick",
      "Dmitri Mendeleev",
      "Alfred Nobel",
      "Martin Cooper"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0122"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful human-powered flight across the English Channel?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful human-powered flight across the English Channel؟",
    "options": [
      "Louis Pasteur",
      "Nicolas-Joseph Cugnot",
      "Bryan Allen and Paul MacCready’s team",
      "Daniel Gabriel Fahrenheit"
    ],
    "optionsAr": [
      "Louis Pasteur",
      "Nicolas-Joseph Cugnot",
      "Bryan Allen and Paul MacCready’s team",
      "Daniel Gabriel Fahrenheit"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0123"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first computer mouse prototype?",
    "ar": "من يُنسب إليه عادةً ابتكار the first computer mouse prototype؟",
    "options": [
      "Douglas Engelbart",
      "Rudolf Diesel",
      "Richard Trevithick",
      "Alberto Santos-Dumont"
    ],
    "optionsAr": [
      "Douglas Engelbart",
      "Rudolf Diesel",
      "Richard Trevithick",
      "Alberto Santos-Dumont"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0124"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first graphical computer mouse design?",
    "ar": "من يُنسب إليه عادةً ابتكار the first graphical computer mouse design؟",
    "options": [
      "Jonas Salk",
      "Louis Daguerre",
      "Christopher Latham Sholes",
      "Douglas Engelbart"
    ],
    "optionsAr": [
      "Jonas Salk",
      "Louis Daguerre",
      "Christopher Latham Sholes",
      "Douglas Engelbart"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0125"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical integrated circuit?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical integrated circuit؟",
    "options": [
      "Ray Tomlinson",
      "Martin Cooper",
      "Alessandro Volta",
      "Jack Kilby"
    ],
    "optionsAr": [
      "Ray Tomlinson",
      "Martin Cooper",
      "Alessandro Volta",
      "Jack Kilby"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0126"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first planar integrated circuit?",
    "ar": "من يُنسب إليه عادةً ابتكار the first planar integrated circuit؟",
    "options": [
      "Jonas Salk",
      "Robert Noyce",
      "Ray Tomlinson",
      "Richard Trevithick"
    ],
    "optionsAr": [
      "Jonas Salk",
      "Robert Noyce",
      "Ray Tomlinson",
      "Richard Trevithick"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0127"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first working mobile phone prototype?",
    "ar": "من يُنسب إليه عادةً ابتكار the first working mobile phone prototype؟",
    "options": [
      "Douglas Engelbart",
      "Joseph Lister",
      "Martin Cooper",
      "Louis Braille"
    ],
    "optionsAr": [
      "Douglas Engelbart",
      "Joseph Lister",
      "Martin Cooper",
      "Louis Braille"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0128"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical lithium-ion battery?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical lithium-ion battery؟",
    "options": [
      "Rosalind Franklin",
      "Ray Tomlinson",
      "James Chadwick",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino"
    ],
    "optionsAr": [
      "Rosalind Franklin",
      "Ray Tomlinson",
      "James Chadwick",
      "John Goodenough, M. Stanley Whittingham and Akira Yoshino"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0129"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first web browser and web server?",
    "ar": "من يُنسب إليه عادةً ابتكار the first web browser and web server؟",
    "options": [
      "Ada Lovelace",
      "Louis Daguerre",
      "Tim Berners-Lee",
      "Joseph Lister"
    ],
    "optionsAr": [
      "Ada Lovelace",
      "Louis Daguerre",
      "Tim Berners-Lee",
      "Joseph Lister"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0130"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first email system on ARPANET?",
    "ar": "من يُنسب إليه عادةً ابتكار the first email system on ARPANET؟",
    "options": [
      "the Soviet space program",
      "Ray Tomlinson",
      "Joseph Murray",
      "Thomas Edison"
    ],
    "optionsAr": [
      "the Soviet space program",
      "Ray Tomlinson",
      "Joseph Murray",
      "Thomas Edison"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0131"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful human insulin treatment?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful human insulin treatment؟",
    "options": [
      "Bryan Allen and Paul MacCready’s team",
      "Louis Pasteur",
      "Frederick Banting and Charles Best",
      "J. J. Thomson"
    ],
    "optionsAr": [
      "Bryan Allen and Paul MacCready’s team",
      "Louis Pasteur",
      "Frederick Banting and Charles Best",
      "J. J. Thomson"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0132"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of X-rays?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of X-rays؟",
    "options": [
      "Wilhelm Conrad Röntgen",
      "Alexander Graham Bell",
      "Norman Joseph Woodland and Bernard Silver",
      "Alberto Santos-Dumont"
    ],
    "optionsAr": [
      "Wilhelm Conrad Röntgen",
      "Alexander Graham Bell",
      "Norman Joseph Woodland and Bernard Silver",
      "Alberto Santos-Dumont"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0133"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of radioactivity?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of radioactivity؟",
    "options": [
      "Alessandro Volta",
      "Werner von Siemens",
      "James Chadwick",
      "Henri Becquerel"
    ],
    "optionsAr": [
      "Alessandro Volta",
      "Werner von Siemens",
      "James Chadwick",
      "Henri Becquerel"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0134"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the electron?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the electron؟",
    "options": [
      "Werner von Siemens",
      "J. J. Thomson",
      "James Chadwick",
      "Louis Pasteur"
    ],
    "optionsAr": [
      "Werner von Siemens",
      "J. J. Thomson",
      "James Chadwick",
      "Louis Pasteur"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0135"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the neutron?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the neutron؟",
    "options": [
      "James Chadwick",
      "Christiaan Barnard",
      "Bryan Allen and Paul MacCready’s team",
      "Elisha Otis"
    ],
    "optionsAr": [
      "James Chadwick",
      "Christiaan Barnard",
      "Bryan Allen and Paul MacCready’s team",
      "Elisha Otis"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0136"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the discovery of the structure of DNA using X-ray diffraction evidence?",
    "ar": "من يُنسب إليه عادةً ابتكار the discovery of the structure of DNA using X-ray diffraction evidence؟",
    "options": [
      "Rosalind Franklin",
      "John Logie Baird",
      "Jonas Salk",
      "Jack Kilby"
    ],
    "optionsAr": [
      "Rosalind Franklin",
      "John Logie Baird",
      "Jonas Salk",
      "Jack Kilby"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0137"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first widely used oral polio vaccine?",
    "ar": "من يُنسب إليه عادةً ابتكار the first widely used oral polio vaccine؟",
    "options": [
      "Nikola Tesla",
      "James Chadwick",
      "Louis Pasteur",
      "Albert Sabin"
    ],
    "optionsAr": [
      "Nikola Tesla",
      "James Chadwick",
      "Louis Pasteur",
      "Albert Sabin"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0138"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first practical photographic process?",
    "ar": "من يُنسب إليه عادةً ابتكار the first practical photographic process؟",
    "options": [
      "Rudolf Diesel",
      "Louis Pasteur",
      "Nikola Tesla",
      "Louis Daguerre"
    ],
    "optionsAr": [
      "Rudolf Diesel",
      "Louis Pasteur",
      "Nikola Tesla",
      "Louis Daguerre"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0139"
  },
  {
    "category": "General Knowledge",
    "en": "Who is commonly credited with the first successful steam-powered automobile?",
    "ar": "من يُنسب إليه عادةً ابتكار the first successful steam-powered automobile؟",
    "options": [
      "Nicolas-Joseph Cugnot",
      "Michael Faraday",
      "Norman Joseph Woodland and Bernard Silver",
      "John Logie Baird"
    ],
    "optionsAr": [
      "Nicolas-Joseph Cugnot",
      "Michael Faraday",
      "Norman Joseph Woodland and Bernard Silver",
      "John Logie Baird"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0140"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Four Seasons”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Four Seasons»؟",
    "options": [
      "Igor Stravinsky",
      "Sergei Prokofiev",
      "Antonio Vivaldi",
      "Maurice Ravel"
    ],
    "optionsAr": [
      "Igor Stravinsky",
      "Sergei Prokofiev",
      "Antonio Vivaldi",
      "Maurice Ravel"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0141"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Moonlight Sonata”?",
    "ar": "من ألّف المقطوعة الموسيقية «Moonlight Sonata»؟",
    "options": [
      "Ludwig van Beethoven",
      "Antonio Vivaldi",
      "Ralph Vaughan Williams",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Antonio Vivaldi",
      "Ralph Vaughan Williams",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0142"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Symphony No. 5”?",
    "ar": "من ألّف المقطوعة الموسيقية «Symphony No. 5»؟",
    "options": [
      "Modest Mussorgsky",
      "Ludwig van Beethoven",
      "Carl Orff",
      "Johann Pachelbel"
    ],
    "optionsAr": [
      "Modest Mussorgsky",
      "Ludwig van Beethoven",
      "Carl Orff",
      "Johann Pachelbel"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0143"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Symphony No. 9 “Choral””?",
    "ar": "من ألّف المقطوعة الموسيقية «Symphony No. 9 “Choral”»؟",
    "options": [
      "Johann Pachelbel",
      "Richard Wagner",
      "Giuseppe Verdi",
      "Ludwig van Beethoven"
    ],
    "optionsAr": [
      "Johann Pachelbel",
      "Richard Wagner",
      "Giuseppe Verdi",
      "Ludwig van Beethoven"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0144"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Für Elise”?",
    "ar": "من ألّف المقطوعة الموسيقية «Für Elise»؟",
    "options": [
      "Ludwig van Beethoven",
      "Johann Strauss II",
      "Georges Bizet",
      "Claude Debussy"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Johann Strauss II",
      "Georges Bizet",
      "Claude Debussy"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0145"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Eine kleine Nachtmusik”?",
    "ar": "من ألّف المقطوعة الموسيقية «Eine kleine Nachtmusik»؟",
    "options": [
      "Sergei Rachmaninoff",
      "Giuseppe Verdi",
      "Aaron Copland",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Sergei Rachmaninoff",
      "Giuseppe Verdi",
      "Aaron Copland",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0146"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Magic Flute”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Magic Flute»؟",
    "options": [
      "Sergei Rachmaninoff",
      "Erik Satie",
      "Samuel Barber",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Sergei Rachmaninoff",
      "Erik Satie",
      "Samuel Barber",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0147"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Requiem in D minor”?",
    "ar": "من ألّف المقطوعة الموسيقية «Requiem in D minor»؟",
    "options": [
      "Johann Pachelbel",
      "Bedřich Smetana",
      "Jean Sibelius",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Johann Pachelbel",
      "Bedřich Smetana",
      "Jean Sibelius",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0148"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Marriage of Figaro”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Marriage of Figaro»؟",
    "options": [
      "Wolfgang Amadeus Mozart",
      "Gustav Holst",
      "Franz Liszt",
      "Maurice Ravel"
    ],
    "optionsAr": [
      "Wolfgang Amadeus Mozart",
      "Gustav Holst",
      "Franz Liszt",
      "Maurice Ravel"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0149"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Nutcracker”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Nutcracker»؟",
    "options": [
      "Richard Wagner",
      "Johann Pachelbel",
      "Pyotr Ilyich Tchaikovsky",
      "Antonio Vivaldi"
    ],
    "optionsAr": [
      "Richard Wagner",
      "Johann Pachelbel",
      "Pyotr Ilyich Tchaikovsky",
      "Antonio Vivaldi"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0150"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Swan Lake”?",
    "ar": "من ألّف المقطوعة الموسيقية «Swan Lake»؟",
    "options": [
      "Bedřich Smetana",
      "Carl Orff",
      "Pyotr Ilyich Tchaikovsky",
      "Gioachino Rossini"
    ],
    "optionsAr": [
      "Bedřich Smetana",
      "Carl Orff",
      "Pyotr Ilyich Tchaikovsky",
      "Gioachino Rossini"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0151"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Sleeping Beauty ballet”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Sleeping Beauty ballet»؟",
    "options": [
      "Franz Liszt",
      "Igor Stravinsky",
      "Samuel Barber",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Franz Liszt",
      "Igor Stravinsky",
      "Samuel Barber",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0152"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The 1812 Overture”?",
    "ar": "من ألّف المقطوعة الموسيقية «The 1812 Overture»؟",
    "options": [
      "Ralph Vaughan Williams",
      "Carl Orff",
      "Pyotr Ilyich Tchaikovsky",
      "Igor Stravinsky"
    ],
    "optionsAr": [
      "Ralph Vaughan Williams",
      "Carl Orff",
      "Pyotr Ilyich Tchaikovsky",
      "Igor Stravinsky"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0153"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Messiah”?",
    "ar": "من ألّف المقطوعة الموسيقية «Messiah»؟",
    "options": [
      "George Frideric Handel",
      "Samuel Barber",
      "Johann Strauss II",
      "Johann Sebastian Bach"
    ],
    "optionsAr": [
      "George Frideric Handel",
      "Samuel Barber",
      "Johann Strauss II",
      "Johann Sebastian Bach"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0154"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Water Music”?",
    "ar": "من ألّف المقطوعة الموسيقية «Water Music»؟",
    "options": [
      "George Frideric Handel",
      "Sergei Prokofiev",
      "Gustav Holst",
      "Modest Mussorgsky"
    ],
    "optionsAr": [
      "George Frideric Handel",
      "Sergei Prokofiev",
      "Gustav Holst",
      "Modest Mussorgsky"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0155"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Messiah: Hallelujah Chorus”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Messiah: Hallelujah Chorus»؟",
    "options": [
      "Pyotr Ilyich Tchaikovsky",
      "Ludwig van Beethoven",
      "Jean Sibelius",
      "George Frideric Handel"
    ],
    "optionsAr": [
      "Pyotr Ilyich Tchaikovsky",
      "Ludwig van Beethoven",
      "Jean Sibelius",
      "George Frideric Handel"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0156"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Brandenburg Concertos”?",
    "ar": "من ألّف المقطوعة الموسيقية «Brandenburg Concertos»؟",
    "options": [
      "Richard Wagner",
      "Claude Debussy",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "optionsAr": [
      "Richard Wagner",
      "Claude Debussy",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0157"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Toccata and Fugue in D minor”?",
    "ar": "من ألّف المقطوعة الموسيقية «Toccata and Fugue in D minor»؟",
    "options": [
      "Erik Satie",
      "Giacomo Puccini",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "optionsAr": [
      "Erik Satie",
      "Giacomo Puccini",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0158"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Cello Suites”?",
    "ar": "من ألّف المقطوعة الموسيقية «Cello Suites»؟",
    "options": [
      "Johann Sebastian Bach",
      "Edvard Grieg",
      "Gustav Holst",
      "Samuel Barber"
    ],
    "optionsAr": [
      "Johann Sebastian Bach",
      "Edvard Grieg",
      "Gustav Holst",
      "Samuel Barber"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0159"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Well-Tempered Clavier”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Well-Tempered Clavier»؟",
    "options": [
      "Johann Sebastian Bach",
      "George Frideric Handel",
      "Giuseppe Verdi",
      "Antonio Vivaldi"
    ],
    "optionsAr": [
      "Johann Sebastian Bach",
      "George Frideric Handel",
      "Giuseppe Verdi",
      "Antonio Vivaldi"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0160"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Boléro”?",
    "ar": "من ألّف المقطوعة الموسيقية «Boléro»؟",
    "options": [
      "Sergei Rachmaninoff",
      "Wolfgang Amadeus Mozart",
      "Maurice Ravel",
      "Bedřich Smetana"
    ],
    "optionsAr": [
      "Sergei Rachmaninoff",
      "Wolfgang Amadeus Mozart",
      "Maurice Ravel",
      "Bedřich Smetana"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0161"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Pavane for a Dead Princess”?",
    "ar": "من ألّف المقطوعة الموسيقية «Pavane for a Dead Princess»؟",
    "options": [
      "Bedřich Smetana",
      "Maurice Ravel",
      "Franz Liszt",
      "Giacomo Puccini"
    ],
    "optionsAr": [
      "Bedřich Smetana",
      "Maurice Ravel",
      "Franz Liszt",
      "Giacomo Puccini"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0162"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Clair de lune”?",
    "ar": "من ألّف المقطوعة الموسيقية «Clair de lune»؟",
    "options": [
      "Claude Debussy",
      "Igor Stravinsky",
      "Sergei Prokofiev",
      "Johann Strauss II"
    ],
    "optionsAr": [
      "Claude Debussy",
      "Igor Stravinsky",
      "Sergei Prokofiev",
      "Johann Strauss II"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0163"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “La mer”?",
    "ar": "من ألّف المقطوعة الموسيقية «La mer»؟",
    "options": [
      "Gustav Holst",
      "Ralph Vaughan Williams",
      "Sergei Prokofiev",
      "Claude Debussy"
    ],
    "optionsAr": [
      "Gustav Holst",
      "Ralph Vaughan Williams",
      "Sergei Prokofiev",
      "Claude Debussy"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0164"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Gymnopédies”?",
    "ar": "من ألّف المقطوعة الموسيقية «Gymnopédies»؟",
    "options": [
      "Ralph Vaughan Williams",
      "Claude Debussy",
      "Erik Satie",
      "Antonín Dvořák"
    ],
    "optionsAr": [
      "Ralph Vaughan Williams",
      "Claude Debussy",
      "Erik Satie",
      "Antonín Dvořák"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0165"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Planets”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Planets»؟",
    "options": [
      "Pyotr Ilyich Tchaikovsky",
      "Gustav Holst",
      "Maurice Ravel",
      "Ludwig van Beethoven"
    ],
    "optionsAr": [
      "Pyotr Ilyich Tchaikovsky",
      "Gustav Holst",
      "Maurice Ravel",
      "Ludwig van Beethoven"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0166"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Peer Gynt suite”?",
    "ar": "من ألّف المقطوعة الموسيقية «Peer Gynt suite»؟",
    "options": [
      "Giuseppe Verdi",
      "Edvard Grieg",
      "Johann Strauss II",
      "Gustav Holst"
    ],
    "optionsAr": [
      "Giuseppe Verdi",
      "Edvard Grieg",
      "Johann Strauss II",
      "Gustav Holst"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0167"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “In the Hall of the Mountain King”?",
    "ar": "من ألّف المقطوعة الموسيقية «In the Hall of the Mountain King»؟",
    "options": [
      "Antonio Vivaldi",
      "Giacomo Puccini",
      "Edvard Grieg",
      "Samuel Barber"
    ],
    "optionsAr": [
      "Antonio Vivaldi",
      "Giacomo Puccini",
      "Edvard Grieg",
      "Samuel Barber"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0168"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Finlandia”?",
    "ar": "من ألّف المقطوعة الموسيقية «Finlandia»؟",
    "options": [
      "Edvard Grieg",
      "Bedřich Smetana",
      "Jean Sibelius",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Edvard Grieg",
      "Bedřich Smetana",
      "Jean Sibelius",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0169"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “New World Symphony”?",
    "ar": "من ألّف المقطوعة الموسيقية «New World Symphony»؟",
    "options": [
      "Antonín Dvořák",
      "Bedřich Smetana",
      "Johann Pachelbel",
      "Erik Satie"
    ],
    "optionsAr": [
      "Antonín Dvořák",
      "Bedřich Smetana",
      "Johann Pachelbel",
      "Erik Satie"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0170"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Slavonic Dances”?",
    "ar": "من ألّف المقطوعة الموسيقية «Slavonic Dances»؟",
    "options": [
      "Antonín Dvořák",
      "Edvard Grieg",
      "Ludwig van Beethoven",
      "Sergei Prokofiev"
    ],
    "optionsAr": [
      "Antonín Dvořák",
      "Edvard Grieg",
      "Ludwig van Beethoven",
      "Sergei Prokofiev"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0171"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Carmen”?",
    "ar": "من ألّف المقطوعة الموسيقية «Carmen»؟",
    "options": [
      "Aaron Copland",
      "Giacomo Puccini",
      "Georges Bizet",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Aaron Copland",
      "Giacomo Puccini",
      "Georges Bizet",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0172"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “L’Arlésienne suite”?",
    "ar": "من ألّف المقطوعة الموسيقية «L’Arlésienne suite»؟",
    "options": [
      "Edvard Grieg",
      "Antonín Dvořák",
      "Wolfgang Amadeus Mozart",
      "Georges Bizet"
    ],
    "optionsAr": [
      "Edvard Grieg",
      "Antonín Dvořák",
      "Wolfgang Amadeus Mozart",
      "Georges Bizet"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0173"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Barber of Seville”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Barber of Seville»؟",
    "options": [
      "Wolfgang Amadeus Mozart",
      "Gioachino Rossini",
      "Antonín Dvořák",
      "Carl Orff"
    ],
    "optionsAr": [
      "Wolfgang Amadeus Mozart",
      "Gioachino Rossini",
      "Antonín Dvořák",
      "Carl Orff"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0174"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “William Tell Overture”?",
    "ar": "من ألّف المقطوعة الموسيقية «William Tell Overture»؟",
    "options": [
      "Claude Debussy",
      "Sergei Prokofiev",
      "Gioachino Rossini",
      "Aaron Copland"
    ],
    "optionsAr": [
      "Claude Debussy",
      "Sergei Prokofiev",
      "Gioachino Rossini",
      "Aaron Copland"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0175"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “La Traviata”?",
    "ar": "من ألّف المقطوعة الموسيقية «La Traviata»؟",
    "options": [
      "Giacomo Puccini",
      "Giuseppe Verdi",
      "Gustav Holst",
      "Edward Elgar"
    ],
    "optionsAr": [
      "Giacomo Puccini",
      "Giuseppe Verdi",
      "Gustav Holst",
      "Edward Elgar"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0176"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Aida”?",
    "ar": "من ألّف المقطوعة الموسيقية «Aida»؟",
    "options": [
      "Bedřich Smetana",
      "Ralph Vaughan Williams",
      "Giuseppe Verdi",
      "Samuel Barber"
    ],
    "optionsAr": [
      "Bedřich Smetana",
      "Ralph Vaughan Williams",
      "Giuseppe Verdi",
      "Samuel Barber"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0177"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Rigoletto”?",
    "ar": "من ألّف المقطوعة الموسيقية «Rigoletto»؟",
    "options": [
      "Ludwig van Beethoven",
      "Giuseppe Verdi",
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Giuseppe Verdi",
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0178"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Madama Butterfly”?",
    "ar": "من ألّف المقطوعة الموسيقية «Madama Butterfly»؟",
    "options": [
      "George Frideric Handel",
      "Claude Debussy",
      "Giacomo Puccini",
      "Gustav Holst"
    ],
    "optionsAr": [
      "George Frideric Handel",
      "Claude Debussy",
      "Giacomo Puccini",
      "Gustav Holst"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0179"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “La Bohème”?",
    "ar": "من ألّف المقطوعة الموسيقية «La Bohème»؟",
    "options": [
      "Giacomo Puccini",
      "Edward Elgar",
      "Pyotr Ilyich Tchaikovsky",
      "Gioachino Rossini"
    ],
    "optionsAr": [
      "Giacomo Puccini",
      "Edward Elgar",
      "Pyotr Ilyich Tchaikovsky",
      "Gioachino Rossini"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0180"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Turandot”?",
    "ar": "من ألّف المقطوعة الموسيقية «Turandot»؟",
    "options": [
      "Giacomo Puccini",
      "Antonín Dvořák",
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Giacomo Puccini",
      "Antonín Dvořák",
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0181"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Ride of the Valkyries”?",
    "ar": "من ألّف المقطوعة الموسيقية «Ride of the Valkyries»؟",
    "options": [
      "Gustav Holst",
      "Richard Wagner",
      "Jean Sibelius",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Gustav Holst",
      "Richard Wagner",
      "Jean Sibelius",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0182"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Ring Cycle”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Ring Cycle»؟",
    "options": [
      "Sergei Prokofiev",
      "Richard Wagner",
      "Pyotr Ilyich Tchaikovsky",
      "Ludwig van Beethoven"
    ],
    "optionsAr": [
      "Sergei Prokofiev",
      "Richard Wagner",
      "Pyotr Ilyich Tchaikovsky",
      "Ludwig van Beethoven"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0183"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Blue Danube”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Blue Danube»؟",
    "options": [
      "Claude Debussy",
      "Erik Satie",
      "Johann Strauss II",
      "Sergei Prokofiev"
    ],
    "optionsAr": [
      "Claude Debussy",
      "Erik Satie",
      "Johann Strauss II",
      "Sergei Prokofiev"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0184"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Tales from the Vienna Woods”?",
    "ar": "من ألّف المقطوعة الموسيقية «Tales from the Vienna Woods»؟",
    "options": [
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart",
      "George Frideric Handel",
      "Edward Elgar"
    ],
    "optionsAr": [
      "Johann Strauss II",
      "Wolfgang Amadeus Mozart",
      "George Frideric Handel",
      "Edward Elgar"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0185"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Hungarian Rhapsody No. 2”?",
    "ar": "من ألّف المقطوعة الموسيقية «Hungarian Rhapsody No. 2»؟",
    "options": [
      "Franz Liszt",
      "Gioachino Rossini",
      "Wolfgang Amadeus Mozart",
      "Johann Pachelbel"
    ],
    "optionsAr": [
      "Franz Liszt",
      "Gioachino Rossini",
      "Wolfgang Amadeus Mozart",
      "Johann Pachelbel"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0186"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Liebesträume”?",
    "ar": "من ألّف المقطوعة الموسيقية «Liebesträume»؟",
    "options": [
      "Franz Liszt",
      "Richard Wagner",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "optionsAr": [
      "Franz Liszt",
      "Richard Wagner",
      "Samuel Barber",
      "Johann Sebastian Bach"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0187"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Piano Concerto No. 2”?",
    "ar": "من ألّف المقطوعة الموسيقية «Piano Concerto No. 2»؟",
    "options": [
      "Sergei Rachmaninoff",
      "Ludwig van Beethoven",
      "Jean Sibelius",
      "Sergei Prokofiev"
    ],
    "optionsAr": [
      "Sergei Rachmaninoff",
      "Ludwig van Beethoven",
      "Jean Sibelius",
      "Sergei Prokofiev"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0188"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Rhapsody on a Theme of Paganini”?",
    "ar": "من ألّف المقطوعة الموسيقية «Rhapsody on a Theme of Paganini»؟",
    "options": [
      "Giacomo Puccini",
      "Sergei Rachmaninoff",
      "Gioachino Rossini",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Giacomo Puccini",
      "Sergei Rachmaninoff",
      "Gioachino Rossini",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0189"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Pictures at an Exhibition”?",
    "ar": "من ألّف المقطوعة الموسيقية «Pictures at an Exhibition»؟",
    "options": [
      "Richard Wagner",
      "Ralph Vaughan Williams",
      "Modest Mussorgsky",
      "Bedřich Smetana"
    ],
    "optionsAr": [
      "Richard Wagner",
      "Ralph Vaughan Williams",
      "Modest Mussorgsky",
      "Bedřich Smetana"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0190"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Night on Bald Mountain”?",
    "ar": "من ألّف المقطوعة الموسيقية «Night on Bald Mountain»؟",
    "options": [
      "Modest Mussorgsky",
      "Edvard Grieg",
      "Antonín Dvořák",
      "Gioachino Rossini"
    ],
    "optionsAr": [
      "Modest Mussorgsky",
      "Edvard Grieg",
      "Antonín Dvořák",
      "Gioachino Rossini"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0191"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Rite of Spring”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Rite of Spring»؟",
    "options": [
      "Igor Stravinsky",
      "Bedřich Smetana",
      "Maurice Ravel",
      "Antonio Vivaldi"
    ],
    "optionsAr": [
      "Igor Stravinsky",
      "Bedřich Smetana",
      "Maurice Ravel",
      "Antonio Vivaldi"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0192"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Firebird”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Firebird»؟",
    "options": [
      "Jean Sibelius",
      "Igor Stravinsky",
      "Aaron Copland",
      "Wolfgang Amadeus Mozart"
    ],
    "optionsAr": [
      "Jean Sibelius",
      "Igor Stravinsky",
      "Aaron Copland",
      "Wolfgang Amadeus Mozart"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0193"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Peter and the Wolf”?",
    "ar": "من ألّف المقطوعة الموسيقية «Peter and the Wolf»؟",
    "options": [
      "Giacomo Puccini",
      "Sergei Prokofiev",
      "Gioachino Rossini",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Giacomo Puccini",
      "Sergei Prokofiev",
      "Gioachino Rossini",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0194"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Romeo and Juliet ballet”?",
    "ar": "من ألّف المقطوعة الموسيقية «Romeo and Juliet ballet»؟",
    "options": [
      "Giuseppe Verdi",
      "Sergei Prokofiev",
      "Bedřich Smetana",
      "Edward Elgar"
    ],
    "optionsAr": [
      "Giuseppe Verdi",
      "Sergei Prokofiev",
      "Bedřich Smetana",
      "Edward Elgar"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0195"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Symphony No. 6 “Pathétique””?",
    "ar": "من ألّف المقطوعة الموسيقية «Symphony No. 6 “Pathétique”»؟",
    "options": [
      "Ludwig van Beethoven",
      "Pyotr Ilyich Tchaikovsky",
      "Claude Debussy",
      "Gustav Holst"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Pyotr Ilyich Tchaikovsky",
      "Claude Debussy",
      "Gustav Holst"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0196"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Canon in D”?",
    "ar": "من ألّف المقطوعة الموسيقية «Canon in D»؟",
    "options": [
      "Johann Pachelbel",
      "Jean Sibelius",
      "Giacomo Puccini",
      "Aaron Copland"
    ],
    "optionsAr": [
      "Johann Pachelbel",
      "Jean Sibelius",
      "Giacomo Puccini",
      "Aaron Copland"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0197"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Adagio for Strings”?",
    "ar": "من ألّف المقطوعة الموسيقية «Adagio for Strings»؟",
    "options": [
      "George Frideric Handel",
      "Samuel Barber",
      "Jean Sibelius",
      "Sergei Rachmaninoff"
    ],
    "optionsAr": [
      "George Frideric Handel",
      "Samuel Barber",
      "Jean Sibelius",
      "Sergei Rachmaninoff"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0198"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Barber of Seville overture”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Barber of Seville overture»؟",
    "options": [
      "George Frideric Handel",
      "Gioachino Rossini",
      "Richard Wagner",
      "Giuseppe Verdi"
    ],
    "optionsAr": [
      "George Frideric Handel",
      "Gioachino Rossini",
      "Richard Wagner",
      "Giuseppe Verdi"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0199"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Appalachian Spring”?",
    "ar": "من ألّف المقطوعة الموسيقية «Appalachian Spring»؟",
    "options": [
      "Johann Strauss II",
      "Aaron Copland",
      "Johann Pachelbel",
      "Giacomo Puccini"
    ],
    "optionsAr": [
      "Johann Strauss II",
      "Aaron Copland",
      "Johann Pachelbel",
      "Giacomo Puccini"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0200"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Fanfare for the Common Man”?",
    "ar": "من ألّف المقطوعة الموسيقية «Fanfare for the Common Man»؟",
    "options": [
      "Igor Stravinsky",
      "Giacomo Puccini",
      "Aaron Copland",
      "Giuseppe Verdi"
    ],
    "optionsAr": [
      "Igor Stravinsky",
      "Giacomo Puccini",
      "Aaron Copland",
      "Giuseppe Verdi"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0201"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Carmina Burana”?",
    "ar": "من ألّف المقطوعة الموسيقية «Carmina Burana»؟",
    "options": [
      "Sergei Prokofiev",
      "Aaron Copland",
      "Carl Orff",
      "Georges Bizet"
    ],
    "optionsAr": [
      "Sergei Prokofiev",
      "Aaron Copland",
      "Carl Orff",
      "Georges Bizet"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0202"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “O Fortuna”?",
    "ar": "من ألّف المقطوعة الموسيقية «O Fortuna»؟",
    "options": [
      "Sergei Prokofiev",
      "Antonio Vivaldi",
      "Aaron Copland",
      "Carl Orff"
    ],
    "optionsAr": [
      "Sergei Prokofiev",
      "Antonio Vivaldi",
      "Aaron Copland",
      "Carl Orff"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0203"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Symphony No. 3 “Eroica””?",
    "ar": "من ألّف المقطوعة الموسيقية «Symphony No. 3 “Eroica”»؟",
    "options": [
      "Ludwig van Beethoven",
      "Edvard Grieg",
      "Bedřich Smetana",
      "Ralph Vaughan Williams"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Edvard Grieg",
      "Bedřich Smetana",
      "Ralph Vaughan Williams"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0204"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Goldberg Variations”?",
    "ar": "من ألّف المقطوعة الموسيقية «Goldberg Variations»؟",
    "options": [
      "Giuseppe Verdi",
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Samuel Barber"
    ],
    "optionsAr": [
      "Giuseppe Verdi",
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Samuel Barber"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0205"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Moldau”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Moldau»؟",
    "options": [
      "Gustav Holst",
      "Bedřich Smetana",
      "Samuel Barber",
      "Johann Strauss II"
    ],
    "optionsAr": [
      "Gustav Holst",
      "Bedřich Smetana",
      "Samuel Barber",
      "Johann Strauss II"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0206"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Má vlast”?",
    "ar": "من ألّف المقطوعة الموسيقية «Má vlast»؟",
    "options": [
      "Johann Sebastian Bach",
      "Igor Stravinsky",
      "Edward Elgar",
      "Bedřich Smetana"
    ],
    "optionsAr": [
      "Johann Sebastian Bach",
      "Igor Stravinsky",
      "Edward Elgar",
      "Bedřich Smetana"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0207"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Enigma Variations”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Enigma Variations»؟",
    "options": [
      "Antonio Vivaldi",
      "Edward Elgar",
      "Aaron Copland",
      "Georges Bizet"
    ],
    "optionsAr": [
      "Antonio Vivaldi",
      "Edward Elgar",
      "Aaron Copland",
      "Georges Bizet"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0208"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “Pomp and Circumstance March No. 1”?",
    "ar": "من ألّف المقطوعة الموسيقية «Pomp and Circumstance March No. 1»؟",
    "options": [
      "Johann Pachelbel",
      "Edward Elgar",
      "Samuel Barber",
      "Gustav Holst"
    ],
    "optionsAr": [
      "Johann Pachelbel",
      "Edward Elgar",
      "Samuel Barber",
      "Gustav Holst"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0209"
  },
  {
    "category": "General Knowledge",
    "en": "Who composed “The Lark Ascending”?",
    "ar": "من ألّف المقطوعة الموسيقية «The Lark Ascending»؟",
    "options": [
      "Ludwig van Beethoven",
      "Ralph Vaughan Williams",
      "Sergei Prokofiev",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "optionsAr": [
      "Ludwig van Beethoven",
      "Ralph Vaughan Williams",
      "Sergei Prokofiev",
      "Pyotr Ilyich Tchaikovsky"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0210"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a shuttlecock?",
    "ar": "أي رياضة تستخدم الريشة؟",
    "options": [
      "Swimming",
      "Badminton",
      "Kitesurfing",
      "Billiards"
    ],
    "optionsAr": [
      "السباحة",
      "تنس الريشة",
      "ركوب الأمواج بالطائرة الورقية",
      "البلياردو"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0211"
  },
  {
    "category": "Sports",
    "en": "Which sport is played with a puck on ice?",
    "ar": "أي رياضة تُلعب بقرص فوق الجليد؟",
    "options": [
      "Snowboarding",
      "Ice hockey",
      "Volleyball",
      "Boxing"
    ],
    "optionsAr": [
      "التزلج على اللوح الثلجي",
      "هوكي الجليد",
      "الكرة الطائرة",
      "الملاكمة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0212"
  },
  {
    "category": "Sports",
    "en": "Which sport features a pommel horse?",
    "ar": "أي رياضة تتضمن حصان الحلق؟",
    "options": [
      "Bobsleigh",
      "Shot put",
      "Artistic gymnastics",
      "Rowing"
    ],
    "optionsAr": [
      "الزحافات الجماعية",
      "دفع الجلة",
      "الجمباز الفني",
      "التجديف"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0213"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a foil, épée or sabre?",
    "ar": "أي رياضة تستخدم سلاح الفلوريه أو الإيبيه أو السابر؟",
    "options": [
      "Canoeing",
      "Javelin throw",
      "Fencing",
      "Luge"
    ],
    "optionsAr": [
      "التجديف بالكانو",
      "رمي الرمح",
      "المبارزة",
      "الزحافات الفردية"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0214"
  },
  {
    "category": "Sports",
    "en": "Which sport uses wickets and a bat?",
    "ar": "أي رياضة تستخدم الويكيت والمضرب؟",
    "options": [
      "Pole vault",
      "Cricket",
      "Surfing",
      "Table tennis"
    ],
    "optionsAr": [
      "القفز بالزانة",
      "الكريكيت",
      "ركوب الأمواج",
      "تنس الطاولة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0215"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a mallet while players ride horses?",
    "ar": "أي رياضة تستخدم مطرقة صغيرة أثناء ركوب الخيل؟",
    "options": [
      "Fencing",
      "Basketball",
      "Badminton",
      "Polo"
    ],
    "optionsAr": [
      "المبارزة",
      "كرة السلة",
      "تنس الريشة",
      "البولو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0216"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a cue to strike balls on a table?",
    "ar": "أي رياضة تستخدم عصا لضرب الكرات على طاولة؟",
    "options": [
      "Snooker",
      "Table tennis",
      "Snowboarding",
      "Sport climbing"
    ],
    "optionsAr": [
      "السنوكر",
      "تنس الطاولة",
      "التزلج على اللوح الثلجي",
      "التسلق الرياضي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0217"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a bow and arrows?",
    "ar": "أي رياضة تستخدم القوس والسهام؟",
    "options": [
      "Association football",
      "Relay racing",
      "Golf",
      "Archery"
    ],
    "optionsAr": [
      "كرة القدم",
      "سباق التتابع",
      "الغولف",
      "الرماية بالقوس"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0218"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a sail to harness the wind?",
    "ar": "أي رياضة تستخدم الشراع للاستفادة من الرياح؟",
    "options": [
      "Team handball",
      "Sailing",
      "Basketball",
      "Kayaking"
    ],
    "optionsAr": [
      "كرة اليد",
      "الإبحار الشراعي",
      "كرة السلة",
      "التجديف بالكاياك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0219"
  },
  {
    "category": "Sports",
    "en": "Which sport uses oars to move a racing shell?",
    "ar": "أي رياضة تستخدم المجاديف لتحريك قارب السباق؟",
    "options": [
      "Badminton",
      "Sport shooting",
      "Rowing",
      "Athletics relay"
    ],
    "optionsAr": [
      "تنس الريشة",
      "الرماية الرياضية",
      "التجديف",
      "تتابع ألعاب القوى"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0220"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a balance beam?",
    "ar": "أي رياضة تستخدم عارضة التوازن؟",
    "options": [
      "Cross-country skiing",
      "Biathlon",
      "Artistic gymnastics",
      "Kitesurfing"
    ],
    "optionsAr": [
      "التزلج الريفي",
      "البياثلون",
      "الجمباز الفني",
      "ركوب الأمواج بالطائرة الورقية"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0221"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a vaulting table?",
    "ar": "أي رياضة تستخدم طاولة القفز؟",
    "options": [
      "Track cycling",
      "Relay racing",
      "Artistic gymnastics",
      "Volleyball"
    ],
    "optionsAr": [
      "سباق الدراجات على المضمار",
      "سباق التتابع",
      "الجمباز الفني",
      "الكرة الطائرة"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0222"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum?",
    "ar": "أي رياضة تتضمن تجمعًا يُسمى Scrum؟",
    "options": [
      "Archery",
      "Rowing",
      "Golf",
      "Rugby union"
    ],
    "optionsAr": [
      "الرماية بالقوس",
      "التجديف",
      "الغولف",
      "الرغبي يونيون"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0223"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a net and a spike attack?",
    "ar": "أي رياضة تتضمن شبكة وضربة ساحقة؟",
    "options": [
      "Swimming",
      "Volleyball",
      "Polo",
      "Wrestling"
    ],
    "optionsAr": [
      "السباحة",
      "الكرة الطائرة",
      "البولو",
      "المصارعة"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0224"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a diamond-shaped field?",
    "ar": "أي رياضة تُلعب في ملعب على شكل ماسة؟",
    "options": [
      "Baseball",
      "Road cycling",
      "Pole vault",
      "Rugby union"
    ],
    "optionsAr": [
      "البيسبول",
      "سباق الدراجات على الطريق",
      "القفز بالزانة",
      "الرغبي يونيون"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0225"
  },
  {
    "category": "Sports",
    "en": "Which sport features a parallel-bar routine?",
    "ar": "أي رياضة تتضمن أداءً على المتوازي؟",
    "options": [
      "Kitesurfing",
      "Artistic gymnastics",
      "Snooker",
      "Bobsleigh"
    ],
    "optionsAr": [
      "ركوب الأمواج بالطائرة الورقية",
      "الجمباز الفني",
      "السنوكر",
      "الزحافات الجماعية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0226"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a protective mask and a foil?",
    "ar": "أي رياضة تستخدم قناعًا واقيًا وسلاح الفلوريه؟",
    "options": [
      "Fencing",
      "Cricket",
      "Shot put",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "المبارزة",
      "الكريكيت",
      "دفع الجلة",
      "التزلج الريفي"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0227"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a tee to start a hole?",
    "ar": "أي رياضة تستخدم حامل الكرة لبدء الحفرة؟",
    "options": [
      "American football",
      "Luge",
      "Golf",
      "Sport climbing"
    ],
    "optionsAr": [
      "كرة القدم الأمريكية",
      "الزحافات الفردية",
      "الغولف",
      "التسلق الرياضي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0228"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a pitchfork-shaped tool called a divot tool?",
    "ar": "في أي رياضة تُستخدم أداة إصلاح أثر الكرة على العشب؟",
    "options": [
      "Sailing",
      "Golf",
      "Athletics relay",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "الإبحار الشراعي",
      "الغولف",
      "تتابع ألعاب القوى",
      "التزلج الريفي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0229"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a vaulting pole?",
    "ar": "أي رياضة تستخدم عصا طويلة للقفز؟",
    "options": [
      "Discus throw",
      "Golf",
      "Billiards",
      "Pole vault"
    ],
    "optionsAr": [
      "رمي القرص",
      "الغولف",
      "البلياردو",
      "القفز بالزانة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0230"
  },
  {
    "category": "Sports",
    "en": "Which sport uses starting blocks on a track?",
    "ar": "أي رياضة تستخدم مكعبات الانطلاق على المضمار؟",
    "options": [
      "Formula One",
      "Fencing",
      "Track sprinting",
      "Sport shooting"
    ],
    "optionsAr": [
      "الفورمولا 1",
      "المبارزة",
      "العدو السريع",
      "الرماية الرياضية"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0231"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a shot put?",
    "ar": "أي رياضة تتضمن دفع كرة معدنية ثقيلة؟",
    "options": [
      "Archery",
      "Shot put",
      "Track sprinting",
      "Golf"
    ],
    "optionsAr": [
      "الرماية بالقوس",
      "دفع الجلة",
      "العدو السريع",
      "الغولف"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0232"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a discus?",
    "ar": "أي رياضة تتضمن رمي القرص؟",
    "options": [
      "Team handball",
      "Baseball",
      "Discus throw",
      "Golf"
    ],
    "optionsAr": [
      "كرة اليد",
      "البيسبول",
      "رمي القرص",
      "الغولف"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0233"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a javelin?",
    "ar": "أي رياضة تتضمن رمي الرمح؟",
    "options": [
      "Luge",
      "Javelin throw",
      "Artistic gymnastics",
      "Kayaking"
    ],
    "optionsAr": [
      "الزحافات الفردية",
      "رمي الرمح",
      "الجمباز الفني",
      "التجديف بالكاياك"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0234"
  },
  {
    "category": "Sports",
    "en": "Which sport uses hurdles on a track?",
    "ar": "أي رياضة تتضمن حواجز على المضمار؟",
    "options": [
      "Discus throw",
      "Basketball",
      "Cross-country skiing",
      "Hurdling"
    ],
    "optionsAr": [
      "رمي القرص",
      "كرة السلة",
      "التزلج الريفي",
      "سباق الحواجز"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0235"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a relay baton?",
    "ar": "أي رياضة تستخدم عصا التتابع؟",
    "options": [
      "Wakeboarding",
      "Kayaking",
      "Relay racing",
      "Taekwondo"
    ],
    "optionsAr": [
      "التزلج على الماء بلوح",
      "التجديف بالكاياك",
      "سباق التتابع",
      "التايكوندو"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0236"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a climbing wall and carabiners?",
    "ar": "أي رياضة تستخدم جدار تسلق وموصلات معدنية؟",
    "options": [
      "Bobsleigh",
      "Taekwondo",
      "Skeleton",
      "Sport climbing"
    ],
    "optionsAr": [
      "الزحافات الجماعية",
      "التايكوندو",
      "الهيكل العظمي الثلجي",
      "التسلق الرياضي"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0237"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a snowboard?",
    "ar": "أي رياضة تستخدم لوح التزلج على الثلج؟",
    "options": [
      "Canoeing",
      "Snowboarding",
      "Rowing",
      "Formula One"
    ],
    "optionsAr": [
      "التجديف بالكانو",
      "التزلج على اللوح الثلجي",
      "التجديف",
      "الفورمولا 1"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0238"
  },
  {
    "category": "Sports",
    "en": "Which sport uses skis and poles on snow?",
    "ar": "أي رياضة تستخدم الزلاجات والعصي على الثلج؟",
    "options": [
      "Archery",
      "Cross-country skiing",
      "Biathlon",
      "Bobsleigh"
    ],
    "optionsAr": [
      "الرماية بالقوس",
      "التزلج الريفي",
      "البياثلون",
      "الزحافات الجماعية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0239"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a bobsleigh?",
    "ar": "أي رياضة تستخدم مزلجة جماعية مغلقة؟",
    "options": [
      "Snowboarding",
      "Judo",
      "Bobsleigh",
      "Rugby union"
    ],
    "optionsAr": [
      "التزلج على اللوح الثلجي",
      "الجودو",
      "الزحافات الجماعية",
      "الرغبي يونيون"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0240"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a luge sled?",
    "ar": "أي رياضة تستخدم زلاجة صغيرة يستلقي عليها اللاعب؟",
    "options": [
      "Luge",
      "Bobsleigh",
      "Polo",
      "Table tennis"
    ],
    "optionsAr": [
      "الزحافات الفردية",
      "الزحافات الجماعية",
      "البولو",
      "تنس الطاولة"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0241"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a skeleton sled?",
    "ar": "أي رياضة تستخدم زلاجة ينطلق عليها اللاعب ووجهه للأمام؟",
    "options": [
      "Sport climbing",
      "Basketball",
      "Skeleton",
      "Luge"
    ],
    "optionsAr": [
      "التسلق الرياضي",
      "كرة السلة",
      "الهيكل العظمي الثلجي",
      "الزحافات الفردية"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0242"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a surfboard on ocean waves?",
    "ar": "أي رياضة تستخدم لوحًا لركوب أمواج البحر؟",
    "options": [
      "Rhythmic gymnastics",
      "Team handball",
      "Surfing",
      "Discus throw"
    ],
    "optionsAr": [
      "الجمباز الإيقاعي",
      "كرة اليد",
      "ركوب الأمواج",
      "رمي القرص"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0243"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wakeboard behind a boat?",
    "ar": "أي رياضة تستخدم لوحًا خلف قارب؟",
    "options": [
      "Track cycling",
      "Wakeboarding",
      "Rowing",
      "American football"
    ],
    "optionsAr": [
      "سباق الدراجات على المضمار",
      "التزلج على الماء بلوح",
      "التجديف",
      "كرة القدم الأمريكية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0244"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a kayak paddle with a double blade?",
    "ar": "أي رياضة تستخدم مجداف كاياك ذا شفرتين؟",
    "options": [
      "Track cycling",
      "Kayaking",
      "Kitesurfing",
      "American football"
    ],
    "optionsAr": [
      "سباق الدراجات على المضمار",
      "التجديف بالكاياك",
      "ركوب الأمواج بالطائرة الورقية",
      "كرة القدم الأمريكية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0245"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a canoe paddle with a single blade?",
    "ar": "أي رياضة تستخدم مجداف كانو بشفرة واحدة؟",
    "options": [
      "Canoeing",
      "Billiards",
      "Table tennis",
      "Field hockey"
    ],
    "optionsAr": [
      "التجديف بالكانو",
      "البلياردو",
      "تنس الطاولة",
      "هوكي الميدان"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0246"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a foil kite and a board on water?",
    "ar": "أي رياضة تستخدم طائرة ورقية ولوحًا فوق الماء؟",
    "options": [
      "Baseball",
      "Artistic gymnastics",
      "Rhythmic gymnastics",
      "Kitesurfing"
    ],
    "optionsAr": [
      "البيسبول",
      "الجمباز الفني",
      "الجمباز الإيقاعي",
      "ركوب الأمواج بالطائرة الورقية"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0247"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a glove and a punching bag?",
    "ar": "أي رياضة تستخدم قفازات وكيس ملاكمة؟",
    "options": [
      "Boxing",
      "Team handball",
      "Skeleton",
      "Kitesurfing"
    ],
    "optionsAr": [
      "الملاكمة",
      "كرة اليد",
      "الهيكل العظمي الثلجي",
      "ركوب الأمواج بالطائرة الورقية"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0248"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a tatami mat and judogi?",
    "ar": "أي رياضة تستخدم بساط التاتامي وبدلة الجودو؟",
    "options": [
      "Formula One",
      "Judo",
      "Kitesurfing",
      "Sport shooting"
    ],
    "optionsAr": [
      "الفورمولا 1",
      "الجودو",
      "ركوب الأمواج بالطائرة الورقية",
      "الرماية الرياضية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0249"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a dobok and protective chest gear?",
    "ar": "أي رياضة تستخدم بدلة دوبوك وواقي صدر؟",
    "options": [
      "American football",
      "Motor racing",
      "Rowing",
      "Taekwondo"
    ],
    "optionsAr": [
      "كرة القدم الأمريكية",
      "سباق السيارات",
      "التجديف",
      "التايكوندو"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0250"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wrestling singlet?",
    "ar": "أي رياضة تستخدم لباس المصارعة الموحّد؟",
    "options": [
      "Billiards",
      "Biathlon",
      "Wrestling",
      "Athletics relay"
    ],
    "optionsAr": [
      "البلياردو",
      "البياثلون",
      "المصارعة",
      "تتابع ألعاب القوى"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0251"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a fencing piste?",
    "ar": "أي رياضة تُقام على ممر يُسمى Piste؟",
    "options": [
      "Billiards",
      "Sport climbing",
      "Bobsleigh",
      "Fencing"
    ],
    "optionsAr": [
      "البلياردو",
      "التسلق الرياضي",
      "الزحافات الجماعية",
      "المبارزة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0252"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a clay target launched into the air?",
    "ar": "أي رياضة تتطلب إصابة أهداف طينية طائرة؟",
    "options": [
      "Athletics relay",
      "Sport shooting",
      "Track cycling",
      "Snooker"
    ],
    "optionsAr": [
      "تتابع ألعاب القوى",
      "الرماية الرياضية",
      "سباق الدراجات على المضمار",
      "السنوكر"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0253"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a biathlon rifle?",
    "ar": "أي رياضة تجمع التزلج الريفي والرماية بالبندقية؟",
    "options": [
      "Taekwondo",
      "Hurdling",
      "Volleyball",
      "Biathlon"
    ],
    "optionsAr": [
      "التايكوندو",
      "سباق الحواجز",
      "الكرة الطائرة",
      "البياثلون"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0254"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a velodrome?",
    "ar": "أي رياضة تُقام في مضمار دائري مائل يُسمى فيلودروم؟",
    "options": [
      "Polo",
      "Bobsleigh",
      "Rhythmic gymnastics",
      "Track cycling"
    ],
    "optionsAr": [
      "البولو",
      "الزحافات الجماعية",
      "الجمباز الإيقاعي",
      "سباق الدراجات على المضمار"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0255"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a peloton?",
    "ar": "أي رياضة يُطلق فيها اسم Peloton على مجموعة المتسابقين؟",
    "options": [
      "Skeleton",
      "Track cycling",
      "Wakeboarding",
      "Road cycling"
    ],
    "optionsAr": [
      "الهيكل العظمي الثلجي",
      "سباق الدراجات على المضمار",
      "التزلج على الماء بلوح",
      "سباق الدراجات على الطريق"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0256"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a yellow jersey for the overall leader in a famous stage race?",
    "ar": "أي رياضة يرتدي فيها متصدر سباق طواف فرنسا القميص الأصفر؟",
    "options": [
      "Road cycling",
      "Badminton",
      "Rugby union",
      "Golf"
    ],
    "optionsAr": [
      "سباق الدراجات على الطريق",
      "تنس الريشة",
      "الرغبي يونيون",
      "الغولف"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0257"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum cap?",
    "ar": "أي رياضة قد يستخدم لاعبوها قبعة واقية للرأس تُسمى Scrum cap؟",
    "options": [
      "Rugby union",
      "Sailing",
      "Relay racing",
      "Track sprinting"
    ],
    "optionsAr": [
      "الرغبي يونيون",
      "الإبحار الشراعي",
      "سباق التتابع",
      "العدو السريع"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0258"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a touchdown?",
    "ar": "أي رياضة تسجل فيها الفرق Touchdown؟",
    "options": [
      "Javelin throw",
      "Discus throw",
      "Swimming",
      "American football"
    ],
    "optionsAr": [
      "رمي الرمح",
      "رمي القرص",
      "السباحة",
      "كرة القدم الأمريكية"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0259"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a home run?",
    "ar": "أي رياضة تتضمن تسجيل Home run؟",
    "options": [
      "Baseball",
      "Canoeing",
      "Polo",
      "Billiards"
    ],
    "optionsAr": [
      "البيسبول",
      "التجديف بالكانو",
      "البولو",
      "البلياردو"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0260"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a free throw?",
    "ar": "أي رياضة تتضمن رمية حرة؟",
    "options": [
      "Basketball",
      "Baseball",
      "Shot put",
      "American football"
    ],
    "optionsAr": [
      "كرة السلة",
      "البيسبول",
      "دفع الجلة",
      "كرة القدم الأمريكية"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0261"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a penalty corner?",
    "ar": "أي رياضة تتضمن ركنية جزائية؟",
    "options": [
      "Artistic gymnastics",
      "Field hockey",
      "Snooker",
      "American football"
    ],
    "optionsAr": [
      "الجمباز الفني",
      "هوكي الميدان",
      "السنوكر",
      "كرة القدم الأمريكية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0262"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a penalty shootout after some tied matches?",
    "ar": "أي رياضة قد تحسم التعادل فيها بركلات ترجيح؟",
    "options": [
      "Kayaking",
      "Cricket",
      "Volleyball",
      "Association football"
    ],
    "optionsAr": [
      "التجديف بالكاياك",
      "الكريكيت",
      "الكرة الطائرة",
      "كرة القدم"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0263"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a libero position?",
    "ar": "أي رياضة تتضمن مركز الليبرو؟",
    "options": [
      "Volleyball",
      "Snowboarding",
      "Javelin throw",
      "Wakeboarding"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "التزلج على اللوح الثلجي",
      "رمي الرمح",
      "التزلج على الماء بلوح"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0264"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum-half position?",
    "ar": "أي رياضة تتضمن مركز Scrum-half؟",
    "options": [
      "Badminton",
      "Baseball",
      "Rugby union",
      "Wakeboarding"
    ],
    "optionsAr": [
      "تنس الريشة",
      "البيسبول",
      "الرغبي يونيون",
      "التزلج على الماء بلوح"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0265"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a wicketkeeper?",
    "ar": "أي رياضة تتضمن لاعبًا يُسمى حارس الويكيت؟",
    "options": [
      "Rowing",
      "Bobsleigh",
      "Cricket",
      "Discus throw"
    ],
    "optionsAr": [
      "التجديف",
      "الزحافات الجماعية",
      "الكريكيت",
      "رمي القرص"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0266"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a caddie?",
    "ar": "أي رياضة قد يستعين لاعبها بمساعد يُسمى Caddie؟",
    "options": [
      "Swimming",
      "Field hockey",
      "Golf",
      "Baseball"
    ],
    "optionsAr": [
      "السباحة",
      "هوكي الميدان",
      "الغولف",
      "البيسبول"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0267"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a pit lane?",
    "ar": "أي رياضة تستخدم ممر الصيانة Pit lane؟",
    "options": [
      "Kayaking",
      "Formula One",
      "Cross-country skiing",
      "Snowboarding"
    ],
    "optionsAr": [
      "التجديف بالكاياك",
      "الفورمولا 1",
      "التزلج الريفي",
      "التزلج على اللوح الثلجي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0268"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a starting grid?",
    "ar": "أي رياضة تستخدم شبكة انطلاق للمتسابقين؟",
    "options": [
      "Artistic gymnastics",
      "Motor racing",
      "Archery",
      "Cross-country skiing"
    ],
    "optionsAr": [
      "الجمباز الفني",
      "سباق السيارات",
      "الرماية بالقوس",
      "التزلج الريفي"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0269"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a lane rope?",
    "ar": "أي رياضة تستخدم حبالًا فاصلة بين المسارات؟",
    "options": [
      "Volleyball",
      "Cross-country skiing",
      "Rhythmic gymnastics",
      "Swimming"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "التزلج الريفي",
      "الجمباز الإيقاعي",
      "السباحة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0270"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a relay exchange zone?",
    "ar": "أي رياضة تتضمن منطقة تسليم عصا التتابع؟",
    "options": [
      "Kitesurfing",
      "Volleyball",
      "Athletics relay",
      "Rhythmic gymnastics"
    ],
    "optionsAr": [
      "ركوب الأمواج بالطائرة الورقية",
      "الكرة الطائرة",
      "تتابع ألعاب القوى",
      "الجمباز الإيقاعي"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0271"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a scrum machine in training?",
    "ar": "أي رياضة تستخدم جهاز تدريب يسمى Scrum machine؟",
    "options": [
      "Sport shooting",
      "Rugby union",
      "Pole vault",
      "Track cycling"
    ],
    "optionsAr": [
      "الرماية الرياضية",
      "الرغبي يونيون",
      "القفز بالزانة",
      "سباق الدراجات على المضمار"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0272"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a handball goal area?",
    "ar": "أي رياضة تتضمن منطقة مرمى مخصصة؟",
    "options": [
      "Motor racing",
      "Team handball",
      "Javelin throw",
      "Sport shooting"
    ],
    "optionsAr": [
      "سباق السيارات",
      "كرة اليد",
      "رمي الرمح",
      "الرماية الرياضية"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0273"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a crease in front of the goal?",
    "ar": "أي رياضة تستخدم منطقة أمام المرمى تُسمى Crease؟",
    "options": [
      "Volleyball",
      "Skeleton",
      "Ice hockey",
      "Bobsleigh"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "الهيكل العظمي الثلجي",
      "هوكي الجليد",
      "الزحافات الجماعية"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0274"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a face-off to restart play?",
    "ar": "أي رياضة تستخدم Face-off لاستئناف اللعب؟",
    "options": [
      "Ice hockey",
      "Canoeing",
      "Volleyball",
      "Pole vault"
    ],
    "optionsAr": [
      "هوكي الجليد",
      "التجديف بالكانو",
      "الكرة الطائرة",
      "القفز بالزانة"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0275"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a service box?",
    "ar": "أي رياضة تستخدم مربع الإرسال؟",
    "options": [
      "Kitesurfing",
      "Tennis",
      "Volleyball",
      "Rowing"
    ],
    "optionsAr": [
      "ركوب الأمواج بالطائرة الورقية",
      "التنس",
      "الكرة الطائرة",
      "التجديف"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0276"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a baseline and a service line?",
    "ar": "أي رياضة تستخدم خط القاعدة وخط الإرسال؟",
    "options": [
      "Tennis",
      "Archery",
      "Wrestling",
      "Kitesurfing"
    ],
    "optionsAr": [
      "التنس",
      "الرماية بالقوس",
      "المصارعة",
      "ركوب الأمواج بالطائرة الورقية"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0277"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a table-tennis paddle?",
    "ar": "أي رياضة تستخدم مضربًا صغيرًا وطاولة مقسومة بشبكة؟",
    "options": [
      "Wrestling",
      "Motor racing",
      "Kayaking",
      "Table tennis"
    ],
    "optionsAr": [
      "المصارعة",
      "سباق السيارات",
      "التجديف بالكاياك",
      "تنس الطاولة"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0278"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a cue tip to strike a white ball?",
    "ar": "أي رياضة تستخدم طرف عصا لضرب كرة بيضاء؟",
    "options": [
      "Volleyball",
      "Billiards",
      "Biathlon",
      "Artistic gymnastics"
    ],
    "optionsAr": [
      "الكرة الطائرة",
      "البلياردو",
      "البياثلون",
      "الجمباز الفني"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0279"
  },
  {
    "category": "Sports",
    "en": "Which sport uses a hula hoop as an apparatus?",
    "ar": "أي رياضة تستخدم الطوق كأداة أداء؟",
    "options": [
      "Field hockey",
      "Rhythmic gymnastics",
      "Biathlon",
      "Formula One"
    ],
    "optionsAr": [
      "هوكي الميدان",
      "الجمباز الإيقاعي",
      "البياثلون",
      "الفورمولا 1"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0280"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in association football?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة القدم؟",
    "options": [
      "11",
      "5",
      "20",
      "45"
    ],
    "optionsAr": [
      "11",
      "5",
      "20",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0281"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the court in basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة؟",
    "options": [
      "7",
      "5",
      "45",
      "8"
    ],
    "optionsAr": [
      "7",
      "5",
      "45",
      "8"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0282"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in indoor volleyball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكرة الطائرة؟",
    "options": [
      "21",
      "7",
      "10",
      "6"
    ],
    "optionsAr": [
      "21",
      "7",
      "10",
      "6"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0283"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in team handball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة اليد؟",
    "options": [
      "25",
      "7",
      "21",
      "80"
    ],
    "optionsAr": [
      "25",
      "7",
      "21",
      "80"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0284"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in rugby union?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الرغبي يونيون؟",
    "options": [
      "1",
      "25",
      "11",
      "15"
    ],
    "optionsAr": [
      "1",
      "25",
      "11",
      "15"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0285"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in rugby sevens?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في رغبي السباعيات؟",
    "options": [
      "90",
      "3",
      "7",
      "15"
    ],
    "optionsAr": [
      "90",
      "3",
      "7",
      "15"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0286"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in field hockey?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في هوكي الميدان؟",
    "options": [
      "4",
      "30",
      "45",
      "11"
    ],
    "optionsAr": [
      "4",
      "30",
      "45",
      "11"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0287"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in baseball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في البيسبول؟",
    "options": [
      "11",
      "9",
      "18",
      "20"
    ],
    "optionsAr": [
      "11",
      "9",
      "18",
      "20"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0288"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in cricket?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في فريق الكريكيت؟",
    "options": [
      "11",
      "15",
      "20",
      "45"
    ],
    "optionsAr": [
      "11",
      "15",
      "20",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0289"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in water polo?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الماء في كرة الماء؟",
    "options": [
      "6",
      "7",
      "20",
      "10"
    ],
    "optionsAr": [
      "6",
      "7",
      "20",
      "10"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0290"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in futsal?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الصالات؟",
    "options": [
      "2",
      "45",
      "5",
      "3"
    ],
    "optionsAr": [
      "2",
      "45",
      "5",
      "3"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0291"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in beach volleyball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكرة الطائرة الشاطئية؟",
    "options": [
      "80",
      "2",
      "8",
      "45"
    ],
    "optionsAr": [
      "80",
      "2",
      "8",
      "45"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0292"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in doubles badminton?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي تنس الريشة؟",
    "options": [
      "80",
      "30",
      "2",
      "45"
    ],
    "optionsAr": [
      "80",
      "30",
      "2",
      "45"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0293"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in singles tennis?",
    "ar": "كم لاعبًا يشارك من كل جهة في مباراة التنس الفردية؟",
    "options": [
      "1",
      "4",
      "3",
      "20"
    ],
    "optionsAr": [
      "1",
      "4",
      "3",
      "20"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0294"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard table-tennis game, with a two-point lead?",
    "ar": "كم نقطة يحتاج اللاعب للفوز بشوط تنس الطاولة مع فارق نقطتين؟",
    "options": [
      "9",
      "11",
      "80",
      "4"
    ],
    "optionsAr": [
      "9",
      "11",
      "80",
      "4"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0295"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard badminton game, with a two-point lead?",
    "ar": "كم نقطة يحتاج اللاعب للفوز بشوط تنس الريشة مع فارق نقطتين؟",
    "options": [
      "21",
      "20",
      "11",
      "18"
    ],
    "optionsAr": [
      "21",
      "20",
      "11",
      "18"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0296"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard association football match, excluding added time?",
    "ar": "كم دقيقة تستغرق مباراة كرة القدم في وقتها الأصلي دون الوقت بدل الضائع؟",
    "options": [
      "90",
      "5",
      "6",
      "8"
    ],
    "optionsAr": [
      "90",
      "5",
      "6",
      "8"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0297"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard rugby union match?",
    "ar": "كم دقيقة تستغرق مباراة الرغبي يونيون عادةً؟",
    "options": [
      "5",
      "8",
      "80",
      "6"
    ],
    "optionsAr": [
      "5",
      "8",
      "80",
      "6"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0298"
  },
  {
    "category": "Sports",
    "en": "How many minutes is a standard basketball game under NBA rules?",
    "ar": "كم دقيقة تستغرق مباراة كرة السلة وفق قواعد NBA؟",
    "options": [
      "48",
      "9",
      "80",
      "30"
    ],
    "optionsAr": [
      "48",
      "9",
      "80",
      "30"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0299"
  },
  {
    "category": "Sports",
    "en": "How many innings are in a standard professional baseball game?",
    "ar": "كم شوطًا في مباراة البيسبول الاحترافية؟",
    "options": [
      "2",
      "4",
      "9",
      "8"
    ],
    "optionsAr": [
      "2",
      "4",
      "9",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0300"
  },
  {
    "category": "Sports",
    "en": "How many balls are in a standard over in cricket?",
    "ar": "كم كرة قانونية يتكون منها الـOver في الكريكيت؟",
    "options": [
      "25",
      "1",
      "45",
      "6"
    ],
    "optionsAr": [
      "25",
      "1",
      "45",
      "6"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0301"
  },
  {
    "category": "Sports",
    "en": "How many holes are in a standard full round of golf?",
    "ar": "كم حفرة في جولة الغولف الكاملة المعتادة؟",
    "options": [
      "4",
      "48",
      "18",
      "10"
    ],
    "optionsAr": [
      "4",
      "48",
      "18",
      "10"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0302"
  },
  {
    "category": "Sports",
    "en": "How many events are in a standard decathlon?",
    "ar": "كم مسابقة يتضمنها العشاري في ألعاب القوى؟",
    "options": [
      "4",
      "10",
      "21",
      "11"
    ],
    "optionsAr": [
      "4",
      "10",
      "21",
      "11"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0303"
  },
  {
    "category": "Sports",
    "en": "How many events are in a standard heptathlon?",
    "ar": "كم مسابقة تتضمن السباعي في ألعاب القوى؟",
    "options": [
      "7",
      "30",
      "45",
      "2"
    ],
    "optionsAr": [
      "7",
      "30",
      "45",
      "2"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0304"
  },
  {
    "category": "Sports",
    "en": "How many rings appear in the Olympic symbol?",
    "ar": "كم حلقة تظهر في الشعار الأولمبي؟",
    "options": [
      "48",
      "5",
      "25",
      "15"
    ],
    "optionsAr": [
      "48",
      "5",
      "25",
      "15"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0305"
  },
  {
    "category": "Sports",
    "en": "How many Grand Slam tournaments are there in tennis each year?",
    "ar": "كم بطولة كبرى للتنس تُقام عادةً كل عام؟",
    "options": [
      "90",
      "4",
      "9",
      "25"
    ],
    "optionsAr": [
      "90",
      "4",
      "9",
      "25"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0306"
  },
  {
    "category": "Sports",
    "en": "How many sets must a player usually win to take a best-of-five tennis match?",
    "ar": "كم مجموعة يحتاج اللاعب للفوز بها في مباراة تنس من خمس مجموعات؟",
    "options": [
      "45",
      "30",
      "2",
      "3"
    ],
    "optionsAr": [
      "45",
      "30",
      "2",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0307"
  },
  {
    "category": "Sports",
    "en": "How many sets must a player win in a best-of-three tennis match?",
    "ar": "كم مجموعة يحتاج اللاعب للفوز بها في مباراة تنس من ثلاث مجموعات؟",
    "options": [
      "5",
      "3",
      "2",
      "21"
    ],
    "optionsAr": [
      "5",
      "3",
      "2",
      "21"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0308"
  },
  {
    "category": "Sports",
    "en": "How many points is a free throw worth in basketball?",
    "ar": "كم نقطة تساوي الرمية الحرة في كرة السلة؟",
    "options": [
      "10",
      "25",
      "1",
      "80"
    ],
    "optionsAr": [
      "10",
      "25",
      "1",
      "80"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0309"
  },
  {
    "category": "Sports",
    "en": "How many points is a shot from beyond the three-point line worth in basketball?",
    "ar": "كم نقطة تساوي التسديدة من خارج خط الثلاث نقاط؟",
    "options": [
      "10",
      "3",
      "4",
      "2"
    ],
    "optionsAr": [
      "10",
      "3",
      "4",
      "2"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0310"
  },
  {
    "category": "Sports",
    "en": "How many points is a field goal inside the three-point line worth in basketball?",
    "ar": "كم نقطة تساوي السلة من داخل خط الثلاث نقاط؟",
    "options": [
      "18",
      "9",
      "45",
      "2"
    ],
    "optionsAr": [
      "18",
      "9",
      "45",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0311"
  },
  {
    "category": "Sports",
    "en": "How many points is a touchdown worth in American football before the extra point?",
    "ar": "كم نقطة تساوي الـTouchdown في كرة القدم الأمريكية قبل نقطة الإضافة؟",
    "options": [
      "3",
      "9",
      "6",
      "48"
    ],
    "optionsAr": [
      "3",
      "9",
      "6",
      "48"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0312"
  },
  {
    "category": "Sports",
    "en": "How many points is a try worth in rugby union?",
    "ar": "كم نقطة تساوي المحاولة (Try) في الرغبي يونيون؟",
    "options": [
      "45",
      "18",
      "3",
      "5"
    ],
    "optionsAr": [
      "45",
      "18",
      "3",
      "5"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0313"
  },
  {
    "category": "Sports",
    "en": "How many points is a conversion worth in rugby union?",
    "ar": "كم نقطة تساوي الركلة التحويلية في الرغبي يونيون؟",
    "options": [
      "2",
      "9",
      "4",
      "25"
    ],
    "optionsAr": [
      "2",
      "9",
      "4",
      "25"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0314"
  },
  {
    "category": "Sports",
    "en": "How many points is a safety worth in American football?",
    "ar": "كم نقطة تساوي الـSafety في كرة القدم الأمريكية؟",
    "options": [
      "2",
      "11",
      "7",
      "8"
    ],
    "optionsAr": [
      "2",
      "11",
      "7",
      "8"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0315"
  },
  {
    "category": "Sports",
    "en": "How many bases must a runner touch to complete a home run route in baseball?",
    "ar": "كم قاعدة يجب على لاعب البيسبول لمسها لإكمال دورة الـHome run؟",
    "options": [
      "80",
      "3",
      "1",
      "4"
    ],
    "optionsAr": [
      "80",
      "3",
      "1",
      "4"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0316"
  },
  {
    "category": "Sports",
    "en": "How many strikes generally make a batter out in baseball?",
    "ar": "كم Strike تؤدي عادةً إلى خروج لاعب الضرب في البيسبول؟",
    "options": [
      "11",
      "4",
      "10",
      "3"
    ],
    "optionsAr": [
      "11",
      "4",
      "10",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0317"
  },
  {
    "category": "Sports",
    "en": "How many outs does each team get per half-inning in baseball?",
    "ar": "كم حالة خروج يحصل عليها كل فريق في نصف الشوط بالبيسبول؟",
    "options": [
      "2",
      "6",
      "21",
      "3"
    ],
    "optionsAr": [
      "2",
      "6",
      "21",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0318"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard Olympic water-polo team in the pool at once?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك داخل المسبح في كرة الماء؟",
    "options": [
      "21",
      "4",
      "7",
      "15"
    ],
    "optionsAr": [
      "21",
      "4",
      "7",
      "15"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0319"
  },
  {
    "category": "Sports",
    "en": "How many players form a standard doubles team in tennis?",
    "ar": "كم لاعبًا يشكل فريق الزوجي في التنس؟",
    "options": [
      "1",
      "18",
      "80",
      "2"
    ],
    "optionsAr": [
      "1",
      "18",
      "80",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0320"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in each standard half of a handball match?",
    "ar": "كم دقيقة في كل شوط من مباراة كرة اليد المعتادة؟",
    "options": [
      "30",
      "11",
      "15",
      "90"
    ],
    "optionsAr": [
      "30",
      "11",
      "15",
      "90"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0321"
  },
  {
    "category": "Sports",
    "en": "How many periods are played in a standard ice-hockey game?",
    "ar": "كم فترة تُلعب في مباراة هوكي الجليد؟",
    "options": [
      "10",
      "2",
      "5",
      "3"
    ],
    "optionsAr": [
      "10",
      "2",
      "5",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0322"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in each period of a standard NHL game?",
    "ar": "كم دقيقة في كل فترة من مباراة NHL؟",
    "options": [
      "20",
      "7",
      "6",
      "1"
    ],
    "optionsAr": [
      "20",
      "7",
      "6",
      "1"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0323"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in wheelchair basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة على الكراسي المتحركة؟",
    "options": [
      "30",
      "5",
      "1",
      "6"
    ],
    "optionsAr": [
      "30",
      "5",
      "1",
      "6"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0324"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in lacrosse field play?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في لاكروس الميداني؟",
    "options": [
      "10",
      "11",
      "15",
      "2"
    ],
    "optionsAr": [
      "10",
      "11",
      "15",
      "2"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0325"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in kabaddi?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الكابادي؟",
    "options": [
      "9",
      "7",
      "30",
      "18"
    ],
    "optionsAr": [
      "9",
      "7",
      "30",
      "18"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0326"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in netball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الشبكة؟",
    "options": [
      "21",
      "3",
      "7",
      "11"
    ],
    "optionsAr": [
      "21",
      "3",
      "7",
      "11"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0327"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in indoor hockey?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الهوكي الداخلي؟",
    "options": [
      "1",
      "21",
      "6",
      "18"
    ],
    "optionsAr": [
      "1",
      "21",
      "6",
      "18"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0328"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in Gaelic football?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الغيلية؟",
    "options": [
      "15",
      "80",
      "10",
      "48"
    ],
    "optionsAr": [
      "15",
      "80",
      "10",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0329"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in Australian rules football?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الأسترالية؟",
    "options": [
      "1",
      "90",
      "10",
      "18"
    ],
    "optionsAr": [
      "1",
      "90",
      "10",
      "18"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0330"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in squash singles?",
    "ar": "كم لاعبًا يشارك من كل جهة في الإسكواش الفردي؟",
    "options": [
      "21",
      "2",
      "1",
      "90"
    ],
    "optionsAr": [
      "21",
      "2",
      "1",
      "90"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0331"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard curling team?",
    "ar": "كم لاعبًا يتكون منه فريق الكيرلنغ المعتاد؟",
    "options": [
      "11",
      "4",
      "8",
      "20"
    ],
    "optionsAr": [
      "11",
      "4",
      "8",
      "20"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0332"
  },
  {
    "category": "Sports",
    "en": "How many players are on a standard baseball batting lineup?",
    "ar": "كم لاعبًا في تشكيلة الضرب الأساسية للبيسبول؟",
    "options": [
      "18",
      "5",
      "7",
      "9"
    ],
    "optionsAr": [
      "18",
      "5",
      "7",
      "9"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0333"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the court in sepak takraw doubles?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي سيباك تاكراو؟",
    "options": [
      "5",
      "30",
      "2",
      "90"
    ],
    "optionsAr": [
      "5",
      "30",
      "2",
      "90"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0334"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in sepak takraw regu?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في منافسة سيباك تاكراو الجماعية؟",
    "options": [
      "3",
      "4",
      "20",
      "10"
    ],
    "optionsAr": [
      "3",
      "4",
      "20",
      "10"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0335"
  },
  {
    "category": "Sports",
    "en": "How many players are on the field for one team in standard beach soccer?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في كرة القدم الشاطئية؟",
    "options": [
      "80",
      "5",
      "6",
      "1"
    ],
    "optionsAr": [
      "80",
      "5",
      "6",
      "1"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0336"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in pickleball doubles?",
    "ar": "كم لاعبًا من الفريق الواحد يشارك في زوجي البيكلبول؟",
    "options": [
      "25",
      "5",
      "2",
      "1"
    ],
    "optionsAr": [
      "25",
      "5",
      "2",
      "1"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0337"
  },
  {
    "category": "Sports",
    "en": "How many points are needed to win a standard volleyball set, excluding a deciding set?",
    "ar": "كم نقطة يحتاج الفريق للفوز بالشوط العادي في الكرة الطائرة دون الشوط الحاسم؟",
    "options": [
      "25",
      "80",
      "8",
      "48"
    ],
    "optionsAr": [
      "25",
      "80",
      "8",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0338"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in korfball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة الكورفبال؟",
    "options": [
      "15",
      "45",
      "80",
      "8"
    ],
    "optionsAr": [
      "15",
      "45",
      "80",
      "8"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0339"
  },
  {
    "category": "Sports",
    "en": "How many players are on court for one team in floorball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في الفلوربول؟",
    "options": [
      "6",
      "4",
      "48",
      "3"
    ],
    "optionsAr": [
      "6",
      "4",
      "48",
      "3"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0340"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on the field in association football including the goalkeeper?",
    "ar": "كم لاعبًا من الفريق الواحد داخل ملعب كرة القدم مع احتساب الحارس؟",
    "options": [
      "7",
      "5",
      "3",
      "11"
    ],
    "optionsAr": [
      "7",
      "5",
      "3",
      "11"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0341"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in a standard professional boxing round?",
    "ar": "كم دقيقة في الجولة الواحدة من الملاكمة الاحترافية عادةً؟",
    "options": [
      "7",
      "11",
      "3",
      "2"
    ],
    "optionsAr": [
      "7",
      "11",
      "3",
      "2"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0342"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in a standard amateur boxing round for elite men?",
    "ar": "كم دقيقة في الجولة الواحدة من ملاكمة النخبة للرجال عادةً؟",
    "options": [
      "3",
      "1",
      "10",
      "18"
    ],
    "optionsAr": [
      "3",
      "1",
      "10",
      "18"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0343"
  },
  {
    "category": "Sports",
    "en": "How many players are in a standard doubles badminton match on court?",
    "ar": "كم لاعبًا يشارك في مباراة زوجي تنس الريشة؟",
    "options": [
      "6",
      "15",
      "4",
      "8"
    ],
    "optionsAr": [
      "6",
      "15",
      "4",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0344"
  },
  {
    "category": "Sports",
    "en": "How many players are in a standard mixed-doubles tennis match on court?",
    "ar": "كم لاعبًا يشارك في مباراة الزوجي المختلط في التنس؟",
    "options": [
      "9",
      "11",
      "4",
      "2"
    ],
    "optionsAr": [
      "9",
      "11",
      "4",
      "2"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0345"
  },
  {
    "category": "Sports",
    "en": "How many competitors start a standard Olympic 100-metre sprint final?",
    "ar": "كم متسابقًا يشارك عادةً في نهائي سباق 100 متر الأولمبي؟",
    "options": [
      "8",
      "25",
      "48",
      "6"
    ],
    "optionsAr": [
      "8",
      "25",
      "48",
      "6"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0346"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in 3x3 basketball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة السلة 3x3؟",
    "options": [
      "10",
      "30",
      "90",
      "3"
    ],
    "optionsAr": [
      "10",
      "30",
      "90",
      "3"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0347"
  },
  {
    "category": "Sports",
    "en": "How many players from one team are on court in beach handball?",
    "ar": "كم لاعبًا من الفريق الواحد يكون داخل الملعب في كرة اليد الشاطئية؟",
    "options": [
      "4",
      "7",
      "45",
      "30"
    ],
    "optionsAr": [
      "4",
      "7",
      "45",
      "30"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0348"
  },
  {
    "category": "Sports",
    "en": "How many minutes are in one half of a standard association football match?",
    "ar": "كم دقيقة في الشوط الواحد من مباراة كرة القدم؟",
    "options": [
      "45",
      "2",
      "80",
      "11"
    ],
    "optionsAr": [
      "45",
      "2",
      "80",
      "11"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0349"
  },
  {
    "category": "Sports",
    "en": "How many points is a successful penalty kick worth in association football?",
    "ar": "كم نقطة يساوي تسجيل ركلة جزاء ناجحة في كرة القدم؟",
    "options": [
      "1",
      "5",
      "25",
      "45"
    ],
    "optionsAr": [
      "1",
      "5",
      "25",
      "45"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0350"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of one stroke under par on a hole called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أقل بضربة واحدة من المعدل للحفرة؟",
    "options": [
      "Ace",
      "Pole",
      "Starboard",
      "Birdie"
    ],
    "optionsAr": [
      "إيس",
      "الزانة",
      "الميمنة",
      "بيردي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0351"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of two strokes under par called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أقل بضربتين من المعدل؟",
    "options": [
      "Red card",
      "Winner",
      "Surfboard",
      "Eagle"
    ],
    "optionsAr": [
      "البطاقة الحمراء",
      "ضربة رابحة",
      "لوح ركوب الأمواج",
      "إيغل"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0352"
  },
  {
    "category": "Sports",
    "en": "In golf, what is a score of one stroke over par called?",
    "ar": "في الغولف، ماذا تُسمى نتيجة أعلى بضربة واحدة من المعدل؟",
    "options": [
      "Teeing ground",
      "Pole",
      "Deuce",
      "Bogey"
    ],
    "optionsAr": [
      "منطقة الانطلاق",
      "الزانة",
      "تعادل Deuce",
      "بوغي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0353"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a serve untouched by the receiver called?",
    "ar": "في التنس، ماذا تُسمى الإرسالية التي لا يلمسها المستقبل؟",
    "options": [
      "Mallet",
      "Jump",
      "Ace",
      "Bull"
    ],
    "optionsAr": [
      "مطرقة البولو",
      "قفزة",
      "إيس",
      "مركز اللوحة"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0354"
  },
  {
    "category": "Sports",
    "en": "In tennis, what score comes after 30 in a game?",
    "ar": "في التنس، ما النتيجة التي تأتي بعد 30 في الشوط؟",
    "options": [
      "Block",
      "40",
      "Assist",
      "Pit lane"
    ],
    "optionsAr": [
      "صد",
      "40",
      "تمريرة حاسمة",
      "ممر الصيانة"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0355"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a score of 40–40 called?",
    "ar": "في التنس، ماذا تُسمى نتيجة 40–40؟",
    "options": [
      "Turnover",
      "Deuce",
      "Peloton",
      "Red card"
    ],
    "optionsAr": [
      "فقدان الاستحواذ",
      "تعادل Deuce",
      "بيلوتون",
      "البطاقة الحمراء"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0356"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is the point after deuce called when a player leads by one?",
    "ar": "في التنس، ماذا تُسمى النقطة التي تمنح اللاعب أفضلية بعد التعادل؟",
    "options": [
      "Green",
      "Surfboard",
      "Net shot",
      "Advantage"
    ],
    "optionsAr": [
      "منطقة الغرين",
      "لوح ركوب الأمواج",
      "ضربة شبكية",
      "أفضلية"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0357"
  },
  {
    "category": "Sports",
    "en": "In football, what is a restart awarded after a foul inside the penalty area called?",
    "ar": "في كرة القدم، ماذا تُسمى الركلة التي تُمنح بعد مخالفة داخل منطقة الجزاء؟",
    "options": [
      "Catcher",
      "Break",
      "Green",
      "Penalty kick"
    ],
    "optionsAr": [
      "المستقبل",
      "تجميعة نقاط",
      "منطقة الغرين",
      "ركلة جزاء"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0358"
  },
  {
    "category": "Sports",
    "en": "In football, what is the restart from the corner arc called?",
    "ar": "في كرة القدم، ماذا تُسمى الركلة التي تُنفذ من قوس الركنية؟",
    "options": [
      "Missed field goal",
      "Corner kick",
      "Eagle",
      "Strikeout"
    ],
    "optionsAr": [
      "تصويبة مهدرة",
      "ركلة ركنية",
      "إيغل",
      "خروج بالضربات"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0359"
  },
  {
    "category": "Sports",
    "en": "In football, what is the restart awarded when the ball completely crosses the touchline called?",
    "ar": "في كرة القدم، ماذا يُسمى استئناف اللعب بعد خروج الكرة من خط التماس؟",
    "options": [
      "Over",
      "Yellow card",
      "Throw-in",
      "Ball"
    ],
    "optionsAr": [
      "Over",
      "البطاقة الصفراء",
      "رمية تماس",
      "Ball"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0360"
  },
  {
    "category": "Sports",
    "en": "In football, what card means a player is sent off?",
    "ar": "في كرة القدم، أي بطاقة تعني طرد اللاعب؟",
    "options": [
      "Assist",
      "Red card",
      "Starboard",
      "Coxswain"
    ],
    "optionsAr": [
      "تمريرة حاسمة",
      "البطاقة الحمراء",
      "الميمنة",
      "قائد التوجيه"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0361"
  },
  {
    "category": "Sports",
    "en": "In football, what card is a formal warning?",
    "ar": "في كرة القدم، أي بطاقة تعني إنذار اللاعب؟",
    "options": [
      "Port",
      "Yellow card",
      "Dobok",
      "Count"
    ],
    "optionsAr": [
      "الميسرة",
      "البطاقة الصفراء",
      "دوبوك",
      "العد"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0362"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is it called when a player takes too many steps without dribbling?",
    "ar": "في كرة السلة، ماذا تُسمى مخالفة المشي دون تنطيط؟",
    "options": [
      "Throw-in",
      "Clear",
      "Traveling",
      "Eagle"
    ],
    "optionsAr": [
      "رمية تماس",
      "Clear",
      "مخالفة المشي",
      "إيغل"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0363"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a shot made while jumping called?",
    "ar": "في كرة السلة، ماذا تُسمى التسديدة أثناء القفز؟",
    "options": [
      "Red card",
      "Backstroke",
      "Clear",
      "Jump shot"
    ],
    "optionsAr": [
      "البطاقة الحمراء",
      "سباحة الظهر",
      "Clear",
      "تصويبة قفز"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0364"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a pass that leads directly to a score called?",
    "ar": "في كرة السلة، ماذا تُسمى التمريرة التي تؤدي مباشرةً إلى تسجيل النقاط؟",
    "options": [
      "Try",
      "Birdie",
      "Red card",
      "Assist"
    ],
    "optionsAr": [
      "Try",
      "بيردي",
      "البطاقة الحمراء",
      "تمريرة حاسمة"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0365"
  },
  {
    "category": "Sports",
    "en": "In basketball, what is a shot that misses the basket called in statistical records?",
    "ar": "في إحصاءات كرة السلة، ماذا تُسمى التسديدة غير الناجحة؟",
    "options": [
      "Starboard",
      "Missed field goal",
      "Advantage",
      "Red card"
    ],
    "optionsAr": [
      "الميمنة",
      "تصويبة مهدرة",
      "أفضلية",
      "البطاقة الحمراء"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0366"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is a batter’s successful hit that lets them reach all four bases called?",
    "ar": "في البيسبول، ماذا تُسمى الضربة التي تسمح للاعب بإنهاء دورة القواعد كاملة؟",
    "options": [
      "Home run",
      "Piste",
      "Penalty kick",
      "Libero"
    ],
    "optionsAr": [
      "هوم ران",
      "ممر المبارزة",
      "ركلة جزاء",
      "ليبرو"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0367"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is a pitch outside the strike zone that the batter does not swing at called?",
    "ar": "في البيسبول، ماذا تُسمى الرمية خارج منطقة الضرب التي لا يحاول اللاعب ضربها؟",
    "options": [
      "Winner",
      "Coxswain",
      "Ball",
      "Backstroke"
    ],
    "optionsAr": [
      "ضربة رابحة",
      "قائد التوجيه",
      "Ball",
      "سباحة الظهر"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0368"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is three strikes against a batter called?",
    "ar": "في البيسبول، ماذا تُسمى ثلاث ضربات Strike ضد اللاعب؟",
    "options": [
      "Winner",
      "Break",
      "Backstroke",
      "Strikeout"
    ],
    "optionsAr": [
      "ضربة رابحة",
      "تجميعة نقاط",
      "سباحة الظهر",
      "خروج بالضربات"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0369"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is a delivery that dismisses the batter without a run called?",
    "ar": "في الكريكيت، ماذا تُسمى الكرة التي تُخرج اللاعب دون تسجيل نقطة؟",
    "options": [
      "Seven",
      "Wicket",
      "Surfboard",
      "Peloton"
    ],
    "optionsAr": [
      "سبع مسابقات",
      "ويكيت",
      "لوح ركوب الأمواج",
      "بيلوتون"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0370"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is scoring six runs by hitting the ball over the boundary called?",
    "ar": "في الكريكيت، ماذا يُسمى تسجيل ست نقاط بضرب الكرة خارج الحدود؟",
    "options": [
      "Six",
      "Bull",
      "Goalkeeper",
      "40"
    ],
    "optionsAr": [
      "ست نقاط",
      "مركز اللوحة",
      "حارس المرمى",
      "40"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0371"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is a set of six legal deliveries called?",
    "ar": "في الكريكيت، ماذا تُسمى مجموعة من ست كرات قانونية؟",
    "options": [
      "Ippon",
      "Conversion",
      "Over",
      "Cross-country skiing and rifle shooting"
    ],
    "optionsAr": [
      "إيبون",
      "ركلة تحويلية",
      "Over",
      "التزلج الريفي والرماية"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0372"
  },
  {
    "category": "Sports",
    "en": "In rugby, what is grounding the ball in the opponent’s in-goal area called?",
    "ar": "في الرغبي، ماذا يُسمى وضع الكرة على الأرض في منطقة تسجيل الخصم؟",
    "options": [
      "Try",
      "Clear",
      "Bogey",
      "Breaststroke"
    ],
    "optionsAr": [
      "Try",
      "Clear",
      "بوغي",
      "سباحة الصدر"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0373"
  },
  {
    "category": "Sports",
    "en": "In rugby, what is the kick after a try called?",
    "ar": "في الرغبي، ماذا تُسمى الركلة التي تأتي بعد تسجيل Try؟",
    "options": [
      "Conversion",
      "Over",
      "Birdie",
      "Winner"
    ],
    "optionsAr": [
      "ركلة تحويلية",
      "Over",
      "بيردي",
      "ضربة رابحة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0374"
  },
  {
    "category": "Sports",
    "en": "In American football, what is the player who throws the ball usually called?",
    "ar": "في كرة القدم الأمريكية، ماذا يُسمى اللاعب الذي يرمي الكرة عادةً؟",
    "options": [
      "Red card",
      "Quarterback",
      "Chequered flag",
      "Jockey"
    ],
    "optionsAr": [
      "البطاقة الحمراء",
      "Quarterback",
      "العلم المربّع",
      "فارس السباق"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0375"
  },
  {
    "category": "Sports",
    "en": "In American football, what is the defensive play that takes possession from the offense called?",
    "ar": "في كرة القدم الأمريكية، ماذا تُسمى اللعبة الدفاعية التي تستعيد فيها الكرة من الهجوم؟",
    "options": [
      "Turnover",
      "Block",
      "Exchange zone",
      "Winner"
    ],
    "optionsAr": [
      "فقدان الاستحواذ",
      "صد",
      "منطقة التسليم",
      "ضربة رابحة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0376"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is a powerful attacking hit called?",
    "ar": "في الكرة الطائرة، ماذا تُسمى الضربة الهجومية القوية؟",
    "options": [
      "Libero",
      "Spike",
      "Dobok",
      "Throw-in"
    ],
    "optionsAr": [
      "ليبرو",
      "ضربة ساحقة",
      "دوبوك",
      "رمية تماس"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0377"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is the first defensive contact against an attack at the net called?",
    "ar": "في الكرة الطائرة، ماذا تُسمى محاولة صد الهجوم عند الشبكة؟",
    "options": [
      "Block",
      "Ippon",
      "Throw-in",
      "Penalty kick"
    ],
    "optionsAr": [
      "صد",
      "إيبون",
      "رمية تماس",
      "ركلة جزاء"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0378"
  },
  {
    "category": "Sports",
    "en": "In volleyball, what is the specialist defensive player wearing a different jersey called?",
    "ar": "في الكرة الطائرة، ماذا يُسمى اللاعب الدفاعي المتخصص الذي يرتدي قميصًا مختلفًا؟",
    "options": [
      "40",
      "Backstroke",
      "Libero",
      "Let"
    ],
    "optionsAr": [
      "40",
      "سباحة الظهر",
      "ليبرو",
      "إعادة الإرسال"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0379"
  },
  {
    "category": "Sports",
    "en": "In badminton, what is a shot hit softly just over the net called?",
    "ar": "في تنس الريشة، ماذا تُسمى الضربة الخفيفة التي تعبر الشبكة مباشرة؟",
    "options": [
      "Ten",
      "Freestyle",
      "Ippon",
      "Net shot"
    ],
    "optionsAr": [
      "عشر مسابقات",
      "السباحة الحرة",
      "إيبون",
      "ضربة شبكية"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0380"
  },
  {
    "category": "Sports",
    "en": "In badminton, what is a high defensive shot to the back of the court called?",
    "ar": "في تنس الريشة، ماذا تُسمى الضربة العالية التي تصل إلى مؤخرة الملعب؟",
    "options": [
      "Ten",
      "Home run",
      "Clear",
      "Break"
    ],
    "optionsAr": [
      "عشر مسابقات",
      "هوم ران",
      "Clear",
      "تجميعة نقاط"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0381"
  },
  {
    "category": "Sports",
    "en": "In table tennis, what is a serve that clips the net and still lands correctly called?",
    "ar": "في تنس الطاولة، ماذا يُسمى الإرسال الذي يلمس الشبكة ثم يسقط بشكل صحيح؟",
    "options": [
      "Try",
      "Let",
      "Libero",
      "Ball"
    ],
    "optionsAr": [
      "Try",
      "إعادة الإرسال",
      "ليبرو",
      "Ball"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0382"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke is performed on the back?",
    "ar": "في السباحة، ما اسم السباحة التي يكون فيها السباح على ظهره؟",
    "options": [
      "Swimming, cycling and running",
      "Crossbar",
      "Backstroke",
      "Exchange zone"
    ],
    "optionsAr": [
      "السباحة والدراجات والجري",
      "العارضة",
      "سباحة الظهر",
      "منطقة التسليم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0383"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke uses a simultaneous arm recovery over the water and a frog-like kick?",
    "ar": "في السباحة، ما اسم الأسلوب الذي يستخدم حركة ذراعين متزامنة وركلة تشبه الضفدع؟",
    "options": [
      "Over",
      "Chequered flag",
      "Breaststroke",
      "Seven"
    ],
    "optionsAr": [
      "Over",
      "العلم المربّع",
      "سباحة الصدر",
      "سبع مسابقات"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0384"
  },
  {
    "category": "Sports",
    "en": "In swimming, what stroke uses alternating arm movements and a flutter kick?",
    "ar": "في السباحة، ما اسم الأسلوب الذي يستخدم حركة ذراعين متبادلة وركلة رفرفة؟",
    "options": [
      "Freestyle",
      "House",
      "Coxswain",
      "Bull"
    ],
    "optionsAr": [
      "السباحة الحرة",
      "البيت",
      "قائد التوجيه",
      "مركز اللوحة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0385"
  },
  {
    "category": "Sports",
    "en": "In track athletics, what is the area where a runner hands a baton to a teammate called?",
    "ar": "في سباقات التتابع، ماذا تُسمى المنطقة التي يسلم فيها العداء العصا لزميله؟",
    "options": [
      "Exchange zone",
      "Penalty kick",
      "Conversion",
      "Clear"
    ],
    "optionsAr": [
      "منطقة التسليم",
      "ركلة جزاء",
      "ركلة تحويلية",
      "Clear"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0386"
  },
  {
    "category": "Sports",
    "en": "In high jump, what is the horizontal bar the athlete must clear called?",
    "ar": "في الوثب العالي، ماذا يُسمى الحاجز الأفقي الذي يجب على اللاعب تجاوزه؟",
    "options": [
      "Let",
      "Crossbar",
      "Goalkeeper",
      "Teeing ground"
    ],
    "optionsAr": [
      "إعادة الإرسال",
      "العارضة",
      "حارس المرمى",
      "منطقة الانطلاق"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0387"
  },
  {
    "category": "Sports",
    "en": "In pole vault, what object helps the athlete rise over the bar?",
    "ar": "في القفز بالزانة، ما الأداة التي تساعد اللاعب على تجاوز العارضة؟",
    "options": [
      "Jump",
      "Catcher",
      "Pole",
      "Six"
    ],
    "optionsAr": [
      "قفزة",
      "المستقبل",
      "الزانة",
      "ست نقاط"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0388"
  },
  {
    "category": "Sports",
    "en": "In cycling, what is the group of riders moving together called?",
    "ar": "في سباق الدراجات، ماذا تُسمى مجموعة الدراجين التي تتحرك معًا؟",
    "options": [
      "Ace",
      "Peloton",
      "Advantage",
      "Swimming, cycling and running"
    ],
    "optionsAr": [
      "إيس",
      "بيلوتون",
      "أفضلية",
      "السباحة والدراجات والجري"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0389"
  },
  {
    "category": "Sports",
    "en": "In Formula One, what is the area where cars stop for tire changes called?",
    "ar": "في الفورمولا 1، ماذا تُسمى المنطقة التي تتوقف فيها السيارات لتغيير الإطارات؟",
    "options": [
      "Jockey",
      "Pit lane",
      "Home run",
      "Corner kick"
    ],
    "optionsAr": [
      "فارس السباق",
      "ممر الصيانة",
      "هوم ران",
      "ركلة ركنية"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0390"
  },
  {
    "category": "Sports",
    "en": "In Formula One, what flag signals the end of a race?",
    "ar": "في الفورمولا 1، أي علم يشير إلى نهاية السباق؟",
    "options": [
      "Corner kick",
      "Five",
      "Backstroke",
      "Chequered flag"
    ],
    "optionsAr": [
      "ركلة ركنية",
      "خمس رياضات",
      "سباحة الظهر",
      "العلم المربّع"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0391"
  },
  {
    "category": "Sports",
    "en": "In boxing, what is a win when an opponent cannot continue called?",
    "ar": "في الملاكمة، ماذا يُسمى الفوز عندما لا يستطيع الخصم الاستمرار؟",
    "options": [
      "Jump",
      "Six",
      "Knockout",
      "Red card"
    ],
    "optionsAr": [
      "قفزة",
      "ست نقاط",
      "ضربة قاضية",
      "البطاقة الحمراء"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0392"
  },
  {
    "category": "Sports",
    "en": "In boxing, what is a referee’s count after a boxer is knocked down part of?",
    "ar": "في الملاكمة، ماذا يُسمى العد الذي يجريه الحكم بعد سقوط الملاكم؟",
    "options": [
      "Six",
      "Count",
      "Goalkeeper",
      "Red card"
    ],
    "optionsAr": [
      "ست نقاط",
      "العد",
      "حارس المرمى",
      "البطاقة الحمراء"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0393"
  },
  {
    "category": "Sports",
    "en": "In judo, what is the highest score that ends a contest immediately called?",
    "ar": "في الجودو، ماذا تُسمى أعلى نتيجة تنهي النزال مباشرة؟",
    "options": [
      "Peloton",
      "Backstroke",
      "Clear",
      "Ippon"
    ],
    "optionsAr": [
      "بيلوتون",
      "سباحة الظهر",
      "Clear",
      "إيبون"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0394"
  },
  {
    "category": "Sports",
    "en": "In taekwondo, what is the uniform worn by competitors called?",
    "ar": "في التايكوندو، ماذا تُسمى البدلة التي يرتديها اللاعبون؟",
    "options": [
      "Dobok",
      "Bullseye",
      "Exchange zone",
      "Quarterback"
    ],
    "optionsAr": [
      "دوبوك",
      "مركز الهدف",
      "منطقة التسليم",
      "Quarterback"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0395"
  },
  {
    "category": "Sports",
    "en": "In fencing, what is the playing area called?",
    "ar": "في المبارزة، ماذا تُسمى مساحة اللعب؟",
    "options": [
      "Corner kick",
      "Piste",
      "Freestyle",
      "Dobok"
    ],
    "optionsAr": [
      "ركلة ركنية",
      "ممر المبارزة",
      "السباحة الحرة",
      "دوبوك"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0396"
  },
  {
    "category": "Sports",
    "en": "In golf, what is the area of closely mown grass around the hole called?",
    "ar": "في الغولف، ماذا تُسمى المنطقة ذات العشب القصير حول الحفرة؟",
    "options": [
      "Green",
      "Surfboard",
      "House",
      "Try"
    ],
    "optionsAr": [
      "منطقة الغرين",
      "لوح ركوب الأمواج",
      "البيت",
      "Try"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0397"
  },
  {
    "category": "Sports",
    "en": "In golf, what is the starting area for a hole called?",
    "ar": "في الغولف، ماذا تُسمى منطقة بداية الحفرة؟",
    "options": [
      "Conversion",
      "Yellow card",
      "Catcher",
      "Teeing ground"
    ],
    "optionsAr": [
      "ركلة تحويلية",
      "البطاقة الصفراء",
      "المستقبل",
      "منطقة الانطلاق"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0398"
  },
  {
    "category": "Sports",
    "en": "In curling, what is the target area of concentric circles called?",
    "ar": "في الكيرلنغ، ماذا تُسمى منطقة الهدف المكوّنة من دوائر متداخلة؟",
    "options": [
      "Coxswain",
      "Starboard",
      "House",
      "Try"
    ],
    "optionsAr": [
      "قائد التوجيه",
      "الميمنة",
      "البيت",
      "Try"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0399"
  },
  {
    "category": "Sports",
    "en": "In archery, what is the center of the target called?",
    "ar": "في الرماية بالقوس، ماذا يُسمى مركز الهدف؟",
    "options": [
      "Jump shot",
      "Let",
      "Port",
      "Bullseye"
    ],
    "optionsAr": [
      "تصويبة قفز",
      "إعادة الإرسال",
      "الميسرة",
      "مركز الهدف"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0400"
  },
  {
    "category": "Sports",
    "en": "In surfing, what is the rider’s board called?",
    "ar": "في ركوب الأمواج، ماذا يُسمى اللوح الذي يقف عليه اللاعب؟",
    "options": [
      "Swimming, cycling and running",
      "Surfboard",
      "Five",
      "Home run"
    ],
    "optionsAr": [
      "السباحة والدراجات والجري",
      "لوح ركوب الأمواج",
      "خمس رياضات",
      "هوم ران"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0401"
  },
  {
    "category": "Sports",
    "en": "In sailing, what is the left side of a boat facing forward called?",
    "ar": "في الإبحار، ماذا يُسمى الجانب الأيسر من القارب عند النظر إلى الأمام؟",
    "options": [
      "Winner",
      "Port",
      "Dobok",
      "Stick landing"
    ],
    "optionsAr": [
      "ضربة رابحة",
      "الميسرة",
      "دوبوك",
      "هبوط ثابت"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0402"
  },
  {
    "category": "Sports",
    "en": "In sailing, what is the right side of a boat facing forward called?",
    "ar": "في الإبحار، ماذا يُسمى الجانب الأيمن من القارب عند النظر إلى الأمام؟",
    "options": [
      "Starboard",
      "Assist",
      "Corner kick",
      "Red card"
    ],
    "optionsAr": [
      "الميمنة",
      "تمريرة حاسمة",
      "ركلة ركنية",
      "البطاقة الحمراء"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0403"
  },
  {
    "category": "Sports",
    "en": "In rowing, what is the person who calls rhythm and directs a crew called?",
    "ar": "في التجديف، ماذا يُسمى الشخص الذي يوجه الطاقم وينظم الإيقاع؟",
    "options": [
      "Yellow card",
      "Coxswain",
      "Let",
      "Bullseye"
    ],
    "optionsAr": [
      "البطاقة الصفراء",
      "قائد التوجيه",
      "إعادة الإرسال",
      "مركز الهدف"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0404"
  },
  {
    "category": "Sports",
    "en": "In horse racing, what is the person who rides a racehorse called?",
    "ar": "في سباق الخيل، ماذا يُسمى الشخص الذي يمتطي الحصان؟",
    "options": [
      "Jockey",
      "Coxswain",
      "Birdie",
      "Mallet"
    ],
    "optionsAr": [
      "فارس السباق",
      "قائد التوجيه",
      "بيردي",
      "مطرقة البولو"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0405"
  },
  {
    "category": "Sports",
    "en": "In polo, what is the long-handled tool used to hit the ball called?",
    "ar": "في البولو، ماذا تُسمى العصا الطويلة المستخدمة لضرب الكرة؟",
    "options": [
      "Cross-country skiing and rifle shooting",
      "Try",
      "Mallet",
      "Starboard"
    ],
    "optionsAr": [
      "التزلج الريفي والرماية",
      "Try",
      "مطرقة البولو",
      "الميمنة"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0406"
  },
  {
    "category": "Sports",
    "en": "In snooker, what is the act of potting a red followed by a color called in scoring?",
    "ar": "في السنوكر، ماذا يُسمى تسجيل كرة حمراء ثم كرة ملونة في التسلسل؟",
    "options": [
      "Home run",
      "Ippon",
      "Break",
      "Jockey"
    ],
    "optionsAr": [
      "هوم ران",
      "إيبون",
      "تجميعة نقاط",
      "فارس السباق"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0407"
  },
  {
    "category": "Sports",
    "en": "In darts, what is the central scoring area of the board called?",
    "ar": "في لعبة السهام، ماذا تُسمى المنطقة المركزية في لوحة الأهداف؟",
    "options": [
      "Swimming, cycling and running",
      "Six",
      "Net shot",
      "Bull"
    ],
    "optionsAr": [
      "السباحة والدراجات والجري",
      "ست نقاط",
      "ضربة شبكية",
      "مركز اللوحة"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0408"
  },
  {
    "category": "Sports",
    "en": "In gymnastics, what is a controlled landing after a jump called?",
    "ar": "في الجمباز، ماذا تُسمى نهاية القفزة بهبوط متحكم به؟",
    "options": [
      "Stick landing",
      "Bowler",
      "Peloton",
      "Swimming, cycling and running"
    ],
    "optionsAr": [
      "هبوط ثابت",
      "رامي الكرة",
      "بيلوتون",
      "السباحة والدراجات والجري"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0409"
  },
  {
    "category": "Sports",
    "en": "In figure skating, what is a jump with an edge takeoff and one or more rotations called?",
    "ar": "في التزلج الفني، ماذا تُسمى القفزة التي تنطلق من حافة الشفرة وتتضمن دورانًا؟",
    "options": [
      "Pole",
      "Jump",
      "Conversion",
      "Teeing ground"
    ],
    "optionsAr": [
      "الزانة",
      "قفزة",
      "ركلة تحويلية",
      "منطقة الانطلاق"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0410"
  },
  {
    "category": "Sports",
    "en": "In biathlon, which two disciplines are combined?",
    "ar": "في البياثلون، ما الرياضتان اللتان يتم الجمع بينهما؟",
    "options": [
      "Cross-country skiing and rifle shooting",
      "Wicket",
      "Turnover",
      "Spike"
    ],
    "optionsAr": [
      "التزلج الريفي والرماية",
      "ويكيت",
      "فقدان الاستحواذ",
      "ضربة ساحقة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0411"
  },
  {
    "category": "Sports",
    "en": "In triathlon, which three disciplines are combined?",
    "ar": "في الترايثلون، ما الرياضات الثلاث التي يتم الجمع بينها؟",
    "options": [
      "Swimming, cycling and running",
      "Starboard",
      "Let",
      "Strikeout"
    ],
    "optionsAr": [
      "السباحة والدراجات والجري",
      "الميمنة",
      "إعادة الإرسال",
      "خروج بالضربات"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0412"
  },
  {
    "category": "Sports",
    "en": "In modern pentathlon, how many disciplines are combined?",
    "ar": "في الخماسي الحديث، كم رياضة يتم الجمع بينها؟",
    "options": [
      "Conversion",
      "Assist",
      "Break",
      "Five"
    ],
    "optionsAr": [
      "ركلة تحويلية",
      "تمريرة حاسمة",
      "تجميعة نقاط",
      "خمس رياضات"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0413"
  },
  {
    "category": "Sports",
    "en": "In decathlon, how many athletics events are combined?",
    "ar": "في العشاري، كم مسابقة من ألعاب القوى يتم الجمع بينها؟",
    "options": [
      "Net shot",
      "Starboard",
      "Ten",
      "Knockout"
    ],
    "optionsAr": [
      "ضربة شبكية",
      "الميمنة",
      "عشر مسابقات",
      "ضربة قاضية"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0414"
  },
  {
    "category": "Sports",
    "en": "In heptathlon, how many athletics events are combined?",
    "ar": "في السباعي، كم مسابقة من ألعاب القوى يتم الجمع بينها؟",
    "options": [
      "Five",
      "Seven",
      "House",
      "Stick landing"
    ],
    "optionsAr": [
      "خمس رياضات",
      "سبع مسابقات",
      "البيت",
      "هبوط ثابت"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0415"
  },
  {
    "category": "Sports",
    "en": "In cricket, what is the player who delivers the ball called?",
    "ar": "في الكريكيت، ماذا يُسمى اللاعب الذي يرمي الكرة؟",
    "options": [
      "Teeing ground",
      "Ace",
      "Dobok",
      "Bowler"
    ],
    "optionsAr": [
      "منطقة الانطلاق",
      "إيس",
      "دوبوك",
      "رامي الكرة"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0416"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is the player who throws the ball to the batter called?",
    "ar": "في البيسبول، ماذا يُسمى اللاعب الذي يرمي الكرة نحو الضارب؟",
    "options": [
      "Backstroke",
      "Missed field goal",
      "Pitcher",
      "Goalkeeper"
    ],
    "optionsAr": [
      "سباحة الظهر",
      "تصويبة مهدرة",
      "رامي الكرة",
      "حارس المرمى"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0417"
  },
  {
    "category": "Sports",
    "en": "In baseball, what is the player who catches pitches behind home plate called?",
    "ar": "في البيسبول، ماذا يُسمى اللاعب الذي يستقبل الرميات خلف لوحة المنزل؟",
    "options": [
      "Ball",
      "Birdie",
      "Catcher",
      "Block"
    ],
    "optionsAr": [
      "Ball",
      "بيردي",
      "المستقبل",
      "صد"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0418"
  },
  {
    "category": "Sports",
    "en": "In football, what is the player who guards the goal called?",
    "ar": "في كرة القدم، ماذا يُسمى اللاعب الذي يحرس المرمى؟",
    "options": [
      "Goalkeeper",
      "Red card",
      "Green",
      "Starboard"
    ],
    "optionsAr": [
      "حارس المرمى",
      "البطاقة الحمراء",
      "منطقة الغرين",
      "الميمنة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0419"
  },
  {
    "category": "Sports",
    "en": "In tennis, what is a shot that wins the point without the opponent touching it called?",
    "ar": "في التنس، ماذا تُسمى الضربة التي تفوز بالنقطة دون أن يلمسها الخصم؟",
    "options": [
      "Ten",
      "Knockout",
      "Winner",
      "Breaststroke"
    ],
    "optionsAr": [
      "عشر مسابقات",
      "ضربة قاضية",
      "ضربة رابحة",
      "سباحة الصدر"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0420"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Shawshank Redemption”?",
    "ar": "من الممثل الرئيسي في فيلم «The Shawshank Redemption»؟",
    "options": [
      "Tobey Maguire",
      "Anthony Gonzalez",
      "Tim Robbins",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "Tobey Maguire",
      "Anthony Gonzalez",
      "Tim Robbins",
      "Cillian Murphy"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0421"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Godfather”?",
    "ar": "من الممثل الرئيسي في فيلم «The Godfather»؟",
    "options": [
      "Marlon Brando",
      "Elijah Wood",
      "Benedict Cumberbatch",
      "Tom Hardy"
    ],
    "optionsAr": [
      "Marlon Brando",
      "Elijah Wood",
      "Benedict Cumberbatch",
      "Tom Hardy"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0422"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Dark Knight”?",
    "ar": "من الممثل الرئيسي في فيلم «The Dark Knight»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Harrison Ford",
      "Matthew McConaughey"
    ],
    "optionsAr": [
      "Christian Bale",
      "Matt Damon",
      "Harrison Ford",
      "Matthew McConaughey"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0423"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Pulp Fiction”?",
    "ar": "من الممثل الرئيسي في فيلم «Pulp Fiction»؟",
    "options": [
      "Anthony Gonzalez",
      "Naomi Watts",
      "John Travolta",
      "Harrison Ford"
    ],
    "optionsAr": [
      "Anthony Gonzalez",
      "Naomi Watts",
      "John Travolta",
      "Harrison Ford"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0424"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Forrest Gump”?",
    "ar": "من الممثل الرئيسي في فيلم «Forrest Gump»؟",
    "options": [
      "Tim Robbins",
      "Yōji Matsuda",
      "Marlon Brando",
      "Tom Hanks"
    ],
    "optionsAr": [
      "Tim Robbins",
      "Yōji Matsuda",
      "Marlon Brando",
      "Tom Hanks"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0425"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Inception”?",
    "ar": "من الممثل الرئيسي في فيلم «Inception»؟",
    "options": [
      "Leonardo DiCaprio",
      "Michael J. Fox",
      "Macaulay Culkin",
      "Mike Myers"
    ],
    "optionsAr": [
      "Leonardo DiCaprio",
      "Michael J. Fox",
      "Macaulay Culkin",
      "Mike Myers"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0426"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Titanic”?",
    "ar": "من الممثل الرئيسي في فيلم «Titanic»؟",
    "options": [
      "Miles Teller",
      "Naomi Watts",
      "Leonardo DiCaprio",
      "Liam Neeson"
    ],
    "optionsAr": [
      "Miles Teller",
      "Naomi Watts",
      "Leonardo DiCaprio",
      "Liam Neeson"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0427"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Avatar”?",
    "ar": "من الممثل الرئيسي في فيلم «Avatar»؟",
    "options": [
      "Jim Carrey",
      "Miles Teller",
      "Sam Worthington",
      "Johnny Depp"
    ],
    "optionsAr": [
      "Jim Carrey",
      "Miles Teller",
      "Sam Worthington",
      "Johnny Depp"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0428"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Jurassic Park”?",
    "ar": "من الممثل الرئيسي في فيلم «Jurassic Park»؟",
    "options": [
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Sam Neill",
      "Benicio del Toro"
    ],
    "optionsAr": [
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Sam Neill",
      "Benicio del Toro"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0429"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “E.T. the Extra-Terrestrial”?",
    "ar": "من الممثل الرئيسي في فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Chadwick Boseman",
      "Henry Thomas"
    ],
    "optionsAr": [
      "Christian Bale",
      "Matt Damon",
      "Chadwick Boseman",
      "Henry Thomas"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0430"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Jaws”?",
    "ar": "من الممثل الرئيسي في فيلم «Jaws»؟",
    "options": [
      "Ben Burtt",
      "Elijah Wood",
      "Roy Scheider",
      "Benedict Cumberbatch"
    ],
    "optionsAr": [
      "Ben Burtt",
      "Elijah Wood",
      "Roy Scheider",
      "Benedict Cumberbatch"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0431"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Schindler’s List”?",
    "ar": "من الممثل الرئيسي في فيلم «Schindler’s List»؟",
    "options": [
      "Liam Neeson",
      "Johnny Depp",
      "Paige O’Hara",
      "Tom Hardy"
    ],
    "optionsAr": [
      "Liam Neeson",
      "Johnny Depp",
      "Paige O’Hara",
      "Tom Hardy"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0432"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Saving Private Ryan”?",
    "ar": "من الممثل الرئيسي في فيلم «Saving Private Ryan»؟",
    "options": [
      "Chadwick Boseman",
      "Roy Scheider",
      "Harrison Ford",
      "Tom Hanks"
    ],
    "optionsAr": [
      "Chadwick Boseman",
      "Roy Scheider",
      "Harrison Ford",
      "Tom Hanks"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0433"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Back to the Future”?",
    "ar": "من الممثل الرئيسي في فيلم «Back to the Future»؟",
    "options": [
      "Kristen Bell",
      "Benicio del Toro",
      "Michael J. Fox",
      "Chris Hemsworth"
    ],
    "optionsAr": [
      "Kristen Bell",
      "Benicio del Toro",
      "Michael J. Fox",
      "Chris Hemsworth"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0434"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Cast Away”?",
    "ar": "من الممثل الرئيسي في فيلم «Cast Away»؟",
    "options": [
      "Tom Hanks",
      "Christian Bale",
      "Robert De Niro",
      "Fionn Whitehead"
    ],
    "optionsAr": [
      "Tom Hanks",
      "Christian Bale",
      "Robert De Niro",
      "Fionn Whitehead"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0435"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Gladiator”?",
    "ar": "من الممثل الرئيسي في فيلم «Gladiator»؟",
    "options": [
      "Robin Williams",
      "Hugh Jackman",
      "Ben Burtt",
      "Russell Crowe"
    ],
    "optionsAr": [
      "Robin Williams",
      "Hugh Jackman",
      "Ben Burtt",
      "Russell Crowe"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0436"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Alien”?",
    "ar": "من الممثل الرئيسي في فيلم «Alien»؟",
    "options": [
      "Robert De Niro",
      "Sigourney Weaver",
      "Jack Black",
      "Sam Worthington"
    ],
    "optionsAr": [
      "Robert De Niro",
      "Sigourney Weaver",
      "Jack Black",
      "Sam Worthington"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0437"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Martian”?",
    "ar": "من الممثل الرئيسي في فيلم «The Martian»؟",
    "options": [
      "Ed Asner",
      "Yōji Matsuda",
      "Matt Damon",
      "Ralph Fiennes"
    ],
    "optionsAr": [
      "Ed Asner",
      "Yōji Matsuda",
      "Matt Damon",
      "Ralph Fiennes"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0438"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Blade Runner”?",
    "ar": "من الممثل الرئيسي في فيلم «Blade Runner»؟",
    "options": [
      "Ben Burtt",
      "Johnny Depp",
      "Tom Hanks",
      "Harrison Ford"
    ],
    "optionsAr": [
      "Ben Burtt",
      "Johnny Depp",
      "Tom Hanks",
      "Harrison Ford"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0439"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Mad Max: Fury Road”?",
    "ar": "من الممثل الرئيسي في فيلم «Mad Max: Fury Road»؟",
    "options": [
      "Jack Black",
      "Tom Hardy",
      "Yōji Matsuda",
      "Martin Freeman"
    ],
    "optionsAr": [
      "Jack Black",
      "Tom Hardy",
      "Yōji Matsuda",
      "Martin Freeman"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0440"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Lord of the Rings: The Fellowship of the Ring”?",
    "ar": "من الممثل الرئيسي في فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "Amy Poehler",
      "Elijah Wood",
      "Russell Crowe",
      "Hugh Jackman"
    ],
    "optionsAr": [
      "Amy Poehler",
      "Elijah Wood",
      "Russell Crowe",
      "Hugh Jackman"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0441"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Hobbit: An Unexpected Journey”?",
    "ar": "من الممثل الرئيسي في فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "Henry Thomas",
      "Martin Freeman",
      "Yōji Matsuda",
      "Tom Hardy"
    ],
    "optionsAr": [
      "Henry Thomas",
      "Martin Freeman",
      "Yōji Matsuda",
      "Tom Hardy"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0442"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “King Kong”?",
    "ar": "من الممثل الرئيسي في فيلم «King Kong»؟",
    "options": [
      "Naomi Watts",
      "Amy Poehler",
      "Kristen Bell",
      "Ed Asner"
    ],
    "optionsAr": [
      "Naomi Watts",
      "Amy Poehler",
      "Kristen Bell",
      "Ed Asner"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0443"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Spider-Man”?",
    "ar": "من الممثل الرئيسي في فيلم «Spider-Man»؟",
    "options": [
      "Tobey Maguire",
      "Paige O’Hara",
      "Harrison Ford",
      "Tim Robbins"
    ],
    "optionsAr": [
      "Tobey Maguire",
      "Paige O’Hara",
      "Harrison Ford",
      "Tim Robbins"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0444"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Doctor Strange”?",
    "ar": "من الممثل الرئيسي في فيلم «Doctor Strange»؟",
    "options": [
      "Benedict Cumberbatch",
      "Chris Hemsworth",
      "Jim Carrey",
      "Miles Teller"
    ],
    "optionsAr": [
      "Benedict Cumberbatch",
      "Chris Hemsworth",
      "Jim Carrey",
      "Miles Teller"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0445"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Black Panther”?",
    "ar": "من الممثل الرئيسي في فيلم «Black Panther»؟",
    "options": [
      "Chadwick Boseman",
      "Matthew Broderick",
      "Daniel Radcliffe",
      "Liam Neeson"
    ],
    "optionsAr": [
      "Chadwick Boseman",
      "Matthew Broderick",
      "Daniel Radcliffe",
      "Liam Neeson"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0446"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Iron Man”?",
    "ar": "من الممثل الرئيسي في فيلم «Iron Man»؟",
    "options": [
      "Henry Thomas",
      "Robert Downey Jr.",
      "Daniel Radcliffe",
      "Naomi Watts"
    ],
    "optionsAr": [
      "Henry Thomas",
      "Robert Downey Jr.",
      "Daniel Radcliffe",
      "Naomi Watts"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0447"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Avengers”?",
    "ar": "من الممثل الرئيسي في فيلم «The Avengers»؟",
    "options": [
      "Miles Teller",
      "Robert Downey Jr.",
      "Matt Damon",
      "Kristen Bell"
    ],
    "optionsAr": [
      "Miles Teller",
      "Robert Downey Jr.",
      "Matt Damon",
      "Kristen Bell"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0448"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Guardians of the Galaxy”?",
    "ar": "من الممثل الرئيسي في فيلم «Guardians of the Galaxy»؟",
    "options": [
      "Chris Pratt",
      "Tobey Maguire",
      "Tom Hardy",
      "Auliʻi Cravalho"
    ],
    "optionsAr": [
      "Chris Pratt",
      "Tobey Maguire",
      "Tom Hardy",
      "Auliʻi Cravalho"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0449"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Thor: Ragnarok”?",
    "ar": "من الممثل الرئيسي في فيلم «Thor: Ragnarok»؟",
    "options": [
      "Benicio del Toro",
      "Sigourney Weaver",
      "Marlon Brando",
      "Chris Hemsworth"
    ],
    "optionsAr": [
      "Benicio del Toro",
      "Sigourney Weaver",
      "Marlon Brando",
      "Chris Hemsworth"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0450"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Captain America: The First Avenger”?",
    "ar": "من الممثل الرئيسي في فيلم «Captain America: The First Avenger»؟",
    "options": [
      "Chris Evans",
      "Ed Asner",
      "Daniel Radcliffe",
      "Scott Weinger"
    ],
    "optionsAr": [
      "Chris Evans",
      "Ed Asner",
      "Daniel Radcliffe",
      "Scott Weinger"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0451"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Frozen”?",
    "ar": "من الممثل الرئيسي في فيلم «Frozen»؟",
    "options": [
      "Anthony Gonzalez",
      "Jim Carrey",
      "Cillian Murphy",
      "Kristen Bell"
    ],
    "optionsAr": [
      "Anthony Gonzalez",
      "Jim Carrey",
      "Cillian Murphy",
      "Kristen Bell"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0452"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Moana”?",
    "ar": "من الممثل الرئيسي في فيلم «Moana»؟",
    "options": [
      "Albert Brooks",
      "Miles Teller",
      "Auliʻi Cravalho",
      "Matthew McConaughey"
    ],
    "optionsAr": [
      "Albert Brooks",
      "Miles Teller",
      "Auliʻi Cravalho",
      "Matthew McConaughey"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0453"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Toy Story”?",
    "ar": "من الممثل الرئيسي في فيلم «Toy Story»؟",
    "options": [
      "Albert Brooks",
      "Harrison Ford",
      "Tom Hanks",
      "Johnny Depp"
    ],
    "optionsAr": [
      "Albert Brooks",
      "Harrison Ford",
      "Tom Hanks",
      "Johnny Depp"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0454"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Finding Nemo”?",
    "ar": "من الممثل الرئيسي في فيلم «Finding Nemo»؟",
    "options": [
      "Robert Downey Jr.",
      "Albert Brooks",
      "Chris Pratt",
      "Elijah Wood"
    ],
    "optionsAr": [
      "Robert Downey Jr.",
      "Albert Brooks",
      "Chris Pratt",
      "Elijah Wood"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0455"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Up”?",
    "ar": "من الممثل الرئيسي في فيلم «Up»؟",
    "options": [
      "Jack Black",
      "Ed Asner",
      "Chris Evans",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "Jack Black",
      "Ed Asner",
      "Chris Evans",
      "Cillian Murphy"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0456"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Inside Out”?",
    "ar": "من الممثل الرئيسي في فيلم «Inside Out»؟",
    "options": [
      "Miles Teller",
      "Benedict Cumberbatch",
      "Albert Brooks",
      "Amy Poehler"
    ],
    "optionsAr": [
      "Miles Teller",
      "Benedict Cumberbatch",
      "Albert Brooks",
      "Amy Poehler"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0457"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Coco”?",
    "ar": "من الممثل الرئيسي في فيلم «Coco»؟",
    "options": [
      "Roy Scheider",
      "Matthew Broderick",
      "Anthony Gonzalez",
      "Kristen Bell"
    ],
    "optionsAr": [
      "Roy Scheider",
      "Matthew Broderick",
      "Anthony Gonzalez",
      "Kristen Bell"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0458"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Ratatouille”?",
    "ar": "من الممثل الرئيسي في فيلم «Ratatouille»؟",
    "options": [
      "Christian Bale",
      "Matt Damon",
      "Tom Hanks",
      "Patton Oswalt"
    ],
    "optionsAr": [
      "Christian Bale",
      "Matt Damon",
      "Tom Hanks",
      "Patton Oswalt"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0459"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “WALL-E”?",
    "ar": "من الممثل الرئيسي في فيلم «WALL-E»؟",
    "options": [
      "Ben Burtt",
      "Benedict Cumberbatch",
      "Jack Black",
      "Chris Pratt"
    ],
    "optionsAr": [
      "Ben Burtt",
      "Benedict Cumberbatch",
      "Jack Black",
      "Chris Pratt"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0460"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Spirited Away”?",
    "ar": "من الممثل الرئيسي في فيلم «Spirited Away»؟",
    "options": [
      "Ryan Gosling",
      "Martin Freeman",
      "Rumi Hiiragi",
      "Liam Neeson"
    ],
    "optionsAr": [
      "Ryan Gosling",
      "Martin Freeman",
      "Rumi Hiiragi",
      "Liam Neeson"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0461"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “My Neighbor Totoro”?",
    "ar": "من الممثل الرئيسي في فيلم «My Neighbor Totoro»؟",
    "options": [
      "Sam Neill",
      "Henry Thomas",
      "Noriko Hidaka",
      "Miles Teller"
    ],
    "optionsAr": [
      "Sam Neill",
      "Henry Thomas",
      "Noriko Hidaka",
      "Miles Teller"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0462"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Princess Mononoke”?",
    "ar": "من الممثل الرئيسي في فيلم «Princess Mononoke»؟",
    "options": [
      "Harrison Ford",
      "Matt Damon",
      "Yōji Matsuda",
      "Chris Evans"
    ],
    "optionsAr": [
      "Harrison Ford",
      "Matt Damon",
      "Yōji Matsuda",
      "Chris Evans"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0463"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Lion King”?",
    "ar": "من الممثل الرئيسي في فيلم «The Lion King»؟",
    "options": [
      "Kristen Bell",
      "Robert Downey Jr.",
      "Matthew Broderick",
      "Paige O’Hara"
    ],
    "optionsAr": [
      "Kristen Bell",
      "Robert Downey Jr.",
      "Matthew Broderick",
      "Paige O’Hara"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0464"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Aladdin”?",
    "ar": "من الممثل الرئيسي في فيلم «Aladdin»؟",
    "options": [
      "Yōji Matsuda",
      "Roy Scheider",
      "Scott Weinger",
      "Daniel Radcliffe"
    ],
    "optionsAr": [
      "Yōji Matsuda",
      "Roy Scheider",
      "Scott Weinger",
      "Daniel Radcliffe"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0465"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Beauty and the Beast”?",
    "ar": "من الممثل الرئيسي في فيلم «Beauty and the Beast»؟",
    "options": [
      "Paige O’Hara",
      "Anthony Gonzalez",
      "Henry Thomas",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "Paige O’Hara",
      "Anthony Gonzalez",
      "Henry Thomas",
      "Cillian Murphy"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0466"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Shrek”?",
    "ar": "من الممثل الرئيسي في فيلم «Shrek»؟",
    "options": [
      "Patton Oswalt",
      "Mike Myers",
      "Sam Neill",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "Patton Oswalt",
      "Mike Myers",
      "Sam Neill",
      "Ryan Gosling"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0467"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Kung Fu Panda”?",
    "ar": "من الممثل الرئيسي في فيلم «Kung Fu Panda»؟",
    "options": [
      "Matthew Broderick",
      "Albert Brooks",
      "Jack Black",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "Matthew Broderick",
      "Albert Brooks",
      "Jack Black",
      "Ryan Gosling"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0468"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “How to Train Your Dragon”?",
    "ar": "من الممثل الرئيسي في فيلم «How to Train Your Dragon»؟",
    "options": [
      "Sigourney Weaver",
      "Jay Baruchel",
      "Naomi Watts",
      "Tim Robbins"
    ],
    "optionsAr": [
      "Sigourney Weaver",
      "Jay Baruchel",
      "Naomi Watts",
      "Tim Robbins"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0469"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Despicable Me”?",
    "ar": "من الممثل الرئيسي في فيلم «Despicable Me»؟",
    "options": [
      "Fionn Whitehead",
      "Matthew Broderick",
      "Amy Poehler",
      "Steve Carell"
    ],
    "optionsAr": [
      "Fionn Whitehead",
      "Matthew Broderick",
      "Amy Poehler",
      "Steve Carell"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0470"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Home Alone”?",
    "ar": "من الممثل الرئيسي في فيلم «Home Alone»؟",
    "options": [
      "Chadwick Boseman",
      "Chris Hemsworth",
      "Macaulay Culkin",
      "Robin Williams"
    ],
    "optionsAr": [
      "Chadwick Boseman",
      "Chris Hemsworth",
      "Macaulay Culkin",
      "Robin Williams"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0471"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Mrs. Doubtfire”?",
    "ar": "من الممثل الرئيسي في فيلم «Mrs. Doubtfire»؟",
    "options": [
      "Robin Williams",
      "Macaulay Culkin",
      "Sam Worthington",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "Robin Williams",
      "Macaulay Culkin",
      "Sam Worthington",
      "Ryan Gosling"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0472"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Harry Potter and the Sorcerer’s Stone”?",
    "ar": "من الممثل الرئيسي في فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "Naomi Watts",
      "Johnny Depp",
      "Daniel Radcliffe",
      "Jay Baruchel"
    ],
    "optionsAr": [
      "Naomi Watts",
      "Johnny Depp",
      "Daniel Radcliffe",
      "Jay Baruchel"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0473"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Harry Potter and the Chamber of Secrets”?",
    "ar": "من الممثل الرئيسي في فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "Chris Hemsworth",
      "Daniel Radcliffe",
      "Naomi Watts",
      "Roy Scheider"
    ],
    "optionsAr": [
      "Chris Hemsworth",
      "Daniel Radcliffe",
      "Naomi Watts",
      "Roy Scheider"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0474"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Pirates of the Caribbean: The Curse of the Black Pearl”?",
    "ar": "من الممثل الرئيسي في فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "Michael J. Fox",
      "Noriko Hidaka",
      "Jack Black",
      "Johnny Depp"
    ],
    "optionsAr": [
      "Michael J. Fox",
      "Noriko Hidaka",
      "Jack Black",
      "Johnny Depp"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0475"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Mask”?",
    "ar": "من الممثل الرئيسي في فيلم «The Mask»؟",
    "options": [
      "Jim Carrey",
      "Paige O’Hara",
      "Sam Worthington",
      "Ray Liotta"
    ],
    "optionsAr": [
      "Jim Carrey",
      "Paige O’Hara",
      "Sam Worthington",
      "Ray Liotta"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0476"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Truman Show”?",
    "ar": "من الممثل الرئيسي في فيلم «The Truman Show»؟",
    "options": [
      "Jim Carrey",
      "Chris Evans",
      "Robert De Niro",
      "Amy Poehler"
    ],
    "optionsAr": [
      "Jim Carrey",
      "Chris Evans",
      "Robert De Niro",
      "Amy Poehler"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0477"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Grand Budapest Hotel”?",
    "ar": "من الممثل الرئيسي في فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "Harrison Ford",
      "Tom Hanks",
      "Fionn Whitehead",
      "Ralph Fiennes"
    ],
    "optionsAr": [
      "Harrison Ford",
      "Tom Hanks",
      "Fionn Whitehead",
      "Ralph Fiennes"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0478"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The French Dispatch”?",
    "ar": "من الممثل الرئيسي في فيلم «The French Dispatch»؟",
    "options": [
      "Robert De Niro",
      "Noriko Hidaka",
      "Benicio del Toro",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "Robert De Niro",
      "Noriko Hidaka",
      "Benicio del Toro",
      "Ryan Gosling"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0479"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “La La Land”?",
    "ar": "من الممثل الرئيسي في فيلم «La La Land»؟",
    "options": [
      "Ralph Fiennes",
      "Robert Downey Jr.",
      "Chris Evans",
      "Ryan Gosling"
    ],
    "optionsAr": [
      "Ralph Fiennes",
      "Robert Downey Jr.",
      "Chris Evans",
      "Ryan Gosling"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0480"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Whiplash”?",
    "ar": "من الممثل الرئيسي في فيلم «Whiplash»؟",
    "options": [
      "Tom Hanks",
      "Liam Neeson",
      "Yōji Matsuda",
      "Miles Teller"
    ],
    "optionsAr": [
      "Tom Hanks",
      "Liam Neeson",
      "Yōji Matsuda",
      "Miles Teller"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0481"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Interstellar”?",
    "ar": "من الممثل الرئيسي في فيلم «Interstellar»؟",
    "options": [
      "Paige O’Hara",
      "Matthew McConaughey",
      "Miles Teller",
      "Martin Freeman"
    ],
    "optionsAr": [
      "Paige O’Hara",
      "Matthew McConaughey",
      "Miles Teller",
      "Martin Freeman"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0482"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Dunkirk”?",
    "ar": "من الممثل الرئيسي في فيلم «Dunkirk»؟",
    "options": [
      "Sigourney Weaver",
      "Scott Weinger",
      "Patton Oswalt",
      "Fionn Whitehead"
    ],
    "optionsAr": [
      "Sigourney Weaver",
      "Scott Weinger",
      "Patton Oswalt",
      "Fionn Whitehead"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0483"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Oppenheimer”?",
    "ar": "من الممثل الرئيسي في فيلم «Oppenheimer»؟",
    "options": [
      "Miles Teller",
      "Sigourney Weaver",
      "Kristen Bell",
      "Cillian Murphy"
    ],
    "optionsAr": [
      "Miles Teller",
      "Sigourney Weaver",
      "Kristen Bell",
      "Cillian Murphy"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0484"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Prestige”?",
    "ar": "من الممثل الرئيسي في فيلم «The Prestige»؟",
    "options": [
      "Hugh Jackman",
      "Rumi Hiiragi",
      "Noriko Hidaka",
      "Albert Brooks"
    ],
    "optionsAr": [
      "Hugh Jackman",
      "Rumi Hiiragi",
      "Noriko Hidaka",
      "Albert Brooks"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0485"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Departed”?",
    "ar": "من الممثل الرئيسي في فيلم «The Departed»؟",
    "options": [
      "Ralph Fiennes",
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Matthew Broderick"
    ],
    "optionsAr": [
      "Ralph Fiennes",
      "Leonardo DiCaprio",
      "Scott Weinger",
      "Matthew Broderick"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0486"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Goodfellas”?",
    "ar": "من الممثل الرئيسي في فيلم «Goodfellas»؟",
    "options": [
      "Noriko Hidaka",
      "Ray Liotta",
      "Elijah Wood",
      "Robin Williams"
    ],
    "optionsAr": [
      "Noriko Hidaka",
      "Ray Liotta",
      "Elijah Wood",
      "Robin Williams"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0487"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Wolf of Wall Street”?",
    "ar": "من الممثل الرئيسي في فيلم «The Wolf of Wall Street»؟",
    "options": [
      "Amy Poehler",
      "Leonardo DiCaprio",
      "Ryan Gosling",
      "Johnny Depp"
    ],
    "optionsAr": [
      "Amy Poehler",
      "Leonardo DiCaprio",
      "Ryan Gosling",
      "Johnny Depp"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0488"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “The Irishman”?",
    "ar": "من الممثل الرئيسي في فيلم «The Irishman»؟",
    "options": [
      "Anthony Gonzalez",
      "Jay Baruchel",
      "Robert De Niro",
      "John Travolta"
    ],
    "optionsAr": [
      "Anthony Gonzalez",
      "Jay Baruchel",
      "Robert De Niro",
      "John Travolta"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0489"
  },
  {
    "category": "Movies & TV",
    "en": "Who is the lead actor in “Taxi Driver”?",
    "ar": "من الممثل الرئيسي في فيلم «Taxi Driver»؟",
    "options": [
      "Henry Thomas",
      "Auliʻi Cravalho",
      "Matthew McConaughey",
      "Robert De Niro"
    ],
    "optionsAr": [
      "Henry Thomas",
      "Auliʻi Cravalho",
      "Matthew McConaughey",
      "Robert De Niro"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0490"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Shawshank Redemption”?",
    "ar": "من أخرج فيلم «The Shawshank Redemption»؟",
    "options": [
      "Steven Spielberg",
      "John Lasseter",
      "Ron Clements and John Musker",
      "Frank Darabont"
    ],
    "optionsAr": [
      "Steven Spielberg",
      "John Lasseter",
      "Ron Clements and John Musker",
      "Frank Darabont"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0491"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Godfather”?",
    "ar": "من أخرج فيلم «The Godfather»؟",
    "options": [
      "Wes Anderson",
      "Chris Columbus",
      "Quentin Tarantino",
      "Francis Ford Coppola"
    ],
    "optionsAr": [
      "Wes Anderson",
      "Chris Columbus",
      "Quentin Tarantino",
      "Francis Ford Coppola"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0492"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Dark Knight”?",
    "ar": "من أخرج فيلم «The Dark Knight»؟",
    "options": [
      "Frank Darabont",
      "Andrew Stanton",
      "Christopher Nolan",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "Frank Darabont",
      "Andrew Stanton",
      "Christopher Nolan",
      "Steven Spielberg"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0493"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Pulp Fiction”?",
    "ar": "من أخرج فيلم «Pulp Fiction»؟",
    "options": [
      "Jon Favreau",
      "Quentin Tarantino",
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "Jon Favreau",
      "Quentin Tarantino",
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0494"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Forrest Gump”?",
    "ar": "من أخرج فيلم «Forrest Gump»؟",
    "options": [
      "George Miller",
      "Pete Docter",
      "Dean DeBlois and Chris Sanders",
      "Robert Zemeckis"
    ],
    "optionsAr": [
      "George Miller",
      "Pete Docter",
      "Dean DeBlois and Chris Sanders",
      "Robert Zemeckis"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0495"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Inception”?",
    "ar": "من أخرج فيلم «Inception»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Joe Johnston",
      "Christopher Nolan",
      "Jon Favreau"
    ],
    "optionsAr": [
      "Mark Osborne and John Stevenson",
      "Joe Johnston",
      "Christopher Nolan",
      "Jon Favreau"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0496"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Titanic”?",
    "ar": "من أخرج فيلم «Titanic»؟",
    "options": [
      "Ron Clements and John Musker",
      "Christopher Nolan",
      "Gary Trousdale and Kirk Wise",
      "James Cameron"
    ],
    "optionsAr": [
      "Ron Clements and John Musker",
      "Christopher Nolan",
      "Gary Trousdale and Kirk Wise",
      "James Cameron"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0497"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Avatar”?",
    "ar": "من أخرج فيلم «Avatar»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Gore Verbinski",
      "Dean DeBlois and Chris Sanders",
      "James Cameron"
    ],
    "optionsAr": [
      "Mark Osborne and John Stevenson",
      "Gore Verbinski",
      "Dean DeBlois and Chris Sanders",
      "James Cameron"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0498"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Jurassic Park”?",
    "ar": "من أخرج فيلم «Jurassic Park»؟",
    "options": [
      "Taika Waititi",
      "Pete Docter",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "Taika Waititi",
      "Pete Docter",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0499"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “E.T. the Extra-Terrestrial”?",
    "ar": "من أخرج فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "James Cameron",
      "Steven Spielberg",
      "Chuck Russell",
      "George Miller"
    ],
    "optionsAr": [
      "James Cameron",
      "Steven Spielberg",
      "Chuck Russell",
      "George Miller"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0500"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Jaws”?",
    "ar": "من أخرج فيلم «Jaws»؟",
    "options": [
      "Martin Scorsese",
      "Scott Derrickson",
      "James Cameron",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "Martin Scorsese",
      "Scott Derrickson",
      "James Cameron",
      "Steven Spielberg"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0501"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Schindler’s List”?",
    "ar": "من أخرج فيلم «Schindler’s List»؟",
    "options": [
      "Francis Ford Coppola",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "Francis Ford Coppola",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Steven Spielberg"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0502"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Saving Private Ryan”?",
    "ar": "من أخرج فيلم «Saving Private Ryan»؟",
    "options": [
      "Peter Weir",
      "Steven Spielberg",
      "Chuck Russell",
      "Joe Johnston"
    ],
    "optionsAr": [
      "Peter Weir",
      "Steven Spielberg",
      "Chuck Russell",
      "Joe Johnston"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0503"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Back to the Future”?",
    "ar": "من أخرج فيلم «Back to the Future»؟",
    "options": [
      "Gore Verbinski",
      "Robert Zemeckis",
      "Frank Darabont",
      "Chris Buck and Jennifer Lee"
    ],
    "optionsAr": [
      "Gore Verbinski",
      "Robert Zemeckis",
      "Frank Darabont",
      "Chris Buck and Jennifer Lee"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0504"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Cast Away”?",
    "ar": "من أخرج فيلم «Cast Away»؟",
    "options": [
      "John Lasseter",
      "Francis Ford Coppola",
      "Robert Zemeckis",
      "Joss Whedon"
    ],
    "optionsAr": [
      "John Lasseter",
      "Francis Ford Coppola",
      "Robert Zemeckis",
      "Joss Whedon"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0505"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Gladiator”?",
    "ar": "من أخرج فيلم «Gladiator»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Ridley Scott",
      "Brad Bird",
      "Peter Weir"
    ],
    "optionsAr": [
      "Mark Osborne and John Stevenson",
      "Ridley Scott",
      "Brad Bird",
      "Peter Weir"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0506"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Alien”?",
    "ar": "من أخرج فيلم «Alien»؟",
    "options": [
      "Wes Anderson",
      "Chris Columbus",
      "Pete Docter",
      "Ridley Scott"
    ],
    "optionsAr": [
      "Wes Anderson",
      "Chris Columbus",
      "Pete Docter",
      "Ridley Scott"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0507"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Martian”?",
    "ar": "من أخرج فيلم «The Martian»؟",
    "options": [
      "Scott Derrickson",
      "Steven Spielberg",
      "Andrew Stanton",
      "Ridley Scott"
    ],
    "optionsAr": [
      "Scott Derrickson",
      "Steven Spielberg",
      "Andrew Stanton",
      "Ridley Scott"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0508"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Blade Runner”?",
    "ar": "من أخرج فيلم «Blade Runner»؟",
    "options": [
      "Quentin Tarantino",
      "Ridley Scott",
      "Peter Weir",
      "John Lasseter"
    ],
    "optionsAr": [
      "Quentin Tarantino",
      "Ridley Scott",
      "Peter Weir",
      "John Lasseter"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0509"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Mad Max: Fury Road”?",
    "ar": "من أخرج فيلم «Mad Max: Fury Road»؟",
    "options": [
      "Chuck Russell",
      "George Miller",
      "Wes Anderson",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "Chuck Russell",
      "George Miller",
      "Wes Anderson",
      "Christopher Nolan"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0510"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Lord of the Rings: The Fellowship of the Ring”?",
    "ar": "من أخرج فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "Joss Whedon",
      "Peter Jackson",
      "Brad Bird",
      "Taika Waititi"
    ],
    "optionsAr": [
      "Joss Whedon",
      "Peter Jackson",
      "Brad Bird",
      "Taika Waititi"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0511"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Hobbit: An Unexpected Journey”?",
    "ar": "من أخرج فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "Jon Favreau",
      "Peter Jackson",
      "Andrew Adamson and Vicky Jenson",
      "Peter Weir"
    ],
    "optionsAr": [
      "Jon Favreau",
      "Peter Jackson",
      "Andrew Adamson and Vicky Jenson",
      "Peter Weir"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0512"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “King Kong”?",
    "ar": "من أخرج فيلم «King Kong»؟",
    "options": [
      "James Cameron",
      "Peter Jackson",
      "Christopher Nolan",
      "John Lasseter"
    ],
    "optionsAr": [
      "James Cameron",
      "Peter Jackson",
      "Christopher Nolan",
      "John Lasseter"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0513"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Spider-Man”?",
    "ar": "من أخرج فيلم «Spider-Man»؟",
    "options": [
      "Steven Spielberg",
      "Sam Raimi",
      "Gary Trousdale and Kirk Wise",
      "Andrew Stanton"
    ],
    "optionsAr": [
      "Steven Spielberg",
      "Sam Raimi",
      "Gary Trousdale and Kirk Wise",
      "Andrew Stanton"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0514"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Doctor Strange”?",
    "ar": "من أخرج فيلم «Doctor Strange»؟",
    "options": [
      "Christopher Nolan",
      "Chris Columbus",
      "Francis Ford Coppola",
      "Scott Derrickson"
    ],
    "optionsAr": [
      "Christopher Nolan",
      "Chris Columbus",
      "Francis Ford Coppola",
      "Scott Derrickson"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0515"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Black Panther”?",
    "ar": "من أخرج فيلم «Black Panther»؟",
    "options": [
      "Hayao Miyazaki",
      "Ryan Coogler",
      "Taika Waititi",
      "Sam Raimi"
    ],
    "optionsAr": [
      "Hayao Miyazaki",
      "Ryan Coogler",
      "Taika Waititi",
      "Sam Raimi"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0516"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Iron Man”?",
    "ar": "من أخرج فيلم «Iron Man»؟",
    "options": [
      "Jon Favreau",
      "Peter Weir",
      "Wes Anderson",
      "Andrew Stanton"
    ],
    "optionsAr": [
      "Jon Favreau",
      "Peter Weir",
      "Wes Anderson",
      "Andrew Stanton"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0517"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Avengers”?",
    "ar": "من أخرج فيلم «The Avengers»؟",
    "options": [
      "Sam Raimi",
      "Joss Whedon",
      "Francis Ford Coppola",
      "Brad Bird"
    ],
    "optionsAr": [
      "Sam Raimi",
      "Joss Whedon",
      "Francis Ford Coppola",
      "Brad Bird"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0518"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Guardians of the Galaxy”?",
    "ar": "من أخرج فيلم «Guardians of the Galaxy»؟",
    "options": [
      "Peter Weir",
      "Lee Unkrich",
      "Martin Scorsese",
      "James Gunn"
    ],
    "optionsAr": [
      "Peter Weir",
      "Lee Unkrich",
      "Martin Scorsese",
      "James Gunn"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0519"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Thor: Ragnarok”?",
    "ar": "من أخرج فيلم «Thor: Ragnarok»؟",
    "options": [
      "Taika Waititi",
      "Joss Whedon",
      "Jon Favreau",
      "Gary Trousdale and Kirk Wise"
    ],
    "optionsAr": [
      "Taika Waititi",
      "Joss Whedon",
      "Jon Favreau",
      "Gary Trousdale and Kirk Wise"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0520"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Captain America: The First Avenger”?",
    "ar": "من أخرج فيلم «Captain America: The First Avenger»؟",
    "options": [
      "Joe Johnston",
      "Steven Spielberg",
      "Frank Darabont",
      "Chris Columbus"
    ],
    "optionsAr": [
      "Joe Johnston",
      "Steven Spielberg",
      "Frank Darabont",
      "Chris Columbus"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0521"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Frozen”?",
    "ar": "من أخرج فيلم «Frozen»؟",
    "options": [
      "Roger Allers and Rob Minkoff",
      "Chris Buck and Jennifer Lee",
      "John Lasseter",
      "Wes Anderson"
    ],
    "optionsAr": [
      "Roger Allers and Rob Minkoff",
      "Chris Buck and Jennifer Lee",
      "John Lasseter",
      "Wes Anderson"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0522"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Moana”?",
    "ar": "من أخرج فيلم «Moana»؟",
    "options": [
      "Francis Ford Coppola",
      "Frank Darabont",
      "Ron Clements and John Musker",
      "Wes Anderson"
    ],
    "optionsAr": [
      "Francis Ford Coppola",
      "Frank Darabont",
      "Ron Clements and John Musker",
      "Wes Anderson"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0523"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Toy Story”?",
    "ar": "من أخرج فيلم «Toy Story»؟",
    "options": [
      "Chuck Russell",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Peter Jackson"
    ],
    "optionsAr": [
      "Chuck Russell",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Peter Jackson"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0524"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Finding Nemo”?",
    "ar": "من أخرج فيلم «Finding Nemo»؟",
    "options": [
      "Peter Weir",
      "Scott Derrickson",
      "Andrew Stanton",
      "Francis Ford Coppola"
    ],
    "optionsAr": [
      "Peter Weir",
      "Scott Derrickson",
      "Andrew Stanton",
      "Francis Ford Coppola"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0525"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Up”?",
    "ar": "من أخرج فيلم «Up»؟",
    "options": [
      "Ridley Scott",
      "Gary Trousdale and Kirk Wise",
      "Pete Docter",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "Ridley Scott",
      "Gary Trousdale and Kirk Wise",
      "Pete Docter",
      "Gore Verbinski"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0526"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Inside Out”?",
    "ar": "من أخرج فيلم «Inside Out»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Pete Docter"
    ],
    "optionsAr": [
      "Gary Trousdale and Kirk Wise",
      "Mark Osborne and John Stevenson",
      "John Lasseter",
      "Pete Docter"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0527"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Coco”?",
    "ar": "من أخرج فيلم «Coco»؟",
    "options": [
      "Ridley Scott",
      "Sam Raimi",
      "Mark Osborne and John Stevenson",
      "Lee Unkrich"
    ],
    "optionsAr": [
      "Ridley Scott",
      "Sam Raimi",
      "Mark Osborne and John Stevenson",
      "Lee Unkrich"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0528"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Ratatouille”?",
    "ar": "من أخرج فيلم «Ratatouille»؟",
    "options": [
      "Brad Bird",
      "Gore Verbinski",
      "Peter Weir",
      "Peter Jackson"
    ],
    "optionsAr": [
      "Brad Bird",
      "Gore Verbinski",
      "Peter Weir",
      "Peter Jackson"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0529"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “WALL-E”?",
    "ar": "من أخرج فيلم «WALL-E»؟",
    "options": [
      "Christopher Nolan",
      "Ryan Coogler",
      "Andrew Stanton",
      "Chris Columbus"
    ],
    "optionsAr": [
      "Christopher Nolan",
      "Ryan Coogler",
      "Andrew Stanton",
      "Chris Columbus"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0530"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Spirited Away”?",
    "ar": "من أخرج فيلم «Spirited Away»؟",
    "options": [
      "James Cameron",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Steven Spielberg"
    ],
    "optionsAr": [
      "James Cameron",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Steven Spielberg"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0531"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “My Neighbor Totoro”?",
    "ar": "من أخرج فيلم «My Neighbor Totoro»؟",
    "options": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Ridley Scott",
      "Hayao Miyazaki"
    ],
    "optionsAr": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Ridley Scott",
      "Hayao Miyazaki"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0532"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Princess Mononoke”?",
    "ar": "من أخرج فيلم «Princess Mononoke»؟",
    "options": [
      "Wes Anderson",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Peter Jackson"
    ],
    "optionsAr": [
      "Wes Anderson",
      "Ryan Coogler",
      "Hayao Miyazaki",
      "Peter Jackson"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0533"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Lion King”?",
    "ar": "من أخرج فيلم «The Lion King»؟",
    "options": [
      "Frank Darabont",
      "John Lasseter",
      "Joe Johnston",
      "Roger Allers and Rob Minkoff"
    ],
    "optionsAr": [
      "Frank Darabont",
      "John Lasseter",
      "Joe Johnston",
      "Roger Allers and Rob Minkoff"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0534"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Aladdin”?",
    "ar": "من أخرج فيلم «Aladdin»؟",
    "options": [
      "Pierre Coffin and Chris Renaud",
      "Ron Clements and John Musker",
      "Brad Bird",
      "Peter Weir"
    ],
    "optionsAr": [
      "Pierre Coffin and Chris Renaud",
      "Ron Clements and John Musker",
      "Brad Bird",
      "Peter Weir"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0535"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Beauty and the Beast”?",
    "ar": "من أخرج فيلم «Beauty and the Beast»؟",
    "options": [
      "Frank Darabont",
      "Ridley Scott",
      "Scott Derrickson",
      "Gary Trousdale and Kirk Wise"
    ],
    "optionsAr": [
      "Frank Darabont",
      "Ridley Scott",
      "Scott Derrickson",
      "Gary Trousdale and Kirk Wise"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0536"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Shrek”?",
    "ar": "من أخرج فيلم «Shrek»؟",
    "options": [
      "Joe Johnston",
      "Brad Bird",
      "Lee Unkrich",
      "Andrew Adamson and Vicky Jenson"
    ],
    "optionsAr": [
      "Joe Johnston",
      "Brad Bird",
      "Lee Unkrich",
      "Andrew Adamson and Vicky Jenson"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0537"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Kung Fu Panda”?",
    "ar": "من أخرج فيلم «Kung Fu Panda»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Peter Weir",
      "Chris Buck and Jennifer Lee",
      "James Cameron"
    ],
    "optionsAr": [
      "Mark Osborne and John Stevenson",
      "Peter Weir",
      "Chris Buck and Jennifer Lee",
      "James Cameron"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0538"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “How to Train Your Dragon”?",
    "ar": "من أخرج فيلم «How to Train Your Dragon»؟",
    "options": [
      "Ron Clements and John Musker",
      "John Lasseter",
      "Peter Jackson",
      "Dean DeBlois and Chris Sanders"
    ],
    "optionsAr": [
      "Ron Clements and John Musker",
      "John Lasseter",
      "Peter Jackson",
      "Dean DeBlois and Chris Sanders"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0539"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Despicable Me”?",
    "ar": "من أخرج فيلم «Despicable Me»؟",
    "options": [
      "Joe Johnston",
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Hayao Miyazaki"
    ],
    "optionsAr": [
      "Joe Johnston",
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Hayao Miyazaki"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0540"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Home Alone”?",
    "ar": "من أخرج فيلم «Home Alone»؟",
    "options": [
      "Christopher Nolan",
      "Chris Columbus",
      "Brad Bird",
      "Damien Chazelle"
    ],
    "optionsAr": [
      "Christopher Nolan",
      "Chris Columbus",
      "Brad Bird",
      "Damien Chazelle"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0541"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Mrs. Doubtfire”?",
    "ar": "من أخرج فيلم «Mrs. Doubtfire»؟",
    "options": [
      "Lee Unkrich",
      "Peter Jackson",
      "Sam Raimi",
      "Chris Columbus"
    ],
    "optionsAr": [
      "Lee Unkrich",
      "Peter Jackson",
      "Sam Raimi",
      "Chris Columbus"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0542"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Harry Potter and the Sorcerer’s Stone”?",
    "ar": "من أخرج فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "James Cameron",
      "George Miller",
      "Chris Columbus"
    ],
    "optionsAr": [
      "Gary Trousdale and Kirk Wise",
      "James Cameron",
      "George Miller",
      "Chris Columbus"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0543"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Harry Potter and the Chamber of Secrets”?",
    "ar": "من أخرج فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "Chris Columbus",
      "Chuck Russell",
      "Martin Scorsese",
      "Ryan Coogler"
    ],
    "optionsAr": [
      "Chris Columbus",
      "Chuck Russell",
      "Martin Scorsese",
      "Ryan Coogler"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0544"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Pirates of the Caribbean: The Curse of the Black Pearl”?",
    "ar": "من أخرج فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "Brad Bird",
      "Robert Zemeckis",
      "Ron Clements and John Musker",
      "Gore Verbinski"
    ],
    "optionsAr": [
      "Brad Bird",
      "Robert Zemeckis",
      "Ron Clements and John Musker",
      "Gore Verbinski"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0545"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Mask”?",
    "ar": "من أخرج فيلم «The Mask»؟",
    "options": [
      "Joe Johnston",
      "Chris Columbus",
      "Scott Derrickson",
      "Chuck Russell"
    ],
    "optionsAr": [
      "Joe Johnston",
      "Chris Columbus",
      "Scott Derrickson",
      "Chuck Russell"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0546"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Truman Show”?",
    "ar": "من أخرج فيلم «The Truman Show»؟",
    "options": [
      "Peter Weir",
      "Dean DeBlois and Chris Sanders",
      "Frank Darabont",
      "Brad Bird"
    ],
    "optionsAr": [
      "Peter Weir",
      "Dean DeBlois and Chris Sanders",
      "Frank Darabont",
      "Brad Bird"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0547"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Grand Budapest Hotel”?",
    "ar": "من أخرج فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "Sam Raimi",
      "Chris Columbus",
      "Wes Anderson",
      "Peter Jackson"
    ],
    "optionsAr": [
      "Sam Raimi",
      "Chris Columbus",
      "Wes Anderson",
      "Peter Jackson"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0548"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The French Dispatch”?",
    "ar": "من أخرج فيلم «The French Dispatch»؟",
    "options": [
      "Mark Osborne and John Stevenson",
      "Jon Favreau",
      "John Lasseter",
      "Wes Anderson"
    ],
    "optionsAr": [
      "Mark Osborne and John Stevenson",
      "Jon Favreau",
      "John Lasseter",
      "Wes Anderson"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0549"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “La La Land”?",
    "ar": "من أخرج فيلم «La La Land»؟",
    "options": [
      "Roger Allers and Rob Minkoff",
      "James Gunn",
      "Dean DeBlois and Chris Sanders",
      "Damien Chazelle"
    ],
    "optionsAr": [
      "Roger Allers and Rob Minkoff",
      "James Gunn",
      "Dean DeBlois and Chris Sanders",
      "Damien Chazelle"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0550"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Whiplash”?",
    "ar": "من أخرج فيلم «Whiplash»؟",
    "options": [
      "Brad Bird",
      "Lee Unkrich",
      "Damien Chazelle",
      "Roger Allers and Rob Minkoff"
    ],
    "optionsAr": [
      "Brad Bird",
      "Lee Unkrich",
      "Damien Chazelle",
      "Roger Allers and Rob Minkoff"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0551"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Interstellar”?",
    "ar": "من أخرج فيلم «Interstellar»؟",
    "options": [
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Christopher Nolan",
      "Taika Waititi"
    ],
    "optionsAr": [
      "Pierre Coffin and Chris Renaud",
      "Scott Derrickson",
      "Christopher Nolan",
      "Taika Waititi"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0552"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Dunkirk”?",
    "ar": "من أخرج فيلم «Dunkirk»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "optionsAr": [
      "Gary Trousdale and Kirk Wise",
      "Gore Verbinski",
      "Steven Spielberg",
      "Christopher Nolan"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0553"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Oppenheimer”?",
    "ar": "من أخرج فيلم «Oppenheimer»؟",
    "options": [
      "Christopher Nolan",
      "Sam Raimi",
      "Gore Verbinski",
      "James Cameron"
    ],
    "optionsAr": [
      "Christopher Nolan",
      "Sam Raimi",
      "Gore Verbinski",
      "James Cameron"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0554"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Prestige”?",
    "ar": "من أخرج فيلم «The Prestige»؟",
    "options": [
      "Gary Trousdale and Kirk Wise",
      "Peter Jackson",
      "Christopher Nolan",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "Gary Trousdale and Kirk Wise",
      "Peter Jackson",
      "Christopher Nolan",
      "Martin Scorsese"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0555"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Departed”?",
    "ar": "من أخرج فيلم «The Departed»؟",
    "options": [
      "Martin Scorsese",
      "James Gunn",
      "Joss Whedon",
      "Sam Raimi"
    ],
    "optionsAr": [
      "Martin Scorsese",
      "James Gunn",
      "Joss Whedon",
      "Sam Raimi"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0556"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Goodfellas”?",
    "ar": "من أخرج فيلم «Goodfellas»؟",
    "options": [
      "Martin Scorsese",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Wes Anderson"
    ],
    "optionsAr": [
      "Martin Scorsese",
      "Christopher Nolan",
      "Andrew Adamson and Vicky Jenson",
      "Wes Anderson"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0557"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Wolf of Wall Street”?",
    "ar": "من أخرج فيلم «The Wolf of Wall Street»؟",
    "options": [
      "John Lasseter",
      "Ridley Scott",
      "Chuck Russell",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "John Lasseter",
      "Ridley Scott",
      "Chuck Russell",
      "Martin Scorsese"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0558"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “The Irishman”?",
    "ar": "من أخرج فيلم «The Irishman»؟",
    "options": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Jon Favreau",
      "Pete Docter"
    ],
    "optionsAr": [
      "Martin Scorsese",
      "Andrew Stanton",
      "Jon Favreau",
      "Pete Docter"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0559"
  },
  {
    "category": "Movies & TV",
    "en": "Who directed “Taxi Driver”?",
    "ar": "من أخرج فيلم «Taxi Driver»؟",
    "options": [
      "Brad Bird",
      "George Miller",
      "Joe Johnston",
      "Martin Scorsese"
    ],
    "optionsAr": [
      "Brad Bird",
      "George Miller",
      "Joe Johnston",
      "Martin Scorsese"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0560"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Shawshank Redemption” released?",
    "ar": "في أي سنة صدر فيلم «The Shawshank Redemption»؟",
    "options": [
      "1994",
      "1995",
      "2021",
      "2017"
    ],
    "optionsAr": [
      "1994",
      "1995",
      "2021",
      "2017"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0561"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Godfather” released?",
    "ar": "في أي سنة صدر فيلم «The Godfather»؟",
    "options": [
      "1976",
      "1972",
      "2018",
      "2017"
    ],
    "optionsAr": [
      "1976",
      "1972",
      "2018",
      "2017"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0562"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Dark Knight” released?",
    "ar": "في أي سنة صدر فيلم «The Dark Knight»؟",
    "options": [
      "1976",
      "2008",
      "1988",
      "1985"
    ],
    "optionsAr": [
      "1976",
      "2008",
      "1988",
      "1985"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0563"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Pulp Fiction” released?",
    "ar": "في أي سنة صدر فيلم «Pulp Fiction»؟",
    "options": [
      "1994",
      "2001",
      "2012",
      "1982"
    ],
    "optionsAr": [
      "1994",
      "2001",
      "2012",
      "1982"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0564"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Forrest Gump” released?",
    "ar": "في أي سنة صدر فيلم «Forrest Gump»؟",
    "options": [
      "1994",
      "2010",
      "2000",
      "2009"
    ],
    "optionsAr": [
      "1994",
      "2010",
      "2000",
      "2009"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0565"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Inception” released?",
    "ar": "في أي سنة صدر فيلم «Inception»؟",
    "options": [
      "2008",
      "2007",
      "2010",
      "1997"
    ],
    "optionsAr": [
      "2008",
      "2007",
      "2010",
      "1997"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0566"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Titanic” released?",
    "ar": "في أي سنة صدر فيلم «Titanic»؟",
    "options": [
      "1997",
      "2002",
      "2001",
      "2010"
    ],
    "optionsAr": [
      "1997",
      "2002",
      "2001",
      "2010"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0567"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Avatar” released?",
    "ar": "في أي سنة صدر فيلم «Avatar»؟",
    "options": [
      "2016",
      "1998",
      "1992",
      "2009"
    ],
    "optionsAr": [
      "2016",
      "1998",
      "1992",
      "2009"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0568"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Jurassic Park” released?",
    "ar": "في أي سنة صدر فيلم «Jurassic Park»؟",
    "options": [
      "1972",
      "1991",
      "1993",
      "2002"
    ],
    "optionsAr": [
      "1972",
      "1991",
      "1993",
      "2002"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0569"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “E.T. the Extra-Terrestrial” released?",
    "ar": "في أي سنة صدر فيلم «E.T. the Extra-Terrestrial»؟",
    "options": [
      "2010",
      "1982",
      "2016",
      "1998"
    ],
    "optionsAr": [
      "2010",
      "1982",
      "2016",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0570"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Jaws” released?",
    "ar": "في أي سنة صدر فيلم «Jaws»؟",
    "options": [
      "2010",
      "1975",
      "2001",
      "2002"
    ],
    "optionsAr": [
      "2010",
      "1975",
      "2001",
      "2002"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0571"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Schindler’s List” released?",
    "ar": "في أي سنة صدر فيلم «Schindler’s List»؟",
    "options": [
      "1993",
      "2018",
      "2006",
      "2000"
    ],
    "optionsAr": [
      "1993",
      "2018",
      "2006",
      "2000"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0572"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Saving Private Ryan” released?",
    "ar": "في أي سنة صدر فيلم «Saving Private Ryan»؟",
    "options": [
      "2017",
      "1972",
      "2003",
      "1998"
    ],
    "optionsAr": [
      "2017",
      "1972",
      "2003",
      "1998"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0573"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Back to the Future” released?",
    "ar": "في أي سنة صدر فيلم «Back to the Future»؟",
    "options": [
      "2017",
      "1985",
      "2009",
      "2002"
    ],
    "optionsAr": [
      "2017",
      "1985",
      "2009",
      "2002"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0574"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Cast Away” released?",
    "ar": "في أي سنة صدر فيلم «Cast Away»؟",
    "options": [
      "1994",
      "2000",
      "1990",
      "2008"
    ],
    "optionsAr": [
      "1994",
      "2000",
      "1990",
      "2008"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0575"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Gladiator” released?",
    "ar": "في أي سنة صدر فيلم «Gladiator»؟",
    "options": [
      "1985",
      "2000",
      "1972",
      "1994"
    ],
    "optionsAr": [
      "1985",
      "2000",
      "1972",
      "1994"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0576"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Alien” released?",
    "ar": "في أي سنة صدر فيلم «Alien»؟",
    "options": [
      "2011",
      "2017",
      "1990",
      "1979"
    ],
    "optionsAr": [
      "2011",
      "2017",
      "1990",
      "1979"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0577"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Martian” released?",
    "ar": "في أي سنة صدر فيلم «The Martian»؟",
    "options": [
      "2019",
      "2015",
      "1992",
      "2013"
    ],
    "optionsAr": [
      "2019",
      "2015",
      "1992",
      "2013"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0578"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Blade Runner” released?",
    "ar": "في أي سنة صدر فيلم «Blade Runner»؟",
    "options": [
      "2001",
      "2007",
      "1982",
      "1975"
    ],
    "optionsAr": [
      "2001",
      "2007",
      "1982",
      "1975"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0579"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Mad Max: Fury Road” released?",
    "ar": "في أي سنة صدر فيلم «Mad Max: Fury Road»؟",
    "options": [
      "1991",
      "2015",
      "1988",
      "2005"
    ],
    "optionsAr": [
      "1991",
      "2015",
      "1988",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0580"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Lord of the Rings: The Fellowship of the Ring” released?",
    "ar": "في أي سنة صدر فيلم «The Lord of the Rings: The Fellowship of the Ring»؟",
    "options": [
      "2003",
      "1991",
      "1972",
      "2001"
    ],
    "optionsAr": [
      "2003",
      "1991",
      "1972",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0581"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Hobbit: An Unexpected Journey” released?",
    "ar": "في أي سنة صدر فيلم «The Hobbit: An Unexpected Journey»؟",
    "options": [
      "1979",
      "2012",
      "2018",
      "1997"
    ],
    "optionsAr": [
      "1979",
      "2012",
      "2018",
      "1997"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0582"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “King Kong” released?",
    "ar": "في أي سنة صدر فيلم «King Kong»؟",
    "options": [
      "2003",
      "2005",
      "2014",
      "1972"
    ],
    "optionsAr": [
      "2003",
      "2005",
      "2014",
      "1972"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0583"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Spider-Man” released?",
    "ar": "في أي سنة صدر فيلم «Spider-Man»؟",
    "options": [
      "2011",
      "2003",
      "1976",
      "2002"
    ],
    "optionsAr": [
      "2011",
      "2003",
      "1976",
      "2002"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0584"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Doctor Strange” released?",
    "ar": "في أي سنة صدر فيلم «Doctor Strange»؟",
    "options": [
      "2016",
      "1994",
      "2021",
      "2015"
    ],
    "optionsAr": [
      "2016",
      "1994",
      "2021",
      "2015"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0585"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Black Panther” released?",
    "ar": "في أي سنة صدر فيلم «Black Panther»؟",
    "options": [
      "2009",
      "1988",
      "2018",
      "2008"
    ],
    "optionsAr": [
      "2009",
      "1988",
      "2018",
      "2008"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0586"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Iron Man” released?",
    "ar": "في أي سنة صدر فيلم «Iron Man»؟",
    "options": [
      "1972",
      "2012",
      "2006",
      "2008"
    ],
    "optionsAr": [
      "1972",
      "2012",
      "2006",
      "2008"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0587"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Avengers” released?",
    "ar": "في أي سنة صدر فيلم «The Avengers»؟",
    "options": [
      "2017",
      "1988",
      "2012",
      "2016"
    ],
    "optionsAr": [
      "2017",
      "1988",
      "2012",
      "2016"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0588"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Guardians of the Galaxy” released?",
    "ar": "في أي سنة صدر فيلم «Guardians of the Galaxy»؟",
    "options": [
      "2021",
      "2014",
      "2017",
      "2006"
    ],
    "optionsAr": [
      "2021",
      "2014",
      "2017",
      "2006"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0589"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Thor: Ragnarok” released?",
    "ar": "في أي سنة صدر فيلم «Thor: Ragnarok»؟",
    "options": [
      "1990",
      "1975",
      "2018",
      "2017"
    ],
    "optionsAr": [
      "1990",
      "1975",
      "2018",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0590"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Captain America: The First Avenger” released?",
    "ar": "في أي سنة صدر فيلم «Captain America: The First Avenger»؟",
    "options": [
      "2015",
      "2011",
      "2006",
      "2005"
    ],
    "optionsAr": [
      "2015",
      "2011",
      "2006",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0591"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Frozen” released?",
    "ar": "في أي سنة صدر فيلم «Frozen»؟",
    "options": [
      "2013",
      "1991",
      "2003",
      "1976"
    ],
    "optionsAr": [
      "2013",
      "1991",
      "2003",
      "1976"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0592"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Moana” released?",
    "ar": "في أي سنة صدر فيلم «Moana»؟",
    "options": [
      "1990",
      "1998",
      "2007",
      "2016"
    ],
    "optionsAr": [
      "1990",
      "1998",
      "2007",
      "2016"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0593"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Toy Story” released?",
    "ar": "في أي سنة صدر فيلم «Toy Story»؟",
    "options": [
      "2017",
      "2019",
      "1995",
      "2002"
    ],
    "optionsAr": [
      "2017",
      "2019",
      "1995",
      "2002"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0594"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Finding Nemo” released?",
    "ar": "في أي سنة صدر فيلم «Finding Nemo»؟",
    "options": [
      "2011",
      "2003",
      "1991",
      "2008"
    ],
    "optionsAr": [
      "2011",
      "2003",
      "1991",
      "2008"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0595"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Up” released?",
    "ar": "في أي سنة صدر فيلم «Up»؟",
    "options": [
      "1995",
      "2009",
      "1975",
      "2012"
    ],
    "optionsAr": [
      "1995",
      "2009",
      "1975",
      "2012"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0596"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Inside Out” released?",
    "ar": "في أي سنة صدر فيلم «Inside Out»؟",
    "options": [
      "2015",
      "2012",
      "1992",
      "2016"
    ],
    "optionsAr": [
      "2015",
      "2012",
      "1992",
      "2016"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0597"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Coco” released?",
    "ar": "في أي سنة صدر فيلم «Coco»؟",
    "options": [
      "2019",
      "2017",
      "2008",
      "2018"
    ],
    "optionsAr": [
      "2019",
      "2017",
      "2008",
      "2018"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0598"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Ratatouille” released?",
    "ar": "في أي سنة صدر فيلم «Ratatouille»؟",
    "options": [
      "2016",
      "1998",
      "1982",
      "2007"
    ],
    "optionsAr": [
      "2016",
      "1998",
      "1982",
      "2007"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0599"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “WALL-E” released?",
    "ar": "في أي سنة صدر فيلم «WALL-E»؟",
    "options": [
      "2002",
      "1991",
      "1975",
      "2008"
    ],
    "optionsAr": [
      "2002",
      "1991",
      "1975",
      "2008"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0600"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Spirited Away” released?",
    "ar": "في أي سنة صدر فيلم «Spirited Away»؟",
    "options": [
      "2008",
      "2010",
      "1985",
      "2001"
    ],
    "optionsAr": [
      "2008",
      "2010",
      "1985",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0601"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “My Neighbor Totoro” released?",
    "ar": "في أي سنة صدر فيلم «My Neighbor Totoro»؟",
    "options": [
      "1988",
      "2019",
      "2000",
      "1991"
    ],
    "optionsAr": [
      "1988",
      "2019",
      "2000",
      "1991"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0602"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Princess Mononoke” released?",
    "ar": "في أي سنة صدر فيلم «Princess Mononoke»؟",
    "options": [
      "1976",
      "1997",
      "1972",
      "1979"
    ],
    "optionsAr": [
      "1976",
      "1997",
      "1972",
      "1979"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0603"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Lion King” released?",
    "ar": "في أي سنة صدر فيلم «The Lion King»؟",
    "options": [
      "2018",
      "1994",
      "1995",
      "2012"
    ],
    "optionsAr": [
      "2018",
      "1994",
      "1995",
      "2012"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0604"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Aladdin” released?",
    "ar": "في أي سنة صدر فيلم «Aladdin»؟",
    "options": [
      "1994",
      "2009",
      "1992",
      "2015"
    ],
    "optionsAr": [
      "1994",
      "2009",
      "1992",
      "2015"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0605"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Beauty and the Beast” released?",
    "ar": "في أي سنة صدر فيلم «Beauty and the Beast»؟",
    "options": [
      "2016",
      "2001",
      "2010",
      "1991"
    ],
    "optionsAr": [
      "2016",
      "2001",
      "2010",
      "1991"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0606"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Shrek” released?",
    "ar": "في أي سنة صدر فيلم «Shrek»؟",
    "options": [
      "2009",
      "1988",
      "2011",
      "2001"
    ],
    "optionsAr": [
      "2009",
      "1988",
      "2011",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0607"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Kung Fu Panda” released?",
    "ar": "في أي سنة صدر فيلم «Kung Fu Panda»؟",
    "options": [
      "2008",
      "2005",
      "1997",
      "2011"
    ],
    "optionsAr": [
      "2008",
      "2005",
      "1997",
      "2011"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0608"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “How to Train Your Dragon” released?",
    "ar": "في أي سنة صدر فيلم «How to Train Your Dragon»؟",
    "options": [
      "2000",
      "2010",
      "1975",
      "1972"
    ],
    "optionsAr": [
      "2000",
      "2010",
      "1975",
      "1972"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0609"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Despicable Me” released?",
    "ar": "في أي سنة صدر فيلم «Despicable Me»؟",
    "options": [
      "2018",
      "2019",
      "1994",
      "2010"
    ],
    "optionsAr": [
      "2018",
      "2019",
      "1994",
      "2010"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0610"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Home Alone” released?",
    "ar": "في أي سنة صدر فيلم «Home Alone»؟",
    "options": [
      "2003",
      "2002",
      "1990",
      "2023"
    ],
    "optionsAr": [
      "2003",
      "2002",
      "1990",
      "2023"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0611"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Mrs. Doubtfire” released?",
    "ar": "في أي سنة صدر فيلم «Mrs. Doubtfire»؟",
    "options": [
      "2002",
      "1995",
      "1993",
      "1985"
    ],
    "optionsAr": [
      "2002",
      "1995",
      "1993",
      "1985"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0612"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Harry Potter and the Sorcerer’s Stone” released?",
    "ar": "في أي سنة صدر فيلم «Harry Potter and the Sorcerer’s Stone»؟",
    "options": [
      "2001",
      "2012",
      "1976",
      "2018"
    ],
    "optionsAr": [
      "2001",
      "2012",
      "1976",
      "2018"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0613"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Harry Potter and the Chamber of Secrets” released?",
    "ar": "في أي سنة صدر فيلم «Harry Potter and the Chamber of Secrets»؟",
    "options": [
      "2003",
      "2010",
      "2002",
      "1994"
    ],
    "optionsAr": [
      "2003",
      "2010",
      "2002",
      "1994"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0614"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Pirates of the Caribbean: The Curse of the Black Pearl” released?",
    "ar": "في أي سنة صدر فيلم «Pirates of the Caribbean: The Curse of the Black Pearl»؟",
    "options": [
      "1991",
      "2003",
      "2010",
      "2015"
    ],
    "optionsAr": [
      "1991",
      "2003",
      "2010",
      "2015"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0615"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Mask” released?",
    "ar": "في أي سنة صدر فيلم «The Mask»؟",
    "options": [
      "2003",
      "2017",
      "1994",
      "2012"
    ],
    "optionsAr": [
      "2003",
      "2017",
      "1994",
      "2012"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0616"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Truman Show” released?",
    "ar": "في أي سنة صدر فيلم «The Truman Show»؟",
    "options": [
      "1998",
      "2009",
      "2017",
      "2013"
    ],
    "optionsAr": [
      "1998",
      "2009",
      "2017",
      "2013"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0617"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Grand Budapest Hotel” released?",
    "ar": "في أي سنة صدر فيلم «The Grand Budapest Hotel»؟",
    "options": [
      "2014",
      "2023",
      "1988",
      "2002"
    ],
    "optionsAr": [
      "2014",
      "2023",
      "1988",
      "2002"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0618"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The French Dispatch” released?",
    "ar": "في أي سنة صدر فيلم «The French Dispatch»؟",
    "options": [
      "2001",
      "1992",
      "2021",
      "1997"
    ],
    "optionsAr": [
      "2001",
      "1992",
      "2021",
      "1997"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0619"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “La La Land” released?",
    "ar": "في أي سنة صدر فيلم «La La Land»؟",
    "options": [
      "2000",
      "2011",
      "2016",
      "2006"
    ],
    "optionsAr": [
      "2000",
      "2011",
      "2016",
      "2006"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0620"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Whiplash” released?",
    "ar": "في أي سنة صدر فيلم «Whiplash»؟",
    "options": [
      "2014",
      "2012",
      "2000",
      "1985"
    ],
    "optionsAr": [
      "2014",
      "2012",
      "2000",
      "1985"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0621"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Interstellar” released?",
    "ar": "في أي سنة صدر فيلم «Interstellar»؟",
    "options": [
      "2002",
      "2008",
      "2014",
      "2018"
    ],
    "optionsAr": [
      "2002",
      "2008",
      "2014",
      "2018"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0622"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Dunkirk” released?",
    "ar": "في أي سنة صدر فيلم «Dunkirk»؟",
    "options": [
      "1988",
      "1979",
      "2017",
      "2005"
    ],
    "optionsAr": [
      "1988",
      "1979",
      "2017",
      "2005"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0623"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Oppenheimer” released?",
    "ar": "في أي سنة صدر فيلم «Oppenheimer»؟",
    "options": [
      "2023",
      "1993",
      "2000",
      "2014"
    ],
    "optionsAr": [
      "2023",
      "1993",
      "2000",
      "2014"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0624"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Prestige” released?",
    "ar": "في أي سنة صدر فيلم «The Prestige»؟",
    "options": [
      "2006",
      "2015",
      "2014",
      "2010"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "2014",
      "2010"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0625"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Departed” released?",
    "ar": "في أي سنة صدر فيلم «The Departed»؟",
    "options": [
      "1982",
      "2019",
      "2006",
      "1991"
    ],
    "optionsAr": [
      "1982",
      "2019",
      "2006",
      "1991"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0626"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Goodfellas” released?",
    "ar": "في أي سنة صدر فيلم «Goodfellas»؟",
    "options": [
      "2006",
      "2016",
      "1990",
      "1998"
    ],
    "optionsAr": [
      "2006",
      "2016",
      "1990",
      "1998"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0627"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Wolf of Wall Street” released?",
    "ar": "في أي سنة صدر فيلم «The Wolf of Wall Street»؟",
    "options": [
      "2005",
      "1992",
      "1993",
      "2013"
    ],
    "optionsAr": [
      "2005",
      "1992",
      "1993",
      "2013"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0628"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “The Irishman” released?",
    "ar": "في أي سنة صدر فيلم «The Irishman»؟",
    "options": [
      "2013",
      "1988",
      "2019",
      "2010"
    ],
    "optionsAr": [
      "2013",
      "1988",
      "2019",
      "2010"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0629"
  },
  {
    "category": "Movies & TV",
    "en": "In which year was “Taxi Driver” released?",
    "ar": "في أي سنة صدر فيلم «Taxi Driver»؟",
    "options": [
      "1975",
      "1976",
      "2019",
      "1998"
    ],
    "optionsAr": [
      "1975",
      "1976",
      "2019",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0630"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Hydrogen?",
    "ar": "ما الرمز الكيميائي لعنصر الهيدروجين؟",
    "options": [
      "Pd",
      "H",
      "Fe",
      "Nd"
    ],
    "optionsAr": [
      "Pd",
      "H",
      "Fe",
      "Nd"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0631"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Helium?",
    "ar": "ما الرمز الكيميائي لعنصر الهيليوم؟",
    "options": [
      "Li",
      "Cu",
      "He",
      "Sm"
    ],
    "optionsAr": [
      "Li",
      "Cu",
      "He",
      "Sm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0632"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Lithium?",
    "ar": "ما الرمز الكيميائي لعنصر الليثيوم؟",
    "options": [
      "Li",
      "Cr",
      "As",
      "O"
    ],
    "optionsAr": [
      "Li",
      "Cr",
      "As",
      "O"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0633"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Beryllium?",
    "ar": "ما الرمز الكيميائي لعنصر البيريليوم؟",
    "options": [
      "K",
      "Sn",
      "Be",
      "Zn"
    ],
    "optionsAr": [
      "K",
      "Sn",
      "Be",
      "Zn"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0634"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Boron?",
    "ar": "ما الرمز الكيميائي لعنصر البورون؟",
    "options": [
      "Ga",
      "B",
      "Sc",
      "Nd"
    ],
    "optionsAr": [
      "Ga",
      "B",
      "Sc",
      "Nd"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0635"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Carbon?",
    "ar": "ما الرمز الكيميائي لعنصر الكربون؟",
    "options": [
      "Ne",
      "Cr",
      "V",
      "C"
    ],
    "optionsAr": [
      "Ne",
      "Cr",
      "V",
      "C"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0636"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Nitrogen?",
    "ar": "ما الرمز الكيميائي لعنصر النيتروجين؟",
    "options": [
      "B",
      "F",
      "Cl",
      "N"
    ],
    "optionsAr": [
      "B",
      "F",
      "Cl",
      "N"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0637"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Oxygen?",
    "ar": "ما الرمز الكيميائي لعنصر الأكسجين؟",
    "options": [
      "O",
      "S",
      "Nb",
      "Zr"
    ],
    "optionsAr": [
      "O",
      "S",
      "Nb",
      "Zr"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0638"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Fluorine?",
    "ar": "ما الرمز الكيميائي لعنصر الفلور؟",
    "options": [
      "F",
      "Cu",
      "Gd",
      "Ho"
    ],
    "optionsAr": [
      "F",
      "Cu",
      "Gd",
      "Ho"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0639"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Neon?",
    "ar": "ما الرمز الكيميائي لعنصر النيون؟",
    "options": [
      "Li",
      "Sc",
      "Ne",
      "Ho"
    ],
    "optionsAr": [
      "Li",
      "Sc",
      "Ne",
      "Ho"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0640"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Sodium?",
    "ar": "ما الرمز الكيميائي لعنصر الصوديوم؟",
    "options": [
      "Sm",
      "K",
      "Na",
      "Tm"
    ],
    "optionsAr": [
      "Sm",
      "K",
      "Na",
      "Tm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0641"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Magnesium?",
    "ar": "ما الرمز الكيميائي لعنصر المغنيسيوم؟",
    "options": [
      "H",
      "Be",
      "Tb",
      "Mg"
    ],
    "optionsAr": [
      "H",
      "Be",
      "Tb",
      "Mg"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0642"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Aluminium?",
    "ar": "ما الرمز الكيميائي لعنصر الألومنيوم؟",
    "options": [
      "Na",
      "P",
      "Al",
      "Rb"
    ],
    "optionsAr": [
      "Na",
      "P",
      "Al",
      "Rb"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0643"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Silicon?",
    "ar": "ما الرمز الكيميائي لعنصر السيليكون؟",
    "options": [
      "Si",
      "Nd",
      "Tb",
      "Ar"
    ],
    "optionsAr": [
      "Si",
      "Nd",
      "Tb",
      "Ar"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0644"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Phosphorus?",
    "ar": "ما الرمز الكيميائي لعنصر الفوسفور؟",
    "options": [
      "P",
      "Cd",
      "O",
      "Tb"
    ],
    "optionsAr": [
      "P",
      "Cd",
      "O",
      "Tb"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0645"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Sulfur?",
    "ar": "ما الرمز الكيميائي لعنصر الكبريت؟",
    "options": [
      "Nb",
      "Ar",
      "S",
      "Tb"
    ],
    "optionsAr": [
      "Nb",
      "Ar",
      "S",
      "Tb"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0646"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Chlorine?",
    "ar": "ما الرمز الكيميائي لعنصر الكلور؟",
    "options": [
      "Cl",
      "Co",
      "Cr",
      "P"
    ],
    "optionsAr": [
      "Cl",
      "Co",
      "Cr",
      "P"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0647"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Argon?",
    "ar": "ما الرمز الكيميائي لعنصر الأرجون؟",
    "options": [
      "In",
      "Rh",
      "Ar",
      "Li"
    ],
    "optionsAr": [
      "In",
      "Rh",
      "Ar",
      "Li"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0648"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Potassium?",
    "ar": "ما الرمز الكيميائي لعنصر البوتاسيوم؟",
    "options": [
      "N",
      "K",
      "Li",
      "Sc"
    ],
    "optionsAr": [
      "N",
      "K",
      "Li",
      "Sc"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0649"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Calcium?",
    "ar": "ما الرمز الكيميائي لعنصر الكالسيوم؟",
    "options": [
      "Pd",
      "Ca",
      "Ga",
      "Ce"
    ],
    "optionsAr": [
      "Pd",
      "Ca",
      "Ga",
      "Ce"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0650"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Scandium?",
    "ar": "ما الرمز الكيميائي لعنصر السكانديوم؟",
    "options": [
      "Zr",
      "Sb",
      "Tb",
      "Sc"
    ],
    "optionsAr": [
      "Zr",
      "Sb",
      "Tb",
      "Sc"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0651"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Titanium?",
    "ar": "ما الرمز الكيميائي لعنصر التيتانيوم؟",
    "options": [
      "Ti",
      "Cu",
      "Si",
      "K"
    ],
    "optionsAr": [
      "Ti",
      "Cu",
      "Si",
      "K"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0652"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Vanadium?",
    "ar": "ما الرمز الكيميائي لعنصر الفاناديوم؟",
    "options": [
      "Ga",
      "B",
      "V",
      "I"
    ],
    "optionsAr": [
      "Ga",
      "B",
      "V",
      "I"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0653"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Chromium?",
    "ar": "ما الرمز الكيميائي لعنصر الكروم؟",
    "options": [
      "Mn",
      "Fe",
      "Cr",
      "Pm"
    ],
    "optionsAr": [
      "Mn",
      "Fe",
      "Cr",
      "Pm"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0654"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Manganese?",
    "ar": "ما الرمز الكيميائي لعنصر المنغنيز؟",
    "options": [
      "O",
      "Y",
      "Sb",
      "Mn"
    ],
    "optionsAr": [
      "O",
      "Y",
      "Sb",
      "Mn"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0655"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Iron?",
    "ar": "ما الرمز الكيميائي لعنصر الحديد؟",
    "options": [
      "S",
      "K",
      "Fe",
      "Ga"
    ],
    "optionsAr": [
      "S",
      "K",
      "Fe",
      "Ga"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0656"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cobalt?",
    "ar": "ما الرمز الكيميائي لعنصر الكوبالت؟",
    "options": [
      "Cd",
      "Co",
      "Ba",
      "Ce"
    ],
    "optionsAr": [
      "Cd",
      "Co",
      "Ba",
      "Ce"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0657"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Nickel?",
    "ar": "ما الرمز الكيميائي لعنصر النيكل؟",
    "options": [
      "I",
      "Xe",
      "Ne",
      "Ni"
    ],
    "optionsAr": [
      "I",
      "Xe",
      "Ne",
      "Ni"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0658"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Copper?",
    "ar": "ما الرمز الكيميائي لعنصر النحاس؟",
    "options": [
      "Nd",
      "Ga",
      "Cu",
      "Ti"
    ],
    "optionsAr": [
      "Nd",
      "Ga",
      "Cu",
      "Ti"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0659"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Zinc?",
    "ar": "ما الرمز الكيميائي لعنصر الزنك؟",
    "options": [
      "Zn",
      "Nb",
      "Ge",
      "Tc"
    ],
    "optionsAr": [
      "Zn",
      "Nb",
      "Ge",
      "Tc"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0660"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Gallium?",
    "ar": "ما الرمز الكيميائي لعنصر الغاليوم؟",
    "options": [
      "Ar",
      "Mn",
      "Ho",
      "Ga"
    ],
    "optionsAr": [
      "Ar",
      "Mn",
      "Ho",
      "Ga"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0661"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Germanium?",
    "ar": "ما الرمز الكيميائي لعنصر الجرمانيوم؟",
    "options": [
      "Y",
      "Cd",
      "Ge",
      "N"
    ],
    "optionsAr": [
      "Y",
      "Cd",
      "Ge",
      "N"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0662"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Arsenic?",
    "ar": "ما الرمز الكيميائي لعنصر الزرنيخ؟",
    "options": [
      "As",
      "He",
      "Rb",
      "Ba"
    ],
    "optionsAr": [
      "As",
      "He",
      "Rb",
      "Ba"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0663"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Selenium?",
    "ar": "ما الرمز الكيميائي لعنصر السيلينيوم؟",
    "options": [
      "Se",
      "Cs",
      "Cd",
      "Mn"
    ],
    "optionsAr": [
      "Se",
      "Cs",
      "Cd",
      "Mn"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0664"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Bromine?",
    "ar": "ما الرمز الكيميائي لعنصر البروم؟",
    "options": [
      "Ho",
      "Nd",
      "Si",
      "Br"
    ],
    "optionsAr": [
      "Ho",
      "Nd",
      "Si",
      "Br"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0665"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Krypton?",
    "ar": "ما الرمز الكيميائي لعنصر الكريبتون؟",
    "options": [
      "Mo",
      "I",
      "Yb",
      "Kr"
    ],
    "optionsAr": [
      "Mo",
      "I",
      "Yb",
      "Kr"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0666"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Rubidium?",
    "ar": "ما الرمز الكيميائي لعنصر الروبيديوم؟",
    "options": [
      "I",
      "Rb",
      "Cd",
      "Ge"
    ],
    "optionsAr": [
      "I",
      "Rb",
      "Cd",
      "Ge"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0667"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Strontium?",
    "ar": "ما الرمز الكيميائي لعنصر السترونشيوم؟",
    "options": [
      "Sr",
      "Tc",
      "I",
      "S"
    ],
    "optionsAr": [
      "Sr",
      "Tc",
      "I",
      "S"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0668"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Yttrium?",
    "ar": "ما الرمز الكيميائي لعنصر الإيتريوم؟",
    "options": [
      "La",
      "Y",
      "In",
      "N"
    ],
    "optionsAr": [
      "La",
      "Y",
      "In",
      "N"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0669"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Zirconium?",
    "ar": "ما الرمز الكيميائي لعنصر الزركونيوم؟",
    "options": [
      "Zr",
      "Ru",
      "O",
      "Br"
    ],
    "optionsAr": [
      "Zr",
      "Ru",
      "O",
      "Br"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0670"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Niobium?",
    "ar": "ما الرمز الكيميائي لعنصر النيوبيوم؟",
    "options": [
      "As",
      "Nb",
      "Cs",
      "Rh"
    ],
    "optionsAr": [
      "As",
      "Nb",
      "Cs",
      "Rh"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0671"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Molybdenum?",
    "ar": "ما الرمز الكيميائي لعنصر الموليبدينوم؟",
    "options": [
      "Ag",
      "Mo",
      "Ge",
      "Cu"
    ],
    "optionsAr": [
      "Ag",
      "Mo",
      "Ge",
      "Cu"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0672"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Technetium?",
    "ar": "ما الرمز الكيميائي لعنصر التكنيتيوم؟",
    "options": [
      "Tc",
      "Nd",
      "H",
      "Be"
    ],
    "optionsAr": [
      "Tc",
      "Nd",
      "H",
      "Be"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0673"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Ruthenium?",
    "ar": "ما الرمز الكيميائي لعنصر الروثينيوم؟",
    "options": [
      "Co",
      "Ru",
      "Se",
      "Nb"
    ],
    "optionsAr": [
      "Co",
      "Ru",
      "Se",
      "Nb"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0674"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Rhodium?",
    "ar": "ما الرمز الكيميائي لعنصر الروديوم؟",
    "options": [
      "Rh",
      "Gd",
      "Rb",
      "C"
    ],
    "optionsAr": [
      "Rh",
      "Gd",
      "Rb",
      "C"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0675"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Palladium?",
    "ar": "ما الرمز الكيميائي لعنصر البلاديوم؟",
    "options": [
      "Ge",
      "Al",
      "P",
      "Pd"
    ],
    "optionsAr": [
      "Ge",
      "Al",
      "P",
      "Pd"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0676"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Silver?",
    "ar": "ما الرمز الكيميائي لعنصر الفضة؟",
    "options": [
      "Ag",
      "Fe",
      "Mn",
      "Cl"
    ],
    "optionsAr": [
      "Ag",
      "Fe",
      "Mn",
      "Cl"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0677"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cadmium?",
    "ar": "ما الرمز الكيميائي لعنصر الكادميوم؟",
    "options": [
      "Cd",
      "Dy",
      "Sb",
      "Rb"
    ],
    "optionsAr": [
      "Cd",
      "Dy",
      "Sb",
      "Rb"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0678"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Indium?",
    "ar": "ما الرمز الكيميائي لعنصر الإنديوم؟",
    "options": [
      "Ag",
      "Ho",
      "In",
      "Li"
    ],
    "optionsAr": [
      "Ag",
      "Ho",
      "In",
      "Li"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0679"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Tin?",
    "ar": "ما الرمز الكيميائي لعنصر القصدير؟",
    "options": [
      "Na",
      "Kr",
      "Ar",
      "Sn"
    ],
    "optionsAr": [
      "Na",
      "Kr",
      "Ar",
      "Sn"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0680"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Antimony?",
    "ar": "ما الرمز الكيميائي لعنصر الأنتيمون؟",
    "options": [
      "Sb",
      "Eu",
      "Ce",
      "V"
    ],
    "optionsAr": [
      "Sb",
      "Eu",
      "Ce",
      "V"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0681"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Tellurium?",
    "ar": "ما الرمز الكيميائي لعنصر التيلوريوم؟",
    "options": [
      "S",
      "Te",
      "Cd",
      "Co"
    ],
    "optionsAr": [
      "S",
      "Te",
      "Cd",
      "Co"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0682"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Iodine?",
    "ar": "ما الرمز الكيميائي لعنصر اليود؟",
    "options": [
      "Be",
      "Rh",
      "I",
      "H"
    ],
    "optionsAr": [
      "Be",
      "Rh",
      "I",
      "H"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0683"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Xenon?",
    "ar": "ما الرمز الكيميائي لعنصر الزينون؟",
    "options": [
      "Ag",
      "Xe",
      "Sb",
      "Cl"
    ],
    "optionsAr": [
      "Ag",
      "Xe",
      "Sb",
      "Cl"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0684"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Caesium?",
    "ar": "ما الرمز الكيميائي لعنصر السيزيوم؟",
    "options": [
      "Sb",
      "Cd",
      "H",
      "Cs"
    ],
    "optionsAr": [
      "Sb",
      "Cd",
      "H",
      "Cs"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0685"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Barium?",
    "ar": "ما الرمز الكيميائي لعنصر الباريوم؟",
    "options": [
      "Ti",
      "He",
      "B",
      "Ba"
    ],
    "optionsAr": [
      "Ti",
      "He",
      "B",
      "Ba"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0686"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Lanthanum?",
    "ar": "ما الرمز الكيميائي لعنصر اللانثانوم؟",
    "options": [
      "Cu",
      "La",
      "He",
      "Ge"
    ],
    "optionsAr": [
      "Cu",
      "La",
      "He",
      "Ge"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0687"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Cerium?",
    "ar": "ما الرمز الكيميائي لعنصر السيريوم؟",
    "options": [
      "V",
      "Cr",
      "Rh",
      "Ce"
    ],
    "optionsAr": [
      "V",
      "Cr",
      "Rh",
      "Ce"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0688"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Praseodymium?",
    "ar": "ما الرمز الكيميائي لعنصر البراسيوديميوم؟",
    "options": [
      "Pr",
      "P",
      "O",
      "Be"
    ],
    "optionsAr": [
      "Pr",
      "P",
      "O",
      "Be"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0689"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Neodymium?",
    "ar": "ما الرمز الكيميائي لعنصر النيوديميوم؟",
    "options": [
      "Nd",
      "La",
      "Y",
      "Ba"
    ],
    "optionsAr": [
      "Nd",
      "La",
      "Y",
      "Ba"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0690"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Promethium?",
    "ar": "ما الرمز الكيميائي لعنصر البروميثيوم؟",
    "options": [
      "As",
      "Pm",
      "In",
      "Yb"
    ],
    "optionsAr": [
      "As",
      "Pm",
      "In",
      "Yb"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0691"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Samarium?",
    "ar": "ما الرمز الكيميائي لعنصر الساماريوم؟",
    "options": [
      "Pd",
      "Sm",
      "K",
      "Tc"
    ],
    "optionsAr": [
      "Pd",
      "Sm",
      "K",
      "Tc"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0692"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Europium?",
    "ar": "ما الرمز الكيميائي لعنصر اليوروبيوم؟",
    "options": [
      "Eu",
      "Cr",
      "Ti",
      "Mn"
    ],
    "optionsAr": [
      "Eu",
      "Cr",
      "Ti",
      "Mn"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0693"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Gadolinium?",
    "ar": "ما الرمز الكيميائي لعنصر الغادولينيوم؟",
    "options": [
      "Te",
      "Gd",
      "Kr",
      "Dy"
    ],
    "optionsAr": [
      "Te",
      "Gd",
      "Kr",
      "Dy"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0694"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Terbium?",
    "ar": "ما الرمز الكيميائي لعنصر التيربيوم؟",
    "options": [
      "Tb",
      "Tc",
      "V",
      "Xe"
    ],
    "optionsAr": [
      "Tb",
      "Tc",
      "V",
      "Xe"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0695"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Dysprosium?",
    "ar": "ما الرمز الكيميائي لعنصر الديسبروسيوم؟",
    "options": [
      "Sn",
      "Ga",
      "Br",
      "Dy"
    ],
    "optionsAr": [
      "Sn",
      "Ga",
      "Br",
      "Dy"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0696"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Holmium?",
    "ar": "ما الرمز الكيميائي لعنصر الهولميوم؟",
    "options": [
      "Yb",
      "Sr",
      "Ho",
      "V"
    ],
    "optionsAr": [
      "Yb",
      "Sr",
      "Ho",
      "V"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0697"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Erbium?",
    "ar": "ما الرمز الكيميائي لعنصر الإربيوم؟",
    "options": [
      "Sn",
      "P",
      "Xe",
      "Er"
    ],
    "optionsAr": [
      "Sn",
      "P",
      "Xe",
      "Er"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0698"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Thulium?",
    "ar": "ما الرمز الكيميائي لعنصر الثوليوم؟",
    "options": [
      "Ni",
      "Y",
      "Sn",
      "Tm"
    ],
    "optionsAr": [
      "Ni",
      "Y",
      "Sn",
      "Tm"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0699"
  },
  {
    "category": "Science",
    "en": "What is the chemical symbol for Ytterbium?",
    "ar": "ما الرمز الكيميائي لعنصر الإيتربيوم؟",
    "options": [
      "Y",
      "Cu",
      "Yb",
      "Ni"
    ],
    "optionsAr": [
      "Y",
      "Cu",
      "Yb",
      "Ni"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0700"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Hydrogen?",
    "ar": "ما العدد الذري لعنصر الهيدروجين؟",
    "options": [
      "1",
      "62",
      "30",
      "32"
    ],
    "optionsAr": [
      "1",
      "62",
      "30",
      "32"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0701"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Helium?",
    "ar": "ما العدد الذري لعنصر الهيليوم؟",
    "options": [
      "56",
      "28",
      "4",
      "2"
    ],
    "optionsAr": [
      "56",
      "28",
      "4",
      "2"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0702"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Lithium?",
    "ar": "ما العدد الذري لعنصر الليثيوم؟",
    "options": [
      "20",
      "3",
      "7",
      "65"
    ],
    "optionsAr": [
      "20",
      "3",
      "7",
      "65"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0703"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Beryllium?",
    "ar": "ما العدد الذري لعنصر البيريليوم؟",
    "options": [
      "4",
      "53",
      "19",
      "36"
    ],
    "optionsAr": [
      "4",
      "53",
      "19",
      "36"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0704"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Boron?",
    "ar": "ما العدد الذري لعنصر البورون؟",
    "options": [
      "48",
      "53",
      "5",
      "35"
    ],
    "optionsAr": [
      "48",
      "53",
      "5",
      "35"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0705"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Carbon?",
    "ar": "ما العدد الذري لعنصر الكربون؟",
    "options": [
      "65",
      "30",
      "6",
      "36"
    ],
    "optionsAr": [
      "65",
      "30",
      "6",
      "36"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0706"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Nitrogen?",
    "ar": "ما العدد الذري لعنصر النيتروجين؟",
    "options": [
      "43",
      "25",
      "7",
      "11"
    ],
    "optionsAr": [
      "43",
      "25",
      "7",
      "11"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0707"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Oxygen?",
    "ar": "ما العدد الذري لعنصر الأكسجين؟",
    "options": [
      "58",
      "3",
      "8",
      "1"
    ],
    "optionsAr": [
      "58",
      "3",
      "8",
      "1"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0708"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Fluorine?",
    "ar": "ما العدد الذري لعنصر الفلور؟",
    "options": [
      "38",
      "56",
      "9",
      "31"
    ],
    "optionsAr": [
      "38",
      "56",
      "9",
      "31"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0709"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Neon?",
    "ar": "ما العدد الذري لعنصر النيون؟",
    "options": [
      "10",
      "13",
      "9",
      "52"
    ],
    "optionsAr": [
      "10",
      "13",
      "9",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0710"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Sodium?",
    "ar": "ما العدد الذري لعنصر الصوديوم؟",
    "options": [
      "8",
      "29",
      "11",
      "43"
    ],
    "optionsAr": [
      "8",
      "29",
      "11",
      "43"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0711"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Magnesium?",
    "ar": "ما العدد الذري لعنصر المغنيسيوم؟",
    "options": [
      "62",
      "12",
      "6",
      "32"
    ],
    "optionsAr": [
      "62",
      "12",
      "6",
      "32"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0712"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Aluminium?",
    "ar": "ما العدد الذري لعنصر الألومنيوم؟",
    "options": [
      "13",
      "26",
      "15",
      "21"
    ],
    "optionsAr": [
      "13",
      "26",
      "15",
      "21"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0713"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Silicon?",
    "ar": "ما العدد الذري لعنصر السيليكون؟",
    "options": [
      "28",
      "14",
      "67",
      "58"
    ],
    "optionsAr": [
      "28",
      "14",
      "67",
      "58"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0714"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Phosphorus?",
    "ar": "ما العدد الذري لعنصر الفوسفور؟",
    "options": [
      "68",
      "15",
      "50",
      "7"
    ],
    "optionsAr": [
      "68",
      "15",
      "50",
      "7"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0715"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Sulfur?",
    "ar": "ما العدد الذري لعنصر الكبريت؟",
    "options": [
      "16",
      "40",
      "1",
      "61"
    ],
    "optionsAr": [
      "16",
      "40",
      "1",
      "61"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0716"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Chlorine?",
    "ar": "ما العدد الذري لعنصر الكلور؟",
    "options": [
      "27",
      "58",
      "17",
      "60"
    ],
    "optionsAr": [
      "27",
      "58",
      "17",
      "60"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0717"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Argon?",
    "ar": "ما العدد الذري لعنصر الأرجون؟",
    "options": [
      "18",
      "51",
      "48",
      "36"
    ],
    "optionsAr": [
      "18",
      "51",
      "48",
      "36"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0718"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Potassium?",
    "ar": "ما العدد الذري لعنصر البوتاسيوم؟",
    "options": [
      "24",
      "57",
      "19",
      "51"
    ],
    "optionsAr": [
      "24",
      "57",
      "19",
      "51"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0719"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Calcium?",
    "ar": "ما العدد الذري لعنصر الكالسيوم؟",
    "options": [
      "38",
      "29",
      "20",
      "5"
    ],
    "optionsAr": [
      "38",
      "29",
      "20",
      "5"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0720"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Scandium?",
    "ar": "ما العدد الذري لعنصر السكانديوم؟",
    "options": [
      "53",
      "21",
      "19",
      "39"
    ],
    "optionsAr": [
      "53",
      "21",
      "19",
      "39"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0721"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Titanium?",
    "ar": "ما العدد الذري لعنصر التيتانيوم؟",
    "options": [
      "22",
      "34",
      "37",
      "48"
    ],
    "optionsAr": [
      "22",
      "34",
      "37",
      "48"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0722"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Vanadium?",
    "ar": "ما العدد الذري لعنصر الفاناديوم؟",
    "options": [
      "64",
      "39",
      "23",
      "42"
    ],
    "optionsAr": [
      "64",
      "39",
      "23",
      "42"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0723"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Chromium?",
    "ar": "ما العدد الذري لعنصر الكروم؟",
    "options": [
      "14",
      "69",
      "24",
      "62"
    ],
    "optionsAr": [
      "14",
      "69",
      "24",
      "62"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0724"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Manganese?",
    "ar": "ما العدد الذري لعنصر المنغنيز؟",
    "options": [
      "36",
      "63",
      "5",
      "25"
    ],
    "optionsAr": [
      "36",
      "63",
      "5",
      "25"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0725"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Iron?",
    "ar": "ما العدد الذري لعنصر الحديد؟",
    "options": [
      "26",
      "10",
      "18",
      "66"
    ],
    "optionsAr": [
      "26",
      "10",
      "18",
      "66"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0726"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cobalt?",
    "ar": "ما العدد الذري لعنصر الكوبالت؟",
    "options": [
      "16",
      "27",
      "55",
      "7"
    ],
    "optionsAr": [
      "16",
      "27",
      "55",
      "7"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0727"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Nickel?",
    "ar": "ما العدد الذري لعنصر النيكل؟",
    "options": [
      "9",
      "26",
      "15",
      "28"
    ],
    "optionsAr": [
      "9",
      "26",
      "15",
      "28"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0728"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Copper?",
    "ar": "ما العدد الذري لعنصر النحاس؟",
    "options": [
      "29",
      "59",
      "7",
      "25"
    ],
    "optionsAr": [
      "29",
      "59",
      "7",
      "25"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0729"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Zinc?",
    "ar": "ما العدد الذري لعنصر الزنك؟",
    "options": [
      "29",
      "35",
      "23",
      "30"
    ],
    "optionsAr": [
      "29",
      "35",
      "23",
      "30"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0730"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Gallium?",
    "ar": "ما العدد الذري لعنصر الغاليوم؟",
    "options": [
      "31",
      "54",
      "35",
      "52"
    ],
    "optionsAr": [
      "31",
      "54",
      "35",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0731"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Germanium?",
    "ar": "ما العدد الذري لعنصر الجرمانيوم؟",
    "options": [
      "32",
      "47",
      "20",
      "35"
    ],
    "optionsAr": [
      "32",
      "47",
      "20",
      "35"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0732"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Arsenic?",
    "ar": "ما العدد الذري لعنصر الزرنيخ؟",
    "options": [
      "33",
      "32",
      "46",
      "57"
    ],
    "optionsAr": [
      "33",
      "32",
      "46",
      "57"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0733"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Selenium?",
    "ar": "ما العدد الذري لعنصر السيلينيوم؟",
    "options": [
      "8",
      "34",
      "2",
      "55"
    ],
    "optionsAr": [
      "8",
      "34",
      "2",
      "55"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0734"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Bromine?",
    "ar": "ما العدد الذري لعنصر البروم؟",
    "options": [
      "29",
      "35",
      "61",
      "25"
    ],
    "optionsAr": [
      "29",
      "35",
      "61",
      "25"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0735"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Krypton?",
    "ar": "ما العدد الذري لعنصر الكريبتون؟",
    "options": [
      "55",
      "36",
      "23",
      "51"
    ],
    "optionsAr": [
      "55",
      "36",
      "23",
      "51"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0736"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Rubidium?",
    "ar": "ما العدد الذري لعنصر الروبيديوم؟",
    "options": [
      "49",
      "37",
      "29",
      "52"
    ],
    "optionsAr": [
      "49",
      "37",
      "29",
      "52"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0737"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Strontium?",
    "ar": "ما العدد الذري لعنصر السترونشيوم؟",
    "options": [
      "29",
      "38",
      "28",
      "52"
    ],
    "optionsAr": [
      "29",
      "38",
      "28",
      "52"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0738"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Yttrium?",
    "ar": "ما العدد الذري لعنصر الإيتريوم؟",
    "options": [
      "20",
      "10",
      "43",
      "39"
    ],
    "optionsAr": [
      "20",
      "10",
      "43",
      "39"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0739"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Zirconium?",
    "ar": "ما العدد الذري لعنصر الزركونيوم؟",
    "options": [
      "10",
      "40",
      "7",
      "50"
    ],
    "optionsAr": [
      "10",
      "40",
      "7",
      "50"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0740"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Niobium?",
    "ar": "ما العدد الذري لعنصر النيوبيوم؟",
    "options": [
      "23",
      "18",
      "4",
      "41"
    ],
    "optionsAr": [
      "23",
      "18",
      "4",
      "41"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0741"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Molybdenum?",
    "ar": "ما العدد الذري لعنصر الموليبدينوم؟",
    "options": [
      "42",
      "26",
      "63",
      "51"
    ],
    "optionsAr": [
      "42",
      "26",
      "63",
      "51"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0742"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Technetium?",
    "ar": "ما العدد الذري لعنصر التكنيتيوم؟",
    "options": [
      "43",
      "58",
      "1",
      "52"
    ],
    "optionsAr": [
      "43",
      "58",
      "1",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0743"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Ruthenium?",
    "ar": "ما العدد الذري لعنصر الروثينيوم؟",
    "options": [
      "52",
      "18",
      "1",
      "44"
    ],
    "optionsAr": [
      "52",
      "18",
      "1",
      "44"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0744"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Rhodium?",
    "ar": "ما العدد الذري لعنصر الروديوم؟",
    "options": [
      "45",
      "23",
      "30",
      "38"
    ],
    "optionsAr": [
      "45",
      "23",
      "30",
      "38"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0745"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Palladium?",
    "ar": "ما العدد الذري لعنصر البلاديوم؟",
    "options": [
      "38",
      "46",
      "57",
      "41"
    ],
    "optionsAr": [
      "38",
      "46",
      "57",
      "41"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0746"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Silver?",
    "ar": "ما العدد الذري لعنصر الفضة؟",
    "options": [
      "47",
      "70",
      "40",
      "28"
    ],
    "optionsAr": [
      "47",
      "70",
      "40",
      "28"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0747"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cadmium?",
    "ar": "ما العدد الذري لعنصر الكادميوم؟",
    "options": [
      "47",
      "48",
      "25",
      "42"
    ],
    "optionsAr": [
      "47",
      "48",
      "25",
      "42"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0748"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Indium?",
    "ar": "ما العدد الذري لعنصر الإنديوم؟",
    "options": [
      "14",
      "26",
      "49",
      "37"
    ],
    "optionsAr": [
      "14",
      "26",
      "49",
      "37"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0749"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Tin?",
    "ar": "ما العدد الذري لعنصر القصدير؟",
    "options": [
      "57",
      "38",
      "50",
      "59"
    ],
    "optionsAr": [
      "57",
      "38",
      "50",
      "59"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0750"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Antimony?",
    "ar": "ما العدد الذري لعنصر الأنتيمون؟",
    "options": [
      "36",
      "6",
      "51",
      "50"
    ],
    "optionsAr": [
      "36",
      "6",
      "51",
      "50"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0751"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Tellurium?",
    "ar": "ما العدد الذري لعنصر التيلوريوم؟",
    "options": [
      "46",
      "24",
      "52",
      "35"
    ],
    "optionsAr": [
      "46",
      "24",
      "52",
      "35"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0752"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Iodine?",
    "ar": "ما العدد الذري لعنصر اليود؟",
    "options": [
      "53",
      "18",
      "47",
      "54"
    ],
    "optionsAr": [
      "53",
      "18",
      "47",
      "54"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0753"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Xenon?",
    "ar": "ما العدد الذري لعنصر الزينون؟",
    "options": [
      "33",
      "63",
      "47",
      "54"
    ],
    "optionsAr": [
      "33",
      "63",
      "47",
      "54"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0754"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Caesium?",
    "ar": "ما العدد الذري لعنصر السيزيوم؟",
    "options": [
      "30",
      "55",
      "64",
      "19"
    ],
    "optionsAr": [
      "30",
      "55",
      "64",
      "19"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0755"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Barium?",
    "ar": "ما العدد الذري لعنصر الباريوم؟",
    "options": [
      "61",
      "56",
      "50",
      "2"
    ],
    "optionsAr": [
      "61",
      "56",
      "50",
      "2"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0756"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Lanthanum?",
    "ar": "ما العدد الذري لعنصر اللانثانوم؟",
    "options": [
      "7",
      "50",
      "57",
      "8"
    ],
    "optionsAr": [
      "7",
      "50",
      "57",
      "8"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0757"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Cerium?",
    "ar": "ما العدد الذري لعنصر السيريوم؟",
    "options": [
      "58",
      "16",
      "15",
      "62"
    ],
    "optionsAr": [
      "58",
      "16",
      "15",
      "62"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0758"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Praseodymium?",
    "ar": "ما العدد الذري لعنصر البراسيوديميوم؟",
    "options": [
      "22",
      "43",
      "23",
      "59"
    ],
    "optionsAr": [
      "22",
      "43",
      "23",
      "59"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0759"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Neodymium?",
    "ar": "ما العدد الذري لعنصر النيوديميوم؟",
    "options": [
      "69",
      "59",
      "4",
      "60"
    ],
    "optionsAr": [
      "69",
      "59",
      "4",
      "60"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0760"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Promethium?",
    "ar": "ما العدد الذري لعنصر البروميثيوم؟",
    "options": [
      "61",
      "19",
      "45",
      "4"
    ],
    "optionsAr": [
      "61",
      "19",
      "45",
      "4"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0761"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Samarium?",
    "ar": "ما العدد الذري لعنصر الساماريوم؟",
    "options": [
      "62",
      "11",
      "47",
      "26"
    ],
    "optionsAr": [
      "62",
      "11",
      "47",
      "26"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0762"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Europium?",
    "ar": "ما العدد الذري لعنصر اليوروبيوم؟",
    "options": [
      "40",
      "52",
      "17",
      "63"
    ],
    "optionsAr": [
      "40",
      "52",
      "17",
      "63"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0763"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Gadolinium?",
    "ar": "ما العدد الذري لعنصر الغادولينيوم؟",
    "options": [
      "31",
      "69",
      "56",
      "64"
    ],
    "optionsAr": [
      "31",
      "69",
      "56",
      "64"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0764"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Terbium?",
    "ar": "ما العدد الذري لعنصر التيربيوم؟",
    "options": [
      "48",
      "65",
      "49",
      "6"
    ],
    "optionsAr": [
      "48",
      "65",
      "49",
      "6"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0765"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Dysprosium?",
    "ar": "ما العدد الذري لعنصر الديسبروسيوم؟",
    "options": [
      "51",
      "66",
      "5",
      "12"
    ],
    "optionsAr": [
      "51",
      "66",
      "5",
      "12"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0766"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Holmium?",
    "ar": "ما العدد الذري لعنصر الهولميوم؟",
    "options": [
      "69",
      "67",
      "61",
      "38"
    ],
    "optionsAr": [
      "69",
      "67",
      "61",
      "38"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0767"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Erbium?",
    "ar": "ما العدد الذري لعنصر الإربيوم؟",
    "options": [
      "15",
      "36",
      "68",
      "22"
    ],
    "optionsAr": [
      "15",
      "36",
      "68",
      "22"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0768"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Thulium?",
    "ar": "ما العدد الذري لعنصر الثوليوم؟",
    "options": [
      "4",
      "69",
      "10",
      "14"
    ],
    "optionsAr": [
      "4",
      "69",
      "10",
      "14"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0769"
  },
  {
    "category": "Science",
    "en": "What is the atomic number of Ytterbium?",
    "ar": "ما العدد الذري لعنصر الإيتربيوم؟",
    "options": [
      "70",
      "39",
      "41",
      "52"
    ],
    "optionsAr": [
      "70",
      "39",
      "41",
      "52"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0770"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 1.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 1.0 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Krypton",
      "Aluminium",
      "Hydrogen"
    ],
    "optionsAr": [
      "التيتانيوم",
      "الكريبتون",
      "الألومنيوم",
      "الهيدروجين"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0771"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 4.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 4.0 وحدة كتلة ذرية؟",
    "options": [
      "Ytterbium",
      "Aluminium",
      "Argon",
      "Helium"
    ],
    "optionsAr": [
      "الإيتربيوم",
      "الألومنيوم",
      "الأرجون",
      "الهيليوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0772"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 6.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 6.9 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Lithium",
      "Carbon",
      "Beryllium"
    ],
    "optionsAr": [
      "السيلينيوم",
      "الليثيوم",
      "الكربون",
      "البيريليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0773"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 9.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 9.0 وحدة كتلة ذرية؟",
    "options": [
      "Neon",
      "Tellurium",
      "Iron",
      "Beryllium"
    ],
    "optionsAr": [
      "النيون",
      "التيلوريوم",
      "الحديد",
      "البيريليوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0774"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 10.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 10.8 وحدة كتلة ذرية؟",
    "options": [
      "Promethium",
      "Zinc",
      "Boron",
      "Caesium"
    ],
    "optionsAr": [
      "البروميثيوم",
      "الزنك",
      "البورون",
      "السيزيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0775"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 12.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 12.0 وحدة كتلة ذرية؟",
    "options": [
      "Carbon",
      "Aluminium",
      "Rhodium",
      "Yttrium"
    ],
    "optionsAr": [
      "الكربون",
      "الألومنيوم",
      "الروديوم",
      "الإيتريوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0776"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 14.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 14.0 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Nitrogen",
      "Arsenic",
      "Iodine"
    ],
    "optionsAr": [
      "الفلور",
      "النيتروجين",
      "الزرنيخ",
      "اليود"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0777"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 16.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 16.0 وحدة كتلة ذرية؟",
    "options": [
      "Xenon",
      "Oxygen",
      "Zinc",
      "Fluorine"
    ],
    "optionsAr": [
      "الزينون",
      "الأكسجين",
      "الزنك",
      "الفلور"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0778"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 19.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 19.0 وحدة كتلة ذرية؟",
    "options": [
      "Erbium",
      "Fluorine",
      "Silver",
      "Sodium"
    ],
    "optionsAr": [
      "الإربيوم",
      "الفلور",
      "الفضة",
      "الصوديوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0779"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 20.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 20.2 وحدة كتلة ذرية؟",
    "options": [
      "Krypton",
      "Germanium",
      "Neon",
      "Arsenic"
    ],
    "optionsAr": [
      "الكريبتون",
      "الجرمانيوم",
      "النيون",
      "الزرنيخ"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0780"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 23.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 23.0 وحدة كتلة ذرية؟",
    "options": [
      "Vanadium",
      "Sodium",
      "Carbon",
      "Beryllium"
    ],
    "optionsAr": [
      "الفاناديوم",
      "الصوديوم",
      "الكربون",
      "البيريليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0781"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 24.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 24.3 وحدة كتلة ذرية؟",
    "options": [
      "Manganese",
      "Tellurium",
      "Magnesium",
      "Erbium"
    ],
    "optionsAr": [
      "المنغنيز",
      "التيلوريوم",
      "المغنيسيوم",
      "الإربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0782"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 27.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 27.0 وحدة كتلة ذرية؟",
    "options": [
      "Scandium",
      "Iodine",
      "Aluminium",
      "Fluorine"
    ],
    "optionsAr": [
      "السكانديوم",
      "اليود",
      "الألومنيوم",
      "الفلور"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0783"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 28.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 28.1 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Antimony",
      "Chromium",
      "Tin"
    ],
    "optionsAr": [
      "السيليكون",
      "الأنتيمون",
      "الكروم",
      "القصدير"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0784"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 31.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 31.0 وحدة كتلة ذرية؟",
    "options": [
      "Cobalt",
      "Phosphorus",
      "Lithium",
      "Potassium"
    ],
    "optionsAr": [
      "الكوبالت",
      "الفوسفور",
      "الليثيوم",
      "البوتاسيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0785"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 32.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 32.1 وحدة كتلة ذرية؟",
    "options": [
      "Antimony",
      "Sulfur",
      "Bromine",
      "Ytterbium"
    ],
    "optionsAr": [
      "الأنتيمون",
      "الكبريت",
      "البروم",
      "الإيتربيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0786"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 35.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 35.5 وحدة كتلة ذرية؟",
    "options": [
      "Chlorine",
      "Ruthenium",
      "Europium",
      "Caesium"
    ],
    "optionsAr": [
      "الكلور",
      "الروثينيوم",
      "اليوروبيوم",
      "السيزيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0787"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 39.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 39.9 وحدة كتلة ذرية؟",
    "options": [
      "Strontium",
      "Praseodymium",
      "Thulium",
      "Argon"
    ],
    "optionsAr": [
      "السترونشيوم",
      "البراسيوديميوم",
      "الثوليوم",
      "الأرجون"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0788"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 39.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 39.1 وحدة كتلة ذرية؟",
    "options": [
      "Aluminium",
      "Potassium",
      "Terbium",
      "Caesium"
    ],
    "optionsAr": [
      "الألومنيوم",
      "البوتاسيوم",
      "التيربيوم",
      "السيزيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0789"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 40.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 40.1 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Rubidium",
      "Promethium",
      "Calcium"
    ],
    "optionsAr": [
      "الفلور",
      "الروبيديوم",
      "البروميثيوم",
      "الكالسيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0790"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 45.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 45.0 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Scandium",
      "Molybdenum",
      "Aluminium"
    ],
    "optionsAr": [
      "السيليكون",
      "السكانديوم",
      "الموليبدينوم",
      "الألومنيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0791"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 47.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 47.9 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Barium",
      "Nickel",
      "Nitrogen"
    ],
    "optionsAr": [
      "التيتانيوم",
      "الباريوم",
      "النيكل",
      "النيتروجين"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0792"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 50.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 50.9 وحدة كتلة ذرية؟",
    "options": [
      "Vanadium",
      "Silver",
      "Helium",
      "Strontium"
    ],
    "optionsAr": [
      "الفاناديوم",
      "الفضة",
      "الهيليوم",
      "السترونشيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0793"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 52.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 52.0 وحدة كتلة ذرية؟",
    "options": [
      "Yttrium",
      "Chromium",
      "Krypton",
      "Nickel"
    ],
    "optionsAr": [
      "الإيتريوم",
      "الكروم",
      "الكريبتون",
      "النيكل"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0794"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 54.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 54.9 وحدة كتلة ذرية؟",
    "options": [
      "Cerium",
      "Yttrium",
      "Manganese",
      "Neon"
    ],
    "optionsAr": [
      "السيريوم",
      "الإيتريوم",
      "المنغنيز",
      "النيون"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0795"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 55.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 55.8 وحدة كتلة ذرية؟",
    "options": [
      "Iron",
      "Germanium",
      "Potassium",
      "Silver"
    ],
    "optionsAr": [
      "الحديد",
      "الجرمانيوم",
      "البوتاسيوم",
      "الفضة"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0796"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 58.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 58.9 وحدة كتلة ذرية؟",
    "options": [
      "Argon",
      "Cobalt",
      "Antimony",
      "Gadolinium"
    ],
    "optionsAr": [
      "الأرجون",
      "الكوبالت",
      "الأنتيمون",
      "الغادولينيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0797"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 58.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 58.7 وحدة كتلة ذرية؟",
    "options": [
      "Titanium",
      "Ytterbium",
      "Nickel",
      "Phosphorus"
    ],
    "optionsAr": [
      "التيتانيوم",
      "الإيتربيوم",
      "النيكل",
      "الفوسفور"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0798"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 63.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 63.5 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Indium",
      "Molybdenum",
      "Copper"
    ],
    "optionsAr": [
      "السيلينيوم",
      "الإنديوم",
      "الموليبدينوم",
      "النحاس"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0799"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 65.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 65.4 وحدة كتلة ذرية؟",
    "options": [
      "Lanthanum",
      "Selenium",
      "Zinc",
      "Europium"
    ],
    "optionsAr": [
      "اللانثانوم",
      "السيلينيوم",
      "الزنك",
      "اليوروبيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0800"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 69.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 69.7 وحدة كتلة ذرية؟",
    "options": [
      "Selenium",
      "Boron",
      "Gallium",
      "Sulfur"
    ],
    "optionsAr": [
      "السيلينيوم",
      "البورون",
      "الغاليوم",
      "الكبريت"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0801"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 72.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 72.6 وحدة كتلة ذرية؟",
    "options": [
      "Copper",
      "Germanium",
      "Chlorine",
      "Calcium"
    ],
    "optionsAr": [
      "النحاس",
      "الجرمانيوم",
      "الكلور",
      "الكالسيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0802"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 74.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 74.9 وحدة كتلة ذرية؟",
    "options": [
      "Boron",
      "Arsenic",
      "Argon",
      "Hydrogen"
    ],
    "optionsAr": [
      "البورون",
      "الزرنيخ",
      "الأرجون",
      "الهيدروجين"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0803"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 79.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 79.0 وحدة كتلة ذرية؟",
    "options": [
      "Boron",
      "Hydrogen",
      "Selenium",
      "Gallium"
    ],
    "optionsAr": [
      "البورون",
      "الهيدروجين",
      "السيلينيوم",
      "الغاليوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0804"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 79.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 79.9 وحدة كتلة ذرية؟",
    "options": [
      "Dysprosium",
      "Krypton",
      "Thulium",
      "Bromine"
    ],
    "optionsAr": [
      "الديسبروسيوم",
      "الكريبتون",
      "الثوليوم",
      "البروم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0805"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 83.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 83.8 وحدة كتلة ذرية؟",
    "options": [
      "Bromine",
      "Sulfur",
      "Krypton",
      "Copper"
    ],
    "optionsAr": [
      "البروم",
      "الكبريت",
      "الكريبتون",
      "النحاس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0806"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 85.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 85.5 وحدة كتلة ذرية؟",
    "options": [
      "Krypton",
      "Calcium",
      "Thulium",
      "Rubidium"
    ],
    "optionsAr": [
      "الكريبتون",
      "الكالسيوم",
      "الثوليوم",
      "الروبيديوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0807"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 87.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 87.6 وحدة كتلة ذرية؟",
    "options": [
      "Hydrogen",
      "Boron",
      "Gadolinium",
      "Strontium"
    ],
    "optionsAr": [
      "الهيدروجين",
      "البورون",
      "الغادولينيوم",
      "السترونشيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0808"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 88.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 88.9 وحدة كتلة ذرية؟",
    "options": [
      "Praseodymium",
      "Tellurium",
      "Yttrium",
      "Ytterbium"
    ],
    "optionsAr": [
      "البراسيوديميوم",
      "التيلوريوم",
      "الإيتريوم",
      "الإيتربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0809"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 91.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 91.2 وحدة كتلة ذرية؟",
    "options": [
      "Zinc",
      "Scandium",
      "Gallium",
      "Zirconium"
    ],
    "optionsAr": [
      "الزنك",
      "السكانديوم",
      "الغاليوم",
      "الزركونيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0810"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 92.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 92.9 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Sulfur",
      "Terbium",
      "Niobium"
    ],
    "optionsAr": [
      "السيليكون",
      "الكبريت",
      "التيربيوم",
      "النيوبيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0811"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 95.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 95.9 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Europium",
      "Barium",
      "Cobalt"
    ],
    "optionsAr": [
      "الموليبدينوم",
      "اليوروبيوم",
      "الباريوم",
      "الكوبالت"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0812"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 98.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 98.0 وحدة كتلة ذرية؟",
    "options": [
      "Silicon",
      "Technetium",
      "Carbon",
      "Gallium"
    ],
    "optionsAr": [
      "السيليكون",
      "التكنيتيوم",
      "الكربون",
      "الغاليوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0813"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 101.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 101.1 وحدة كتلة ذرية؟",
    "options": [
      "Cobalt",
      "Ruthenium",
      "Hydrogen",
      "Titanium"
    ],
    "optionsAr": [
      "الكوبالت",
      "الروثينيوم",
      "الهيدروجين",
      "التيتانيوم"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0814"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 102.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 102.9 وحدة كتلة ذرية؟",
    "options": [
      "Rhodium",
      "Calcium",
      "Vanadium",
      "Titanium"
    ],
    "optionsAr": [
      "الروديوم",
      "الكالسيوم",
      "الفاناديوم",
      "التيتانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0815"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 106.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 106.4 وحدة كتلة ذرية؟",
    "options": [
      "Lithium",
      "Tin",
      "Palladium",
      "Rubidium"
    ],
    "optionsAr": [
      "الليثيوم",
      "القصدير",
      "البلاديوم",
      "الروبيديوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0816"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 107.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 107.9 وحدة كتلة ذرية؟",
    "options": [
      "Xenon",
      "Fluorine",
      "Silver",
      "Ytterbium"
    ],
    "optionsAr": [
      "الزينون",
      "الفلور",
      "الفضة",
      "الإيتربيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0817"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 112.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 112.4 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Rhodium",
      "Cadmium",
      "Nitrogen"
    ],
    "optionsAr": [
      "الموليبدينوم",
      "الروديوم",
      "الكادميوم",
      "النيتروجين"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0818"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 114.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 114.8 وحدة كتلة ذرية؟",
    "options": [
      "Indium",
      "Erbium",
      "Ytterbium",
      "Titanium"
    ],
    "optionsAr": [
      "الإنديوم",
      "الإربيوم",
      "الإيتربيوم",
      "التيتانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0819"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 118.7 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 118.7 وحدة كتلة ذرية؟",
    "options": [
      "Scandium",
      "Cobalt",
      "Tin",
      "Boron"
    ],
    "optionsAr": [
      "السكانديوم",
      "الكوبالت",
      "القصدير",
      "البورون"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0820"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 121.8 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 121.8 وحدة كتلة ذرية؟",
    "options": [
      "Antimony",
      "Fluorine",
      "Iodine",
      "Samarium"
    ],
    "optionsAr": [
      "الأنتيمون",
      "الفلور",
      "اليود",
      "الساماريوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0821"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 127.6 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 127.6 وحدة كتلة ذرية؟",
    "options": [
      "Potassium",
      "Indium",
      "Tellurium",
      "Antimony"
    ],
    "optionsAr": [
      "البوتاسيوم",
      "الإنديوم",
      "التيلوريوم",
      "الأنتيمون"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0822"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 126.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 126.9 وحدة كتلة ذرية؟",
    "options": [
      "Iodine",
      "Erbium",
      "Terbium",
      "Ruthenium"
    ],
    "optionsAr": [
      "اليود",
      "الإربيوم",
      "التيربيوم",
      "الروثينيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0823"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 131.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 131.3 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Samarium",
      "Xenon",
      "Dysprosium"
    ],
    "optionsAr": [
      "النيكل",
      "الساماريوم",
      "الزينون",
      "الديسبروسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0824"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 132.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 132.9 وحدة كتلة ذرية؟",
    "options": [
      "Phosphorus",
      "Holmium",
      "Chlorine",
      "Caesium"
    ],
    "optionsAr": [
      "الفوسفور",
      "الهولميوم",
      "الكلور",
      "السيزيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0825"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 137.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 137.3 وحدة كتلة ذرية؟",
    "options": [
      "Barium",
      "Lanthanum",
      "Silicon",
      "Vanadium"
    ],
    "optionsAr": [
      "الباريوم",
      "اللانثانوم",
      "السيليكون",
      "الفاناديوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0826"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 138.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 138.9 وحدة كتلة ذرية؟",
    "options": [
      "Lanthanum",
      "Nitrogen",
      "Vanadium",
      "Germanium"
    ],
    "optionsAr": [
      "اللانثانوم",
      "النيتروجين",
      "الفاناديوم",
      "الجرمانيوم"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0827"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 140.1 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 140.1 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Selenium",
      "Cerium",
      "Manganese"
    ],
    "optionsAr": [
      "النيكل",
      "السيلينيوم",
      "السيريوم",
      "المنغنيز"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0828"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 140.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 140.9 وحدة كتلة ذرية؟",
    "options": [
      "Terbium",
      "Yttrium",
      "Praseodymium",
      "Niobium"
    ],
    "optionsAr": [
      "التيربيوم",
      "الإيتريوم",
      "البراسيوديميوم",
      "النيوبيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0829"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 144.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 144.2 وحدة كتلة ذرية؟",
    "options": [
      "Rubidium",
      "Dysprosium",
      "Neodymium",
      "Caesium"
    ],
    "optionsAr": [
      "الروبيديوم",
      "الديسبروسيوم",
      "النيوديميوم",
      "السيزيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0830"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 145.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 145.0 وحدة كتلة ذرية؟",
    "options": [
      "Erbium",
      "Gallium",
      "Promethium",
      "Lithium"
    ],
    "optionsAr": [
      "الإربيوم",
      "الغاليوم",
      "البروميثيوم",
      "الليثيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0831"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 150.4 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 150.4 وحدة كتلة ذرية؟",
    "options": [
      "Magnesium",
      "Thulium",
      "Samarium",
      "Nitrogen"
    ],
    "optionsAr": [
      "المغنيسيوم",
      "الثوليوم",
      "الساماريوم",
      "النيتروجين"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0832"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 152.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 152.0 وحدة كتلة ذرية؟",
    "options": [
      "Beryllium",
      "Cobalt",
      "Europium",
      "Dysprosium"
    ],
    "optionsAr": [
      "البيريليوم",
      "الكوبالت",
      "اليوروبيوم",
      "الديسبروسيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0833"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 157.2 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 157.2 وحدة كتلة ذرية؟",
    "options": [
      "Molybdenum",
      "Terbium",
      "Gadolinium",
      "Sodium"
    ],
    "optionsAr": [
      "الموليبدينوم",
      "التيربيوم",
      "الغادولينيوم",
      "الصوديوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0834"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 158.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 158.9 وحدة كتلة ذرية؟",
    "options": [
      "Terbium",
      "Cadmium",
      "Holmium",
      "Antimony"
    ],
    "optionsAr": [
      "التيربيوم",
      "الكادميوم",
      "الهولميوم",
      "الأنتيمون"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0835"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 162.5 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 162.5 وحدة كتلة ذرية؟",
    "options": [
      "Praseodymium",
      "Bromine",
      "Cadmium",
      "Dysprosium"
    ],
    "optionsAr": [
      "البراسيوديميوم",
      "البروم",
      "الكادميوم",
      "الديسبروسيوم"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0836"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 164.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 164.9 وحدة كتلة ذرية؟",
    "options": [
      "Iron",
      "Europium",
      "Holmium",
      "Copper"
    ],
    "optionsAr": [
      "الحديد",
      "اليوروبيوم",
      "الهولميوم",
      "النحاس"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0837"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 167.3 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 167.3 وحدة كتلة ذرية؟",
    "options": [
      "Nickel",
      "Lanthanum",
      "Erbium",
      "Technetium"
    ],
    "optionsAr": [
      "النيكل",
      "اللانثانوم",
      "الإربيوم",
      "التكنيتيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0838"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 168.9 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 168.9 وحدة كتلة ذرية؟",
    "options": [
      "Fluorine",
      "Dysprosium",
      "Thulium",
      "Zirconium"
    ],
    "optionsAr": [
      "الفلور",
      "الديسبروسيوم",
      "الثوليوم",
      "الزركونيوم"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0839"
  },
  {
    "category": "Science",
    "en": "Which element has an approximate atomic mass of 173.0 u?",
    "ar": "ما العنصر الذي تبلغ كتلته الذرية التقريبية 173.0 وحدة كتلة ذرية؟",
    "options": [
      "Ytterbium",
      "Zirconium",
      "Neon",
      "Nickel"
    ],
    "optionsAr": [
      "الإيتربيوم",
      "الزركونيوم",
      "النيون",
      "النيكل"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0840"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Super Mario Bros.”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Super Mario Bros.»؟",
    "options": [
      "Cloud Strife",
      "Doomguy",
      "The Chosen Undead",
      "Mario"
    ],
    "optionsAr": [
      "Cloud Strife",
      "Doomguy",
      "The Chosen Undead",
      "Mario"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0841"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Minecraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Minecraft»؟",
    "options": [
      "A group of survivors",
      "Steve",
      "Peter Parker",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "A group of survivors",
      "Steve",
      "Peter Parker",
      "No fixed protagonist"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0842"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Legend of Zelda: Breath of the Wild”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Legend of Zelda: Breath of the Wild»؟",
    "options": [
      "Aloy",
      "Link",
      "Cole Phelps",
      "Master Chief"
    ],
    "optionsAr": [
      "Aloy",
      "Link",
      "Cole Phelps",
      "Master Chief"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0843"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Legend of Zelda: Tears of the Kingdom”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Legend of Zelda: Tears of the Kingdom»؟",
    "options": [
      "The player-created character",
      "Mario",
      "Link",
      "The Hunter"
    ],
    "optionsAr": [
      "The player-created character",
      "Mario",
      "Link",
      "The Hunter"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0844"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Pokémon Red and Blue”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Pokémon Red and Blue»؟",
    "options": [
      "Red",
      "Ratchet",
      "Joel",
      "Jin Sakai"
    ],
    "optionsAr": [
      "Red",
      "Ratchet",
      "Joel",
      "Jin Sakai"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0845"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Tetris”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Tetris»؟",
    "options": [
      "Pac-Man",
      "No fixed protagonist",
      "Joel",
      "Dante"
    ],
    "optionsAr": [
      "Pac-Man",
      "No fixed protagonist",
      "Joel",
      "Dante"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0846"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Sonic the Hedgehog”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Sonic the Hedgehog»؟",
    "options": [
      "Arthur Morgan",
      "Sonic",
      "Jimmy Hopkins",
      "Link"
    ],
    "optionsAr": [
      "Arthur Morgan",
      "Sonic",
      "Jimmy Hopkins",
      "Link"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0847"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Pac-Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Pac-Man»؟",
    "options": [
      "Pac-Man",
      "Sonic",
      "The player character",
      "Steve"
    ],
    "optionsAr": [
      "Pac-Man",
      "Sonic",
      "The player character",
      "Steve"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0848"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Donkey Kong”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Donkey Kong»؟",
    "options": [
      "A group of survivors",
      "Tracer and other heroes",
      "Mario",
      "Joel"
    ],
    "optionsAr": [
      "A group of survivors",
      "Tracer and other heroes",
      "Mario",
      "Joel"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0849"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Metroid”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Metroid»؟",
    "options": [
      "Samus Aran",
      "The Sole Survivor",
      "No fixed protagonist",
      "The player character"
    ],
    "optionsAr": [
      "Samus Aran",
      "The Sole Survivor",
      "No fixed protagonist",
      "The player character"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0850"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Final Fantasy VII”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Final Fantasy VII»؟",
    "options": [
      "Leon S. Kennedy",
      "Cloud Strife",
      "Pac-Man",
      "A group of survivors"
    ],
    "optionsAr": [
      "Leon S. Kennedy",
      "Cloud Strife",
      "Pac-Man",
      "A group of survivors"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0851"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Final Fantasy X”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Final Fantasy X»؟",
    "options": [
      "The Hunter",
      "Joel",
      "Tidus",
      "The player avatar"
    ],
    "optionsAr": [
      "The Hunter",
      "Joel",
      "Tidus",
      "The player avatar"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0852"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dragon Quest XI”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dragon Quest XI»؟",
    "options": [
      "Samus Aran",
      "Sonic",
      "Jin Sakai",
      "The Luminary"
    ],
    "optionsAr": [
      "Samus Aran",
      "Sonic",
      "Jin Sakai",
      "The Luminary"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0853"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Kingdom Hearts”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Kingdom Hearts»؟",
    "options": [
      "Gordon Freeman",
      "Dante",
      "Sora",
      "A selectable class hero"
    ],
    "optionsAr": [
      "Gordon Freeman",
      "Dante",
      "Sora",
      "A selectable class hero"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0854"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Street Fighter II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Street Fighter II»؟",
    "options": [
      "Doomguy",
      "The Chosen Undead",
      "Steve",
      "Ryu"
    ],
    "optionsAr": [
      "Doomguy",
      "The Chosen Undead",
      "Steve",
      "Ryu"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0855"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Resident Evil”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Resident Evil»؟",
    "options": [
      "The player avatar",
      "Chris Redfield and Jill Valentine",
      "The Sole Survivor",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "The player avatar",
      "Chris Redfield and Jill Valentine",
      "The Sole Survivor",
      "No fixed protagonist"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0856"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Resident Evil 4”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Resident Evil 4»؟",
    "options": [
      "A choice of playable heroes",
      "The Sole Survivor",
      "Leon S. Kennedy",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "A choice of playable heroes",
      "The Sole Survivor",
      "Leon S. Kennedy",
      "No fixed protagonist"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0857"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Mega Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Mega Man»؟",
    "options": [
      "Mega Man",
      "Gordon Freeman",
      "Ratchet",
      "Jin Kazama"
    ],
    "optionsAr": [
      "Mega Man",
      "Gordon Freeman",
      "Ratchet",
      "Jin Kazama"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0858"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Devil May Cry”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Devil May Cry»؟",
    "options": [
      "Kratos",
      "Chell",
      "Dante",
      "Aloy"
    ],
    "optionsAr": [
      "Kratos",
      "Chell",
      "Dante",
      "Aloy"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0859"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Monster Hunter: World”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Monster Hunter: World»؟",
    "options": [
      "The Hunter",
      "Master Chief",
      "Cloud Strife",
      "V"
    ],
    "optionsAr": [
      "The Hunter",
      "Master Chief",
      "Cloud Strife",
      "V"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0860"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Halo: Combat Evolved”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Halo: Combat Evolved»؟",
    "options": [
      "The player-created character",
      "The Hunter",
      "Marcus Fenix",
      "Master Chief"
    ],
    "optionsAr": [
      "The player-created character",
      "The Hunter",
      "Marcus Fenix",
      "Master Chief"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0861"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Halo Infinite”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Halo Infinite»؟",
    "options": [
      "The Sole Survivor",
      "Red",
      "Jim Raynor",
      "Master Chief"
    ],
    "optionsAr": [
      "The Sole Survivor",
      "Red",
      "Jim Raynor",
      "Master Chief"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0862"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Gears of War”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Gears of War»؟",
    "options": [
      "Peter Parker",
      "Wolf",
      "Marcus Fenix",
      "The player-created Sims"
    ],
    "optionsAr": [
      "Peter Parker",
      "Wolf",
      "Marcus Fenix",
      "The player-created Sims"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0863"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Forza Horizon 5”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Forza Horizon 5»؟",
    "options": [
      "The Luminary",
      "Doomguy",
      "The player avatar",
      "Kratos"
    ],
    "optionsAr": [
      "The Luminary",
      "Doomguy",
      "The player avatar",
      "Kratos"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0864"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Age of Empires II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Age of Empires II»؟",
    "options": [
      "The player-created Sims",
      "Jim Raynor",
      "Marcus Fenix",
      "No single fixed protagonist"
    ],
    "optionsAr": [
      "The player-created Sims",
      "Jim Raynor",
      "Marcus Fenix",
      "No single fixed protagonist"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0865"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Doom”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Doom»؟",
    "options": [
      "Doomguy",
      "Geralt of Rivia",
      "Chell",
      "Aloy"
    ],
    "optionsAr": [
      "Doomguy",
      "Geralt of Rivia",
      "Chell",
      "Aloy"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0866"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Quake”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Quake»؟",
    "options": [
      "Leon S. Kennedy",
      "Ranger",
      "Ratchet",
      "Mario"
    ],
    "optionsAr": [
      "Leon S. Kennedy",
      "Ranger",
      "Ratchet",
      "Mario"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0867"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Wolfenstein 3D”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Wolfenstein 3D»؟",
    "options": [
      "The Sole Survivor",
      "A group of survivors",
      "Ryu",
      "B. J. Blazkowicz"
    ],
    "optionsAr": [
      "The Sole Survivor",
      "A group of survivors",
      "Ryu",
      "B. J. Blazkowicz"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0868"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Elder Scrolls V: Skyrim”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Elder Scrolls V: Skyrim»؟",
    "options": [
      "The Hunter",
      "Peter Parker",
      "No single fixed protagonist",
      "The Dragonborn"
    ],
    "optionsAr": [
      "The Hunter",
      "Peter Parker",
      "No single fixed protagonist",
      "The Dragonborn"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0869"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Fallout 4”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Fallout 4»؟",
    "options": [
      "The Sole Survivor",
      "Jimmy Hopkins",
      "Joel",
      "A group of survivors"
    ],
    "optionsAr": [
      "The Sole Survivor",
      "Jimmy Hopkins",
      "Joel",
      "A group of survivors"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0870"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Starfield”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Starfield»؟",
    "options": [
      "The player character",
      "Aloy",
      "A group of survivors",
      "The player-created Sims"
    ],
    "optionsAr": [
      "The player character",
      "Aloy",
      "A group of survivors",
      "The player-created Sims"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0871"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Witcher 3: Wild Hunt”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Witcher 3: Wild Hunt»؟",
    "options": [
      "Geralt of Rivia",
      "Kratos",
      "A selectable class hero",
      "Steve"
    ],
    "optionsAr": [
      "Geralt of Rivia",
      "Kratos",
      "A selectable class hero",
      "Steve"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0872"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Cyberpunk 2077”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Cyberpunk 2077»؟",
    "options": [
      "Jin Kazama",
      "B. J. Blazkowicz",
      "Crash Bandicoot",
      "V"
    ],
    "optionsAr": [
      "Jin Kazama",
      "B. J. Blazkowicz",
      "Crash Bandicoot",
      "V"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0873"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Baldur’s Gate 3”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Baldur’s Gate 3»؟",
    "options": [
      "Steve",
      "Pac-Man",
      "The player-created character",
      "A selectable class hero"
    ],
    "optionsAr": [
      "Steve",
      "Pac-Man",
      "The player-created character",
      "A selectable class hero"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0874"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dota 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dota 2»؟",
    "options": [
      "Pac-Man",
      "The player-created Sims",
      "Jimmy Hopkins",
      "A choice of playable heroes"
    ],
    "optionsAr": [
      "Pac-Man",
      "The player-created Sims",
      "Jimmy Hopkins",
      "A choice of playable heroes"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0875"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Counter-Strike 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Counter-Strike 2»؟",
    "options": [
      "Nathan Drake",
      "Mega Man",
      "Chris Redfield and Jill Valentine",
      "No single fixed protagonist"
    ],
    "optionsAr": [
      "Nathan Drake",
      "Mega Man",
      "Chris Redfield and Jill Valentine",
      "No single fixed protagonist"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0876"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Half-Life”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Half-Life»؟",
    "options": [
      "Mega Man",
      "Leon S. Kennedy",
      "Cole Phelps",
      "Gordon Freeman"
    ],
    "optionsAr": [
      "Mega Man",
      "Leon S. Kennedy",
      "Cole Phelps",
      "Gordon Freeman"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0877"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Portal”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Portal»؟",
    "options": [
      "A choice of playable heroes",
      "Chell",
      "Sonic",
      "Link"
    ],
    "optionsAr": [
      "A choice of playable heroes",
      "Chell",
      "Sonic",
      "Link"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0878"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Left 4 Dead”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Left 4 Dead»؟",
    "options": [
      "Chris Redfield and Jill Valentine",
      "The Dragonborn",
      "A group of survivors",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "Chris Redfield and Jill Valentine",
      "The Dragonborn",
      "A group of survivors",
      "No fixed protagonist"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0879"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Overwatch”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Overwatch»؟",
    "options": [
      "Wolf",
      "A selectable class hero",
      "Claude",
      "Tracer and other heroes"
    ],
    "optionsAr": [
      "Wolf",
      "A selectable class hero",
      "Claude",
      "Tracer and other heroes"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0880"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “World of Warcraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «World of Warcraft»؟",
    "options": [
      "The player-created character",
      "The Chosen Undead",
      "Claude",
      "Sonic"
    ],
    "optionsAr": [
      "The player-created character",
      "The Chosen Undead",
      "Claude",
      "Sonic"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0881"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Diablo II”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Diablo II»؟",
    "options": [
      "Jin Sakai",
      "A selectable class hero",
      "The Luminary",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "Jin Sakai",
      "A selectable class hero",
      "The Luminary",
      "No fixed protagonist"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0882"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “StarCraft”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «StarCraft»؟",
    "options": [
      "Pac-Man",
      "The player-created Sims",
      "Jim Raynor",
      "Chell"
    ],
    "optionsAr": [
      "Pac-Man",
      "The player-created Sims",
      "Jim Raynor",
      "Chell"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0883"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Hearthstone”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Hearthstone»؟",
    "options": [
      "Ryu",
      "A selectable hero",
      "Sonic",
      "V"
    ],
    "optionsAr": [
      "Ryu",
      "A selectable hero",
      "Sonic",
      "V"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0884"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Sims”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Sims»؟",
    "options": [
      "Michael, Franklin and Trevor",
      "Jin Sakai",
      "Pac-Man",
      "The player-created Sims"
    ],
    "optionsAr": [
      "Michael, Franklin and Trevor",
      "Jin Sakai",
      "Pac-Man",
      "The player-created Sims"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0885"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “SimCity”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «SimCity»؟",
    "options": [
      "Cole Phelps",
      "Dante",
      "Ranger",
      "The player as mayor"
    ],
    "optionsAr": [
      "Cole Phelps",
      "Dante",
      "Ranger",
      "The player as mayor"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0886"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Grand Theft Auto III”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Grand Theft Auto III»؟",
    "options": [
      "Marcus Fenix",
      "Claude",
      "Wolf",
      "B. J. Blazkowicz"
    ],
    "optionsAr": [
      "Marcus Fenix",
      "Claude",
      "Wolf",
      "B. J. Blazkowicz"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0887"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Grand Theft Auto V”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Grand Theft Auto V»؟",
    "options": [
      "Link",
      "Red",
      "Michael, Franklin and Trevor",
      "Ryu"
    ],
    "optionsAr": [
      "Link",
      "Red",
      "Michael, Franklin and Trevor",
      "Ryu"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0888"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Red Dead Redemption 2”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Red Dead Redemption 2»؟",
    "options": [
      "Dante",
      "Jimmy Hopkins",
      "Arthur Morgan",
      "Wolf"
    ],
    "optionsAr": [
      "Dante",
      "Jimmy Hopkins",
      "Arthur Morgan",
      "Wolf"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0889"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Bully”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Bully»؟",
    "options": [
      "Jimmy Hopkins",
      "Doomguy",
      "Jim Raynor",
      "The player avatar"
    ],
    "optionsAr": [
      "Jimmy Hopkins",
      "Doomguy",
      "Jim Raynor",
      "The player avatar"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0890"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “L.A. Noire”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «L.A. Noire»؟",
    "options": [
      "Cole Phelps",
      "Jin Sakai",
      "Ryu",
      "Ratchet"
    ],
    "optionsAr": [
      "Cole Phelps",
      "Jin Sakai",
      "Ryu",
      "Ratchet"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0891"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Uncharted 2: Among Thieves”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Uncharted 2: Among Thieves»؟",
    "options": [
      "The Chosen Undead",
      "Steve",
      "Samus Aran",
      "Nathan Drake"
    ],
    "optionsAr": [
      "The Chosen Undead",
      "Steve",
      "Samus Aran",
      "Nathan Drake"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0892"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “The Last of Us”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «The Last of Us»؟",
    "options": [
      "Joel",
      "Jak",
      "V",
      "Cloud Strife"
    ],
    "optionsAr": [
      "Joel",
      "Jak",
      "V",
      "Cloud Strife"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0893"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Crash Bandicoot”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Crash Bandicoot»؟",
    "options": [
      "Jimmy Hopkins",
      "Crash Bandicoot",
      "The Luminary",
      "The Tarnished"
    ],
    "optionsAr": [
      "Jimmy Hopkins",
      "Crash Bandicoot",
      "The Luminary",
      "The Tarnished"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0894"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Jak and Daxter: The Precursor Legacy”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Jak and Daxter: The Precursor Legacy»؟",
    "options": [
      "A selectable hero",
      "Leon S. Kennedy",
      "Jak",
      "Mega Man"
    ],
    "optionsAr": [
      "A selectable hero",
      "Leon S. Kennedy",
      "Jak",
      "Mega Man"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0895"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “God of War”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «God of War»؟",
    "options": [
      "Kratos",
      "A choice of playable heroes",
      "Pac-Man",
      "Geralt of Rivia"
    ],
    "optionsAr": [
      "Kratos",
      "A choice of playable heroes",
      "Pac-Man",
      "Geralt of Rivia"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0896"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “God of War Ragnarök”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «God of War Ragnarök»؟",
    "options": [
      "The Luminary",
      "Sora",
      "Kratos",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "The Luminary",
      "Sora",
      "Kratos",
      "No fixed protagonist"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0897"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Horizon Zero Dawn”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Horizon Zero Dawn»؟",
    "options": [
      "Pac-Man",
      "Aloy",
      "Michael, Franklin and Trevor",
      "Steve"
    ],
    "optionsAr": [
      "Pac-Man",
      "Aloy",
      "Michael, Franklin and Trevor",
      "Steve"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0898"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Ghost of Tsushima”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Ghost of Tsushima»؟",
    "options": [
      "Red",
      "A selectable class hero",
      "B. J. Blazkowicz",
      "Jin Sakai"
    ],
    "optionsAr": [
      "Red",
      "A selectable class hero",
      "B. J. Blazkowicz",
      "Jin Sakai"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0899"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Marvel’s Spider-Man”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Marvel’s Spider-Man»؟",
    "options": [
      "The player avatar",
      "The Hunter",
      "Sora",
      "Peter Parker"
    ],
    "optionsAr": [
      "The player avatar",
      "The Hunter",
      "Sora",
      "Peter Parker"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0900"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Ratchet & Clank”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Ratchet & Clank»؟",
    "options": [
      "Wolf",
      "Kratos",
      "Ratchet",
      "Chell"
    ],
    "optionsAr": [
      "Wolf",
      "Kratos",
      "Ratchet",
      "Chell"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0901"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Gran Turismo 7”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Gran Turismo 7»؟",
    "options": [
      "No fixed protagonist",
      "Steve",
      "Link",
      "A selectable class hero"
    ],
    "optionsAr": [
      "No fixed protagonist",
      "Steve",
      "Link",
      "A selectable class hero"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-0902"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Elden Ring”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Elden Ring»؟",
    "options": [
      "Claude",
      "Link",
      "The Tarnished",
      "The Luminary"
    ],
    "optionsAr": [
      "Claude",
      "Link",
      "The Tarnished",
      "The Luminary"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0903"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Dark Souls”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Dark Souls»؟",
    "options": [
      "The player-created Sims",
      "The Chosen Undead",
      "The player as mayor",
      "Michael, Franklin and Trevor"
    ],
    "optionsAr": [
      "The player-created Sims",
      "The Chosen Undead",
      "The player as mayor",
      "Michael, Franklin and Trevor"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0904"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Bloodborne”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Bloodborne»؟",
    "options": [
      "Samus Aran",
      "Tracer and other heroes",
      "Arthur Morgan",
      "The Hunter"
    ],
    "optionsAr": [
      "Samus Aran",
      "Tracer and other heroes",
      "Arthur Morgan",
      "The Hunter"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0905"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Sekiro: Shadows Die Twice”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Sekiro: Shadows Die Twice»؟",
    "options": [
      "Samus Aran",
      "Chris Redfield and Jill Valentine",
      "Wolf",
      "Jak"
    ],
    "optionsAr": [
      "Samus Aran",
      "Chris Redfield and Jill Valentine",
      "Wolf",
      "Jak"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-0906"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Tekken 8”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Tekken 8»؟",
    "options": [
      "Tidus",
      "The Dragonborn",
      "A choice of playable heroes",
      "Jin Kazama"
    ],
    "optionsAr": [
      "Tidus",
      "The Dragonborn",
      "A choice of playable heroes",
      "Jin Kazama"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0907"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Fortnite”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Fortnite»؟",
    "options": [
      "A selectable hero",
      "The player avatar",
      "A choice of playable heroes",
      "A selectable class hero"
    ],
    "optionsAr": [
      "A selectable hero",
      "The player avatar",
      "A choice of playable heroes",
      "A selectable class hero"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-0908"
  },
  {
    "category": "Gaming",
    "en": "Who is the main playable character in “Rocket League”?",
    "ar": "من الشخصية الرئيسية القابلة للعب في لعبة «Rocket League»؟",
    "options": [
      "A choice of playable heroes",
      "Jimmy Hopkins",
      "The Tarnished",
      "No fixed protagonist"
    ],
    "optionsAr": [
      "A choice of playable heroes",
      "Jimmy Hopkins",
      "The Tarnished",
      "No fixed protagonist"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-0909"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Super Mario Bros.”?",
    "ar": "أي استوديو طوّر لعبة «Super Mario Bros.»؟",
    "options": [
      "Naughty Dog",
      "Playground Games",
      "Sega",
      "Nintendo"
    ],
    "optionsAr": [
      "Naughty Dog",
      "Playground Games",
      "Sega",
      "Nintendo"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0910"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Minecraft”?",
    "ar": "أي استوديو طوّر لعبة «Minecraft»؟",
    "options": [
      "Square Enix",
      "Mojang",
      "Maxis",
      "Rockstar Games"
    ],
    "optionsAr": [
      "Square Enix",
      "Mojang",
      "Maxis",
      "Rockstar Games"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0911"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Legend of Zelda: Breath of the Wild”?",
    "ar": "أي استوديو طوّر لعبة «The Legend of Zelda: Breath of the Wild»؟",
    "options": [
      "Nintendo",
      "Sucker Punch Productions",
      "Santa Monica Studio",
      "Insomniac Games"
    ],
    "optionsAr": [
      "Nintendo",
      "Sucker Punch Productions",
      "Santa Monica Studio",
      "Insomniac Games"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0912"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Legend of Zelda: Tears of the Kingdom”?",
    "ar": "أي استوديو طوّر لعبة «The Legend of Zelda: Tears of the Kingdom»؟",
    "options": [
      "Mojang",
      "Naughty Dog",
      "Nintendo",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "Mojang",
      "Naughty Dog",
      "Nintendo",
      "Santa Monica Studio"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0913"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Pokémon Red and Blue”?",
    "ar": "أي استوديو طوّر لعبة «Pokémon Red and Blue»؟",
    "options": [
      "Game Freak",
      "Rockstar Games",
      "Polyphony Digital",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "Game Freak",
      "Rockstar Games",
      "Polyphony Digital",
      "Blizzard Entertainment"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0914"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Tetris”?",
    "ar": "أي استوديو طوّر لعبة «Tetris»؟",
    "options": [
      "Rockstar Games",
      "Larian Studios",
      "Alexey Pajitnov",
      "Namco"
    ],
    "optionsAr": [
      "Rockstar Games",
      "Larian Studios",
      "Alexey Pajitnov",
      "Namco"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0915"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Sonic the Hedgehog”?",
    "ar": "أي استوديو طوّر لعبة «Sonic the Hedgehog»؟",
    "options": [
      "Santa Monica Studio",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Sega"
    ],
    "optionsAr": [
      "Santa Monica Studio",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Sega"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0916"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Pac-Man”?",
    "ar": "أي استوديو طوّر لعبة «Pac-Man»؟",
    "options": [
      "Namco",
      "Bandai Namco Studios",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "Namco",
      "Bandai Namco Studios",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0917"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Donkey Kong”?",
    "ar": "أي استوديو طوّر لعبة «Donkey Kong»؟",
    "options": [
      "id Software",
      "Capcom",
      "Nintendo",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "id Software",
      "Capcom",
      "Nintendo",
      "Polyphony Digital"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0918"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Metroid”?",
    "ar": "أي استوديو طوّر لعبة «Metroid»؟",
    "options": [
      "Naughty Dog",
      "Ensemble Studios",
      "Nintendo",
      "Valve"
    ],
    "optionsAr": [
      "Naughty Dog",
      "Ensemble Studios",
      "Nintendo",
      "Valve"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0919"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Final Fantasy VII”?",
    "ar": "أي استوديو طوّر لعبة «Final Fantasy VII»؟",
    "options": [
      "Blizzard Entertainment",
      "Bungie",
      "Square",
      "Valve"
    ],
    "optionsAr": [
      "Blizzard Entertainment",
      "Bungie",
      "Square",
      "Valve"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0920"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Final Fantasy X”?",
    "ar": "أي استوديو طوّر لعبة «Final Fantasy X»؟",
    "options": [
      "Square",
      "Valve",
      "Maxis",
      "Nintendo"
    ],
    "optionsAr": [
      "Square",
      "Valve",
      "Maxis",
      "Nintendo"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0921"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dragon Quest XI”?",
    "ar": "أي استوديو طوّر لعبة «Dragon Quest XI»؟",
    "options": [
      "Polyphony Digital",
      "Sucker Punch Productions",
      "Square Enix",
      "Valve"
    ],
    "optionsAr": [
      "Polyphony Digital",
      "Sucker Punch Productions",
      "Square Enix",
      "Valve"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0922"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Kingdom Hearts”?",
    "ar": "أي استوديو طوّر لعبة «Kingdom Hearts»؟",
    "options": [
      "343 Industries",
      "Square Enix",
      "id Software",
      "Game Freak"
    ],
    "optionsAr": [
      "343 Industries",
      "Square Enix",
      "id Software",
      "Game Freak"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0923"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Street Fighter II”?",
    "ar": "أي استوديو طوّر لعبة «Street Fighter II»؟",
    "options": [
      "CD Projekt Red",
      "Capcom",
      "Larian Studios",
      "FromSoftware"
    ],
    "optionsAr": [
      "CD Projekt Red",
      "Capcom",
      "Larian Studios",
      "FromSoftware"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0924"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Resident Evil”?",
    "ar": "أي استوديو طوّر لعبة «Resident Evil»؟",
    "options": [
      "Blizzard Entertainment",
      "Bandai Namco Studios",
      "FromSoftware",
      "Capcom"
    ],
    "optionsAr": [
      "Blizzard Entertainment",
      "Bandai Namco Studios",
      "FromSoftware",
      "Capcom"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0925"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Resident Evil 4”?",
    "ar": "أي استوديو طوّر لعبة «Resident Evil 4»؟",
    "options": [
      "Capcom",
      "id Software",
      "Blizzard Entertainment",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "Capcom",
      "id Software",
      "Blizzard Entertainment",
      "Alexey Pajitnov"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0926"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Mega Man”?",
    "ar": "أي استوديو طوّر لعبة «Mega Man»؟",
    "options": [
      "Capcom",
      "Maxis",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "optionsAr": [
      "Capcom",
      "Maxis",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0927"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Devil May Cry”?",
    "ar": "أي استوديو طوّر لعبة «Devil May Cry»؟",
    "options": [
      "Capcom",
      "Santa Monica Studio",
      "FromSoftware",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "Capcom",
      "Santa Monica Studio",
      "FromSoftware",
      "Blizzard Entertainment"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0928"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Monster Hunter: World”?",
    "ar": "أي استوديو طوّر لعبة «Monster Hunter: World»؟",
    "options": [
      "Guerrilla Games",
      "Capcom",
      "Epic Games",
      "Larian Studios"
    ],
    "optionsAr": [
      "Guerrilla Games",
      "Capcom",
      "Epic Games",
      "Larian Studios"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0929"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Halo: Combat Evolved”?",
    "ar": "أي استوديو طوّر لعبة «Halo: Combat Evolved»؟",
    "options": [
      "Bungie",
      "343 Industries",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "optionsAr": [
      "Bungie",
      "343 Industries",
      "Playground Games",
      "Alexey Pajitnov"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0930"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Halo Infinite”?",
    "ar": "أي استوديو طوّر لعبة «Halo Infinite»؟",
    "options": [
      "Capcom",
      "343 Industries",
      "Insomniac Games",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "Capcom",
      "343 Industries",
      "Insomniac Games",
      "Polyphony Digital"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0931"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Gears of War”?",
    "ar": "أي استوديو طوّر لعبة «Gears of War»؟",
    "options": [
      "Rockstar Games",
      "Square",
      "Nintendo",
      "Epic Games"
    ],
    "optionsAr": [
      "Rockstar Games",
      "Square",
      "Nintendo",
      "Epic Games"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0932"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Forza Horizon 5”?",
    "ar": "أي استوديو طوّر لعبة «Forza Horizon 5»؟",
    "options": [
      "Game Freak",
      "Insomniac Games",
      "Polyphony Digital",
      "Playground Games"
    ],
    "optionsAr": [
      "Game Freak",
      "Insomniac Games",
      "Polyphony Digital",
      "Playground Games"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0933"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Age of Empires II”?",
    "ar": "أي استوديو طوّر لعبة «Age of Empires II»؟",
    "options": [
      "Ensemble Studios",
      "Sucker Punch Productions",
      "Blizzard Entertainment",
      "Larian Studios"
    ],
    "optionsAr": [
      "Ensemble Studios",
      "Sucker Punch Productions",
      "Blizzard Entertainment",
      "Larian Studios"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0934"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Doom”?",
    "ar": "أي استوديو طوّر لعبة «Doom»؟",
    "options": [
      "Naughty Dog",
      "id Software",
      "Ensemble Studios",
      "Namco"
    ],
    "optionsAr": [
      "Naughty Dog",
      "id Software",
      "Ensemble Studios",
      "Namco"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0935"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Quake”?",
    "ar": "أي استوديو طوّر لعبة «Quake»؟",
    "options": [
      "CD Projekt Red",
      "id Software",
      "Sucker Punch Productions",
      "Nintendo"
    ],
    "optionsAr": [
      "CD Projekt Red",
      "id Software",
      "Sucker Punch Productions",
      "Nintendo"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0936"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Wolfenstein 3D”?",
    "ar": "أي استوديو طوّر لعبة «Wolfenstein 3D»؟",
    "options": [
      "id Software",
      "Larian Studios",
      "Insomniac Games",
      "Ensemble Studios"
    ],
    "optionsAr": [
      "id Software",
      "Larian Studios",
      "Insomniac Games",
      "Ensemble Studios"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0937"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Elder Scrolls V: Skyrim”?",
    "ar": "أي استوديو طوّر لعبة «The Elder Scrolls V: Skyrim»؟",
    "options": [
      "Bethesda Game Studios",
      "Playground Games",
      "Epic Games",
      "Rockstar Games"
    ],
    "optionsAr": [
      "Bethesda Game Studios",
      "Playground Games",
      "Epic Games",
      "Rockstar Games"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0938"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Fallout 4”?",
    "ar": "أي استوديو طوّر لعبة «Fallout 4»؟",
    "options": [
      "Bethesda Game Studios",
      "Bandai Namco Studios",
      "Capcom",
      "Ensemble Studios"
    ],
    "optionsAr": [
      "Bethesda Game Studios",
      "Bandai Namco Studios",
      "Capcom",
      "Ensemble Studios"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0939"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Starfield”?",
    "ar": "أي استوديو طوّر لعبة «Starfield»؟",
    "options": [
      "Sucker Punch Productions",
      "Maxis",
      "Bethesda Game Studios",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "Sucker Punch Productions",
      "Maxis",
      "Bethesda Game Studios",
      "Santa Monica Studio"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0940"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Witcher 3: Wild Hunt”?",
    "ar": "أي استوديو طوّر لعبة «The Witcher 3: Wild Hunt»؟",
    "options": [
      "Ensemble Studios",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Valve"
    ],
    "optionsAr": [
      "Ensemble Studios",
      "CD Projekt Red",
      "Blizzard Entertainment",
      "Valve"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0941"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Cyberpunk 2077”?",
    "ar": "أي استوديو طوّر لعبة «Cyberpunk 2077»؟",
    "options": [
      "CD Projekt Red",
      "Mojang",
      "Bethesda Game Studios",
      "Larian Studios"
    ],
    "optionsAr": [
      "CD Projekt Red",
      "Mojang",
      "Bethesda Game Studios",
      "Larian Studios"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0942"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Baldur’s Gate 3”?",
    "ar": "أي استوديو طوّر لعبة «Baldur’s Gate 3»؟",
    "options": [
      "Larian Studios",
      "Bungie",
      "343 Industries",
      "Capcom"
    ],
    "optionsAr": [
      "Larian Studios",
      "Bungie",
      "343 Industries",
      "Capcom"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0943"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dota 2”?",
    "ar": "أي استوديو طوّر لعبة «Dota 2»؟",
    "options": [
      "Guerrilla Games",
      "Sucker Punch Productions",
      "Sega",
      "Valve"
    ],
    "optionsAr": [
      "Guerrilla Games",
      "Sucker Punch Productions",
      "Sega",
      "Valve"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0944"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Counter-Strike 2”?",
    "ar": "أي استوديو طوّر لعبة «Counter-Strike 2»؟",
    "options": [
      "Maxis",
      "Bethesda Game Studios",
      "Square",
      "Valve"
    ],
    "optionsAr": [
      "Maxis",
      "Bethesda Game Studios",
      "Square",
      "Valve"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0945"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Half-Life”?",
    "ar": "أي استوديو طوّر لعبة «Half-Life»؟",
    "options": [
      "Maxis",
      "FromSoftware",
      "Playground Games",
      "Valve"
    ],
    "optionsAr": [
      "Maxis",
      "FromSoftware",
      "Playground Games",
      "Valve"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0946"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Portal”?",
    "ar": "أي استوديو طوّر لعبة «Portal»؟",
    "options": [
      "Blizzard Entertainment",
      "Guerrilla Games",
      "Valve",
      "FromSoftware"
    ],
    "optionsAr": [
      "Blizzard Entertainment",
      "Guerrilla Games",
      "Valve",
      "FromSoftware"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0947"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Left 4 Dead”?",
    "ar": "أي استوديو طوّر لعبة «Left 4 Dead»؟",
    "options": [
      "Valve",
      "Bandai Namco Studios",
      "Bungie",
      "Nintendo"
    ],
    "optionsAr": [
      "Valve",
      "Bandai Namco Studios",
      "Bungie",
      "Nintendo"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0948"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Overwatch”?",
    "ar": "أي استوديو طوّر لعبة «Overwatch»؟",
    "options": [
      "Team Bondi",
      "Blizzard Entertainment",
      "CD Projekt Red",
      "Epic Games"
    ],
    "optionsAr": [
      "Team Bondi",
      "Blizzard Entertainment",
      "CD Projekt Red",
      "Epic Games"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0949"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “World of Warcraft”?",
    "ar": "أي استوديو طوّر لعبة «World of Warcraft»؟",
    "options": [
      "Maxis",
      "Blizzard Entertainment",
      "Nintendo",
      "Epic Games"
    ],
    "optionsAr": [
      "Maxis",
      "Blizzard Entertainment",
      "Nintendo",
      "Epic Games"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0950"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Diablo II”?",
    "ar": "أي استوديو طوّر لعبة «Diablo II»؟",
    "options": [
      "Blizzard Entertainment",
      "Game Freak",
      "Sega",
      "Capcom"
    ],
    "optionsAr": [
      "Blizzard Entertainment",
      "Game Freak",
      "Sega",
      "Capcom"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0951"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “StarCraft”?",
    "ar": "أي استوديو طوّر لعبة «StarCraft»؟",
    "options": [
      "Blizzard Entertainment",
      "Alexey Pajitnov",
      "Epic Games",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "Blizzard Entertainment",
      "Alexey Pajitnov",
      "Epic Games",
      "Polyphony Digital"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0952"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Hearthstone”?",
    "ar": "أي استوديو طوّر لعبة «Hearthstone»؟",
    "options": [
      "Square",
      "Sucker Punch Productions",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "Square",
      "Sucker Punch Productions",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0953"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Sims”?",
    "ar": "أي استوديو طوّر لعبة «The Sims»؟",
    "options": [
      "Maxis",
      "id Software",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "optionsAr": [
      "Maxis",
      "id Software",
      "Bethesda Game Studios",
      "CD Projekt Red"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0954"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “SimCity”?",
    "ar": "أي استوديو طوّر لعبة «SimCity»؟",
    "options": [
      "Epic Games",
      "Namco",
      "Guerrilla Games",
      "Maxis"
    ],
    "optionsAr": [
      "Epic Games",
      "Namco",
      "Guerrilla Games",
      "Maxis"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0955"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Grand Theft Auto III”?",
    "ar": "أي استوديو طوّر لعبة «Grand Theft Auto III»؟",
    "options": [
      "Guerrilla Games",
      "343 Industries",
      "Sega",
      "Rockstar Games"
    ],
    "optionsAr": [
      "Guerrilla Games",
      "343 Industries",
      "Sega",
      "Rockstar Games"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0956"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Grand Theft Auto V”?",
    "ar": "أي استوديو طوّر لعبة «Grand Theft Auto V»؟",
    "options": [
      "Rockstar Games",
      "Namco",
      "CD Projekt Red",
      "id Software"
    ],
    "optionsAr": [
      "Rockstar Games",
      "Namco",
      "CD Projekt Red",
      "id Software"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0957"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Red Dead Redemption 2”?",
    "ar": "أي استوديو طوّر لعبة «Red Dead Redemption 2»؟",
    "options": [
      "343 Industries",
      "Rockstar Games",
      "Insomniac Games",
      "Valve"
    ],
    "optionsAr": [
      "343 Industries",
      "Rockstar Games",
      "Insomniac Games",
      "Valve"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0958"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Bully”?",
    "ar": "أي استوديو طوّر لعبة «Bully»؟",
    "options": [
      "Bandai Namco Studios",
      "Bethesda Game Studios",
      "Namco",
      "Rockstar Games"
    ],
    "optionsAr": [
      "Bandai Namco Studios",
      "Bethesda Game Studios",
      "Namco",
      "Rockstar Games"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0959"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “L.A. Noire”?",
    "ar": "أي استوديو طوّر لعبة «L.A. Noire»؟",
    "options": [
      "Alexey Pajitnov",
      "Nintendo",
      "id Software",
      "Team Bondi"
    ],
    "optionsAr": [
      "Alexey Pajitnov",
      "Nintendo",
      "id Software",
      "Team Bondi"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0960"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Uncharted 2: Among Thieves”?",
    "ar": "أي استوديو طوّر لعبة «Uncharted 2: Among Thieves»؟",
    "options": [
      "Namco",
      "Naughty Dog",
      "Team Bondi",
      "id Software"
    ],
    "optionsAr": [
      "Namco",
      "Naughty Dog",
      "Team Bondi",
      "id Software"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0961"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “The Last of Us”?",
    "ar": "أي استوديو طوّر لعبة «The Last of Us»؟",
    "options": [
      "343 Industries",
      "Larian Studios",
      "Insomniac Games",
      "Naughty Dog"
    ],
    "optionsAr": [
      "343 Industries",
      "Larian Studios",
      "Insomniac Games",
      "Naughty Dog"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0962"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Crash Bandicoot”?",
    "ar": "أي استوديو طوّر لعبة «Crash Bandicoot»؟",
    "options": [
      "Namco",
      "Team Bondi",
      "Nintendo",
      "Naughty Dog"
    ],
    "optionsAr": [
      "Namco",
      "Team Bondi",
      "Nintendo",
      "Naughty Dog"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0963"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Jak and Daxter: The Precursor Legacy”?",
    "ar": "أي استوديو طوّر لعبة «Jak and Daxter: The Precursor Legacy»؟",
    "options": [
      "Alexey Pajitnov",
      "Naughty Dog",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "optionsAr": [
      "Alexey Pajitnov",
      "Naughty Dog",
      "Game Freak",
      "Blizzard Entertainment"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0964"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “God of War”?",
    "ar": "أي استوديو طوّر لعبة «God of War»؟",
    "options": [
      "Sucker Punch Productions",
      "343 Industries",
      "Santa Monica Studio",
      "Epic Games"
    ],
    "optionsAr": [
      "Sucker Punch Productions",
      "343 Industries",
      "Santa Monica Studio",
      "Epic Games"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0965"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “God of War Ragnarök”?",
    "ar": "أي استوديو طوّر لعبة «God of War Ragnarök»؟",
    "options": [
      "Team Bondi",
      "Santa Monica Studio",
      "id Software",
      "Larian Studios"
    ],
    "optionsAr": [
      "Team Bondi",
      "Santa Monica Studio",
      "id Software",
      "Larian Studios"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0966"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Horizon Zero Dawn”?",
    "ar": "أي استوديو طوّر لعبة «Horizon Zero Dawn»؟",
    "options": [
      "Capcom",
      "Guerrilla Games",
      "Maxis",
      "Insomniac Games"
    ],
    "optionsAr": [
      "Capcom",
      "Guerrilla Games",
      "Maxis",
      "Insomniac Games"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0967"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Ghost of Tsushima”?",
    "ar": "أي استوديو طوّر لعبة «Ghost of Tsushima»؟",
    "options": [
      "Sucker Punch Productions",
      "Team Bondi",
      "Square",
      "Insomniac Games"
    ],
    "optionsAr": [
      "Sucker Punch Productions",
      "Team Bondi",
      "Square",
      "Insomniac Games"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0968"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Marvel’s Spider-Man”?",
    "ar": "أي استوديو طوّر لعبة «Marvel’s Spider-Man»؟",
    "options": [
      "Insomniac Games",
      "Valve",
      "id Software",
      "Polyphony Digital"
    ],
    "optionsAr": [
      "Insomniac Games",
      "Valve",
      "id Software",
      "Polyphony Digital"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0969"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Ratchet & Clank”?",
    "ar": "أي استوديو طوّر لعبة «Ratchet & Clank»؟",
    "options": [
      "Insomniac Games",
      "Team Bondi",
      "Rockstar Games",
      "Naughty Dog"
    ],
    "optionsAr": [
      "Insomniac Games",
      "Team Bondi",
      "Rockstar Games",
      "Naughty Dog"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0970"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Gran Turismo 7”?",
    "ar": "أي استوديو طوّر لعبة «Gran Turismo 7»؟",
    "options": [
      "Namco",
      "Polyphony Digital",
      "Rockstar Games",
      "Bethesda Game Studios"
    ],
    "optionsAr": [
      "Namco",
      "Polyphony Digital",
      "Rockstar Games",
      "Bethesda Game Studios"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0971"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Elden Ring”?",
    "ar": "أي استوديو طوّر لعبة «Elden Ring»؟",
    "options": [
      "Valve",
      "FromSoftware",
      "Namco",
      "Sega"
    ],
    "optionsAr": [
      "Valve",
      "FromSoftware",
      "Namco",
      "Sega"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0972"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Dark Souls”?",
    "ar": "أي استوديو طوّر لعبة «Dark Souls»؟",
    "options": [
      "Nintendo",
      "FromSoftware",
      "Larian Studios",
      "Sucker Punch Productions"
    ],
    "optionsAr": [
      "Nintendo",
      "FromSoftware",
      "Larian Studios",
      "Sucker Punch Productions"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0973"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Bloodborne”?",
    "ar": "أي استوديو طوّر لعبة «Bloodborne»؟",
    "options": [
      "Valve",
      "FromSoftware",
      "343 Industries",
      "Team Bondi"
    ],
    "optionsAr": [
      "Valve",
      "FromSoftware",
      "343 Industries",
      "Team Bondi"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-0974"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Sekiro: Shadows Die Twice”?",
    "ar": "أي استوديو طوّر لعبة «Sekiro: Shadows Die Twice»؟",
    "options": [
      "Ensemble Studios",
      "343 Industries",
      "Square",
      "FromSoftware"
    ],
    "optionsAr": [
      "Ensemble Studios",
      "343 Industries",
      "Square",
      "FromSoftware"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-0975"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Tekken 8”?",
    "ar": "أي استوديو طوّر لعبة «Tekken 8»؟",
    "options": [
      "Square",
      "Namco",
      "Bandai Namco Studios",
      "Santa Monica Studio"
    ],
    "optionsAr": [
      "Square",
      "Namco",
      "Bandai Namco Studios",
      "Santa Monica Studio"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-0976"
  },
  {
    "category": "Gaming",
    "en": "Which studio developed “Fortnite”?",
    "ar": "أي استوديو طوّر لعبة «Fortnite»؟",
    "options": [
      "Epic Games",
      "Alexey Pajitnov",
      "Sega",
      "Game Freak"
    ],
    "optionsAr": [
      "Epic Games",
      "Alexey Pajitnov",
      "Sega",
      "Game Freak"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-0977"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Super Mario Bros.” first released?",
    "ar": "في أي سنة صدرت لعبة «Super Mario Bros.» لأول مرة؟",
    "options": [
      "2017",
      "1985",
      "2002",
      "2019"
    ],
    "optionsAr": [
      "2017",
      "1985",
      "2002",
      "2019"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0978"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Minecraft” first released?",
    "ar": "في أي سنة صدرت لعبة «Minecraft» لأول مرة؟",
    "options": [
      "2009",
      "2021",
      "1992",
      "2011"
    ],
    "optionsAr": [
      "2009",
      "2021",
      "1992",
      "2011"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0979"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Legend of Zelda: Breath of the Wild” first released?",
    "ar": "في أي سنة صدرت لعبة «The Legend of Zelda: Breath of the Wild» لأول مرة؟",
    "options": [
      "2007",
      "2006",
      "2001",
      "2017"
    ],
    "optionsAr": [
      "2007",
      "2006",
      "2001",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0980"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Legend of Zelda: Tears of the Kingdom” first released?",
    "ar": "في أي سنة صدرت لعبة «The Legend of Zelda: Tears of the Kingdom» لأول مرة؟",
    "options": [
      "2008",
      "1984",
      "2023",
      "2017"
    ],
    "optionsAr": [
      "2008",
      "1984",
      "2023",
      "2017"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0981"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Pokémon Red and Blue” first released?",
    "ar": "في أي سنة صدرت لعبة «Pokémon Red and Blue» لأول مرة؟",
    "options": [
      "1996",
      "1997",
      "2013",
      "2020"
    ],
    "optionsAr": [
      "1996",
      "1997",
      "2013",
      "2020"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0982"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Tetris” first released?",
    "ar": "في أي سنة صدرت لعبة «Tetris» لأول مرة؟",
    "options": [
      "2007",
      "1984",
      "2017",
      "2009"
    ],
    "optionsAr": [
      "2007",
      "1984",
      "2017",
      "2009"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0983"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Sonic the Hedgehog” first released?",
    "ar": "في أي سنة صدرت لعبة «Sonic the Hedgehog» لأول مرة؟",
    "options": [
      "2006",
      "2015",
      "1986",
      "1991"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "1986",
      "1991"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0984"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Pac-Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Pac-Man» لأول مرة؟",
    "options": [
      "1980",
      "2011",
      "2013",
      "2024"
    ],
    "optionsAr": [
      "1980",
      "2011",
      "2013",
      "2024"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0985"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Donkey Kong” first released?",
    "ar": "في أي سنة صدرت لعبة «Donkey Kong» لأول مرة؟",
    "options": [
      "1998",
      "1986",
      "1981",
      "2013"
    ],
    "optionsAr": [
      "1998",
      "1986",
      "1981",
      "2013"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0986"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Metroid” first released?",
    "ar": "في أي سنة صدرت لعبة «Metroid» لأول مرة؟",
    "options": [
      "2002",
      "1986",
      "1993",
      "1980"
    ],
    "optionsAr": [
      "2002",
      "1986",
      "1993",
      "1980"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0987"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Final Fantasy VII” first released?",
    "ar": "في أي سنة صدرت لعبة «Final Fantasy VII» لأول مرة؟",
    "options": [
      "1998",
      "2018",
      "2004",
      "1997"
    ],
    "optionsAr": [
      "1998",
      "2018",
      "2004",
      "1997"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-0988"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Final Fantasy X” first released?",
    "ar": "في أي سنة صدرت لعبة «Final Fantasy X» لأول مرة؟",
    "options": [
      "2006",
      "2001",
      "1998",
      "1981"
    ],
    "optionsAr": [
      "2006",
      "2001",
      "1998",
      "1981"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0989"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dragon Quest XI” first released?",
    "ar": "في أي سنة صدرت لعبة «Dragon Quest XI» لأول مرة؟",
    "options": [
      "2002",
      "2017",
      "1986",
      "1984"
    ],
    "optionsAr": [
      "2002",
      "2017",
      "1986",
      "1984"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0990"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Kingdom Hearts” first released?",
    "ar": "في أي سنة صدرت لعبة «Kingdom Hearts» لأول مرة؟",
    "options": [
      "1986",
      "2002",
      "2000",
      "1985"
    ],
    "optionsAr": [
      "1986",
      "2002",
      "2000",
      "1985"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0991"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Street Fighter II” first released?",
    "ar": "في أي سنة صدرت لعبة «Street Fighter II» لأول مرة؟",
    "options": [
      "2001",
      "2008",
      "1991",
      "2024"
    ],
    "optionsAr": [
      "2001",
      "2008",
      "1991",
      "2024"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0992"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Resident Evil” first released?",
    "ar": "في أي سنة صدرت لعبة «Resident Evil» لأول مرة؟",
    "options": [
      "2022",
      "1996",
      "2006",
      "2001"
    ],
    "optionsAr": [
      "2022",
      "1996",
      "2006",
      "2001"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0993"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Resident Evil 4” first released?",
    "ar": "في أي سنة صدرت لعبة «Resident Evil 4» لأول مرة؟",
    "options": [
      "2005",
      "2020",
      "1993",
      "2009"
    ],
    "optionsAr": [
      "2005",
      "2020",
      "1993",
      "2009"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0994"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Mega Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Mega Man» لأول مرة؟",
    "options": [
      "1997",
      "2018",
      "1987",
      "1981"
    ],
    "optionsAr": [
      "1997",
      "2018",
      "1987",
      "1981"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0995"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Devil May Cry” first released?",
    "ar": "في أي سنة صدرت لعبة «Devil May Cry» لأول مرة؟",
    "options": [
      "2001",
      "1998",
      "2023",
      "1999"
    ],
    "optionsAr": [
      "2001",
      "1998",
      "2023",
      "1999"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-0996"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Monster Hunter: World” first released?",
    "ar": "في أي سنة صدرت لعبة «Monster Hunter: World» لأول مرة؟",
    "options": [
      "1989",
      "2018",
      "2019",
      "1992"
    ],
    "optionsAr": [
      "1989",
      "2018",
      "2019",
      "1992"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0997"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Halo: Combat Evolved” first released?",
    "ar": "في أي سنة صدرت لعبة «Halo: Combat Evolved» لأول مرة؟",
    "options": [
      "2000",
      "2001",
      "1984",
      "2007"
    ],
    "optionsAr": [
      "2000",
      "2001",
      "1984",
      "2007"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-0998"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Halo Infinite” first released?",
    "ar": "في أي سنة صدرت لعبة «Halo Infinite» لأول مرة؟",
    "options": [
      "1993",
      "2011",
      "2021",
      "1991"
    ],
    "optionsAr": [
      "1993",
      "2011",
      "2021",
      "1991"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-0999"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Gears of War” first released?",
    "ar": "في أي سنة صدرت لعبة «Gears of War» لأول مرة؟",
    "options": [
      "2014",
      "1987",
      "1999",
      "2006"
    ],
    "optionsAr": [
      "2014",
      "1987",
      "1999",
      "2006"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1000"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Forza Horizon 5” first released?",
    "ar": "في أي سنة صدرت لعبة «Forza Horizon 5» لأول مرة؟",
    "options": [
      "1984",
      "1997",
      "2019",
      "2021"
    ],
    "optionsAr": [
      "1984",
      "1997",
      "2019",
      "2021"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1001"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Age of Empires II” first released?",
    "ar": "في أي سنة صدرت لعبة «Age of Empires II» لأول مرة؟",
    "options": [
      "1991",
      "2023",
      "1999",
      "1996"
    ],
    "optionsAr": [
      "1991",
      "2023",
      "1999",
      "1996"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1002"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Doom” first released?",
    "ar": "في أي سنة صدرت لعبة «Doom» لأول مرة؟",
    "options": [
      "1980",
      "1993",
      "2021",
      "2020"
    ],
    "optionsAr": [
      "1980",
      "1993",
      "2021",
      "2020"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1003"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Quake” first released?",
    "ar": "في أي سنة صدرت لعبة «Quake» لأول مرة؟",
    "options": [
      "2021",
      "2014",
      "1980",
      "1996"
    ],
    "optionsAr": [
      "2021",
      "2014",
      "1980",
      "1996"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1004"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Wolfenstein 3D” first released?",
    "ar": "في أي سنة صدرت لعبة «Wolfenstein 3D» لأول مرة؟",
    "options": [
      "2019",
      "2016",
      "1992",
      "2006"
    ],
    "optionsAr": [
      "2019",
      "2016",
      "1992",
      "2006"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1005"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Elder Scrolls V: Skyrim” first released?",
    "ar": "في أي سنة صدرت لعبة «The Elder Scrolls V: Skyrim» لأول مرة؟",
    "options": [
      "2020",
      "1986",
      "2011",
      "2019"
    ],
    "optionsAr": [
      "2020",
      "1986",
      "2011",
      "2019"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1006"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Fallout 4” first released?",
    "ar": "في أي سنة صدرت لعبة «Fallout 4» لأول مرة؟",
    "options": [
      "2007",
      "1998",
      "2015",
      "2022"
    ],
    "optionsAr": [
      "2007",
      "1998",
      "2015",
      "2022"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1007"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Starfield” first released?",
    "ar": "في أي سنة صدرت لعبة «Starfield» لأول مرة؟",
    "options": [
      "2009",
      "2023",
      "2013",
      "1987"
    ],
    "optionsAr": [
      "2009",
      "2023",
      "2013",
      "1987"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1008"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Witcher 3: Wild Hunt” first released?",
    "ar": "في أي سنة صدرت لعبة «The Witcher 3: Wild Hunt» لأول مرة؟",
    "options": [
      "1981",
      "2009",
      "2015",
      "1998"
    ],
    "optionsAr": [
      "1981",
      "2009",
      "2015",
      "1998"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1009"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Cyberpunk 2077” first released?",
    "ar": "في أي سنة صدرت لعبة «Cyberpunk 2077» لأول مرة؟",
    "options": [
      "1989",
      "1991",
      "2020",
      "1986"
    ],
    "optionsAr": [
      "1989",
      "1991",
      "2020",
      "1986"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1010"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Baldur’s Gate 3” first released?",
    "ar": "في أي سنة صدرت لعبة «Baldur’s Gate 3» لأول مرة؟",
    "options": [
      "2006",
      "2023",
      "1986",
      "2016"
    ],
    "optionsAr": [
      "2006",
      "2023",
      "1986",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1011"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dota 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Dota 2» لأول مرة؟",
    "options": [
      "2013",
      "1980",
      "2024",
      "1999"
    ],
    "optionsAr": [
      "2013",
      "1980",
      "2024",
      "1999"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1012"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Counter-Strike 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Counter-Strike 2» لأول مرة؟",
    "options": [
      "2023",
      "2009",
      "2024",
      "2011"
    ],
    "optionsAr": [
      "2023",
      "2009",
      "2024",
      "2011"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1013"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Half-Life” first released?",
    "ar": "في أي سنة صدرت لعبة «Half-Life» لأول مرة؟",
    "options": [
      "1992",
      "2016",
      "1998",
      "1981"
    ],
    "optionsAr": [
      "1992",
      "2016",
      "1998",
      "1981"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1014"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Portal” first released?",
    "ar": "في أي سنة صدرت لعبة «Portal» لأول مرة؟",
    "options": [
      "1999",
      "2006",
      "2007",
      "2001"
    ],
    "optionsAr": [
      "1999",
      "2006",
      "2007",
      "2001"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1015"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Left 4 Dead” first released?",
    "ar": "في أي سنة صدرت لعبة «Left 4 Dead» لأول مرة؟",
    "options": [
      "2007",
      "2008",
      "2022",
      "1984"
    ],
    "optionsAr": [
      "2007",
      "2008",
      "2022",
      "1984"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1016"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Overwatch” first released?",
    "ar": "في أي سنة صدرت لعبة «Overwatch» لأول مرة؟",
    "options": [
      "2016",
      "2014",
      "2019",
      "2022"
    ],
    "optionsAr": [
      "2016",
      "2014",
      "2019",
      "2022"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1017"
  },
  {
    "category": "Gaming",
    "en": "In which year was “World of Warcraft” first released?",
    "ar": "في أي سنة صدرت لعبة «World of Warcraft» لأول مرة؟",
    "options": [
      "2004",
      "2017",
      "2016",
      "2002"
    ],
    "optionsAr": [
      "2004",
      "2017",
      "2016",
      "2002"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1018"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Diablo II” first released?",
    "ar": "في أي سنة صدرت لعبة «Diablo II» لأول مرة؟",
    "options": [
      "1985",
      "2000",
      "2002",
      "1997"
    ],
    "optionsAr": [
      "1985",
      "2000",
      "2002",
      "1997"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1019"
  },
  {
    "category": "Gaming",
    "en": "In which year was “StarCraft” first released?",
    "ar": "في أي سنة صدرت لعبة «StarCraft» لأول مرة؟",
    "options": [
      "2020",
      "2006",
      "2000",
      "1998"
    ],
    "optionsAr": [
      "2020",
      "2006",
      "2000",
      "1998"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1020"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Hearthstone” first released?",
    "ar": "في أي سنة صدرت لعبة «Hearthstone» لأول مرة؟",
    "options": [
      "2016",
      "2017",
      "2009",
      "2014"
    ],
    "optionsAr": [
      "2016",
      "2017",
      "2009",
      "2014"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1021"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Sims” first released?",
    "ar": "في أي سنة صدرت لعبة «The Sims» لأول مرة؟",
    "options": [
      "2024",
      "2000",
      "2011",
      "2016"
    ],
    "optionsAr": [
      "2024",
      "2000",
      "2011",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1022"
  },
  {
    "category": "Gaming",
    "en": "In which year was “SimCity” first released?",
    "ar": "في أي سنة صدرت لعبة «SimCity» لأول مرة؟",
    "options": [
      "2002",
      "2004",
      "1996",
      "1989"
    ],
    "optionsAr": [
      "2002",
      "2004",
      "1996",
      "1989"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1023"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Grand Theft Auto III” first released?",
    "ar": "في أي سنة صدرت لعبة «Grand Theft Auto III» لأول مرة؟",
    "options": [
      "2016",
      "2001",
      "2023",
      "2005"
    ],
    "optionsAr": [
      "2016",
      "2001",
      "2023",
      "2005"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1024"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Grand Theft Auto V” first released?",
    "ar": "في أي سنة صدرت لعبة «Grand Theft Auto V» لأول مرة؟",
    "options": [
      "2021",
      "2005",
      "2004",
      "2013"
    ],
    "optionsAr": [
      "2021",
      "2005",
      "2004",
      "2013"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1025"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Red Dead Redemption 2” first released?",
    "ar": "في أي سنة صدرت لعبة «Red Dead Redemption 2» لأول مرة؟",
    "options": [
      "2018",
      "2022",
      "2014",
      "1985"
    ],
    "optionsAr": [
      "2018",
      "2022",
      "2014",
      "1985"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1026"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Bully” first released?",
    "ar": "في أي سنة صدرت لعبة «Bully» لأول مرة؟",
    "options": [
      "1993",
      "2006",
      "2014",
      "2016"
    ],
    "optionsAr": [
      "1993",
      "2006",
      "2014",
      "2016"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1027"
  },
  {
    "category": "Gaming",
    "en": "In which year was “L.A. Noire” first released?",
    "ar": "في أي سنة صدرت لعبة «L.A. Noire» لأول مرة؟",
    "options": [
      "2011",
      "1993",
      "2017",
      "2001"
    ],
    "optionsAr": [
      "2011",
      "1993",
      "2017",
      "2001"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1028"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Uncharted 2: Among Thieves” first released?",
    "ar": "في أي سنة صدرت لعبة «Uncharted 2: Among Thieves» لأول مرة؟",
    "options": [
      "2009",
      "2002",
      "2011",
      "1997"
    ],
    "optionsAr": [
      "2009",
      "2002",
      "2011",
      "1997"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1029"
  },
  {
    "category": "Gaming",
    "en": "In which year was “The Last of Us” first released?",
    "ar": "في أي سنة صدرت لعبة «The Last of Us» لأول مرة؟",
    "options": [
      "2023",
      "2020",
      "2013",
      "2022"
    ],
    "optionsAr": [
      "2023",
      "2020",
      "2013",
      "2022"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1030"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Crash Bandicoot” first released?",
    "ar": "في أي سنة صدرت لعبة «Crash Bandicoot» لأول مرة؟",
    "options": [
      "1996",
      "2021",
      "2011",
      "2000"
    ],
    "optionsAr": [
      "1996",
      "2021",
      "2011",
      "2000"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1031"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Jak and Daxter: The Precursor Legacy” first released?",
    "ar": "في أي سنة صدرت لعبة «Jak and Daxter: The Precursor Legacy» لأول مرة؟",
    "options": [
      "2013",
      "2006",
      "2008",
      "2001"
    ],
    "optionsAr": [
      "2013",
      "2006",
      "2008",
      "2001"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1032"
  },
  {
    "category": "Gaming",
    "en": "In which year was “God of War” first released?",
    "ar": "في أي سنة صدرت لعبة «God of War» لأول مرة؟",
    "options": [
      "2005",
      "2001",
      "2009",
      "2017"
    ],
    "optionsAr": [
      "2005",
      "2001",
      "2009",
      "2017"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1033"
  },
  {
    "category": "Gaming",
    "en": "In which year was “God of War Ragnarök” first released?",
    "ar": "في أي سنة صدرت لعبة «God of War Ragnarök» لأول مرة؟",
    "options": [
      "2006",
      "2015",
      "2022",
      "1987"
    ],
    "optionsAr": [
      "2006",
      "2015",
      "2022",
      "1987"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1034"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Horizon Zero Dawn” first released?",
    "ar": "في أي سنة صدرت لعبة «Horizon Zero Dawn» لأول مرة؟",
    "options": [
      "2017",
      "1992",
      "1993",
      "2016"
    ],
    "optionsAr": [
      "2017",
      "1992",
      "1993",
      "2016"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1035"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Ghost of Tsushima” first released?",
    "ar": "في أي سنة صدرت لعبة «Ghost of Tsushima» لأول مرة؟",
    "options": [
      "1987",
      "2020",
      "2007",
      "1996"
    ],
    "optionsAr": [
      "1987",
      "2020",
      "2007",
      "1996"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1036"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Marvel’s Spider-Man” first released?",
    "ar": "في أي سنة صدرت لعبة «Marvel’s Spider-Man» لأول مرة؟",
    "options": [
      "1985",
      "2016",
      "2018",
      "1989"
    ],
    "optionsAr": [
      "1985",
      "2016",
      "2018",
      "1989"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1037"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Ratchet & Clank” first released?",
    "ar": "في أي سنة صدرت لعبة «Ratchet & Clank» لأول مرة؟",
    "options": [
      "2013",
      "2002",
      "2001",
      "2000"
    ],
    "optionsAr": [
      "2013",
      "2002",
      "2001",
      "2000"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1038"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Gran Turismo 7” first released?",
    "ar": "في أي سنة صدرت لعبة «Gran Turismo 7» لأول مرة؟",
    "options": [
      "1981",
      "2022",
      "2009",
      "1998"
    ],
    "optionsAr": [
      "1981",
      "2022",
      "2009",
      "1998"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1039"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Elden Ring” first released?",
    "ar": "في أي سنة صدرت لعبة «Elden Ring» لأول مرة؟",
    "options": [
      "2007",
      "2023",
      "2005",
      "2022"
    ],
    "optionsAr": [
      "2007",
      "2023",
      "2005",
      "2022"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1040"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Dark Souls” first released?",
    "ar": "في أي سنة صدرت لعبة «Dark Souls» لأول مرة؟",
    "options": [
      "2014",
      "1981",
      "2011",
      "2008"
    ],
    "optionsAr": [
      "2014",
      "1981",
      "2011",
      "2008"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1041"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Bloodborne” first released?",
    "ar": "في أي سنة صدرت لعبة «Bloodborne» لأول مرة؟",
    "options": [
      "2009",
      "2002",
      "2015",
      "2005"
    ],
    "optionsAr": [
      "2009",
      "2002",
      "2015",
      "2005"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1042"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Sekiro: Shadows Die Twice” first released?",
    "ar": "في أي سنة صدرت لعبة «Sekiro: Shadows Die Twice» لأول مرة؟",
    "options": [
      "2008",
      "1986",
      "2019",
      "2000"
    ],
    "optionsAr": [
      "2008",
      "1986",
      "2019",
      "2000"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1043"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Tekken 8” first released?",
    "ar": "في أي سنة صدرت لعبة «Tekken 8» لأول مرة؟",
    "options": [
      "2017",
      "2000",
      "1985",
      "2024"
    ],
    "optionsAr": [
      "2017",
      "2000",
      "1985",
      "2024"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1044"
  },
  {
    "category": "Gaming",
    "en": "In which year was “Fortnite” first released?",
    "ar": "في أي سنة صدرت لعبة «Fortnite» لأول مرة؟",
    "options": [
      "2006",
      "2008",
      "1999",
      "2017"
    ],
    "optionsAr": [
      "2006",
      "2008",
      "1999",
      "2017"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1045"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Afghanistan?",
    "ar": "ما عاصمة أفغانستان؟",
    "options": [
      "Muscat",
      "Berlin",
      "Kabul",
      "Algiers"
    ],
    "optionsAr": [
      "Muscat",
      "Berlin",
      "Kabul",
      "Algiers"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1046"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Albania?",
    "ar": "ما عاصمة ألبانيا؟",
    "options": [
      "Tirana",
      "Nairobi",
      "Tokyo",
      "Dhaka"
    ],
    "optionsAr": [
      "Tirana",
      "Nairobi",
      "Tokyo",
      "Dhaka"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1047"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Algeria?",
    "ar": "ما عاصمة الجزائر؟",
    "options": [
      "Buenos Aires",
      "Reykjavik",
      "Warsaw",
      "Algiers"
    ],
    "optionsAr": [
      "Buenos Aires",
      "Reykjavik",
      "Warsaw",
      "Algiers"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1048"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Angola?",
    "ar": "ما عاصمة أنغولا؟",
    "options": [
      "Kuala Lumpur",
      "Luanda",
      "Santo Domingo",
      "Kabul"
    ],
    "optionsAr": [
      "Kuala Lumpur",
      "Luanda",
      "Santo Domingo",
      "Kabul"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1049"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Argentina?",
    "ar": "ما عاصمة الأرجنتين؟",
    "options": [
      "Gaborone",
      "Rome",
      "Quito",
      "Buenos Aires"
    ],
    "optionsAr": [
      "Gaborone",
      "Rome",
      "Quito",
      "Buenos Aires"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1050"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Armenia?",
    "ar": "ما عاصمة أرمينيا؟",
    "options": [
      "Tehran",
      "Helsinki",
      "Yerevan",
      "Phnom Penh"
    ],
    "optionsAr": [
      "Tehran",
      "Helsinki",
      "Yerevan",
      "Phnom Penh"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1051"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Australia?",
    "ar": "ما عاصمة أستراليا؟",
    "options": [
      "Reykjavik",
      "Ottawa",
      "Canberra",
      "Vienna"
    ],
    "optionsAr": [
      "Reykjavik",
      "Ottawa",
      "Canberra",
      "Vienna"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1052"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Austria?",
    "ar": "ما عاصمة النمسا؟",
    "options": [
      "Ulan Bator",
      "Tallinn",
      "Vienna",
      "Budapest"
    ],
    "optionsAr": [
      "Ulan Bator",
      "Tallinn",
      "Vienna",
      "Budapest"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1053"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Azerbaijan?",
    "ar": "ما عاصمة أذربيجان؟",
    "options": [
      "Kathmandu",
      "Zagreb",
      "Baku",
      "Tokyo"
    ],
    "optionsAr": [
      "Kathmandu",
      "Zagreb",
      "Baku",
      "Tokyo"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1054"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bangladesh?",
    "ar": "ما عاصمة بنغلاديش؟",
    "options": [
      "Buenos Aires",
      "Copenhagen",
      "Luanda",
      "Dhaka"
    ],
    "optionsAr": [
      "Buenos Aires",
      "Copenhagen",
      "Luanda",
      "Dhaka"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1055"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Belarus?",
    "ar": "ما عاصمة بيلاروس؟",
    "options": [
      "Bogotá",
      "Athens",
      "Phnom Penh",
      "Minsk"
    ],
    "optionsAr": [
      "Bogotá",
      "Athens",
      "Phnom Penh",
      "Minsk"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1056"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Belgium?",
    "ar": "ما عاصمة بلجيكا؟",
    "options": [
      "Lima",
      "Jerusalem",
      "Brussels",
      "Tirana"
    ],
    "optionsAr": [
      "Lima",
      "Jerusalem",
      "Brussels",
      "Tirana"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1057"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bolivia?",
    "ar": "ما عاصمة بوليفيا؟",
    "options": [
      "Sucre",
      "Havana",
      "Quito",
      "Jerusalem"
    ],
    "optionsAr": [
      "Sucre",
      "Havana",
      "Quito",
      "Jerusalem"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1058"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bosnia And Herzegovina?",
    "ar": "ما عاصمة البوسنة والهرسك؟",
    "options": [
      "Baghdad",
      "Havana",
      "Berlin",
      "Sarajevo"
    ],
    "optionsAr": [
      "Baghdad",
      "Havana",
      "Berlin",
      "Sarajevo"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1059"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Botswana?",
    "ar": "ما عاصمة بوتسوانا؟",
    "options": [
      "Rome",
      "Addis Ababa",
      "Santiago",
      "Gaborone"
    ],
    "optionsAr": [
      "Rome",
      "Addis Ababa",
      "Santiago",
      "Gaborone"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1060"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Brazil?",
    "ar": "ما عاصمة البرازيل؟",
    "options": [
      "Brasília",
      "Berlin",
      "Dublin",
      "Kathmandu"
    ],
    "optionsAr": [
      "Brasília",
      "Berlin",
      "Dublin",
      "Kathmandu"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1061"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Bulgaria?",
    "ar": "ما عاصمة بلغاريا؟",
    "options": [
      "Brussels",
      "Islamabad",
      "Sofia",
      "Amsterdam"
    ],
    "optionsAr": [
      "Brussels",
      "Islamabad",
      "Sofia",
      "Amsterdam"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1062"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cambodia?",
    "ar": "ما عاصمة كمبوديا؟",
    "options": [
      "Phnom Penh",
      "Luanda",
      "Tokyo",
      "Amsterdam"
    ],
    "optionsAr": [
      "Phnom Penh",
      "Luanda",
      "Tokyo",
      "Amsterdam"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1063"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cameroon?",
    "ar": "ما عاصمة الكاميرون؟",
    "options": [
      "Vienna",
      "Muscat",
      "Santiago",
      "Yaoundé"
    ],
    "optionsAr": [
      "Vienna",
      "Muscat",
      "Santiago",
      "Yaoundé"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1064"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Canada?",
    "ar": "ما عاصمة كندا؟",
    "options": [
      "Baghdad",
      "Ottawa",
      "Sofia",
      "Copenhagen"
    ],
    "optionsAr": [
      "Baghdad",
      "Ottawa",
      "Sofia",
      "Copenhagen"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1065"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Chile?",
    "ar": "ما عاصمة تشيلي؟",
    "options": [
      "Canberra",
      "Santiago",
      "Havana",
      "Kuwait City"
    ],
    "optionsAr": [
      "Canberra",
      "Santiago",
      "Havana",
      "Kuwait City"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1066"
  },
  {
    "category": "Geography",
    "en": "What is the capital of China?",
    "ar": "ما عاصمة الصين؟",
    "options": [
      "Beijing",
      "Abuja",
      "Kathmandu",
      "Islamabad"
    ],
    "optionsAr": [
      "Beijing",
      "Abuja",
      "Kathmandu",
      "Islamabad"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1067"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Colombia?",
    "ar": "ما عاصمة كولومبيا؟",
    "options": [
      "Guatemala City",
      "Baghdad",
      "Kuwait City",
      "Bogotá"
    ],
    "optionsAr": [
      "Guatemala City",
      "Baghdad",
      "Kuwait City",
      "Bogotá"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1068"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Costa Rica?",
    "ar": "ما عاصمة كوستاريكا؟",
    "options": [
      "Nairobi",
      "Dhaka",
      "San José",
      "Santiago"
    ],
    "optionsAr": [
      "Nairobi",
      "Dhaka",
      "San José",
      "Santiago"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1069"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Croatia?",
    "ar": "ما عاصمة كرواتيا؟",
    "options": [
      "Buenos Aires",
      "Havana",
      "Manila",
      "Zagreb"
    ],
    "optionsAr": [
      "Buenos Aires",
      "Havana",
      "Manila",
      "Zagreb"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1070"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cuba?",
    "ar": "ما عاصمة كوبا؟",
    "options": [
      "Muscat",
      "Havana",
      "San José",
      "Minsk"
    ],
    "optionsAr": [
      "Muscat",
      "Havana",
      "San José",
      "Minsk"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1071"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Cyprus?",
    "ar": "ما عاصمة قبرص؟",
    "options": [
      "Buenos Aires",
      "Addis Ababa",
      "Nicosia",
      "Havana"
    ],
    "optionsAr": [
      "Buenos Aires",
      "Addis Ababa",
      "Nicosia",
      "Havana"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1072"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Denmark?",
    "ar": "ما عاصمة الدانمرك؟",
    "options": [
      "Ulan Bator",
      "Copenhagen",
      "Sucre",
      "Kuwait City"
    ],
    "optionsAr": [
      "Ulan Bator",
      "Copenhagen",
      "Sucre",
      "Kuwait City"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1073"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Dominican Republic?",
    "ar": "ما عاصمة جمهورية الدومينيكان؟",
    "options": [
      "Santo Domingo",
      "Beirut",
      "Warsaw",
      "Lima"
    ],
    "optionsAr": [
      "Santo Domingo",
      "Beirut",
      "Warsaw",
      "Lima"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1074"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ecuador?",
    "ar": "ما عاصمة الإكوادور؟",
    "options": [
      "Tehran",
      "Quito",
      "Santo Domingo",
      "Dublin"
    ],
    "optionsAr": [
      "Tehran",
      "Quito",
      "Santo Domingo",
      "Dublin"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1075"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Egypt?",
    "ar": "ما عاصمة مصر؟",
    "options": [
      "Oslo",
      "Nairobi",
      "Dhaka",
      "Cairo"
    ],
    "optionsAr": [
      "Oslo",
      "Nairobi",
      "Dhaka",
      "Cairo"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1076"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Estonia?",
    "ar": "ما عاصمة إستونيا؟",
    "options": [
      "Tallinn",
      "Buenos Aires",
      "Canberra",
      "Santiago"
    ],
    "optionsAr": [
      "Tallinn",
      "Buenos Aires",
      "Canberra",
      "Santiago"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1077"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ethiopia?",
    "ar": "ما عاصمة إثيوبيا؟",
    "options": [
      "Baghdad",
      "Helsinki",
      "Reykjavik",
      "Addis Ababa"
    ],
    "optionsAr": [
      "Baghdad",
      "Helsinki",
      "Reykjavik",
      "Addis Ababa"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1078"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Finland?",
    "ar": "ما عاصمة فنلندا؟",
    "options": [
      "Ulan Bator",
      "Nicosia",
      "Helsinki",
      "Wellington"
    ],
    "optionsAr": [
      "Ulan Bator",
      "Nicosia",
      "Helsinki",
      "Wellington"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1079"
  },
  {
    "category": "Geography",
    "en": "What is the capital of France?",
    "ar": "ما عاصمة فرنسا؟",
    "options": [
      "Bogotá",
      "Paris",
      "Helsinki",
      "Amman"
    ],
    "optionsAr": [
      "Bogotá",
      "Paris",
      "Helsinki",
      "Amman"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1080"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Georgia?",
    "ar": "ما عاصمة جورجيا؟",
    "options": [
      "Kuala Lumpur",
      "Athens",
      "Sarajevo",
      "Tbilisi"
    ],
    "optionsAr": [
      "Kuala Lumpur",
      "Athens",
      "Sarajevo",
      "Tbilisi"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1081"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Germany?",
    "ar": "ما عاصمة ألمانيا؟",
    "options": [
      "Tehran",
      "Minsk",
      "Berlin",
      "Algiers"
    ],
    "optionsAr": [
      "Tehran",
      "Minsk",
      "Berlin",
      "Algiers"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1082"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ghana?",
    "ar": "ما عاصمة غانا؟",
    "options": [
      "Guatemala City",
      "Accra",
      "Mexico City",
      "Sarajevo"
    ],
    "optionsAr": [
      "Guatemala City",
      "Accra",
      "Mexico City",
      "Sarajevo"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1083"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Greece?",
    "ar": "ما عاصمة اليونان؟",
    "options": [
      "Athens",
      "Sofia",
      "Sucre",
      "Phnom Penh"
    ],
    "optionsAr": [
      "Athens",
      "Sofia",
      "Sucre",
      "Phnom Penh"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1084"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Guatemala?",
    "ar": "ما عاصمة غواتيمالا؟",
    "options": [
      "Beijing",
      "Guatemala City",
      "Zagreb",
      "Beirut"
    ],
    "optionsAr": [
      "Beijing",
      "Guatemala City",
      "Zagreb",
      "Beirut"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1085"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Hungary?",
    "ar": "ما عاصمة هنغاريا؟",
    "options": [
      "Canberra",
      "Athens",
      "Budapest",
      "Manila"
    ],
    "optionsAr": [
      "Canberra",
      "Athens",
      "Budapest",
      "Manila"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1086"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iceland?",
    "ar": "ما عاصمة آيسلندا؟",
    "options": [
      "Baku",
      "Athens",
      "Reykjavik",
      "Tokyo"
    ],
    "optionsAr": [
      "Baku",
      "Athens",
      "Reykjavik",
      "Tokyo"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1087"
  },
  {
    "category": "Geography",
    "en": "What is the capital of India?",
    "ar": "ما عاصمة الهند؟",
    "options": [
      "Rome",
      "New Delhi",
      "Vienna",
      "Abuja"
    ],
    "optionsAr": [
      "Rome",
      "New Delhi",
      "Vienna",
      "Abuja"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1088"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Indonesia?",
    "ar": "ما عاصمة إندونيسيا؟",
    "options": [
      "Vienna",
      "Yaoundé",
      "Amman",
      "Jakarta"
    ],
    "optionsAr": [
      "Vienna",
      "Yaoundé",
      "Amman",
      "Jakarta"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1089"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iran?",
    "ar": "ما عاصمة إيران؟",
    "options": [
      "Kathmandu",
      "Tokyo",
      "Quito",
      "Tehran"
    ],
    "optionsAr": [
      "Kathmandu",
      "Tokyo",
      "Quito",
      "Tehran"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1090"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Iraq?",
    "ar": "ما عاصمة العراق؟",
    "options": [
      "Baghdad",
      "Sarajevo",
      "Guatemala City",
      "Yerevan"
    ],
    "optionsAr": [
      "Baghdad",
      "Sarajevo",
      "Guatemala City",
      "Yerevan"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1091"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Ireland?",
    "ar": "ما عاصمة أيرلندا؟",
    "options": [
      "Luanda",
      "Jerusalem",
      "Dublin",
      "Ottawa"
    ],
    "optionsAr": [
      "Luanda",
      "Jerusalem",
      "Dublin",
      "Ottawa"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1092"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Israel?",
    "ar": "ما عاصمة إسرائيل؟",
    "options": [
      "Santo Domingo",
      "Jerusalem",
      "Baghdad",
      "Lima"
    ],
    "optionsAr": [
      "Santo Domingo",
      "Jerusalem",
      "Baghdad",
      "Lima"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1093"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Italy?",
    "ar": "ما عاصمة إيطاليا؟",
    "options": [
      "Rome",
      "Manila",
      "Kabul",
      "Kathmandu"
    ],
    "optionsAr": [
      "Rome",
      "Manila",
      "Kabul",
      "Kathmandu"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1094"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Japan?",
    "ar": "ما عاصمة اليابان؟",
    "options": [
      "Luanda",
      "Yerevan",
      "Copenhagen",
      "Tokyo"
    ],
    "optionsAr": [
      "Luanda",
      "Yerevan",
      "Copenhagen",
      "Tokyo"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1095"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Jordan?",
    "ar": "ما عاصمة الأردن؟",
    "options": [
      "Budapest",
      "Amman",
      "Kabul",
      "Sofia"
    ],
    "optionsAr": [
      "Budapest",
      "Amman",
      "Kabul",
      "Sofia"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1096"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kazakhstan?",
    "ar": "ما عاصمة كازاخستان؟",
    "options": [
      "Paris",
      "Astana",
      "Kuwait City",
      "Canberra"
    ],
    "optionsAr": [
      "Paris",
      "Astana",
      "Kuwait City",
      "Canberra"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1097"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kenya?",
    "ar": "ما عاصمة كينيا؟",
    "options": [
      "Nairobi",
      "New Delhi",
      "Jakarta",
      "Brussels"
    ],
    "optionsAr": [
      "Nairobi",
      "New Delhi",
      "Jakarta",
      "Brussels"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1098"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Kuwait?",
    "ar": "ما عاصمة الكويت؟",
    "options": [
      "Reykjavik",
      "Lima",
      "Ulan Bator",
      "Kuwait City"
    ],
    "optionsAr": [
      "Reykjavik",
      "Lima",
      "Ulan Bator",
      "Kuwait City"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1099"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Lebanon?",
    "ar": "ما عاصمة لبنان؟",
    "options": [
      "Kabul",
      "Algiers",
      "Tallinn",
      "Beirut"
    ],
    "optionsAr": [
      "Kabul",
      "Algiers",
      "Tallinn",
      "Beirut"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1100"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Malaysia?",
    "ar": "ما عاصمة ماليزيا؟",
    "options": [
      "Ottawa",
      "Kuala Lumpur",
      "Gaborone",
      "Muscat"
    ],
    "optionsAr": [
      "Ottawa",
      "Kuala Lumpur",
      "Gaborone",
      "Muscat"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1101"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Mexico?",
    "ar": "ما عاصمة المكسيك؟",
    "options": [
      "Lima",
      "Amman",
      "Mexico City",
      "Tirana"
    ],
    "optionsAr": [
      "Lima",
      "Amman",
      "Mexico City",
      "Tirana"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1102"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Mongolia?",
    "ar": "ما عاصمة منغوليا؟",
    "options": [
      "Rabat",
      "New Delhi",
      "Lima",
      "Ulan Bator"
    ],
    "optionsAr": [
      "Rabat",
      "New Delhi",
      "Lima",
      "Ulan Bator"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1103"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Morocco?",
    "ar": "ما عاصمة المغرب؟",
    "options": [
      "Reykjavik",
      "New Delhi",
      "Rabat",
      "Minsk"
    ],
    "optionsAr": [
      "Reykjavik",
      "New Delhi",
      "Rabat",
      "Minsk"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1104"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Nepal?",
    "ar": "ما عاصمة نيبال؟",
    "options": [
      "Muscat",
      "Tallinn",
      "Ulan Bator",
      "Kathmandu"
    ],
    "optionsAr": [
      "Muscat",
      "Tallinn",
      "Ulan Bator",
      "Kathmandu"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1105"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Netherlands?",
    "ar": "ما عاصمة هولندا؟",
    "options": [
      "Amsterdam",
      "Baku",
      "Paris",
      "Athens"
    ],
    "optionsAr": [
      "Amsterdam",
      "Baku",
      "Paris",
      "Athens"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1106"
  },
  {
    "category": "Geography",
    "en": "What is the capital of New Zealand?",
    "ar": "ما عاصمة نيوزيلندا؟",
    "options": [
      "Minsk",
      "Amsterdam",
      "Wellington",
      "New Delhi"
    ],
    "optionsAr": [
      "Minsk",
      "Amsterdam",
      "Wellington",
      "New Delhi"
    ],
    "answer": 2,
    "difficulty": "easy",
    "id": "question-1107"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Nigeria?",
    "ar": "ما عاصمة نيجيريا؟",
    "options": [
      "Lima",
      "Tallinn",
      "Quito",
      "Abuja"
    ],
    "optionsAr": [
      "Lima",
      "Tallinn",
      "Quito",
      "Abuja"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1108"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Norway?",
    "ar": "ما عاصمة النرويج؟",
    "options": [
      "Oslo",
      "Addis Ababa",
      "Yaoundé",
      "Accra"
    ],
    "optionsAr": [
      "Oslo",
      "Addis Ababa",
      "Yaoundé",
      "Accra"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1109"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Oman?",
    "ar": "ما عاصمة عُمان؟",
    "options": [
      "Muscat",
      "Rabat",
      "Budapest",
      "Addis Ababa"
    ],
    "optionsAr": [
      "Muscat",
      "Rabat",
      "Budapest",
      "Addis Ababa"
    ],
    "answer": 0,
    "difficulty": "easy",
    "id": "question-1110"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Pakistan?",
    "ar": "ما عاصمة باكستان؟",
    "options": [
      "Baghdad",
      "Jakarta",
      "Yaoundé",
      "Islamabad"
    ],
    "optionsAr": [
      "Baghdad",
      "Jakarta",
      "Yaoundé",
      "Islamabad"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1111"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Peru?",
    "ar": "ما عاصمة بيرو؟",
    "options": [
      "San José",
      "Lima",
      "Dhaka",
      "Zagreb"
    ],
    "optionsAr": [
      "San José",
      "Lima",
      "Dhaka",
      "Zagreb"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1112"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Philippines?",
    "ar": "ما عاصمة الفلبين؟",
    "options": [
      "Ottawa",
      "Manila",
      "Brussels",
      "Reykjavik"
    ],
    "optionsAr": [
      "Ottawa",
      "Manila",
      "Brussels",
      "Reykjavik"
    ],
    "answer": 1,
    "difficulty": "easy",
    "id": "question-1113"
  },
  {
    "category": "Geography",
    "en": "What is the capital of Poland?",
    "ar": "ما عاصمة بولندا؟",
    "options": [
      "Manila",
      "Santo Domingo",
      "Minsk",
      "Warsaw"
    ],
    "optionsAr": [
      "Manila",
      "Santo Domingo",
      "Minsk",
      "Warsaw"
    ],
    "answer": 3,
    "difficulty": "easy",
    "id": "question-1114"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Afghanistan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أفغانستان؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1115"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Albania part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ألبانيا؟",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "أفريقيا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1116"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Algeria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الجزائر؟",
    "options": [
      "Oceania",
      "Americas",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "الأمريكتان",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1117"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Angola part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أنغولا؟",
    "options": [
      "Africa",
      "Oceania",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوقيانوسيا",
      "الأمريكتان",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1118"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Argentina part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الأرجنتين؟",
    "options": [
      "Africa",
      "Asia",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1119"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Armenia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أرمينيا؟",
    "options": [
      "Asia",
      "Europe",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أوقيانوسيا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1120"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Australia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أستراليا؟",
    "options": [
      "Asia",
      "Africa",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "أوروبا",
      "أوقيانوسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1121"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Austria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي النمسا؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1122"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Azerbaijan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أذربيجان؟",
    "options": [
      "Asia",
      "Europe",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أوقيانوسيا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1123"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bangladesh part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بنغلاديش؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1124"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Belarus part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بيلاروس؟",
    "options": [
      "Europe",
      "Oceania",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "أوقيانوسيا",
      "أفريقيا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1125"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Belgium part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بلجيكا؟",
    "options": [
      "Americas",
      "Africa",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أفريقيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1126"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bolivia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بوليفيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Europe"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1127"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bosnia And Herzegovina part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي البوسنة والهرسك؟",
    "options": [
      "Asia",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوقيانوسيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1128"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Botswana part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بوتسوانا؟",
    "options": [
      "Asia",
      "Europe",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أفريقيا",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1129"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Brazil part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي البرازيل؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "الأمريكتان",
      "أوروبا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1130"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Bulgaria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بلغاريا؟",
    "options": [
      "Asia",
      "Europe",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوروبا",
      "أفريقيا",
      "الأمريكتان"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1131"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cambodia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كمبوديا؟",
    "options": [
      "Europe",
      "Americas",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "الأمريكتان",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1132"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cameroon part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الكاميرون؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1133"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Canada part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كندا؟",
    "options": [
      "Asia",
      "Africa",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "أوقيانوسيا",
      "الأمريكتان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1134"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Chile part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي تشيلي؟",
    "options": [
      "Africa",
      "Americas",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "الأمريكتان",
      "أوروبا",
      "أوقيانوسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1135"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is China part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الصين؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "الأمريكتان",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1136"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Colombia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كولومبيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1137"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Costa Rica part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كوستاريكا؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1138"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Croatia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كرواتيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Europe",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "أوروبا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1139"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cuba part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كوبا؟",
    "options": [
      "Europe",
      "Asia",
      "Oceania",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "أوقيانوسيا",
      "الأمريكتان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1140"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Cyprus part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي قبرص؟",
    "options": [
      "Europe",
      "Americas",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1141"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Denmark part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الدانمرك؟",
    "options": [
      "Europe",
      "Africa",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1142"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Dominican Republic part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي جمهورية الدومينيكان؟",
    "options": [
      "Oceania",
      "Americas",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "الأمريكتان",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1143"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ecuador part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الإكوادور؟",
    "options": [
      "Africa",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوقيانوسيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1144"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Egypt part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي مصر؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1145"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Estonia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إستونيا؟",
    "options": [
      "Oceania",
      "Asia",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "آسيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1146"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ethiopia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إثيوبيا؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "الأمريكتان",
      "أوروبا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1147"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Finland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي فنلندا؟",
    "options": [
      "Oceania",
      "Americas",
      "Europe",
      "Africa"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "الأمريكتان",
      "أوروبا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1148"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is France part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي فرنسا؟",
    "options": [
      "Americas",
      "Oceania",
      "Africa",
      "Europe"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "أفريقيا",
      "أوروبا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1149"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Georgia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي جورجيا؟",
    "options": [
      "Oceania",
      "Americas",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "الأمريكتان",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1150"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Germany part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ألمانيا؟",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "أفريقيا",
      "أوقيانوسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1151"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ghana part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي غانا؟",
    "options": [
      "Africa",
      "Europe",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوروبا",
      "أوقيانوسيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1152"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Greece part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي اليونان؟",
    "options": [
      "Americas",
      "Europe",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوروبا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1153"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Guatemala part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي غواتيمالا؟",
    "options": [
      "Oceania",
      "Africa",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "أفريقيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1154"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Hungary part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي هنغاريا؟",
    "options": [
      "Europe",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "أوقيانوسيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1155"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iceland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي آيسلندا؟",
    "options": [
      "Asia",
      "Africa",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "أفريقيا",
      "أوروبا",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1156"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is India part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الهند؟",
    "options": [
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "أوقيانوسيا",
      "أفريقيا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1157"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Indonesia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إندونيسيا؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1158"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iran part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إيران؟",
    "options": [
      "Americas",
      "Asia",
      "Africa",
      "Europe"
    ],
    "optionsAr": [
      "الأمريكتان",
      "آسيا",
      "أفريقيا",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1159"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Iraq part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي العراق؟",
    "options": [
      "Africa",
      "Asia",
      "Americas",
      "Europe"
    ],
    "optionsAr": [
      "أفريقيا",
      "آسيا",
      "الأمريكتان",
      "أوروبا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1160"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Ireland part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي أيرلندا؟",
    "options": [
      "Europe",
      "Oceania",
      "Asia",
      "Americas"
    ],
    "optionsAr": [
      "أوروبا",
      "أوقيانوسيا",
      "آسيا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1161"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Israel part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إسرائيل؟",
    "options": [
      "Oceania",
      "Europe",
      "Americas",
      "Asia"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "أوروبا",
      "الأمريكتان",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1162"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Italy part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي إيطاليا؟",
    "options": [
      "Europe",
      "Africa",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "أوروبا",
      "أفريقيا",
      "أوقيانوسيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1163"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Japan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي اليابان؟",
    "options": [
      "Americas",
      "Oceania",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1164"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Jordan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الأردن؟",
    "options": [
      "Asia",
      "Oceania",
      "Europe",
      "Americas"
    ],
    "optionsAr": [
      "آسيا",
      "أوقيانوسيا",
      "أوروبا",
      "الأمريكتان"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1165"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kazakhstan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كازاخستان؟",
    "options": [
      "Asia",
      "Americas",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "آسيا",
      "الأمريكتان",
      "أفريقيا",
      "أوقيانوسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1166"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kenya part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي كينيا؟",
    "options": [
      "Americas",
      "Europe",
      "Africa",
      "Oceania"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوروبا",
      "أفريقيا",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1167"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Kuwait part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الكويت؟",
    "options": [
      "Europe",
      "Asia",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1168"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Lebanon part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي لبنان؟",
    "options": [
      "Europe",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "أوروبا",
      "آسيا",
      "الأمريكتان",
      "أفريقيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1169"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Malaysia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي ماليزيا؟",
    "options": [
      "Africa",
      "Americas",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "الأمريكتان",
      "آسيا",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1170"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Mexico part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي المكسيك؟",
    "options": [
      "Americas",
      "Africa",
      "Oceania",
      "Asia"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أفريقيا",
      "أوقيانوسيا",
      "آسيا"
    ],
    "answer": 0,
    "difficulty": "medium",
    "id": "question-1171"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Mongolia part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي منغوليا؟",
    "options": [
      "Americas",
      "Asia",
      "Oceania",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "آسيا",
      "أوقيانوسيا",
      "أفريقيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1172"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Morocco part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي المغرب؟",
    "options": [
      "Americas",
      "Africa",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أفريقيا",
      "آسيا",
      "أوقيانوسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1173"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Nepal part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيبال؟",
    "options": [
      "Americas",
      "Asia",
      "Europe",
      "Oceania"
    ],
    "optionsAr": [
      "الأمريكتان",
      "آسيا",
      "أوروبا",
      "أوقيانوسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1174"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Netherlands part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي هولندا؟",
    "options": [
      "Oceania",
      "Europe",
      "Africa",
      "Americas"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "أوروبا",
      "أفريقيا",
      "الأمريكتان"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1175"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is New Zealand part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيوزيلندا؟",
    "options": [
      "Americas",
      "Asia",
      "Oceania",
      "Europe"
    ],
    "optionsAr": [
      "الأمريكتان",
      "آسيا",
      "أوقيانوسيا",
      "أوروبا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1176"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Nigeria part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي نيجيريا؟",
    "options": [
      "Oceania",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "آسيا",
      "الأمريكتان",
      "أفريقيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1177"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Norway part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي النرويج؟",
    "options": [
      "Africa",
      "Europe",
      "Americas",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "أوروبا",
      "الأمريكتان",
      "أوقيانوسيا"
    ],
    "answer": 1,
    "difficulty": "medium",
    "id": "question-1178"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Oman part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي عُمان؟",
    "options": [
      "Americas",
      "Oceania",
      "Asia",
      "Africa"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أوقيانوسيا",
      "آسيا",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1179"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Pakistan part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي باكستان؟",
    "options": [
      "Africa",
      "Americas",
      "Asia",
      "Oceania"
    ],
    "optionsAr": [
      "أفريقيا",
      "الأمريكتان",
      "آسيا",
      "أوقيانوسيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1180"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Peru part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي بيرو؟",
    "options": [
      "Oceania",
      "Asia",
      "Americas",
      "Africa"
    ],
    "optionsAr": [
      "أوقيانوسيا",
      "آسيا",
      "الأمريكتان",
      "أفريقيا"
    ],
    "answer": 2,
    "difficulty": "medium",
    "id": "question-1181"
  },
  {
    "category": "Geography",
    "en": "Which broad world region is Philippines part of?",
    "ar": "إلى أي منطقة جغرافية واسعة تنتمي الفلبين؟",
    "options": [
      "Americas",
      "Africa",
      "Europe",
      "Asia"
    ],
    "optionsAr": [
      "الأمريكتان",
      "أفريقيا",
      "أوروبا",
      "آسيا"
    ],
    "answer": 3,
    "difficulty": "medium",
    "id": "question-1182"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Afghanistan?",
    "ar": "ما رمز العملة المتداولة رسميًا في أفغانستان؟",
    "options": [
      "DOP",
      "AFN",
      "EUR",
      "KWD"
    ],
    "optionsAr": [
      "بيزو الدومنيكان",
      "أفغاني",
      "يورو",
      "دينار كويتي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1183"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Albania?",
    "ar": "ما رمز العملة المتداولة رسميًا في ألبانيا؟",
    "options": [
      "CNY",
      "ALL",
      "GTQ",
      "NGN"
    ],
    "optionsAr": [
      "يوان صيني",
      "ليك ألباني",
      "كوتزال غواتيمالا",
      "نايرا نيجيري"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1184"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Algeria?",
    "ar": "ما رمز العملة المتداولة رسميًا في الجزائر؟",
    "options": [
      "MYR",
      "ISK",
      "DZD",
      "BRL"
    ],
    "optionsAr": [
      "رينغيت ماليزي",
      "كرونة أيسلندية",
      "دينار جزائري",
      "ريال برازيلي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1185"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Angola?",
    "ar": "ما رمز العملة المتداولة رسميًا في أنغولا؟",
    "options": [
      "DZD",
      "NPR",
      "AOA",
      "PHP"
    ],
    "optionsAr": [
      "دينار جزائري",
      "روبية نيبالي",
      "كوانزا أنغولي",
      "بيزو فلبيني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1186"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Argentina?",
    "ar": "ما رمز العملة المتداولة رسميًا في الأرجنتين؟",
    "options": [
      "IDR",
      "AOA",
      "ARS",
      "ETB"
    ],
    "optionsAr": [
      "روبية إندونيسية",
      "كوانزا أنغولي",
      "بيزو أرجنتيني",
      "بير أثيوبي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1187"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Armenia?",
    "ar": "ما رمز العملة المتداولة رسميًا في أرمينيا؟",
    "options": [
      "AMD",
      "KHR",
      "MAD",
      "AZN"
    ],
    "optionsAr": [
      "درام أرميني",
      "رييال كمبودي",
      "درهم مغربي",
      "مانات أذربيجان"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1188"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Australia?",
    "ar": "ما رمز العملة المتداولة رسميًا في أستراليا؟",
    "options": [
      "KHR",
      "AUD",
      "DOP",
      "PEN"
    ],
    "optionsAr": [
      "رييال كمبودي",
      "دولار أسترالي",
      "بيزو الدومنيكان",
      "سول بيروفي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1189"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Austria?",
    "ar": "ما رمز العملة المتداولة رسميًا في النمسا؟",
    "options": [
      "BWP",
      "AMD",
      "EUR",
      "DOP"
    ],
    "optionsAr": [
      "بولا بتسواني",
      "درام أرميني",
      "يورو",
      "بيزو الدومنيكان"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1190"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Azerbaijan?",
    "ar": "ما رمز العملة المتداولة رسميًا في أذربيجان؟",
    "options": [
      "LBP",
      "DKK",
      "PLN",
      "AZN"
    ],
    "optionsAr": [
      "جنيه لبناني",
      "كرونة دنماركية",
      "زلوتي بولندي",
      "مانات أذربيجان"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1191"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bangladesh?",
    "ar": "ما رمز العملة المتداولة رسميًا في بنغلاديش؟",
    "options": [
      "ILS",
      "ARS",
      "KHR",
      "BDT"
    ],
    "optionsAr": [
      "شيكل إسرائيلي جديد",
      "بيزو أرجنتيني",
      "رييال كمبودي",
      "تاكا بنغلاديشي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1192"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Belarus?",
    "ar": "ما رمز العملة المتداولة رسميًا في بيلاروس؟",
    "options": [
      "NPR",
      "NZD",
      "BYR",
      "GHS"
    ],
    "optionsAr": [
      "روبية نيبالي",
      "دولار نيوزيلندي",
      "روبل بيلاروسي (٢٠٠٠–٢٠١٦)",
      "سيدي غانا"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1193"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Belgium?",
    "ar": "ما رمز العملة المتداولة رسميًا في بلجيكا؟",
    "options": [
      "ISK",
      "DOP",
      "LBP",
      "EUR"
    ],
    "optionsAr": [
      "كرونة أيسلندية",
      "بيزو الدومنيكان",
      "جنيه لبناني",
      "يورو"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1194"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bolivia?",
    "ar": "ما رمز العملة المتداولة رسميًا في بوليفيا؟",
    "options": [
      "KHR",
      "NGN",
      "BOB",
      "PLN"
    ],
    "optionsAr": [
      "رييال كمبودي",
      "نايرا نيجيري",
      "بوليفيانو بوليفي",
      "زلوتي بولندي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1195"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bosnia And Herzegovina?",
    "ar": "ما رمز العملة المتداولة رسميًا في البوسنة والهرسك؟",
    "options": [
      "GEL",
      "AOA",
      "LBP",
      "BAM"
    ],
    "optionsAr": [
      "لارى جورجي",
      "كوانزا أنغولي",
      "جنيه لبناني",
      "مارك البوسنة والهرسك قابل للتحويل"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1196"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Botswana?",
    "ar": "ما رمز العملة المتداولة رسميًا في بوتسوانا؟",
    "options": [
      "BWP",
      "IQD",
      "ETB",
      "EUR"
    ],
    "optionsAr": [
      "بولا بتسواني",
      "دينار عراقي",
      "بير أثيوبي",
      "يورو"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1197"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Brazil?",
    "ar": "ما رمز العملة المتداولة رسميًا في البرازيل؟",
    "options": [
      "DKK",
      "GTQ",
      "HUF",
      "BRL"
    ],
    "optionsAr": [
      "كرونة دنماركية",
      "كوتزال غواتيمالا",
      "فورينت هنغاري",
      "ريال برازيلي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1198"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Bulgaria?",
    "ar": "ما رمز العملة المتداولة رسميًا في بلغاريا؟",
    "options": [
      "BGN",
      "PEN",
      "ALL",
      "CUC"
    ],
    "optionsAr": [
      "ليف بلغاري",
      "سول بيروفي",
      "ليك ألباني",
      "بيزو كوبي قابل للتحويل"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1199"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cambodia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كمبوديا؟",
    "options": [
      "MXN",
      "KZT",
      "KHR",
      "ETB"
    ],
    "optionsAr": [
      "بيزو مكسيكي",
      "تينغ كازاخستاني",
      "رييال كمبودي",
      "بير أثيوبي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1200"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cameroon?",
    "ar": "ما رمز العملة المتداولة رسميًا في الكاميرون؟",
    "options": [
      "ISK",
      "MYR",
      "XAF",
      "PEN"
    ],
    "optionsAr": [
      "كرونة أيسلندية",
      "رينغيت ماليزي",
      "فرنك وسط أفريقي",
      "سول بيروفي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1201"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Canada?",
    "ar": "ما رمز العملة المتداولة رسميًا في كندا؟",
    "options": [
      "CAD",
      "NZD",
      "NGN",
      "BWP"
    ],
    "optionsAr": [
      "دولار كندي",
      "دولار نيوزيلندي",
      "نايرا نيجيري",
      "بولا بتسواني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1202"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Chile?",
    "ar": "ما رمز العملة المتداولة رسميًا في تشيلي؟",
    "options": [
      "BGN",
      "BRL",
      "DKK",
      "CLF"
    ],
    "optionsAr": [
      "ليف بلغاري",
      "ريال برازيلي",
      "كرونة دنماركية",
      "CLF"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1203"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of China?",
    "ar": "ما رمز العملة المتداولة رسميًا في الصين؟",
    "options": [
      "CNY",
      "JPY",
      "BRL",
      "ALL"
    ],
    "optionsAr": [
      "يوان صيني",
      "ين ياباني",
      "ريال برازيلي",
      "ليك ألباني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1204"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Colombia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كولومبيا؟",
    "options": [
      "COP",
      "KZT",
      "USD",
      "AMD"
    ],
    "optionsAr": [
      "بيزو كولومبي",
      "تينغ كازاخستاني",
      "دولار أمريكي",
      "درام أرميني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1205"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Costa Rica?",
    "ar": "ما رمز العملة المتداولة رسميًا في كوستاريكا؟",
    "options": [
      "CNY",
      "ISK",
      "CRC",
      "KES"
    ],
    "optionsAr": [
      "يوان صيني",
      "كرونة أيسلندية",
      "كولن كوستاريكي",
      "شلن كينيي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1206"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Croatia?",
    "ar": "ما رمز العملة المتداولة رسميًا في كرواتيا؟",
    "options": [
      "HRK",
      "CUC",
      "GHS",
      "ETB"
    ],
    "optionsAr": [
      "كونا كرواتي",
      "بيزو كوبي قابل للتحويل",
      "سيدي غانا",
      "بير أثيوبي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1207"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cuba?",
    "ar": "ما رمز العملة المتداولة رسميًا في كوبا؟",
    "options": [
      "PKR",
      "PHP",
      "CUC",
      "CRC"
    ],
    "optionsAr": [
      "روبية باكستاني",
      "بيزو فلبيني",
      "بيزو كوبي قابل للتحويل",
      "كولن كوستاريكي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1208"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Cyprus?",
    "ar": "ما رمز العملة المتداولة رسميًا في قبرص؟",
    "options": [
      "XAF",
      "ISK",
      "EUR",
      "JPY"
    ],
    "optionsAr": [
      "فرنك وسط أفريقي",
      "كرونة أيسلندية",
      "يورو",
      "ين ياباني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1209"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Denmark?",
    "ar": "ما رمز العملة المتداولة رسميًا في الدانمرك؟",
    "options": [
      "DKK",
      "NGN",
      "PEN",
      "CLF"
    ],
    "optionsAr": [
      "كرونة دنماركية",
      "نايرا نيجيري",
      "سول بيروفي",
      "CLF"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1210"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Dominican Republic?",
    "ar": "ما رمز العملة المتداولة رسميًا في جمهورية الدومينيكان؟",
    "options": [
      "AZN",
      "DOP",
      "PKR",
      "NPR"
    ],
    "optionsAr": [
      "مانات أذربيجان",
      "بيزو الدومنيكان",
      "روبية باكستاني",
      "روبية نيبالي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1211"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ecuador?",
    "ar": "ما رمز العملة المتداولة رسميًا في الإكوادور؟",
    "options": [
      "DKK",
      "USD",
      "PKR",
      "ILS"
    ],
    "optionsAr": [
      "كرونة دنماركية",
      "دولار أمريكي",
      "روبية باكستاني",
      "شيكل إسرائيلي جديد"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1212"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Egypt?",
    "ar": "ما رمز العملة المتداولة رسميًا في مصر؟",
    "options": [
      "COP",
      "CNY",
      "EGP",
      "BYR"
    ],
    "optionsAr": [
      "بيزو كولومبي",
      "يوان صيني",
      "جنيه مصري",
      "روبل بيلاروسي (٢٠٠٠–٢٠١٦)"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1213"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Estonia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إستونيا؟",
    "options": [
      "OMR",
      "EUR",
      "BOB",
      "USD"
    ],
    "optionsAr": [
      "ريال عماني",
      "يورو",
      "بوليفيانو بوليفي",
      "دولار أمريكي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1214"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ethiopia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إثيوبيا؟",
    "options": [
      "GEL",
      "BYR",
      "ETB",
      "BWP"
    ],
    "optionsAr": [
      "لارى جورجي",
      "روبل بيلاروسي (٢٠٠٠–٢٠١٦)",
      "بير أثيوبي",
      "بولا بتسواني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1215"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Finland?",
    "ar": "ما رمز العملة المتداولة رسميًا في فنلندا؟",
    "options": [
      "EUR",
      "AUD",
      "ILS",
      "KZT"
    ],
    "optionsAr": [
      "يورو",
      "دولار أسترالي",
      "شيكل إسرائيلي جديد",
      "تينغ كازاخستاني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1216"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of France?",
    "ar": "ما رمز العملة المتداولة رسميًا في فرنسا؟",
    "options": [
      "COP",
      "EUR",
      "XAF",
      "BRL"
    ],
    "optionsAr": [
      "بيزو كولومبي",
      "يورو",
      "فرنك وسط أفريقي",
      "ريال برازيلي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1217"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Georgia?",
    "ar": "ما رمز العملة المتداولة رسميًا في جورجيا؟",
    "options": [
      "PHP",
      "GHS",
      "GEL",
      "AZN"
    ],
    "optionsAr": [
      "بيزو فلبيني",
      "سيدي غانا",
      "لارى جورجي",
      "مانات أذربيجان"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1218"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Germany?",
    "ar": "ما رمز العملة المتداولة رسميًا في ألمانيا؟",
    "options": [
      "EUR",
      "IRR",
      "INR",
      "AOA"
    ],
    "optionsAr": [
      "يورو",
      "ريال إيراني",
      "روبية هندي",
      "كوانزا أنغولي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1219"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ghana?",
    "ar": "ما رمز العملة المتداولة رسميًا في غانا؟",
    "options": [
      "OMR",
      "GTQ",
      "GHS",
      "CUC"
    ],
    "optionsAr": [
      "ريال عماني",
      "كوتزال غواتيمالا",
      "سيدي غانا",
      "بيزو كوبي قابل للتحويل"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1220"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Greece?",
    "ar": "ما رمز العملة المتداولة رسميًا في اليونان؟",
    "options": [
      "IQD",
      "EUR",
      "USD",
      "PLN"
    ],
    "optionsAr": [
      "دينار عراقي",
      "يورو",
      "دولار أمريكي",
      "زلوتي بولندي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1221"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Guatemala?",
    "ar": "ما رمز العملة المتداولة رسميًا في غواتيمالا؟",
    "options": [
      "JOD",
      "PEN",
      "GTQ",
      "PHP"
    ],
    "optionsAr": [
      "دينار أردني",
      "سول بيروفي",
      "كوتزال غواتيمالا",
      "بيزو فلبيني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1222"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Hungary?",
    "ar": "ما رمز العملة المتداولة رسميًا في هنغاريا؟",
    "options": [
      "HUF",
      "BRL",
      "BOB",
      "NGN"
    ],
    "optionsAr": [
      "فورينت هنغاري",
      "ريال برازيلي",
      "بوليفيانو بوليفي",
      "نايرا نيجيري"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1223"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iceland?",
    "ar": "ما رمز العملة المتداولة رسميًا في آيسلندا؟",
    "options": [
      "BWP",
      "ISK",
      "KZT",
      "HRK"
    ],
    "optionsAr": [
      "بولا بتسواني",
      "كرونة أيسلندية",
      "تينغ كازاخستاني",
      "كونا كرواتي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1224"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of India?",
    "ar": "ما رمز العملة المتداولة رسميًا في الهند؟",
    "options": [
      "CLF",
      "XAF",
      "INR",
      "KHR"
    ],
    "optionsAr": [
      "CLF",
      "فرنك وسط أفريقي",
      "روبية هندي",
      "رييال كمبودي"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1225"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Indonesia?",
    "ar": "ما رمز العملة المتداولة رسميًا في إندونيسيا؟",
    "options": [
      "IDR",
      "INR",
      "PEN",
      "CAD"
    ],
    "optionsAr": [
      "روبية إندونيسية",
      "روبية هندي",
      "سول بيروفي",
      "دولار كندي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1226"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iran?",
    "ar": "ما رمز العملة المتداولة رسميًا في إيران؟",
    "options": [
      "BOB",
      "GTQ",
      "LBP",
      "IRR"
    ],
    "optionsAr": [
      "بوليفيانو بوليفي",
      "كوتزال غواتيمالا",
      "جنيه لبناني",
      "ريال إيراني"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1227"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Iraq?",
    "ar": "ما رمز العملة المتداولة رسميًا في العراق؟",
    "options": [
      "NGN",
      "MXN",
      "AMD",
      "IQD"
    ],
    "optionsAr": [
      "نايرا نيجيري",
      "بيزو مكسيكي",
      "درام أرميني",
      "دينار عراقي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1228"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Ireland?",
    "ar": "ما رمز العملة المتداولة رسميًا في أيرلندا؟",
    "options": [
      "BRL",
      "KES",
      "JOD",
      "EUR"
    ],
    "optionsAr": [
      "ريال برازيلي",
      "شلن كينيي",
      "دينار أردني",
      "يورو"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1229"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Israel?",
    "ar": "ما رمز العملة المتداولة رسميًا في إسرائيل؟",
    "options": [
      "CAD",
      "ILS",
      "ISK",
      "PEN"
    ],
    "optionsAr": [
      "دولار كندي",
      "شيكل إسرائيلي جديد",
      "كرونة أيسلندية",
      "سول بيروفي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1230"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Italy?",
    "ar": "ما رمز العملة المتداولة رسميًا في إيطاليا؟",
    "options": [
      "EUR",
      "ALL",
      "HUF",
      "GEL"
    ],
    "optionsAr": [
      "يورو",
      "ليك ألباني",
      "فورينت هنغاري",
      "لارى جورجي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1231"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Japan?",
    "ar": "ما رمز العملة المتداولة رسميًا في اليابان؟",
    "options": [
      "JPY",
      "NZD",
      "KHR",
      "HRK"
    ],
    "optionsAr": [
      "ين ياباني",
      "دولار نيوزيلندي",
      "رييال كمبودي",
      "كونا كرواتي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1232"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Jordan?",
    "ar": "ما رمز العملة المتداولة رسميًا في الأردن؟",
    "options": [
      "GHS",
      "IQD",
      "JOD",
      "PKR"
    ],
    "optionsAr": [
      "سيدي غانا",
      "دينار عراقي",
      "دينار أردني",
      "روبية باكستاني"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1233"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kazakhstan?",
    "ar": "ما رمز العملة المتداولة رسميًا في كازاخستان؟",
    "options": [
      "COP",
      "KWD",
      "ALL",
      "KZT"
    ],
    "optionsAr": [
      "بيزو كولومبي",
      "دينار كويتي",
      "ليك ألباني",
      "تينغ كازاخستاني"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1234"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kenya?",
    "ar": "ما رمز العملة المتداولة رسميًا في كينيا؟",
    "options": [
      "ALL",
      "OMR",
      "KES",
      "ILS"
    ],
    "optionsAr": [
      "ليك ألباني",
      "ريال عماني",
      "شلن كينيي",
      "شيكل إسرائيلي جديد"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1235"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Kuwait?",
    "ar": "ما رمز العملة المتداولة رسميًا في الكويت؟",
    "options": [
      "NOK",
      "CLF",
      "PHP",
      "KWD"
    ],
    "optionsAr": [
      "كرونة نرويجية",
      "CLF",
      "بيزو فلبيني",
      "دينار كويتي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1236"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Lebanon?",
    "ar": "ما رمز العملة المتداولة رسميًا في لبنان؟",
    "options": [
      "PEN",
      "DKK",
      "BDT",
      "LBP"
    ],
    "optionsAr": [
      "سول بيروفي",
      "كرونة دنماركية",
      "تاكا بنغلاديشي",
      "جنيه لبناني"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1237"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Malaysia?",
    "ar": "ما رمز العملة المتداولة رسميًا في ماليزيا؟",
    "options": [
      "KES",
      "MXN",
      "DZD",
      "MYR"
    ],
    "optionsAr": [
      "شلن كينيي",
      "بيزو مكسيكي",
      "دينار جزائري",
      "رينغيت ماليزي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1238"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Mexico?",
    "ar": "ما رمز العملة المتداولة رسميًا في المكسيك؟",
    "options": [
      "HUF",
      "AOA",
      "MXN",
      "GTQ"
    ],
    "optionsAr": [
      "فورينت هنغاري",
      "كوانزا أنغولي",
      "بيزو مكسيكي",
      "كوتزال غواتيمالا"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1239"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Mongolia?",
    "ar": "ما رمز العملة المتداولة رسميًا في منغوليا؟",
    "options": [
      "MNT",
      "NPR",
      "KHR",
      "BOB"
    ],
    "optionsAr": [
      "توغروغ منغولي",
      "روبية نيبالي",
      "رييال كمبودي",
      "بوليفيانو بوليفي"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1240"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Morocco?",
    "ar": "ما رمز العملة المتداولة رسميًا في المغرب؟",
    "options": [
      "NOK",
      "AUD",
      "MAD",
      "HUF"
    ],
    "optionsAr": [
      "كرونة نرويجية",
      "دولار أسترالي",
      "درهم مغربي",
      "فورينت هنغاري"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1241"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Nepal?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيبال؟",
    "options": [
      "NPR",
      "AUD",
      "KZT",
      "BGN"
    ],
    "optionsAr": [
      "روبية نيبالي",
      "دولار أسترالي",
      "تينغ كازاخستاني",
      "ليف بلغاري"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1242"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Netherlands?",
    "ar": "ما رمز العملة المتداولة رسميًا في هولندا؟",
    "options": [
      "EUR",
      "AUD",
      "EGP",
      "ALL"
    ],
    "optionsAr": [
      "يورو",
      "دولار أسترالي",
      "جنيه مصري",
      "ليك ألباني"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1243"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of New Zealand?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيوزيلندا؟",
    "options": [
      "CAD",
      "EUR",
      "NZD",
      "BYR"
    ],
    "optionsAr": [
      "دولار كندي",
      "يورو",
      "دولار نيوزيلندي",
      "روبل بيلاروسي (٢٠٠٠–٢٠١٦)"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1244"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Nigeria?",
    "ar": "ما رمز العملة المتداولة رسميًا في نيجيريا؟",
    "options": [
      "DOP",
      "NGN",
      "CNY",
      "PEN"
    ],
    "optionsAr": [
      "بيزو الدومنيكان",
      "نايرا نيجيري",
      "يوان صيني",
      "سول بيروفي"
    ],
    "answer": 1,
    "difficulty": "hard",
    "id": "question-1245"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Norway?",
    "ar": "ما رمز العملة المتداولة رسميًا في النرويج؟",
    "options": [
      "EGP",
      "PLN",
      "BRL",
      "NOK"
    ],
    "optionsAr": [
      "جنيه مصري",
      "زلوتي بولندي",
      "ريال برازيلي",
      "كرونة نرويجية"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1246"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Oman?",
    "ar": "ما رمز العملة المتداولة رسميًا في عُمان؟",
    "options": [
      "OMR",
      "PKR",
      "IQD",
      "ILS"
    ],
    "optionsAr": [
      "ريال عماني",
      "روبية باكستاني",
      "دينار عراقي",
      "شيكل إسرائيلي جديد"
    ],
    "answer": 0,
    "difficulty": "hard",
    "id": "question-1247"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Pakistan?",
    "ar": "ما رمز العملة المتداولة رسميًا في باكستان؟",
    "options": [
      "GTQ",
      "MYR",
      "USD",
      "PKR"
    ],
    "optionsAr": [
      "كوتزال غواتيمالا",
      "رينغيت ماليزي",
      "دولار أمريكي",
      "روبية باكستاني"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1248"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Peru?",
    "ar": "ما رمز العملة المتداولة رسميًا في بيرو؟",
    "options": [
      "KES",
      "AOA",
      "CNY",
      "PEN"
    ],
    "optionsAr": [
      "شلن كينيي",
      "كوانزا أنغولي",
      "يوان صيني",
      "سول بيروفي"
    ],
    "answer": 3,
    "difficulty": "hard",
    "id": "question-1249"
  },
  {
    "category": "Geography",
    "en": "Which currency code is used for the official currency of Philippines?",
    "ar": "ما رمز العملة المتداولة رسميًا في الفلبين؟",
    "options": [
      "GTQ",
      "IQD",
      "PHP",
      "BGN"
    ],
    "optionsAr": [
      "كوتزال غواتيمالا",
      "دينار عراقي",
      "بيزو فلبيني",
      "ليف بلغاري"
    ],
    "answer": 2,
    "difficulty": "hard",
    "id": "question-1250"
  }
];

module.exports = questions;
