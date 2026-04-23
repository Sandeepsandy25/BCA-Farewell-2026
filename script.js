// ====================================================
// 1. YOUR FRIENDS DATA (add all 45 here)
// ====================================================
const friends = [
    {
        name: "Abhiram Gurudanthi",
        childhoodImg: "assets/childhood/abhiram gurudanthi.jpeg",
        latestImg: "assets/current/abhi current.jpeg"
    },
    {
        name: "S K",
        childhoodImg: "assets/childhood/karthik childhood.png",
        latestImg: "assets/current/karthik current.png"
    },
    {
        name: "Rajeswari",
        childhoodImg: "assets/childhood/rajji childhood.jpg",
        latestImg: "assets/current/rajji current.jpg"
    },
    {
        name: "Bhanu",
        childhoodImg: "assets/childhood/bhanu childhood.png",
        latestImg: "assets/current/bhanu current.jpg"
    },
    {
        name: "Bhuvana",
        childhoodImg: "assets/childhood/bhuvana childhood.jpg",
        latestImg: "assets/current/bhuvana currrent.jpg"
    },
    {
        name: "divya",
        childhoodImg: "assets/childhood/divya childhood.jpg",
        latestImg: "assets/current/divya current.jpg"
    },
    {
        name: "harika",
        childhoodImg: "assets/childhood/harika childhood.jpg",
        latestImg: "assets/current/harika current.jpg"
    },
    {
        name: "harshi ",
        childhoodImg: "assets/childhood/harshi childhood.jpg",
        latestImg: "assets/current/harshi current.jpg"
    },
    {
        name: "Karthikeya   ",
        childhoodImg: "assets/childhood/karthikeya childhood.jpg",
        latestImg: "assets/current/karthikeya current.png"
    },
    {
        name: "Mouni ",
        childhoodImg: "assets/childhood/mouni childhood.jpg",
        latestImg: "assets/current/mouni current.jpg"
    },
    {
        name: "prachu ",
        childhoodImg: "assets/childhood/prachu childhood.jpg",
        latestImg: "assets/current/prachu current.webp"
    },
    {
        name: "Praveen ",
        childhoodImg: "assets/childhood/praveen childhood.png",
        latestImg: "assets/current/praveen current.jpeg"
    },
    {
        name: "Prudhvi ",
        childhoodImg: "assets/childhood/prudhvi child hood.png",
        latestImg: "assets/current/prudhvi current.jpg"
    },
    {
        name: "Raj kumar ",
        childhoodImg: "assets/childhood/raj kumar childhood.png",
        latestImg: "assets/current/raj kumar current.jpg"
    },
    {
        name: "Rajesh  ",
        childhoodImg: "assets/childhood/rajesh childhood.jpg",
        latestImg: "assets/current/rajesh current.jpg"
    },
    {
        name: "Rishi  ",
        childhoodImg: "assets/childhood/rishi childhood.jpg",
        latestImg: "assets/current/rishi current.jpg"
    },
    {
        name: "Sameera  ",
        childhoodImg: "assets/childhood/sameera childhood.jpg",
        latestImg: "assets/current/sameera current.jpg"
    },
    {
        name: "Sindhu ",
        childhoodImg: "assets/childhood/sindhu childhood.jpg",
        latestImg: "assets/current/sindhu current.jpg"
    },
    {
        name: "Siva  ",
        childhoodImg: "assets/childhood/siva childhood.jpg",
        latestImg: "assets/current/siva current.jpg"
    },
    {
        name: "Joshua ",
        childhoodImg: "assets/childhood/joshua childhood.jpg",
        latestImg: "assets/current/joshua current.jpg"
    },
    {
        name: "Sudheer ",
        childhoodImg: "assets/childhood/sudheer childhood.jpg",
        latestImg: "assets/current/sudheer current.jpg"
    },
    {
        name: "Sushma  ",
        childhoodImg: "assets/childhood/sushma childhood.jpg",
        latestImg: "assets/current/sushma current.jpg"
    },
    {
        name: "Tanuja  ",
        childhoodImg: "assets/childhood/tanuja childhood.png",
        latestImg: "assets/current/tanuja current.jpg"
    },
    {
        name: "Teju ",
        childhoodImg: "assets/childhood/teju childhood.jpg",
        latestImg: "assets/current/teju current.jpg"
    },
    {
        name: "Ujwala ",
        childhoodImg: "assets/childhood/uJwala childhood.jpeg",
        latestImg: "assets/current/ujwala current.jpeg"
    },
    {
        name: "Valli ",
        childhoodImg: "assets/childhood/valli childhood.jpg",
        latestImg: "assets/current/valli current.jpg"
    },
    {
        name: "Varshini ",
        childhoodImg: "assets/childhood/varshini childhood.jpg",
        latestImg: "assets/current/varshini current.jpg"
    },
    {
        name: "Vishnu  ",
        childhoodImg: "assets/childhood/vishnu childhood.jpg",
        latestImg: "assets/current/vishnu current.jpg"
    },
    {
        name: "Vyshnavi ",
        childhoodImg: "assets/childhood/vyshu childhood.jpg",
        latestImg: "assets/current/vyshu current.jpg"
    }
    // Add your remaining 17 friends here following the same pattern
];

// ====================================================
// 2. GENERATE FLIP CARDS FROM THE ARRAY
// ====================================================
const childhoodGrid = document.getElementById('childhoodGrid');
if (childhoodGrid) {
    childhoodGrid.innerHTML = ''; // Clear placeholder

    friends.forEach((friend, index) => {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        flipCard.setAttribute('data-index', index);
        flipCard.setAttribute('data-name', friend.name);
        flipCard.setAttribute('data-latest-img', friend.latestImg);

        // Build card HTML
        flipCard.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-front">
                    <img src="${friend.childhoodImg}" alt="Childhood ${friend.name}" loading="lazy" 
                         onerror="this.src='https://picsum.photos/id/${20 + index}/400/400'">
                </div>
                <div class="flip-back">
                    <img src="${friend.latestImg}" alt="Latest ${friend.name}" loading="lazy" 
                         onerror="this.src='https://picsum.photos/id/${100 + index}/400/400'">
                    <div class="photo-name">✨ ${friend.name}</div>
                </div>
            </div>
        `;

        // Click event: flip + open modal
        flipCard.addEventListener('click', (e) => {
            e.stopPropagation();
            flipCard.classList.toggle('flipped');
            // Open modal with latest photo and name
            const modal = document.getElementById('photoModal');
            const modalImg = document.getElementById('modalImage');
            const modalName = document.getElementById('modalName');
            modalImg.src = friend.latestImg;
            modalName.textContent = friend.name;
            modal.classList.add('show');
        });

        childhoodGrid.appendChild(flipCard);
    });
}

// ====================================================
// 3. MODAL FUNCTIONALITY
// ====================================================
const modal = document.getElementById('photoModal');
const closeModalBtn = document.querySelector('.close-modal');

function closeModal() {
    modal.classList.remove('show');
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ====================================================
// 4. VIDEO SECTION (iframe playlist – replace with your embed URLs)
// ====================================================
// REPLACE THESE 10 URLs WITH YOUR SCREENPAL / YOUTUBE EMBED LINKS
const videoEmbedUrls = [
    "https://go.screenpal.com/player/cOfr2BnOuhg?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",   // Video 1
    "https://go.screenpal.com/player/cOfr2BnOuhk?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",   // Video 2
    "https://go.screenpal.com/player/cOfr2BnOuhC?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",   // Video 3
    "https://go.screenpal.com/player/cOfr2BnOuhE?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",   // Video 4
    "https://go.screenpal.com/player/cOfr2BnOuhG?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",   // Video 5
    "https://go.screenpal.com/player/cOfr2BnOuhm?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1"    // Video 6
        ];

let currentVideoIndex = 0;
const iframe = document.getElementById('mainVideoPlayer');
const prevBtn = document.getElementById('prevVideoBtn');
const nextBtn = document.getElementById('nextVideoBtn');
const videoCounterSpan = document.getElementById('videoCounter');

function updateVideoPlayer(index) {
    if (!iframe) return;
    if (index >= 0 && index < videoEmbedUrls.length) {
        iframe.src = videoEmbedUrls[index];
        currentVideoIndex = index;
        if (videoCounterSpan) videoCounterSpan.innerText = `Video ${index + 1} / ${videoEmbedUrls.length}`;
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === videoEmbedUrls.length - 1);
    }
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentVideoIndex > 0) {
            updateVideoPlayer(currentVideoIndex - 1);
        }
    });
    nextBtn.addEventListener('click', () => {
        if (currentVideoIndex < videoEmbedUrls.length - 1) {
            updateVideoPlayer(currentVideoIndex + 1);
        }
    });
}
updateVideoPlayer(0);

// ====================================================
// 5. GROUP PHOTO & BACKGROUND VIDEO HANDLING
// ====================================================
const groupImg = document.getElementById('groupPhoto');
if (groupImg) {
    groupImg.onerror = function() {
        this.src = "https://picsum.photos/id/104/800/500";
        this.alt = "Group Photo Placeholder";
    };
    groupImg.addEventListener('click', () => {
        groupImg.style.transform = 'scale(1.02)';
        setTimeout(() => { groupImg.style.transform = ''; }, 300);
    });
}

// Background video fallback
const bgVideo = document.querySelector('.bg-video');
if (bgVideo) {
    bgVideo.onerror = function() {
        console.log("Background video not loading, using fallback...");
        if (!bgVideo.src.includes('mixkit')) {
            bgVideo.src = "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4";
            bgVideo.load();
        }
    };
}

// Scroll effect on overlay (optional)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        const intensity = Math.min(0.9, 0.7 + scrollY / 2000);
        overlay.style.background = `radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,${intensity}) 100%)`;
    }
});

console.log("BCA Farewell Website Loaded — Custom friend list ready!");