/* sohutv 2016-05-05 15:59:52 */
if ("undefined" == typeof _e && (_e = function() {},
window.console && (_e = function(e) {
    console.info(e)
})), window.sohuHDApple = {},
function() {
    function e() {}
    function t(e, t) {
        if (e && t) for (var a in t) e[a] = t[a]
    }
    function a(e) {
        var t, a = v.exec(e);
        return a && (t = a[1]),
        t
    }
    function o(e) {
        var t = V[e];
        return t || (t = {
            path: e
        }),
        t
    }
    function r(e) {
        var e = e || "";
        if (!f.test(e)) for (e = location.protocol + "//" + j.path + "/" + e, e = e.replace(h, "/").replace(u, "$1/"); d.test(e);) e = e.replace(d, "/");
        return e
    }
    function s(e, t) {
        var a = p.createElement("link");
        a.type = "text/css",
        a.rel = "stylesheet",
        a.href = e,
        a.setAttribute("href", e),
        t && (a.charset = t),
        m.insertBefore(a, m.firstChild)
    }
    function n(t, a, o) {
        function r() {
            s.onload = s.onreadystatechange = null,
            m.removeChild(s),
            s = null,
            o()
        }
        o = o || e;
        var s = p.createElement("script");
        s.type = "text/javascript",
        s.async = !0,
        a && (s.charset = a),
        s.src = t,
        "onload" in s ? s.onload = r: s.onreadystatechange = function() { / loaded | complete / .test(s.readyState) && r()
        },
        m.insertBefore(s, m.firstChild)
    }
    function i(t, c) {
        function p() {
            m -= 1,
            0 >= m && c()
        }
        c = c || e;
        var h, u, d, f, v, m = 0,
        g = 0,
        b = t.length;
        if (t && t.length) {
            for (; b > g; g++) h = o(t[g]),
            u = r(h.path),
            d = h.requires,
            f = h.charset,
            "css" != h.type && ".css" != a(u) ? O[u] || (m += 1, A.on(u, p), k[u] || (v = function(e, t) {
                return function() {
                    k[e] || O[e] || (k[e] = l, n(e, t,
                    function() {
                        delete k[e],
                        O[e] = l,
                        A.emit(e)
                    }))
                }
            } (u, f), d && d.length ? i(d, v) : v())) : S[u] || (S[u] = l, s(u, h.charset));
            0 == m && p()
        } else c()
    }
    function c() {
        var t = [].slice.call(arguments),
        a = e;
        y(t[t.length - 1]) && (a = t.pop()),
        t.length ? i(t, a) : a()
    }
    var l = {},
    p = window.document,
    h = /\/\.\//g,
    u = /([^:])\/+\//g,
    d = /\/[^\/]+\/\.\.\//,
    f = /^[^:\/]+:\/\//,
    v = /(\.[^\.]+)(?=[\?#]|$)/,
    m = p.head || p.getElementsByTagName("head")[0] || p.documentElement,
    g = function(e) {
        return function(t) {
            return {}.toString.call(t) == "[object " + e + "]"
        }
    },
    b = g("Object"),
    y = g("Function"),
    w = g("String"),
    A = {
        events: {},
        on: function(e, t, a) {
            if (e && t) {
                this.events[e] = this.events[e] || [];
                for (var o, r, s = this.events[e], n = s.length - 1; n >= 0; n--) if (o = s[n], o.h == t) {
                    r = !0;
                    break
                }
                r || s.push({
                    h: t,
                    one: a
                })
            }
        },
        emit: function(e, t) {
            if (e) for (var a, o, r = this.events[e] || [], s = 0; s < r.length;) a = r[s],
            o = a.h,
            y(o) ? o.call(null, t, e) : b(o) && y(o.handleEvent) && o.handleEvent.call(o, e, t),
            a.one ? r.splice(s, 1) : s++
        },
        one: function(e, t) {
            this.on(e, t, !0)
        }
    },
    j = {
        path: "js.tv.itc.cn/"
    },
    O = {},
    k = {},
    S = {},
    V = {};
    c.add = function(e, t) {
        var a;
        w(e) && (w(t) ? a = {
            path: t
        }: b(t) && t.path && (a = t), a && (V[e] = a))
    },
    c.config = function(e) {
        t(j, e)
    },
    sohuHDApple.kao = c
} (), "function" == typeof window.ActiveXObject) try {
    var m = new ActiveXObject("SoHuVA.SoHuDector");
    m && m.isSoHuVaReady() && (sohuHDApple.hasSoHuVA = !0, m.StartSoHuVA())
} catch(e) {} !
function(e, t) {
    sohuHDApple.playerlist = [],
    sohuHDApple.player = function() {
        var e = sohuHDApple.playerlist,
        t = [],
        a = null,
        o = {};
        for (i = 0; i < e.length; ++i) {
            if (a = document.getElementById(e[i]), o.player = a, a) {
                a.tagName;
                switch (a.tagName) {
                case "OBJECT":
                case "EMBED":
                    o.type = "flash",
                    o.playVideo = function() {
                        a.playVideo()
                    },
                    o.seekTo = function(e) {
                        a.seekTo(e)
                    },
                    o.mute = function() {
                        a.mute()
                    },
                    o.playedTime = function() {
                        return a.playedTime()
                    },
                    o.externalCinema = function(e) {
                        a.externalCinema(e)
                    }
                }
            }
            t.push(o)
        }
        return t
    }
} (window);
var SWFObject = function(e, t, a, o, r, s, n, i, c, l, p) {
    var h = this;
    document.createElement && document.getElementById && (h.movie = h.src = e, h.id = t || "", h.width = a || "auto", h.height = o || "auto", h.ver = r ? r.replace(".", ",") : "7,0,19,0", "9,0,145" == h.ver && (h.ver = "9,0,115"), h.bgcolor = s || "", h.quality = i || "high", h.useExpressInstall = "boolean" == typeof n ? n: !1, h.xir = c || window.location, h.redirectUrl = l || window.location, h.detectKey = "boolean" == typeof p ? p: !0, h.pluginspage = "http://www.macromedia.com/go/getflashplayer", h.type = "application/x-shockwave-flash", h.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", h.codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + h.ver, h.objAttrs = {},
    h.embedAttrs = {},
    h.params = {},
    h.flashVarsObj = {},
    h._setAttribute("id", h.id), h.objAttrs.classid = h.classid, h._setAttribute("codebase", h.codebase), h._setAttribute("pluginspage", h.pluginspage), h._setAttribute("type", h.type), h._setAttribute("width", h.width), h._setAttribute("height", h.height), h._setAttribute("movie", h.movie), h._setAttribute("quality", h.quality), h._setAttribute("bgcolor", h.bgcolor))
};
SWFObject.prototype = {
    getFlashHtml: function(e) {
        var t = this,
        a = [],
        o = [];
        for (var e in t.flashVarsObj) o.push("&", e, "=", t.flashVarsObj[e]);
        if (document.all) {
            a.push("<object ");
            for (var e in t.objAttrs) a.push(e, '="', t.objAttrs[e], '"', " ");
            a.push(">\n");
            for (var e in t.params) a.push('<param name="', e, '" value="', t.params[e], '" />\n');
            o.length && a.push('<param name="flashvars" value="', o.join(""), '" />\n'),
            a.push("</object>")
        } else {
            a.push("<embed "),
            t.embedAttrs.FlashVars = o.join("");
            for (var e in t.embedAttrs) a.push(e, '="', t.embedAttrs[e], '"', " ");
            a.push("></embed>")
        }
        return a.join("")
    },
    _setAttribute: function(e, t) {
        var a = this;
        if ("undefined" != typeof e && "" != e && "undefined" != typeof t && "" != t) {
            var e = e.toLowerCase();
            switch (e) {
            case "classid":
                break;
            case "pluginspage":
                a.embedAttrs[e] = t;
                break;
            case "src":
            case "movie":
                a.embedAttrs.src = t,
                a.params.movie = t;
                break;
            case "codebase":
                a.objAttrs[e] = t;
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "id":
            case "tabindex":
            case "type":
                a.objAttrs[e] = a.embedAttrs[e] = t;
                break;
            default:
                a.params[e] = a.embedAttrs[e] = t
            }
        }
    },
    _getAttribute: function(e) {
        var t = this;
        return e = e.toLowerCase(),
        "undefined" != typeof t.objAttrs[e] ? t.objAttrs[e] : "undefined" != typeof getA.params[e] ? t.params[i] : "undefined" != typeof getA.embedAttrs[e] ? t.embedAttrs[e] : null
    },
    setAttribute: function(e, t) {
        this._setAttribute(e, t)
    },
    getAttribute: function(e) {
        return this._getAttribute(n)
    },
    addVariable: function(e, t) {
        var a = this;
        a.flashVarsObj[e] = t
    },
    getVariable: function(e) {
        var t = this;
        return t.flashVarsObj[e]
    },
    addParam: function(e, t) {
        this._setAttribute(e, t)
    },
    getParam: function(e) {
        return this._getAttribute(e)
    },
    write: function(e) {
        var t = this;
        "string" == typeof e ? document.getElementById(e).innerHTML = t.getFlashHtml(e) : "object" == typeof e && (e.innerHTML = t.getFlashHtml(e))
    },
    writeCode: function(e) {
        var t = this;
        document.write(t.getFlashHtml())
    },
    playerVer: function() {
        if (document.all) {
            var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            e && (flashVersion = parseInt(e.GetVariable("$version").split(" ")[1].split(",")[0]))
        } else if (navigator.plugins && navigator.plugins.length > 0) {
            var e = navigator.plugins["Shockwave Flash"];
            if (e) for (var t = e.description.split(" "), a = 0; a < t.length; ++a) isNaN(parseInt(t[a])) || (flashVersion = parseInt(t[a]))
        }
        return {
            v: flashVersion
        }
    }
},
function(e, t, a) {
    var o = -1,
    r = !1;
    document.all && (r = !0);
    var s = (new Date).getTime();
    sohuHDApple.random = function() {
        return s += 1
    },
    sohuHDApple.getScript = function(e, t, a, o) {
        var r = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
        s = document.createElement("script");
        s.src = e,
        s.charset = a || "GBK";
        var n = !1;
        o && (s.onerror = o),
        s.onload = s.onreadystatechange = function() {
            n || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n = !0, t && t(), s.onload = s.onreadystatechange = null, r && s.parentNode && r.removeChild(s))
        },
        r.insertBefore(s, r.firstChild)
    },
    sohuHDApple.cookie = function(e, t, a) {
        if ("undefined" == typeof t) {
            var o = new RegExp("(?:^|; )" + e + "=([^;]*)").exec(document.cookie);
            return o ? o[1] || "": ""
        }
        a = a || {},
        null === t && (t = "", a.expires = -1);
        var r = "";
        if (a.expires && ("number" == typeof a.expires || a.expires.toUTCString)) {
            var s;
            "number" == typeof a.expires ? (s = new Date, s.setTime(s.getTime() + 24 * a.expires * 60 * 60 * 1e3)) : s = a.expires,
            r = "; expires=" + s.toUTCString()
        }
        var n = a.path ? "; path=" + a.path: "",
        i = a.domain ? "; domain=" + a.domain: "",
        c = a.secure ? "; secure": "";
        document.cookie = [e, "=", t, r, n, i, c].join("")
    },
    sohuHDApple.getUrlParam = function(e, a) {
        a = escape(unescape(a));
        var o = new Array,
        r = null;
        if ("#document" == e.nodeName) t.location.search.search(a) > -1 && (r = t.location.search.substr(1, t.location.search.length).split("&"));
        else if ("undefined" != typeof e.src) {
            var s = e.src;
            if (s.indexOf("?") > -1) {
                var n = s.substr(s.indexOf("?") + 1);
                r = n.split("&")
            }
        } else {
            if ("undefined" == typeof e.href) return null;
            var s = e.href;
            if (s.indexOf("?") > -1) {
                var n = s.substr(s.indexOf("?") + 1);
                r = n.split("&")
            }
        }
        if (null == r) return null;
        for (var i = 0; i < r.length; i++) escape(unescape(r[i].split("=")[0])) == a && o.push(r[i].split("=")[1]);
        return 0 == o.length ? null: 1 == o.length ? o[0] : o
    },
    function(e, t) {
        var a = t.navigator.userAgent;
        if (e.prototype.isMacSafari = /Macintosh/gi.test(a) && /Safari/gi.test(a) && !/Chrome/gi.test(a), e.prototype.isMacChrome = /Macintosh/gi.test(a) && /Safari/gi.test(a) && /Chrome/gi.test(a), e.prototype.isIpad = /ipad/gi.test(a) || /lepad_hls/gi.test(a) || /SonyDTV/gi.test(a), e.prototype.isIphone = /\(i[^;]+;( U;)? CPU iphone.+Mac OS X/gi.test(a), e.prototype.isIpod = /\(i[^;]+;( U;)? CPU ipod.+Mac OS X/gi.test(a), e.prototype.isIOS = /iphone|ipod|ipad/gi.test(a), e.prototype.isIOSLow = !1, e.prototype.enforceFlash = !1, e.prototype.enforceMP4 = !1, e.prototype.switchHtml = "", !e.prototype.isIOS, /iphone|ipod/gi.test(a)) {
            var o = a.indexOf(" OS ") + 4,
            r = parseFloat(a.substring(o, a.indexOf(" ", o)).replace(/_/g, "."));
            4.2 > r && (e.prototype.isIOSLow = !0)
        }
        if (e.prototype.isSogou = /SE \d+\.X/.test(a), e.prototype.isIEMobile = /IEMobile/.test(a), e.prototype.isAndroid = /android/gi.test(a), e.prototype.isAndroidLow = !1, e.prototype.isAndroidHigh = !1, e.prototype.isAndroid) {
            var s = a.match(/\bAndroid\b(.*\d)?;/) || [0, "0.0"];
            e.prototype.androidVer = s,
            s = parseInt(s[1].replace(/\./g, "")),
            100 > s && (s = 10 * s),
            230 > s ? e.prototype.isAndroidLow = !0 : s > 411 && (e.prototype.isAndroidHigh = !0)
        }
    } (e, t),
    e.prototype.eventObj = {},
    e.prototype.bindEvents = function(e, t) {
        e && t && (this.eventObj[e] = t)
    },
    e.prototype.createUID = function() {
        for (var e = "",
        a = "0123456789abcdef",
        o = 0; 8 > o; o++) e += a.charAt(Math.round(15 * Math.random()));
        for (var o = 0; 3 > o; o++) {
            e += "-";
            for (var r = 0; 4 > r; r++) e += a.charAt(Math.round(15 * Math.random()))
        }
        e += "-";
        var s = (new Date).getTime();
        e += ("000000000" + s.toString(16)).substr( - 8);
        for (var o = 0; 4 > o; o++) e += a.charAt(Math.round(15 * Math.random()));
        return t.__fuid = e,
        e
    },
    e.prototype.getFlashHtml = function(e) {
        var a = this,
        r = [],
        s = [];
        document.getElementById(a.id) && (a.id = "player" + sohuHDApple.random());
        var n = {
            "#super": "21",
            "#high": "1",
            "#common": "2"
        };
        n = n[location.hash] || "",
        n && (a.flashVarsObj.co = n);
        var i = a.flashVarsObj.ltype;
        if ("" != i && "undefined" != typeof i && !sohuHD.notCloseDoor) {
            var c = "liveCall" + sohuHDApple.random();
            t[c] = function(e) {
                if (e && 1 == e.bwl) {
                    var t = "";
                    t = /sohu.com/i.test(location.href) ? '<a href="http://tv.sohu.com/voice-demand/" target="_blank" style="background: url(http://css.tv.itc.cn/special/voice/skin0530/race_imgs/demandtip.png) no-repeat center center transparent;display:block;width:640px;height:480px;"></a>': '<div style="background: url(http://tv.sohu.com/upload/static/plugin/skin/images/live_overflow.jpg) no-repeat center center transparent;width:640px;height:480px;"></div>',
                    document.getElementById(a.id).parentNode.innerHTML = t
                }
            },
            sohuHDApple.getScript("http://live.tv.sohu.com/live/player_json.jhtml?lid=" + a.flashVarsObj.vid + "&type=" + a.flashVarsObj.ltype + "&callback=" + c)
        }
        a.flashVarsObj.api_key || (a.flashVarsObj.api_key = sohuHDApple.getUrlParam(document, "api_key")),
        a.flashVarsObj.uuid || (a.flashVarsObj.uuid = a.createUID());
        var l = sohuHDApple.cookie("ch_key");
        l && (a.flashVarsObj.ch_key = l),
        sohuHDApple.cookie("machtml5new") && (a.isIpad = !0),
        a.isSBDevice = !a.isIOS && a.flashVarsObj.enforceMP4 || a.isAndroidLow,
        a.isSBDevice && (a.isAndroidHigh = !1);
        var p = !a.checkFlash(m);
        if (a.flashVarsObj.enforceHTML5 && (a.enforceHTML5 = a.flashVarsObj.enforceHTML5), a.enforceHTML5 && (a.isAndroid = !0), !a.enforceFlash && (a.isIpad || a.isIphone || a.isIpod || a.isIEMobile || a.isAndroid || a.isSBDevice)) {
            a.isIOSLow && alert("\u60a8\u7684iOS\u7248\u672c\u4f4e\u4e8e4.2,\u8bf7\u5347\u7ea7\u7cfb\u7edf\u7248\u672c\u4ee5\u83b7\u5f97\u66f4\u6d41\u7545\u89c2\u770b\u4f53\u9a8c."),
            a.flashVarsObj.lid ? sohuHDApple.kao("http://js.tv.itc.cn/video/video_30f11d.js",
            function() {
                a.getHTML5()
            }) : sohuHDApple.kao(location.protocol + "//js.tv.itc.cn/m/player/inc-all.js",
            function() {
                setTimeout(function() {
                    var e = "#" + a.id,
                    o = a.flashVarsObj || {},
                    r = {
                        data: {
                            vid: o.vid || o.id || o.vid56,
                            site: o.vid ? 1 : 2
                        },
                        autoplay: !!o.autoplay,
                        showCount: 0 == o.showCount ? !1 : !0,
                        m3u8Params: o.m3u8Params || "",
                        dlBanner: !0,
                        hotVideo: !0
                    },
                    s = playerFactory.createPlayer(e, r);
                    s.on("ended",
                    function() {
                        "function" == typeof t.swfGotoNewPage && t.swfGotoNewPage()
                    })
                },
                0)
            });
            var h = a.width,
            u = a.height,
            d = /^(\d|\.)+$/;
            return d.test(h) && (h += "px"),
            d.test(u) && (u += "px"),
            a.switchHtml + '<div id="' + a.id + '" style="background:#000;height:' + u + ";width:" + h + ';"><div style="line-height:' + u + '; text-align:center;color: #fff;">\u89c6\u9891\u52a0\u8f7d\u4e2d....</div><noscript>\u60a8\u7684\u6d4f\u89c8\u5668\u7981\u7528\u4e86JavaScript,\u8bf7\u624b\u52a8\u5f00\u542f.</noscript></div>'
        }
        a.isAndroid && (a.flashVarsObj.skinNum = "-1", a.flashVarsObj.os = "android", a.flashVarsObj.oad = "", a.flashVarsObj.ead = "", a.flashVarsObj.co = "2");
        try {
            if (p && -1 === o) return "<div id=" + this.id + ' style="position:relative;background-color:#000;"><p style="position:absolute;top:50%;width:100%;margin-top:-20px;color:#fff;font-size:18px;line-height:20px;text-align:center;">\u7531\u4e8e\u60a8\u672a\u5b89\u88c5flash\u64ad\u653e\u5668\u89c6\u9891\u65e0\u6cd5\u64ad\u653e\uff0c\u70b9\u51fb<a style="color:#e73c31;" target="_blank" href="http://www.adobe.com/go/getflash">\u8fd9\u91cc</a>\u5b89\u88c5</p></div>'
        } catch(f) {}
        a.isAndroid || (a.flashVarsObj.topBarFull = 1);
        try {
            1 == sohuHDApple.cookie("swf3d") && (this.addParam("wmode", "direct"), this.addVariable("stageVideo", 1))
        } catch(v) {}
        for (var m in a.flashVarsObj) s.push("&", m, "=", a.flashVarsObj[m]);
        if (r.push(a.switchHtml), sohuHDApple.playerlist.push(a.id), document.all) {
            r.push("<object ");
            for (var m in a.objAttrs) r.push(m, '="', a.objAttrs[m], '"', " ");
            r.push(">");
            for (var m in a.params) r.push('<param name="', m, '" value="', a.params[m], '" />');
            s.length && r.push('<param name="flashvars" value="', s.join(""), '" />'),
            r.push("</object>")
        } else {
            r.push("<embed "),
            a.embedAttrs.FlashVars = s.join("");
            for (var m in a.embedAttrs) r.push(m, '="', a.embedAttrs[m], '"', " ");
            r.push("></embed>")
        }
        return r.join("")
    },
    e.prototype.DetectFlashVer = function(e, t, a) {
        if ( - 1 == o) return ! 1;
        if (0 != o) {
            r ? (tempArray = o.split(" "), tempString = tempArray[1], versionArray = tempString.split(",")) : versionArray = o.split(".");
            var s = versionArray[0],
            n = versionArray[1],
            i = versionArray[2];
            if (s > parseFloat(e)) return ! 0;
            if (s == parseFloat(e)) {
                if (n > parseFloat(t)) return ! 0;
                if (n == parseFloat(t) && i >= parseFloat(a)) return ! 0
            }
            return ! 1
        }
    },
    e.prototype.checkFlash = function(e) {
        var t = sohuHDApple.cookie("tryPlay");
        if (t) return ! 0;
        var a = this,
        s = null;
        "string" == typeof e ? s = document.getElementById(e) : "object" == typeof e && (s = e),
        document.all && (r = !0);
        var n = function() {
            var e = "",
            t = "";
            try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                e = t.GetVariable("$version")
            } catch(a) {}
            if (!e) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                e = "WIN 6,0,21,0",
                t.AllowScriptAccess = "always",
                e = t.GetVariable("$version")
            } catch(a) {}
            if (!e) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
                e = t.GetVariable("$version")
            } catch(a) {}
            if (!e) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
                e = "WIN 3,0,18,0"
            } catch(a) {}
            if (!e) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                e = "WIN 2,0,0,11"
            } catch(a) {
                e = -1
            }
            return e
        },
        i = function() {
            var e = -1;
            if (null != navigator.plugins && navigator.plugins.length > 0) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                    var t = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0": "",
                    a = navigator.plugins["Shockwave Flash" + t].description,
                    o = a.split(" "),
                    s = o[2].split("."),
                    i = s[0],
                    c = s[1],
                    l = o[3];
                    "" == l && (l = o[4]),
                    "d" == l[0] ? l = l.substring(1) : "r" == l[0] ? (l = l.substring(1), l.indexOf("d") > 0 && (l = l.substring(0, l.indexOf("d")))) : "b" == l[0] && (l = l.substring(1));
                    var e = i + "." + c + "." + l
                }
            } else - 1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? e = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? e = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? e = 2 : r && (e = n());
            return e
        },
        c = a.ver.split(",");
        o = i();
        var l = a.DetectFlashVer(c[0], c[1], c[2]);
        return l ? l: l
    }
} (SWFObject, window),
function(e) {
    var t = sohuHDApple.cookie;
    swfOpen3D = function() {
        t("swf3d", 1, {
            domain: "tv.sohu.com",
            path: "/"
        }),
        location.reload()
    },
    swfClose3D = function() {
        t("swf3d", 0, {
            domain: "tv.sohu.com",
            path: "/",
            expires: -1
        }),
        location.reload()
    }
} (window);