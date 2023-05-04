const acceptBidHandler = async (bidId) => {
    var gigId = document.querySelector('#spanGigId').textContent;
    const is_winning_bid = true;
    const response = await fetch('/api/bids/'+bidId, {
      method: 'PUT',
      body: JSON.stringify({is_winning_bid}),
      headers: { 'Content-Type': 'application/json' },
    });
      
    if (response.ok) {
      var win_bid_date = new Date();
      const resp = await fetch('/api/gigs/'+gigId, {
        method: 'PUT',
        body: JSON.stringify({win_bid_date}),
        headers: { 'Content-Type': 'application/json' },
      });
      if(resp.ok){
        document.location.replace('/api/gigs/'+gigId);
      }
    } 
    else {
      alert(response.statusText);
    }
};


function acceptBid(bidId){
  acceptBidHandler(bidId);
}

function createBid(gigId){
  document.location.replace('/api/gigs/'+gigId+'/bid');
}
