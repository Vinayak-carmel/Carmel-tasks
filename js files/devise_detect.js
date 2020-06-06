var SCREEN_RESULUTION;
var DEVICE_WIDTH;
var DEVICE_HEIGHT;
var device_height;

DEVICE_WIDTH = screen.width;
DEVICE_HEIGHT = screen.height;

function check(){
    checkDevice(); 
}
        function checkDevice() {
        if (DEVICE_WIDTH > 0 && DEVICE_WIDTH < 320) {
            getMobilePic(DEVICE_WIDTH,DEVICE_HEIGHT)

        }else if (DEVICE_WIDTH > 321 && DEVICE_WIDTH < 375) {
            getMobilePic(DEVICE_WIDTH,DEVICE_HEIGHT);

        } else if(DEVICE_WIDTH > 376 && DEVICE_WIDTH < 424) {
            getMobilePic(DEVICE_WIDTH,DEVICE_HEIGHT);

        }else if(DEVICE_WIDTH > 425 && DEVICE_WIDTH < 767) {
            getTabletPic(DEVICE_WIDTH,DEVICE_HEIGHT);

        }else if(DEVICE_WIDTH > 768 && DEVICE_WIDTH < 1023) {
            getTabletPic(DEVICE_WIDTH,DEVICE_HEIGHT);

        }else if(DEVICE_WIDTH > 1024 && DEVICE_WIDTH < 1439) {
            getDesktopPic(DEVICE_WIDTH,DEVICE_WIDTH);

        }else if(DEVICE_WIDTH > 1440 && DEVICE_WIDTH < 1919) {
            getDesktopPic(DEVICE_WIDTH,DEVICE_WIDTH);

        }else if(DEVICE_WIDTH > 1920 && DEVICE_WIDTH < 2559) {
            getDesktopPic(DEVICE_WIDTH,DEVICE_WIDTH);

        }else if(DEVICE_WIDTH > 2560 && DEVICE_WIDTH < 4096) {
            getDesktopPic(DEVICE_WIDTH,DEVICE_WIDTH);
        }
    }
    function getMobilePic() {
        if (window.innerWidth < window.innerHeight) {
            alert("Your Mobile Resulution is"+ " " + DEVICE_WIDTH + " * " + DEVICE_HEIGHT);
            alert("You are now in portrait");
            alert("Get the Image of mobile in Portrate mode with Size" + DEVICE_WIDTH+ "*" + DEVICE_HEIGHT )
          } else {
            alert("Your Mobile Resulution is"+ " " + DEVICE_WIDTH + " * " + DEVICE_HEIGHT);
            alert("YouR Mobile is in landscape mode with size  " + DEVICE_WIDTH+ "*" + DEVICE_HEIGHT );
            alert("Get the Image of mobile in Landscape mode")
          }
    }


    function getTabletPic(DEVICE_WIDTH,DEVICE_HEIGHT) {
        alert("Your TABLET Resulution is"+ " " + DEVICE_WIDTH + " * " + DEVICE_HEIGHT);
        alert("Get the Image of TABLET with sise "+ DEVICE_WIDTH+ "*" + DEVICE_HEIGHT )
      
}

    function getDesktopPic(DEVICE_WIDTH,DEVICE_HEIGHT) {
            alert("Your DESKTOP Resulution is"+ " " + DEVICE_WIDTH + " * " + DEVICE_HEIGHT);
            alert("Get the Image of DESKTOP with size " + DEVICE_WIDTH+ "*" + DEVICE_HEIGHT )
          
    }
