//document ready function
$(document).ready(function () {
    displayBlocks()
    var todayDate = moment().format('dddd' + ", " + 'LL');
    document.getElementById("currentDay").innerHTML = todayDate;
    var timeSlot = JSON.parse(localStorage.getItem("times"));
    
    //tobe refoactored into a function
    document.getElementById("currentDay").innerHTML = todayDate;
    var saveComment = localStorage.getItem('9AM')
    $("#9AM").val(saveComment)
    var saveComment = localStorage.getItem('10AM')
    $("#10AM").val(saveComment)
    var saveComment = localStorage.getItem('11AM')
    $("#11AM").val(saveComment)
    var saveComment = localStorage.getItem('12PM')
    $("12PM").val(saveComment)
    var saveComment = localStorage.getItem('1PM')
    $("#1PM").val(saveComment)
    var saveComment = localStorage.getItem('2PM')
    $("#2PM").val(saveComment)
    var saveComment = localStorage.getItem('3PM')
    $("#3PM").val(saveComment)
    var saveComment = localStorage.getItem('4PM')
    $("#4PM").val(saveComment)
    var saveComment = localStorage.getItem('5PM')
    $("#5PM").val(saveComment)
 

})
    //Array of time tags/Id's
    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    //to loop thru array times
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
    
    
    //function to create divs and insert classes
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

    //save button
     $(document).on("click", ".saveBtn", function(){
         var comment = $(this).siblings('.description').val();
         var time = $(this).siblings('.description').attr('id');
         console.log ("local time var: ", time);
         localStorage.setItem(time, comment);
    });
        

////get the nearby values

//save in local

///function hour to update each hour

//a variable to get the current hour with moment hours


//check with if else and else if we've moved passed this time

//remove and add classes

//then call the hour update

//variable to check if current time needs to be updated using setInterval

// call each hour by id load save data/description from local storage (hint: .val and  .getItem)


//$("#id").removeClass("past");
