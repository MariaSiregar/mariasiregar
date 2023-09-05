

var certifications = {

    "courses": [
        {
            "board": "Amazon Web Services (AWS)",
            "title": "AWS Cloud Practitioner Essentials",
            "dates": "May 2020",
            "url": "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=SxBI9FiFyEe37mWxekYMFA2"
        },

        {
            "board": "edx",
            "title": "STV1.2x: Software Testing Management",
            "dates": "APR 2020",
            "url": "https://courses.edx.org/certificates/6457199edfad4cfbb44fc527bbe27b4e"
        },
        {
            "board": "TestAutomationU",
            "title": "Test Automation in DevOps",
            "dates": "APR 2020",
            "url": "https://testautomationu.applitools.com/certificate/?id=7514eb76"
        }
    ]
};



var HTMLcourseDates = '<li><div class="li flip"><div class="period">%data%</div>';
var HTMLcourseTitle = '<div class="course"><p class="course_title" " >%data%</p>';
var HTMLcourseBoard = '<p class="course_board" ">%data%</p>';
var HTMLcourseUrl = '<p class="course_url" >' +
    '<a class="panel" rel="stylesheet" type="text/css" href="%data%">Certificate Link</a></p></div></div></li>';

function displayCourses() {

    for (course in certifications.courses) {
        // create new div for work experience
        //$("#workExperience").append(HTMLworkStart);
        // concate employer and title
        var formattedDates = HTMLcourseDates.replace("%data%", certifications.courses[course].dates);
        var formattedTitle = HTMLcourseTitle.replace("%data%", certifications.courses[course].title);
        var formattedBoard = HTMLcourseBoard.replace("%data%", certifications.courses[course].board);
        var formattedUrl = HTMLcourseUrl.replace("%data%", certifications.courses[course].url);
        console.log(formattedDates + formattedTitle + formattedBoard + formattedUrl);

        $(".onlineCourses").append(formattedDates + formattedTitle + formattedBoard + formattedUrl);


        //$(".work-entry:last").append(formattedDates);
        //var text=($(".onlineCourses"));
        //console.log(text);
    }
}

displayCourses();


