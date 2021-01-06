$(() => {
    init();
})

const init = () => {
    getISS ();
  }




function getISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        let lat = data['iss_position']['latitude'];
        let lon = data['iss_position']['longitude'];
        $('#isslat').html(Math.round(lat*1000)/1000.0);
        $('#isslon').html(Math.round(lon*1000)/1000.0);
    });
    setTimeout(getISS, 3000); 

    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    let number = data['number'];
    $('#spacepeeps').html(number);
});

}





