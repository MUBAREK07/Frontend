document.addEventListener('DOMContentLoaded', () => {
    // --- Data Definitions ---
    const portfolioData = [
        {
            id: 1,
            category: 'Logo Design',
            title: 'My Logo',
            thumbnail: 'images/Mubarek Logo.jpg',
            imageUrl: 'images/Mubarek Logo.jpg',
            description: 'This design describes me as I am a graphic designer with easy contact information on the design',
            fullDescription: 'The logo features a sleek, modern typographic design with creative letter extensions that give the logo a unique identity. Paired with a minimalist layout, subtle coloring, and clear contact icons, it presents a professional and stylish brand image for a graphic designer.',
            toolsUsed: ['Adobe Photoshop'],
            
        },
        {
            id: 2,
            category: 'social media post',
            title: 'Aydas nail poster',
            thumbnail: 'images/Aydas nail poster.jpg',
            imageUrl: 'images/Aydas nail poster.jpg',
            description: 'A personal project exploring detailed digital illustrations of mythical creatures.',
            fullDescription: 'This personal series delves into the rich folklore of various cultures, bringing mythical creatures to life through intricate digital painting. Each piece aims to evoke wonder and tell a story, showcasing my illustrative style and attention to detail.',
            toolsUsed: ['Adobe Photoshop'],
            caseStudyLink: '#'
        },
        {
            id: 3,
            category: 'UI/UX Design',
            title: 'UI/UX Design',
            thumbnail: 'images/6.jpg',
            imageUrl: 'images/6.jpg',
            description: 'A personal project focuses on user-friendly compositions, consistent branding, and eye-catching visuals that make content instantly appealing across digital platforms.',
            fullDescription: 'I design clean, visually engaging interfaces that blend strong layout, bold color balance, and clear hierarchy. My work focuses on user-friendly compositions, consistent branding, and eye-catching visuals that make content instantly appealing across digital platforms.',
            toolsUsed: ['Adobe Photoshop', 'Figma', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 4,
            category: 'social media post',
            title: 'Netsishop Furniture',
            thumbnail: 'images/netsi.jpg',
            imageUrl: 'images/netsi.jpg',
            description: 'social media poster features a clean, modern layout, balanced colors, structured typography and clear call-to-action design.',
            fullDescription: 'A clean, modern furniture poster featuring a bold product display, clear discount highlight, and strong call-to-action. Balanced colors, structured layout, and organized contact details create an appealing, professional social media design that effectively promotes the brand and enhances audience engagement across digital platforms.',
            toolsUsed: ['Adobe Photoshop', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        
        {
            id: 5,
            category: 'social media post',
            title: 'Netsishop Furniture',
            thumbnail: 'images/Netsishop Furniture_1.jpg',
            imageUrl: 'images/Netsishop Furniture_1.jpg',
            description: 'social media poster features a clean, modern layout, balanced colors, structured typography and clear call-to-action design.',
            fullDescription: 'A clean, modern furniture poster featuring a bold product display, clear discount highlight, and strong call-to-action. Balanced colors, structured layout, and organized contact details create an appealing, professional social media design that effectively promotes the brand and enhances audience engagement across digital platforms.',
            toolsUsed: ['Adobe Photoshop', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 6,
            category: 'social media post',
            title: 'Netsishop Furniture',
            thumbnail: 'images/Netsishop Furniture_2.jpg',
            imageUrl: 'images/Netsishop Furniture_2.jpg',
            description: 'social media poster features a clean, modern layout, balanced colors, structured typography and clear call-to-action design.',
            fullDescription: 'A lone young woman stands in the foreground of a devastated city, her weathered face lit by the eerie glow of a colossal burnt-orange sun looming low in the sky. She wears a dark, rugged jacket and a hood, her expression a mix of fatigue, quiet grief, and stubborn determination. Around her, jagged skeletal skyscrapers rise like tombstones from a landscape of rubble and dust, fading into a smoky, ash-colored atmosphere. The bold, clean white typography of the title and author name cuts sharply through the muted, desaturated palette, reinforcing the contrast between a shattered past and the fragile promise of a new tomorrow.',
            toolsUsed: ['Adobe Photoshop', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 7,
            category: 'Print Media',
            title: 'Whispers of Tomorrow',
            thumbnail: 'images/whispers of tomorrow_1.jpg',
            imageUrl: 'images/whispers of tomorrow_1.jpg',
            description: 'A book cover design of A lone survivor stands in a ruined city beneath a massive burnt-orange sun, her expression mixing hardship and resolve. Crumbling skyscrapers fade into a hazy horizon, suggesting a world in decay. Bold white typography hints that, despite devastation, a faint whisper of hope still pushes toward tomorrow.',
            fullDescription: 'Book cover which describes a lone young woman stands in the foreground of a devastated city, her weathered face lit by the eerie glow of a colossal burnt-orange sun looming low in the sky. She wears a dark, rugged jacket and a hood, her expression a mix of fatigue, quiet grief, and stubborn determination. Around her, jagged skeletal skyscrapers rise like tombstones from a landscape of rubble and dust, fading into a smoky, ash-colored atmosphere. The bold, clean white typography of the title and author name cuts sharply through the muted, desaturated palette, reinforcing the contrast between a shattered past and the fragile promise of a new tomorrow.',
            toolsUsed: ['Adobe Photoshop', 'Adobe Illustrator', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 8,
            category: 'social media post',
            title: 'Aydas Nails Cosmotic Brochure',
            thumbnail: 'images/aydas_nails_cosmotic brochure.jpg',
            imageUrl: 'images/aydas_nails_cosmotic brochure.jpg',
            description: 'Sleek cosmetic brochure for “Aydas Nails” highlighting nail fixing, pedicure, manicure, piercing, pampering, and acrylic overlay. Clean black, white, and pink layout with contact details, QR code, and imagery, promoting professional, convenient home nail care.',
            fullDescription: 'This sleek cosmetic brochure for “Aydas Nails” presents a polished overview of premium nail services, including nail fixing, pedicure, manicure, piercing, pampering, and acrylic overlay. A clean black, white, and pink color scheme creates a modern, feminine look that draws attention to the central contact details, phone numbers, and email, supported by a QR code and website link for easy booking. Manicured hand imagery and a home-service note reinforce professional, salon-quality care delivered conveniently to clients’ doors.',
            toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 9,
            category: 'social media post',
            title: 'Mr. King Restaurant',
            thumbnail: 'images/2.jpg',
            imageUrl: 'images/2.jpg',
            description: 'Modern restaurant promo poster for “Mr. King Restaurant & Cafe,” featuring appetizing photos of Italian pasta, chicken rice, chocolate bread, and a bowl of ice cream, with playful splashes and clear contact icons.',
            fullDescription: 'Modern restaurant promo poster for “Mr. King Restaurant & Cafe,” featuring appetizing photos of Italian pasta, chicken rice, chocolate bread, and a bowl of ice cream, with playful splashes and clear contact icons.',
            toolsUsed: ['Adobe  Photoshop', 'Adobe Illustrator', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 10,
            category: 'social media post',
            title: 'Netsishop Furniture',
            thumbnail: 'images/Netsishop Furniture_3.jpg',
            imageUrl: 'images/Netsishop Furniture_3.jpg',
            description: 'Vintage-style furniture sale poster featuring ornate bookcases on a stage, striped brown background, bold “NETSISHOP FURNITURE” text, and black discount badge advertising 45% off with an “Order Now” button.',
            fullDescription: 'Vintage furniture advertisement showcasing three ornate wooden bookcases filled with colorful books and decorative items, arranged on a round stage against a striped brown background. The poster headline reads “NETSISHOP FURNITURE,” with a tagline “Furniture that defines your lifestyle.” A black discount badge highlights “45% OFF” and an “ORDER NOW” button, visually guiding viewers toward a limited-time promotional furniture offer.',
            toolsUsed: ['Adobe  Photoshop', 'Adobe Illustrator', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        {
            id: 11,
            category: 'social media post',
            title: 'Tutoring Service Poster',
            thumbnail: 'images/4.jpg',
            imageUrl: 'images/4.jpg',
            description: 'Colorful educational poster for “Rise Up Astegn Company” tutoring, highlighting math, physics, chemistry, English and computer skills for grades 6–12, with engaging child–mentor imagery and clear contact and social media details.',
            fullDescription: 'The poster design for Rise Up Astegn Company uses bright orange and blue tones with a rising-sun logo to symbolize growth and inspiration for students in grades 6–12. It features bold, friendly typography and a checklist highlighting key subjects: mathematics, physics, chemistry, English, and computer skills. A circular photo layout shows caring tutor–student interaction, reinforcing a supportive learning environment. Clear Amharic messaging, concise English headings, and easily visible phone numbers ensure quick understanding and response. Social media icons at the bottom emphasize modern, connected tutoring services for Addis Ababa learners.',
            toolsUsed: ['Adobe  Photoshop', 'Adobe Illustrator', 'and', 'Canva'],
            caseStudyLink: '#'
        },
        // Add more projects as needed
    ];

    const testimonialsData = [
        {
            quote: "Your Name transformed our outdated brand into something truly spectacular. Their attention to detail and creative vision are unmatched!",
            client: "Jane Doe",
            title: "CEO, Innovate Solutions"
        },
        {
            quote: "Working with Your Name was a breeze. They understood our needs perfectly and delivered a stunning website design that exceeded our expectations.",
            client: "John Smith",
            title: "Marketing Director, Global Corp"
        },
        {
            quote: "The illustrations Your Name created for our children's book were magical. They captured the essence of our stories beautifully.",
            client: "Alice Brown",
            title: "Author & Publisher"
        },
    ];

    // --- DOM Elements ---
    const body = document.body;
    const header = document.querySelector('.header');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');

    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const projectModal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectCategory = document.getElementById('modal-project-category');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectTools = document.getElementById('modal-project-tools');
    const modalCaseStudyLink = document.getElementById('modal-case-study-link');

    const contactForm = document.getElementById('contact-form');

    const testimonialSlider = document.getElementById('testimonial-slider');
    const prevTestimonialBtn = document.getElementById('prev-testimonial');
    const nextTestimonialBtn = document.getElementById('next-testimonial');
    let currentTestimonialIndex = 0;

    const currentYearSpan = document.getElementById('current-year');


    // --- Functions ---

    // Sets the current year in the footer
    function setCurrentYear() {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Navigation for showing/hiding sections
    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1); // Remove #
                showSection(targetId);
                // Update active nav
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                // Close mobile nav if open
                if (navList.classList.contains('active')) {
                    toggleMobileNav();
                }
            });
        });
    }

    // Function to show a specific section and hide others
    function showSection(sectionId) {
        const allSections = document.querySelectorAll('main section');
        allSections.forEach(section => section.classList.add('hidden'));
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Toggle mobile navigation menu
    function toggleMobileNav() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('modal-open'); // Prevent scroll when nav is open
    }

    // Render portfolio items into the grid
    function renderPortfolio(projectsToRender) {
        portfolioGrid.innerHTML = ''; // Clear existing items

        if (projectsToRender.length === 0) {
            portfolioGrid.innerHTML = '<p class="no-projects">No projects found for this category.</p>';
            return;
        }

        projectsToRender.forEach(project => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.dataset.id = project.id; // Store project ID for modal

            portfolioItem.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });

        // Add event listeners to newly created portfolio items for modal
        const currentPortfolioItems = portfolioGrid.querySelectorAll('.portfolio-item');
        currentPortfolioItems.forEach(item => {
            item.addEventListener('click', () => openProjectModal(item.dataset.id));
        });
    }

    // Filter portfolio items
    function filterProjects(category) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add('active');

        const filtered = category === 'all'
            ? portfolioData
            : portfolioData.filter(project => project.category === category);

        renderPortfolio(filtered);
    }

    // Open project detail modal
    function openProjectModal(projectId) {
        const project = portfolioData.find(p => p.id == projectId);
        if (project) {
            modalProjectImage.src = project.imageUrl;
            modalProjectTitle.textContent = project.title;
            modalProjectCategory.textContent = project.category.replace(/-/g, ' ').toUpperCase(); // Format category
            modalProjectDescription.textContent = project.fullDescription;
            modalProjectTools.innerHTML = `<strong>Tools Used:</strong> ${project.toolsUsed.join(', ')}`;

            if (project.caseStudyLink && project.caseStudyLink !== '#') {
                modalCaseStudyLink.href = project.caseStudyLink;
                modalCaseStudyLink.style.display = 'inline-flex';
            } else {
                modalCaseStudyLink.style.display = 'none';
            }

            projectModal.classList.add('active');
            body.classList.add('modal-open');
        }
    }

    // Close project detail modal
    function closeProjectModal() {
        projectModal.classList.remove('active');
        body.classList.remove('modal-open');
    }

    // Handle contact form submission
    function handleContactFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // In a real application, you'd send this data to a backend server
        // For a static site, you can use a service like Formspree or Netlify Forms
        // Or simply open a mailto link (less professional but works for static)
        console.log('Form Submitted:', { name, email, subject, message });

        // Example: Using mailto (uncomment to enable)
        // const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        // window.location.href = mailtoLink;
        // alert('Thank you for your message! I will get back to you shortly.');
        const mailtoLink =
            `mailto:bmubarek52@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

        window.location.href = mailtoLink;

        alert('Thank you for your message! (This is a demo, form data logged to console.)');
        contactForm.reset(); // Clear the form
    }

    // Render testimonials
    function renderTestimonials() {
        testimonialSlider.innerHTML = ''; // Clear existing
        testimonialsData.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.classList.add('testimonial-card');
            if (index === 0) testimonialCard.classList.add('active'); // Show first one initially

            testimonialCard.innerHTML = `
                <i class="fas fa-quote-left quote-icon"></i>
                <p>"${testimonial.quote}"</p>
                <div class="client-info">
                    <p class="client-name">${testimonial.client}</p>
                    <p class="client-title">${testimonial.title}</p>
                </div>
            `;
            testimonialSlider.appendChild(testimonialCard);
        });
    }

    // Show next testimonial
    function showNextTestimonial() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    }

    // Show previous testimonial
    function showPrevTestimonial() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    }




    // Lazy Loading Images (for images not in the initial viewport)
    // Using Intersection Observer for more efficient lazy loading
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // For `img src`
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    // If you also had `img srcset`
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.removeAttribute('loading'); // Remove lazy loading attribute once loaded
                    img.classList.add('loaded'); // Optional: for fade-in effect
                    observer.unobserve(img); // Stop observing once loaded
                }
            });
        });

        lazyImages.forEach(img => {
            // Check if image is already in viewport on page load
            if (img.getBoundingClientRect().top < window.innerHeight) {
                 // Already in view, load immediately without observer
                if (img.dataset.src) img.src = img.dataset.src;
                if (img.dataset.srcset) img.srcset = img.dataset.srcset;
                img.removeAttribute('loading');
                img.classList.add('loaded');
            } else {
                // Otherwise, observe it
                imageObserver.observe(img);
            }
        });
    };
    // Note: In this HTML, `src` is used directly. For true lazy loading, use `data-src`
    // and transfer to `src` when intersecting. For simplicity, I've kept `src` directly
    // in HTML and use `loading="lazy"` which browsers support natively.
    // If you wanted a JS-driven lazy load for all images, you'd change `src` to `data-src` in HTML.


    // --- Event Listeners & Initializations ---

    // Set current year
    setCurrentYear();

    // Setup navigation
    showSection('hero');
    setupNavigation();

    // Handle all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            console.log('Link clicked:', href);
            if (href !== '#') {
                e.preventDefault();
                const id = href.substring(1);
                console.log('Showing section:', id);
                showSection(id);
                // Update nav active
                navLinks.forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href') === href) {
                        l.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile navigation toggle
    hamburger.addEventListener('click', toggleMobileNav);

    // Initial portfolio render
    renderPortfolio(portfolioData);

    // Portfolio filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterProjects(button.dataset.category);
        });
    });

    // Service cards click to navigate to portfolio with filter
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            let category = 'all'; // default
            if (title.includes('Brand Identity') || title.includes('Logo Design')) {
                category = 'Logo Design';
            } else if (title.includes('UI/UX')) {
                category = 'UI/UX Design';
            } else if (title.includes('Print Media')) {
                category = 'Print Media';
            } else if (title.includes('Social media')) {
                category = 'social media post';
            }
            showSection('portfolio');
            filterProjects(category);
            // Update nav active
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[href="#portfolio"]').classList.add('active');
        });
    });

    // Modal close button and clicking outside the modal
    closeModalBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) { // Check if click is directly on the overlay
            closeProjectModal();
        }
    });

    // Contact form submission
    contactForm.addEventListener('submit', handleContactFormSubmit);

    // Testimonial slider initialization and controls
    renderTestimonials();
    prevTestimonialBtn.addEventListener('click', showPrevTestimonial);
    nextTestimonialBtn.addEventListener('click', showNextTestimonial);

    // Trigger lazy loading
    lazyLoadImages(); // Although `loading="lazy"` is native, this can add a custom fade-in or handle background images
});