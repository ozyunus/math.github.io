var ad;
var dogruSayac = 0;
var yanlisSayac = 0;
var konfetiGoruldu = false;

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir sayı üret
}

function basla() {
  ad = document.getElementById('ad').value;
  if (ad) {
    document.getElementById('adDiv').style.display = 'none';
    document.getElementById('secenekler').style.display = 'flex';
    document.getElementById('sonuclar').innerHTML = ''; // Yeniden başlandığında sonuçları sıfırla
  } else {
    alert('Lütfen adınızı girin.');
  }
}

function konfetiEfekti() {
  if (!konfetiGoruldu) {
    var konfetiSayisi = 100; // Konfeti sayısını artırabilirsiniz
    var sonuclarDiv = document.getElementById('sonuclar');

    for (var i = 0; i < konfetiSayisi; i++) {
      var konfeti = document.createElement('div');
      konfeti.className = 'konfeti konfeti-renk-' + getRandomNumber(1, 4);
      var leftPosition = Math.random() * window.innerWidth;
      var topPosition = Math.random() * window.innerHeight;
      konfeti.style.left = leftPosition + 'px';
      konfeti.style.top = topPosition + 'px';
      document.body.appendChild(konfeti);

      setTimeout(function() {
        konfeti.remove();
      }, 5000); // 5 saniye sonra konfeti elementini kaldır
    }

    konfetiGoruldu = true; // Konfeti bir kez görüldü
  }
}

function soruSor(operator) {
  var sayi1 = getRandomNumber();
  var sayi2 = getRandomNumber();
  var dogruCevap;

  switch (operator) {
    case '+':
      dogruCevap = sayi1 + sayi2;
      break;
    case '-':
      dogruCevap = sayi1 - sayi2;
      break;
    case '*':
      dogruCevap = sayi1 * sayi2;
      break;
    case '/':
      dogruCevap = sayi1 / sayi2;
      break;
  }

  var cevap = parseFloat(prompt(ad + ', ' + sayi1 + ' ' + operator + ' ' + sayi2 + ' = ?'));

  var sonucElement = document.getElementById('sonuc');

  if (cevap === dogruCevap) {
    sonucElement.textContent = 'Doğru cevap!';
    sonucElement.style.color = '#27ae60';
    dogruSayac++;
    konfetiEfekti(); // Konfeti efekti ekle
  } else {
    sonucElement.textContent = 'Yanlış cevap! Doğru cevap: ' + dogruCevap;
    sonucElement.style.color = '#e74c3c';
    yanlisSayac++;
  }

  sonucElement.textContent += ' Doğru Cevaplar: ' + dogruSayac;

  // Sonuçları alt satırlarda göster
  var sonuclarDiv = document.getElementById('sonuclar');
  sonuclarDiv.innerHTML += '<p id="dogru">Doğru Cevaplar: ' + dogruSayac + '</p>';
  sonuclarDiv.innerHTML += '<p id="yanlis">Yanlış Cevaplar: ' + yanlisSayac + '</p>';
}
