const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');


btnValue.addEventListener('click', () => {

   vCname = document.getElementById('vCname');
   vCdate_of_birth = document.getElementById('vCdate_of_birth');
   vCphone = document.getElementById('vCphone');
   vCphone_work = document.getElementById('vCphone_work');
   vCwebsite = document.getElementById('vCwebsite');
   vCorganization = document.getElementById('vCorganization');
   vCposition = document.getElementById('vCposition');
   vCaddress = document.getElementById('vCaddress');
   vCemail = document.getElementById('vCemail'); 

   
   fn = vCname.value.trim();
   ln = "";
   email = vCemail.value.trim();
   mobile = vCphone.value.trim();
   Workmobile = vCphone_work.value.trim();
   url = vCwebsite.value.trim(); 
   ADRess = vCaddress.value.trim(); 
   ORGstr = vCorganization.value.trim();
   positionstr = vCposition.value.trim();
   date_of_birthStr = vCdate_of_birth.value.trim();

   var newText =  "BEGIN:VCARD\r\n" + "FN:" +  fn + " " +  ln + "\r\n" + "TITLE:" +  positionstr + "\r\n" +  "BDAY:" +  date_of_birthStr + "\r\n" + "EMAIL:" +  email + "\r\n" + "ADR;TYPE=HOME:" +  ADRess + "\r\n" + "ORG:" +  ORGstr + "\r\n" + "TEL;TYPE=HOME:" + mobile +"\r\n" + "TEL;TYPE=WORK:" + Workmobile + "\r\n" + "URL:" + url + "\r\n" + "END:VCARD\r\n";
   var GoogleChartAPI = `http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|0&chl=`;
   var conteudoQRCode = GoogleChartAPI + encodeURIComponent(newText);
   imgQrCode.src = conteudoQRCode;
   imgQrCode.addEventListener('load', () => {
      wrapper.classList.add('active');
      btnValue.innerText = 'Gerar QRCode'
  })
})
//http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|0&chl=BEGIN%3AVCARD%0D%0A%09%09VERSION%3A3.0%0D%0A%09%09N%3AClark%3BJason%0D%0A%09%09FN%3AJason+Clark%0D%0A%09%09ORG%3AMSU+Library%0D%0A%09%09TITLE%3ATeam+Leader%2FDigital+Initiatives+Librarian+%5BAssociate+Professor%5D%0D%0A%09%09TEL%3BTYPE%3DWORK%2CVOICE%3A%28406%29+994-6801%0D%0A%09%09EMAIL%3BTYPE%3DPREF%2CINTERNET%3Ajaclark%40montana.edu%0D%0A%09%09URL%3Ahttp%3A%2F%2Fwww.jasonclark.info%0D%0A%09%09REV%3A20111013T195243Z%0D%0A%09%09END%3AVCARD


    

 