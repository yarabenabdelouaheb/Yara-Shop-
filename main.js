




function factory(name,price,img){
	return {
		name:name,
		price:price,
         img:img
	}
}


function addProduct(product){
	data.push(product);
}

var data = [{name:"Makeup essentials",price:"350",Quantity:[10],  img:"../yara-shop/images/product 1.jpg"},
					{name:"Pack of Makeup",price:"1500",Quantity:[25],  img:"../yara-shop/images/product 2.jpg"},
					{name:"Dior Parfum",price:"3000",Quantity:[18], img:"../yara-shop/images/product3.jpg"},
					{name:"Foundation",price:"800",Quantity:[30], img:"../yara-shop/images/product4.jpg"},
					{name:"spray face ",price:"600",Quantity:[40], img:"../yara-shop/images/product5.jpg"},
					{name:"Lipstick",price:"2000",Quantity:[15], img:"../yara-shop/images/product6.jpg"},
					{name:"blush",price:"250",Quantity:[5],  img:"../yara-shop/images/product7.jpg"},
					{name:"Makeup Kit",price:"2000",Quantity:[11], img:"../yara-shop/images/product8.jpg"},
					{name:"dress",price:"1500",Quantity:[25],  img:"../yara-shop/images/dress1.jpg"},
					{name:"Dior Parfum",price:"3000",Quantity:[18], img:"../yara-shop/images/dress2.jpg"},
					{name:"Foundation",price:"800",Quantity:[30], img:"../yara-shop/images/dress3.jpg"},
					{name:"spray face ",price:"600",Quantity:[40], img:"../yara-shop/images/dress4.jpg"},
					{name:"Lipstick",price:"2000",Quantity:[15], img:"../yara-shop/images/dress5.jpg"},
					{name:"blush",price:"250",Quantity:[5],  img:"../yara-shop/images/dress6.jpg"},
					{name:"Makeup Kit",price:"2000",Quantity:[11], img:"../yara-shop/images/shoes1.jpg"},
					{name:"Makeup essentials",price:"350",Quantity:[10],  img:"../yara-shop/images/shoes2.png"},
					{name:"Pack of Makeup",price:"1500",Quantity:[25],  img:"../yara-shop/images/shoes3.jpg"},
					{name:"Dior Parfum",price:"3000",Quantity:[18], img:"../yara-shop/images/shoes4.jpg"},
					{name:"Foundation",price:"800",Quantity:[30], img:"../yara-shop/images/shoes5.jpg"},
					{name:"spray face ",price:"600",Quantity:[40], img:"../yara-shop/images/shoes6.jpg"},
					{name:"Lipstick",price:"2000",Quantity:[15], img:"../yara-shop/images/glasses1.jpg"},
					{name:"blush",price:"250",Quantity:[5],  img:"../yara-shop/images/glasses2.png"},
					{name:"Makeup Kit",price:"2000",Quantity:[11], img:"../yara-shop/images/glasses3.png"},
					{name:"Makeup Kit",price:"2000",Quantity:[11], img:"../yara-shop/images/glasses4.jpg"}]




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




  
  });

