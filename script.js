document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });

    // Menu Data
    const menuItems = [
        {
            id: 1,
            title: "Pan-Seared Scallops",
            category: "starters",
            price: 18.50,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Fresh scallops with pea puree, crispy pancetta, and micro-greens."
        },
        {
            id: 2,
            title: "Beef Tartare",
            category: "starters",
            price: 16.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Hand-cut prime beef, quail egg yolk, capers, and toasted brioche."
        },
        {
            id: 3,
            title: "Herb-Crusted Lamb Rack",
            category: "mains",
            price: 34.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Slow-roasted lamb, mint-infused jus, and seasonal root vegetables."
        },
        {
            id: 4,
            title: "Wild Mushroom Risotto",
            category: "mains",
            price: 26.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Creamy Arborio rice, truffle oil, and aged Parmesan shavings."
        },
        {
            id: 5,
            title: "Dark Chocolate Fondant",
            category: "desserts",
            price: 12.50,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Warm chocolate cake with a molten center and vanilla bean gelato."
        },
        {
            id: 6,
            title: "Lemon Sorbet",
            category: "desserts",
            price: 9.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/NWKNCzsvXvXEQszX.png",
            desc: "Refreshing house-made lemon sorbet with fresh mint garnish."
        },
        {
            id: 7,
            title: "Signature Old Fashioned",
            category: "drinks",
            price: 14.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/tqtvOkHJpdnHdNni.png",
            desc: "Premium bourbon, aromatic bitters, and a touch of maple syrup."
        },
        {
            id: 8,
            title: "Bordeaux Reserve",
            category: "drinks",
            price: 12.00,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/tqtvOkHJpdnHdNni.png",
            desc: "A rich, full-bodied red wine with notes of blackcurrant and oak."
        },
        {
            id: 9,
            title: "Sparkling Elderflower",
            category: "drinks",
            price: 8.50,
            img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663402050280/tqtvOkHJpdnHdNni.png",
            desc: "A refreshing non-alcoholic blend of elderflower, lime, and soda."
        }
    ];

    const menuContainer = document.getElementById('menu-container');
    const filterBtns = document.querySelectorAll('.menu-btn');

    // Display Menu Items
    function displayMenuItems(items) {
        let displayMenu = items.map((item) => {
            return `<article class="menu-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="menu-item-info">
                    <h3>${item.title}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p>${item.desc}</p>
            </article>`;
        });
        displayMenu = displayMenu.join("");
        menuContainer.innerHTML = displayMenu;
    }

    // Initial load
    displayMenuItems(menuItems);

    // Filter Menu
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const menuCategory = menuItems.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            if (category === "all") {
                displayMenuItems(menuItems);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

    // Reservation Form Submission
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your reservation request has been received. We will contact you shortly to confirm.`);
            reservationForm.reset();
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });
});
