document.getElementById('search-icon').addEventListener('click', function() {
    const searchForm = document.getElementById('header-search-form');
    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    const pages = [
        { title: 'Home', url: 'index.html', content: 'Evon Shahriar Computer Engineer AI Researcher Welcome to My Web Archive tech innovation image analysis environmental monitoring' },
        { title: 'About', url: 'about.html', content: 'About Md Evon Shahriar Sohan Computer Engineer AI Researcher Summary Education Awards Professional Experience Skills Languages' },
        { title: 'Projects', url: 'projects.html', content: 'Projects AI-based Water Quality Monitoring System Optimizing Development Aid Allocation Navigation App for Visually Impaired' },
        { title: 'Publications', url: 'publications.html', content: 'Publications Optimizing development aid allocation data-driven approach unsupervised machine learning multidimensional indices' },
        { title: 'Weekly Journal', url: 'journal.html', content: 'Weekly Journal research learning experiences reflections academic self-development' },
        { title: 'Contact', url: 'contact.html', content: 'Contact research opportunities collaborations questions contact information email phone LinkedIn location' }
    ];

    const results = pages.filter(page => page.content.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h2><a href="${result.url}">${result.title}</a></h2>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        document.getElementById('search-input').value = query;
        document.getElementById('search-form').dispatchEvent(new Event('submit'));
    }
});
