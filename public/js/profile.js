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
        document.location.replace('/profile');
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
        document.location.replace('/profile');
      } else {
        alert('Failed to delete Gig');
      }
    }
  };


  function showCreateGig(){
    var currentValue = document.querySelector("#btnShowCreateGig").textContent;
    if(currentValue == "Cancel"){
      document.querySelector("#divCreateGig").classList.add('hidden');
      document.querySelector("#btnShowCreateGig").textContent = "Create a New Gig";
    }else{
      document.querySelector("#divCreateGig").classList.remove('hidden');
      document.querySelector("#btnShowCreateGig").textContent = "Cancel";
    }
  }
  
  try{
  document
    .querySelector('.new-gig-form')
    .addEventListener('submit', newFormHandler);
  }catch{};
  
  try{document
    .querySelector('.delete-gig')
    .addEventListener('click', delButtonHandler);
  }catch{};

  try{document
    .querySelector('#btnShowCreateGig')
    .addEventListener('click', showCreateGig);
  }catch{};
  //btnShowCreateGig