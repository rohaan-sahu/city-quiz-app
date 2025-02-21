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
    imageId: "kol191901",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/07/DSC_0448.jpg",
    description: "Handley Page Biplane"
  },
  {
    city: "Kolkata",
    imageId: "kol188001",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/01/DSC_0407wl.jpg",
    description: "Port of Calcutta"
  },
  {
    city: "Kolkata",
    imageId: "kol193001",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/10/DSC_0897wl.jpg",
    description: "Flying Boat Biplanes"
  },
  {
    city: "Kolkata",
    imageId: "kol193101",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/11/DSC_0886wl.jpg",
    description: "First Railway Bridge"
  },
  {
    city: "Kolkata",
    imageId: "kol189001",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/03/DSC_0525.jpg",
    description: "Steamer Ships"
  },{
    city: "Delhi",
    imageId: "del191101",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/11/DSC_0428b.jpg",
    description: "Delhi Durbar"
  },
  {
    city: "Delhi",
    imageId: "del194401",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/01/DSC_0117wl-scaled.jpg",
    description: "American Soldiers Victory Parade"
  },
  {
    city: "Delhi",
    imageId: "del195301",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/04/DSC_1046.jpg",
    description: "Inauguration Of Indian Airlines"
  },
  {
    city: "Delhi",
    imageId: "del194701",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/01/0DSC_0265-800x638-1.jpg",
    description: "Mountbatten's Farewell"
  },
  {
    city: "Mumbai",
    imageId: "mum192350",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/09/DSC_0112.jpg",
    description: "Bhendi Bazaar"
  },
  {
    city: "Mumbai",
    imageId: "mum192351",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/12/DSC_0514wl.jpg",
    description: "Marine Drive"
  },
  {
    city: "Mumbai",
    imageId: "mum192352",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/12/DSC_0473wl.jpg",
    description: "Taj Mahal Hotel"
  },
  {
    city: "Mumbai",
    imageId: "mum192353",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/12/DSC_0432wl.jpg",
    description: "Kala Ghoda"
  },
  {
    city: "Mumbai",
    imageId: "mum192354",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/10/DSC_0248WL.jpg",
    description: "Bombay Dock"
  },
  {
    city: "Mumbai",
    imageId: "mum192355",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/07/DSC_0165WL-1.jpg",
    description: "Queen Victoria's Statue"
  },
  {
    city: "Mumbai",
    imageId: "mum192356",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/02/DSC_0339.jpg",
    description: "Elephanta Caves"
  },
  {
    city: "Mumbai",
    imageId: "mum192357",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/03/DSC_0049.jpg",
    description: "Crawford Market"
  }  
  ,
  {
    city: "Bangalore",
    imageId: "ban192346",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2025/02/DSC_1584.jpg2_-400x655.jpg",
    description: "St. Marks Church"
  },
  {
    city: "Bangalore",
    imageId: "ban192349",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2024/07/DSC_0473-1024x691.jpg",
    description: "Russel Market"
  },
  {
    city: "Bijapur",
    imageId: "bij192347",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2020/05/0CamScanner-05-14-2020-10.51.28_12-1.jpg",
    description: "Giant Battle Cannon"
  },
  {
    city: "Bangalore",
    imageId: "ban192348",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2019/10/5blrstmaryswl.jpg",
    description: "British Cantonment Area"
  },
  {
    city: "Chennai",
    imageId: "chn196401",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/08/DSC_0177.jpg",
    description: "Pamban Lift Bridge"
  },
  {
    city: "Chennai",
    imageId: "chn196402",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/04/DSC_0792c-1024x654.jpg",
    description: "Rolling lift bridge"
  },
  {
    city: "Chennai",
    imageId: "chn196403",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2023/04/DSC_0270.jpg",
    description: "Pamban Lift Bridge"
  },
  {
    city: "Chennai",
    imageId: "chn196404",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2020/05/CamScanner-05-14-2020-10.51.28_1WL-1.jpg",
    description: "Madras Harbour"
  },
  {
    city: "Chennai",
    imageId: "chn196405",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2020/05/CamScanner-05-01-2020-11.16.56_26.jpg",
    description: "General Post Office"
  },
  {
    city: "Chennai",
    imageId: "chn196406",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2020/05/0DSC_1995.jpg",
    description: "General Post Office"
  },
  {
    city: "Cochin",
    imageId: "coch194801",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2021/04/DSC_2133.jpg",
    description: "Old Malabar Hotel"
  },
  {
    city: "Cochin",
    imageId: "coch194001",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/10/DSC_0092.jpg",
    description: "Ernakulam Market By Cargo Boats"
  },
  {
    city: "Cochin",
    imageId: "coch193501",
    imageUrl: "https://www.past-india.com/wp-content/uploads/2022/11/DSC_0681wl.jpg",
    description: "Rare Views of Cochin"
  }   
];

// Cochin ( Ernakulam) Quiz Questions

const cochinQuizQuestions = [
  {
    id: 1,
    imageId: "coch194801",
    question: "In which year was the Malabar Hotel in Cochin Ernakulam established?",
    options: ["1930", "1936", "1940", "1948"],
    correctAnswer: "1936"
},
{
    id: 2,
    imageId: "coch194801",
    question: "Who created the artificial Willingdon Island where the Malabar Hotel is located?",
    options: ["Sir Robert Bristow", "Lord Willingdon", "Maharaja of Cochin", "George Bernard Shaw"],
    correctAnswer: "Sir Robert Bristow"
},
{
    id: 3,
    imageId: "coch194801",
    question: "What was the primary reason for building the Malabar Hotel?",
    options: ["Catering to passengers of shipping liners", "Serving as a royal residence", "Operating as a military base", "Hosting political events"],
    correctAnswer: "Catering to passengers of shipping liners"
},
{
    id: 4,
    imageId: "coch194801",
    question: "What major transformation did the Malabar Hotel undergo in the 1980s?",
    options: ["Renovation by the Taj Group", "Conversion into a government office", "Demolition for new construction", "Change into a museum"],
    correctAnswer: "Renovation by the Taj Group"
},
{
    id: 5,
    imageId: "coch194801",
    question: "What is the southern naval headquarters located on Willingdon Island?",
    options: ["INS Venduruthy", "INS Kunjali", "INS Garuda", "INS Agrani"],
    correctAnswer: "INS Venduruthy"
},
{
    id: 6,
    imageId: "coch194001",
    question: "In which decade was the Ernakulam Market by Cargo Boats in Cochin photographed?",
    options: ["1920s", "1930s", "1940s", "1950s"],
    correctAnswer: "1940s"
},
{
    id: 7,
    imageId: "coch194001",
    question: "What were the cargo boats called that entered the Ernakulam Market in Cochin?",
    options: ["Kettuvallams", "Houseboats", "Fishing boats", "Passenger boats"],
    correctAnswer: "Kettuvallams"
},
{
    id: 8,
    imageId: "coch194001",
    question: "What was the primary purpose of the Ernakulam Market in Cochin?",
    options: ["Trading spices", "Fishing", "Tourism", "Shipping"],
    correctAnswer: "Trading spices"
},
{
    id: 9,
    imageId: "coch194001",
    question: "Which lake was connected to the Ernakulam Market by a narrow canal?",
    options: ["Vembanad Lake", "Ashtamudi Lake", "Pookode Lake", "Periyar Lake"],
    correctAnswer: "Vembanad Lake"
},
{
    id: 10,
    imageId: "coch194001",
    question: "What has replaced the Kettuvallams in modern times at the Ernakulam Market?",
    options: ["Tourist houseboats", "Fishing boats", "Passenger boats", "Cargo ships"],
    correctAnswer: "Tourist houseboats"
},
{
    id: 11,
    imageId: "coch193501",
    question: "What is the probable location of the first photo in the Rare Views of Cochin (Ernakulam)?",
    options: ["Park Avenue Road", "Durbar Hall entrance", "Ernakulam Boat Jetty", "Foreshore Road"],
    correctAnswer: "Durbar Hall entrance"
}
]

// Kolkata Quiz Questions
const kolkataQuizQuestions = [
{
  id: 1,
  imageId: "kol191901",
  question: "In what year was the Handley Page aviation firm established?",
  options: ["1900", "1909", "1914", "1918"],
  correctAnswer: "1909"
},
{
  id: 2,
  imageId: "kol191901",
  question: "What is depicted in the smaller photo next to the Calcutta race course?",
  options: ["Handley Page aircraft taking off", "Pilot in the cockpit", "Maintenance crew", "Crowd watching"],
  correctAnswer: "Handley Page aircraft taking off"
},
{
  id: 3,
  imageId: "kol191901",
  question: "Which Viceroy was the first to arrive in India by flight?",
  options: ["Lord Curzon", "Lord Reading", "Lord Irwin", "Lord Mountbatten"],
  correctAnswer: "Lord Reading"
},
{
  id: 4,
  imageId: "kol191901",
  question: "Which company was established in 1924 after Handley Page Transport merged with two other airlines?",
  options: ["Air India", "Indian Airlines", "British Airways", "Imperial Airways"],
  correctAnswer: "Imperial Airways"
},
{
  id: 5,
  imageId: "kol188001",
  question: "What can be seen in the foreground of the 1880 photo of the Port of Calcutta?",
  options: ["A row of sailing ships", "Modern steamships", "Fishing boats", "Passenger ferries"],
  correctAnswer: "A row of sailing ships"
},
{
  id: 6,
  imageId: "kol188001",
  question: "Which prominent building is partly visible in the distance in the photo?",
  options: ["Victoria Memorial", "Calcutta High Court", "Fort William", "Howrah Bridge"],
  correctAnswer: "Calcutta High Court"
},
{
  id: 7,
  imageId: "kol188001",
  question: "Which river is the western distributary of the Ganges River, as shown in the photo?",
  options: ["Yamuna", "Godavari", "Hooghly", "Brahmaputra"],
  correctAnswer: "Hooghly"
},
{
  id: 8,
  imageId: "kol188001",
  question: "Which European powers had settlements on the Hooghly River by the close of the 17th century?",
  options: ["Portuguese, Dutch, French, and English", "Spanish, Dutch, French, and English", "Italian, Dutch, French, and English", "German, Dutch, French, and English"],
  correctAnswer: "Portuguese, Dutch, French, and English"
},
{
  id: 9,
  imageId: "kol188001",
  question: "What was the name of the fortification built by the English East India Company on the banks of the Hooghly?",
  options: ["Fort St. George", "Fort St. David", "Fort William", "Fort Victoria"],
  correctAnswer: "Fort William"
},
{
  id: 10,
  imageId: "kol193001",
  question: "In which year did the Calcutta class flying boats first start service from the UK to India?",
  options: ["1927", "1928", "1929", "1930"],
  correctAnswer: "1929"
},
{
  id: 11,
  imageId: "kol193001",
  question: "What was the final destination of the Calcutta class flying boats' route?",
  options: ["Calcutta", "Bombay", "Karachi", "Delhi"],
  correctAnswer: "Karachi"
},
{
  id: 12,
  imageId: "kol193001",
  question: "Which city did the more advanced models of Calcutta class flying boats make regular halts at?",
  options: ["Calcutta", "Bombay", "Madras", "Lahore"],
  correctAnswer: "Calcutta"
},
{
  id: 13,
  imageId: "kol193001",
  question: "For what purpose were the flying boats initially used before being acquired for civilian transport?",
  options: ["Military", "Postal service", "Tourism", "Cargo transport"],
  correctAnswer: "Military"
},
{
  id: 14,
  imageId: "kol193001",
  question: "What type of aircraft were the water-based biplanes shown in the photo?",
  options: ["Handley Page", "De Havilland", "Calcutta class", "Short Empire"],
  correctAnswer: "Calcutta class"
},
{
  id: 15,
  imageId: "kol193101",
  question: "What is the current name of the first railway bridge across the Hooghly, originally called Willingdon Bridge?",
  options: ["Vivekananda Setu Bridge", "Howrah Bridge", "Vidya Sagar Setu", "Nivedita Setu"],
  correctAnswer: "Vivekananda Setu Bridge"
},
{
  id: 16,
  imageId: "kol193101",
  question: "In which year did the construction of the first railway bridge across the Hooghly begin?",
  options: ["1926", "1927", "1928", "1929"],
  correctAnswer: "1926"
},
{
  id: 17,
  imageId: "kol193101",
  question: "Who inaugurated the first railway bridge across the Hooghly in 1931?",
  options: ["Lord Willingdon", "Lord Curzon", "Lord Irwin", "Lord Reading"],
  correctAnswer: "Lord Willingdon"
},
{
  id: 18,
  imageId: "kol193101",
  question: "Which contractor was responsible for the construction of the first railway bridge across the Hooghly?",
  options: ["Rai Bahadur Jagmal Raja", "Robert Chisholm", "George Wittet", "John Begg"],
  correctAnswer: "Rai Bahadur Jagmal Raja"
},
{
  id: 19,
  imageId: "kol193101",
  question: "What was the name of the first train that ran across the bridge?",
  options: ["Howrah Express", "Calcutta Express", "Jagmal Raja Howrah Express", "Vivekananda Express"],
  correctAnswer: "Jagmal Raja Howrah Express"
},
{
  id: 20,
  imageId: "kol189001",
  question: "In which year was the photochrom of steamer ships in Kolkata Harbour taken?",
  options: ["1880", "1885", "1890", "1895"],
  correctAnswer: "1890"
},
{
  id: 21,
  imageId: "kol189001",
  question: "Which river is the Kolkata Harbour located on?",
  options: ["Ganges", "Yamuna", "Hooghly", "Brahmaputra"],
  correctAnswer: "Hooghly"
},
{
  id: 22,
  imageId: "kol189001",
  question: "Which European traders were attracted to the Hooghly River between the 15th and 19th centuries?",
  options: ["Portuguese, Dutch, French, and English", "Spanish, Dutch, French, and English", "Italian, Dutch, French, and English", "German, Dutch, French, and English"],
  correctAnswer: "Portuguese, Dutch, French, and English"
},
{
  id: 23,
  imageId: "kol189001",
  question: "Which city was Kolkata Harbour's port connected to by regular steamer ship services?",
  options: ["Rangoon (Yangon)", "Penang", "Singapore", "All of the above"],
  correctAnswer: "All of the above"
},
{
  id: 24,
  imageId: "kol189001",
  question: "What type of tram is shown in the 1890 photochrom of Kolkata Harbour?",
  options: ["Electric tram", "Steam tram", "Horse-drawn tram", "Cable car"],
  correctAnswer: "Horse-drawn tram"
}
]
// Delhi Quiz Questions
const delhiQuizQuestions = [{
  id: 1,
  imageId: "del191101",
  question: "In what year did the Delhi Durbar ceremony featuring King George V and Queen Mary take place?",
  options: ["1903", "1911", "1921", "1931"],
  correctAnswer: "1911"
},
{
  id: 2,
  imageId: "del191101",
  question: "Who was the Viceroy overseeing the details of the 1911 Delhi Durbar?",
  options: ["Lord Curzon", "Lord Reading", "Lord Hardinge", "Lord Irwin"],
  correctAnswer: "Lord Hardinge"
},
{
  id: 3,
  imageId: "del191101",
  question: "Which Indian prince was the first in line to pay respects to the King and Queen?",
  options: ["Maharaja of Patiala", "Nizam of Hyderabad", "Maharaja of Mysore", "Gaekwad of Baroda"],
  correctAnswer: "Nizam of Hyderabad"
},
{
  id: 4,
  imageId: "del191101",
  question: "What type of gifts did the Indian princes present to the King and Queen?",
  options: ["Jewels, gold cloth, ivory", "Land deeds, spices, sculptures", "Rare books, paintings, manuscripts", "Horses, weapons, traditional garments"],
  correctAnswer: "Jewels, gold cloth, ivory"
},
{
  id: 5,
  imageId: "del191101",
  question: "How many Delhi Durbars were held during the British Raj era?",
  options: ["One", "Two", "Three", "Four"],
  correctAnswer: "Three"
},
{
  id: 6,
  imageId: "del194401",
  question: "In which year did the American soldiers' victory parade in Delhi take place?",
  options: ["1943", "1944", "1945", "1946"],
  correctAnswer: "1944"
},
{
  id: 7,
  imageId: "del194401",
  question: "What was the primary purpose of the American soldiers' presence in India during World War II?",
  options: ["Supporting Chinese forces", "Defending India from Japanese invasion", "Training Indian troops", "Coordinating supply routes"],
  correctAnswer: "Supporting Chinese forces"
},
{
  id: 8,
  imageId: "del194401",
  question: "Which theater of operations did the American soldiers in India belong to during World War II?",
  options: ["European Theater", "Pacific Theater", "China-Burma-India Theater", "North African Theater"],
  correctAnswer: "China-Burma-India Theater"
},
{
  id: 9,
  imageId: "del194401",
  question: "Which city in India became a major hub for American troops during World War II?",
  options: ["Delhi", "Calcutta", "Bombay", "Madras"],
  correctAnswer: "Calcutta"
},
{
  id: 10,
  imageId: "del194401",
  question: "What was the main objective of the American and Allied forces in the China-Burma-India Theater?",
  options: ["Defeating Japanese forces in Burma", "Liberating French Indochina", "Securing oil fields in China", "Protecting shipping routes in the Indian Ocean"],
  correctAnswer: "Defeating Japanese forces in Burma"
},
{
  id: 11,
  imageId: "del195301",
  question: "In which year was Indian Airlines inaugurated by Jawaharlal Nehru?",
  options: ["1950", "1951", "1952", "1953"],
  correctAnswer: "1953"
},
{
  id: 12,
  imageId: "del195301",
  question: "Who was the first chairman of Indian Airlines after its nationalization?",
  options: ["Jawaharlal Nehru", "Raj Bahadur", "Jagjivan Ram", "JRD Tata"],
  correctAnswer: "JRD Tata"
},
{
  id: 13,
  imageId: "del195301",
  question: "Which act led to the nationalization of Indian Airlines in 1953?",
  options: ["Air Corporations Act", "Civil Aviation Act", "Aviation Security Act", "Airlines Nationalization Act"],
  correctAnswer: "Air Corporations Act"
},
{
  id: 14,
  imageId: "del195301",
  question: "How many domestic airlines were merged to form Indian Airlines in 1953?",
  options: ["5", "6", "7", "8"],
  correctAnswer: "8"
},
{
  id: 15,
  imageId: "del195301",
  question: "Which city did the first flight of Tata Air Services (later Tata Airlines) take off from in 1932?",
  options: ["Delhi", "Mumbai", "Karachi", "Chennai"],
  correctAnswer: "Karachi"
},
{
  id: 16,
  imageId: "del194701",
  question: "In which year did Mountbatten’s farewell inspection of the departing British Regiment take place?",
  options: ["1946", "1947", "1948", "1949"],
  correctAnswer: "1947"
},
{
  id: 17,
  imageId: "del194701",
  question: "Which British regiment gave a farewell parade for Lord Mountbatten in 1947?",
  options: ["16th British Brigade", "East Lancashire Regiment", "Royal Fusiliers", "Queen's Own Royal Regiment"],
  correctAnswer: "East Lancashire Regiment"
},
{
  id: 18,
  imageId: "del194701",
  question: "What was Lord Mountbatten's role during India's independence and partition process?",
  options: ["First Governor-General", "Last Viceroy", "Commander-in-Chief", "Prime Minister"],
  correctAnswer: "Last Viceroy"
},
{
  id: 19,
  imageId: "del194701",
  question: "Who succeeded Lord Mountbatten as the first Governor-General of independent India?",
  options: ["C Rajagopalachari", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
  correctAnswer: "C Rajagopalachari"
},
{
  id: 20,
  imageId: "del194701",
  question: "What was the significant consequence of the partition process overseen by Mountbatten?",
  options: ["Successful economic integration", "Peaceful transfer of power", "Millions of deaths", "Strengthened colonial rule"],
  correctAnswer: "Millions of deaths"
}
];

// Mumbai Quiz Questions
const mumbaiQuizQuestions = [
  {
    id: 1,
    imageId: "mum192350",
    question: "When was the reclamation of the seven islands of Bombay completed into a united landmass?",
    options: ["1870s", "1880s", "1830s", "1890s"],
    correctAnswer: "1830s"
  },
  {
    id: 2,
    imageId: "mum192350",
    question: "What was the primary purpose of Bhendi Bazaar during the British era in Bombay?",
    options: ["Military base", "Residential area for skilled workers", "Marketplace for European businesses", "Recreational area"],
    correctAnswer: "Residential area for skilled workers"
  },
  {
    id: 3,
    imageId: "mum192350",
    question: "What is one theory for the origin of the name 'Bhendi Bazaar'?",
    options: ["Named after a British officer", "Referred to as 'behind the bazaar'", "Named after a local ruler", "Named after a historic event"],
    correctAnswer: "Referred to as 'behind the bazaar'"
  },
  {
    id: 4,
    imageId: "mum192350",
    question: "Which market is not located near Bhendi Bazaar?",
    options: ["Crawford Market", "Chor Bazaar", "Null Bazaar", "Sarojini Market"],
    correctAnswer: "Sarojini Market"
  },
  {
    id: 5,
    imageId: "mum192351",
    question: "In which year was the photo of the early view of Marine Drive and Back Bay from Malabar Hill taken?",
    options: ["1870", "1880", "1890", "1900"],
    correctAnswer: "1880"
  },
  {
    id: 6,
    imageId: "mum192351",
    question: "What can be seen on the right side of the photo?",
    options: ["Marine Drive", "Chowpatty Beach", "Back Bay", "Girgaon"],
    correctAnswer: "Back Bay"
  },
  {
    id: 7,
    imageId: "mum192351",
    question: "What notable building or structure was not yet built in the photo of the early view of Marine Drive?",
    options: ["Gateway of India", "Art Deco residential buildings", "Victoria Terminus", "Bombay High Court"],
    correctAnswer: "Art Deco residential buildings"
  },
  {
    id: 8,
    imageId: "mum192351",
    question: "What is the name of the depot shown in the left corner of the foreground in the photo?",
    options: ["Cotton Depot", "Timber Depot (Lakdi Bunder)", "Spice Depot", "Coal Depot"],
    correctAnswer: "Timber Depot (Lakdi Bunder)"
  },
  {
    id: 9,
    imageId: "mum192352",
    question: "In which year was the Taj Mahal Palace Hotel completed?",
    options: ["1905", "1924", "1903", "1973"],
    correctAnswer: "1903"
  },
  {
    id: 10,
    imageId: "mum192352",
    question: "Who conceived the idea of building the Taj Mahal Palace Hotel in Bombay?",
    options: ["Lord Curzon", "Jamshetji Tata", "Queen Victoria", "Mahatma Gandhi"],
    correctAnswer: "Jamshetji Tata"
  },
  {
    id: 11,
    imageId: "mum192352",
    question: "What notable landmark does the Taj Mahal Hotel face?",
    options: ["Victoria Terminus", "Bombay High Court", "Gateway of India", "Marine Drive"],
    correctAnswer: "Gateway of India"
  },
  {
    id: 12,
    imageId: "mum192352",
    question: "What was the Taj Mahal Palace Hotel converted into during World War I?",
    options: ["Military base", "Luxury apartments", "600-bed hospital", "Government offices"],
    correctAnswer: "600-bed hospital"
  },
  {
    id: 13,
    imageId: "mum192353",
    question: "In which year did the Prince of Wales visit Bombay?",
    options: ["1875", "1885", "1901", "1925"],
    correctAnswer: "1875"
  },
  {
    id: 14,
    imageId: "mum192353",
    question: "Who donated the equestrian statue of the Prince of Wales to the city of Bombay?",
    options: ["Lord Curzon", "Jamshetji Tata", "Albert David Sassoon", "Queen Victoria"],
    correctAnswer: "Albert David Sassoon"
  },
  {
    id: 15,
    imageId: "mum192353",
    question: "What notable landmark is not included in the Kala Ghoda precinct?",
    options: ["Flora Fountain", "Prince of Wales Museum", "Gateway of India", "Elphinstone College"],
    correctAnswer: "Gateway of India"
  },
  {
    id: 16,
    imageId: "mum192353",
    question: "What was the height of the original bronze sculpture of the Prince of Wales on horseback?",
    options: ["10 feet", "12 feet 9 inches", "15 feet", "18 feet 6 inches"],
    correctAnswer: "12 feet 9 inches"
  },
  {
    id: 17,
    imageId: "mum192354",
    question: "Which dock is possibly shown in the panoramic view of the British-era Bombay Dock in 1914?",
    options: ["Sassoon Dock", "Victoria Dock", "Alexandra Dock", "Coal Bunder"],
    correctAnswer: "Alexandra Dock"
  },
  {
    id: 18,
    imageId: "mum192354",
    question: "When was the reclamation of the Bombay Islands completed?",
    options: ["1875", "1880", "1845", "1914"],
    correctAnswer: "1845"
  },
  {
    id: 19,
    imageId: "mum192354",
    question: "Who took over as the Governor that spurred development in Bombay, turning it into a great city?",
    options: ["Lord Curzon", "Henry Bartle Frere", "Jamshetji Tata", "Albert David Sassoon"],
    correctAnswer: "Henry Bartle Frere"
  },
  {
    id: 20,
    imageId: "mum192354",
    question: "What event during the Second World War caused a large part of the dock area to be shattered by a devastating explosion?",
    options: ["An ammunition ship blew up", "A naval attack", "A large fire outbreak", "Bombing by enemy forces"],
    correctAnswer: "An ammunition ship blew up"
  },
  {
    id: 21,
    imageId: "mum192355",
    question: "When was the Queen Victoria statue originally placed on Esplanade Road (now Mahatma Gandhi Road) in Bombay?",
    options: ["1872", "1920", "1965", "1885"],
    correctAnswer: "1872"
  },
  {
    id: 22,
    imageId: "mum192355",
    question: "Why was Queen Victoria’s statue moved to the Victoria and Albert Museum (Bhau Daji Lad Museum)?",
    options: ["It was damaged by a natural disaster", "It was defaced by Indian nationalists", "It was too appealing to be kept outdoors", "It was replaced by a newer statue"],
    correctAnswer: "It was defaced by Indian nationalists"
  },
  {
    id: 23,
    imageId: "mum192355",
    question: "What happened to Queen Victoria’s statue when the crane took its weight during the removal process?",
    options: ["The base cracked", "The head fell off", "The entire statue collapsed", "The statue broke into multiple pieces"],
    correctAnswer: "The head fell off"
  },
  {
    id: 24,
    imageId: "mum192355",
    question: "Where is the marble canopy originally part of the statue now located?",
    options: ["Sold to a private collector", "Part of a public park", "Destroyed during removal", "In the compound of an industrialist’s home"],
    correctAnswer: "In the compound of an industrialist’s home"
  },
  {
    id: 25,
    imageId: "mum192356",
    question: "In which century were the Elephanta cave temples likely created?",
    options: ["5th century AD", "6th century AD", "7th century AD", "8th century AD"],
    correctAnswer: "6th century AD"
  },
  {
    id: 26,
    imageId: "mum192356",
    question: "What is the original name of the Elephanta Island?",
    options: ["Trimurti", "Gharapuri", "Shivapuri", "Mahabalipuram"],
    correctAnswer: "Gharapuri"
  },
  {
    id: 27,
    imageId: "mum192356",
    question: "What material were the Elephanta cave temples chiselled from?",
    options: ["Granite", "Limestone", "Sandstone", "Rocky cliff"],
    correctAnswer: "Rocky cliff"
  },
  {
    id: 28,
    imageId: "mum192356",
    question: "Which museum now houses the huge stone elephant originally found on Elephanta Island?",
    options: ["Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", "Bhau Daji Lad Museum", "Prince of Wales Museum", "Nehru Science Centre"],
    correctAnswer: "Bhau Daji Lad Museum"
  },
  {
    id: 29,
    imageId: "mum192356",
    question: "What is the triple-headed statue of Shiva in the main cave of Elephanta called?",
    options: ["Mahadev", "Trimurti", "Trishul", "Lingam"],
    correctAnswer: "Trimurti"
  },
  {
    id: 30,
    imageId: "mum192357",
    question: "In which year was the construction of Crawford Market in Bombay completed?",
    options: ["1860", "1869", "1875", "1885"],
    correctAnswer: "1869"
  },
  {
    id: 31,
    imageId: "mum192357",
    question: "Who designed the Crawford Market building?",
    options: ["Henry Bartle Frere", "William Emerson", "Albert David Sassoon", "J. L. Kipling"],
    correctAnswer: "William Emerson"
  },
  {
    id: 32,
    imageId: "mum192357",
    question: "What notable feature is found at Crawford Market, designed by J. L. Kipling?",
    options: ["Clock tower", "Ornamental fountain", "Sculptural relief panels", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 33,
    imageId: "mum192357",
    question: "Which section of Crawford Market is considered the most attractive?",
    options: ["The vegetable stalls", "The fruit stalls", "The clock tower", "The spice stalls"],
    correctAnswer: "The clock tower"
  }
]

// Bangalore Quiz Questions
const bangaloreQuizQuestions = [
  {
    id: 1,
    imageId: "ban192346",
    question: "When was St. Marks Church in Bangalore originally built as a garrison church?",
    options: ["1923", "1902", "1808", "1926"],
    correctAnswer: "1808"
  },
  {
    id: 2,
    imageId: "ban192346",
    question: "What was the reason behind the fire that destroyed St. Marks Church in 1923?",
    options: ["Lightning strike", "Short circuit", "Arson", "Natural disaster"],
    correctAnswer: "Short circuit"
  },
  {
    id: 3,
    imageId: "ban192346",
    question: "Which organization initially controlled St. Marks Church?",
    options: ["British Royalty", "East India Company’s Madras Presidency", "Indian Government", "Bowring Institute"],
    correctAnswer: "East India Company’s Madras Presidency"
  },
  {
    id: 4,
    imageId: "ban192346",
    question: "In which year was the church reconstructed after the fire?",
    options: ["1924", "1926", "1906", "1927"],
    correctAnswer: "1927"
  },
  {
    id: 5,
    imageId: "ban192349",
    question: "Who was the president of the Municipal Commission of British-era Bangalore who planned to build Russel Market?",
    options: ["T B Russell", "Ismail Sait", "Hyder Ali", "Tipu Sultan"],
    correctAnswer: "T B Russell"
  },
  {
    id: 6,
    imageId: "ban192349",
    question: "In which year was the proposal to build Russel Market in the cantonment area first mooted?",
    options: ["1799", "1915", "1927", "1930"],
    correctAnswer: "1915"
  },
  {
    id: 7,
    imageId: "ban192349",
    question: "What was the primary purpose of Russel Market?",
    options: ["To sell clothes", "To sell vegetables, meat, fish, and groceries", "To serve as a military base", "To host cultural events"],
    correctAnswer: "To sell vegetables, meat, fish, and groceries"
  },
  {
    id: 8,
    imageId: "ban192349",
    question: "Who inaugurated Russel Market in 1927?",
    options: ["T B Russell", "Ismail Sait", "Hyder Ali", "Tipu Sultan"],
    correctAnswer: "Ismail Sait"
  },
  {
    id: 9,
    imageId: "bij192347",
    question: "What is the local name for the Giant Battle Cannon of Bijapur?",
    options: ["Burj-E-Sherz", "Gol Gumbaz", "Malik-E-Maidan", "Landa Kasab Tope"],
    correctAnswer: "Malik-E-Maidan"
  },
  {
    id: 10,
    imageId: "bij192347",
    question: "In which year was the photo of the Giant Battle Cannon of Bijapur taken?",
    options: ["1870", "1880", "1890", "1900"],
    correctAnswer: "1880"
  },
  {
    id: 11,
    imageId: "bij192347",
    question: "What is the weight of the Giant Battle Cannon of Bijapur?",
    options: ["45 tons", "50 tons", "55 tons", "60 tons"],
    correctAnswer: "55 tons"
  },
  {
    id: 12,
    imageId: "bij192347",
    question: "What unique design is featured on the muzzle of the Giant Battle Cannon of Bijapur?",
    options: ["A lion’s head devouring an elephant", "A peacock in full display", "A tiger chasing a deer", "An eagle soaring in the sky"],
    correctAnswer: "A lion’s head devouring an elephant"
  },
  {
    id: 13,
    imageId: "ban192348",
    question: "Which church is visible in the background of the photo of the British Cantonment Area in Bangalore taken in 1880?",
    options: ["St. Patrick's Church", "St. Joseph's Cathedral", "St. Mark's Cathedral", "St. Mary’s Church"],
    correctAnswer: "St. Mary’s Church"
  },
  {
    id: 14,
    imageId: "ban192348",
    question: "What was likely the name of the street lined with shops in the center of the photo?",
    options: ["Brigade Road", "Commercial Street", "Broadway", "Residency Road"],
    correctAnswer: "Broadway"
  },
  {
    id: 15,
    imageId: "ban192348",
    question: "From which location was the photo of the British Cantonment Area likely captured?",
    options: ["Tipu Sultan’s Palace", "Bangalore Fort", "Russell Market’s clock tower", "Cubbon Park"],
    correctAnswer: "Russell Market’s clock tower"
  },
  {
    id: 16,
    imageId: "ban192348",
    question: "What was the primary purpose of the British Cantonment Area in Bangalore during colonial rule?",
    options: ["Residential area for British officers", "Military and civil services hub", "Market area for locals", "Cultural and entertainment center"],
    correctAnswer: "Military and civil services hub"
  }
];


// Adding Quiz Questions to mainQuizArray
addToMainQuizArray(kolkataQuizQuestions);
addToMainQuizArray(delhiQuizQuestions);
addToMainQuizArray(mumbaiQuizQuestions);
addToMainQuizArray(bangaloreQuizQuestions);
addToMainQuizArray(cochinQuizQuestions);

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