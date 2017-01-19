
"use strict"
/* WALIDACJA PUSTYCH PÓL - START */

//Listener zdarzenia kliknięcia w przyciks wyślij
document.getElementById('wyslij').addEventListener('click', validateForm); 

//Funkcja walidująca
function validateForm(e) {


	var textInputs = document.querySelectorAll('input[type=text]'); //pobierz wszytskie inputy typu text


	//iteracja po polach formularza
	for (var i = 0; i < textInputs.length; i++) {
		
		 //jeślu pole formularza jest puste
		if (textInputs[i].value == '') {

			e.preventDefault(); //Nie wysyłaj formularza

			//Jeśli już jest paragraf z komunkatem błędu, to nie twórz nowego
			if (textInputs[i].nextElementSibling.tagName == 'p') {
				continue;
			}
			
			//wywołaj funkcję tworzącą komunkat błędu
			createMessageParagrpah(textInputs[i], 'alert-' + i);


		} else if (textInputs[i].value != '' && textInputs[i].nextElementSibling.tagName == 'p') { //jeśli input jest wypełniony i istnieje alert
			
			//usuń komuniak błędu
			document.getElementById('alert-' + i).remove(); 

		}

	}
	
	
//Funkcja tworząda komunkta błędu
function createMessageParagrpah(element, id) {
	
	var message = document.createElement('p'); //stwórz element p
	message.id = id; //dodaj do elementu p id alert z kolejnym indexem
	message.innerHTML = "Wszystkie pola są wymagane &nbsp"; //dodaj do elementu p treść
//	element.parentNode.insertBefore(message, element.nextSibling); //ustaw element p jako element potomny dla inputa
	
	element.parentNode.insertBefore(message, element.referenceNode);
	
}

}
