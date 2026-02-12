// ==========================
// REVEAL ANIMATION
// ==========================
function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      r.classList.add("active");
    }
  });
}
// ================= VISI MISI INTERACTIVE =================
function toggleDetail(id) {
  const box = document.getElementById(id);
  const allBoxes = document.querySelectorAll('.detail-box');

  allBoxes.forEach(b => {
    if(b !== box){
      b.style.display = 'none';
    }
  });

  if(box.style.display === 'block'){
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
}

function toggleDetail(id) {
  const boxes = document.querySelectorAll(".detail-box");

  boxes.forEach(box => {
    if (box.id === id) {
      box.style.display = 
        box.style.display === "block" ? "none" : "block";
    } else {
      box.style.display = "none";
    }
  });
}


document.addEventListener("DOMContentLoaded", function(){

  const images = [
    "BPH.jpg",
    "BSO BENGKEL.webp",
    "BSO KWU.jpg",
    "DAGRI.jpg",
    "PSDM.jpg",
    "PROFKIL.jpg",
    "MINBA.jpg",
    "MEDKRAF.jpg",
    "SOSMA.jpg",
    "SOSMAS.jpg",
    "HUBLU.jpg"
  ];

  let index = 0;
  const sliderImage = document.getElementById("sliderImage");

  function changeImage(){
    sliderImage.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % images.length;
      sliderImage.src = images[index];
      sliderImage.classList.remove("fade-out");
    }, 800);
  }

  setInterval(changeImage, 4000);

});


// ==========================
// MODAL IMAGE POPUP
// ==========================
const items = document.querySelectorAll(".people-item");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeModal = document.querySelector(".close-modal");

items.forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.getAttribute("data-img");
    captionText.innerHTML = item.innerText;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// ABOUT TOGGLE
const aboutToggle = document.getElementById("aboutToggle");
const aboutContent = document.getElementById("aboutContent");

aboutToggle.addEventListener("click", () => {
  if(aboutContent.style.maxHeight){
    aboutContent.style.maxHeight = null;
  } else {
    aboutContent.style.maxHeight = aboutContent.scrollHeight + "px";
  }
});
const divisionImages = {

  BPH: ["bph 1.jpg","bph 2.jpg","bph 3.jpg","bph 4.jpg","bph 5.jpg"],
  BENGKEL: ["bengkel 1.webp", "bengkel 2.webp","bengkel 3.webp", "bengkel 4.webp", "bengkel 5.webp", "bengkel 6.webp", "bengkel 7.webp", "bengkel 8.webp", "bengkel 9.webp", "bengkel 10.webp", "bengkel 11.webp", "bengkel 12.webp"],
  KWU: ["kwu 1.jpg","kwu 2.jpg","kwu 3.jpg","kwu 4.jpg","kwu 5.jpg","kwu 6.jpg","kwu 7.jpg","kwu 8.jpg"],
  DAGRI: ["dagri 1.jpg","dagri 2.jpg","dagri 3.jpg","dagri 4.jpg","dagri 5.jpg","dagri 6.jpg","dagri 7.jpg"],
  PSDM: ["psdm 1.jpg","psdm 2.jpg","psdm 3.jpg","psdm 4.jpg","psdm 5.jpg","psdm 6.jpg","psdm 7.jpg","psdm 8.jpg",],
  PROFKIL: ["profkil 1.jpg","profkil 2.jpg","profkil 3.jpg", "profkil 4.jpg", "profkil 5.jpg", "profkil 6.jpg", "profkil 7.jpg"],
  MINBA: ["minba 1.jpg","minba 2.jpg","minba 3.jpg","minba 4.jpg","minba 5.jpg","minba 6.jpg","minba 7.jpg"],
  MEDKRAF: ["medkraf 1.jpg","medkraf 2.jpg","medkraf 3.jpg","medkraf 4.jpg","medkraf 5.jpg","medkraf 6.jpg"],
  SOSMA: ["sosma 1.jpg","sosma 2.jpg","sosma 3.jpg","sosma 4.jpg","sosma 5.jpg","sosma 6.jpg","sosma 7.jpg"],
  SOSMAS: ["sosmas 1.jpg","sosmas 2.jpg","sosmas 3.jpg","sosmas 4.jpg","sosmas 5.jpg"],
  HUBLU: ["hublu 1.jpg","hublu 2.jpg","hublu 3.jpg","hublu 4.jpg","hublu 5.jpg","hublu 6.jpg","hublu 7.jpg"]
};


// OPEN MODAL
function openDivision(name){

  const modal = document.getElementById("peopleModal");
  const track = document.getElementById("modalSliderTrack");
  const title = document.getElementById("modalTitle");

  title.innerText = name;
  track.innerHTML = "";

  divisionImages[name].forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    track.appendChild(image);
  });

  modal.style.display = "flex";
}


// CLOSE MODAL
document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("peopleModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("peopleModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});


// SLIDER CONTROL
document.addEventListener("click", function(e){

  if(e.target.classList.contains("prev")){
    const track = document.getElementById("modalSliderTrack");
    track.scrollBy({left:-300, behavior:"smooth"});
  }

  if(e.target.classList.contains("next")){
    const track = document.getElementById("modalSliderTrack");
    track.scrollBy({left:300, behavior:"smooth"});
  }

});
