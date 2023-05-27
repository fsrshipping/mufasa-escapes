const emailaddress = document.getElementById("emailaddress");
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "bcjgCglCrg8lC-rcC1dblKC@fgFdd.rdb"
  key = "iIuTb1regJwMEoS4hO92XyDPxjHUskz83mtcRa7KlZqWnNd0QFLV6vfAGYB5pC"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
emailaddress.innerHTML = "<a href='mailto:"+link+"'>Email</a>"
}
  
const send = document.getElementById("contact-send");

send.addEventListener("click", notify);

function notify() {
    alert("Because of a lot of spam the contact form is temporarily not in use. Please contact your personal customer care representative");
}
    
    
    