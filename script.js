const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

console.log(array2);




// task 2

function averageOfEvenNumbers(numbers) {
    
    const evenNumbers = numbers.filter(number => number % 2 === 0);
  
    
    const sumOfEvenNumbers = evenNumbers.reduce((acc, number) => acc + number, 0);
  
    
    if (evenNumbers.length === 0) {
      return 0; 
    }
  
    
    const average = sumOfEvenNumbers / evenNumbers.length;
    return average;
  }
  
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = averageOfEvenNumbers(numbers);
  console.log(result);




// task 3
  function findLongestWord(words) {
    if (words.length === 0) {
      return null; 
    }
  
   
    const longestWord = words.reduce((longest, current) => {
      if (current.length > longest.length) {
        return current;
      } else {
        return longest;
      }
    }, words[0]); 
  
    return longestWord;
  }
  
  // Example usage:
  const wordArray = ["apple", "banana", "cherry", "date"];
  const result = findLongestWord(wordArray);
  console.log(result);


// task 4
  function averagePagesPerBook(books) {
    if (books.length === 0) {
      return 0; 
    }
  
   
    const pageCounts = books.map(book => book.pages);
  
    
    const totalPageCount = pageCounts.reduce((acc, pageCount) => acc + pageCount, 0);
  
   
    const average = totalPageCount / books.length;
    return average;
  }
  
 
  const books = [
    { title: "Book 1", author: "Author 1", pages: 100 },
    { title: "Book 2", author: "Author 2", pages: 200 },
    { title: "Book 3", author: "Author 3", pages: 150 },
  ];
  
  const result = averagePagesPerBook(books);
  console.log(result);




// task 5

  function countStringFrequency(strings) {
   
    const frequencyObject = strings.reduce((frequency, currentString) => {
      if (frequency[currentString]) {
        frequency[currentString]++;
      } else {
        frequency[currentString] = 1;
      }
      return frequency;
    }, {});
  
    return frequencyObject;
  }
  
  
  const inputArray = ["hello", "world", "hello"];
  const result = countStringFrequency(inputArray);
  console.log(result);





  function countPeopleByCity(people) {
    // Use reduce to count the number of people by city
    
   
  const countByCity = people.reduce((cityCounts, person) => {
      
     
  const city = person.city;
      if (cityCounts[city]) {
        cityCounts[city]++;
      } 
        cityCounts[city]++;
  else {
        cityCounts[city] = 
       
  1;
      }
      
      }
     
  return cityCounts;
    }, {});
  
    return countByCity;
  }
  
  // Example usage:
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { 
    {
  name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const result = countPeopleByCity(people);
  console.log(result);


