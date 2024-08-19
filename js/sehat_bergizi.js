const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe');
const pcfe = document.querySelector('.pcfe');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const content = document.querySelectorAll('.content');

// Function to update the content
function updateContent(title, text) {
    content.forEach((item) => {
        item.querySelector('h1').textContent = title;
        item.querySelector('p').textContent = text;
    });
}

gcfe.addEventListener('click', () => {
    img1.style.opacity = '1';
    img1.style.transform = 'rotate(0deg)';
    img3.style.opacity = '0';
    img3.style.transform = 'rotate(-90deg)';
    img2.style.opacity = '0';
    img2.style.transform = 'rotate(-90deg)';

    // Update content for img1
    updateContent(
        'Mengapa Gizi Seimbang Itu Penting?',
        'Gizi seimbang adalah kunci untuk menjaga kesehatan tubuh dan pikiran. Dengan mengonsumsi makanan yang tepat, tubuh Anda mendapatkan semua nutrisi yang dibutuhkan untuk berfungsi dengan optimal. Gizi seimbang membantu: Meningkatkan Sistem Kekebalan Tubuh, Menjaga Berat Badan Ideal, dan Meningkatkan Energi.'
    );
});

ocfe.addEventListener('click', () => {
    img2.style.opacity = '1';
    img2.style.transform = 'rotate(0deg)';
    img3.style.opacity = '0';
    img3.style.transform = 'rotate(-90deg)';
    img1.style.opacity = '0';
    img1.style.transform = 'rotate(-90deg)';

    // Update content for img2
    updateContent(
        'Hindari Junkfood!!',
        'Menghindari junk food penting untuk menjaga kesehatan tubuh karena makanan ini biasanya tinggi kalori, gula, garam, dan lemak jenuh, namun rendah nutrisi. Konsumsi junk food secara berlebihan dapat menyebabkan berbagai masalah kesehatan, seperti obesitas, diabetes, penyakit jantung, dan masalah pencernaan.'
    );
});

pcfe.addEventListener('click', () => {
    img3.style.opacity = '1';
    img3.style.transform = 'rotate(0deg)';
    img1.style.opacity = '0';
    img1.style.transform = 'rotate(-90deg)';
    img2.style.opacity = '0';
    img2.style.transform = 'rotate(-90deg)';

    // Update content for img3
    updateContent(
        'Tetap Sehat dengan Pola Makan Bergizi!',
        'Pola makan yang bergizi melibatkan konsumsi berbagai makanan yang kaya akan vitamin, mineral, protein, karbohidrat, lemak sehat, dan serat. Makanan bergizi membantu meningkatkan sistem kekebalan tubuh, mendukung fungsi otak, menjaga berat badan ideal, dan mencegah penyakit kronis seperti diabetes dan penyakit jantung.'
    );
});
