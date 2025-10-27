// AOS (스크롤 애니메이션)
AOS.init({
  duration: 800,
  once: true
});

// Swiper (앨범 자동 슬라이드 + 부드러운 전환)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  speed: 600, // 부드럽게 넘기기
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  }
});

// 사진 추가 버튼 동작
const addPhotoBtn = document.getElementById("addPhotoBtn");
const photoInput = document.getElementById("photoInput");
const albumWrapper = document.getElementById("album-wrapper");

addPhotoBtn.addEventListener("click", () => {
  alert("지원 포맷: JPG, JPEG, PNG");
  photoInput.click();
});

photoInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const allowedTypes = ["image/jpeg", "image/png"];
  if (!allowedTypes.includes(file.type)) {
    alert("JPG, JPEG, PNG 형식만 업로드 가능합니다.");
    return;
  }

  const img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    if (img.width < 300 || img.height < 300) {
      alert("사진 해상도가 너무 낮습니다. 최소 300x300px 이상 필요합니다.");
      return;
    }
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${img.src}" alt="새 사진">`;
    albumWrapper.appendChild(slide);
    swiper.update();
    alert("사진이 앨범에 추가되었습니다!");
  };
});
<script>
  document.getElementById("unlockBtn").addEventListener("click", function() {
    const pw = document.getElementById("unlockInput").value.trim();
    const msg = document.getElementById("unlockMsg");

    if (pw === "1234") {
      document.querySelectorAll(".protected").forEach(el => {
        el.style.display = "";
      });
      msg.style.color = "green";
      msg.textContent = "🔓 잠금이 해제되었습니다.";
    } else {
      msg.style.color = "red";
      msg.textContent = "❌ 비밀번호가 틀렸습니다.";
    }
  });
</script>
