/* 
BU KODUN YAPTIĞI İŞ SAYFA İLK YÜKLENDİĞİNDE HTML İN İÇİNDEKİ TÜM LİLERİ SEÇİYOR VE ONLARIN İÇİNE
TO DO LİSTİMİZİN KENARINDA GÖZÜKMESİ İÇİN X BUTONUNA BENZER BİR SPAN EKLİYOR
*/
var myNodelist = document.getElementsByTagName("li");/* mynodelist değişkeninin işine tüm li elementleri atıldı */
for (let i = 0; i < myNodelist.length; i++) { /* For döngüsüyle lilerin uzunluğu kadar dönüldü */
  var span = document.createElement("SPAN"); /* span değişkeninin içine span elementi oluşturuldu */
  var txt = document.createTextNode("x"); /* txt değişkenine çarpıyı göstermesi için x texti oluşturuldu */
  span.className = "close";  /* spanın class namesi close olarak ayarlandı */
  span.appendChild(txt); /* boş spanın içine oluşturulan txt yerleştirildi */
  myNodelist[i].appendChild(span); /* tüm lilerin i indexine sahip olanının içine children olarak span eklendi */
}
/*
BU KODUN YAPTIĞI İŞ TÜM CLOSE SINIFINA SAHİP ELEMENTLERİN ONCLİCKİNE BİR FONKSİYON EKLİYOR VE BU FONKSİYON DA
BU ONCLİCKE SAHİP OLAN TÜM ELEMENTLERİN CLİCKLENDİĞİNDE PARENT ELEMENTİNİN GÖRÜNÜRLÜĞÜNÜ KAPATMASINI
EKRANDAN KAYBOLMASINI SAĞLIYOR
*/
var close = document.getElementsByClassName("close"); /* close değişkeninin içine class namesi close olan bütün elementler çekiliyor */
for (let i = 0; i < close.length; i++) {/* for döngüsüyle close class ına sahip elementler kadar döndü */
  close[i].onclick = function () {/* getirilen close classlı sınıfların i indexli elemanının onclickine function eklendi */
    var div = this.parentElement;/* div değişkenine close classına sahip olan elementlerin parent elemanının değeri atandı */
    div.style.display = "none";/* parent elementin styleına ulaşıp görünürlüğünü none yaptık görünmez olmasını sağladı */
  };
}

/**
BU KODUN YAPTIĞI İŞ oluşan to do list li elementlerine tıklandığında tıklanılan linin classının değişmesini sağlıyor 
*/
var list = document.querySelector("ul");/* list değişkenine ilk karşılaştığı ul elementini atıyor */
list.addEventListener(/*ulmize eventlistener ekliyor*/
  "click", /**click eventini dinlemesini söylüyor  */
  function (event) { /** click eventi olunca bu fonksiyon çalışıyor fonksiyon event parametresini alıyor */
    if (event.target.tagName === "LI") { /* click eventinin odaklandığı elementin tagname ini alıyor eğer tag name LI ise bu kod çalışıyor */
      event.target.classList.toggle("checked");/* eventin odaklandığı element in classlistine yok iste checked ekle var ise kaldır */
    }/* event click sırasında gelen parametreleri içerir içerisinde bir sürü özellik vardır */
  }/* event.target eventin içindeki target parametresine odaklanır target ise eventin oluştuğu elementi referans alır */
);

/** YENİ ELEMENT OLUŞTURULURKEN İÇİNE ATANAN ÖZELLİKLER */

function newElement() {/* new element adlı fonksiyon oluşturuldu */
  var li = document.createElement("li");/* li değişkeninin içine li elementi oluşturma özelliği atanıyor */
  var inputValue = document.getElementById("task").value;/* inputvalue dğeişkeninin içine task idli elementin value değeri atanıyor */
  var t = document.createTextNode(inputValue);/* t değişkeninin içine inputvalueden gelen değeri text node olarak ayarlayıp atar text node olarak ayırmasının sebebi ise elementin içine texti yazdırmak */
  li.appendChild(t); /* oluşturulan linin içine texti ekler */
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {/* eğer inputun içi boşsa veya bu kodun anlamını bilmiyorum */
    $(".error").toast("show");/** bootstrap toast işlemleri */
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);/* list idli elementin içine oluşturduğumuz li değişkenini ekler */
  }
  document.getElementById("task").value = "";/** id si task olan elementin içine boş değer atar */

  var span = document.createElement("SPAN"); /* span elementi oluşturulur span değişkeninin içine atar */
  var txt = document.createTextNode("x"); /* txt değişkenine x textini atar */
  span.className = "close"; /** span değişkeninin classnamesini close olarak ayarlar */
  span.appendChild(txt);/** spanın içine txt değişkenini ekler */
  li.appendChild(span); /**linin içine span değişkenini ekler */

  for (i = 0; i < close.length; i++) {/**close classına sahip element kadar döner */
    close[i].onclick = function () {/**close un i indexsinin onclickine fonksiton atar */
      var div = this.parentElement;/**div değişkeninin içine close classına sahip olan elementin parent elementini alır */
      div.style.display = "none";/**div değişkeninin stylenın displayinin click olunca none olmasını sağlar */
    };
  }
}
