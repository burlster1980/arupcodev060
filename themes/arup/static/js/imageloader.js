! function s(n, i, c) {
    function l(r, e) {
        if (!i[r]) {
            if (!n[r]) {
                var a = "function" == typeof require && require;
                if (!e && a) return a(r, !0);
                if (d) return d(r, !0);
                var t = new Error("Cannot find module '" + r + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            var o = i[r] = {
                exports: {}
            };
            n[r][0].call(o.exports, function(e) {
                return l(n[r][1][e] || e)
            }, o, o.exports, s, n, i, c)
        }
        return i[r].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < c.length; e++) l(c[e]);
    return l
}({
    1: [function(e, r, a) {
        "use strict";
        var d = {
                containsClass: document.documentElement.classList ? function(e, r) {
                    return !!e && e.classList.contains(r)
                } : function(e, r) {
                    if (!e || !e.className) return !1;
                    var a = new RegExp("(^|\\s)" + r + "(\\s|$)");
                    return e.className.match(a)
                },
                removeClass: document.documentElement.classList ? function(e, r) {
                    if (!e) return !1;
                    e.classList.remove(r)
                } : function(e, r) {
                    if (!e || !e.className) return !1;
                    var a = new RegExp("(^|\\s)" + r + "(\\s|$)", "g");
                    e.className = e.className.replace(a, "$2")
                },
                addClass: document.documentElement.classList ? function(e, r) {
                    if (!e) return !1;
                    if (0 < r.indexOf(" "))
                        for (var a = r.split(" "), t = 0, o = a.length; t < o; t++) e.classList.add(a[t]);
                    else e.classList.add(r)
                } : function(e, r) {
                    if (!e) return !1;
                    this.containsClass(e, r) || (e.className += (e.className ? " " : "") + r)
                }
            },
            u = [];

        function t() {
            for (var e = document.querySelectorAll(".progressiveMedia"), r = 0; r < e.length; r++) - 1 == u.indexOf(e[r]) && o(e[r]);
            var a = document.querySelector(".video-carousel");
            if (a) {
                a = a.querySelectorAll("video");
                for (r = 0; r < a.length; r++) - 1 == u.indexOf(a[r]) && s(a[r])
            }
        }

        function o(e) {
            var r, a, t = window.innerWidth,
                o = e.parentNode;
            if (d.containsClass(e, "mobile-only") && 1280 < t) return !1;
            if (d.containsClass(e, "desktop-only") && t < 1280) return !1;
            if (t < 1280 ? (r = "show_mobile", a = !0) : a = !(r = "show_desktop"), u.push(e), e.querySelector(".mainImg")) {
                var s = new Image;
                s.src = e.querySelector(".mainImg").src;
                var n = new Image;
                n.src = e.querySelector(".tempImg").src;
                var i, c = e.querySelector(".mobImg"),
                    l = !1;
                c && ((i = new Image).src = c.src, d.addClass(e, r), l = !0), s.complete ? (!a && l && d.addClass(e.querySelector(".tempImg"), "inactive"), d.addClass(e.querySelector(".mainImg"), "active")) : (d.removeClass(e.querySelector(".mainImg"), "active"), d.addClass(e.querySelector(".mainImg"), "loading"), s.onload = function() {
                    !a && l && d.addClass(e.querySelector(".tempImg"), "inactive"), d.addClass(e.querySelector(".mainImg"), "active")
                }), c && (i.complete ? (a && d.addClass(e.querySelector(".tempImg"), "inactive"), d.addClass(e.querySelector(".mobImg"), "active")) : (d.removeClass(e.querySelector(".mobImg"), "active"), d.addClass(e.querySelector(".mobImg"), "loading"), i.onload = function() {
                    a && d.addClass(e.querySelector(".tempImg"), "inactive"), d.addClass(e.querySelector(".mobImg"), "active")
                })), n.onload = function() {
                    d.addClass(o.querySelector(".video-carousel__overlay"), "active")
                }
            }
        }

        function s(r) {
            u.push(r);
            var e = r.parentNode,
                a = new Image;
            a.src = e.querySelector(".vidImg").src, a.onload = function() {
                d.addClass(r, "active"), d.addClass(r.parentNode.querySelector(".video-carousel__overlay"), "active")
            }, r.addEventListener("loadeddata", function(e) {
                d.addClass(r, "active"), d.addClass(r.parentNode.querySelector(".video-carousel__overlay"), "active")
            })
        }
        window.onresize = function() {
            if (window.innerWidth < 1280) var e = "show_mobile",
                r = "show_desktop";
            else e = "show_desktop", r = "show_mobile";
            for (var a = 0, t = u.length; a < t; a++) {
                var o = u[a];
                o.querySelector(".mobImg") && (d.removeClass(o, r), d.addClass(o, e))
            }
        }, document.addEventListener("DOMContentLoaded", t), window.addEventListener("resize", t)
    }, {}]
}, {}, [1]);