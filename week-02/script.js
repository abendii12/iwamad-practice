const likeBtn = document.querySelector('.like-btn');
const card = document.querySelector('.card');

likeBtn.addEventListener('click', () => {
  const isLiked = card.classList.toggle('liked');
  likeBtn.textContent = isLiked ? '❤️ Liked' : '🤍 Like';
});