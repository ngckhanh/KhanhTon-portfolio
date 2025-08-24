var dataJson = [
    {
        "link":"https://www.linkedin.com/in/tonnungockhanh0706/",
        "title":"LinkedIn",
        "icon":"./res/linkedin.svg"
    },
    {
        "link":"https://github.com/ngckhanh",
        "title":"GitHub",
        "icon":"./res/github.svg"
    },
    {
        "link":"https://www.facebook.com/ngoc.khanh.0706/",
        "title":"Facebook",
        "icon":"./res/facebook.svg"
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

