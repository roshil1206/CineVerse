import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";
import movie5 from "./images/movie5.jpg";
import movie6 from "./images/movie6.jpg";
import movie7 from "./images/movie7.jpg";
import movie8 from "./images/movie8.jpg";
import movie9 from "./images/movie9.jpg";
import sandwich from "./images/sandwich.jpg";
import popcorn from "./images/popcorn.jpg";
import beverages from "./images/beverages.jpg";
import combo from "./images/combo.jpg";

export const movies = [
  {
    id: 1,
    name: "Movie 1",
    rating: 7.9,
    duration: "2h 15min",
    languages: ["English"],
    releaseDate: "2022-09-21",
    description: "A thrilling action-packed adventure.",
    image: movie1,
    genre: "Drama",
    topReviews: [
      {
        reviewerName: "John Doe",
        rating: 8.5,
        review: "Great movie! I was on the edge of my seat throughout.",
      },
      {
        reviewerName: "Jane Smith",
        rating: 7.0,
        review: "Decent film, but the plot could have been better.",
      },
    ],
  },
  {
    id: 2,
    name: "Movie 2",
    rating: 8.2,
    duration: "1h 50min",
    languages: ["Spanish"],
    releaseDate: "2022-11-10",
    description: "A heartwarming drama that will touch your soul.",
    image: movie2,
    genre: "Comedy",
    topReviews: [
      {
        reviewerName: "Alex Johnson",
        rating: 9.0,
        review: "Absolutely beautiful! I cried my eyes out.",
      },
      {
        reviewerName: "Emily Brown",
        rating: 7.8,
        review: "Enjoyable film, but it felt a bit predictable.",
      },
    ],
  },
  {
    id: 3,
    name: "Movie 3",
    rating: 6.5,
    duration: "2h 5min",
    languages: ["English", "French"],
    releaseDate: "2022-12-05",
    description: "A sci-fi adventure with mind-bending twists.",
    image: movie3,
    genre: "Action",
    topReviews: [
      {
        reviewerName: "David Wilson",
        rating: 7.2,
        review: "Interesting concept, but the execution fell short.",
      },
      {
        reviewerName: "Sophia Martinez",
        rating: 6.0,
        review: "I expected more from this film. It was just average.",
      },
    ],
  },
  {
    id: 4,
    name: "Movie 4",
    rating: 9.0,
    duration: "2h 30min",
    languages: ["English"],
    releaseDate: "2023-01-20",
    description: "An epic fantasy tale filled with magic and adventure.",
    image: movie4,
    genre: "Fantasy",
    topReviews: [
      {
        reviewerName: "Michael Thompson",
        rating: 9.5,
        review: "One of the best fantasy films I've seen. Truly mesmerizing!",
      },
      {
        reviewerName: "Olivia Clark",
        rating: 8.7,
        review: "A captivating journey from start to finish. Highly recommended!",
      },
    ],
  },
  {
    id: 5,
    name: "Movie 5",
    rating: 7.7,
    duration: "1h 40min",
    languages: ["German"],
    releaseDate: "2023-03-12",
    description: "A thought-provoking drama that explores the human condition.",
    image: movie5,
    genre: "Drama",
    topReviews: [
      {
        reviewerName: "Daniel Lee",
        rating: 7.8,
        review: "An intriguing film that left me pondering its themes.",
      },
      {
        reviewerName: "Sophie Turner",
        rating: 7.6,
        review: "A deep and emotional story that resonated with me.",
      },
    ],
  },
  {
    id: 6,
    name: "Movie 6",
    rating: 8.9,
    duration: "2h 20min",
    languages: ["English"],
    releaseDate: "2023-05-05",
    description: "A gripping thriller that will keep you guessing until the end.",
    image: movie6,
    genre: "Thriller",
    topReviews: [
      {
        reviewerName: "Benjamin Harris",
        rating: 9.2,
        review: "Intense and suspenseful! It had me on the edge of my seat.",
      },
      {
        reviewerName: "Emma Turner",
        rating: 8.5,
        review: "A well-crafted thriller with unexpected twists. Impressive!",
      },
    ],
  },
  {
    id: 7,
    name: "Movie 7",
    rating: 6.8,
    duration: "1h 55min",
    languages: ["English", "Spanish"],
    releaseDate: "2023-07-18",
    description: "A lighthearted comedy that guarantees laughter.",
    image: movie7,
    genre: "Comedy",
    topReviews: [
      {
        reviewerName: "Liam Roberts",
        rating: 7.0,
        review: "Some funny moments, but the humor didn't consistently land.",
      },
      {
        reviewerName: "Grace Wilson",
        rating: 6.5,
        review: "An average comedy that provided a few chuckles.",
      },
    ],
  },
  {
    id: 8,
    name: "Movie 8",
    rating: 9.5,
    duration: "2h 10min",
    languages: ["English", "French"],
    releaseDate: "2023-09-08",
    description: "An emotionally powerful film that will leave you moved.",
    image: movie8,
    genre: "Drama",
    topReviews: [
      {
        reviewerName: "Noah Thompson",
        rating: 9.8,
        review: "A masterpiece! It touched my heart and left me in tears.",
      },
      {
        reviewerName: "Isabella Garcia",
        rating: 9.2,
        review: "An incredibly moving story with exceptional performances.",
      },
    ],
  },
  {
    id: 9,
    name: "Movie 9",
    rating: 7.3,
    duration: "2h 5min",
    languages: ["Spanish"],
    releaseDate: "2023-11-20",
    description: "A suspenseful thriller that will keep you guessing.",
    image: movie9,
    genre: "Thriller",
    topReviews: [
      {
        reviewerName: "Lucas Rodriguez",
        rating: 7.5,
        review: "Kept me on the edge of my seat, but the ending was underwhelming.",
      },
      {
        reviewerName: "Maria Perez",
        rating: 7.1,
        review: "A decent thriller with a few twists. Worth watching.",
      },
    ],
  },
];

export const faqData = [
  {
    question: "How can I book movie tickets?",
    answer:
      "To book movie tickets, you can visit our website and follow the steps on the booking page. Select the movie, showtime, number of tickets, and seats. Then proceed to the payment process to confirm your booking.",
  },
  {
    question: "Do I need to create an account to book movie tickets?",
    answer:
      "Yes, creating an account is required to book movie tickets on our website. It allows you to manage your bookings, access personalized recommendations, and receive updates on upcoming movies and promotions. Creating an account is a quick and easy process.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and online payment platforms such as PayPal. You can choose the preferred payment option during the checkout process.",
  },
  {
    question: "Can I book food and drinks along with my movie tickets?",
    answer:
      "Yes, you can book food and drinks along with your movie tickets. During the ticket booking process, you will have the option to add food and drinks to your order. You can choose from a variety of snacks, beverages, and combos offered by the theater. The food and drinks will be available for pickup at the theater's concession stand.",
  },
  {
    question: "What should I do if I face any issues during the booking process?",
    answer:
      "If you encounter any issues while booking movie tickets, please contact our customer support team. You can reach us through the provided contact information on our website, and our support team will be happy to assist you.",
  },
];

export const foodData = [
  {
    name: "Sandwich",
    description: "Customize your sandwith as per taste.",
    type: "food",
    price: 2.99,
    image: sandwich,
  },
  {
    name: "Fruit Juice",
    description: "Select your favourate fruits for juice.",
    type: "beverages",
    price: 3.19,
    image: beverages,
  },
  {
    name: "Popcorn ",
    description: "A popcorn served with caremal.",
    type: "food",
    price: 6.99,
    image: popcorn,
  },
  {
    name: "Burger and drink",
    description: "Burger served with chilled drink.",
    type: "combo",
    price: 3.99,
    image: combo,
  },
];
