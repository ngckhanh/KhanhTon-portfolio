var dataJson = [
    {
        "name": "WEB DEVELOPMENT",
        "width": "75%"
    }, {
        "name": "UI/UX DESIGN",
        "width": "75%"
    }, {
        "name": "JAVASCRIPT",
        "width": "70%"
    },
    {
        "name": "REACTJS",
        "width": "70%"
    },{
        "name": "NEXTJS",
        "width": "65%"
        }
    // },{
    //     "name": "Java",
    //     "width": "40%"
    // }, {
    //     "name": "PYTHON",
    //     "width": "45%"
    // }
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function(item){
    raw_progress += `<p class="fs-5 txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="p1" style="width: ${item.width}">${item.width}</div>
    </div>`
    createRow(raw_progress)
})

function createRow(data) {
    raw_html += "<div class=\"col-lg-6 col-sm-10 col-md-6\">".concat(data, "</div>");
    raw_progress = "";
}
document.getElementById('progress-data').innerHTML = raw_html;
