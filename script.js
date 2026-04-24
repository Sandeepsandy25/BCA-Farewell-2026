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
];

// ====================================================
// 2. GENERATE FLIP CARDS
// ====================================================
const childhoodGrid = document.getElementById('childhoodGrid');
if (childhoodGrid) {
    childhoodGrid.innerHTML = '';
    friends.forEach((friend, index) => {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
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
        flipCard.addEventListener('click', (e) => {
            e.stopPropagation();
            flipCard.classList.toggle('flipped');
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
// 3. MODAL
// ====================================================
const modal = document.getElementById('photoModal');
const closeModalBtn = document.querySelector('.close-modal');
function closeModal() { modal.classList.remove('show'); }
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ====================================================
// 4. VIDEO PLAYLIST
// ====================================================
const videoEmbedUrls = [
    "https://go.screenpal.com/player/cOfr2BnOuhg?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOfr2BnOuhk?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOfr2BnOuhC?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOfr2BnOuhE?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOfr2BnOuhG?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
    "https://go.screenpal.com/player/cOfr2BnOuhm?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1"
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
    prevBtn.addEventListener('click', () => { if (currentVideoIndex > 0) updateVideoPlayer(currentVideoIndex - 1); });
    nextBtn.addEventListener('click', () => { if (currentVideoIndex < videoEmbedUrls.length - 1) updateVideoPlayer(currentVideoIndex + 1); });
}
updateVideoPlayer(0);

// ====================================================
// 5. GROUP PHOTO & BG VIDEO
// ====================================================
const groupImg = document.getElementById('groupPhoto');
if (groupImg) {
    groupImg.onerror = function() { this.src = "https://picsum.photos/id/104/800/500"; };
    groupImg.addEventListener('click', () => {
        groupImg.style.transform = 'scale(1.02)';
        setTimeout(() => { groupImg.style.transform = ''; }, 300);
    });
}
const bgVideo = document.querySelector('.bg-video');
if (bgVideo) {
    bgVideo.onerror = function() {
        if (!bgVideo.src.includes('mixkit')) {
            bgVideo.src = "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4";
            bgVideo.load();
        }
    };
}
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        const intensity = Math.min(0.9, 0.7 + scrollY / 2000);
        overlay.style.background = `radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,${intensity}) 100%)`;
    }
});

// ====================================================
// 6. 3D ROTATING GALLERY (TWO RINGS, CLOUDINARY READY)
// ====================================================
function create3DGallery() {
    const container = document.getElementById('circleGalleryContainer');
    if (!container) {
        console.warn('circleGalleryContainer not found');
        return;
    }

    // ---------- REPLACE THESE WITH YOUR ACTUAL CLOUDINARY URLs ----------
    // Ring 1 (Batch Moments) – 10 images
    const ring1Images = [
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031939/13_tymf5n.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031934/15_xmsjlv.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031934/17_mnvwar.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031933/18_djue0r.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031933/14_xp89ex.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031932/10_ydl4xz.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031932/16_pfnbo4.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031931/11_h93bss.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031930/9_vigy8d.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031930/12_smysqv.jpg"
    ];

    // Ring 2 (Timeless Memories) – 10 images
    const ring2Images = [
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031929/4_dehrx8.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031929/6_lzoodf.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031929/8_hzrpmf.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031928/7_z2pr75.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031927/1_l98npt.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031926/5_ttnnhq.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031925/2_akrxbo.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031926/3_v9e9wv.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777031925/20_ph7yja.jpg",
        "https://res.cloudinary.com/dahh1ibxe/image/upload/v1777033027/20_xdezz5.jpg"
    ];

    const rings = [
        { title: 'Batch Moments ✨', images: ring1Images },
        { title: 'Timeless Memories 🌟', images: ring2Images }
    ];

    const baseRadius = 380;      // large radius prevents overlapping
    let html = '';

    rings.forEach(ring => {
        const count = ring.images.length;
        const angleStep = 360 / count;
        let facesHtml = '';

        ring.images.forEach((imgSrc, idx) => {
            const angle = angleStep * idx;
            facesHtml += `
                <div class="carousel-face" style="transform: rotateY(${angle}deg) translateZ(${baseRadius}px);">
                    <img src="${imgSrc}" alt="Memory ${idx+1}" loading="lazy" 
                         onerror="this.src='https://picsum.photos/id/${100 + idx}/300/300'">
                </div>
            `;
        });

        html += `
            <div class="ring-wrapper">
                <div class="ring-title">
                    <i class="bi bi-camera-reels-fill"></i> ${ring.title}
                </div>
                <div class="scene3d">
                    <div class="carousel3d">
                        ${facesHtml}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    console.log('3D gallery rendered successfully');
}

// Execute when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', create3DGallery);
} else {
    create3DGallery();
}

console.log("BCA Farewell Website Loaded — Custom friend list ready!");
