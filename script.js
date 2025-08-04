let selectedRating = 0;
    function rate(num) {
      selectedRating = num;
      document.querySelectorAll('.ratings button').forEach((btn, index) => {
        btn.classList.remove('active', 'selected');
        if (index + 1 === num) {
          btn.classList.add('selected');
        }
      });
    }

    function submitRating() {
      if (selectedRating === 0) return alert('Please select a rating.');
      document.getElementById('rating-card').style.display = 'none';
      document.getElementById('thank-you-card').style.display = 'flex';
      document.getElementById('selected-rating').innerText = `You selected ${selectedRating} out of 5`;
    }

