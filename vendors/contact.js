$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Necesitamos un nombre",
                    minlength: "Tu nombre no puede ser un apodo"
                },
                email: {
                    required: "Necesitamos un correo electrónico"
                },
                message: {
                    required: "Por favor escribe un mensaje",
                    minlength: "Intenta contarnos un poco más, tu mensaje es muy corto"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form),
                    url:"https://formaholic.com/f/b40b3870d481cd1d",
                    complete: function(data) {
                        $('#contactForm').fadeOut();
                        $('#success').fadeIn();
                    }
                })
            }
        })
    })
        
 })(jQuery)
})