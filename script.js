const quotes = {
  lotr: [
    { text: "Even the smallest person can change the course of the future.", author: "Galadriel" },
    { text: "There is some good in this world, and it’s worth fighting for.", author: "Samwise Gamgee" },
    { text: "All we have to decide is what to do with the time that is given us.", author: "Gandalf" }
  ],
  hp: [
    { text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "Dumbledore" },
    { text: "It is our choices that show what we truly are, far more than our abilities.", author: "Dumbledore" },
    { text: "After all this time? Always.", author: "Snape" }
  ],
  got: [
    { text: "Chaos isn’t a pit. Chaos is a ladder.", author: "Littlefinger" },
    { text: "The night is dark and full of terrors.", author: "Melisandre" },
    { text: "When you play the game of thrones, you win or you die.", author: "Cersei Lannister" }
  ],
  witcher: [
    { text: "Evil is evil. Lesser, greater, middling... makes no difference.", author: "Geralt of Rivia" },
    { text: "Destiny helps people believe there's an order to this horseshit.", author: "Geralt of Rivia" },
    { text: "Fear is an illness. If you catch it and you leave it untreated, it can consume you.", author: "Vesemir" }
  ],
  alice: [
    { text: "I’m not crazy. My reality is just different than yours.", author: "Cheshire Cat" },
    { text: "It’s no use going back to yesterday, because I was a different person then.", author: "Alice" },
    { text: "Have I gone mad? I’m afraid so. You’re entirely bonkers. But I’ll tell you a secret. All the best people are.", author: "Mad Hatter" }
  ],
  narnia: [
    { text: "Courage, dear heart.", author: "Aslan" },
    { text: "Once a king or queen of Narnia, always a king or queen of Narnia.", author: "Aslan" },
    { text: "You doubt your value. Don’t run from who you are.", author: "Aslan" }
  ],
  ghibli: [
    { text: "A heart’s a heavy burden.", author: "Howl’s Moving Castle" },
    { text: "Once you meet someone, you never really forget them. It just takes a while for your memories to return.", author: "Spirited Away" },
    { text: "They say that the best blaze burns brightest when circumstances are at their worst.", author: "Howl’s Moving Castle" }
  ],
  sab: [
    { text: "Fine, make me your villain.", author: "The Darkling" },
    { text: "No mourners. No funerals.", author: "Kaz Brekker" },
    { text: "Hope is dangerous. It clouds your judgment.", author: "Zoya" }
  ]
};

function generateQuote() {
  const category = document.getElementById("category").value;
  const quoteList = quotes[category];

  const quoteBox = document.getElementById("quoteBox");
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  const randomIndex = Math.floor(Math.random() * quoteList.length);
  const selected = quoteList[randomIndex];

  quoteBox.style.animation = 'none';
  void quoteBox.offsetWidth;
  quoteBox.style.animation = 'fadeSlide 0.5s ease-in-out';

  quoteText.innerText = `"${selected.text}"`;
  authorText.innerText = `— ${selected.author}`;

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${selected.text}" — ${selected.author}`)}`;
  document.getElementById("tweet").href = tweetURL;
}
