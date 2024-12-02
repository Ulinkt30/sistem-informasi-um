// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.2, // Shows 1.2 slides
  spaceBetween: 15,   // Spacing between slides
  centeredSlides: true, // Centers the active slide
  loop: true, // Enables infinite looping
  autoplay: {
    delay: 3000, // 3-second delay
    disableOnInteraction: false, // Keeps autoplay after interactions
  },
});
// Ambil elemen modal, gambar popup, dan tombol tutup
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');

// Ambil semua gambar dalam galeri
const galleryImages = document.querySelectorAll('.swiper-slide img');

// Event listener untuk gambar galeri
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    const imageSrc = image.src; // Ambil sumber gambar
    popupImage.src = imageSrc; // Set gambar di popup sesuai gambar yang di-klik
    imagePopup.classList.add('visible'); // Tampilkan popup
  });
});

// Event listener untuk menutup popup
closePopup.addEventListener('click', () => {
  imagePopup.classList.remove('visible'); // Sembunyikan popup
});

// Event listener untuk menutup popup jika klik di luar gambar
window.addEventListener('click', (event) => {
  if (event.target === imagePopup) {
    imagePopup.classList.remove('visible'); // Sembunyikan popup jika klik di luar gambar
  }
});
const jadwal = [
  {
    hari: "Minggu",
    kegiatan: [
      { deskripsi: "Evaluasi dan Audit Sistem Informasi", waktu: "08:00 - 10:29" },
      { deskripsi: "Agama", waktu: "10:00 - 12:00" },
    ],
  },
  {
    hari: "Senin",
    kegiatan: [
      
    ],
  },
  {
    hari: "Selasa",
    kegiatan: [
      { deskripsi: "Sistem Penunjang Keputusan", waktu: "8:00 - 10:10" },
      { deskripsi: "Metode Penelitian dan Penulisan Ilmiah", waktu: "10:30 - 12:10" },
      { deskripsi: "Data Mining", waktu: "13:00 - 14:30" },
      { deskripsi: "Digital Financial Platform", waktu: "15:30 - 18:00" },
    ],
  },
  {
    hari: "Rabu",
    kegiatan: [
      { deskripsi: "Evaluasi dan Audit Sistem Informasi", waktu: "08:00 - 10:29" },
      { deskripsi: "Inovasi dan Perancangan Platform Digital", waktu: "10:30 - 13:00" },
      { deskripsi: "Manajemen Proyek Sistem Informasi", waktu: "13:30 - 15:30" },
    ],
  },
  {
    hari: "Kamis",
    kegiatan: [],
  },
  {
    hari: "Jumat",
    kegiatan: [],
  },
  {
    hari: "Sabtu",
    kegiatan: [],
  },
];

function tampilkanJadwal() {
  const hariIni = new Date().getDay(); // Mendapatkan hari saat ini (0-6)
  const jadwalHariIni = jadwal[hariIni]; // Ambil objek jadwal berdasarkan hari

  // Isi elemen HTML dengan nama hari
  document.getElementById("nama-hari").textContent = jadwalHariIni.hari;

  const deskripsiElement = document.getElementById("deskripsi-jadwal");
  deskripsiElement.innerHTML = ""; // Bersihkan konten sebelumnya

  if (jadwalHariIni.kegiatan.length > 0) {
    // Jika ada kegiatan, tampilkan semua jadwal
    jadwalHariIni.kegiatan.forEach((kegiatan) => {
      const div = document.createElement("div");
      div.classList.add("jadwal-item");

      const deskripsi = document.createElement("span");
      deskripsi.classList.add("kegiatan");
      deskripsi.textContent = kegiatan.deskripsi;

      const waktu = document.createElement("span");
      waktu.classList.add("waktu");
      waktu.textContent = kegiatan.waktu;

      div.appendChild(deskripsi);
      div.appendChild(waktu);
      deskripsiElement.appendChild(div);
    });
  } else {
    // Jika tidak ada kegiatan, tampilkan pesan
    const div = document.createElement("div");
    div.classList.add("jadwal-item");
    div.textContent = "Libur cuyy";
    deskripsiElement.appendChild(div);
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = tampilkanJadwal;


document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');
  const chatMessages = document.getElementById('chat-messages');
  const database = firebase.database();
  const messagesRef = database.ref('messages');

  // Fungsi untuk mengirim pesan
  sendBtn.addEventListener('click', () => {
      const messageText = messageInput.value.trim();
      if (messageText) {
          const newMessageRef = messagesRef.push();
          newMessageRef.set({
              text: messageText,
              timestamp: firebase.database.ServerValue.TIMESTAMP
          });
          messageInput.value = '';
      }
  });

  // Fungsi untuk menampilkan pesan
  messagesRef.on('child_added', (snapshot) => {
      const message = snapshot.val();
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message.text;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  });
});

document.getElementById('instagram-container').addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/sisteminformasi_um?igsh=MWh1NzN6MGN6cDF6ag==';
});

 // Event listener untuk old-website-container
 document.getElementById('old-website-container').addEventListener('click', function() {
  window.location.href = 'https://www.universitasmerangin.ac.id/';
});

// Event listener untuk text-anonim-container
document.getElementById('text-anonim-container').addEventListener('click', function() {
  window.location.href = '#anonim';
});