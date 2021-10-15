const rs=require("readline-sync");
const chalk=require("chalk");
//Welcome Message and Instructions
console.log('Welcome to the Quiz');
let user_name = rs.question("What's your Name: ");
console.log('Hello',user_name,", Let's Play the Quiz!!");
console.log('\n');
console.log(chalk.yellow.underline('Rules & Instructions: '));
console.log('1.',user_name + ', There are 10 Questions on India and all are Compulsory.');
console.log('2. You will get 5 points on each Right Answer.');
console.log('3. 2 Points will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n-------------------------------------------------------\n');
//MCQ List
var Questions = [

  {
    array : ['David Deutsch', 'Nikola Tesla', 'Albert Eiensten', 'Issac Newton'],
    question : 'Who is the father of quantum computing? ',
    answer : 'David Deutsch'
  },
  {
    array : ['Slower', 'Faster', 'Average', 'Can"t say'],
    question : 'Quantum computing is relatively _________ than classical computing. ',
    answer : 'Faster'
  },
  {
    array : ['Byte', 'Quantum Byte', 'KiloByte', 'Qubit'],
    question : 'Instead of bits Quantum computers use ________. ',
    answer : 'Qubit'
  },
  {
    array : ['Quantity Bit', 'Quantum Byte', 'Quality Bit', 'Quantum Bit'],
    question : 'Qubit stands for _________.',
    answer : 'Quantum Bit'
  },
  {
    array : ['Google', 'IBM', 'Microsoft', 'Apple'],
    question : '_______ was the first company to put a quantum computer on the cloud.',
    answer : 'IBM'
  },
  {
    array : ['2001', '1998', '1990', '1997'],
    question : 'In which year first quantum computer was created?',
    answer : '1997'
  },
  {
    array : ['Google', 'IBM', 'Microsoft', 'Apple'],
    question : 'Which company announced it has a quantum computer that is 100 million times faster than any classical computer.',
    answer : 'Google'
  },
   {
    array : ['Google', 'ION-Q', 'IBM', 'All of the Given'],
    question : 'Some of the leading companies in the field Quantum Computing are ______',
    answer : 'All of the Given'
  },
  {
    array : ['Yes', 'No', 'Maybe', 'Can"t say'],
    question : 'Quantum computers can create vast multidimensional spaces, which is used to represent very large problems. Classical supercomputers cannot do this. ',
    answer : 'Yes'
  },
  {
    array : ['Yes', 'No', 'Maybe', 'Can"t say'],
    question : ' Can Light-Based Quantum Computer Exceeds Fastest Classical Supercomputers. ',
    answer : 'Yes'
  },
];
let choice=rs.question(chalk.yellow.bold("Are to ready to Test your Quantum Computing Knowledge:(y/n): "));

if(choice=="y"){
  let score = 0;
  function quizMcq(listOfAnswers,question,answer){
  let userAnswer = rs.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.magentaBright('You are Right.'));
    score = score + 5;
  } else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.magentaBright('The Correct Answer is: ',answer));
    score = score - 2;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.magentaBright('Score is: ',score));
}


for(var i = 0;i < Questions.length; i++){
  console.log('\n');
  quizMcq(Questions[i].array,Questions[i].question,Questions[i].answer);
  console.log('*******************************');
}
console.log(chalk.magentaBright("You Final Score: " + score));
}else{

  process.exit()
}