var dataJson = [
  {
    img: "images/BachDuong_thumbnail.png",
    title: "BachDuong.app",
    paragraph:
      "Enhance your IELTS Speaking and Writing skills with BachDuong. Our platform offers detailed resources and personalized support to help you improve effectively.",
    url: "https://bachduong.app/",
  },
  {
    img: "images/Tedxhcm_thumbnail.png",
    title: "TedxHoChiMinhCity | Tỏ Tường 2024",
    paragraph:
      "Join us for 'Opening Up: Opening Up to Reality,' the inaugural season of TEDxHoChiMinhCity. Experience inspiring stories from diverse speakers, encouraging young minds to explore various perspectives and confront reality with honesty.",
    url: "https://www.tedxhochiminhcity.vn/",
  },
  {
    img: "images/Greenify_thumbnail.png",
    title: "Greenify",
    paragraph:
      "A dedicated environmental forum where individuals can discuss and promote sustainability initiatives.",
    url: "https://greenify-seven.vercel.app/",
  },
  {
    img: "images/Museum_thumbnail.png",
    title: "War Remnants Museum",
    paragraph:
      "Discover Vietnam's wartime history through impactful exhibits and heartfelt narratives at the War Remnants Museum, offering a profound understanding of the past.",
    url: "https://ucd-museum-19.vercel.app/",
  },
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `
    <div class="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <div class="card shadow-sm rounded-4 h-100 border-0">
        ${
          item.img
            ? `<img src="${item.img}" class="card-img-top rounded-top-4" alt="${item.title} image" style="object-fit: cover; height: 200px;">`
            : `<div class="card-img-top bg-light d-flex align-items-center justify-content-center" style="height: 200px; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
            <span class="text-muted">No Image</span>
          </div>`
        }
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title text-dark fw-bold">${item.title}</h5>
            <p class="card-text text-secondary" style="font-size: 0.95rem;">${
              item.paragraph
            }</p>
          </div>
          <div class="mt-3">
            <a href="${item.url}" target="_blank" rel="noopener"
              style="background-color: #8E44BC; color: white;" class="btn w-100">
              View
            </a>
          </div>
        </div>
      </div>
    </div>`;
});

document.getElementById("project-container").innerHTML = raw_html;

