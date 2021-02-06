setInterval(myclock,1000);
        function myclock() {
            var time = new Date();
            var hours = time.getHours();
            var min = time.getMinutes();
            var sec = time.getSeconds();

            var y = hours;

            if (hours > 12) {
                hours = hours-12;
            }

            if (hours == 0) {
                hours = 12;
                
            }

            if (hours < 10) {

                hours = "0"+hours;
                
            }
            if (min < 10) {

                min = "0"+min;
            }
            if (sec < 10) {

                sec = "0"+sec;
                
            }

            if(y > 12)
            {
                var x = "PM"
            }
            else
            {
                var x = "AM"
            }

            document.getElementById("clock").innerHTML = hours + ":" + min + ":"+sec +x;
            
        } 