var nameList = [
  'Arjun', 'Aditi', 'Veer', 'Ishaan', 'Aanya', 'Raj', 'Simran', 
  'Kiran', 'Ravi', 'Ananya', 'Rohan', 'Diya', 'Saanvi', 'Kartik', 
  'Meera', 'Nisha', 'Kavya', 'Aditya', 'Riya', 
  'Shiva', 'Maya', 'Rani', 'Chand', 'Neel', 'Pooja', 'Vikram', 
  'Aarav', 'Tanvi', 'Amit', 'Jaya', 'Naveen', 'Priya', 'Rakesh', 
  'Kunal', 'Sanya', 'Vishal', 'Ruchi', 'Nikhil', 'Tanu', 'Varun',
   'Gaurav', 'Neha', 'Siddhi', 'Salman', 'Alia', 'Varun', 'Sonam', 'Ileana', 
  'Ranbir', 'Kriti', 'Manish', 'Meenal', 
  'Gaurav', 'Sushma', 'Ramesh', 'Suman', 'Deepak'
];

export const generateRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

var messageList = [
  'Hey there!', 'What’s up?', 'All good here.', 
  'See you soon.', 'Call me later.', 'Sounds good!', 
  'On my way.', 'Let’s do this.', 'Thanks a lot.', 
  'I agree.', 'I’m almost there.', 'Catch you later.', 
  'Talk to you.', 'Let’s plan it.', 'Sure, no problem.', 
  'Got it, thanks!', 'Be right back.', 'Can you help?', 
  'Let’s catch up.', 'Good job!', 'Take care.', 
  'See you tomorrow.', 'I’ll handle it.', 'Almost done.', 
  'Will do.', 'Count me in.', 'I’m excited!', 
  'Let me know.', 'No worries.', 'You got this!', 
  'Just arrived.', 'You’re welcome.', 'Sounds perfect!', 
  'I’m on it.', 'See you then.'
];


export const generateRandomMessage = () => {
    return messageList[Math.floor(Math.random() * messageList.length)];
};
