 /*<![CDATA[*/
    window.document.getElementById("h237").parentNode.removeChild(window.document.getElementById("h237"));
    (function(b, a) {
        function e(f) {
            f && h237.nextFunction()
        }
        var c = b.document,
            d = ["i", "s", "u"];
        e.prototype = {
            rand: function(f) {
                return Math.floor(Math.random() * f)
            },
            getElementBy: function(g, f) {
                return g ? c.getElementById(g) : c.getElementsByTagName(f)
            },
            getStyle: function(g) {
                var f = c.defaultView;
                return f && f.getComputedStyle ? f.getComputedStyle(g, null) : g.currentStyle
            },
            deferExecution: function(f) {
                setTimeout(f, 250)
            },
            insert: function(i, h) {
                var n = c.createElement("span"),
                    o = c.body,
                    p = o.childNodes.length,
                    l = o.style,
                    m = 0,
                    j = 0;
                if ("h237" == h) {
                    n.setAttribute("id", h);
                    l.margin = l.padding = 0;
                    l.height = "100%";
                    for (p = this.rand(p); m < p; m++) {
                        1 == o.childNodes[m].nodeType && (j = Math.max(j, parseFloat(this.getStyle(o.childNodes[m]).zIndex) || 0))
                    }
                    j && (n.style.zIndex = j + 1);
                    p++
                }
                n.innerHTML = i;
                o.insertBefore(n, o.childNodes[p - 1])
            },
            displayMessage: function(g) {
                var f = this;
                g = "abisuq".charAt(f.rand(5));
                f.insert('<p>We are Very Sorry for the Interruption!<br/><br/><img border="0" src="https://lh3.googleusercontent.com/-L0N72E8E9NQ/Vzrq-aAsrLI/AAAAAAAAENQ/4t2LPjMDYGQIejFrOFVIqJYUpzCDeI5uACCo/I/Disable-Adblock.png" /><br/><br/>But please understand that without advertising this website would not be here.<br/><br/>We advise you to please disable your ad blocker while visiting.<a href="JavaScript:window.location.reload()">RELOAD</a></p>', "h237");
                c.addEventListener && f.deferExecution(function() {
                    f.getElementBy("h237").addEventListener("DOMNodeRemoved", function() {
                        f.displayMessage()
                    }, !1)
                })
            },
            i: function() {
                for (var h = "DivTopAd,ad-zone-1,ad_190x90,ads-sticky,iqadtile5,leftframeAD,tobsideAd,ad,ads,adsense".split(","), f = h.length, j = "", k = this, l = 0, i = "abisuq".charAt(k.rand(5)); l < f; l++) {
                    k.getElementBy(h[l]) || (j += "<" + i + ' id="' + h[l] + '"></' + i + ">")
                }
                k.insert(j);
                k.deferExecution(function() {
                    for (l = 0; l < f; l++) {
                        if (null == k.getElementBy(h[l]).offsetParent || "none" == k.getStyle(k.getElementBy(h[l])).display) {
                            return k.displayMessage("#" + h[l] + "(" + l + ")")
                        }
                    }
                    k.nextFunction()
                })
            },
            s: function() {
                var i = {
                        "pagead2.googlesyndic": "google_ad_client",
                        "js.adscale.de/getads": "adscale_slot_id",
                        "get.mirando.de/miran": "adPlaceId"
                    },
                    h = this,
                    n = h.getElementBy(0, "script"),
                    o = n.length - 1,
                    p, l, m, j;
                c.write = null;
                for (c.writeln = null; 0 <= o; --o) {
                    if (p = n[o].src.substr(7, 20), i[p] !== a) {
                        m = c.createElement("script");
                        m.type = "text/javascript";
                        m.src = n[o].src;
                        l = i[p];
                        b[l] = a;
                        m.onload = m.onreadystatechange = function() {
                            j = this;
                            b[l] !== a || j.readyState && "loaded" !== j.readyState && "complete" !== j.readyState || (b[l] = m.onload = m.onreadystatechange = null, n[0].parentNode.removeChild(m))
                        };
                        n[0].parentNode.insertBefore(m, n[0]);
                        h.deferExecution(function() {
                            if (b[l] === a) {
                                return h.displayMessage(m.src)
                            }
                            h.nextFunction()
                        });
                        return
                    }
                }
                h.nextFunction()
            },
            u: function() {
                var g = "ad&adv_keywords=,-page-peel/,/adchain.,/adfootright.,/adsxml/ad,/adyard300.,/impopup/ad,/loadadsparam.,/meme_ad.,_adshare.".split(","),
                    f = this,
                    h = f.getElementBy(0, "img"),
                    i, j;
                h[0] !== a && h[0].src !== a && (i = new Image, i.onload = function() {
                    j = this;
                    j.onload = null;
                    j.onerror = function() {
                        d = null;
                        f.displayMessage(j.src)
                    };
                    j.src = h[0].src + "#" + g.join("")
                }, i.src = h[0].src);
                f.deferExecution(function() {
                    f.nextFunction()
                })
            },
            nextFunction: function() {
                var f = d[0];
                f !== a && (d.shift(), this[f]())
            }
        };
        b.h237 = h237 = new e;
        c.addEventListener ? b.addEventListener("load", e, !1) : b.attachEvent("onload", e)
    })(window); /*]]>*/