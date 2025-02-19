// Global array to store all quiz questions
const mainQuizArray = [];


// Function to merge a given quiz array into mainQuizArray
function addToMainQuizArray(cityQuizArray) {
  mainQuizArray.push(...cityQuizArray);
}

// Function to pick 10 unique random quiz questions from mainQuizArray

function getRandomQuizArray(array, count = 10) {
  // If array is smaller than requested count, return entire array
  if (array.length < count) return array;

  // Set to track selected indices
  const selectedIndices = new Set();
  const result = [];

  while (result.length < count) {
    // Generate random index
    //console.log(Math.random() * array.length , array.length)
    const randomIndex = Math.floor(Math.random() * array.length);
    
    // Only add if this index hasn't been selected before
    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      result.push({qid: `q${result.length + 1}`,...array[randomIndex]});
      //console.log(selectedIndices )
    }
  }

  return result;
}

// Function to match imageId from randomQuizArray with imageArray and add imageUrl

function addImagesToQuiz(randomQuizArray, imageArray) {
  randomQuizArray.forEach((quiz) => {
    const imageMatch = imageArray.find((img) => img.imageId === quiz.imageId);
    if (imageMatch) {
      quiz.imageUrl = imageMatch.imageUrl;
    }
  });
  return randomQuizArray
}

const imageArray = [
  {
    city: "Kolkata",
    imageId: "kol435678",
    imageUrl: "https://cdn.thewire.in/wp-content/uploads/2018/08/17185655/VMH_Johnston-and-Hoffmann_047-1024x724.jpg",
    description: "Calcutta High Court"
  },
  {
    city: "Kolkata",
    imageId: "kol123456",
    imageUrl: "https://cdn.thewire.in/wp-content/uploads/2018/08/18105753/VMH_Bourne-and-Shepherd_007-1024x836.jpg",
    description: "Chowringhee Road"
  },
  {
    city: "Kolkata",
    imageId: "kol789012",
    imageUrl: "https://cdn.thewire.in/wp-content/uploads/2018/08/18105338/VMH_Bourne-and-Shepherd_005-1024x810.jpg",
    description: "New Market"
  },
  {
    city: "Kolkata",
    imageId: "kol345678",
    imageUrl: "https://cdn.thewire.in/wp-content/uploads/2018/08/18111211/VMH_Johnston-and-Hoffmann_034-1024x744.jpg",
    description: "Serampore College"
  },
  {
    city: "Delhi",
    imageId: "del435678",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chandni_Chowk%2C_Delhi%2C_1863-67.jpg/1024px-Chandni_Chowk%2C_Delhi%2C_1863-67.jpg",
    description: "Chandni Chowk"
  },
  {
    city: "Delhi",
    imageId: "del987654",
    imageUrl: "https://static2.tripoto.com/media/travel-story/394_10.jpg",
    description: "Mughal Garden"
  },
  {
    city: "Delhi",
    imageId: "del567890",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/07/DSC_0714wl.jpg",
    description: "Taj Mahal"
  },
  {
    city: "Delhi",
    imageId: "del123789",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2020/03/0New-Doc-2020-03-07-13.37.24_31.jpg",
    description: "Jama Masjid"
  },
  {
    city: "Mumbai",
    imageId: "mum456789",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/01/DSC_0342wl-1.jpg",
    description: "Chhatrapati Shivaji Terminus"
  },
  {
    city: "Mumbai",
    imageId: "mum234567",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/09/DSC_0112.jpg",
    description: "Bhendi Bazaar"
  },
  {
    city: "Mumbai",
    imageId: "mum890123",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/12/DSC_0725wl4.jpg",
    description: "Gateway of India"
  },
  {
    city: "Mumbai",
    imageId: "mum678901",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/04/0DSC_0432b-800x638a.jpg",
    description: "Elephanta Caves"
  }
];

// Kolkata Quiz Questions
const kolkataQuizQuestions = [
  {
    id: 1,
    imageId: "kol435678",
    question: "Which is the oldest high court in India?",
    options: ["Bombay High Court", "Calcutta High Court", "Madras High Court", "Delhi High Court"],
    correctAnswer: "Calcutta High Court"
  },
  {
    id: 2,
    imageId: "kol123456",
    question: "What was the commercial heart of Kolkata in late 1800s?",
    options: ["Park Street", "Chowringhee Road", "Gariahat Road", "AJC Bose Road"],
    correctAnswer: "Chowringhee Road"
  },
  {
    id: 3,
    imageId: "kol789012",
    question: "Where do people go for puja shopping in Kolkata?",
    options: ["New Market", "College Street", "Burrabazar", "Hatibagan Market"],
    correctAnswer: "New Market (earlier Hogg Market)"
  },
  {
    id: 4,
    imageId: "kol345678",
    question: "Which is the fourth oldest college in India?",
    options: ["Presidency College", "Scottish Church College", "Serampore College", "St. Xavier's College"],
    correctAnswer: "Serampore College"
  }
];

// Delhi Quiz Questions
const delhiQuizQuestions = [
  {
    id: 1,
    imageId: "del435678",
    question: "Where was Anjali's home in the movie Kabhi Khushi Kabhie Gham?",
    options: ["Connaught Place", "Chandni Chowk", "Nehru Place", "Khan Market"],
    correctAnswer: "Chandni Chowk"
  },
  {
    id: 2,
    imageId: "del987654",
    question: "What is the garden of the first citizen of India called?",
    options: ["Presidential Gardens", "Mughal Garden", "Rashtrapati Bhavan Gardens", "Delhi Gardens"],
    correctAnswer: "Mughal Garden (Now Amrit Udyan)"
  },
  {
    id: 3,
    imageId: "del567890",
    question: "Which monument was disguised against enemy air attack during WWII?",
    options: ["Red Fort", "India Gate", "Taj Mahal", "Qutub Minar"],
    correctAnswer: "Taj Mahal"
  },
  {
    id: 4,
    imageId: "del123789",
    question: "Which mosque became a uniting place for Hindus and Muslims?",
    options: ["Fatehpuri Mosque", "Nizamuddin Dargah", "Jama Masjid", "Lotus Temple"],
    correctAnswer: "Jama Masjid"
  }
];

// Mumbai Quiz Questions
const mumbaiQuizQuestions = [
  {
    id: 1,
    imageId: "mum456789",
    question: "In which railway terminus was 'Jai Ho' song filmed?",
    options: ["Mumbai Central", "Victoria Terminus", "Chhatrapati Shivaji Terminus", "Church Gate Station"],
    correctAnswer: "Chhatrapati Shivaji Terminus"
  },
  {
    id: 2,
    imageId: "mum234567",
    question: "Where did a distinct Gharana of Indian Classical Music develop in the late 1890's?",
    options: ["Bandra", "Colaba", "Bhendi Bazaar", "Kalbadevi"],
    correctAnswer: "Bhendi Bazaar"
  },
  {
    id: 3,
    imageId: "mum890123",
    question: "What prime tourist attraction of Mumbai was under construction?",
    options: ["Marine Drive", "Taj Mahal Palace", "Gateway of India", "Chhatrapati Shivaji Maharaj Terminus"],
    correctAnswer: "Gateway of India"
  },
  {
    id: 4,
    imageId: "mum678901",
    question: "Which UNESCO World Heritage Site are these cave temples dedicated to?",
    options: ["Ajanta Caves", "Elephanta Caves", "Karla Caves", "Ellora Caves"],
    correctAnswer: "Elephanta Caves"
  }
];


// Adding kolkataQuizQuestions to mainQuizArray
addToMainQuizArray(kolkataQuizQuestions);
addToMainQuizArray(delhiQuizQuestions)
addToMainQuizArray(mumbaiQuizQuestions)

// Getting 10 unique random quiz questions
let randomQuizArray = getRandomQuizArray(mainQuizArray);

// Adding image URLs to the random quiz questions
let randomQuizImageArray = addImagesToQuiz(randomQuizArray, imageArray);

//export default imageArray;
//export { kolkataQuizQuestions, delhiQuizQuestions, mumbaiQuizQuestions };
//export default randomQuizImageArray
//console.log(mainQuizArray.length)
console.log(randomQuizImageArray)

export default randomQuizImageArray