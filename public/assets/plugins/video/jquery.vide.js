/*!
 * Vidbg v1.1.1 (https://github.com/blakewilson/vidbg)
 * Vidbg By Blake Wilson
 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */
!(function(e, t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t("object" == typeof exports ? require("jquery") : e.jQuery);
})(this, function($) {
  "use strict";
  function e(e) {
    var t = {},
      o,
      i,
      r,
      n,
      s,
      a,
      p;
    for (
      s = e
        .replace(/\s*:\s*/g, ":")
        .replace(/\s*,\s*/g, ",")
        .split(","),
        p = 0,
        a = s.length;
      a > p &&
      ((i = s[p]),
      -1 === i.search(/^(http|https|ftp):\/\//) && -1 !== i.search(":"));
      p++
    )
      (o = i.indexOf(":")),
        (r = i.substring(0, o)),
        (n = i.substring(o + 1)),
        n || (n = void 0),
        "string" == typeof n && (n = "true" === n || ("false" === n ? !1 : n)),
        "string" == typeof n && (n = isNaN(n) ? n : +n),
        (t[r] = n);
    return null == r && null == n ? e : t;
  }
  function t(e) {
    e = "" + e;
    var t = e.split(/\s+/),
      o = "50%",
      i = "50%",
      r,
      n,
      s;
    for (s = 0, r = t.length; r > s; s++)
      (n = t[s]),
        "left" === n
          ? (o = "0%")
          : "right" === n
          ? (o = "100%")
          : "top" === n
          ? (i = "0%")
          : "bottom" === n
          ? (i = "100%")
          : "center" === n
          ? 0 === s
            ? (o = "50%")
            : (i = "50%")
          : 0 === s
          ? (o = n)
          : (i = n);
    return { x: o, y: i };
  }
  function o(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(t, function(e, t, o, i) {
      return t + t + o + o + i + i;
    });
    var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return o
      ? { r: parseInt(o[1], 16), g: parseInt(o[2], 16), b: parseInt(o[3], 16) }
      : null;
  }
  function i(t, o, i) {
    (this.$element = $(t)),
      "string" == typeof o && (o = e(o)),
      i ? "string" == typeof i && (i = e(i)) : (i = {}),
      (this.settings = $.extend({}, n, i)),
      (this.path = o);
    try {
      this.init();
    } catch (r) {
      if (r.message !== s) throw r;
    }
  }
  var r = "vidbg",
    n = {
      volume: 1,
      playbackRate: 1,
      muted: !0,
      loop: !0,
      autoplay: !0,
      position: "50% 50%",
      overlay: !1,
      overlayColor: "#000",
      overlayAlpha: 0.3,
      resizing: !0
    },
    s = "Not implemented";
  (i.prototype.init = function() {
    var e = this,
      i = e.path,
      r = i,
      n = "",
      a = e.$element,
      p = e.settings,
      d = t(p.position),
      c,
      u,
      l;
    (u = e.$wrapper = $('<div class="vidbg-container">').css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "background-position": d.x + " " + d.y
    })),
      "object" == typeof i &&
        (i.poster
          ? (r = i.poster)
          : i.mp4
          ? (r = i.mp4)
          : i.webm && (r = i.webm)),
      u.css("background-image", "url(" + r + ")"),
      "static" === a.css("position") && a.css("position", "relative"),
      a.css("z-index", "1"),
      a.is("body") && u.css({ position: "fixed" }),
      a.prepend(u),
      "object" == typeof i
        ? (i.mp4 && (n += '<source src="' + i.mp4 + '" type="video/mp4">'),
          i.webm && (n += '<source src="' + i.webm + '" type="video/webm">'),
          (c = e.$video = $("<video>" + n + "</video>")))
        : (c = e.$video = $(
            '<video><source src="' +
              i +
              '" type="video/mp4"><source src="' +
              i +
              '" type="video/webm"></video>'
          ));
    try {
      c.prop({
        autoplay: p.autoplay,
        loop: p.loop,
        volume: p.volume,
        muted: p.muted,
        defaultMuted: p.muted,
        playbackRate: p.playbackRate,
        defaultPlaybackRate: p.playbackRate
      });
    } catch (v) {
      throw new Error(s);
    }
    c
      .css({
        margin: "auto",
        position: "absolute",
        "z-index": -1,
        top: d.y,
        left: d.x,
        "-webkit-transform": "translate(-" + d.x + ", -" + d.y + ")",
        "-ms-transform": "translate(-" + d.x + ", -" + d.y + ")",
        "-moz-transform": "translate(-" + d.x + ", -" + d.y + ")",
        transform: "translate(-" + d.x + ", -" + d.y + ")",
        "max-width": "none",
        visibility: "hidden",
        opacity: 0
      })
      .one("canplaythrough.vidbg", function() {
        e.resize();
      })
      .one("playing.vidbg", function() {
        c.css({ visibility: "visible", opacity: 1 }),
          u.css("background-image", "none");
      }),
      a.on("resize.vidbg", function() {
        p.resizing && e.resize();
      }),
      u.append(c),
      (l = e.$overlay = $('<div class="vidbg-overlay">').css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "rgba(" +
          o(p.overlayColor).r +
          ", " +
          o(p.overlayColor).g +
          ", " +
          o(p.overlayColor).b +
          ", " +
          p.overlayAlpha +
          ")"
      })),
      p.overlay && u.append(l);
  }),
    (i.prototype.getVideoObject = function() {
      return this.$video[0];
    }),
    (i.prototype.resize = function() {
      if (this.$video) {
        var e = this.$wrapper,
          t = this.$video,
          o = t[0],
          i = o.videoHeight,
          r = o.videoWidth,
          n = e.height(),
          s = e.width();
        s / r > n / i
          ? t.css({ width: s + 2, height: "auto" })
          : t.css({ width: "auto", height: n + 2 });
      }
    }),
    (i.prototype.destroy = function() {
      delete $[r].lookup[this.index],
        this.$video && this.$video.off(r),
        this.$element.off(r).removeData(r),
        this.$wrapper.remove();
    }),
    ($[r] = { lookup: [] }),
    ($.fn[r] = function(e, t) {
      var o;
      return (
        this.each(function() {
          (o = $.data(this, r)),
            o && o.destroy(),
            (o = new i(this, e, t)),
            (o.index = $[r].lookup.push(o) - 1),
            $.data(this, r, o);
        }),
        this
      );
    }),
    $(document).ready(function() {
      var e = $(window);
      e.on("resize.vidbg", function() {
        for (var e = $[r].lookup.length, t = 0, o; e > t; t++)
          (o = $[r].lookup[t]), o && o.settings.resizing && o.resize();
      }),
        e.on("unload.vidbg", function() {
          return !1;
        }),
        $(document)
          .find("[data-vidbg-bg]")
          .each(function(e, t) {
            var o = $(t),
              i = o.data("vidbg-options"),
              n = o.data("vidbg-bg");
            o[r](n, i);
          });
    });
});
