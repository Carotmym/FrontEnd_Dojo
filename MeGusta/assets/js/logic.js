
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountElement = button.previousElementSibling;
            let likeCount = parseInt(likeCountElement.textContent.split(' ')[0], 10);
            likeCountElement.textContent = `${likeCount + 1} like(s)`;
        });
    });
});
