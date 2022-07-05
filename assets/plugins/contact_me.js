$(function() {
	$("#contactForm input, #contactForm textarea").jqBootstrapValidation({
		preventSubmit: !0,
		submitError: function(e, t, s) {},
		submitSuccess: function(e, t) {
			t.preventDefault();
			var s = $("input#user-name").val(),
				a = $("input#user-email").val(),
				c = $("input#user-phone").val(),
				n = $("input#user-subject").val(),
				r = $("textarea#user-message").val(),
				i = s;
			i.indexOf(" ") >= 0 && (i = s.split(" ").slice(0, -1).join(" ")), $.ajax({
				url: "././mail/contact_me.php",
				type: "POST",
				dataType: "json",
				data: {
					name: s,
					email: a,
					phone: c,
					subject: n,
					message: r
				},
				cache: !1,
				success: function(e) {
					e.error ? ($("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append("<strong>Sorry " + i + ", Something is not right. Please try again.</strong>"), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")) : e.success && ($("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Thanks for contacting ABC Travel! We'll connect with you shortly.</strong>"), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset"))
				}
			})
		},
		filter: function() {
			return $(this).is(":visible")
		}
	})
}), $("#name").focus(function() {
	$("#success").html("")
});