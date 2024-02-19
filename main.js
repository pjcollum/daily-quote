var quotes = [
  'We become what we think about – Earl Nightingale',
  'People who are crazy enough to think they can change the world, are the ones who do.- Rob Siltanen',
  'Optimism is the one quality more associated with success and happiness than any other.- Brian Tracy',
  'Happiness is not something readymade. It comes from your own actions.-Dalai Lama',
  'All our dreams can come true if we have the courage to pursue them.- Walt Disney',
  'Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill',
  'It takes courage to grow up and become who you really are.',
  'Attitude is a little thing that makes a big difference.',
  'You cant have excuses and results',
  'Seize the opportunity',
  'Be happy',
  'Leave the world a better place',
  'Making society a better place',
  'There never is a right time',
  'If you think the price of winning is too high, wait until you pay the bill for regret!',
  'Think bigger!',
  'Confidence without competence is delusion',
  'Build layers of paint',
  'The price of in action',
  'If it’s not a fuck yeah it’s a no',
  'Passion and excitement',
  'Only compare yourself against yesterday or one year ago',
  'Comparison is the thief of joy',
  'Passionate',
  'Effort',
  'You can’t bullshit the man in the mirror',
  '20 mins a day',
  'Consistency',
  'Average is easy that’s why it’s popular',
  'Failure is a bruise not a tattoo',
  'There never will be a right time.',
  'Piece of paper for an action plan',
  'Happiness is a choice',
  'Past doesn’t define the future',
  'Consistency for passion moving forward',
  'The bad stuff is also the good stuff.',
  'The most dangerous thing to do, is to play it safe.',
  'The more irresponsibly curious you are about the pursuit of knowledge, the more everything becomes interesting. T K Coleman',
  'Every dream I ever dreamed came true a hundred times. Elvis.',
  'Your network is your net worth',
  'You become the average of the 5 people around you',
  'If you were to die two years from now in perfect health, what would you do differently?',
  'If you don’t design your life, someone will come along and design it for you.',
  'Change happens when the pain of staying the same becomes greater than the pain of making the change.',
  'The only thing possible - you play it the best you can',
  'To be early is to be on time, to be on time is to be late, to be late is unexceptable',
  'Fleas bouncing in a jar with a lid on, they stop short of the lid to not hit it. Lid gets removed but the fleas still bounce to the same height until new flies enter. They don’t know the ceiling.',
  'The person who has the most fun, wins.'
]

var d = new Date();
var dayOfWeek = d.getDay();
var prevDayOfWeek = d.getDay() - 1;

// Each day shows a new quote
if (dayOfWeek != prevDayOfWeek) {
  var randomNumberDaily = Math.floor(Math.random() * (quotes.length));
  document.getElementById('daily').innerHTML = quotes[randomNumberDaily];
};

// On button click show a new quote
function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}