const btn = document.querySelectorAll(".button");
let affiche = document.getElementById('affiche');
let operation = document.getElementById('operation');
let local = document.getElementById('local'); 
let array = [];


 for (let i = 0; i < btn.length; i++) {

 	//ecoute le clic
     btn[i].addEventListener("click", function() {

     	switch (btn[i].innerHTML){
     		case 'C' :
				clearAffiche();
     		break; 

     		case '=' :
     			calcule(affiche.innerHTML);

     		break;

     		default:
				affiche.append(btn[i].innerHTML)
     		break;
     	}

       

     });
 }

function calcule (arg) {

	//permet de calculer
	var result = eval(arg);
	var li = document.createElement('li');
	li.classList.add('list-group-item', 'list-group-item-dark');


	// stocke le réultat et le calcule
	let storage = localStorage.setItem('historique', arg+'='+result);
	let his = localStorage.getItem('historique' );
	
	// affiche le résultat et historique 
	affiche.innerHTML = result;
	operation.innerHTML = result;
	

	// limite 
	if(array.length == 10 ){
	// 	//supprime le premier élément
		array.shift();
		array.push(arg+'='+result);
		local.innerHTML = "";

	// 	affiche les 10 dernières opérations
	for (var j = 0; j < array.length; j++) {
		local.append(li)
		li.append(array[j])
	}

	}else{
	// 	ajout les éléments dans le tableau
		array.push(arg+'='+result);
		local.append(li);
		li.append(his);
	}
	
}


function clearAffiche() {
	affiche.innerHTML = "";
}

