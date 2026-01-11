// PARALLAX EFFECT
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    if (s1) s1.style.transform = `translateY(${scrolled * 0.15}px)`;
    if (s2) s2.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.02}deg)`;
});

// REVEAL ON SCROLL
const reveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', reveal);
reveal();

// MODAL - FULL DESCRIPTION
const modal = document.getElementById("project-modal");
document.querySelectorAll('.project-card').forEach(card => {
    card.onclick = () => {
        const title = card.querySelector('h3').innerText;
        const desc = card.getAttribute('data-full-desc');
        document.getElementById("modal-body").innerHTML = `
            <h2 style="margin-bottom:20px; font-size:2rem; color:white;">${title}</h2>
            <div style="line-height:1.8; color:#888; font-size:1.1rem;">${desc}</div>
        `;
        modal.style.display = "block";
    };
});
document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };