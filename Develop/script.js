//document ready function
$(document).ready(function () {
    displayBlocks()
    var todayDate = moment().format('dddd' + ", " + 'LL');
    document.getElementById("currentDay").innerHTML = todayDate;
    var timeSlot = JSON.parse(localStorage.getItem("times"));
    var saveComment = localStorage.getItem('comments')
   
    $("#9").val(saveComment)
    //decideTime();
})

    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    //var times = [ 9, 10, 11, 12, 13, 14, 15, 16, 17]; 
    for (var i = 0; i < times.length; i++){
        var savedComment = localStorage.getItem(times[i]);
        if (savedComment !== ""){
            $(times[i]).first().val(savedComment)
        }
        
    }    
   
        

    var obj = moment();

    var todayDate = moment().format('dddd' + ", " + 'LL');
    var currentTime = moment().format('HH');
     $('#currentDay').append(todayDate);
    //
    //displayBlocks()
    
    function displayBlocks() {
        times.forEach(function(time){
            var $row = $(`<div class="row time-block col-12 hour"></div>`);
            var stringTime = (Number(String(time).substring(0, time.length - 2)));
            if(stringTime < 9){
                stringTime = stringTime + 12;
            }
            console.log("CurrenTime: ", currentTime);
            console.log("Time from array: ", time);
            console.log("Shortened time from array :", stringTime);
            if (stringTime === currentTime){
                var $text = $(`<textarea id='${time}' class='present description  col-9'>`);
            } else if (stringTime > currentTime){
                var $text = $(`<textarea id='${time}' class='future description  col-9'>`);
            }else {
                var $text = $(`<textarea id='${time}' class='past description  col-9'>`);
            }
            var $hour = $("<div>").addClass("hour col-2").text(`${time}`);
            //var $text = $(`<textarea id='${time}' class='description  col-9'>`);
            console.log("Typed Text: ", $text);
            var $saveBtn = $("<button>").addClass("saveBtn col-1 fas fa-save")
            $row.append($hour)
                .append($text)
                .append($saveBtn)
            $(".container").append($row)
        });
        
    }
    const now = times
    console.log("Varibable now:", now);
    // function decideTime() {
    //     for (var i = 0; i < now.length; i++){
    //         const htmlELEM = tB.children(".hour")[0]
    //         const hourNow = htmlELEM.innerHTML.split("")[0]
    //         console.log("hourNow: ", hourNow);
    //         let temporality;
    //         if (hourNow < now[0]) {
    //             temporality = "past"
    //         } else if (hourNow > now) {
    //         temporality = "future"
    //     } else {
    //         temporality = "present"
    //     }
    //     (tB.children("textarea")[0].classList.add(temporality))
    // }    

//}


    //save button
    $(document).on("click", ".saveBtn", function(){
        var comment = $(this).siblings('.description');
        var timeSlot = $(this).siblings('.id');
        //console.log($(this).dataset.id);
        //var getTime = $(this).siblings()
        //localStorage.setItem("9", comment.val())
        //localStorage.setItem(timeSlot.val(), comment.val())
        localStorage.setItem("times", JSON.stringify(comment));
    })

//});    
    //console.log(moment().day(Number|String));
    //console.log(obj._locale._longDateFormat.L);
    // var todayDate = moment().format('dddd' + ", " + 'LL');
    // $('#currentDay').append(todayDate);
   



////get the nearby values

//save in local

///function hour to update each hour

//a variabel to get the current hour with moment hours

//loop over time blocks using .ech

//check with if else and else if we've moved passed this time

//remove and add classes

//then call the hour update

//variable to check if current time needs to be updated using setInterval

// call each hour by id load save data/description from local storage (hint: .val and  .getItem)


//$("#id").removeClass("past");
