document.getElementById('profile').style.display = 'flex';
document.getElementById('contacts').style.display = 'none';
document.getElementById('summary').style.display = 'none';
document.getElementById('skills').style.display = 'none';
document.getElementById('code').style.display = 'none';
document.getElementById('courses').style.display = 'none';
document.getElementById('projects').style.display = 'none';
document.getElementById('education').style.display = 'none';
document.getElementById('languages').style.display = 'none';

let resetVisible = () => {
  document.getElementById('profile').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('code').style.display = 'none';
  document.getElementById('courses').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('education').style.display = 'none';
  document.getElementById('languages').style.display = 'none';
};

let test = item => {
  if (item == 'profile') {
    resetVisible();
    document.getElementById('profile').style.display = 'Flex';
  }
  if (item == 'contacts') {
    resetVisible();
    document.getElementById('contacts').style.display = 'Flex';
  }
  if (item == 'summary') {
    resetVisible();
    document.getElementById('summary').style.display = 'Flex';
  }
  if (item == 'skills') {
    resetVisible();
    document.getElementById('skills').style.display = 'Flex';
  }
  if (item == 'code') {
    resetVisible();
    document.getElementById('code').style.display = 'Flex';
  }
  if (item == 'courses') {
    resetVisible();
    document.getElementById('courses').style.display = 'Flex';
  }
  if (item == 'projects') {
    resetVisible();
    document.getElementById('projects').style.display = 'Flex';
  }
  if (item == 'education') {
    resetVisible();
    document.getElementById('education').style.display = 'Flex';
  }
  if (item == 'languages') {
    resetVisible();
    document.getElementById('languages').style.display = 'Flex';
  }
};
