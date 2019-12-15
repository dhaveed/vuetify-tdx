jQuery(function(p) {
  if ("undefined" == typeof wc_address_i18n_params) return !1;
  var e = wc_address_i18n_params.locale.replace(/&quot;/g, '"'),
    s = p.parseJSON(e);
  function c(e, a) {
    a
      ? (e.find("label .optional").remove(),
        e.addClass("validate-required"),
        0 === e.find("label .required").length &&
          e
            .find("label")
            .append(
              '&nbsp;<abbr class="required" title="' +
                wc_address_i18n_params.i18n_required_text +
                '">*</abbr>'
            ))
      : (e.find("label .required").remove(),
        e.removeClass(
          "validate-required woocommerce-invalid woocommerce-invalid-required-field"
        ),
        0 === e.find("label .optional").length &&
          e
            .find("label")
            .append(
              '&nbsp;<span class="optional">(' +
                wc_address_i18n_params.i18n_optional_text +
                ")</span>"
            ));
  }
  p(document.body)
    .bind("country_to_state_changing", function(e, a, i) {
      var t,
        r = i;
      t = "undefined" != typeof s[a] ? s[a] : s["default"];
      var d = r.find("#billing_postcode_field, #shipping_postcode_field"),
        l = r.find("#billing_city_field, #shipping_city_field"),
        n = r.find("#billing_state_field, #shipping_state_field");
      d.attr("data-o_class") ||
        (d.attr("data-o_class", d.attr("class")),
        l.attr("data-o_class", l.attr("class")),
        n.attr("data-o_class", n.attr("class")));
      var o = p.parseJSON(wc_address_i18n_params.locale_fields);
      p.each(o, function(e, a) {
        var i = r.find(a),
          d = p.extend(!0, {}, s["default"][e], t[e]);
        "undefined" != typeof d.label && i.find("label").html(d.label),
          "undefined" != typeof d.placeholder &&
            (i.find(":input").attr("placeholder", d.placeholder),
            i.find(":input").attr("data-placeholder", d.placeholder),
            i.find(".select2-selection__placeholder").text(d.placeholder)),
          "undefined" != typeof d.placeholder ||
            "undefined" == typeof d.label ||
            i.find("label").length ||
            (i.find(":input").attr("placeholder", d.label),
            i.find(":input").attr("data-placeholder", d.label),
            i.find(".select2-selection__placeholder").text(d.label)),
          "undefined" != typeof d.required ? c(i, d.required) : c(i, !1),
          "undefined" != typeof d.priority && i.data("priority", d.priority),
          "state" !== e &&
            ("undefined" != typeof d.hidden && !0 === d.hidden
              ? i
                  .hide()
                  .find(":input")
                  .val("")
              : i.show());
      }),
        p(
          ".woocommerce-billing-fields__field-wrapper,.woocommerce-shipping-fields__field-wrapper,.woocommerce-address-fields__field-wrapper,.woocommerce-additional-fields__field-wrapper .woocommerce-account-fields"
        ).each(function(e, a) {
          var i = p(a).find(".form-row"),
            d = i.first().parent(),
            t = 0;
          i.each(function() {
            p(this).data("priority") || p(this).data("priority", t + 1),
              (t = p(this).data("priority"));
          }),
            i.sort(function(e, a) {
              var i = parseInt(p(e).data("priority"), 10),
                d = parseInt(p(a).data("priority"), 10);
              return d < i ? 1 : i < d ? -1 : 0;
            }),
            i.detach().appendTo(d);
        });
    })
    .trigger("wc_address_i18n_ready");
});
