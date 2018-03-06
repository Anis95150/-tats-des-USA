var liste_etats = ['Alabama' ,
		'Alaska' ,
		'Arizona' ,
		'Arkansas' ,
		'Californie' ,
		'Caroline du Nord' ,
		'Caroline du Sud' ,
		'Colorado' ,
		'Connecticut' ,
		'Dakota du Nord' ,
		'Dakoto du Sud' ,
		'Delaware ',
		'Floride' ,
		'Géorgie' ,
		'Hawai' ,
		'Idaho' ,
		'Illinois' ,
		'Indiana' ,
		'Iowa' ,
		'Kansas' ,
		'Kentucky' ,
		'Louisiane' ,
		'Maine' ,
		'Maryland' ,
		'Massachusetts' ,
		'Michigan' ,
		'Minnesota' ,
		'Mississippi' ,
		'Missouri' ,
		'Montana' ,
		'Nebraska' ,
		'Nevada' ,
		'New Hampshir' ,
		'New-Jersey' ,
		'Nouveau-Mexique' ,
		'New-York' ,
		'Ohio' ,
		'Oklahoma' ,
		'Oregon' ,
		'Pennsylvanie' ,
		'Rhode Island' ,
		'Tenessee' ,
		'Texas' ,
		'Utah' ,
		'Vermont' ,
		'Virginie' ,
		'Virginie-Occidentale' ,
		'Washington' ,
		'Wisconcin' ,
		'Wyoming' ]

function filtreTexte(requete) {
	return liste_etats.filter(function(el) {
		return el.toUpperCase().indexOf(requete.toUpperCase()) > -1;
	})
}

function usa(){

var input = document.getElementById("texte").value; 
document.getElementById("para").innerHTML ="Les Etats qui contiennent "+ input +" sont :"+ filtreTexte(input);
}












