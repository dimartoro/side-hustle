const acceptBidHandler = async (bidId) => {
    alert("I was called");
    var gigId = 1;
    var bidId = 1;
    const response = await fetch('/api/gigs', {
      method: 'PUT',
      body: JSON.stringify({ gigId,bidId}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/gig/1');
    } else {
      alert(response.statusText);
    }
};




function acceptBid(bidId){
  acceptBidHandler(bidId);
}




document
.querySelector('btnAcceptBid')
.addEventListener('click', acceptBidHandler);