const inputField = document.getElementById('phone');

inputField.addEventListener('input',function(){
	if(this.value.length ===0){
		this.value = '+233';
		this.setSelectionRange(this.value.length)
	}
});