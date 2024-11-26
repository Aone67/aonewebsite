function toggleViewMore() {
    const hiddenRows = document.querySelectorAll('tr.hidden');
    const viewMoreBtn = document.querySelector('.view-more-btn');

    hiddenRows.forEach(row => {
        // Toggle between hidden and visible
        if (row.style.display === 'table-row') {
            row.style.display = 'none';
        } else {
            row.style.display = 'table-row';
        }
    });

    // Change button text based on visibility
    if (viewMoreBtn.textContent === 'View More') {
        viewMoreBtn.textContent = 'View Less';
    } else {
        viewMoreBtn.textContent = 'View More';
    }
}