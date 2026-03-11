document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Portfolio Items
    const portfolioGrid = document.getElementById('portfolio-grid');

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = ''; // Clear existing
        
        items.forEach(item => {
            // Generate Tech Stack Pills
            const techHTML = item.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('');

            // HTML Structure for a Project Card
            const cardHTML = `
                <div class="project-card" data-category="${item.category}">
                    <div class="project-media">
                        ${item.mediaType === 'video' 
                            ? `<video autoplay loop muted playsinline src="${item.mediaUrl}"></video>` 
                            : `<img src="${item.mediaUrl}" alt="${item.title}" loading="lazy">`
                        }
                        <div class="media-overlay">
                            <a href="${item.link}" target="_blank" class="view-btn">View Project</a>
                        </div>
                    </div>
                    <div class="project-info">
                        <span class="project-tag">${item.category.toUpperCase()}</span>
                        <h3 class="project-title">${item.title}</h3>
                        <p class="project-desc">${item.description}</p>
                        <div class="project-tech">
                            ${techHTML}
                        </div>
                    </div>
                </div>
            `;
            
            // Append to Grid
            portfolioGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // Initial Render
    renderPortfolio(PORTFOLIO_DATA);

    // 2. Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filter Data
            if (filterValue === 'all') {
                renderPortfolio(PORTFOLIO_DATA);
            } else {
                const filteredData = PORTFOLIO_DATA.filter(item => item.category === filterValue);
                renderPortfolio(filteredData);
            }
        });
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
