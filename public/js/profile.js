const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#gig-name').value.trim();
    const target_avail_date = document.querySelector('#gig-target-date').value.trim();
    const details = document.querySelector('#gig-details').value.trim();
  
    console.log(title, target_avail_date,details );
    if (title && target_avail_date && details) {
      const response = await fetch(`/api/gigs`, {
        method: 'POST',
        body: JSON.stringify({ title, target_avail_date, details }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/api/gigs');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/gigs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/api/gigs');
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
    .querySelector('.delete-gig')
    .addEventListener('click', delButtonHandler);
  }catch{};