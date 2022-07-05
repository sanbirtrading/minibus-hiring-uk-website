$(function() {
	$("input,select,textarea").jqBootstrapValidation({
		preventSubmit: !0,
		submitError: function(e, t, s) {},
		submitSuccess: function(e, t) {
			t.preventDefault();
			var s = $("input#user-name").val(),
				a = $("input#user-email").val(),
				n = $("input#user-phone").val(),
				r = $("input#datepicker").val(),
				i = $("select#request-type").val(),
				u = $("select#passanger").val(),
				l = $("select#luggage").val(),
				c = $("select#vehicle").val(),
				p = $("select#trip").val(),
				o = $("input#pickup").val(),
				d = $("input#destination").val(),
				g = $("input#return_datepicker").val(),
				v = $("input#return-pickup").val(),
				m = $("input#return-destination").val(),
				h = $("input#flight").val(),
				f = $("textarea#user-message").val(),
				b = s;
			b.indexOf(" ") >= 0 && (b = s.split(" ").slice(0, -1).join(" ")), $.ajax({
				url: "././mail/request-a-quote.php",
				type: "POST",
				dataType: "json",
				data: {
					name: s,
					email: a,
					phone: n,
					date_of_travel: r,
					request_type: i,
					passanger: u,
					luggage: l,
					vehicle: c,
					trip: p,
					pickup: o,
					destination: d,
					return_date: g,
					return_pickup: v,
					return_destination: m,
					flight: h,
					message: f
				},
				cache: !1,
				success: function(e) {
					e.error ? ($("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append("<strong>Sorry " + b + ", Something is not right. Please try again.</strong>"), $("#success > .alert-danger").append("</div>"), $("#quoteForm").trigger("reset")) : e.success && ($("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Thanks for contacting ABC Travel! We'll connect with you shortly.</strong>"), $("#success > .alert-success").append("</div>"), $("#quoteForm").trigger("reset"))
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