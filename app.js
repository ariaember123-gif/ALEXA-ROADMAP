/* ===================================
   ALEXA Roadmap Website JavaScript
   Dynamic Content Rendering & Interactions
   =================================== */

// State management
let roadmapData = null;

// Category icons mapping
const categoryIcons = {
    product: '📦',
    business: '💼',
    design: '🎨',
    team: '👥',
    marketing: '📢',
    token: '🔒'
};

/* ===================================
   Initialize Application
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    loadRoadmapData();
    initializeEventListeners();
});

/* ===================================
   Load Data from JSON
   =================================== */

async function loadRoadmapData() {
    try {
        const response = await fetch('./data/roadmap-data.json');
        roadmapData = await response.json();
        renderAllContent();
    } catch (error) {
        console.error('Error loading roadmap data:', error);
        showErrorMessage();
    }
}

/* ===================================
   Render All Content
   =================================== */

function renderAllContent() {
    if (!roadmapData) return;
    
    renderOverview();
    renderTimeline();
    renderTraction();
    renderCompetitive();
    renderMonetization();
    renderFunds();
    renderQuarterly();
    renderTransparency();
}

/* ===================================
   Render Overview Section
   =================================== */

function renderOverview() {
    const { overview } = roadmapData;
    
    // Set description
    const descriptionEl = document.getElementById('overview-description');
    if (descriptionEl) {
        descriptionEl.textContent = overview.description;
    }
    
    // Render commitments list
    const commitmentsList = document.getElementById('commitments-list');
    if (commitmentsList) {
        commitmentsList.innerHTML = overview.commitments
            .map(commitment => `<li>${commitment}</li>`)
            .join('');
    }
}

/* ===================================
   Render Timeline (Main Roadmap)
   =================================== */

function renderTimeline() {
    const { sprints } = roadmapData;
    const timelineContainer = document.getElementById('timeline-container');
    
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = sprints.map(sprint => `
        <div class="sprint-container">
            <div class="sprint-marker"></div>
            
            <div class="sprint-header">
                <div class="sprint-title-wrapper">
                    <div class="sprint-number">Sprint ${sprint.id}</div>
                    <div class="sprint-weeks">Weeks ${sprint.weeks}</div>
                </div>
                <h3 class="sprint-title">${sprint.title}</h3>
                <p class="sprint-goal"><strong>Goal:</strong> ${sprint.goal}</p>
            </div>
            
            ${renderWeeks(sprint.weeks_detail)}
            
            ${renderDeliverables(sprint.deliverables)}
        </div>
    `).join('');
    
    // Initialize accordion functionality
    initializeAccordions();
}

/* ===================================
   Render Weeks (Accordion Items)
   =================================== */

function renderWeeks(weeks) {
    return weeks.map((week, index) => `
        <div class="week-accordion">
            <div class="week-header" 
                 role="button" 
                 tabindex="0" 
                 aria-expanded="false" 
                 aria-controls="week-content-${week.number}"
                 data-week="${week.number}">
                <div class="week-title-wrapper">
                    <div class="week-number">Week ${week.number}</div>
                    <div class="week-title">${week.title}</div>
                    <div class="week-summary">${week.summary}</div>
                </div>
                <div class="week-expand-icon" aria-hidden="true">▼</div>
            </div>
            
            <div class="week-content" id="week-content-${week.number}">
                <div class="week-content-inner">
                    ${renderCategories(week.categories)}
                    ${renderWeekResults(week.results)}
                </div>
            </div>
        </div>
    `).join('');
}

/* ===================================
   Render Categories
   =================================== */

function renderCategories(categories) {
    return Object.entries(categories).map(([key, items]) => `
        <div class="category-section">
            <div class="category-title">
                <span class="category-icon">${categoryIcons[key] || '📌'}</span>
                ${formatCategoryName(key)}
            </div>
            <ul class="category-list">
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

/* ===================================
   Render Week Results
   =================================== */

function renderWeekResults(results) {
    if (!results || results.length === 0) return '';
    
    return `
        <div class="week-results">
            <div class="week-results-title">Week Planned Results</div>
            <ul class="category-list">
                ${results.map(result => `<li>${result}</li>`).join('')}
            </ul>
        </div>
    `;
}

/* ===================================
   Render Deliverables
   =================================== */

function renderDeliverables(deliverables) {
    if (!deliverables || deliverables.length === 0) return '';
    
    return `
        <div class="sprint-deliverables">
            <div class="deliverables-title">Sprint Deliverables</div>
            <ul class="deliverables-list">
                ${deliverables.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

/* ===================================
   Render Traction Section
   =================================== */

function renderTraction() {
    const { traction } = roadmapData;
    
    // Render metrics
    const metricsGrid = document.getElementById('metrics-grid');
    if (metricsGrid) {
        metricsGrid.innerHTML = traction.metrics.map(metric => `
            <div class="metric-card">
                <div class="metric-label">${metric.label}</div>
                <div class="metric-value">${metric.value}</div>
            </div>
        `).join('');
    }
    
    // Render proof links
    const proofLinksList = document.getElementById('proof-links-list');
    if (proofLinksList) {
        proofLinksList.innerHTML = traction.proofLinks
            .map(link => `<li>${link}</li>`)
            .join('');
    }
}

/* ===================================
   Render Competitive Analysis
   =================================== */

function renderCompetitive() {
    const { competitive } = roadmapData;
    const competitiveGrid = document.getElementById('competitive-grid');
    
    if (!competitiveGrid) return;
    
    competitiveGrid.innerHTML = competitive.items.map(item => `
        <div class="competitive-card">
            <div class="competitive-category">${item.category}</div>
            <p class="competitive-description">${item.description}</p>
        </div>
    `).join('');
}

/* ===================================
   Render Monetization Section
   =================================== */

function renderMonetization() {
    const { monetization } = roadmapData;
    
    // Render strategy
    const strategyList = document.getElementById('strategy-list');
    if (strategyList) {
        const allItems = [
            ...monetization.strategy.items,
            ...monetization.strategy.models
        ];
        strategyList.innerHTML = allItems
            .map(item => `<li>${item}</li>`)
            .join('');
    }
    
    // Render revenue model
    const modelList = document.getElementById('model-list');
    if (modelList) {
        modelList.innerHTML = monetization.revenueModel.items
            .map(item => `<li>${item}</li>`)
            .join('');
    }
    
    // Render note
    const modelNote = document.getElementById('model-note');
    if (modelNote) {
        modelNote.textContent = monetization.revenueModel.note;
    }
}

/* ===================================
   Render Use of Funds
   =================================== */

function renderFunds() {
    const { useOfFunds } = roadmapData;
    const fundsGrid = document.getElementById('funds-grid');
    
    if (!fundsGrid) return;
    
    fundsGrid.innerHTML = useOfFunds.allocations.map(allocation => `
        <div class="fund-card">
            <div class="fund-percentage">${allocation.percentage}%</div>
            <div class="fund-category">${allocation.category}</div>
            <p class="fund-description">${allocation.description}</p>
        </div>
    `).join('');
}

/* ===================================
   Render Quarterly Roadmap
   =================================== */

function renderQuarterly() {
    const { quarterlyRoadmap } = roadmapData;
    const quarterlyGrid = document.getElementById('quarterly-grid');
    
    if (!quarterlyGrid) return;
    
    quarterlyGrid.innerHTML = quarterlyRoadmap.quarters.map(quarter => `
        <div class="quarter-card">
            <div class="quarter-header">
                <div class="quarter-name">${quarter.quarter}</div>
                <div class="quarter-period">${quarter.period}</div>
            </div>
            <div class="quarter-title">${quarter.title}</div>
            <ul class="quarter-milestones">
                ${quarter.milestones.map(milestone => `<li>${milestone}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

/* ===================================
   Render Transparency
   =================================== */

function renderTransparency() {
    const { tokenTransparency } = roadmapData;
    const transparencyStatement = document.getElementById('transparency-statement');
    
    if (transparencyStatement) {
        transparencyStatement.textContent = tokenTransparency.statement;
    }
}

/* ===================================
   Initialize Accordion Functionality
   =================================== */

function initializeAccordions() {
    const weekHeaders = document.querySelectorAll('.week-header');
    
    weekHeaders.forEach(header => {
        header.addEventListener('click', () => toggleAccordion(header));
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(header);
            }
        });
    });
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    // Multi-open accordion - toggle individual items
    if (isActive) {
        header.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        content.classList.remove('active');
    } else {
        header.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
    }
}

function openModal() {
    document.getElementById("customAlert").style.display = "flex";
}

function closeModal() {
    document.getElementById("customAlert").style.display = "none";
}

/* ===================================
   Initialize Event Listeners
   =================================== */

function initializeEventListeners() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Open waitlist modal or redirect
            document.getElementById("waitlistModal").style.display = "flex";

		// Close modal button
const closeBtn = document.getElementById("closeModalBtn");

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.getElementById("waitlistModal").style.display = "none";
    });
}

        });
    });
    
    // Add scroll indicator to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

/* ===================================
   Helper Functions
   =================================== */

function formatCategoryName(key) {
    const names = {
        product: 'Product / Research',
        business: 'Business / Strategy',
        design: 'Design / Brand',
        team: 'Team',
        marketing: 'Marketing / Community',
        token: 'Token / Trust'
    };
    return names[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function showErrorMessage() {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 64px 0;">
                <h2 style="color: #FF0000;">Error Loading Content</h2>
                <p style="color: #888;">Please refresh the page or try again later.</p> 
            </div>
        `;
    }
}

/* ===================================
   Performance Optimization
   =================================== */

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ===================================
   Export for testing (optional)
   =================================== */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadRoadmapData,
        renderTimeline,
        toggleAccordion
    };
}
