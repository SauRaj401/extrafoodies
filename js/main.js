document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navigation-wrap');
    const menuButton = document.querySelector('.navbar-toggler');
    const collapseElement = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    const setNavbarState = () => {
        if (!navbar) {
            return;
        }

        if (window.scrollY > 20) {
            navbar.classList.add('scroll-on');
        } else {
            navbar.classList.remove('scroll-on');
        }
    };

    setNavbarState();
    window.addEventListener('scroll', setNavbarState);

    const closeMenu = () => {
        if (!collapseElement || !menuButton) {
            return;
        }

        collapseElement.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton?.addEventListener('click', () => {
        if (!collapseElement) {
            return;
        }

        const isOpen = collapseElement.classList.toggle('show');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            closeMenu();
        }
    });

    document.querySelectorAll('[data-count]').forEach((element) => {
        const target = Number(element.dataset.count) || 0;
        element.textContent = target.toLocaleString();
    });

    const slider = document.querySelector('[data-slider]');
    if (slider) {
        const slides = Array.from(slider.querySelectorAll('[data-slider-slide]'));
        const prevButton = slider.querySelector('[data-slider-prev]');
        const nextButton = slider.querySelector('[data-slider-next]');
        const dotsContainer = slider.querySelector('[data-slider-dots]');
        let currentIndex = 0;

        const dots = slides.map((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'slider__dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            if (dotsContainer) dotsContainer.appendChild(dot);
            return dot;
        });

        const updateSlider = () => {
            slides.forEach((slide, i) => {
                slide.style.display = i === currentIndex ? 'block' : 'none';
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('is-active', index === currentIndex);
            });
        };

        const goToSlide = (index) => {
            currentIndex = (index + slides.length) % slides.length;
            updateSlider();
        };

        prevButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));

        updateSlider();
    }

    document.querySelectorAll('[data-accordion-item]').forEach((item) => {
        const button = item.querySelector('[data-accordion-button]');
        const panel = item.querySelector('[data-accordion-panel]');

        if (!button || !panel) {
            return;
        }

        const setOpenState = (isOpen) => {
            button.setAttribute('aria-expanded', String(isOpen));
            panel.hidden = !isOpen;
        };

        setOpenState(button.getAttribute('aria-expanded') === 'true');

        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('[data-accordion-item]').forEach((otherItem) => {
                const otherButton = otherItem.querySelector('[data-accordion-button]');
                const otherPanel = otherItem.querySelector('[data-accordion-panel]');

                if (otherButton && otherPanel) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherPanel.hidden = true;
                }
            });

            setOpenState(!isOpen);
        });
    });

    const contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) {
        const formStatus = contactForm.querySelector('[data-form-status]');
        const fields = {
            name: contactForm.querySelector('#contact-name'),
            email: contactForm.querySelector('#contact-email'),
            subject: contactForm.querySelector('#contact-subject'),
            message: contactForm.querySelector('#contact-message'),
        };

        const showError = (field, message) => {
            const error = contactForm.querySelector(`[data-error-for="${field.id}"]`);
            if (error) {
                error.textContent = message;
            }
            field.classList.toggle('is-invalid', Boolean(message));
        };

        const clearStatus = () => {
            if (formStatus) {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }
        };

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            clearStatus();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const values = {
                name: fields.name?.value.trim() || '',
                email: fields.email?.value.trim() || '',
                subject: fields.subject?.value.trim() || '',
                message: fields.message?.value.trim() || '',
            };

            let isValid = true;

            if (values.name) {
                showError(fields.name, '');
            } else {
                showError(fields.name, 'Enter your full name.');
                isValid = false;
            }

            if (emailPattern.test(values.email)) {
                showError(fields.email, '');
            } else {
                showError(fields.email, 'Enter a valid email address.');
                isValid = false;
            }

            if (values.subject) {
                showError(fields.subject, '');
            } else {
                showError(fields.subject, 'Choose a subject.');
                isValid = false;
            }

            if (values.message.length < 10) {
                showError(fields.message, 'Write at least 10 characters.');
                isValid = false;
            } else {
                showError(fields.message, '');
            }

            if (!isValid) {
                if (formStatus) {
                    formStatus.textContent = 'Please fix the highlighted fields.';
                    formStatus.classList.add('is-error');
                }
                return;
            }

            contactForm.reset();
            if (formStatus) {
                formStatus.textContent = 'Thanks. Your message has been prepared for submission.';
                formStatus.classList.add('is-success');
            }
        });
    }
});