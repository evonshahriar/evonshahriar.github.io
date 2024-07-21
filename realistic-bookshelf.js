function createBookshelf() {
    const shelf = document.getElementById('shelf1');
    shelf.innerHTML = '';

    if (publications.length === 0) {
        shelf.innerHTML = '<p class="empty-message">No publications available at the moment.</p>';
    } else {
        publications.forEach((pub, index) => {
            const book = document.createElement('div');
            book.className = 'book';
            book.dataset.id = pub.id;
            
            // Vary book dimensions slightly
            const height = 170 + Math.random() * 20;
            const width = 35 + Math.random() * 10;
            book.style.height = `${height}px`;
            book.style.width = `${width}px`;
            
            // Subtle color variations
            const hue = 120 + Math.random() * 20; // Variations of green
            const saturation = 40 + Math.random() * 20;
            const lightness = 20 + Math.random() * 10;
            book.style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            book.innerHTML = `<div class="book-title">${pub.title.split(':')[0]}</div>`;
            
            // Slight random rotation for a natural look
            const randomRotation = (Math.random() - 0.5) * 2;
            book.style.transform = `rotate(${randomRotation}deg)`;
            
            shelf.appendChild(book);
        });
    }
}

// Call this function when the page loads
window.addEventListener('load', createBookshelf);
