// Add CSS styles for video controls
const videoStyles = document.createElement('style');
videoStyles.textContent = `
    .video-controls-container {
        position: absolute;
        bottom: 70px;
        left: 20px;
        right: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 3;
    }
    
    .video-controls-container.visible {
        opacity: 1;
    }
    
    .video-progress-bar {
        position: relative;
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 10px;
        overflow: visible;
    }
    
    .video-progress-filled {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: var(--primary);
        border-radius: 3px;
        transition: width 0.1s linear;
        pointer-events: none;
    }
    
    .video-progress-handle {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 14px;
        height: 14px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        cursor: grab;
        transition: transform 0.2s ease;
    }
    
    .video-progress-handle:hover {
        transform: translate(-50%, -50%) scale(1.2);
    }
    
    .video-progress-handle:active {
        cursor: grabbing;
        transform: translate(-50%, -50%) scale(1.1);
    }
    
    .video-time {
        color: white;
        font-size: 12px;
        font-weight: 500;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        display: flex;
        gap: 5px;
    }
    
    .hero-video-wrapper:hover .video-controls-container {
        opacity: 1;
    }
    
    /* Adjust video control button position */
    .video-control {
        bottom: 20px !important;
    }
`;
document.head.appendChild(videoStyles);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add this to your script.js file after the existing header scroll effect code

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    const body = document.body;
    
    // Create mobile menu overlay
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileMenuOverlay);
    
    // Toggle mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active classes
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Animate hamburger lines
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navContainer.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Reset hamburger animation
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
    
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                mobileMenuBtn.classList.remove('active');
                navContainer.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Reset hamburger animation
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset hamburger animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (spans.length > 0) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#top' || targetId === '#') {
            // Scroll to top for logo click
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            // Scroll to specific section
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80; // Account for fixed header
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({ 
                    top: targetPosition, 
                    behavior: 'smooth' 
                });
            }
        }
    });
});

// Special handler for logo click
document.getElementById('logoLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
});

// Video Controls - FIXED AND ENHANCED
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    const videoControl = document.getElementById('videoControl');
    const videoWrapper = document.querySelector('.hero-video-wrapper');
    
    if (video && videoControl) {
        // Play/Pause functionality
        videoControl.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (video.paused) {
                video.play();
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                video.pause();
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
        
        // Create video progress bar and controls container
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'video-controls-container';
        controlsContainer.innerHTML = `
            <div class="video-progress-bar">
                <div class="video-progress-filled"></div>
                <div class="video-progress-handle"></div>
            </div>
            <div class="video-time">
                <span class="current-time">0:00</span> / <span class="total-time">0:00</span>
            </div>
        `;
        videoWrapper.appendChild(controlsContainer);
        
        const progressBar = controlsContainer.querySelector('.video-progress-bar');
        const progressFilled = controlsContainer.querySelector('.video-progress-filled');
        const progressHandle = controlsContainer.querySelector('.video-progress-handle');
        const currentTimeSpan = controlsContainer.querySelector('.current-time');
        const totalTimeSpan = controlsContainer.querySelector('.total-time');
        
        // Format time helper function
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }
        
        // Update progress bar as video plays
        video.addEventListener('timeupdate', function() {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = percent + '%';
            progressHandle.style.left = percent + '%';
            currentTimeSpan.textContent = formatTime(video.currentTime);
        });
        
        // Set total duration when metadata loads
        video.addEventListener('loadedmetadata', function() {
            totalTimeSpan.textContent = formatTime(video.duration);
        });
        
        // Click on progress bar to seek
        progressBar.addEventListener('click', function(e) {
            const rect = progressBar.getBoundingClientRect();
            const percent = ((e.clientX - rect.left) / rect.width);
            video.currentTime = percent * video.duration;
        });
        
        // Drag functionality for progress handle
        let isDragging = false;
        
        progressHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const rect = progressBar.getBoundingClientRect();
                let percent = ((e.clientX - rect.left) / rect.width);
                percent = Math.max(0, Math.min(1, percent)); // Clamp between 0 and 1
                video.currentTime = percent * video.duration;
            }
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Add keyboard controls
        document.addEventListener('keydown', function(e) {
            // Only work if video is in view
            const rect = video.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (inView) {
                switch(e.key) {
                    case ' ': // Spacebar for play/pause
                        e.preventDefault();
                        videoControl.click();
                        break;
                    case 'ArrowLeft': // Rewind 5 seconds
                        e.preventDefault();
                        video.currentTime = Math.max(0, video.currentTime - 5);
                        break;
                    case 'ArrowRight': // Forward 5 seconds
                        e.preventDefault();
                        video.currentTime = Math.min(video.duration, video.currentTime + 5);
                        break;
                }
            }
        });
        
        // Show controls on hover
        let hideControlsTimeout;
        
        videoWrapper.addEventListener('mouseenter', function() {
            controlsContainer.classList.add('visible');
            clearTimeout(hideControlsTimeout);
        });
        
        videoWrapper.addEventListener('mouseleave', function() {
            hideControlsTimeout = setTimeout(() => {
                if (!video.paused) {
                    controlsContainer.classList.remove('visible');
                }
            }, 2000);
        });
        
        // Keep controls visible when paused
        video.addEventListener('pause', function() {
            controlsContainer.classList.add('visible');
        });
        
        video.addEventListener('play', function() {
            setTimeout(() => {
                if (!videoWrapper.matches(':hover')) {
                    controlsContainer.classList.remove('visible');
                }
            }, 2000);
        });
    }
});

// Gallery Slider Functionality
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let countItem = items.length;
let itemActive = 0;

// Next button click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// Previous button click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto play slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider(){
    // Remove old active class
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Add new active class
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    
    // Clear and reset auto play timer
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

// Click on thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// Team Carousel
let currentTeamSlide = 0;
const teamGrid = document.getElementById('teamGrid');
const teamCards = document.querySelectorAll('.team-card');
const totalTeamMembers = teamCards.length;
const teamDots = document.querySelectorAll('.team-dot');
let visibleTeamCards = window.innerWidth > 1200 ? 4 : window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;

function updateTeamView() {
    visibleTeamCards = window.innerWidth > 1200 ? 4 : window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;
    const maxSlides = Math.ceil(totalTeamMembers / visibleTeamCards);
    
    // Update dots
    const dotsContainer = document.getElementById('teamDots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < maxSlides; i++) {
        const dot = document.createElement('button');
        dot.className = i === currentTeamSlide ? 'team-dot active' : 'team-dot';
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => {
            currentTeamSlide = i;
            updateTeamView();
        });
        dotsContainer.appendChild(dot);
    }
    
    // Update carousel position
    const offset = -(currentTeamSlide * 100);
    teamGrid.style.transform = `translateX(${offset}%)`;
}

document.getElementById('teamNext').addEventListener('click', () => {
    const maxSlides = Math.ceil(totalTeamMembers / visibleTeamCards) - 1;
    currentTeamSlide = (currentTeamSlide + 1) > maxSlides ? 0 : currentTeamSlide + 1;
    updateTeamView();
});

document.getElementById('teamPrev').addEventListener('click', () => {
    const maxSlides = Math.ceil(totalTeamMembers / visibleTeamCards) - 1;
    currentTeamSlide = currentTeamSlide - 1 < 0 ? maxSlides : currentTeamSlide - 1;
    updateTeamView();
});

// Update on window resize
window.addEventListener('resize', () => {
    updateTeamView();
});

// Initialize team view
updateTeamView();

// ============================================================
// TESTIMONIALS CAROUSEL CODE REMOVED 
// (Since we changed to a static 4-review display)
// ============================================================

// Color Palette Functionality
const colorOptions = document.querySelectorAll('.color-option');
const colorPreview = document.getElementById('colorPreview');

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        // Update preview
        colorPreview.style.backgroundColor = color;
        colorPreview.innerHTML = `<span class="color-preview-label">${color}</span>`;
        
        // Update active state
        colorOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
    });
});

// Custom Color Picker - Add this functionality
document.addEventListener('DOMContentLoaded', function() {
    const customColorPicker = document.getElementById('customColorPicker');
    const customColorValue = document.getElementById('customColorValue');
    const colorPreview = document.getElementById('colorPreview');
    
    if (customColorPicker && customColorValue) {
        // Handle custom color picker changes
        customColorPicker.addEventListener('input', function(e) {
            const selectedColor = e.target.value;
            
            // Update the preview area
            if (colorPreview) {
                colorPreview.style.backgroundColor = selectedColor;
                colorPreview.innerHTML = `<span class="color-preview-label">${selectedColor.toUpperCase()}</span>`;
            }
            
            // Update the hex value display
            customColorValue.textContent = selectedColor.toUpperCase();
            
            // Remove active state from preset colors
            const colorOptions = document.querySelectorAll('.color-option');
            colorOptions.forEach(opt => opt.classList.remove('active'));
        });
        
        // Initialize the display
        customColorValue.textContent = customColorPicker.value.toUpperCase();
    }
});