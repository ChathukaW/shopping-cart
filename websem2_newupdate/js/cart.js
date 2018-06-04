function changeFontSize(target) {               //Font changing function
  var size = document.getElementById("size");
  var style = window.getComputedStyle
        ? getComputedStyle(size) 
        : size.currentStyle;     
  var fontSize;

  if (style) { 
      fontSize = parseFloat(style && style.fontSize);
      if (target == document.getElementById("button1")) {
        fontSize += 5;
      } else if (target == document.getElementById("button2")) {
        fontSize -= 5;
      }
      size.style.fontSize = fontSize + "px";
  }
}

window.onload=function(){

	var cartTable=document.getElementById('cartTable');        //variables are declared here.
	var tot=cartTable.children[1].rows;                        //This array will store the data which is input from the site
	var selectedTotal=document.getElementById('selectedTotal');//Selected items
	var priceTotal=document.getElementById('priceTotal');      //Total price
	var cartFooter=document.getElementById('cartFooter');      //The place where the total price is displayed


	for (var i = 0; i < tot.length; i++) {
		tot[i].onclick=function(e){
			var el=e.target;
			var cls=el.className;
			var input=this.getElementsByTagName('input')[1];
			var val=parseInt(input.value);
			var reduce=this.getElementsByTagName('span')[3];
			switch(cls){
				case 'add':                             //This is for + button to add more items to cart
				     input.value=val+1;                 //When the + button is pressed the quantity is calculated here
				     reduce.innerHTML='+';
				     getSubtotal(this);
				     break;
				case 'reduce':                          //As the + button this works for - button
				     if(val>1){
				     	input.value=val-1;
				     	getSubtotal(this);
				     }
				     if(input.value<=1){
				     	reduce.innerHTML='';
				     }
				     break;
				default:
				     break;
			}
			getTotal();
		}
	}

	function getSubtotal(tot){                         //the total is added/deduced as the +/- is pressed
		var tds=tot.cells;                            
		var price=parseFloat(tds[2].innerHTML);
		var count=tot.getElementsByTagName('input')[1].value;
		var subTotal=parseFloat(price*count).toFixed(2);
		tds[4].innerHTML=subTotal;
	}
    
    	function getTotal(){
		var selected=0;
		var price=0;
		for (var i = 0; i < tot.length; i++) {
			var perCount=tot[i].getElementsByTagName('input')[1].value;
			if(tot[i].getElementsByTagName('input')[0].checked){
				tot[i].className="on";
				selected+=parseInt( tot[i].getElementsByTagName('input')[1].value);
				price+=parseFloat( tot[i].cells[4].innerHTML );               
			}else{
				tot[i].className=" ";
			}
		};
		selectedTotal.innerHTML=selected;     //Showing the No. of Selected Items
		priceTotal.innerHTML=price.toFixed(2); //Shows the total price of the items bought
		if(selected==0){
			cartFooter.className="cartFooter";  //This will display the selected item count and total in the cart footer box
		}
	}

}
//form validation part
    function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["email"].value;
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        alert("Not a valid e-mail address");
        return false;
    }
        alert("Hello   "+ x+ " " + "  Please Select the items you like from the cart and the Total Price will be Shown in the Cart Details section at the Bottom");
}

 