

document.addEventListener('DOMContentLoaded', function() {

    // ======================
    // 1. FAQ Accordion Functionality
    // ======================
    // Select all FAQ boxes
    const faqBoxes = document.querySelectorAll('.faqbox');
    
    faqBoxes.forEach(box => {
        // Add click event listener to each FAQ box
        box.addEventListener('click', function() {
            // Get the span element containing the question text
            const questionSpan = this.querySelector('span');
            const questionText = questionSpan ? questionSpan.innerText : '';
            
            // Check if an answer already exists for this FAQ
            let answerDiv = this.nextElementSibling;
            
            // If the next sibling exists and has class 'faq-answer', toggle it
            if (answerDiv && answerDiv.classList && answerDiv.classList.contains('faq-answer')) {
                // Toggle visibility
                if (answerDiv.style.display === 'none' || !answerDiv.style.display) {
                    answerDiv.style.display = 'block';
                    // Change the SVG icon from plus to minus
                    changeIcon(this, 'minus');
                } else {
                    answerDiv.style.display = 'none';
                    // Change the SVG icon from minus to plus
                    changeIcon(this, 'plus');
                }
                return;
            }
            
            // If no answer exists yet, create one dynamically
            // Define answers based on the question
            let answerContent = '';
            switch(questionText) {
                case 'What is Netflix?':
                    answerContent = 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!';
                    break;
                case 'Where can I watch?':
                    answerContent = 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.';
                    break;
                case 'What can I watch on Netflix?':
                    answerContent = 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.';
                    break;
                case 'How much does Netflix cost?':
                    answerContent = 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 per month. No extra costs, no contracts.';
                    break;
                case 'How can I cancel?':
                    answerContent = 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.';
                    break;
                default:
                    answerContent = 'For more information, please visit our Help Center or contact us directly.';
            }
            
            // Create the answer div
            answerDiv = document.createElement('div');
            answerDiv.className = 'faq-answer';
            answerDiv.style.cssText = `
                background-color: #2d2d2d;
                padding: 20px;
                max-width: 50vw;
                margin: -5px auto 15px auto;
                color: white;
                font-size: 18px;
                line-height: 1.5;
                border-top: 1px solid black;
                display: block;
            `;
            answerDiv.innerText = answerContent;
            
            // Insert the answer after the clicked FAQ box
            this.parentNode.insertBefore(answerDiv, this.nextSibling);
            
            // Change the icon to minus (open state)
            changeIcon(this, 'minus');
        });
    });
    
    // Helper function to change the SVG icon between plus (+) and minus (-)
    function changeIcon(box, type) {
        const svg = box.querySelector('svg');
        if (!svg) return;
        
        if (type === 'minus') {
            // Change to minus icon (horizontal line only)
            svg.innerHTML = `
                <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            `;
        } else {
            // Change back to plus icon (cross)
            svg.innerHTML = `
                <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            `;
        }
    }
    
    // ======================
    // 2. Sign In Button Alert (Demo Purpose)
    // ======================
    const signInBtn = document.querySelector('.btn-sign');
    if (signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This is a demo Netflix clone. Sign in functionality is for demonstration purposes only.');
        });
    }
    
    // ======================
    // 3. Get Started Button Functionality
    // ======================
    const getStartedBtn = document.querySelector('.btn-get');
    const emailInput = document.querySelector('.hero-btn input[type="search"]');
    
    if (getStartedBtn && emailInput) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            
            if (email === '') {
                alert('Please enter your email address to get started!');
                // Add a temporary red border to highlight the input field
                emailInput.style.border = '2px solid red';
                setTimeout(() => {
                    emailInput.style.border = '1px solid rgba(23, 23, 23, 0.5)';
                }, 2000);
            } else if (!isValidEmail(email)) {
                alert('Please enter a valid email address (e.g., name@example.com)');
                emailInput.style.border = '2px solid red';
                setTimeout(() => {
                    emailInput.style.border = '1px solid rgba(23, 23, 23, 0.5)';
                }, 2000);
            } else {
                alert(`Thanks! You'll receive updates at ${email}. This is a demo version.`);
                emailInput.value = '';
            }
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ======================
    // 4. Navbar scroll effect (optional - adds a backdrop blur on scroll)
    // ======================
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.transition = 'all 0.3s ease';
            } else {
                nav.style.backgroundColor = 'transparent';
                nav.style.backdropFilter = 'blur(0px)';
            }
        });
    }
    
    // ======================
    // 5. Footer link click handler (demo)
    // ======================
    const footerLinks = document.querySelectorAll('.footer-item a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.innerText;
            alert(`This is a demo Netflix clone. The "${linkText}" page is for demonstration purposes only.`);
        });
    });
    
    // ======================
    // 6. Dynamic video playback check (ensure videos play properly)
    // ======================
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Check if video can play, if not, try to load again
        video.addEventListener('error', function() {
            console.log('Video failed to load. Please check the file path.');
        });
        
        // Ensure videos are muted for autoplay to work (browsers require muted for autoplay)
        video.muted = true;
        
        // Attempt to play the video
        video.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    });
    
    // ======================
    // 7. Responsive video handling for TV section
    // ======================
    function adjustVideoSize() {
        const secImgContainers = document.querySelectorAll('.secImg');
        secImgContainers.forEach(container => {
            const video = container.querySelector('video');
            const img = container.querySelector('img');
            
            if (video && img && window.innerWidth <= 960) {
                // For mobile devices, adjust video positioning
                const imgWidth = img.offsetWidth;
                if (imgWidth > 0) {
                    video.style.width = `${imgWidth - 40}px`;
                    video.style.left = '20px';
                }
            } else if (video) {
                // Reset styles for desktop
                video.style.width = '';
                video.style.left = '';
            }
        });
    }
    
    // Call on load and on resize
    window.addEventListener('load', adjustVideoSize);
    window.addEventListener('resize', adjustVideoSize);
    
    // ======================
    // 8. Add smooth scrolling for anchor links (if any)
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ======================
    // 9. Dynamic year update in footer (optional)
    // ======================
    const currentYear = new Date().getFullYear();
    const fotDiv = document.querySelector('.fot');
    if (fotDiv && !fotDiv.innerText.includes('©')) {
        // Add copyright text if not present
        const originalText = fotDiv.innerText;
        fotDiv.innerText = `${originalText} © ${currentYear} Netflix Clone Demo`;
    }
    
    // ======================
    // 10. Contact us link - add phone number tooltip or alert
    // ======================
    const contactLink = Array.from(footerLinks).find(link => link.innerText === 'Contact Us');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('For support, please visit netflix.com/help (Demo purpose only)');
        });
    }
    
    console.log('Netflix Clone JavaScript Loaded Successfully!');
});