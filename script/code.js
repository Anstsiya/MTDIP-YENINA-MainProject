
function checkSignByDate() {
    var data = $("#dateInput").val();
    var date = new Date(data);
    var day = date.getDate(date);
    var month = date.getMonth(date) + 1;

    var zodiacs = zodiacList();
    $('#text').text('Your result is...');

    var traitsList = traits();

    _.each(zodiacs, (item) => {
        if (item.firstDate.month === month) {
            if(day >= item.firstDate.date) {
                includeToHtml(item, traitsList);
            }
        } else if (item.lastDate.month === month) {
            if(day <= item.lastDate.date) {
                includeToHtml(item, traitsList);
            }
        }

    })
}

function includeToHtml (item, traitsList) {
    $('#img').replaceWith('<img id="img" src="images/' +
    _.toLower(item.name) + '.jpg"' + 'alt="sign" class="img-circle" height="200" width="200">');
    $('#name').replaceWith('<h2 id="name">'+ item.name + '</h2>');
    $('#dateLable').text("Date");
    $('#date').replaceWith('<p id="date">'+traitsList[item.name].date +'</p>');
    $('#strengthsLable').text("Strengths");
    $('#strengths').replaceWith('<p id="strengths">'+traitsList[item.name].info.strengths +'</p>');
    $('#weaknessesLable').text("Weaknesses");
    $('#weaknesses').replaceWith('<p id="weaknesses">'+traitsList[item.name].info.weaknesses +'</p>');
    $('#likesLable').text("Likes");
    $('#likes').replaceWith('<p id="likes">'+traitsList[item.name].info.likes +'</p>');
    $('#dislikesLable').text("Dislikes");
    $('#dislikes').replaceWith('<p id="dislikes">'+traitsList[item.name].info.dislikes +'</p>');
}