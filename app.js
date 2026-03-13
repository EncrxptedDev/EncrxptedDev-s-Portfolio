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

    // 4. Modal Interactions
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalMedia = document.getElementById('modal-media');
    const modalLink = document.getElementById('modal-link');
    const modalTech = document.getElementById('modal-tech');

    document.addEventListener('click', (e) => {
        if (e.target.closest('.view-btn')) {
            e.preventDefault();
            
            // Find the closest project card to grab the title text directly
            // Alternatively, we can use an ID attribute. Let's add data-id and use that or title search
            const card = e.target.closest('.project-card');
            const title = card.querySelector('.project-title').textContent;
            
            // Look up project data
            const item = PORTFOLIO_DATA.find(p => p.title === title);
            
            if (item && modal) {
                modalTitle.textContent = item.title;
                modalDesc.textContent = item.description;
                
                if (item.mediaType === 'video') {
                    modalMedia.innerHTML = `<video autoplay loop muted playsinline src="${item.mediaUrl}"></video>`;
                } else {
                    modalMedia.innerHTML = `<img src="${item.mediaUrl}" alt="${item.title}">`;
                }
                
                modalLink.href = item.link;
                modalTech.innerHTML = item.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('');
                
                modal.style.display = 'flex';
                // Trigger transition
                setTimeout(() => modal.classList.add('active'), 10);
                document.body.style.overflow = 'hidden';
            }
        }
    });

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            modalMedia.innerHTML = ''; // Pause video
            document.body.style.overflow = '';
        }, 300);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 5. Copy Discord Logic
    const discordBtn = document.getElementById('copy-discord');
    if (discordBtn) {
        discordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const username = 'encrxpteddev';
            navigator.clipboard.writeText(username).then(() => {
                const originalText = '<i class="fab fa-discord"></i> encrxpteddev';
                discordBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                discordBtn.style.background = '#27c93f'; // green
                
                setTimeout(() => {
                    discordBtn.innerHTML = originalText;
                    discordBtn.style.background = ''; // reset to class default
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
