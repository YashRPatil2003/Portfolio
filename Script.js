// Example of dynamically inserting data into the resume
document.addEventListener('DOMContentLoaded', () => {
  const name = 'Yash Rajendra Patil';
  const summary = 'Passed Diploma in Civil engineering...';

  document.querySelector('h1').innerText = name;
  document.querySelector('.summary').innerText = summary;
});
