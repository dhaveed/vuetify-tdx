/*!
 *
 * jQuery TE 1.4.0 , http://jqueryte.com/
 * Copyright (C) 2013, Fatih Koca (fattih@fattih.com), (http://jqueryte.com/about)

 * jQuery TE is provided under the MIT LICENSE.
 *
*/
(function(e) {
  e.fn.jqte = function(t) {
    function l(e, t, n, r, i) {
      var s = f.length + 1;
      return f.push({
        name: e,
        cls: s,
        command: t,
        key: n,
        tag: r,
        emphasis: i
      });
    }
    var n = [
      { title: "Text Format" },
      { title: "Font Size" },
      { title: "Color" },
      { title: "Bold", hotkey: "B" },
      { title: "Italic", hotkey: "I" },
      { title: "Underline", hotkey: "U" },
      { title: "Ordered List", hotkey: "." },
      { title: "Unordered List", hotkey: "," },
      { title: "Subscript", hotkey: "down arrow" },
      { title: "Superscript", hotkey: "up arrow" },
      { title: "Outdent", hotkey: "left arrow" },
      { title: "Indent", hotkey: "right arrow" },
      { title: "Justify Left" },
      { title: "Justify Center" },
      { title: "Justify Right" },
      { title: "Strike Through", hotkey: "K" },
      { title: "Add Link", hotkey: "L" },
      { title: "Remove Link" },
      { title: "Cleaner Style", hotkey: "Delete" },
      { title: "Horizontal Rule", hotkey: "H" },
      { title: "Source" }
    ];
    var r = [
      ["p", "Normal"],
      ["h1", "Header 1"],
      ["h2", "Header 2"],
      ["h3", "Header 3"],
      ["h4", "Header 4"],
      ["h5", "Header 5"],
      ["h6", "Header 6"],
      ["pre", "Preformatted"]
    ];
    var i = ["10", "12", "16", "18", "20", "24", "28"];
    var s = [
      "0,0,0",
      "68,68,68",
      "102,102,102",
      "153,153,153",
      "204,204,204",
      "238,238,238",
      "243,243,243",
      "255,255,255",
      null,
      "255,0,0",
      "255,153,0",
      "255,255,0",
      "0,255,0",
      "0,255,255",
      "0,0,255",
      "153,0,255",
      "255,0,255",
      null,
      "244,204,204",
      "252,229,205",
      "255,242,204",
      "217,234,211",
      "208,224,227",
      "207,226,243",
      "217,210,233",
      "234,209,220",
      "234,153,153",
      "249,203,156",
      "255,229,153",
      "182,215,168",
      "162,196,201",
      "159,197,232",
      "180,167,214",
      "213,166,189",
      "224,102,102",
      "246,178,107",
      "255,217,102",
      "147,196,125",
      "118,165,175",
      "111,168,220",
      "142,124,195",
      "194,123,160",
      "204,0,0",
      "230,145,56",
      "241,194,50",
      "106,168,79",
      "69,129,142",
      "61,133,198",
      "103,78,167",
      "166,77,121",
      "153,0,0",
      "180,95,6",
      "191,144,0",
      "56,118,29",
      "19,79,92",
      "11,83,148",
      "53,28,117",
      "116,27,71",
      "102,0,0",
      "120,63,4",
      "127,96,0",
      "39,78,19",
      "12,52,61",
      "7,55,99",
      "32,18,77",
      "76,17,48"
    ];
    var o = ["Web Address", "E-mail Address", "Picture URL"];
    var u = e.extend(
      {
        status: true,
        css: "jqte",
        title: true,
        titletext: n,
        button: "OK",
        format: true,
        formats: r,
        fsize: true,
        fsizes: i,
        funit: "px",
        color: true,
        linktypes: o,
        b: true,
        i: true,
        u: true,
        ol: true,
        ul: true,
        sub: true,
        sup: true,
        outdent: true,
        indent: true,
        left: true,
        center: true,
        right: true,
        strike: true,
        link: true,
        unlink: true,
        remove: true,
        rule: true,
        source: true,
        placeholder: false,
        br: true,
        p: true,
        change: "",
        focus: "",
        blur: ""
      },
      t
    );
    e.fn.jqteVal = function(t) {
      e(this)
        .closest("." + u.css)
        .find("." + u.css + "_editor")
        .html(t);
    };
    var a = navigator.userAgent.toLowerCase();
    if (/msie [1-7]./.test(a)) u.title = false;
    var f = [];
    l("format", "formats", "", "", false);
    l("fsize", "fSize", "", "", false);
    l("color", "colors", "", "", false);
    l("b", "Bold", "B", ["b", "strong"], true);
    l("i", "Italic", "I", ["i", "em"], true);
    l("u", "Underline", "U", ["u"], true);
    l("ol", "insertorderedlist", "¾", ["ol"], true);
    l("ul", "insertunorderedlist", "¼", ["ul"], true);
    l("sub", "subscript", "(", ["sub"], true);
    l("sup", "superscript", "&", ["sup"], true);
    l("outdent", "outdent", "%", ["blockquote"], false);
    l("indent", "indent", "'", ["blockquote"], true);
    l("left", "justifyLeft", "", "", false);
    l("center", "justifyCenter", "", "", false);
    l("right", "justifyRight", "", "", false);
    l("strike", "strikeThrough", "K", ["strike"], true);
    l("link", "linkcreator", "L", ["a"], true);
    l("unlink", "unlink", "", ["a"], false);
    l("remove", "removeformat", ".", "", false);
    l("rule", "inserthorizontalrule", "H", ["hr"], false);
    l("source", "displaysource", "", "", false);
    return this.each(function() {
      function B() {
        if (window.getSelection) return window.getSelection();
        else if (
          document.selection &&
          document.selection.createRange &&
          document.selection.type != "None"
        )
          return document.selection.createRange();
      }
      function j(e, t) {
        var n,
          r = B();
        if (window.getSelection) {
          if (r.anchorNode && r.getRangeAt) n = r.getRangeAt(0);
          if (n) {
            r.removeAllRanges();
            r.addRange(n);
          }
          if (!a.match(/msie/))
            document.execCommand("StyleWithCSS", false, false);
          document.execCommand(e, false, t);
        } else if (
          document.selection &&
          document.selection.createRange &&
          document.selection.type != "None"
        ) {
          n = document.selection.createRange();
          n.execCommand(e, false, t);
        }
        q(false, false);
      }
      function F(t, n, r) {
        if (v.not(":focus")) v.focus();
        if (window.getSelection) {
          var i = B(),
            s,
            o,
            u;
          if (i.anchorNode && i.getRangeAt) {
            s = i.getRangeAt(0);
            o = document.createElement(t);
            e(o).attr(n, r);
            u = s.extractContents();
            o.appendChild(u);
            s.insertNode(o);
            i.removeAllRanges();
            if (n == "style") q(e(o), r);
            else q(e(o), false);
          }
        } else if (
          document.selection &&
          document.selection.createRange &&
          document.selection.type != "None"
        ) {
          var a = document.selection.createRange();
          var f = a.htmlText;
          var l = "<" + t + " " + n + '="' + r + '">' + f + "</" + t + ">";
          document.selection.createRange().pasteHTML(l);
        }
      }
      function q(e, t) {
        var n = I();
        n = n ? n : e;
        if (n && t == false) {
          if (n.parent().is("[style]"))
            n.attr("style", n.parent().attr("style"));
          if (n.is("[style]")) n.find("*").attr("style", n.attr("style"));
        } else if (e && t && e.is("[style]")) {
          var r = t.split(";");
          r = r[0].split(":");
          if (e.is("[style*=" + r[0] + "]")) e.find("*").css(r[0], r[1]);
          R(e);
        }
      }
      function R(t) {
        if (t) {
          var t = t[0];
          if (document.body.createTextRange) {
            var n = document.body.createTextRange();
            n.moveToElementText(t);
            n.select();
          } else if (window.getSelection) {
            var r = window.getSelection();
            var n = document.createRange();
            if (t != "undefined" && t != null) {
              n.selectNodeContents(t);
              r.removeAllRanges();
              r.addRange(n);
              if (e(t).is(":empty")) {
                e(t).append(" ");
                R(e(t));
              }
            }
          }
        }
      }
      function U() {
        if (!p.data("sourceOpened")) {
          var t = I();
          var n = "http://";
          W(true);
          if (t) {
            var r = t.prop("tagName").toLowerCase();
            if (r == "a" && t.is("[href]")) {
              n = t.attr("href");
              t.attr(S, "");
            } else F("a", S, "");
          } else y.val(n).focus();
          g.click(function(t) {
            if (
              e(t.target).hasClass(u.css + "_linktypetext") ||
              e(t.target).hasClass(u.css + "_linktypearrow")
            )
              X(true);
          });
          w.find("a").click(function() {
            var t = e(this).attr(u.css + "-linktype");
            w.data("linktype", t);
            E.find("." + u.css + "_linktypetext").html(
              w.find("a:eq(" + w.data("linktype") + ")").text()
            );
            V(n);
            X();
          });
          V(n);
          y.focus()
            .val(n)
            .bind("keypress keyup", function(e) {
              if (e.keyCode == 13) {
                z(h.find("[" + S + "]"));
                return false;
              }
            });
          b.click(function() {
            z(h.find("[" + S + "]"));
          });
        } else W(false);
      }
      function z(t) {
        y.focus();
        R(t);
        t.removeAttr(S);
        if (w.data("linktype") != "2") j("createlink", y.val());
        else {
          j("insertImage", y.val());
          v.find("img").each(function() {
            var t = e(this).prev("a");
            var n = e(this).next("a");
            if (t.length > 0 && t.html() == "") t.remove();
            else if (n.length > 0 && n.html() == "") n.remove();
          });
        }
        W();
        v.trigger("change");
      }
      function W(e) {
        Q("[" + S + "]:not([href])");
        h.find("[" + S + "][href]").removeAttr(S);
        if (e) {
          p.data("linkOpened", true);
          d.show();
        } else {
          p.data("linkOpened", false);
          d.hide();
        }
        X();
      }
      function X(e) {
        if (e) w.show();
        else w.hide();
      }
      function V(e) {
        var t = w.data("linktype");
        if (
          t == "1" &&
          (y.val() == "http://" ||
            y.is("[value^=http://]") ||
            !y.is("[value^=mailto]"))
        )
          y.val("mailto:");
        else if (t != "1" && !y.is("[value^=http://]")) y.val("http://");
        else y.val(e);
      }
      function J(t) {
        if (!p.data("sourceOpened")) {
          if (t == "fSize") styleField = P;
          else if (t == "colors") styleField = H;
          K(styleField, true);
          styleField
            .find("a")
            .unbind("click")
            .click(function() {
              var n = e(this).attr(u.css + "-styleval");
              if (t == "fSize") {
                styleType = "font-size";
                n = n + u.funit;
              } else if (t == "colors") {
                styleType = "color";
                n = "rgb(" + n + ")";
              }
              var r = G(styleType);
              F("span", "style", styleType + ":" + n + ";" + r);
              K("", false);
              e("." + u.css + "_title").remove();
              v.trigger("change");
            });
        } else K(styleField, false);
        W(false);
      }
      function K(e, t) {
        var n = "",
          r = [
            { d: "fsizeOpened", f: P },
            { d: "cpallOpened", f: H }
          ];
        if (e != "") {
          for (var i = 0; i < r.length; i++) {
            if (e == r[i]["f"]) n = r[i];
          }
        }
        if (t) {
          p.data(n["d"], true);
          n["f"].slideDown(100);
          for (var i = 0; i < r.length; i++) {
            if (n["d"] != r[i]["d"]) {
              p.data(r[i]["d"], false);
              r[i]["f"].slideUp(100);
            }
          }
        } else {
          for (var i = 0; i < r.length; i++) {
            p.data(r[i]["d"], false);
            r[i]["f"].slideUp(100);
          }
        }
      }
      function Q(t) {
        h.find(t).each(function() {
          e(this)
            .before(e(this).html())
            .remove();
        });
      }
      function G(e) {
        var t = I();
        if (t && t.is("[style]") && t.css(e) != "") {
          var n = t.css(e);
          t.css(e, "");
          var r = t.attr("style");
          t.css(e, n);
          return r;
        } else return "";
      }
      function Y() {
        Z(true);
        D.find("a").click(function() {
          e("*", this).click(function(e) {
            e.preventDefault();
            return false;
          });
          et(e(this).text());
          var t = e(this).attr(u.css + "-formatval");
          j("formatBlock", "<" + t + ">");
          Z(false);
        });
      }
      function Z(e) {
        var t = e ? true : false;
        t = e && D.data("status") ? true : false;
        if (t || !e) D.data("status", false).slideUp(200);
        else D.data("status", true).slideDown(200);
      }
      function et(e) {
        var t = D.closest("." + u.css + "_tool")
          .find("." + u.css + "_tool_label")
          .find("." + u.css + "_tool_text");
        if (e.length > 10) e = e.substr(0, 7) + "...";
        t.html(e);
      }
      function tt(e) {
        var t, n, r;
        t = e
          .replace(/\n/gim, "")
          .replace(/\r/gim, "")
          .replace(/\t/gim, "")
          .replace(/ /gim, " ");
        n = [
          /\<span(|\s+.*?)><span(|\s+.*?)>(.*?)<\/span><\/span>/gim,
          /<(\w*[^p])\s*[^\/>]*>\s*<\/\1>/gim,
          /\<div(|\s+.*?)>(.*?)\<\/div>/gim,
          /\<strong(|\s+.*?)>(.*?)\<\/strong>/gim,
          /\<em(|\s+.*?)>(.*?)\<\/em>/gim
        ];
        r = [
          "<span$2>$3</span>",
          "",
          "<p$1>$2</p>",
          "<b$1>$2</b>",
          "<i$1>$2</i>"
        ];
        for (A = 0; A < 5; A++) {
          for (var i = 0; i < n.length; i++) {
            t = t.replace(n[i], r[i]);
          }
        }
        if (!u.p) t = t.replace(/\<p(|\s+.*?)>(.*?)\<\/p>/gi, "<br/>$2");
        if (!u.br) {
          n = [/\<br>(.*?)/gi, /\<br\/>(.*?)/gi];
          r = ["<p>$1</p>", "<p>$1</p>"];
          for (var i = 0; i < n.length; i++) {
            t = t.replace(n[i], r[i]);
          }
        }
        if (!u.p && !u.br) t = t.replace(/\<p>(.*?)\<\/p>/gi, "<div>$1</div>");
        return t;
      }
      function nt() {
        var e = v.text() == "" && v.html().length < 12 ? "" : v.html();
        l.val(tt(e));
      }
      function rt() {
        v.html(tt(l.val()));
      }
      function it(t) {
        var n = false,
          r = I(),
          i;
        if (r) {
          e.each(t, function(t, s) {
            i = r.prop("tagName").toLowerCase();
            if (i == s) n = true;
            else {
              r.parents().each(function() {
                i = e(this)
                  .prop("tagName")
                  .toLowerCase();
                if (i == s) n = true;
              });
            }
          });
          return n;
        } else return false;
      }
      function st(t) {
        for (var n = 0; n < f.length; n++) {
          if (u[f[n].name] && f[n].emphasis && f[n].tag != "")
            it(f[n].tag)
              ? p.find("." + u.css + "_tool_" + f[n].cls).addClass(m)
              : e("." + u.css + "_tool_" + f[n].cls).removeClass(m);
        }
        if (u.format && e.isArray(u.formats)) {
          var r = false;
          for (var i = 0; i < u.formats.length; i++) {
            var s = [];
            s[0] = u.formats[i][0];
            if (u.formats[i][0].length > 0 && it(s)) {
              et(u.formats[i][1]);
              r = true;
              break;
            }
          }
          if (!r) et(u.formats[0][1]);
        }
        K("", false);
        Z(false);
      }
      if (
        !e(this).data("jqte") ||
        e(this).data("jqte") == null ||
        e(this).data("jqte") == "undefined"
      )
        e(this).data("jqte", true);
      else e(this).data("jqte", false);
      if (!u.status || !e(this).data("jqte")) {
        if (e(this).closest("." + u.css).length > 0) {
          var t = e(this)
            .closest("." + u.css)
            .find("." + u.css + "_editor")
            .html();
          var n = "";
          e(e(this)[0].attributes).each(function() {
            if (this.nodeName != "style")
              n = n + " " + this.nodeName + '="' + this.nodeValue + '"';
          });
          var r =
            e(this).is("[data-origin]") && e(this).attr("data-origin") != ""
              ? e(this).attr("data-origin")
              : "textarea";
          var i = ">" + t;
          if (r == "input" || r == "option") {
            t = t
              .replace(/"/g, "&#34;")
              .replace(/'/g, "&#39;")
              .replace(/</g, "<")
              .replace(/>/g, ">");
            i = 'value="' + t + '">';
          }
          var o = e(this).clone();
          e(this)
            .data("jqte", false)
            .closest("." + u.css)
            .before(o)
            .remove();
          o.replaceWith("<" + r + n + i + "</" + r + ">");
        }
        return;
      }
      var l = e(this);
      var r = e(this)
        .prop("tagName")
        .toLowerCase();
      e(this).attr("data-origin", r);
      var c =
        e(this).is("[value]") || r == "textarea"
          ? e(this).val()
          : e(this).html();
      c = c
        .replace(/&#34;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/</g, "<")
        .replace(/>/g, ">")
        .replace(/&/g, "&");
      e(this).after('<div class="' + u.css + '"></div>');
      var h = e(this).next("." + u.css);
      h.html(
        '<div class="' +
          u.css +
          "_toolbar" +
          '" role="toolbar" unselectable></div><div class="' +
          u.css +
          '_linkform" style="display:none" role="dialog"></div><div class="' +
          u.css +
          "_editor" +
          '"></div>'
      );
      var p = h.find("." + u.css + "_toolbar");
      var d = h.find("." + u.css + "_linkform");
      var v = h.find("." + u.css + "_editor");
      var m = u.css + "_tool_depressed";
      d.append(
        '<div class="' +
          u.css +
          '_linktypeselect" unselectable></div><input class="' +
          u.css +
          '_linkinput" type="text/css" value=""><div class="' +
          u.css +
          '_linkbutton" unselectable>' +
          u.button +
          '</div> <div style="height:1px;float:none;clear:both"></div>'
      );
      var g = d.find("." + u.css + "_linktypeselect");
      var y = d.find("." + u.css + "_linkinput");
      var b = d.find("." + u.css + "_linkbutton");
      g.append(
        '<div class="' +
          u.css +
          '_linktypeview" unselectable></div><div class="' +
          u.css +
          '_linktypes" role="menu" unselectable></div>'
      );
      var w = g.find("." + u.css + "_linktypes");
      var E = g.find("." + u.css + "_linktypeview");
      var S = u.css + "-setlink";
      v.after(
        '<div class="' + u.css + "_source " + u.css + '_hiddenField"></div>'
      );
      var x = h.find("." + u.css + "_source");
      l.appendTo(x);
      if (r != "textarea") {
        var n = "";
        e(l[0].attributes).each(function() {
          if (this.nodeName != "type" && this.nodeName != "value")
            n = n + " " + this.nodeName + '="' + this.nodeValue + '"';
        });
        l.replaceWith("<textarea " + n + ">" + c + "</textarea>");
        l = x.find("textarea");
      }
      v.attr("contenteditable", "true").html(c);
      for (var T = 0; T < f.length; T++) {
        if (u[f[T].name]) {
          var N =
            f[T].key.length > 0
              ? u.titletext[T].hotkey != null &&
                u.titletext[T].hotkey != "undefined" &&
                u.titletext[T].hotkey != ""
                ? " (Ctrl+" + u.titletext[T].hotkey + ")"
                : ""
              : "";
          var C =
            u.titletext[T].title != null &&
            u.titletext[T].title != "undefined" &&
            u.titletext[T].title != ""
              ? u.titletext[T].title + N
              : "";
          p.append(
            '<div class="' +
              u.css +
              "_tool " +
              u.css +
              "_tool_" +
              f[T].cls +
              '" role="button" data-tool="' +
              T +
              '" unselectable><a class="' +
              u.css +
              '_tool_icon" unselectable></a></div>'
          );
          p.find("." + u.css + "_tool[data-tool=" + T + "]").data({
            tag: f[T].tag,
            command: f[T].command,
            emphasis: f[T].emphasis,
            title: C
          });
          if (f[T].name == "format" && e.isArray(u.formats)) {
            var k =
              u.formats[0][1].length > 0 && u.formats[0][1] != "undefined"
                ? u.formats[0][1]
                : "";
            p.find("." + u.css + "_tool_" + f[T].cls)
              .find("." + u.css + "_tool_icon")
              .replaceWith(
                '<a class="' +
                  u.css +
                  '_tool_label" unselectable><span class="' +
                  u.css +
                  '_tool_text" unselectable>' +
                  k +
                  '</span><span class="' +
                  u.css +
                  '_tool_icon" unselectable></span></a>'
              );
            p.find("." + u.css + "_tool_" + f[T].cls).append(
              '<div class="' + u.css + '_formats" unselectable></div>'
            );
            for (var L = 0; L < u.formats.length; L++) {
              p.find("." + u.css + "_formats").append(
                "<a " +
                  u.css +
                  '-formatval="' +
                  u.formats[L][0] +
                  '" class="' +
                  u.css +
                  "_format" +
                  " " +
                  u.css +
                  "_format_" +
                  L +
                  '" role="menuitem" unselectable>' +
                  u.formats[L][1] +
                  "</a>"
              );
            }
            p.find("." + u.css + "_formats").data("status", false);
          } else if (f[T].name == "fsize" && e.isArray(u.fsizes)) {
            p.find("." + u.css + "_tool_" + f[T].cls).append(
              '<div class="' + u.css + '_fontsizes" unselectable></div>'
            );
            for (var L = 0; L < u.fsizes.length; L++) {
              p.find("." + u.css + "_fontsizes").append(
                "<a " +
                  u.css +
                  '-styleval="' +
                  u.fsizes[L] +
                  '" class="' +
                  u.css +
                  "_fontsize" +
                  '" style="font-size:' +
                  u.fsizes[L] +
                  u.funit +
                  '" role="menuitem" unselectable>Abcdefgh...</a>'
              );
            }
          } else if (f[T].name == "color" && e.isArray(s)) {
            p.find("." + u.css + "_tool_" + f[T].cls).append(
              '<div class="' + u.css + '_cpalette" unselectable></div>'
            );
            for (var A = 0; A < s.length; A++) {
              if (s[A] != null)
                p.find("." + u.css + "_cpalette").append(
                  "<a " +
                    u.css +
                    '-styleval="' +
                    s[A] +
                    '" class="' +
                    u.css +
                    "_color" +
                    '" style="background-color: rgb(' +
                    s[A] +
                    ')" role="gridcell" unselectable></a>'
                );
              else
                p.find("." + u.css + "_cpalette").append(
                  '<div class="' + u.css + "_colorSeperator" + '"></div>'
                );
            }
          }
        }
      }
      w.data("linktype", "0");
      for (var T = 0; T < 3; T++) {
        w.append(
          "<a " +
            u.css +
            '-linktype="' +
            T +
            '" unselectable>' +
            u.linktypes[T] +
            "</a>"
        );
        E.html(
          '<div class="' +
            u.css +
            '_linktypearrow" unselectable></div><div class="' +
            u.css +
            '_linktypetext">' +
            w.find("a:eq(" + w.data("linktype") + ")").text() +
            "</div>"
        );
      }
      var O = "";
      if (/msie/.test(a)) O = "-ms-";
      else if (/chrome/.test(a) || /safari/.test(a) || /yandex/.test(a))
        O = "-webkit-";
      else if (/mozilla/.test(a)) O = "-moz-";
      else if (/opera/.test(a)) O = "-o-";
      else if (/konqueror/.test(a)) O = "-khtml-";
      else O = "";
      if (u.placeholder && u.placeholder != "") {
        h.prepend(
          '<div class="' +
            u.css +
            '_placeholder" unselectable><div class="' +
            u.css +
            '_placeholder_text">' +
            u.placeholder +
            "</div></div>"
        );
        var M = h.find("." + u.css + "_placeholder");
        M.click(function() {
          v.focus();
        });
      }
      h.find("[unselectable]")
        .css(O + "user-select", "none")
        .addClass("unselectable")
        .attr("unselectable", "on")
        .on("selectstart mousedown", false);
      var _ = p.find("." + u.css + "_tool");
      var D = p.find("." + u.css + "_formats");
      var P = p.find("." + u.css + "_fontsizes");
      var H = p.find("." + u.css + "_cpalette");
      var I = function() {
        var t, n;
        if (window.getSelection) {
          n = getSelection();
          t = n.anchorNode;
        }
        if (
          !t &&
          document.selection &&
          document.selection.createRange &&
          document.selection.type != "None"
        ) {
          n = document.selection;
          var r = n.getRangeAt ? n.getRangeAt(0) : n.createRange();
          t = r.commonAncestorContainer
            ? r.commonAncestorContainer
            : r.parentElement
            ? r.parentElement()
            : r.item(0);
        }
        if (t) {
          return t.nodeName == "#text" ? e(t.parentNode) : e(t);
        } else return false;
      };
      _.unbind("click")
        .click(function(t) {
          if (
            e(this).data("command") == "displaysource" &&
            !p.data("sourceOpened")
          ) {
            p.find("." + u.css + "_tool").addClass(u.css + "_hiddenField");
            e(this).removeClass(u.css + "_hiddenField");
            p.data("sourceOpened", true);
            l.css("height", v.outerHeight());
            x.removeClass(u.css + "_hiddenField");
            v.addClass(u.css + "_hiddenField");
            l.focus();
            W(false);
            K("", false);
            Z();
            if (u.placeholder && u.placeholder != "") M.hide();
          } else {
            if (!p.data("sourceOpened")) {
              if (e(this).data("command") == "linkcreator") {
                if (!p.data("linkOpened")) U();
                else {
                  W(false);
                  Z(false);
                }
              } else if (e(this).data("command") == "formats") {
                if (
                  e(this).data("command") == "formats" &&
                  !e(t.target).hasClass(u.css + "_format")
                )
                  Y();
                K("", false);
                if (v.not(":focus")) v.focus();
              } else if (
                e(this).data("command") == "fSize" ||
                e(this).data("command") == "colors"
              ) {
                if (
                  (e(this).data("command") == "fSize" &&
                    !e(t.target).hasClass(u.css + "_fontsize")) ||
                  (e(this).data("command") == "colors" &&
                    !e(t.target).hasClass(u.css + "_color"))
                )
                  J(e(this).data("command"));
                Z(false);
                if (v.not(":focus")) v.focus();
              } else {
                if (v.not(":focus")) v.focus();
                j(e(this).data("command"), null);
                K("", false);
                Z(false);
                X();
                e(this).data("emphasis") == true && !e(this).hasClass(m)
                  ? e(this).addClass(m)
                  : e(this).removeClass(m);
                x.addClass(u.css + "_hiddenField");
                v.removeClass(u.css + "_hiddenField");
              }
            } else {
              p.data("sourceOpened", false);
              p.find("." + u.css + "_tool").removeClass(u.css + "_hiddenField");
              x.addClass(u.css + "_hiddenField");
              v.removeClass(u.css + "_hiddenField");
            }
            if (u.placeholder && u.placeholder != "")
              v.html() != "" ? M.hide() : M.show();
          }
          v.trigger("change");
        })
        .hover(
          function(t) {
            if (
              u.title &&
              e(this).data("title") != "" &&
              (e(t.target).hasClass(u.css + "_tool") ||
                e(t.target).hasClass(u.css + "_tool_icon"))
            ) {
              e("." + u.css + "_title").remove();
              h.append(
                '<div class="' +
                  u.css +
                  '_title"><div class="' +
                  u.css +
                  '_titleArrow"><div class="' +
                  u.css +
                  '_titleArrowIcon"></div></div><div class="' +
                  u.css +
                  '_titleText">' +
                  e(this).data("title") +
                  "</div></div>"
              );
              var n = e("." + u.css + "_title:first");
              var r = n.find("." + u.css + "_titleArrowIcon");
              var i = e(this).position();
              var s =
                i.left +
                e(this).outerWidth() -
                n.outerWidth() / 2 -
                e(this).outerWidth() / 2;
              var o = i.top + e(this).outerHeight() + 5;
              n.delay(400)
                .css({ top: o, left: s })
                .fadeIn(200);
            }
          },
          function() {
            e("." + u.css + "_title").remove();
          }
        );
      var ot = null;
      v.bind(
        "keypress keyup keydown drop cut copy paste DOMCharacterDataModified DOMSubtreeModified",
        function() {
          if (!p.data("sourceOpened")) e(this).trigger("change");
          X();
          if (e.isFunction(u.change)) u.change();
          if (u.placeholder && u.placeholder != "")
            e(this).text() != "" ? M.hide() : M.show();
        }
      )
        .bind("change", function() {
          if (!p.data("sourceOpened")) {
            clearTimeout(ot);
            ot = setTimeout(nt, 10);
          }
        })
        .keydown(function(e) {
          if (e.ctrlKey) {
            for (var t = 0; t < f.length; t++) {
              if (u[f[t].name] && e.keyCode == f[t].key.charCodeAt(0)) {
                if (f[t].command != "" && f[t].command != "linkcreator")
                  j(f[t].command, null);
                else if (f[t].command == "linkcreator") U();
                return false;
              }
            }
          }
        })
        .bind("mouseup keyup", st)
        .focus(function() {
          if (e.isFunction(u.focus)) u.focus();
          h.addClass(u.css + "_focused");
          if (/opera/.test(a)) {
            var t = document.createRange();
            t.selectNodeContents(v[0]);
            t.collapse(false);
            var n = window.getSelection();
            n.removeAllRanges();
            n.addRange(t);
          }
        })
        .focusout(function() {
          _.removeClass(m);
          K("", false);
          Z(false);
          X();
          if (e.isFunction(u.blur)) u.blur();
          h.removeClass(u.css + "_focused");
          if (e.isArray(u.formats)) et(u.formats[0][1]);
        });
      l.bind("keydown keyup", function() {
        setTimeout(rt, 0);
        e(this).height(e(this)[0].scrollHeight);
        if (e(this).val() == "") e(this).height(0);
      })
        .focus(function() {
          h.addClass(u.css + "_focused");
        })
        .focusout(function() {
          h.removeClass(u.css + "_focused");
        });
    });
  };
})(jQuery);
