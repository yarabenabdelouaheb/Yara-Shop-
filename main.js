




function factory(name,price,img){
	return {
		name:name,
		price:price,
         img:img
	}
}




var data = [{name:"MAKEUP ESSENTIALS",price:"350",Quantity:[10],  img:"../Yara-Shop-/images/product 1.jpg"},
					{name:"PACK OF MAKEEUP",price:"1500",Quantity:[25],  img:"../Yara-Shop-/images/product 2.jpg"},
					{name:"DIOR PARFUM",price:"3000",Quantity:[18], img:"../Yara-Shop-/images/product3.jpg"},
					{name:"FOUNDATION",price:"800",Quantity:[30], img:"../Yara-Shop-/images/product4.jpg"},
					{name:"ESTEE LOUDER",price:"600",Quantity:[40], img:"../Yara-Shop-/images/product5.jpg"},
					{name:"LIPSTICK",price:"2000",Quantity:[15], img:"../Yara-Shop-/images/product6.jpg"},
					{name:"BLUSH",price:"250",Quantity:[5],  img:"../Yara-Shop-/images/product7.jpg"},
					{name:"MAKEUP KIT ",price:"2000",Quantity:[11], img:"../Yara-Shop-/images/product8.jpg"},
					{name:"CLASSY DRESSES",price:"1500",Quantity:[25],  img:"../Yara-Shop-/images/dress1.jpg"},
					{name:"MONARCH DRESSES",price:"3000",Quantity:[18], img:"../Yara-Shop-/images/dress2.jpg"},
					{name:"SWEEP DRESSES",price:"800",Quantity:[30], img:"../Yara-Shop-/images/dress3.jpg"},
					{name:"CATHEDRALL DRESSES ",price:"600",Quantity:[40], img:"../Yara-Shop-/images/dress4.jpg"},
					{name:"CHAPEL DRESSES",price:"2000",Quantity:[15], img:"../Yara-Shop-/images/dress5.jpg"},
					{name:"BALL GOWN DRESSES",price:"250",Quantity:[5],  img:"../Yara-Shop-/images/dress6.jpg"},
					{name:"CLASSY HEELS",price:"2000",Quantity:[11], img:"../Yara-Shop-/images/shoes1.jpg"},
					{name:"BLACK HEELS",price:"350",Quantity:[10],  img:"../Yara-Shop-/images/shoes2.png"},
					{name:"GUCCI HEELS",price:"1500",Quantity:[25],  img:"../Yara-Shop-/images/shoes3.jpg"},
					{name:"GUCCI FASHION",price:"3000",Quantity:[18], img:"../Yara-Shop-/images/shoes4.jpg"},
					{name:"WHITE HEELS  ",price:"800",Quantity:[30], img:"../Yara-Shop-/images/shoes5.jpg"},
					{name:"COMFORT HEELS",price:"600",Quantity:[40], img:"../Yara-Shop-/images/shoes6.jpg"},
					{name:"CHANNEL GLASSES",price:"2000",Quantity:[15], img:"../Yara-Shop-/images/glasses1.jpg"},
					{name:"RAYBANE",price:"250",Quantity:[5],  img:"../Yara-Shop-/images/glasses2.png"},
					{name:"GUCCI GLASSES",price:"2000",Quantity:[11], img:"../Yara-Shop-/images/glasses3.png"},
					{name:"DIOR GLASSES",price:"2000",Quantity:[11], img:"../Yara-Shop-/images/glasses4.jpg"}]




					var createItem = function(obj,index){
			return $(`<div class="holder">
	  			<div class="pic">
	  			<img class="image" src="${obj.img}">
	  			</div>
			  	<div class="info">
			  		<button class="buyBtn" id="${index}">Buy</button>
			  	
			  		<p>${obj.name}</p>
			  		<p>Quantity: ${obj.Quantity}</p>

			  	</div>
			  	</div>`)
	}

var showItem = function(){
			for (var i = 0; i <data.length; i++) {
				createItem(data[i],i).appendTo($("#rows"))
			}
	}
showItem();








$(document).ready(function(){


var createDiv = function(){
}

  $(".buyBtn").click(function(){
  	var indObj= data[$(this).attr("id")]
	var newdiv = $(`<div class="buying"><img class="image" src="${indObj.img}"><form><fieldset><legend>Purchase</legend><br><br>
		<h1> Name:<span>${indObj.name}</span>
  		<h2>   Price:<span id="punit">${indObj.price}</span> $</h2>
  		<h2>   Quantity:<span>${indObj.Quantity}</span></h2>
  		
  <label for="quantity">Quantity :</label>
  <input type="number" id="quantity" value="">
  
  <label for="name">Name:</label>
  <input type="text" id="name"required="true"><br><br>
  <label for="phone" > Phone:</label>
  <input type="tel" id="phone" placeholder="" pattern="[0-9]{5}[0-9]{2}[0-9]{3}[0-9]{3}"  required="true"><br><br>
  <label  for="creditCard"> Credit Card:</label>
  <input type="tel" id="creditCard" placeholder="" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required="true"><br><br>
  <div><button id="submito" type="submit">Confirm</button></div>

  </fieldset>
</form></div>`)



  	$(".row").hide();
  	$("body").append(newdiv);



 	$('#quantity').on('change', function(){
  		
  		$("#totale").html(($("#punit").html()*$('#quantity').val())+" $")

  	});


  	$('#quantity').on('keypress', function(){
  		
  		$("#totale").html(($("#punit").html()*$('#quantity').val())+" $")
  	});
  

  $('#submito').on('click',function(){
   if((typeof $('#name').val() === "string") && ($('#quantity').val() > 0)) {
   } 
   
     alert('Thank you for your visiting . your order is being processed');

})
});
//}

$("#home").click(function(){

		$(".buying").hide();
		$(".row").show();
	});




  });

