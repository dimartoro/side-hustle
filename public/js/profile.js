const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#gig-name').value.trim();
    const needed_funding = document.querySelector('#gig-target-date').value.trim();
    const description = document.querySelector('#gig-details').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  try{
  document
    .querySelector('.new-gig-form')
    .addEventListener('submit', newFormHandler);
  }catch{};
  
  try{document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  }catch{};