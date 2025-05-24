var dataJson = [
    {
    img: "images/Tedx_design.png",
    title: "TEDxHoChiMinhCity Website Design",
    paragraph: "A conceptual wireframe and visual design for the TEDxHoChiMinhCity website. This draft showcases the layout, user interface elements, and design direction tailored to reflect TEDx's bold and modern identity.",
    url: "https://www.figma.com/design/i6ieJbmRbjo0TZQ8izts02/TEDx-Website?node-id=216-1857&t=9xfCR4AxtWtryzL1-0"
    },

    {
    img: "images/Museum_design.png",
    title: "War Remnants Museum Website Design",
    paragraph: "A modern and thoughtful website design concept for the War Remnants Museum. This layout emphasizes historical storytelling, intuitive navigation, and a respectful visual tone that aligns with the museum’s mission to educate and inform.",
    url: "https://www.figma.com/design/Th6lMsvlBXBiwoyS5xFWik/Museum-Design?node-id=0-1&p=f&t=ceEpitii9czYujQa-0"
    },

    {
    img: "images/Greenify_design.png",
    title: "Greenify – Environmental Forum Design",
    paragraph: "A vibrant and user-friendly platform concept designed to foster discussions around sustainability, eco-friendly practices, and green initiatives. Greenify encourages community engagement and knowledge sharing to promote a more sustainable future.",
    url: "https://www.figma.com/design/WkD1MbvZY4JnRry0OrWAI1/Greenify-Design?t=VI7q7TI1PH8a8nPj-0"
    },

    {
    img: "images/SS_design.png",
    title: "Seamless Security – E-commerce Platform Design",
    paragraph: "A secure and modern e-commerce platform interface featuring an invisible watermark embedding system to protect digital assets. The design focuses on usability, trust, and seamless integration of advanced security measures.",
    url: "https://www.figma.com/design/w0zW6rRtc8Qt9XTZismoXT/TTechT-s-proposal?m=auto&t=VI7q7TI1PH8a8nPj-6"
    }

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

document.getElementById("design-container").innerHTML = raw_html;

