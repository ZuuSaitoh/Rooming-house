/**
 * AN NHIÊN HOUSE - INTERACTIVE JAVASCRIPT LOGIC
 * Features: Sticky Header, Mobile Navigation, Modal Popups, Scrollspy, Back-to-top
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const header = document.getElementById('header');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const modalBackdrops = document.querySelectorAll('.modal-backdrop');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const sections = document.querySelectorAll('section[id]');

    // --- Sticky Header Scroll Effect ---
    const handleHeaderScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Trigger initially

    // --- Mobile Menu Toggle ---
    const toggleMobileMenu = () => {
        const isActive = navMenu.classList.toggle('active');
        menuToggleBtn.classList.toggle('active');
        menuToggleBtn.setAttribute('aria-expanded', isActive);
        
        // Disable scroll when mobile menu is open
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    menuToggleBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // --- Room Detail Modals System ---
    
    // Open Modal
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Lock background scroll
                
                // Focus on close button inside the modal for accessibility
                const closeBtn = modal.querySelector('.modal-close');
                if (closeBtn) closeBtn.focus();
            }
        });
    });

    // Close Modal Function
    const closeModal = (modal) => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        
        // Re-enable background scrolling if no other modals are open
        const anyModalOpen = Array.from(modalBackdrops).some(m => m.classList.contains('open'));
        if (!anyModalOpen && !navMenu.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    };

    // Attach Close Listeners (clicking close button or clicking backdrop background)
    modalBackdrops.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        
        // Close on button click
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }

        // Close on clicking the semi-transparent backdrop background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close Modal on pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal-backdrop.open');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // --- Scrollspy Navigation & Back to Top Button ---
    const handleWindowScroll = () => {
        const scrollPosition = window.scrollY + 100; // Offset for header

        // Active navigation link highlighting based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Show/hide Back to Top button
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', handleWindowScroll);
    handleWindowScroll(); // Trigger initially
});
