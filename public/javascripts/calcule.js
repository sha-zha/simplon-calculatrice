const btn = document.querySelectorAll(".button");
let affiche = document.getElementById('affiche');
let operation = document.getElementById('operation');
let local = document.getElementById('local');

let add = '+';
let sous = '-';
let multi ='*';
let divi ='/';
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
	

	//gestion cas user rentre que des opérateurs
	if(isNaN(parseInt(arg) ) == true ){
		
		// affiche un message d'erreur
		affiche.innerHTML = 'ERROR';
		operation.innerHTML = 'ERROR';

		return false;
	}

	//dernier element n'et pas un opérateur ou un .
	if(arg.charAt(arg.length-1) == add || arg.charAt(arg.length-1) == sous || arg.charAt(arg.length-1) == multi || arg.charAt(arg.length-1) == divi || arg.charAt(arg.length-1) == '.' ){

		// affiche un message d'erreur
		affiche.innerHTML = 'ERROR';
		operation.innerHTML = 'ERROR';

		return false;
	} 

	//permet de calculer à ne plus JAMAIS UITILISER 
	var result = eval(arg);

	console.log(result)

	switch(result){
		case undefined :
			result = '0';
			
			//créer li + css 
			var li = document.createElement('li');
			li.classList.add('list-group-item', 'list-group-item-dark');


			// stocke le réultat et le calcule
			let storage = localStorage.setItem('historique',result+'='+result);
			let his = localStorage.getItem('historique' );

			// affiche le résultat et historique 
			affiche.innerHTML = result;
			operation.innerHTML = result;

			// limite 
			if(array.length == 10 ){
			// 	//supprime le premier élément
				array.shift();
				array.push(result+'='+result);
				local.innerHTML = "";

			// 	affiche les 10 dernières opérations
			for (var j = 0; j < array.length; j++) {
				local.append(li)
				li.append(array[j])
			}

			}else{
			// 	ajout les éléments dans le tableau
				array.push(result+'='+result);
				local.append(li);
				li.append(his);
			}



		break;

		case Infinity :
			// affiche un message d'erreur
			affiche.innerHTML = 'ERROR';
			operation.innerHTML = 'ERROR';

		break;

		case -Infinity :
			// affiche un message d'erreur
			affiche.innerHTML = 'ERROR';
			operation.innerHTML = 'ERROR';

		break;


		default :
			
			var li = document.createElement('li');
			li.classList.add('list-group-item', 'list-group-item-dark');

			// stocke le réultat et le calcule
			let storages = localStorage.setItem('historique', arg+'='+result);
			let hist = localStorage.getItem('historique' );
				
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
					li.append(hist);
				}
		break;
	}

	
}


function clearAffiche() {
	affiche.innerHTML = "";
}

