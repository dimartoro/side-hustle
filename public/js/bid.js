const submitBidHandler = async () => {
    const details = document.querySelector('#bid-details').value.trim();;
    const bid_amt = document.querySelector('#bid-amount').value.trim();;
    const avail_date = document.querySelector('#bid-avail-date').value.trim();;
    const gig_id = document.querySelector('#gigId').value.trim();;
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({gig_id,details, bid_amt, avail_date}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/api/gigs/'+gig_id);
    } else {
      alert(response.statusText);
    }
};


function acceptBid(bidId){
  acceptBidHandler(bidId);
}

function createBid(gigId){
  document.location.replace('/api/gigs/'+gigId+'/bid');
}

try{
  document
  .querySelector('.new-bid-form')
  .addEventListener('submit', submitBidHandler);
}catch{}

