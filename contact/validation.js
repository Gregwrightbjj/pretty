$(function){

	$("#contact-form").validate({
		rules: {
			email:{
				required: true,
				email: true
			}
		}
	})

}