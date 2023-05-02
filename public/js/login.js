const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log(response);
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/gigs');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const zipcode = document.querySelector('#zipcode-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, zipcode }),
        //body: { name, email, password, zipcode },
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/gigs');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  try{
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  }catch{
    
  }

  try{
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  }catch{

  }
  