/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var Xv = Object.create;
  var Nr = Object.defineProperty;
  var Gv = Object.getOwnPropertyDescriptor;
  var Uv = Object.getOwnPropertyNames;
  var Vv = Object.getPrototypeOf,
    Wv = Object.prototype.hasOwnProperty;
  var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Pe = (e, t) => {
      for (var r in t) Nr(e, r, { get: t[r], enumerable: !0 });
    },
    ua = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of Uv(t))
          !Wv.call(e, o) &&
            o !== r &&
            Nr(e, o, {
              get: () => t[o],
              enumerable: !(n = Gv(t, o)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? Xv(Vv(e)) : {}),
      ua(
        t || !e || !e.__esModule
          ? Nr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Qe = (e) => ua(Nr({}, "__esModule", { value: !0 }), e);
  var zn = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, y) {
        var w = new E.Bare();
        return w.init(l, y);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function n(l) {
        var y = parseInt(l.slice(1), 16),
          w = (y >> 16) & 255,
          R = (y >> 8) & 255,
          T = 255 & y;
        return [w, R, T];
      }
      function o(l, y, w) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | w).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, y) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function u(l, y, w) {
        f("Units do not match [" + l + "]: " + y + ", " + w);
      }
      function s(l, y, w) {
        if ((y !== void 0 && (w = y), l === void 0)) return w;
        var R = w;
        return (
          Ce.test(l) || !Xe.test(l)
            ? (R = parseInt(l, 10))
            : Xe.test(l) && (R = 1e3 * parseFloat(l)),
          0 > R && (R = 0),
          R === R ? R : w
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function _(l) {
        for (var y = -1, w = l ? l.length : 0, R = []; ++y < w; ) {
          var T = l[y];
          T && R.push(T);
        }
        return R;
      }
      var v = (function (l, y, w) {
          function R(ae) {
            return typeof ae == "object";
          }
          function T(ae) {
            return typeof ae == "function";
          }
          function P() {}
          function Z(ae, he) {
            function B() {
              var Oe = new se();
              return T(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
            }
            function se() {}
            he === w && ((he = ae), (ae = Object)), (B.Bare = se);
            var ue,
              _e = (P[l] = ae[l]),
              Ye = (se[l] = B[l] = new P());
            return (
              (Ye.constructor = B),
              (B.mixin = function (Oe) {
                return (se[l] = B[l] = Z(B, Oe)[l]), B;
              }),
              (B.open = function (Oe) {
                if (
                  ((ue = {}),
                  T(Oe) ? (ue = Oe.call(B, Ye, _e, B, ae)) : R(Oe) && (ue = Oe),
                  R(ue))
                )
                  for (var rr in ue) y.call(ue, rr) && (Ye[rr] = ue[rr]);
                return T(Ye.init) || (Ye.init = ae), B;
              }),
              B.open(he)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, y, w, R) {
              var T = (l /= R) * l,
                P = T * l;
              return (
                y +
                w * (-2.75 * P * T + 11 * T * T + -15.5 * P + 8 * T + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, w, R) {
              var T = (l /= R) * l,
                P = T * l;
              return y + w * (-1 * P * T + 3 * T * T + -3 * P + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, w, R) {
              var T = (l /= R) * l,
                P = T * l;
              return (
                y +
                w * (0.3 * P * T + -1.6 * T * T + 2.2 * P + -1.8 * T + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, w, R) {
              var T = (l /= R) * l,
                P = T * l;
              return y + w * (2 * P * T + -5 * T * T + 2 * P + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (l, y, w, R) {
              return (w * l) / R + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, w, R) {
              return w * (l /= R) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, w, R) {
              return -w * (l /= R) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l + y
                : (-w / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, w, R) {
              return w * (l /= R) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, w, R) {
              return w * ((l = l / R - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l + y
                : (w / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, w, R) {
              return w * (l /= R) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, w, R) {
              return -w * ((l = l / R - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l * l + y
                : (-w / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, w, R) {
              return w * (l /= R) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, w, R) {
              return w * ((l = l / R - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, w, R) {
              return (l /= R / 2) < 1
                ? (w / 2) * l * l * l * l * l + y
                : (w / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, w, R) {
              return -w * Math.cos((l / R) * (Math.PI / 2)) + w + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, w, R) {
              return w * Math.sin((l / R) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, w, R) {
              return (-w / 2) * (Math.cos((Math.PI * l) / R) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, w, R) {
              return l === 0 ? y : w * Math.pow(2, 10 * (l / R - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, w, R) {
              return l === R
                ? y + w
                : w * (-Math.pow(2, (-10 * l) / R) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, w, R) {
              return l === 0
                ? y
                : l === R
                ? y + w
                : (l /= R / 2) < 1
                ? (w / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (w / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, w, R) {
              return -w * (Math.sqrt(1 - (l /= R) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, w, R) {
              return w * Math.sqrt(1 - (l = l / R - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, w, R) {
              return (l /= R / 2) < 1
                ? (-w / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (w / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, w, R, T) {
              return (
                T === void 0 && (T = 1.70158),
                w * (l /= R) * l * ((T + 1) * l - T) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, w, R, T) {
              return (
                T === void 0 && (T = 1.70158),
                w * ((l = l / R - 1) * l * ((T + 1) * l + T) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, w, R, T) {
              return (
                T === void 0 && (T = 1.70158),
                (l /= R / 2) < 1
                  ? (w / 2) * l * l * (((T *= 1.525) + 1) * l - T) + y
                  : (w / 2) *
                      ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) +
                    y
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        x = document,
        A = window,
        C = "bkwld-tram",
        b = /[\-\.0-9]/g,
        N = /[A-Z]/,
        L = "number",
        k = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        D = /(em|cm|mm|in|pt|pc|px|%)$/,
        Y = /(deg|rad|turn)$/,
        K = "unitless",
        Q = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        ee = " ",
        q = x.createElement("a"),
        O = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        z = function (l) {
          if (l in q.style) return { dom: l, css: l };
          var y,
            w,
            R = "",
            T = l.split("-");
          for (y = 0; y < T.length; y++)
            R += T[y].charAt(0).toUpperCase() + T[y].slice(1);
          for (y = 0; y < O.length; y++)
            if (((w = O[y] + R), w in q.style))
              return { dom: w, css: M[y] + l };
        },
        W = (t.support = {
          bind: Function.prototype.bind,
          transform: z("transform"),
          transition: z("transition"),
          backface: z("backface-visibility"),
          timing: z("transition-timing-function"),
        });
      if (W.transition) {
        var te = W.timing.dom;
        if (((q.style[te] = h["ease-in-back"][0]), !q.style[te]))
          for (var re in I) h[re][0] = I[re];
      }
      var X = (t.frame = (function () {
          var l =
            A.requestAnimationFrame ||
            A.webkitRequestAnimationFrame ||
            A.mozRequestAnimationFrame ||
            A.oRequestAnimationFrame ||
            A.msRequestAnimationFrame;
          return l && W.bind
            ? l.bind(A)
            : function (y) {
                A.setTimeout(y, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = A.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && W.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = v(function (l) {
          function y(ne, ce) {
            var me = _(("" + ne).split(ee)),
              pe = me[0];
            ce = ce || {};
            var Se = H[pe];
            if (!Se) return f("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var Ue = Se[0],
                Le = this.props[pe];
              return (
                Le || (Le = this.props[pe] = new Ue.Bare()),
                Le.init(this.$el, me, Se, ce),
                Le
              );
            }
          }
          function w(ne, ce, me) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    B.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    y.call(this, ne, me && me[1]);
                }
                return P.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Se = 0;
                Ye.call(
                  this,
                  ne,
                  function (Ie, kv) {
                    Ie.span > Se && (Se = Ie.span), Ie.stop(), Ie.animate(kv);
                  },
                  function (Ie) {
                    "wait" in Ie && (Se = s(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Se > 0 &&
                    ((this.timer = new ie({ duration: Se, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = P));
                var Ue = this,
                  Le = !1,
                  Pr = {};
                X(function () {
                  Ye.call(Ue, ne, function (Ie) {
                    Ie.active && ((Le = !0), (Pr[Ie.name] = Ie.nextStyle));
                  }),
                    Le && Ue.$el.css(Pr);
                });
              }
            }
          }
          function R(ne) {
            (ne = s(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  (this.active = !0));
          }
          function T(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = P))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function P() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              w.call(this, ne.options, !0, ne.args);
            }
          }
          function Z(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              Ye.call(this, ce, Oe),
              _e.call(this);
          }
          function ae(ne) {
            Z.call(this, ne), Ye.call(this, ne, rr, Fv);
          }
          function he(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function B() {
            Z.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            Z.call(this), e.removeData(this.el, C), (this.$el = this.el = null);
          }
          function _e() {
            var ne,
              ce,
              me = [];
            this.upstream && me.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && me.push(ce.string);
            (me = me.join(",")),
              this.style !== me &&
                ((this.style = me), (this.el.style[W.transition.dom] = me));
          }
          function Ye(ne, ce, me) {
            var pe,
              Se,
              Ue,
              Le,
              Pr = ce !== Oe,
              Ie = {};
            for (pe in ne)
              (Ue = ne[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = Ue))
                  : (N.test(pe) && (pe = r(pe)),
                    pe in H ? (Ie[pe] = Ue) : (Le || (Le = {}), (Le[pe] = Ue)));
            for (pe in Ie) {
              if (((Ue = Ie[pe]), (Se = this.props[pe]), !Se)) {
                if (!Pr) continue;
                Se = y.call(this, pe);
              }
              ce.call(this, Se, Ue);
            }
            me && Le && me.call(this, Le);
          }
          function Oe(ne) {
            ne.stop();
          }
          function rr(ne, ce) {
            ne.set(ce);
          }
          function Fv(ne) {
            this.$el.css(ne);
          }
          function Ge(ne, ce) {
            l[ne] = function () {
              return this.children
                ? qv.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function qv(ne, ce) {
            var me,
              pe = this.children.length;
            for (me = 0; pe > me; me++) ne.apply(this.children[me], ce);
            return this;
          }
          (l.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = V(this.el, "transition");
              ce && !Q.test(ce) && (this.upstream = ce);
            }
            W.backface &&
              oe.hideBackface &&
              g(this.el, W.backface.css, "hidden");
          }),
            Ge("add", y),
            Ge("start", w),
            Ge("wait", R),
            Ge("then", T),
            Ge("next", P),
            Ge("stop", Z),
            Ge("set", ae),
            Ge("show", he),
            Ge("hide", B),
            Ge("redraw", se),
            Ge("destroy", ue);
        }),
        E = v(p, function (l) {
          function y(w, R) {
            var T = e.data(w, C) || e.data(w, C, new p.Bare());
            return T.el || T.init(w), R ? T.start(R) : T;
          }
          l.init = function (w, R) {
            var T = e(w);
            if (!T.length) return this;
            if (T.length === 1) return y(T[0], R);
            var P = [];
            return (
              T.each(function (Z, ae) {
                P.push(y(ae, R));
              }),
              (this.children = P),
              this
            );
          };
        }),
        m = v(function (l) {
          function y() {
            var P = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(P), Z;
          }
          function w(P, Z, ae) {
            return Z !== void 0 && (ae = Z), P in h ? P : ae;
          }
          function R(P) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
            return (Z ? o(Z[1], Z[2], Z[3]) : P).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (P, Z, ae, he) {
            (this.$el = P), (this.el = P[0]);
            var B = Z[0];
            ae[2] && (B = ae[2]),
              $[B] && (B = $[B]),
              (this.name = B),
              (this.type = ae[1]),
              (this.duration = s(Z[1], this.duration, T.duration)),
              (this.ease = w(Z[2], this.ease, T.ease)),
              (this.delay = s(Z[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = he.unit || this.unit || oe.defaultUnit),
              (this.angle = he.angle || this.angle || oe.defaultAngle),
              oe.fallback || he.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ee +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ee + h[this.ease][0] : "") +
                    (this.delay ? ee + this.delay + "ms" : "")));
          }),
            (l.set = function (P) {
              (P = this.convert(P, this.type)), this.update(P), this.redraw();
            }),
            (l.transition = function (P) {
              (this.active = !0),
                (P = this.convert(P, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  P == "auto" && (P = y.call(this))),
                (this.nextStyle = P);
            }),
            (l.fallback = function (P) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (P = this.convert(P, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  P == "auto" && (P = y.call(this))),
                (this.tween = new S({
                  from: Z,
                  to: P,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return V(this.el, this.name);
            }),
            (l.update = function (P) {
              g(this.el, this.name, P);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                g(this.el, this.name, this.get()));
              var P = this.tween;
              P && P.context && P.destroy();
            }),
            (l.convert = function (P, Z) {
              if (P == "auto" && this.auto) return P;
              var ae,
                he = typeof P == "number",
                B = typeof P == "string";
              switch (Z) {
                case L:
                  if (he) return P;
                  if (B && P.replace(b, "") === "") return +P;
                  ae = "number(unitless)";
                  break;
                case k:
                  if (B) {
                    if (P === "" && this.original) return this.original;
                    if (Z.test(P))
                      return P.charAt(0) == "#" && P.length == 7 ? P : R(P);
                  }
                  ae = "hex or rgb string";
                  break;
                case G:
                  if (he) return P + this.unit;
                  if (B && Z.test(P)) return P;
                  ae = "number(px) or string(unit)";
                  break;
                case D:
                  if (he) return P + this.unit;
                  if (B && Z.test(P)) return P;
                  ae = "number(px) or string(unit or %)";
                  break;
                case Y:
                  if (he) return P + this.angle;
                  if (B && Z.test(P)) return P;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (he || (B && D.test(P))) return P;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, P), P;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = v(m, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), k));
          };
        }),
        F = v(m, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (w) {
              this.$el[this.name](w);
            });
        }),
        U = v(m, function (l, y) {
          function w(R, T) {
            var P, Z, ae, he, B;
            for (P in R)
              (he = de[P]),
                (ae = he[0]),
                (Z = he[1] || P),
                (B = this.convert(R[P], ae)),
                T.call(this, Z, B, ae);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  g(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (R) {
              w.call(this, R, function (T, P) {
                this.current[T] = P;
              }),
                g(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (R) {
              var T = this.values(R);
              this.tween = new fe({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var P,
                Z = {};
              for (P in this.current) Z[P] = P in T ? T[P] : this.current[P];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (l.fallback = function (R) {
              var T = this.values(R);
              this.tween = new fe({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              g(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (R) {
              var T,
                P = "";
              for (T in R) P += T + "(" + R[T] + ") ";
              return P;
            }),
            (l.values = function (R) {
              var T,
                P = {};
              return (
                w.call(this, R, function (Z, ae, he) {
                  (P[Z] = ae),
                    this.current[Z] === void 0 &&
                      ((T = 0),
                      ~Z.indexOf("scale") && (T = 1),
                      (this.current[Z] = this.convert(T, he)));
                }),
                P
              );
            });
        }),
        S = v(function (l) {
          function y(B) {
            ae.push(B) === 1 && X(w);
          }
          function w() {
            var B,
              se,
              ue,
              _e = ae.length;
            if (_e)
              for (X(w), se = j(), B = _e; B--; )
                (ue = ae[B]), ue && ue.render(se);
          }
          function R(B) {
            var se,
              ue = e.inArray(B, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function T(B) {
            return Math.round(B * he) / he;
          }
          function P(B, se, ue) {
            return o(
              B[0] + ue * (se[0] - B[0]),
              B[1] + ue * (se[1] - B[1]),
              B[2] + ue * (se[2] - B[2])
            );
          }
          var Z = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (B) {
            (this.duration = B.duration || 0), (this.delay = B.delay || 0);
            var se = B.ease || Z.ease;
            h[se] && (se = h[se][1]),
              typeof se != "function" && (se = Z.ease),
              (this.ease = se),
              (this.update = B.update || i),
              (this.complete = B.complete || i),
              (this.context = B.context || this),
              (this.name = B.name);
            var ue = B.from,
              _e = B.to;
            ue === void 0 && (ue = Z.from),
              _e === void 0 && (_e = Z.to),
              (this.unit = B.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              B.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), R(this));
            }),
            (l.render = function (B) {
              var se,
                ue = B - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? P(this.startRGB, this.endRGB, _e)
                    : T(this.begin + _e * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (B, se) {
              if (((se += ""), (B += ""), B.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(B)),
                  (this.endHex = B),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(b, ""),
                  _e = B.replace(b, "");
                ue !== _e && u("tween", se, B), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (B = parseFloat(B)),
                (this.begin = this.value = se),
                (this.change = B - se);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var ae = [],
            he = 1e3;
        }),
        ie = v(S, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || i),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var w = y - this.start;
              w < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = v(S, function (l, y) {
          (l.init = function (w) {
            (this.context = w.context),
              (this.update = w.update),
              (this.tweens = []),
              (this.current = w.current);
            var R, T;
            for (R in w.values)
              (T = w.values[R]),
                this.current[R] !== T &&
                  this.tweens.push(
                    new S({
                      name: R,
                      from: this.current[R],
                      to: T,
                      duration: w.duration,
                      delay: w.delay,
                      ease: w.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (w) {
              var R,
                T,
                P = this.tweens.length,
                Z = !1;
              for (R = P; R--; )
                (T = this.tweens[R]),
                  T.context &&
                    (T.render(w), (this.current[T.name] = T.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var w,
                  R = this.tweens.length;
                for (w = R; w--; ) this.tweens[w].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !W.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!W.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var y = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new S(l);
        }),
        (t.delay = function (l, y, w) {
          return new ie({ complete: y, duration: l, context: w });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var g = e.style,
        V = e.css,
        $ = { transform: W.transform && W.transform.css },
        H = {
          color: [c, k],
          background: [c, k, "background-color"],
          "outline-color": [c, k],
          "border-color": [c, k],
          "border-top-color": [c, k],
          "border-right-color": [c, k],
          "border-bottom-color": [c, k],
          "border-left-color": [c, k],
          "border-width": [m, G],
          "border-top-width": [m, G],
          "border-right-width": [m, G],
          "border-bottom-width": [m, G],
          "border-left-width": [m, G],
          "border-spacing": [m, G],
          "letter-spacing": [m, G],
          margin: [m, G],
          "margin-top": [m, G],
          "margin-right": [m, G],
          "margin-bottom": [m, G],
          "margin-left": [m, G],
          padding: [m, G],
          "padding-top": [m, G],
          "padding-right": [m, G],
          "padding-bottom": [m, G],
          "padding-left": [m, G],
          "outline-width": [m, G],
          opacity: [m, L],
          top: [m, D],
          right: [m, D],
          bottom: [m, D],
          left: [m, D],
          "font-size": [m, D],
          "text-indent": [m, D],
          "word-spacing": [m, D],
          width: [m, D],
          "min-width": [m, D],
          "max-width": [m, D],
          height: [m, D],
          "min-height": [m, D],
          "max-height": [m, D],
          "line-height": [m, K],
          "scroll-top": [F, L, "scrollTop"],
          "scroll-left": [F, L, "scrollLeft"],
        },
        de = {};
      W.transform &&
        ((H.transform = [U]),
        (de = {
          x: [D, "translateX"],
          y: [D, "translateY"],
          rotate: [Y],
          rotateX: [Y],
          rotateY: [Y],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [Y],
          skewX: [Y],
          skewY: [Y],
        })),
        W.transform &&
          W.backface &&
          ((de.z = [D, "translateZ"]),
          (de.rotateZ = [Y]),
          (de.scaleZ = [L]),
          (de.perspective = [G]));
      var Ce = /ms/,
        Xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var la = d((dF, ca) => {
    "use strict";
    var Hv = window.$,
      Bv = zn() && Hv.tram;
    ca.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        f = n.hasOwnProperty,
        _ = r.forEach,
        v = r.map,
        h = r.reduce,
        I = r.reduceRight,
        x = r.filter,
        A = r.every,
        C = r.some,
        b = r.indexOf,
        N = r.lastIndexOf,
        L = Array.isArray,
        k = Object.keys,
        G = o.bind,
        D =
          (e.each =
          e.forEach =
            function (O, M, z) {
              if (O == null) return O;
              if (_ && O.forEach === _) O.forEach(M, z);
              else if (O.length === +O.length) {
                for (var W = 0, te = O.length; W < te; W++)
                  if (M.call(z, O[W], W, O) === t) return;
              } else
                for (var re = e.keys(O), W = 0, te = re.length; W < te; W++)
                  if (M.call(z, O[re[W]], re[W], O) === t) return;
              return O;
            });
      (e.map = e.collect =
        function (O, M, z) {
          var W = [];
          return O == null
            ? W
            : v && O.map === v
            ? O.map(M, z)
            : (D(O, function (te, re, X) {
                W.push(M.call(z, te, re, X));
              }),
              W);
        }),
        (e.find = e.detect =
          function (O, M, z) {
            var W;
            return (
              Y(O, function (te, re, X) {
                if (M.call(z, te, re, X)) return (W = te), !0;
              }),
              W
            );
          }),
        (e.filter = e.select =
          function (O, M, z) {
            var W = [];
            return O == null
              ? W
              : x && O.filter === x
              ? O.filter(M, z)
              : (D(O, function (te, re, X) {
                  M.call(z, te, re, X) && W.push(te);
                }),
                W);
          });
      var Y =
        (e.some =
        e.any =
          function (O, M, z) {
            M || (M = e.identity);
            var W = !1;
            return O == null
              ? W
              : C && O.some === C
              ? O.some(M, z)
              : (D(O, function (te, re, X) {
                  if (W || (W = M.call(z, te, re, X))) return t;
                }),
                !!W);
          });
      (e.contains = e.include =
        function (O, M) {
          return O == null
            ? !1
            : b && O.indexOf === b
            ? O.indexOf(M) != -1
            : Y(O, function (z) {
                return z === M;
              });
        }),
        (e.delay = function (O, M) {
          var z = a.call(arguments, 2);
          return setTimeout(function () {
            return O.apply(null, z);
          }, M);
        }),
        (e.defer = function (O) {
          return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (O) {
          var M, z, W;
          return function () {
            M ||
              ((M = !0),
              (z = arguments),
              (W = this),
              Bv.frame(function () {
                (M = !1), O.apply(W, z);
              }));
          };
        }),
        (e.debounce = function (O, M, z) {
          var W,
            te,
            re,
            X,
            j,
            p = function () {
              var E = e.now() - X;
              E < M
                ? (W = setTimeout(p, M - E))
                : ((W = null), z || ((j = O.apply(re, te)), (re = te = null)));
            };
          return function () {
            (re = this), (te = arguments), (X = e.now());
            var E = z && !W;
            return (
              W || (W = setTimeout(p, M)),
              E && ((j = O.apply(re, te)), (re = te = null)),
              j
            );
          };
        }),
        (e.defaults = function (O) {
          if (!e.isObject(O)) return O;
          for (var M = 1, z = arguments.length; M < z; M++) {
            var W = arguments[M];
            for (var te in W) O[te] === void 0 && (O[te] = W[te]);
          }
          return O;
        }),
        (e.keys = function (O) {
          if (!e.isObject(O)) return [];
          if (k) return k(O);
          var M = [];
          for (var z in O) e.has(O, z) && M.push(z);
          return M;
        }),
        (e.has = function (O, M) {
          return f.call(O, M);
        }),
        (e.isObject = function (O) {
          return O === Object(O);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        ee = function (O) {
          return "\\" + Q[O];
        },
        q = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (O, M, z) {
          !M && z && (M = z), (M = e.defaults({}, M, e.templateSettings));
          var W = RegExp(
              [
                (M.escape || K).source,
                (M.interpolate || K).source,
                (M.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            re = "__p+='";
          O.replace(W, function (E, m, c, F, U) {
            return (
              (re += O.slice(te, U).replace(J, ee)),
              (te = U + E.length),
              m
                ? (re +=
                    `'+
((__t=(` +
                    m +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (re +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : F &&
                  (re +=
                    `';
` +
                    F +
                    `
__p+='`),
              E
            );
          }),
            (re += `';
`);
          var X = M.variable;
          if (X) {
            if (!q.test(X))
              throw new Error("variable is not a bare identifier: " + X);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (X = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var j;
          try {
            j = new Function(M.variable || "obj", "_", re);
          } catch (E) {
            throw ((E.source = re), E);
          }
          var p = function (E) {
            return j.call(this, E, e);
          };
          return (
            (p.source =
              "function(" +
              X +
              `){
` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var qe = d((pF, ma) => {
    "use strict";
    var ge = {},
      St = {},
      xt = [],
      jn = window.Webflow || [],
      lt = window.jQuery,
      We = lt(window),
      zv = lt(document),
      $e = lt.isFunction,
      Ve = (ge._ = la()),
      da = (ge.tram = zn() && lt.tram),
      Mr = !1,
      Yn = !1;
    da.config.hideBackface = !1;
    da.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      St[e] && ga(St[e]);
      var n = (St[e] = t(lt, Ve, r) || {});
      return pa(n), n;
    };
    ge.require = function (e) {
      return St[e];
    };
    function pa(e) {
      ge.env() &&
        ($e(e.design) && We.on("__wf_design", e.design),
        $e(e.preview) && We.on("__wf_preview", e.preview)),
        $e(e.destroy) && We.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && Kv(e);
    }
    function Kv(e) {
      if (Mr) {
        e.ready();
        return;
      }
      Ve.contains(xt, e.ready) || xt.push(e.ready);
    }
    function ga(e) {
      $e(e.design) && We.off("__wf_design", e.design),
        $e(e.preview) && We.off("__wf_preview", e.preview),
        $e(e.destroy) && We.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && jv(e);
    }
    function jv(e) {
      xt = Ve.filter(xt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (Mr) {
        $e(e) && e();
        return;
      }
      jn.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Dr = navigator.userAgent.toLowerCase(),
      ha = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Yv = (ge.env.chrome =
        /chrome/.test(Dr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Dr.match(/chrome\/(\d+)\./)[1], 10)),
      Qv = (ge.env.ios = /(ipod|iphone|ipad)/.test(Dr));
    ge.env.safari = /safari/.test(Dr) && !Yv && !Qv;
    var Kn;
    ha &&
      zv.on("touchstart mousedown", function (e) {
        Kn = e.target;
      });
    ge.validClick = ha
      ? function (e) {
          return e === Kn || lt.contains(e, Kn);
        }
      : function () {
          return !0;
        };
    var va = "resize.webflow orientationchange.webflow load.webflow",
      $v = "scroll.webflow " + va;
    ge.resize = Qn(We, va);
    ge.scroll = Qn(We, $v);
    ge.redraw = Qn();
    function Qn(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (o) {
          Ve.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (Ve.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (Mr = !0), Yn ? Zv() : Ve.each(xt, fa), Ve.each(jn, fa), ge.resize.up();
    };
    function fa(e) {
      $e(e) && e();
    }
    function Zv() {
      (Yn = !1), Ve.each(St, pa);
    }
    var mt;
    ge.load = function (e) {
      mt.then(e);
    };
    function Ea() {
      mt && (mt.reject(), We.off("load", mt.resolve)),
        (mt = new lt.Deferred()),
        We.on("load", mt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Yn = !0),
        We.triggerHandler("__wf_destroy"),
        e.domready != null && (Mr = e.domready),
        Ve.each(St, ga),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (xt = []),
        (jn = []),
        mt.state() === "pending" && Ea();
    };
    lt(ge.ready);
    Ea();
    ma.exports = window.Webflow = ge;
  });
  var Ia = d((gF, _a) => {
    "use strict";
    var ya = qe();
    ya.define(
      "brand",
      (_a.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var I = n.attr("data-wf-status"),
            x = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(x) && a.hostname !== x && (I = !0),
            I &&
              !u &&
              ((f = f || v()),
              h(),
              setTimeout(h, 500),
              e(r).off(s, _).on(s, _));
        };
        function _() {
          var I =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", I ? "display: none !important;" : "");
        }
        function v() {
          var I = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            x = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            A = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return I.append(x, A), I[0];
        }
        function h() {
          var I = o.children(i),
            x = I.length && I.get(0) === f,
            A = ya.env("editor");
          if (x) {
            A && I.remove();
            return;
          }
          I.length && I.remove(), A || o.append(f);
        }
        return t;
      })
    );
  });
  var ba = d((hF, Ta) => {
    "use strict";
    var Jv = qe();
    Jv.define(
      "focus-visible",
      (Ta.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function s(L) {
            var k = L.type,
              G = L.tagName;
            return !!(
              (G === "INPUT" && a[k] && !L.readOnly) ||
              (G === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function f(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function _(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function v(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function I(L) {
            u(L.target) && (n || s(L.target)) && f(L.target);
          }
          function x(L) {
            u(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              _(L.target));
          }
          function A() {
            document.visibilityState === "hidden" && (o && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function b() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", A, !0),
            C(),
            r.addEventListener("focus", I, !0),
            r.addEventListener("blur", x, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Oa = d((vF, wa) => {
    "use strict";
    var Aa = qe();
    Aa.define(
      "focus",
      (wa.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Aa.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Ra = d((EF, xa) => {
    "use strict";
    var $n = window.jQuery,
      Ze = {},
      Fr = [],
      Sa = ".w-ix",
      qr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), $n(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), $n(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + Sa, OUTRO: "w-ix-outro" + Sa };
    Ze.init = function () {
      for (var e = Fr.length, t = 0; t < e; t++) {
        var r = Fr[t];
        r[0](0, r[1]);
      }
      (Fr = []), $n.extend(Ze.triggers, qr);
    };
    Ze.async = function () {
      for (var e in qr) {
        var t = qr[e];
        qr.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (r, n) {
            Fr.push([t, n]);
          });
      }
    };
    Ze.async();
    xa.exports = Ze;
  });
  var nr = d((mF, Pa) => {
    "use strict";
    var Zn = Ra();
    function Ca(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var eE = window.jQuery,
      kr = {},
      La = ".w-ix",
      tE = {
        reset: function (e, t) {
          Zn.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Zn.triggers.intro(e, t), Ca(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Zn.triggers.outro(e, t), Ca(t, "COMPONENT_INACTIVE");
        },
      };
    kr.triggers = {};
    kr.types = { INTRO: "w-ix-intro" + La, OUTRO: "w-ix-outro" + La };
    eE.extend(kr.triggers, tE);
    Pa.exports = kr;
  });
  var Jn = d((yF, Na) => {
    var rE =
      typeof global == "object" && global && global.Object === Object && global;
    Na.exports = rE;
  });
  var He = d((_F, Da) => {
    var nE = Jn(),
      iE = typeof self == "object" && self && self.Object === Object && self,
      oE = nE || iE || Function("return this")();
    Da.exports = oE;
  });
  var Rt = d((IF, Ma) => {
    var aE = He(),
      sE = aE.Symbol;
    Ma.exports = sE;
  });
  var Xa = d((TF, ka) => {
    var Fa = Rt(),
      qa = Object.prototype,
      uE = qa.hasOwnProperty,
      cE = qa.toString,
      ir = Fa ? Fa.toStringTag : void 0;
    function lE(e) {
      var t = uE.call(e, ir),
        r = e[ir];
      try {
        e[ir] = void 0;
        var n = !0;
      } catch {}
      var o = cE.call(e);
      return n && (t ? (e[ir] = r) : delete e[ir]), o;
    }
    ka.exports = lE;
  });
  var Ua = d((bF, Ga) => {
    var fE = Object.prototype,
      dE = fE.toString;
    function pE(e) {
      return dE.call(e);
    }
    Ga.exports = pE;
  });
  var ft = d((AF, Ha) => {
    var Va = Rt(),
      gE = Xa(),
      hE = Ua(),
      vE = "[object Null]",
      EE = "[object Undefined]",
      Wa = Va ? Va.toStringTag : void 0;
    function mE(e) {
      return e == null
        ? e === void 0
          ? EE
          : vE
        : Wa && Wa in Object(e)
        ? gE(e)
        : hE(e);
    }
    Ha.exports = mE;
  });
  var ei = d((wF, Ba) => {
    function yE(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Ba.exports = yE;
  });
  var ti = d((OF, za) => {
    var _E = ei(),
      IE = _E(Object.getPrototypeOf, Object);
    za.exports = IE;
  });
  var ot = d((SF, Ka) => {
    function TE(e) {
      return e != null && typeof e == "object";
    }
    Ka.exports = TE;
  });
  var ri = d((xF, Ya) => {
    var bE = ft(),
      AE = ti(),
      wE = ot(),
      OE = "[object Object]",
      SE = Function.prototype,
      xE = Object.prototype,
      ja = SE.toString,
      RE = xE.hasOwnProperty,
      CE = ja.call(Object);
    function LE(e) {
      if (!wE(e) || bE(e) != OE) return !1;
      var t = AE(e);
      if (t === null) return !0;
      var r = RE.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ja.call(r) == CE;
    }
    Ya.exports = LE;
  });
  var Qa = d((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.default = PE;
    function PE(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var $a = d((oi, ii) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    var NE = Qa(),
      DE = ME(NE);
    function ME(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ct;
    typeof self < "u"
      ? (Ct = self)
      : typeof window < "u"
      ? (Ct = window)
      : typeof global < "u"
      ? (Ct = global)
      : typeof ii < "u"
      ? (Ct = ii)
      : (Ct = Function("return this")());
    var FE = (0, DE.default)(Ct);
    oi.default = FE;
  });
  var ai = d((or) => {
    "use strict";
    or.__esModule = !0;
    or.ActionTypes = void 0;
    or.default = ts;
    var qE = ri(),
      kE = es(qE),
      XE = $a(),
      Za = es(XE);
    function es(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ja = (or.ActionTypes = { INIT: "@@redux/INIT" });
    function ts(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ts)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        u = a,
        s = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function _() {
        return i;
      }
      function v(A) {
        if (typeof A != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          f(),
          u.push(A),
          function () {
            if (C) {
              (C = !1), f();
              var N = u.indexOf(A);
              u.splice(N, 1);
            }
          }
        );
      }
      function h(A) {
        if (!(0, kE.default)(A))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof A.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (i = o(i, A));
        } finally {
          s = !1;
        }
        for (var C = (a = u), b = 0; b < C.length; b++) C[b]();
        return A;
      }
      function I(A) {
        if (typeof A != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = A), h({ type: Ja.INIT });
      }
      function x() {
        var A,
          C = v;
        return (
          (A = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                N.next && N.next(_());
              }
              L();
              var k = C(L);
              return { unsubscribe: k };
            },
          }),
          (A[Za.default] = function () {
            return this;
          }),
          A
        );
      }
      return (
        h({ type: Ja.INIT }),
        (n = { dispatch: h, subscribe: v, getState: _, replaceReducer: I }),
        (n[Za.default] = x),
        n
      );
    }
  });
  var ui = d((si) => {
    "use strict";
    si.__esModule = !0;
    si.default = GE;
    function GE(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var is = d((ci) => {
    "use strict";
    ci.__esModule = !0;
    ci.default = BE;
    var rs = ai(),
      UE = ri(),
      PF = ns(UE),
      VE = ui(),
      NF = ns(VE);
    function ns(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function WE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function HE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: rs.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                rs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function BE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        HE(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          _ = arguments[1];
        if (u) throw u;
        if (!1) var v;
        for (var h = !1, I = {}, x = 0; x < i.length; x++) {
          var A = i[x],
            C = r[A],
            b = f[A],
            N = C(b, _);
          if (typeof N > "u") {
            var L = WE(A, _);
            throw new Error(L);
          }
          (I[A] = N), (h = h || N !== b);
        }
        return h ? I : f;
      };
    }
  });
  var as = d((li) => {
    "use strict";
    li.__esModule = !0;
    li.default = zE;
    function os(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function zE(e, t) {
      if (typeof e == "function") return os(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = os(a, t));
      }
      return n;
    }
  });
  var di = d((fi) => {
    "use strict";
    fi.__esModule = !0;
    fi.default = KE;
    function KE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ss = d((pi) => {
    "use strict";
    pi.__esModule = !0;
    var jE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    pi.default = ZE;
    var YE = di(),
      QE = $E(YE);
    function $E(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ZE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var u = n(o, i, a),
            s = u.dispatch,
            f = [],
            _ = {
              getState: u.getState,
              dispatch: function (h) {
                return s(h);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(_);
            })),
            (s = QE.default.apply(void 0, f)(u.dispatch)),
            jE({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var gi = d((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var JE = ai(),
      em = Lt(JE),
      tm = is(),
      rm = Lt(tm),
      nm = as(),
      im = Lt(nm),
      om = ss(),
      am = Lt(om),
      sm = di(),
      um = Lt(sm),
      cm = ui(),
      kF = Lt(cm);
    function Lt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = em.default;
    ke.combineReducers = rm.default;
    ke.bindActionCreators = im.default;
    ke.applyMiddleware = am.default;
    ke.compose = um.default;
  });
  var Be,
    hi,
    Je,
    lm,
    fm,
    Xr,
    dm,
    vi = Ee(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (hi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (lm = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (fm = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Xr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (dm = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ne,
    pm,
    Gr = Ee(() => {
      "use strict";
      (Ne = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (pm = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var gm,
    us = Ee(() => {
      "use strict";
      gm = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var hm,
    vm,
    Em,
    mm,
    ym,
    _m,
    Im,
    Ei,
    cs = Ee(() => {
      "use strict";
      Gr();
      ({
        TRANSFORM_MOVE: hm,
        TRANSFORM_SCALE: vm,
        TRANSFORM_ROTATE: Em,
        TRANSFORM_SKEW: mm,
        STYLE_SIZE: ym,
        STYLE_FILTER: _m,
        STYLE_FONT_VARIATION: Im,
      } = Ne),
        (Ei = {
          [hm]: !0,
          [vm]: !0,
          [Em]: !0,
          [mm]: !0,
          [ym]: !0,
          [_m]: !0,
          [Im]: !0,
        });
    });
  var Te = {};
  Pe(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => km,
    IX2_ANIMATION_FRAME_CHANGED: () => Pm,
    IX2_CLEAR_REQUESTED: () => Rm,
    IX2_ELEMENT_STATE_CHANGED: () => qm,
    IX2_EVENT_LISTENER_ADDED: () => Cm,
    IX2_EVENT_STATE_CHANGED: () => Lm,
    IX2_INSTANCE_ADDED: () => Dm,
    IX2_INSTANCE_REMOVED: () => Fm,
    IX2_INSTANCE_STARTED: () => Mm,
    IX2_MEDIA_QUERIES_DEFINED: () => Gm,
    IX2_PARAMETER_CHANGED: () => Nm,
    IX2_PLAYBACK_REQUESTED: () => Sm,
    IX2_PREVIEW_REQUESTED: () => Om,
    IX2_RAW_DATA_IMPORTED: () => Tm,
    IX2_SESSION_INITIALIZED: () => bm,
    IX2_SESSION_STARTED: () => Am,
    IX2_SESSION_STOPPED: () => wm,
    IX2_STOP_REQUESTED: () => xm,
    IX2_TEST_FRAME_RENDERED: () => Um,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Xm,
  });
  var Tm,
    bm,
    Am,
    wm,
    Om,
    Sm,
    xm,
    Rm,
    Cm,
    Lm,
    Pm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    km,
    Xm,
    Gm,
    Um,
    ls = Ee(() => {
      "use strict";
      (Tm = "IX2_RAW_DATA_IMPORTED"),
        (bm = "IX2_SESSION_INITIALIZED"),
        (Am = "IX2_SESSION_STARTED"),
        (wm = "IX2_SESSION_STOPPED"),
        (Om = "IX2_PREVIEW_REQUESTED"),
        (Sm = "IX2_PLAYBACK_REQUESTED"),
        (xm = "IX2_STOP_REQUESTED"),
        (Rm = "IX2_CLEAR_REQUESTED"),
        (Cm = "IX2_EVENT_LISTENER_ADDED"),
        (Lm = "IX2_EVENT_STATE_CHANGED"),
        (Pm = "IX2_ANIMATION_FRAME_CHANGED"),
        (Nm = "IX2_PARAMETER_CHANGED"),
        (Dm = "IX2_INSTANCE_ADDED"),
        (Mm = "IX2_INSTANCE_STARTED"),
        (Fm = "IX2_INSTANCE_REMOVED"),
        (qm = "IX2_ELEMENT_STATE_CHANGED"),
        (km = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (Xm = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Gm = "IX2_MEDIA_QUERIES_DEFINED"),
        (Um = "IX2_TEST_FRAME_RENDERED");
    });
  var we = {};
  Pe(we, {
    ABSTRACT_NODE: () => Xy,
    AUTO: () => xy,
    BACKGROUND: () => Ty,
    BACKGROUND_COLOR: () => Iy,
    BAR_DELIMITER: () => Ly,
    BORDER_COLOR: () => by,
    BOUNDARY_SELECTOR: () => zm,
    CHILDREN: () => Py,
    COLON_DELIMITER: () => Cy,
    COLOR: () => Ay,
    COMMA_DELIMITER: () => Ry,
    CONFIG_UNIT: () => ey,
    CONFIG_VALUE: () => Qm,
    CONFIG_X_UNIT: () => $m,
    CONFIG_X_VALUE: () => Km,
    CONFIG_Y_UNIT: () => Zm,
    CONFIG_Y_VALUE: () => jm,
    CONFIG_Z_UNIT: () => Jm,
    CONFIG_Z_VALUE: () => Ym,
    DISPLAY: () => wy,
    FILTER: () => Ey,
    FLEX: () => Oy,
    FONT_VARIATION_SETTINGS: () => my,
    HEIGHT: () => _y,
    HTML_ELEMENT: () => qy,
    IMMEDIATE_CHILDREN: () => Ny,
    IX2_ID_DELIMITER: () => Vm,
    OPACITY: () => vy,
    PARENT: () => My,
    PLAIN_OBJECT: () => ky,
    PRESERVE_3D: () => Fy,
    RENDER_GENERAL: () => Uy,
    RENDER_PLUGIN: () => Wy,
    RENDER_STYLE: () => Vy,
    RENDER_TRANSFORM: () => Gy,
    ROTATE_X: () => ly,
    ROTATE_Y: () => fy,
    ROTATE_Z: () => dy,
    SCALE_3D: () => cy,
    SCALE_X: () => ay,
    SCALE_Y: () => sy,
    SCALE_Z: () => uy,
    SIBLINGS: () => Dy,
    SKEW: () => py,
    SKEW_X: () => gy,
    SKEW_Y: () => hy,
    TRANSFORM: () => ty,
    TRANSLATE_3D: () => oy,
    TRANSLATE_X: () => ry,
    TRANSLATE_Y: () => ny,
    TRANSLATE_Z: () => iy,
    WF_PAGE: () => Wm,
    WIDTH: () => yy,
    WILL_CHANGE: () => Sy,
    W_MOD_IX: () => Bm,
    W_MOD_JS: () => Hm,
  });
  var Vm,
    Wm,
    Hm,
    Bm,
    zm,
    Km,
    jm,
    Ym,
    Qm,
    $m,
    Zm,
    Jm,
    ey,
    ty,
    ry,
    ny,
    iy,
    oy,
    ay,
    sy,
    uy,
    cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    Ey,
    my,
    yy,
    _y,
    Iy,
    Ty,
    by,
    Ay,
    wy,
    Oy,
    Sy,
    xy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Xy,
    Gy,
    Uy,
    Vy,
    Wy,
    fs = Ee(() => {
      "use strict";
      (Vm = "|"),
        (Wm = "data-wf-page"),
        (Hm = "w-mod-js"),
        (Bm = "w-mod-ix"),
        (zm = ".w-dyn-item"),
        (Km = "xValue"),
        (jm = "yValue"),
        (Ym = "zValue"),
        (Qm = "value"),
        ($m = "xUnit"),
        (Zm = "yUnit"),
        (Jm = "zUnit"),
        (ey = "unit"),
        (ty = "transform"),
        (ry = "translateX"),
        (ny = "translateY"),
        (iy = "translateZ"),
        (oy = "translate3d"),
        (ay = "scaleX"),
        (sy = "scaleY"),
        (uy = "scaleZ"),
        (cy = "scale3d"),
        (ly = "rotateX"),
        (fy = "rotateY"),
        (dy = "rotateZ"),
        (py = "skew"),
        (gy = "skewX"),
        (hy = "skewY"),
        (vy = "opacity"),
        (Ey = "filter"),
        (my = "font-variation-settings"),
        (yy = "width"),
        (_y = "height"),
        (Iy = "backgroundColor"),
        (Ty = "background"),
        (by = "borderColor"),
        (Ay = "color"),
        (wy = "display"),
        (Oy = "flex"),
        (Sy = "willChange"),
        (xy = "AUTO"),
        (Ry = ","),
        (Cy = ":"),
        (Ly = "|"),
        (Py = "CHILDREN"),
        (Ny = "IMMEDIATE_CHILDREN"),
        (Dy = "SIBLINGS"),
        (My = "PARENT"),
        (Fy = "preserve-3d"),
        (qy = "HTML_ELEMENT"),
        (ky = "PLAIN_OBJECT"),
        (Xy = "ABSTRACT_NODE"),
        (Gy = "RENDER_TRANSFORM"),
        (Uy = "RENDER_GENERAL"),
        (Vy = "RENDER_STYLE"),
        (Wy = "RENDER_PLUGIN");
    });
  var ds = {};
  Pe(ds, {
    ActionAppliesTo: () => pm,
    ActionTypeConsts: () => Ne,
    EventAppliesTo: () => hi,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => lm,
    EventLimitAffectedElements: () => fm,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => we,
    InteractionTypeConsts: () => gm,
    QuickEffectDirectionConsts: () => dm,
    QuickEffectIds: () => Xr,
    ReducedMotionTypes: () => Ei,
  });
  var De = Ee(() => {
    "use strict";
    vi();
    Gr();
    us();
    cs();
    ls();
    fs();
    Gr();
    vi();
  });
  var Hy,
    ps,
    gs = Ee(() => {
      "use strict";
      De();
      ({ IX2_RAW_DATA_IMPORTED: Hy } = Te),
        (ps = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Hy:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Pt = d((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var By =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = Vr;
    ye.addLast = Es;
    ye.addFirst = ms;
    ye.removeLast = ys;
    ye.removeFirst = _s;
    ye.insert = Is;
    ye.removeAt = Ts;
    ye.replaceAt = bs;
    ye.getIn = Wr;
    ye.set = Hr;
    ye.setIn = Br;
    ye.update = ws;
    ye.updateIn = Os;
    ye.merge = Ss;
    ye.mergeDeep = xs;
    ye.mergeIn = Rs;
    ye.omit = Cs;
    ye.addDefaults = Ls;
    var hs = "INVALID_ARGS";
    function vs(e) {
      throw new Error(e);
    }
    function mi(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var zy = {}.hasOwnProperty;
    function Vr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = mi(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Me(e, t, r) {
      var n = r;
      n == null && vs(hs);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var f = a[s];
        if (f != null) {
          var _ = mi(f);
          if (_.length)
            for (var v = 0; v <= _.length; v++) {
              var h = _[v];
              if (!(e && n[h] !== void 0)) {
                var I = f[h];
                t && Ur(n[h]) && Ur(I) && (I = Me(e, t, n[h], I)),
                  !(I === void 0 || I === n[h]) &&
                    (o || ((o = !0), (n = Vr(n))), (n[h] = I));
              }
            }
        }
      }
      return n;
    }
    function Ur(e) {
      var t = typeof e > "u" ? "undefined" : By(e);
      return e != null && (t === "object" || t === "function");
    }
    function Es(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function ms(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ys(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function _s(e) {
      return e.length ? e.slice(1) : e;
    }
    function Is(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ts(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function bs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Wr(e, t) {
      if ((!Array.isArray(t) && vs(hs), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Hr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = Vr(o);
      return (i[t] = r), i;
    }
    function As(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          Ur(e) && Ur(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = As(a, t, r, n + 1);
      }
      return Hr(e, i, o);
    }
    function Br(e, t, r) {
      return t.length ? As(e, t, r, 0) : r;
    }
    function ws(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Hr(e, t, o);
    }
    function Os(e, t, r) {
      var n = Wr(e, t),
        o = r(n);
      return Br(e, t, o);
    }
    function Ss(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, o, i].concat(u))
        : Me(!1, !1, e, t, r, n, o, i);
    }
    function xs(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, o, i].concat(u))
        : Me(!1, !0, e, t, r, n, o, i);
    }
    function Rs(e, t, r, n, o, i, a) {
      var u = Wr(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          f = arguments.length,
          _ = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        _[v - 7] = arguments[v];
      return (
        _.length
          ? (s = Me.call.apply(Me, [null, !1, !1, u, r, n, o, i, a].concat(_)))
          : (s = Me(!1, !1, u, r, n, o, i, a)),
        Br(e, t, s)
      );
    }
    function Cs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (zy.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = mi(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (i[s] = e[s]);
      }
      return i;
    }
    function Ls(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, o, i].concat(u))
        : Me(!0, !1, e, t, r, n, o, i);
    }
    var Ky = {
      clone: Vr,
      addLast: Es,
      addFirst: ms,
      removeLast: ys,
      removeFirst: _s,
      insert: Is,
      removeAt: Ts,
      replaceAt: bs,
      getIn: Wr,
      set: Hr,
      setIn: Br,
      update: ws,
      updateIn: Os,
      merge: Ss,
      mergeDeep: xs,
      mergeIn: Rs,
      omit: Cs,
      addDefaults: Ls,
    };
    ye.default = Ky;
  });
  var Ns,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Ps,
    Ds,
    Ms = Ee(() => {
      "use strict";
      De();
      (Ns = le(Pt())),
        ({
          IX2_PREVIEW_REQUESTED: jy,
          IX2_PLAYBACK_REQUESTED: Yy,
          IX2_STOP_REQUESTED: Qy,
          IX2_CLEAR_REQUESTED: $y,
        } = Te),
        (Zy = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Ps = Object.create(null, {
          [jy]: { value: "preview" },
          [Yy]: { value: "playback" },
          [Qy]: { value: "stop" },
          [$y]: { value: "clear" },
        })),
        (Ds = (e = Zy, t) => {
          if (t.type in Ps) {
            let r = [Ps[t.type]];
            return (0, Ns.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var xe,
    Jy,
    e_,
    t_,
    r_,
    n_,
    i_,
    o_,
    a_,
    s_,
    u_,
    Fs,
    c_,
    qs,
    ks = Ee(() => {
      "use strict";
      De();
      (xe = le(Pt())),
        ({
          IX2_SESSION_INITIALIZED: Jy,
          IX2_SESSION_STARTED: e_,
          IX2_TEST_FRAME_RENDERED: t_,
          IX2_SESSION_STOPPED: r_,
          IX2_EVENT_LISTENER_ADDED: n_,
          IX2_EVENT_STATE_CHANGED: i_,
          IX2_ANIMATION_FRAME_CHANGED: o_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: a_,
          IX2_VIEWPORT_WIDTH_CHANGED: s_,
          IX2_MEDIA_QUERIES_DEFINED: u_,
        } = Te),
        (Fs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (c_ = 20),
        (qs = (e = Fs, t) => {
          switch (t.type) {
            case Jy: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, xe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case e_:
              return (0, xe.set)(e, "active", !0);
            case t_: {
              let {
                payload: { step: r = c_ },
              } = t;
              return (0, xe.set)(e, "tick", e.tick + r);
            }
            case r_:
              return Fs;
            case o_: {
              let {
                payload: { now: r },
              } = t;
              return (0, xe.set)(e, "tick", r);
            }
            case n_: {
              let r = (0, xe.addLast)(e.eventListeners, t.payload);
              return (0, xe.set)(e, "eventListeners", r);
            }
            case i_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, xe.setIn)(e, ["eventState", r], n);
            }
            case a_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, xe.setIn)(e, ["playbackState", r], n);
            }
            case s_: {
              let { width: r, mediaQueries: n } = t.payload,
                o = n.length,
                i = null;
              for (let a = 0; a < o; a++) {
                let { key: u, min: s, max: f } = n[a];
                if (r >= s && r <= f) {
                  i = u;
                  break;
                }
              }
              return (0, xe.merge)(e, { viewportWidth: r, mediaQueryKey: i });
            }
            case u_:
              return (0, xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Gs = d((i1, Xs) => {
    function l_() {
      (this.__data__ = []), (this.size = 0);
    }
    Xs.exports = l_;
  });
  var zr = d((o1, Us) => {
    function f_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Us.exports = f_;
  });
  var ar = d((a1, Vs) => {
    var d_ = zr();
    function p_(e, t) {
      for (var r = e.length; r--; ) if (d_(e[r][0], t)) return r;
      return -1;
    }
    Vs.exports = p_;
  });
  var Hs = d((s1, Ws) => {
    var g_ = ar(),
      h_ = Array.prototype,
      v_ = h_.splice;
    function E_(e) {
      var t = this.__data__,
        r = g_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : v_.call(t, r, 1), --this.size, !0;
    }
    Ws.exports = E_;
  });
  var zs = d((u1, Bs) => {
    var m_ = ar();
    function y_(e) {
      var t = this.__data__,
        r = m_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Bs.exports = y_;
  });
  var js = d((c1, Ks) => {
    var __ = ar();
    function I_(e) {
      return __(this.__data__, e) > -1;
    }
    Ks.exports = I_;
  });
  var Qs = d((l1, Ys) => {
    var T_ = ar();
    function b_(e, t) {
      var r = this.__data__,
        n = T_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Ys.exports = b_;
  });
  var sr = d((f1, $s) => {
    var A_ = Gs(),
      w_ = Hs(),
      O_ = zs(),
      S_ = js(),
      x_ = Qs();
    function Nt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Nt.prototype.clear = A_;
    Nt.prototype.delete = w_;
    Nt.prototype.get = O_;
    Nt.prototype.has = S_;
    Nt.prototype.set = x_;
    $s.exports = Nt;
  });
  var Js = d((d1, Zs) => {
    var R_ = sr();
    function C_() {
      (this.__data__ = new R_()), (this.size = 0);
    }
    Zs.exports = C_;
  });
  var tu = d((p1, eu) => {
    function L_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    eu.exports = L_;
  });
  var nu = d((g1, ru) => {
    function P_(e) {
      return this.__data__.get(e);
    }
    ru.exports = P_;
  });
  var ou = d((h1, iu) => {
    function N_(e) {
      return this.__data__.has(e);
    }
    iu.exports = N_;
  });
  var et = d((v1, au) => {
    function D_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    au.exports = D_;
  });
  var yi = d((E1, su) => {
    var M_ = ft(),
      F_ = et(),
      q_ = "[object AsyncFunction]",
      k_ = "[object Function]",
      X_ = "[object GeneratorFunction]",
      G_ = "[object Proxy]";
    function U_(e) {
      if (!F_(e)) return !1;
      var t = M_(e);
      return t == k_ || t == X_ || t == q_ || t == G_;
    }
    su.exports = U_;
  });
  var cu = d((m1, uu) => {
    var V_ = He(),
      W_ = V_["__core-js_shared__"];
    uu.exports = W_;
  });
  var du = d((y1, fu) => {
    var _i = cu(),
      lu = (function () {
        var e = /[^.]+$/.exec((_i && _i.keys && _i.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function H_(e) {
      return !!lu && lu in e;
    }
    fu.exports = H_;
  });
  var Ii = d((_1, pu) => {
    var B_ = Function.prototype,
      z_ = B_.toString;
    function K_(e) {
      if (e != null) {
        try {
          return z_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    pu.exports = K_;
  });
  var hu = d((I1, gu) => {
    var j_ = yi(),
      Y_ = du(),
      Q_ = et(),
      $_ = Ii(),
      Z_ = /[\\^$.*+?()[\]{}|]/g,
      J_ = /^\[object .+?Constructor\]$/,
      eI = Function.prototype,
      tI = Object.prototype,
      rI = eI.toString,
      nI = tI.hasOwnProperty,
      iI = RegExp(
        "^" +
          rI
            .call(nI)
            .replace(Z_, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function oI(e) {
      if (!Q_(e) || Y_(e)) return !1;
      var t = j_(e) ? iI : J_;
      return t.test($_(e));
    }
    gu.exports = oI;
  });
  var Eu = d((T1, vu) => {
    function aI(e, t) {
      return e?.[t];
    }
    vu.exports = aI;
  });
  var dt = d((b1, mu) => {
    var sI = hu(),
      uI = Eu();
    function cI(e, t) {
      var r = uI(e, t);
      return sI(r) ? r : void 0;
    }
    mu.exports = cI;
  });
  var Kr = d((A1, yu) => {
    var lI = dt(),
      fI = He(),
      dI = lI(fI, "Map");
    yu.exports = dI;
  });
  var ur = d((w1, _u) => {
    var pI = dt(),
      gI = pI(Object, "create");
    _u.exports = gI;
  });
  var bu = d((O1, Tu) => {
    var Iu = ur();
    function hI() {
      (this.__data__ = Iu ? Iu(null) : {}), (this.size = 0);
    }
    Tu.exports = hI;
  });
  var wu = d((S1, Au) => {
    function vI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Au.exports = vI;
  });
  var Su = d((x1, Ou) => {
    var EI = ur(),
      mI = "__lodash_hash_undefined__",
      yI = Object.prototype,
      _I = yI.hasOwnProperty;
    function II(e) {
      var t = this.__data__;
      if (EI) {
        var r = t[e];
        return r === mI ? void 0 : r;
      }
      return _I.call(t, e) ? t[e] : void 0;
    }
    Ou.exports = II;
  });
  var Ru = d((R1, xu) => {
    var TI = ur(),
      bI = Object.prototype,
      AI = bI.hasOwnProperty;
    function wI(e) {
      var t = this.__data__;
      return TI ? t[e] !== void 0 : AI.call(t, e);
    }
    xu.exports = wI;
  });
  var Lu = d((C1, Cu) => {
    var OI = ur(),
      SI = "__lodash_hash_undefined__";
    function xI(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = OI && t === void 0 ? SI : t),
        this
      );
    }
    Cu.exports = xI;
  });
  var Nu = d((L1, Pu) => {
    var RI = bu(),
      CI = wu(),
      LI = Su(),
      PI = Ru(),
      NI = Lu();
    function Dt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Dt.prototype.clear = RI;
    Dt.prototype.delete = CI;
    Dt.prototype.get = LI;
    Dt.prototype.has = PI;
    Dt.prototype.set = NI;
    Pu.exports = Dt;
  });
  var Fu = d((P1, Mu) => {
    var Du = Nu(),
      DI = sr(),
      MI = Kr();
    function FI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Du(),
          map: new (MI || DI)(),
          string: new Du(),
        });
    }
    Mu.exports = FI;
  });
  var ku = d((N1, qu) => {
    function qI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    qu.exports = qI;
  });
  var cr = d((D1, Xu) => {
    var kI = ku();
    function XI(e, t) {
      var r = e.__data__;
      return kI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Xu.exports = XI;
  });
  var Uu = d((M1, Gu) => {
    var GI = cr();
    function UI(e) {
      var t = GI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Gu.exports = UI;
  });
  var Wu = d((F1, Vu) => {
    var VI = cr();
    function WI(e) {
      return VI(this, e).get(e);
    }
    Vu.exports = WI;
  });
  var Bu = d((q1, Hu) => {
    var HI = cr();
    function BI(e) {
      return HI(this, e).has(e);
    }
    Hu.exports = BI;
  });
  var Ku = d((k1, zu) => {
    var zI = cr();
    function KI(e, t) {
      var r = zI(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    zu.exports = KI;
  });
  var jr = d((X1, ju) => {
    var jI = Fu(),
      YI = Uu(),
      QI = Wu(),
      $I = Bu(),
      ZI = Ku();
    function Mt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Mt.prototype.clear = jI;
    Mt.prototype.delete = YI;
    Mt.prototype.get = QI;
    Mt.prototype.has = $I;
    Mt.prototype.set = ZI;
    ju.exports = Mt;
  });
  var Qu = d((G1, Yu) => {
    var JI = sr(),
      eT = Kr(),
      tT = jr(),
      rT = 200;
    function nT(e, t) {
      var r = this.__data__;
      if (r instanceof JI) {
        var n = r.__data__;
        if (!eT || n.length < rT - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new tT(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Yu.exports = nT;
  });
  var Ti = d((U1, $u) => {
    var iT = sr(),
      oT = Js(),
      aT = tu(),
      sT = nu(),
      uT = ou(),
      cT = Qu();
    function Ft(e) {
      var t = (this.__data__ = new iT(e));
      this.size = t.size;
    }
    Ft.prototype.clear = oT;
    Ft.prototype.delete = aT;
    Ft.prototype.get = sT;
    Ft.prototype.has = uT;
    Ft.prototype.set = cT;
    $u.exports = Ft;
  });
  var Ju = d((V1, Zu) => {
    var lT = "__lodash_hash_undefined__";
    function fT(e) {
      return this.__data__.set(e, lT), this;
    }
    Zu.exports = fT;
  });
  var tc = d((W1, ec) => {
    function dT(e) {
      return this.__data__.has(e);
    }
    ec.exports = dT;
  });
  var nc = d((H1, rc) => {
    var pT = jr(),
      gT = Ju(),
      hT = tc();
    function Yr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new pT(); ++t < r; ) this.add(e[t]);
    }
    Yr.prototype.add = Yr.prototype.push = gT;
    Yr.prototype.has = hT;
    rc.exports = Yr;
  });
  var oc = d((B1, ic) => {
    function vT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ic.exports = vT;
  });
  var sc = d((z1, ac) => {
    function ET(e, t) {
      return e.has(t);
    }
    ac.exports = ET;
  });
  var bi = d((K1, uc) => {
    var mT = nc(),
      yT = oc(),
      _T = sc(),
      IT = 1,
      TT = 2;
    function bT(e, t, r, n, o, i) {
      var a = r & IT,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var f = i.get(e),
        _ = i.get(t);
      if (f && _) return f == t && _ == e;
      var v = -1,
        h = !0,
        I = r & TT ? new mT() : void 0;
      for (i.set(e, t), i.set(t, e); ++v < u; ) {
        var x = e[v],
          A = t[v];
        if (n) var C = a ? n(A, x, v, t, e, i) : n(x, A, v, e, t, i);
        if (C !== void 0) {
          if (C) continue;
          h = !1;
          break;
        }
        if (I) {
          if (
            !yT(t, function (b, N) {
              if (!_T(I, N) && (x === b || o(x, b, r, n, i))) return I.push(N);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(x === A || o(x, A, r, n, i))) {
          h = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), h;
    }
    uc.exports = bT;
  });
  var lc = d((j1, cc) => {
    var AT = He(),
      wT = AT.Uint8Array;
    cc.exports = wT;
  });
  var dc = d((Y1, fc) => {
    function OT(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    fc.exports = OT;
  });
  var gc = d((Q1, pc) => {
    function ST(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    pc.exports = ST;
  });
  var yc = d(($1, mc) => {
    var hc = Rt(),
      vc = lc(),
      xT = zr(),
      RT = bi(),
      CT = dc(),
      LT = gc(),
      PT = 1,
      NT = 2,
      DT = "[object Boolean]",
      MT = "[object Date]",
      FT = "[object Error]",
      qT = "[object Map]",
      kT = "[object Number]",
      XT = "[object RegExp]",
      GT = "[object Set]",
      UT = "[object String]",
      VT = "[object Symbol]",
      WT = "[object ArrayBuffer]",
      HT = "[object DataView]",
      Ec = hc ? hc.prototype : void 0,
      Ai = Ec ? Ec.valueOf : void 0;
    function BT(e, t, r, n, o, i, a) {
      switch (r) {
        case HT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case WT:
          return !(e.byteLength != t.byteLength || !i(new vc(e), new vc(t)));
        case DT:
        case MT:
        case kT:
          return xT(+e, +t);
        case FT:
          return e.name == t.name && e.message == t.message;
        case XT:
        case UT:
          return e == t + "";
        case qT:
          var u = CT;
        case GT:
          var s = n & PT;
          if ((u || (u = LT), e.size != t.size && !s)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= NT), a.set(e, t);
          var _ = RT(u(e), u(t), n, o, i, a);
          return a.delete(e), _;
        case VT:
          if (Ai) return Ai.call(e) == Ai.call(t);
      }
      return !1;
    }
    mc.exports = BT;
  });
  var Qr = d((Z1, _c) => {
    function zT(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    _c.exports = zT;
  });
  var be = d((J1, Ic) => {
    var KT = Array.isArray;
    Ic.exports = KT;
  });
  var wi = d((e2, Tc) => {
    var jT = Qr(),
      YT = be();
    function QT(e, t, r) {
      var n = t(e);
      return YT(e) ? n : jT(n, r(e));
    }
    Tc.exports = QT;
  });
  var Ac = d((t2, bc) => {
    function $T(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    bc.exports = $T;
  });
  var Oi = d((r2, wc) => {
    function ZT() {
      return [];
    }
    wc.exports = ZT;
  });
  var Si = d((n2, Sc) => {
    var JT = Ac(),
      eb = Oi(),
      tb = Object.prototype,
      rb = tb.propertyIsEnumerable,
      Oc = Object.getOwnPropertySymbols,
      nb = Oc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                JT(Oc(e), function (t) {
                  return rb.call(e, t);
                }));
          }
        : eb;
    Sc.exports = nb;
  });
  var Rc = d((i2, xc) => {
    function ib(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    xc.exports = ib;
  });
  var Lc = d((o2, Cc) => {
    var ob = ft(),
      ab = ot(),
      sb = "[object Arguments]";
    function ub(e) {
      return ab(e) && ob(e) == sb;
    }
    Cc.exports = ub;
  });
  var lr = d((a2, Dc) => {
    var Pc = Lc(),
      cb = ot(),
      Nc = Object.prototype,
      lb = Nc.hasOwnProperty,
      fb = Nc.propertyIsEnumerable,
      db = Pc(
        (function () {
          return arguments;
        })()
      )
        ? Pc
        : function (e) {
            return cb(e) && lb.call(e, "callee") && !fb.call(e, "callee");
          };
    Dc.exports = db;
  });
  var Fc = d((s2, Mc) => {
    function pb() {
      return !1;
    }
    Mc.exports = pb;
  });
  var $r = d((fr, qt) => {
    var gb = He(),
      hb = Fc(),
      Xc = typeof fr == "object" && fr && !fr.nodeType && fr,
      qc = Xc && typeof qt == "object" && qt && !qt.nodeType && qt,
      vb = qc && qc.exports === Xc,
      kc = vb ? gb.Buffer : void 0,
      Eb = kc ? kc.isBuffer : void 0,
      mb = Eb || hb;
    qt.exports = mb;
  });
  var Zr = d((u2, Gc) => {
    var yb = 9007199254740991,
      _b = /^(?:0|[1-9]\d*)$/;
    function Ib(e, t) {
      var r = typeof e;
      return (
        (t = t ?? yb),
        !!t &&
          (r == "number" || (r != "symbol" && _b.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Gc.exports = Ib;
  });
  var Jr = d((c2, Uc) => {
    var Tb = 9007199254740991;
    function bb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tb;
    }
    Uc.exports = bb;
  });
  var Wc = d((l2, Vc) => {
    var Ab = ft(),
      wb = Jr(),
      Ob = ot(),
      Sb = "[object Arguments]",
      xb = "[object Array]",
      Rb = "[object Boolean]",
      Cb = "[object Date]",
      Lb = "[object Error]",
      Pb = "[object Function]",
      Nb = "[object Map]",
      Db = "[object Number]",
      Mb = "[object Object]",
      Fb = "[object RegExp]",
      qb = "[object Set]",
      kb = "[object String]",
      Xb = "[object WeakMap]",
      Gb = "[object ArrayBuffer]",
      Ub = "[object DataView]",
      Vb = "[object Float32Array]",
      Wb = "[object Float64Array]",
      Hb = "[object Int8Array]",
      Bb = "[object Int16Array]",
      zb = "[object Int32Array]",
      Kb = "[object Uint8Array]",
      jb = "[object Uint8ClampedArray]",
      Yb = "[object Uint16Array]",
      Qb = "[object Uint32Array]",
      ve = {};
    ve[Vb] =
      ve[Wb] =
      ve[Hb] =
      ve[Bb] =
      ve[zb] =
      ve[Kb] =
      ve[jb] =
      ve[Yb] =
      ve[Qb] =
        !0;
    ve[Sb] =
      ve[xb] =
      ve[Gb] =
      ve[Rb] =
      ve[Ub] =
      ve[Cb] =
      ve[Lb] =
      ve[Pb] =
      ve[Nb] =
      ve[Db] =
      ve[Mb] =
      ve[Fb] =
      ve[qb] =
      ve[kb] =
      ve[Xb] =
        !1;
    function $b(e) {
      return Ob(e) && wb(e.length) && !!ve[Ab(e)];
    }
    Vc.exports = $b;
  });
  var Bc = d((f2, Hc) => {
    function Zb(e) {
      return function (t) {
        return e(t);
      };
    }
    Hc.exports = Zb;
  });
  var Kc = d((dr, kt) => {
    var Jb = Jn(),
      zc = typeof dr == "object" && dr && !dr.nodeType && dr,
      pr = zc && typeof kt == "object" && kt && !kt.nodeType && kt,
      eA = pr && pr.exports === zc,
      xi = eA && Jb.process,
      tA = (function () {
        try {
          var e = pr && pr.require && pr.require("util").types;
          return e || (xi && xi.binding && xi.binding("util"));
        } catch {}
      })();
    kt.exports = tA;
  });
  var en = d((d2, Qc) => {
    var rA = Wc(),
      nA = Bc(),
      jc = Kc(),
      Yc = jc && jc.isTypedArray,
      iA = Yc ? nA(Yc) : rA;
    Qc.exports = iA;
  });
  var Ri = d((p2, $c) => {
    var oA = Rc(),
      aA = lr(),
      sA = be(),
      uA = $r(),
      cA = Zr(),
      lA = en(),
      fA = Object.prototype,
      dA = fA.hasOwnProperty;
    function pA(e, t) {
      var r = sA(e),
        n = !r && aA(e),
        o = !r && !n && uA(e),
        i = !r && !n && !o && lA(e),
        a = r || n || o || i,
        u = a ? oA(e.length, String) : [],
        s = u.length;
      for (var f in e)
        (t || dA.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              cA(f, s))
          ) &&
          u.push(f);
      return u;
    }
    $c.exports = pA;
  });
  var tn = d((g2, Zc) => {
    var gA = Object.prototype;
    function hA(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || gA;
      return e === r;
    }
    Zc.exports = hA;
  });
  var el = d((h2, Jc) => {
    var vA = ei(),
      EA = vA(Object.keys, Object);
    Jc.exports = EA;
  });
  var rn = d((v2, tl) => {
    var mA = tn(),
      yA = el(),
      _A = Object.prototype,
      IA = _A.hasOwnProperty;
    function TA(e) {
      if (!mA(e)) return yA(e);
      var t = [];
      for (var r in Object(e)) IA.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    tl.exports = TA;
  });
  var yt = d((E2, rl) => {
    var bA = yi(),
      AA = Jr();
    function wA(e) {
      return e != null && AA(e.length) && !bA(e);
    }
    rl.exports = wA;
  });
  var gr = d((m2, nl) => {
    var OA = Ri(),
      SA = rn(),
      xA = yt();
    function RA(e) {
      return xA(e) ? OA(e) : SA(e);
    }
    nl.exports = RA;
  });
  var ol = d((y2, il) => {
    var CA = wi(),
      LA = Si(),
      PA = gr();
    function NA(e) {
      return CA(e, PA, LA);
    }
    il.exports = NA;
  });
  var ul = d((_2, sl) => {
    var al = ol(),
      DA = 1,
      MA = Object.prototype,
      FA = MA.hasOwnProperty;
    function qA(e, t, r, n, o, i) {
      var a = r & DA,
        u = al(e),
        s = u.length,
        f = al(t),
        _ = f.length;
      if (s != _ && !a) return !1;
      for (var v = s; v--; ) {
        var h = u[v];
        if (!(a ? h in t : FA.call(t, h))) return !1;
      }
      var I = i.get(e),
        x = i.get(t);
      if (I && x) return I == t && x == e;
      var A = !0;
      i.set(e, t), i.set(t, e);
      for (var C = a; ++v < s; ) {
        h = u[v];
        var b = e[h],
          N = t[h];
        if (n) var L = a ? n(N, b, h, t, e, i) : n(b, N, h, e, t, i);
        if (!(L === void 0 ? b === N || o(b, N, r, n, i) : L)) {
          A = !1;
          break;
        }
        C || (C = h == "constructor");
      }
      if (A && !C) {
        var k = e.constructor,
          G = t.constructor;
        k != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof k == "function" &&
            k instanceof k &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (A = !1);
      }
      return i.delete(e), i.delete(t), A;
    }
    sl.exports = qA;
  });
  var ll = d((I2, cl) => {
    var kA = dt(),
      XA = He(),
      GA = kA(XA, "DataView");
    cl.exports = GA;
  });
  var dl = d((T2, fl) => {
    var UA = dt(),
      VA = He(),
      WA = UA(VA, "Promise");
    fl.exports = WA;
  });
  var gl = d((b2, pl) => {
    var HA = dt(),
      BA = He(),
      zA = HA(BA, "Set");
    pl.exports = zA;
  });
  var Ci = d((A2, hl) => {
    var KA = dt(),
      jA = He(),
      YA = KA(jA, "WeakMap");
    hl.exports = YA;
  });
  var nn = d((w2, Tl) => {
    var Li = ll(),
      Pi = Kr(),
      Ni = dl(),
      Di = gl(),
      Mi = Ci(),
      Il = ft(),
      Xt = Ii(),
      vl = "[object Map]",
      QA = "[object Object]",
      El = "[object Promise]",
      ml = "[object Set]",
      yl = "[object WeakMap]",
      _l = "[object DataView]",
      $A = Xt(Li),
      ZA = Xt(Pi),
      JA = Xt(Ni),
      e0 = Xt(Di),
      t0 = Xt(Mi),
      _t = Il;
    ((Li && _t(new Li(new ArrayBuffer(1))) != _l) ||
      (Pi && _t(new Pi()) != vl) ||
      (Ni && _t(Ni.resolve()) != El) ||
      (Di && _t(new Di()) != ml) ||
      (Mi && _t(new Mi()) != yl)) &&
      (_t = function (e) {
        var t = Il(e),
          r = t == QA ? e.constructor : void 0,
          n = r ? Xt(r) : "";
        if (n)
          switch (n) {
            case $A:
              return _l;
            case ZA:
              return vl;
            case JA:
              return El;
            case e0:
              return ml;
            case t0:
              return yl;
          }
        return t;
      });
    Tl.exports = _t;
  });
  var Cl = d((O2, Rl) => {
    var Fi = Ti(),
      r0 = bi(),
      n0 = yc(),
      i0 = ul(),
      bl = nn(),
      Al = be(),
      wl = $r(),
      o0 = en(),
      a0 = 1,
      Ol = "[object Arguments]",
      Sl = "[object Array]",
      on = "[object Object]",
      s0 = Object.prototype,
      xl = s0.hasOwnProperty;
    function u0(e, t, r, n, o, i) {
      var a = Al(e),
        u = Al(t),
        s = a ? Sl : bl(e),
        f = u ? Sl : bl(t);
      (s = s == Ol ? on : s), (f = f == Ol ? on : f);
      var _ = s == on,
        v = f == on,
        h = s == f;
      if (h && wl(e)) {
        if (!wl(t)) return !1;
        (a = !0), (_ = !1);
      }
      if (h && !_)
        return (
          i || (i = new Fi()),
          a || o0(e) ? r0(e, t, r, n, o, i) : n0(e, t, s, r, n, o, i)
        );
      if (!(r & a0)) {
        var I = _ && xl.call(e, "__wrapped__"),
          x = v && xl.call(t, "__wrapped__");
        if (I || x) {
          var A = I ? e.value() : e,
            C = x ? t.value() : t;
          return i || (i = new Fi()), o(A, C, r, n, i);
        }
      }
      return h ? (i || (i = new Fi()), i0(e, t, r, n, o, i)) : !1;
    }
    Rl.exports = u0;
  });
  var qi = d((S2, Nl) => {
    var c0 = Cl(),
      Ll = ot();
    function Pl(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Ll(e) && !Ll(t))
        ? e !== e && t !== t
        : c0(e, t, r, n, Pl, o);
    }
    Nl.exports = Pl;
  });
  var Ml = d((x2, Dl) => {
    var l0 = Ti(),
      f0 = qi(),
      d0 = 1,
      p0 = 2;
    function g0(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var u = r[o];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        u = r[o];
        var s = u[0],
          f = e[s],
          _ = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var v = new l0();
          if (n) var h = n(f, _, s, e, t, v);
          if (!(h === void 0 ? f0(_, f, d0 | p0, n, v) : h)) return !1;
        }
      }
      return !0;
    }
    Dl.exports = g0;
  });
  var ki = d((R2, Fl) => {
    var h0 = et();
    function v0(e) {
      return e === e && !h0(e);
    }
    Fl.exports = v0;
  });
  var kl = d((C2, ql) => {
    var E0 = ki(),
      m0 = gr();
    function y0(e) {
      for (var t = m0(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, E0(o)];
      }
      return t;
    }
    ql.exports = y0;
  });
  var Xi = d((L2, Xl) => {
    function _0(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Xl.exports = _0;
  });
  var Ul = d((P2, Gl) => {
    var I0 = Ml(),
      T0 = kl(),
      b0 = Xi();
    function A0(e) {
      var t = T0(e);
      return t.length == 1 && t[0][2]
        ? b0(t[0][0], t[0][1])
        : function (r) {
            return r === e || I0(r, e, t);
          };
    }
    Gl.exports = A0;
  });
  var hr = d((N2, Vl) => {
    var w0 = ft(),
      O0 = ot(),
      S0 = "[object Symbol]";
    function x0(e) {
      return typeof e == "symbol" || (O0(e) && w0(e) == S0);
    }
    Vl.exports = x0;
  });
  var an = d((D2, Wl) => {
    var R0 = be(),
      C0 = hr(),
      L0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      P0 = /^\w*$/;
    function N0(e, t) {
      if (R0(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        C0(e)
        ? !0
        : P0.test(e) || !L0.test(e) || (t != null && e in Object(t));
    }
    Wl.exports = N0;
  });
  var zl = d((M2, Bl) => {
    var Hl = jr(),
      D0 = "Expected a function";
    function Gi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(D0);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (Gi.Cache || Hl)()), r;
    }
    Gi.Cache = Hl;
    Bl.exports = Gi;
  });
  var jl = d((F2, Kl) => {
    var M0 = zl(),
      F0 = 500;
    function q0(e) {
      var t = M0(e, function (n) {
          return r.size === F0 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Kl.exports = q0;
  });
  var Ql = d((q2, Yl) => {
    var k0 = jl(),
      X0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      G0 = /\\(\\)?/g,
      U0 = k0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(X0, function (r, n, o, i) {
            t.push(o ? i.replace(G0, "$1") : n || r);
          }),
          t
        );
      });
    Yl.exports = U0;
  });
  var Ui = d((k2, $l) => {
    function V0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    $l.exports = V0;
  });
  var nf = d((X2, rf) => {
    var Zl = Rt(),
      W0 = Ui(),
      H0 = be(),
      B0 = hr(),
      z0 = 1 / 0,
      Jl = Zl ? Zl.prototype : void 0,
      ef = Jl ? Jl.toString : void 0;
    function tf(e) {
      if (typeof e == "string") return e;
      if (H0(e)) return W0(e, tf) + "";
      if (B0(e)) return ef ? ef.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -z0 ? "-0" : t;
    }
    rf.exports = tf;
  });
  var af = d((G2, of) => {
    var K0 = nf();
    function j0(e) {
      return e == null ? "" : K0(e);
    }
    of.exports = j0;
  });
  var vr = d((U2, sf) => {
    var Y0 = be(),
      Q0 = an(),
      $0 = Ql(),
      Z0 = af();
    function J0(e, t) {
      return Y0(e) ? e : Q0(e, t) ? [e] : $0(Z0(e));
    }
    sf.exports = J0;
  });
  var Gt = d((V2, uf) => {
    var ew = hr(),
      tw = 1 / 0;
    function rw(e) {
      if (typeof e == "string" || ew(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -tw ? "-0" : t;
    }
    uf.exports = rw;
  });
  var sn = d((W2, cf) => {
    var nw = vr(),
      iw = Gt();
    function ow(e, t) {
      t = nw(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[iw(t[r++])];
      return r && r == n ? e : void 0;
    }
    cf.exports = ow;
  });
  var un = d((H2, lf) => {
    var aw = sn();
    function sw(e, t, r) {
      var n = e == null ? void 0 : aw(e, t);
      return n === void 0 ? r : n;
    }
    lf.exports = sw;
  });
  var df = d((B2, ff) => {
    function uw(e, t) {
      return e != null && t in Object(e);
    }
    ff.exports = uw;
  });
  var gf = d((z2, pf) => {
    var cw = vr(),
      lw = lr(),
      fw = be(),
      dw = Zr(),
      pw = Jr(),
      gw = Gt();
    function hw(e, t, r) {
      t = cw(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = gw(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && pw(o) && dw(a, o) && (fw(e) || lw(e)));
    }
    pf.exports = hw;
  });
  var vf = d((K2, hf) => {
    var vw = df(),
      Ew = gf();
    function mw(e, t) {
      return e != null && Ew(e, t, vw);
    }
    hf.exports = mw;
  });
  var mf = d((j2, Ef) => {
    var yw = qi(),
      _w = un(),
      Iw = vf(),
      Tw = an(),
      bw = ki(),
      Aw = Xi(),
      ww = Gt(),
      Ow = 1,
      Sw = 2;
    function xw(e, t) {
      return Tw(e) && bw(t)
        ? Aw(ww(e), t)
        : function (r) {
            var n = _w(r, e);
            return n === void 0 && n === t ? Iw(r, e) : yw(t, n, Ow | Sw);
          };
    }
    Ef.exports = xw;
  });
  var cn = d((Y2, yf) => {
    function Rw(e) {
      return e;
    }
    yf.exports = Rw;
  });
  var Vi = d((Q2, _f) => {
    function Cw(e) {
      return function (t) {
        return t?.[e];
      };
    }
    _f.exports = Cw;
  });
  var Tf = d(($2, If) => {
    var Lw = sn();
    function Pw(e) {
      return function (t) {
        return Lw(t, e);
      };
    }
    If.exports = Pw;
  });
  var Af = d((Z2, bf) => {
    var Nw = Vi(),
      Dw = Tf(),
      Mw = an(),
      Fw = Gt();
    function qw(e) {
      return Mw(e) ? Nw(Fw(e)) : Dw(e);
    }
    bf.exports = qw;
  });
  var pt = d((J2, wf) => {
    var kw = Ul(),
      Xw = mf(),
      Gw = cn(),
      Uw = be(),
      Vw = Af();
    function Ww(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? Gw
        : typeof e == "object"
        ? Uw(e)
          ? Xw(e[0], e[1])
          : kw(e)
        : Vw(e);
    }
    wf.exports = Ww;
  });
  var Wi = d((eq, Of) => {
    var Hw = pt(),
      Bw = yt(),
      zw = gr();
    function Kw(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!Bw(t)) {
          var i = Hw(r, 3);
          (t = zw(t)),
            (r = function (u) {
              return i(o[u], u, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Of.exports = Kw;
  });
  var Hi = d((tq, Sf) => {
    function jw(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    Sf.exports = jw;
  });
  var Rf = d((rq, xf) => {
    var Yw = /\s/;
    function Qw(e) {
      for (var t = e.length; t-- && Yw.test(e.charAt(t)); );
      return t;
    }
    xf.exports = Qw;
  });
  var Lf = d((nq, Cf) => {
    var $w = Rf(),
      Zw = /^\s+/;
    function Jw(e) {
      return e && e.slice(0, $w(e) + 1).replace(Zw, "");
    }
    Cf.exports = Jw;
  });
  var ln = d((iq, Df) => {
    var eO = Lf(),
      Pf = et(),
      tO = hr(),
      Nf = 0 / 0,
      rO = /^[-+]0x[0-9a-f]+$/i,
      nO = /^0b[01]+$/i,
      iO = /^0o[0-7]+$/i,
      oO = parseInt;
    function aO(e) {
      if (typeof e == "number") return e;
      if (tO(e)) return Nf;
      if (Pf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Pf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = eO(e);
      var r = nO.test(e);
      return r || iO.test(e) ? oO(e.slice(2), r ? 2 : 8) : rO.test(e) ? Nf : +e;
    }
    Df.exports = aO;
  });
  var qf = d((oq, Ff) => {
    var sO = ln(),
      Mf = 1 / 0,
      uO = 17976931348623157e292;
    function cO(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = sO(e)), e === Mf || e === -Mf)) {
        var t = e < 0 ? -1 : 1;
        return t * uO;
      }
      return e === e ? e : 0;
    }
    Ff.exports = cO;
  });
  var Bi = d((aq, kf) => {
    var lO = qf();
    function fO(e) {
      var t = lO(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    kf.exports = fO;
  });
  var Gf = d((sq, Xf) => {
    var dO = Hi(),
      pO = pt(),
      gO = Bi(),
      hO = Math.max;
    function vO(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : gO(r);
      return o < 0 && (o = hO(n + o, 0)), dO(e, pO(t, 3), o);
    }
    Xf.exports = vO;
  });
  var zi = d((uq, Uf) => {
    var EO = Wi(),
      mO = Gf(),
      yO = EO(mO);
    Uf.exports = yO;
  });
  var Hf = {};
  Pe(Hf, {
    ELEMENT_MATCHES: () => _O,
    FLEX_PREFIXED: () => Ki,
    IS_BROWSER_ENV: () => ze,
    TRANSFORM_PREFIXED: () => gt,
    TRANSFORM_STYLE_PREFIXED: () => dn,
    withBrowser: () => fn,
  });
  var Wf,
    ze,
    fn,
    _O,
    Ki,
    gt,
    Vf,
    dn,
    pn = Ee(() => {
      "use strict";
      (Wf = le(zi())),
        (ze = typeof window < "u"),
        (fn = (e, t) => (ze ? e() : t)),
        (_O = fn(() =>
          (0, Wf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ki = fn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o];
              if (((e.style.display = i), e.style.display === i)) return i;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (gt = fn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o] + r;
              if (e.style[i] !== void 0) return i;
            }
          }
          return "transform";
        }, "transform")),
        (Vf = gt.split("transform")[0]),
        (dn = Vf ? Vf + "TransformStyle" : "transformStyle");
    });
  var ji = d((cq, Yf) => {
    var IO = 4,
      TO = 0.001,
      bO = 1e-7,
      AO = 10,
      Er = 11,
      gn = 1 / (Er - 1),
      wO = typeof Float32Array == "function";
    function Bf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function zf(e, t) {
      return 3 * t - 6 * e;
    }
    function Kf(e) {
      return 3 * e;
    }
    function hn(e, t, r) {
      return ((Bf(t, r) * e + zf(t, r)) * e + Kf(t)) * e;
    }
    function jf(e, t, r) {
      return 3 * Bf(t, r) * e * e + 2 * zf(t, r) * e + Kf(t);
    }
    function OO(e, t, r, n, o) {
      var i,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (i = hn(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > bO && ++u < AO);
      return a;
    }
    function SO(e, t, r, n) {
      for (var o = 0; o < IO; ++o) {
        var i = jf(t, r, n);
        if (i === 0) return t;
        var a = hn(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    Yf.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = wO ? new Float32Array(Er) : new Array(Er);
      if (t !== r || n !== o)
        for (var a = 0; a < Er; ++a) i[a] = hn(a * gn, t, n);
      function u(s) {
        for (var f = 0, _ = 1, v = Er - 1; _ !== v && i[_] <= s; ++_) f += gn;
        --_;
        var h = (s - i[_]) / (i[_ + 1] - i[_]),
          I = f + h * gn,
          x = jf(I, t, n);
        return x >= TO ? SO(s, I, t, n) : x === 0 ? I : OO(s, f, f + gn, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : hn(u(f), r, o);
      };
    };
  });
  var yr = {};
  Pe(yr, {
    bounce: () => cS,
    bouncePast: () => lS,
    ease: () => xO,
    easeIn: () => RO,
    easeInOut: () => LO,
    easeOut: () => CO,
    inBack: () => eS,
    inCirc: () => QO,
    inCubic: () => MO,
    inElastic: () => nS,
    inExpo: () => KO,
    inOutBack: () => rS,
    inOutCirc: () => ZO,
    inOutCubic: () => qO,
    inOutElastic: () => oS,
    inOutExpo: () => YO,
    inOutQuad: () => DO,
    inOutQuart: () => GO,
    inOutQuint: () => WO,
    inOutSine: () => zO,
    inQuad: () => PO,
    inQuart: () => kO,
    inQuint: () => UO,
    inSine: () => HO,
    outBack: () => tS,
    outBounce: () => JO,
    outCirc: () => $O,
    outCubic: () => FO,
    outElastic: () => iS,
    outExpo: () => jO,
    outQuad: () => NO,
    outQuart: () => XO,
    outQuint: () => VO,
    outSine: () => BO,
    swingFrom: () => sS,
    swingFromTo: () => aS,
    swingTo: () => uS,
  });
  function PO(e) {
    return Math.pow(e, 2);
  }
  function NO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function DO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function MO(e) {
    return Math.pow(e, 3);
  }
  function FO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function qO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function kO(e) {
    return Math.pow(e, 4);
  }
  function XO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function GO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function UO(e) {
    return Math.pow(e, 5);
  }
  function VO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function WO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function HO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function BO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function zO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function KO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function jO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function YO(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function QO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function $O(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function ZO(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function JO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function eS(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function tS(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function rS(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function nS(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function iS(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function oS(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function aS(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function sS(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function uS(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function cS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function lS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var mr,
    at,
    xO,
    RO,
    CO,
    LO,
    Yi = Ee(() => {
      "use strict";
      (mr = le(ji())),
        (at = 1.70158),
        (xO = (0, mr.default)(0.25, 0.1, 0.25, 1)),
        (RO = (0, mr.default)(0.42, 0, 1, 1)),
        (CO = (0, mr.default)(0, 0, 0.58, 1)),
        (LO = (0, mr.default)(0.42, 0, 0.58, 1));
    });
  var $f = {};
  Pe($f, {
    applyEasing: () => dS,
    createBezierEasing: () => fS,
    optimizeFloat: () => _r,
  });
  function _r(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      o = Number(Math.round(e * n) / n);
    return Math.abs(o) > 1e-4 ? o : 0;
  }
  function fS(e) {
    return (0, Qf.default)(...e);
  }
  function dS(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : _r(r ? (t > 0 ? r(t) : t) : t > 0 && e && yr[e] ? yr[e](t) : t);
  }
  var Qf,
    Qi = Ee(() => {
      "use strict";
      Yi();
      Qf = le(ji());
    });
  var ed = {};
  Pe(ed, {
    createElementState: () => Jf,
    ixElements: () => OS,
    mergeActionState: () => $i,
  });
  function Jf(e, t, r, n, o) {
    let i =
      r === pS ? (0, Ut.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, Ut.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
  }
  function $i(e, t, r, n, o) {
    let i = xS(o);
    return (0, Ut.mergeIn)(e, [t, wS, r], n, i);
  }
  function xS(e) {
    let { config: t } = e;
    return SS.reduce((r, n) => {
      let o = n[0],
        i = n[1],
        a = t[o],
        u = t[i];
      return a != null && u != null && (r[i] = u), r;
    }, {});
  }
  var Ut,
    fq,
    pS,
    dq,
    gS,
    hS,
    vS,
    ES,
    mS,
    yS,
    _S,
    IS,
    TS,
    bS,
    AS,
    Zf,
    wS,
    OS,
    SS,
    td = Ee(() => {
      "use strict";
      Ut = le(Pt());
      De();
      ({
        HTML_ELEMENT: fq,
        PLAIN_OBJECT: pS,
        ABSTRACT_NODE: dq,
        CONFIG_X_VALUE: gS,
        CONFIG_Y_VALUE: hS,
        CONFIG_Z_VALUE: vS,
        CONFIG_VALUE: ES,
        CONFIG_X_UNIT: mS,
        CONFIG_Y_UNIT: yS,
        CONFIG_Z_UNIT: _S,
        CONFIG_UNIT: IS,
      } = we),
        ({
          IX2_SESSION_STOPPED: TS,
          IX2_INSTANCE_ADDED: bS,
          IX2_ELEMENT_STATE_CHANGED: AS,
        } = Te),
        (Zf = {}),
        (wS = "refState"),
        (OS = (e = Zf, t = {}) => {
          switch (t.type) {
            case TS:
              return Zf;
            case bS: {
              let {
                  elementId: r,
                  element: n,
                  origin: o,
                  actionItem: i,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = i,
                s = e;
              return (
                (0, Ut.getIn)(s, [r, n]) !== n && (s = Jf(s, n, a, r, i)),
                $i(s, r, u, o, i)
              );
            }
            case AS: {
              let {
                elementId: r,
                actionTypeId: n,
                current: o,
                actionItem: i,
              } = t.payload;
              return $i(e, r, n, o, i);
            }
            default:
              return e;
          }
        });
      SS = [
        [gS, mS],
        [hS, yS],
        [vS, _S],
        [ES, IS],
      ];
    });
  var rd = d((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    function RS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    RS(Zi, {
      clearPlugin: function () {
        return FS;
      },
      createPluginInstance: function () {
        return DS;
      },
      getPluginConfig: function () {
        return CS;
      },
      getPluginDestination: function () {
        return NS;
      },
      getPluginDuration: function () {
        return LS;
      },
      getPluginOrigin: function () {
        return PS;
      },
      renderPlugin: function () {
        return MS;
      },
    });
    var CS = (e) => e.value,
      LS = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      PS = (e) => e || { value: 0 },
      NS = (e) => ({ value: e.value }),
      DS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      MS = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      FS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var id = d((Ji) => {
    "use strict";
    Object.defineProperty(Ji, "__esModule", { value: !0 });
    function qS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    qS(Ji, {
      clearPlugin: function () {
        return KS;
      },
      createPluginInstance: function () {
        return BS;
      },
      getPluginConfig: function () {
        return US;
      },
      getPluginDestination: function () {
        return HS;
      },
      getPluginDuration: function () {
        return VS;
      },
      getPluginOrigin: function () {
        return WS;
      },
      renderPlugin: function () {
        return zS;
      },
    });
    var kS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      XS = () => window.Webflow.require("spline"),
      GS = (e, t) => e.filter((r) => !t.includes(r)),
      US = (e, t) => e.value[t],
      VS = () => null,
      nd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      WS = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = GS(n, i);
          return a.length ? a.reduce((s, f) => ((s[f] = nd[f]), s), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = nd[a]), i), {});
      },
      HS = (e) => e.value,
      BS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? kS(r) : null;
      },
      zS = (e, t, r) => {
        let n = XS(),
          o = n.getInstance(e),
          i = r.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = i && u.findObjectById(i);
            if (!s) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (s.position.x = f.positionX),
              f.positionY != null && (s.position.y = f.positionY),
              f.positionZ != null && (s.position.z = f.positionZ),
              f.rotationX != null && (s.rotation.x = f.rotationX),
              f.rotationY != null && (s.rotation.y = f.rotationY),
              f.rotationZ != null && (s.rotation.z = f.rotationZ),
              f.scaleX != null && (s.scale.x = f.scaleX),
              f.scaleY != null && (s.scale.y = f.scaleY),
              f.scaleZ != null && (s.scale.z = f.scaleZ);
          };
        o ? a(o.spline) : n.setLoadHandler(e, a);
      },
      KS = () => null;
  });
  var to = d((eo) => {
    "use strict";
    Object.defineProperty(eo, "__esModule", { value: !0 });
    Object.defineProperty(eo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return jS;
      },
    });
    var od = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function jS(e) {
      let t,
        r,
        n,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof od[i] == "string" ? od[i].toLowerCase() : null) || i;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (o = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (o = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (o = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          _ = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100;
        o = parseFloat(s[3]);
        let h = (1 - Math.abs(2 * v - 1)) * _,
          I = h * (1 - Math.abs(((f / 60) % 2) - 1)),
          x = v - h / 2,
          A,
          C,
          b;
        f >= 0 && f < 60
          ? ((A = h), (C = I), (b = 0))
          : f >= 60 && f < 120
          ? ((A = I), (C = h), (b = 0))
          : f >= 120 && f < 180
          ? ((A = 0), (C = h), (b = I))
          : f >= 180 && f < 240
          ? ((A = 0), (C = I), (b = h))
          : f >= 240 && f < 300
          ? ((A = I), (C = 0), (b = h))
          : ((A = h), (C = 0), (b = I)),
          (t = Math.round((A + x) * 255)),
          (r = Math.round((C + x) * 255)),
          (n = Math.round((b + x) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          _ = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * v - 1)) * _,
          I = h * (1 - Math.abs(((f / 60) % 2) - 1)),
          x = v - h / 2,
          A,
          C,
          b;
        f >= 0 && f < 60
          ? ((A = h), (C = I), (b = 0))
          : f >= 60 && f < 120
          ? ((A = I), (C = h), (b = 0))
          : f >= 120 && f < 180
          ? ((A = 0), (C = h), (b = I))
          : f >= 180 && f < 240
          ? ((A = 0), (C = I), (b = h))
          : f >= 240 && f < 300
          ? ((A = I), (C = 0), (b = h))
          : ((A = h), (C = 0), (b = I)),
          (t = Math.round((A + x) * 255)),
          (r = Math.round((C + x) * 255)),
          (n = Math.round((b + x) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: o };
    }
  });
  var ad = d((ro) => {
    "use strict";
    Object.defineProperty(ro, "__esModule", { value: !0 });
    function YS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    YS(ro, {
      clearPlugin: function () {
        return nx;
      },
      createPluginInstance: function () {
        return tx;
      },
      getPluginConfig: function () {
        return $S;
      },
      getPluginDestination: function () {
        return ex;
      },
      getPluginDuration: function () {
        return ZS;
      },
      getPluginOrigin: function () {
        return JS;
      },
      renderPlugin: function () {
        return rx;
      },
    });
    var QS = to(),
      $S = (e, t) => e.value[t],
      ZS = () => null,
      JS = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          o = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(o, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, QS.normalizeColor)(o);
      },
      ex = (e) => e.value,
      tx = () => null,
      rx = (e, t, r) => {
        let n = r.config.target.objectId,
          o = r.config.value.unit,
          { PLUGIN_VARIABLE: i } = t,
          { size: a, red: u, green: s, blue: f, alpha: _ } = i,
          v;
        a != null && (v = a + o),
          u != null &&
            f != null &&
            s != null &&
            _ != null &&
            (v = `rgba(${u}, ${s}, ${f}, ${_})`),
          v != null && document.documentElement.style.setProperty(n, v);
      },
      nx = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var ud = d((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    Object.defineProperty(oo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return sx;
      },
    });
    var no = (De(), Qe(ds)),
      ix = io(rd()),
      ox = io(id()),
      ax = io(ad());
    function sd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (sd = function (n) {
        return n ? r : t;
      })(e);
    }
    function io(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = sd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var sx = new Map([
      [no.ActionTypeConsts.PLUGIN_LOTTIE, { ...ix }],
      [no.ActionTypeConsts.PLUGIN_SPLINE, { ...ox }],
      [no.ActionTypeConsts.PLUGIN_VARIABLE, { ...ax }],
    ]);
  });
  var cd = {};
  Pe(cd, {
    clearPlugin: () => fo,
    createPluginInstance: () => cx,
    getPluginConfig: () => so,
    getPluginDestination: () => co,
    getPluginDuration: () => ux,
    getPluginOrigin: () => uo,
    isPluginType: () => It,
    renderPlugin: () => lo,
  });
  function It(e) {
    return ao.pluginMethodMap.has(e);
  }
  var ao,
    Tt,
    so,
    uo,
    ux,
    co,
    cx,
    lo,
    fo,
    po = Ee(() => {
      "use strict";
      pn();
      ao = le(ud());
      (Tt = (e) => (t) => {
        if (!ze) return () => null;
        let r = ao.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (so = Tt("getPluginConfig")),
        (uo = Tt("getPluginOrigin")),
        (ux = Tt("getPluginDuration")),
        (co = Tt("getPluginDestination")),
        (cx = Tt("createPluginInstance")),
        (lo = Tt("renderPlugin")),
        (fo = Tt("clearPlugin"));
    });
  var fd = d((yq, ld) => {
    function lx(e, t) {
      return e == null || e !== e ? t : e;
    }
    ld.exports = lx;
  });
  var pd = d((_q, dd) => {
    function fx(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    dd.exports = fx;
  });
  var hd = d((Iq, gd) => {
    function dx(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++o];
          if (r(i[s], s, i) === !1) break;
        }
        return t;
      };
    }
    gd.exports = dx;
  });
  var Ed = d((Tq, vd) => {
    var px = hd(),
      gx = px();
    vd.exports = gx;
  });
  var go = d((bq, md) => {
    var hx = Ed(),
      vx = gr();
    function Ex(e, t) {
      return e && hx(e, t, vx);
    }
    md.exports = Ex;
  });
  var _d = d((Aq, yd) => {
    var mx = yt();
    function yx(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!mx(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    yd.exports = yx;
  });
  var ho = d((wq, Id) => {
    var _x = go(),
      Ix = _d(),
      Tx = Ix(_x);
    Id.exports = Tx;
  });
  var bd = d((Oq, Td) => {
    function bx(e, t, r, n, o) {
      return (
        o(e, function (i, a, u) {
          r = n ? ((n = !1), i) : t(r, i, a, u);
        }),
        r
      );
    }
    Td.exports = bx;
  });
  var wd = d((Sq, Ad) => {
    var Ax = pd(),
      wx = ho(),
      Ox = pt(),
      Sx = bd(),
      xx = be();
    function Rx(e, t, r) {
      var n = xx(e) ? Ax : Sx,
        o = arguments.length < 3;
      return n(e, Ox(t, 4), r, o, wx);
    }
    Ad.exports = Rx;
  });
  var Sd = d((xq, Od) => {
    var Cx = Hi(),
      Lx = pt(),
      Px = Bi(),
      Nx = Math.max,
      Dx = Math.min;
    function Mx(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = Px(r)), (o = r < 0 ? Nx(n + o, 0) : Dx(o, n - 1))),
        Cx(e, Lx(t, 3), o, !0)
      );
    }
    Od.exports = Mx;
  });
  var Rd = d((Rq, xd) => {
    var Fx = Wi(),
      qx = Sd(),
      kx = Fx(qx);
    xd.exports = kx;
  });
  function Cd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function Xx(e, t) {
    if (Cd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o++)
      if (!Object.hasOwn(t, r[o]) || !Cd(e[r[o]], t[r[o]])) return !1;
    return !0;
  }
  var vo,
    Ld = Ee(() => {
      "use strict";
      vo = Xx;
    });
  var Yd = {};
  Pe(Yd, {
    cleanupHTMLElement: () => FR,
    clearAllStyles: () => MR,
    clearObjectCache: () => rR,
    getActionListProgress: () => kR,
    getAffectedElements: () => Io,
    getComputedStyle: () => lR,
    getDestinationValues: () => ER,
    getElementId: () => aR,
    getInstanceId: () => iR,
    getInstanceOrigin: () => pR,
    getItemConfigByKey: () => vR,
    getMaxDurationItemIndex: () => jd,
    getNamespacedParameterId: () => UR,
    getRenderType: () => Bd,
    getStyleProp: () => mR,
    mediaQueriesEqual: () => WR,
    observeStore: () => cR,
    reduceListToGroup: () => XR,
    reifyState: () => sR,
    renderHTMLElement: () => yR,
    shallowEqual: () => vo,
    shouldAllowMediaQuery: () => VR,
    shouldNamespaceEventParameter: () => GR,
    stringifyTarget: () => HR,
  });
  function rR() {
    vn.clear();
  }
  function iR() {
    return "i" + nR++;
  }
  function aR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + oR++;
  }
  function sR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, _n.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      o = r && r.mediaQueries,
      i = [];
    return (
      o
        ? (i = o.map((a) => a.key))
        : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: o,
          mediaQueryKeys: i,
        },
      }
    );
  }
  function cR({ store: e, select: t, onChange: r, comparator: n = uR }) {
    let { getState: o, subscribe: i } = e,
      a = i(s),
      u = t(o());
    function s() {
      let f = t(o());
      if (f == null) {
        a();
        return;
      }
      n(f, u) || ((u = f), r(u, e));
    }
    return a;
  }
  function Dd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Io({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: o,
  }) {
    if (!o) throw new Error("IX2 missing elementApi");
    let { targets: i } = e;
    if (Array.isArray(i) && i.length > 0)
      return i.reduce(
        (q, O) =>
          q.concat(
            Io({
              config: { target: O },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: o,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: f,
        getSiblingElements: _,
        matchSelector: v,
        elementContains: h,
        isSiblingNode: I,
      } = o,
      { target: x } = e;
    if (!x) return [];
    let {
      id: A,
      objectId: C,
      selector: b,
      selectorGuids: N,
      appliesTo: L,
      useEventTarget: k,
    } = Dd(x);
    if (C) return [vn.has(C) ? vn.get(C) : vn.set(C, {}).get(C)];
    if (L === hi.PAGE) {
      let q = a(A);
      return q ? [q] : [];
    }
    let D = (t?.action?.config?.affectedElements ?? {})[A || b] || {},
      Y = !!(D.id || D.selector),
      K,
      Q,
      J,
      ee = t && u(Dd(t.target));
    if (
      (Y
        ? ((K = D.limitAffectedElements), (Q = ee), (J = u(D)))
        : (Q = J = u({ id: A, selector: b, selectorGuids: N })),
      t && k)
    ) {
      let q = r && (J || k === !0) ? [r] : s(ee);
      if (J) {
        if (k === Jx) return s(J).filter((O) => q.some((M) => h(O, M)));
        if (k === Pd) return s(J).filter((O) => q.some((M) => h(M, O)));
        if (k === Nd) return s(J).filter((O) => q.some((M) => I(M, O)));
      }
      return q;
    }
    return Q == null || J == null
      ? []
      : ze && n
      ? s(J).filter((q) => n.contains(q))
      : K === Pd
      ? s(Q, J)
      : K === Zx
      ? f(s(Q)).filter(v(J))
      : K === Nd
      ? _(s(Q)).filter(v(J))
      : s(J);
  }
  function lR({ element: e, actionItem: t }) {
    if (!ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case zt:
      case Kt:
      case jt:
      case Yt:
      case Tn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function pR(e, t = {}, r = {}, n, o) {
    let { getStyle: i } = o,
      { actionTypeId: a } = n;
    if (It(a)) return uo(a)(t[a], n);
    switch (n.actionTypeId) {
      case Wt:
      case Ht:
      case Bt:
      case Ar:
        return t[n.actionTypeId] || To[n.actionTypeId];
      case wr:
        return fR(t[n.actionTypeId], n.config.filters);
      case Or:
        return dR(t[n.actionTypeId], n.config.fontVariations);
      case Vd:
        return { value: (0, st.default)(parseFloat(i(e, mn)), 1) };
      case zt: {
        let u = i(e, tt),
          s = i(e, rt),
          f,
          _;
        return (
          n.config.widthUnit === ht
            ? (f = Md.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (f = (0, st.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === ht
            ? (_ = Md.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (_ = (0, st.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: f, heightValue: _ }
        );
      }
      case Kt:
      case jt:
      case Yt:
        return PR({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: i,
        });
      case Tn:
        return { value: (0, st.default)(i(e, yn), r.display) };
      case tR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function ER({ element: e, actionItem: t, elementApi: r }) {
    if (It(t.actionTypeId)) return co(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Wt:
      case Ht:
      case Bt:
      case Ar: {
        let { xValue: n, yValue: o, zValue: i } = t.config;
        return { xValue: n, yValue: o, zValue: i };
      }
      case zt: {
        let { getStyle: n, setStyle: o, getProperty: i } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: f } = t.config;
        if (!ze) return { widthValue: s, heightValue: f };
        if (a === ht) {
          let _ = n(e, tt);
          o(e, tt, ""), (s = i(e, "offsetWidth")), o(e, tt, _);
        }
        if (u === ht) {
          let _ = n(e, rt);
          o(e, rt, ""), (f = i(e, "offsetHeight")), o(e, rt, _);
        }
        return { widthValue: s, heightValue: f };
      }
      case Kt:
      case jt:
      case Yt: {
        let {
          rValue: n,
          gValue: o,
          bValue: i,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            f = s(e, u),
            _ = (0, kd.normalizeColor)(f);
          return {
            rValue: _.red,
            gValue: _.green,
            bValue: _.blue,
            aValue: _.alpha,
          };
        }
        return { rValue: n, gValue: o, bValue: i, aValue: a };
      }
      case wr:
        return t.config.filters.reduce(gR, {});
      case Or:
        return t.config.fontVariations.reduce(hR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Bd(e) {
    if (/^TRANSFORM_/.test(e)) return Gd;
    if (/^STYLE_/.test(e)) return yo;
    if (/^GENERAL_/.test(e)) return mo;
    if (/^PLUGIN_/.test(e)) return Ud;
  }
  function mR(e, t) {
    return e === yo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function yR(e, t, r, n, o, i, a, u, s) {
    switch (u) {
      case Gd:
        return AR(e, t, r, o, a);
      case yo:
        return NR(e, t, r, o, i, a);
      case mo:
        return DR(e, o, a);
      case Ud: {
        let { actionTypeId: f } = o;
        if (It(f)) return lo(f)(s, t, o);
      }
    }
  }
  function AR(e, t, r, n, o) {
    let i = bR
        .map((u) => {
          let s = To[u],
            {
              xValue: f = s.xValue,
              yValue: _ = s.yValue,
              zValue: v = s.zValue,
              xUnit: h = "",
              yUnit: I = "",
              zUnit: x = "",
            } = t[u] || {};
          switch (u) {
            case Wt:
              return `${Vx}(${f}${h}, ${_}${I}, ${v}${x})`;
            case Ht:
              return `${Wx}(${f}${h}, ${_}${I}, ${v}${x})`;
            case Bt:
              return `${Hx}(${f}${h}) ${Bx}(${_}${I}) ${zx}(${v}${x})`;
            case Ar:
              return `${Kx}(${f}${h}, ${_}${I})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = o;
    bt(e, gt, o), a(e, gt, i), SR(n, r) && a(e, dn, jx);
  }
  function wR(e, t, r, n) {
    let o = (0, _n.default)(t, (a, u, s) => `${a} ${s}(${u}${TR(s, r)})`, ""),
      { setStyle: i } = n;
    bt(e, Ir, n), i(e, Ir, o);
  }
  function OR(e, t, r, n) {
    let o = (0, _n.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: i } = n;
    bt(e, Tr, n), i(e, Tr, o);
  }
  function SR({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Wt && n !== void 0) ||
      (e === Ht && n !== void 0) ||
      (e === Bt && (t !== void 0 || r !== void 0))
    );
  }
  function LR(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function PR({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let o = _o[t],
      i = n(e, o),
      a = RR.test(i) ? i : r[o],
      u = LR(CR, a).split(br);
    return {
      rValue: (0, st.default)(parseInt(u[0], 10), 255),
      gValue: (0, st.default)(parseInt(u[1], 10), 255),
      bValue: (0, st.default)(parseInt(u[2], 10), 255),
      aValue: (0, st.default)(parseFloat(u[3]), 1),
    };
  }
  function NR(e, t, r, n, o, i) {
    let { setStyle: a } = i;
    switch (n.actionTypeId) {
      case zt: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: f, heightValue: _ } = r;
        f !== void 0 && (u === ht && (u = "px"), bt(e, tt, i), a(e, tt, f + u)),
          _ !== void 0 &&
            (s === ht && (s = "px"), bt(e, rt, i), a(e, rt, _ + s));
        break;
      }
      case wr: {
        wR(e, r, n.config, i);
        break;
      }
      case Or: {
        OR(e, r, n.config, i);
        break;
      }
      case Kt:
      case jt:
      case Yt: {
        let u = _o[n.actionTypeId],
          s = Math.round(r.rValue),
          f = Math.round(r.gValue),
          _ = Math.round(r.bValue),
          v = r.aValue;
        bt(e, u, i),
          a(e, u, v >= 1 ? `rgb(${s},${f},${_})` : `rgba(${s},${f},${_},${v})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        bt(e, o, i), a(e, o, r.value + u);
        break;
      }
    }
  }
  function DR(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Tn: {
        let { value: o } = t.config;
        o === Yx && ze ? n(e, yn, Ki) : n(e, yn, o);
        return;
      }
    }
  }
  function bt(e, t, r) {
    if (!ze) return;
    let n = Hd[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, Vt);
    if (!a) {
      i(e, Vt, n);
      return;
    }
    let u = a.split(br).map(Wd);
    u.indexOf(n) === -1 && i(e, Vt, u.concat(n).join(br));
  }
  function zd(e, t, r) {
    if (!ze) return;
    let n = Hd[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, Vt);
    !a ||
      a.indexOf(n) === -1 ||
      i(
        e,
        Vt,
        a
          .split(br)
          .map(Wd)
          .filter((u) => u !== n)
          .join(br)
      );
  }
  function MR({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: o = {} } = r;
    Object.keys(n).forEach((i) => {
      let a = n[i],
        { config: u } = a.action,
        { actionListId: s } = u,
        f = o[s];
      f && Fd({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(o).forEach((i) => {
        Fd({ actionList: o[i], elementApi: t });
      });
  }
  function Fd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e;
    n &&
      n.forEach((i) => {
        qd({ actionGroup: i, event: t, elementApi: r });
      }),
      o &&
        o.forEach((i) => {
          let { continuousActionGroups: a } = i;
          a.forEach((u) => {
            qd({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function qd({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((o) => {
      let { actionTypeId: i, config: a } = o,
        u;
      It(i)
        ? (u = (s) => fo(i)(s, o))
        : (u = Kd({ effect: qR, actionTypeId: i, elementApi: r })),
        Io({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function FR(e, t, r) {
    let { setStyle: n, getStyle: o } = r,
      { actionTypeId: i } = t;
    if (i === zt) {
      let { config: a } = t;
      a.widthUnit === ht && n(e, tt, ""), a.heightUnit === ht && n(e, rt, "");
    }
    o(e, Vt) && Kd({ effect: zd, actionTypeId: i, elementApi: r })(e);
  }
  function qR(e, t, r) {
    let { setStyle: n } = r;
    zd(e, t, r), n(e, t, ""), t === gt && n(e, dn, "");
  }
  function jd(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, o) => {
        let { config: i } = n,
          a = i.delay + i.duration;
        a >= t && ((t = a), (r = o));
      }),
      r
    );
  }
  function kR(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: o, verboseTimeElapsed: i = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, f) => {
        if (n && f === 0) return;
        let { actionItems: _ } = s,
          v = _[jd(_)],
          { config: h, actionTypeId: I } = v;
        o.id === v.id && (u = a + i);
        let x = Bd(I) === mo ? 0 : h.duration;
        a += h.delay + x;
      }),
      a > 0 ? _r(u / a) : 0
    );
  }
  function XR({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e,
      i = [],
      a = (u) => (
        i.push((0, In.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      o &&
        o.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: f }) => f.some(a));
        }),
      (0, In.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
      })
    );
  }
  function GR(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function UR(e, t) {
    return e + eR + t;
  }
  function VR(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function WR(e, t) {
    return vo(e && e.sort(), t && t.sort());
  }
  function HR(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Eo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Eo + r + Eo + n;
  }
  var st,
    _n,
    En,
    In,
    kd,
    Gx,
    Ux,
    Vx,
    Wx,
    Hx,
    Bx,
    zx,
    Kx,
    jx,
    Yx,
    mn,
    Ir,
    Tr,
    tt,
    rt,
    Xd,
    Qx,
    $x,
    Pd,
    Zx,
    Nd,
    Jx,
    yn,
    Vt,
    ht,
    br,
    eR,
    Eo,
    Gd,
    mo,
    yo,
    Ud,
    Wt,
    Ht,
    Bt,
    Ar,
    Vd,
    wr,
    Or,
    zt,
    Kt,
    jt,
    Yt,
    Tn,
    tR,
    Wd,
    _o,
    Hd,
    vn,
    nR,
    oR,
    uR,
    Md,
    fR,
    dR,
    gR,
    hR,
    vR,
    To,
    _R,
    IR,
    TR,
    bR,
    xR,
    RR,
    CR,
    Kd,
    Qd = Ee(() => {
      "use strict";
      (st = le(fd())), (_n = le(wd())), (En = le(Rd())), (In = le(Pt()));
      De();
      Ld();
      Qi();
      kd = le(to());
      po();
      pn();
      ({
        BACKGROUND: Gx,
        TRANSFORM: Ux,
        TRANSLATE_3D: Vx,
        SCALE_3D: Wx,
        ROTATE_X: Hx,
        ROTATE_Y: Bx,
        ROTATE_Z: zx,
        SKEW: Kx,
        PRESERVE_3D: jx,
        FLEX: Yx,
        OPACITY: mn,
        FILTER: Ir,
        FONT_VARIATION_SETTINGS: Tr,
        WIDTH: tt,
        HEIGHT: rt,
        BACKGROUND_COLOR: Xd,
        BORDER_COLOR: Qx,
        COLOR: $x,
        CHILDREN: Pd,
        IMMEDIATE_CHILDREN: Zx,
        SIBLINGS: Nd,
        PARENT: Jx,
        DISPLAY: yn,
        WILL_CHANGE: Vt,
        AUTO: ht,
        COMMA_DELIMITER: br,
        COLON_DELIMITER: eR,
        BAR_DELIMITER: Eo,
        RENDER_TRANSFORM: Gd,
        RENDER_GENERAL: mo,
        RENDER_STYLE: yo,
        RENDER_PLUGIN: Ud,
      } = we),
        ({
          TRANSFORM_MOVE: Wt,
          TRANSFORM_SCALE: Ht,
          TRANSFORM_ROTATE: Bt,
          TRANSFORM_SKEW: Ar,
          STYLE_OPACITY: Vd,
          STYLE_FILTER: wr,
          STYLE_FONT_VARIATION: Or,
          STYLE_SIZE: zt,
          STYLE_BACKGROUND_COLOR: Kt,
          STYLE_BORDER: jt,
          STYLE_TEXT_COLOR: Yt,
          GENERAL_DISPLAY: Tn,
          OBJECT_VALUE: tR,
        } = Ne),
        (Wd = (e) => e.trim()),
        (_o = Object.freeze({ [Kt]: Xd, [jt]: Qx, [Yt]: $x })),
        (Hd = Object.freeze({
          [gt]: Ux,
          [Xd]: Gx,
          [mn]: mn,
          [Ir]: Ir,
          [tt]: tt,
          [rt]: rt,
          [Tr]: Tr,
        })),
        (vn = new Map());
      nR = 1;
      oR = 1;
      uR = (e, t) => e === t;
      (Md = /px/),
        (fR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = _R[n.type]), r),
            e || {}
          )),
        (dR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = IR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (gR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (hR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (vR = (e, t, r) => {
          if (It(e)) return so(e)(r, t);
          switch (e) {
            case wr: {
              let n = (0, En.default)(r.filters, ({ type: o }) => o === t);
              return n ? n.value : 0;
            }
            case Or: {
              let n = (0, En.default)(
                r.fontVariations,
                ({ type: o }) => o === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (To = {
        [Wt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ht]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Bt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ar]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (_R = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (IR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (TR = (e, t) => {
          let r = (0, En.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (bR = Object.keys(To));
      (xR = "\\(([^)]+)\\)"), (RR = /^rgb/), (CR = RegExp(`rgba?${xR}`));
      Kd =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Wt:
            case Ht:
            case Bt:
            case Ar:
              e(n, gt, r);
              break;
            case wr:
              e(n, Ir, r);
              break;
            case Or:
              e(n, Tr, r);
              break;
            case Vd:
              e(n, mn, r);
              break;
            case zt:
              e(n, tt, r), e(n, rt, r);
              break;
            case Kt:
            case jt:
            case Yt:
              e(n, _o[t], r);
              break;
            case Tn:
              e(n, yn, r);
              break;
          }
        };
    });
  var At = d((bo) => {
    "use strict";
    Object.defineProperty(bo, "__esModule", { value: !0 });
    function BR(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    BR(bo, {
      IX2BrowserSupport: function () {
        return zR;
      },
      IX2EasingUtils: function () {
        return jR;
      },
      IX2Easings: function () {
        return KR;
      },
      IX2ElementsReducer: function () {
        return YR;
      },
      IX2VanillaPlugins: function () {
        return QR;
      },
      IX2VanillaUtils: function () {
        return $R;
      },
    });
    var zR = Qt((pn(), Qe(Hf))),
      KR = Qt((Yi(), Qe(yr))),
      jR = Qt((Qi(), Qe($f))),
      YR = Qt((td(), Qe(ed))),
      QR = Qt((po(), Qe(cd))),
      $R = Qt((Qd(), Qe(Yd)));
    function $d(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return ($d = function (n) {
        return n ? r : t;
      })(e);
    }
    function Qt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = $d(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var An,
    ut,
    ZR,
    JR,
    eC,
    tC,
    rC,
    nC,
    bn,
    Zd,
    iC,
    oC,
    Ao,
    aC,
    sC,
    uC,
    cC,
    Jd,
    ep = Ee(() => {
      "use strict";
      De();
      (An = le(At())),
        (ut = le(Pt())),
        ({
          IX2_RAW_DATA_IMPORTED: ZR,
          IX2_SESSION_STOPPED: JR,
          IX2_INSTANCE_ADDED: eC,
          IX2_INSTANCE_STARTED: tC,
          IX2_INSTANCE_REMOVED: rC,
          IX2_ANIMATION_FRAME_CHANGED: nC,
        } = Te),
        ({
          optimizeFloat: bn,
          applyEasing: Zd,
          createBezierEasing: iC,
        } = An.IX2EasingUtils),
        ({ RENDER_GENERAL: oC } = we),
        ({
          getItemConfigByKey: Ao,
          getRenderType: aC,
          getStyleProp: sC,
        } = An.IX2VanillaUtils),
        (uC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: o,
              destinationKeys: i,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: f,
              skipMotion: _,
              skipToValue: v,
            } = e,
            { parameters: h } = t.payload,
            I = Math.max(1 - a, 0.01),
            x = h[n];
          x == null && ((I = 1), (x = u));
          let A = Math.max(x, 0) || 0,
            C = bn(A - r),
            b = _ ? v : bn(r + C * I),
            N = b * 100;
          if (b === r && e.current) return e;
          let L, k, G, D;
          for (let K = 0, { length: Q } = o; K < Q; K++) {
            let { keyframe: J, actionItems: ee } = o[K];
            if ((K === 0 && (L = ee[0]), N >= J)) {
              L = ee[0];
              let q = o[K + 1],
                O = q && N !== J;
              (k = O ? q.actionItems[0] : null),
                O && ((G = J / 100), (D = (q.keyframe - J) / 100));
            }
          }
          let Y = {};
          if (L && !k)
            for (let K = 0, { length: Q } = i; K < Q; K++) {
              let J = i[K];
              Y[J] = Ao(s, J, L.config);
            }
          else if (L && k && G !== void 0 && D !== void 0) {
            let K = (b - G) / D,
              Q = L.config.easing,
              J = Zd(Q, K, f);
            for (let ee = 0, { length: q } = i; ee < q; ee++) {
              let O = i[ee],
                M = Ao(s, O, L.config),
                te = (Ao(s, O, k.config) - M) * J + M;
              Y[O] = te;
            }
          }
          return (0, ut.merge)(e, { position: b, current: Y });
        }),
        (cC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: o,
              immediate: i,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: f,
              destinationKeys: _,
              pluginDuration: v,
              instanceDelay: h,
              customEasingFn: I,
              skipMotion: x,
            } = e,
            A = s.config.easing,
            { duration: C, delay: b } = s.config;
          v != null && (C = v),
            (b = h ?? b),
            a === oC ? (C = 0) : (i || x) && (C = b = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let L = N - (o + b);
            if (u) {
              let K = N - o,
                Q = C + b,
                J = bn(Math.min(Math.max(0, K / Q), 1));
              e = (0, ut.set)(e, "verboseTimeElapsed", Q * J);
            }
            if (L < 0) return e;
            let k = bn(Math.min(Math.max(0, L / C), 1)),
              G = Zd(A, k, I),
              D = {},
              Y = null;
            return (
              _.length &&
                (Y = _.reduce((K, Q) => {
                  let J = f[Q],
                    ee = parseFloat(n[Q]) || 0,
                    O = (parseFloat(J) - ee) * G + ee;
                  return (K[Q] = O), K;
                }, {})),
              (D.current = Y),
              (D.position = k),
              k === 1 && ((D.active = !1), (D.complete = !0)),
              (0, ut.merge)(e, D)
            );
          }
          return e;
        }),
        (Jd = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case ZR:
              return t.payload.ixInstances || Object.freeze({});
            case JR:
              return Object.freeze({});
            case eC: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: o,
                  eventId: i,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: f,
                  isCarrier: _,
                  origin: v,
                  destination: h,
                  immediate: I,
                  verbose: x,
                  continuous: A,
                  parameterId: C,
                  actionGroups: b,
                  smoothing: N,
                  restingValue: L,
                  pluginInstance: k,
                  pluginDuration: G,
                  instanceDelay: D,
                  skipMotion: Y,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: Q } = o,
                J = aC(Q),
                ee = sC(J, Q),
                q = Object.keys(h).filter(
                  (M) => h[M] != null && typeof h[M] != "string"
                ),
                { easing: O } = o.config;
              return (0, ut.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: h,
                destinationKeys: q,
                immediate: I,
                verbose: x,
                current: null,
                actionItem: o,
                actionTypeId: Q,
                eventId: i,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                renderType: J,
                isCarrier: _,
                styleProp: ee,
                continuous: A,
                parameterId: C,
                actionGroups: b,
                smoothing: N,
                restingValue: L,
                pluginInstance: k,
                pluginDuration: G,
                instanceDelay: D,
                skipMotion: Y,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(O) && O.length === 4 ? iC(O) : void 0,
              });
            }
            case tC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ut.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case rC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                o = Object.keys(e),
                { length: i } = o;
              for (let a = 0; a < i; a++) {
                let u = o[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case nC: {
              let r = e,
                n = Object.keys(e),
                { length: o } = n;
              for (let i = 0; i < o; i++) {
                let a = n[i],
                  u = e[a],
                  s = u.continuous ? uC : cC;
                r = (0, ut.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var lC,
    fC,
    dC,
    tp,
    rp = Ee(() => {
      "use strict";
      De();
      ({
        IX2_RAW_DATA_IMPORTED: lC,
        IX2_SESSION_STOPPED: fC,
        IX2_PARAMETER_CHANGED: dC,
      } = Te),
        (tp = (e = {}, t) => {
          switch (t.type) {
            case lC:
              return t.payload.ixParameters || {};
            case fC:
              return {};
            case dC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var op = {};
  Pe(op, { default: () => gC });
  var np,
    ip,
    pC,
    gC,
    ap = Ee(() => {
      "use strict";
      np = le(gi());
      gs();
      Ms();
      ks();
      ip = le(At());
      ep();
      rp();
      ({ ixElements: pC } = ip.IX2ElementsReducer),
        (gC = (0, np.combineReducers)({
          ixData: ps,
          ixRequest: Ds,
          ixSession: qs,
          ixElements: pC,
          ixInstances: Jd,
          ixParameters: tp,
        }));
    });
  var up = d((Kq, sp) => {
    var hC = ft(),
      vC = be(),
      EC = ot(),
      mC = "[object String]";
    function yC(e) {
      return typeof e == "string" || (!vC(e) && EC(e) && hC(e) == mC);
    }
    sp.exports = yC;
  });
  var lp = d((jq, cp) => {
    var _C = Vi(),
      IC = _C("length");
    cp.exports = IC;
  });
  var dp = d((Yq, fp) => {
    var TC = "\\ud800-\\udfff",
      bC = "\\u0300-\\u036f",
      AC = "\\ufe20-\\ufe2f",
      wC = "\\u20d0-\\u20ff",
      OC = bC + AC + wC,
      SC = "\\ufe0e\\ufe0f",
      xC = "\\u200d",
      RC = RegExp("[" + xC + TC + OC + SC + "]");
    function CC(e) {
      return RC.test(e);
    }
    fp.exports = CC;
  });
  var Ip = d((Qq, _p) => {
    var gp = "\\ud800-\\udfff",
      LC = "\\u0300-\\u036f",
      PC = "\\ufe20-\\ufe2f",
      NC = "\\u20d0-\\u20ff",
      DC = LC + PC + NC,
      MC = "\\ufe0e\\ufe0f",
      FC = "[" + gp + "]",
      wo = "[" + DC + "]",
      Oo = "\\ud83c[\\udffb-\\udfff]",
      qC = "(?:" + wo + "|" + Oo + ")",
      hp = "[^" + gp + "]",
      vp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ep = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      kC = "\\u200d",
      mp = qC + "?",
      yp = "[" + MC + "]?",
      XC = "(?:" + kC + "(?:" + [hp, vp, Ep].join("|") + ")" + yp + mp + ")*",
      GC = yp + mp + XC,
      UC = "(?:" + [hp + wo + "?", wo, vp, Ep, FC].join("|") + ")",
      pp = RegExp(Oo + "(?=" + Oo + ")|" + UC + GC, "g");
    function VC(e) {
      for (var t = (pp.lastIndex = 0); pp.test(e); ) ++t;
      return t;
    }
    _p.exports = VC;
  });
  var bp = d(($q, Tp) => {
    var WC = lp(),
      HC = dp(),
      BC = Ip();
    function zC(e) {
      return HC(e) ? BC(e) : WC(e);
    }
    Tp.exports = zC;
  });
  var wp = d((Zq, Ap) => {
    var KC = rn(),
      jC = nn(),
      YC = yt(),
      QC = up(),
      $C = bp(),
      ZC = "[object Map]",
      JC = "[object Set]";
    function eL(e) {
      if (e == null) return 0;
      if (YC(e)) return QC(e) ? $C(e) : e.length;
      var t = jC(e);
      return t == ZC || t == JC ? e.size : KC(e).length;
    }
    Ap.exports = eL;
  });
  var Sp = d((Jq, Op) => {
    var tL = "Expected a function";
    function rL(e) {
      if (typeof e != "function") throw new TypeError(tL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Op.exports = rL;
  });
  var So = d((ek, xp) => {
    var nL = dt(),
      iL = (function () {
        try {
          var e = nL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    xp.exports = iL;
  });
  var xo = d((tk, Cp) => {
    var Rp = So();
    function oL(e, t, r) {
      t == "__proto__" && Rp
        ? Rp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Cp.exports = oL;
  });
  var Pp = d((rk, Lp) => {
    var aL = xo(),
      sL = zr(),
      uL = Object.prototype,
      cL = uL.hasOwnProperty;
    function lL(e, t, r) {
      var n = e[t];
      (!(cL.call(e, t) && sL(n, r)) || (r === void 0 && !(t in e))) &&
        aL(e, t, r);
    }
    Lp.exports = lL;
  });
  var Mp = d((nk, Dp) => {
    var fL = Pp(),
      dL = vr(),
      pL = Zr(),
      Np = et(),
      gL = Gt();
    function hL(e, t, r, n) {
      if (!Np(e)) return e;
      t = dL(t, e);
      for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
        var s = gL(t[o]),
          f = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (o != a) {
          var _ = u[s];
          (f = n ? n(_, s, u) : void 0),
            f === void 0 && (f = Np(_) ? _ : pL(t[o + 1]) ? [] : {});
        }
        fL(u, s, f), (u = u[s]);
      }
      return e;
    }
    Dp.exports = hL;
  });
  var qp = d((ik, Fp) => {
    var vL = sn(),
      EL = Mp(),
      mL = vr();
    function yL(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          u = vL(e, a);
        r(u, a) && EL(i, mL(a, e), u);
      }
      return i;
    }
    Fp.exports = yL;
  });
  var Xp = d((ok, kp) => {
    var _L = Qr(),
      IL = ti(),
      TL = Si(),
      bL = Oi(),
      AL = Object.getOwnPropertySymbols,
      wL = AL
        ? function (e) {
            for (var t = []; e; ) _L(t, TL(e)), (e = IL(e));
            return t;
          }
        : bL;
    kp.exports = wL;
  });
  var Up = d((ak, Gp) => {
    function OL(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Gp.exports = OL;
  });
  var Wp = d((sk, Vp) => {
    var SL = et(),
      xL = tn(),
      RL = Up(),
      CL = Object.prototype,
      LL = CL.hasOwnProperty;
    function PL(e) {
      if (!SL(e)) return RL(e);
      var t = xL(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !LL.call(e, n))) || r.push(n);
      return r;
    }
    Vp.exports = PL;
  });
  var Bp = d((uk, Hp) => {
    var NL = Ri(),
      DL = Wp(),
      ML = yt();
    function FL(e) {
      return ML(e) ? NL(e, !0) : DL(e);
    }
    Hp.exports = FL;
  });
  var Kp = d((ck, zp) => {
    var qL = wi(),
      kL = Xp(),
      XL = Bp();
    function GL(e) {
      return qL(e, XL, kL);
    }
    zp.exports = GL;
  });
  var Yp = d((lk, jp) => {
    var UL = Ui(),
      VL = pt(),
      WL = qp(),
      HL = Kp();
    function BL(e, t) {
      if (e == null) return {};
      var r = UL(HL(e), function (n) {
        return [n];
      });
      return (
        (t = VL(t)),
        WL(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    jp.exports = BL;
  });
  var $p = d((fk, Qp) => {
    var zL = pt(),
      KL = Sp(),
      jL = Yp();
    function YL(e, t) {
      return jL(e, KL(zL(t)));
    }
    Qp.exports = YL;
  });
  var Jp = d((dk, Zp) => {
    var QL = rn(),
      $L = nn(),
      ZL = lr(),
      JL = be(),
      eP = yt(),
      tP = $r(),
      rP = tn(),
      nP = en(),
      iP = "[object Map]",
      oP = "[object Set]",
      aP = Object.prototype,
      sP = aP.hasOwnProperty;
    function uP(e) {
      if (e == null) return !0;
      if (
        eP(e) &&
        (JL(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          tP(e) ||
          nP(e) ||
          ZL(e))
      )
        return !e.length;
      var t = $L(e);
      if (t == iP || t == oP) return !e.size;
      if (rP(e)) return !QL(e).length;
      for (var r in e) if (sP.call(e, r)) return !1;
      return !0;
    }
    Zp.exports = uP;
  });
  var tg = d((pk, eg) => {
    var cP = xo(),
      lP = go(),
      fP = pt();
    function dP(e, t) {
      var r = {};
      return (
        (t = fP(t, 3)),
        lP(e, function (n, o, i) {
          cP(r, o, t(n, o, i));
        }),
        r
      );
    }
    eg.exports = dP;
  });
  var ng = d((gk, rg) => {
    function pP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    rg.exports = pP;
  });
  var og = d((hk, ig) => {
    var gP = cn();
    function hP(e) {
      return typeof e == "function" ? e : gP;
    }
    ig.exports = hP;
  });
  var sg = d((vk, ag) => {
    var vP = ng(),
      EP = ho(),
      mP = og(),
      yP = be();
    function _P(e, t) {
      var r = yP(e) ? vP : EP;
      return r(e, mP(t));
    }
    ag.exports = _P;
  });
  var cg = d((Ek, ug) => {
    var IP = He(),
      TP = function () {
        return IP.Date.now();
      };
    ug.exports = TP;
  });
  var dg = d((mk, fg) => {
    var bP = et(),
      Ro = cg(),
      lg = ln(),
      AP = "Expected a function",
      wP = Math.max,
      OP = Math.min;
    function SP(e, t, r) {
      var n,
        o,
        i,
        a,
        u,
        s,
        f = 0,
        _ = !1,
        v = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(AP);
      (t = lg(t) || 0),
        bP(r) &&
          ((_ = !!r.leading),
          (v = "maxWait" in r),
          (i = v ? wP(lg(r.maxWait) || 0, t) : i),
          (h = "trailing" in r ? !!r.trailing : h));
      function I(D) {
        var Y = n,
          K = o;
        return (n = o = void 0), (f = D), (a = e.apply(K, Y)), a;
      }
      function x(D) {
        return (f = D), (u = setTimeout(b, t)), _ ? I(D) : a;
      }
      function A(D) {
        var Y = D - s,
          K = D - f,
          Q = t - Y;
        return v ? OP(Q, i - K) : Q;
      }
      function C(D) {
        var Y = D - s,
          K = D - f;
        return s === void 0 || Y >= t || Y < 0 || (v && K >= i);
      }
      function b() {
        var D = Ro();
        if (C(D)) return N(D);
        u = setTimeout(b, A(D));
      }
      function N(D) {
        return (u = void 0), h && n ? I(D) : ((n = o = void 0), a);
      }
      function L() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = s = o = u = void 0);
      }
      function k() {
        return u === void 0 ? a : N(Ro());
      }
      function G() {
        var D = Ro(),
          Y = C(D);
        if (((n = arguments), (o = this), (s = D), Y)) {
          if (u === void 0) return x(s);
          if (v) return clearTimeout(u), (u = setTimeout(b, t)), I(s);
        }
        return u === void 0 && (u = setTimeout(b, t)), a;
      }
      return (G.cancel = L), (G.flush = k), G;
    }
    fg.exports = SP;
  });
  var gg = d((yk, pg) => {
    var xP = dg(),
      RP = et(),
      CP = "Expected a function";
    function LP(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(CP);
      return (
        RP(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        xP(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    pg.exports = LP;
  });
  var vg = {};
  Pe(vg, {
    actionListPlaybackChanged: () => Zt,
    animationFrameChanged: () => On,
    clearRequested: () => rN,
    elementStateChanged: () => qo,
    eventListenerAdded: () => wn,
    eventStateChanged: () => Do,
    instanceAdded: () => Mo,
    instanceRemoved: () => Fo,
    instanceStarted: () => Sn,
    mediaQueriesDefined: () => Xo,
    parameterChanged: () => $t,
    playbackRequested: () => eN,
    previewRequested: () => JP,
    rawDataImported: () => Co,
    sessionInitialized: () => Lo,
    sessionStarted: () => Po,
    sessionStopped: () => No,
    stopRequested: () => tN,
    testFrameRendered: () => nN,
    viewportWidthChanged: () => ko,
  });
  var hg,
    PP,
    NP,
    DP,
    MP,
    FP,
    qP,
    kP,
    XP,
    GP,
    UP,
    VP,
    WP,
    HP,
    BP,
    zP,
    KP,
    jP,
    YP,
    QP,
    $P,
    ZP,
    Co,
    Lo,
    Po,
    No,
    JP,
    eN,
    tN,
    rN,
    wn,
    nN,
    Do,
    On,
    $t,
    Mo,
    Sn,
    Fo,
    qo,
    Zt,
    ko,
    Xo,
    xn = Ee(() => {
      "use strict";
      De();
      (hg = le(At())),
        ({
          IX2_RAW_DATA_IMPORTED: PP,
          IX2_SESSION_INITIALIZED: NP,
          IX2_SESSION_STARTED: DP,
          IX2_SESSION_STOPPED: MP,
          IX2_PREVIEW_REQUESTED: FP,
          IX2_PLAYBACK_REQUESTED: qP,
          IX2_STOP_REQUESTED: kP,
          IX2_CLEAR_REQUESTED: XP,
          IX2_EVENT_LISTENER_ADDED: GP,
          IX2_TEST_FRAME_RENDERED: UP,
          IX2_EVENT_STATE_CHANGED: VP,
          IX2_ANIMATION_FRAME_CHANGED: WP,
          IX2_PARAMETER_CHANGED: HP,
          IX2_INSTANCE_ADDED: BP,
          IX2_INSTANCE_STARTED: zP,
          IX2_INSTANCE_REMOVED: KP,
          IX2_ELEMENT_STATE_CHANGED: jP,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: YP,
          IX2_VIEWPORT_WIDTH_CHANGED: QP,
          IX2_MEDIA_QUERIES_DEFINED: $P,
        } = Te),
        ({ reifyState: ZP } = hg.IX2VanillaUtils),
        (Co = (e) => ({ type: PP, payload: { ...ZP(e) } })),
        (Lo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: NP,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Po = () => ({ type: DP })),
        (No = () => ({ type: MP })),
        (JP = ({ rawData: e, defer: t }) => ({
          type: FP,
          payload: { defer: t, rawData: e },
        })),
        (eN = ({
          actionTypeId: e = Ne.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: o,
          immediate: i,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: qP,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: o,
            immediate: i,
            verbose: u,
            rawData: s,
          },
        })),
        (tN = (e) => ({ type: kP, payload: { actionListId: e } })),
        (rN = () => ({ type: XP })),
        (wn = (e, t) => ({
          type: GP,
          payload: { target: e, listenerParams: t },
        })),
        (nN = (e = 1) => ({ type: UP, payload: { step: e } })),
        (Do = (e, t) => ({ type: VP, payload: { stateKey: e, newState: t } })),
        (On = (e, t) => ({ type: WP, payload: { now: e, parameters: t } })),
        ($t = (e, t) => ({ type: HP, payload: { key: e, value: t } })),
        (Mo = (e) => ({ type: BP, payload: { ...e } })),
        (Sn = (e, t) => ({ type: zP, payload: { instanceId: e, time: t } })),
        (Fo = (e) => ({ type: KP, payload: { instanceId: e } })),
        (qo = (e, t, r, n) => ({
          type: jP,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Zt = ({ actionListId: e, isPlaying: t }) => ({
          type: YP,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ko = ({ width: e, mediaQueries: t }) => ({
          type: QP,
          payload: { width: e, mediaQueries: t },
        })),
        (Xo = () => ({ type: $P }));
    });
  var Re = {};
  Pe(Re, {
    elementContains: () => Vo,
    getChildElements: () => pN,
    getClosestElement: () => Sr,
    getProperty: () => uN,
    getQuerySelector: () => Uo,
    getRefType: () => Wo,
    getSiblingElements: () => gN,
    getStyle: () => sN,
    getValidDocument: () => lN,
    isSiblingNode: () => dN,
    matchSelector: () => cN,
    queryDocument: () => fN,
    setStyle: () => aN,
  });
  function aN(e, t, r) {
    e.style[t] = r;
  }
  function sN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function uN(e, t) {
    return e[t];
  }
  function cN(e) {
    return (t) => t[Go](e);
  }
  function Uo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Eg) !== -1) {
        let n = e.split(Eg),
          o = n[0];
        if (((r = n[1]), o !== document.documentElement.getAttribute(yg)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function lN(e) {
    return e == null || e === document.documentElement.getAttribute(yg)
      ? document
      : null;
  }
  function fN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Vo(e, t) {
    return e.contains(t);
  }
  function dN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function pN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: o } = e[r],
        { length: i } = o;
      if (i) for (let a = 0; a < i; a++) t.push(o[a]);
    }
    return t;
  }
  function gN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: o } = e; n < o; n++) {
      let { parentNode: i } = e[n];
      if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
        continue;
      r.push(i);
      let a = i.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Wo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? iN
        : oN
      : null;
  }
  var mg,
    Go,
    Eg,
    iN,
    oN,
    yg,
    Sr,
    _g = Ee(() => {
      "use strict";
      mg = le(At());
      De();
      ({ ELEMENT_MATCHES: Go } = mg.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Eg,
          HTML_ELEMENT: iN,
          PLAIN_OBJECT: oN,
          WF_PAGE: yg,
        } = we);
      Sr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Go] && r[Go](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Ho = d((Tk, Tg) => {
    var hN = et(),
      Ig = Object.create,
      vN = (function () {
        function e() {}
        return function (t) {
          if (!hN(t)) return {};
          if (Ig) return Ig(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Tg.exports = vN;
  });
  var Rn = d((bk, bg) => {
    function EN() {}
    bg.exports = EN;
  });
  var Ln = d((Ak, Ag) => {
    var mN = Ho(),
      yN = Rn();
    function Cn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Cn.prototype = mN(yN.prototype);
    Cn.prototype.constructor = Cn;
    Ag.exports = Cn;
  });
  var xg = d((wk, Sg) => {
    var wg = Rt(),
      _N = lr(),
      IN = be(),
      Og = wg ? wg.isConcatSpreadable : void 0;
    function TN(e) {
      return IN(e) || _N(e) || !!(Og && e && e[Og]);
    }
    Sg.exports = TN;
  });
  var Lg = d((Ok, Cg) => {
    var bN = Qr(),
      AN = xg();
    function Rg(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = AN), o || (o = []); ++i < a; ) {
        var u = e[i];
        t > 0 && r(u)
          ? t > 1
            ? Rg(u, t - 1, r, n, o)
            : bN(o, u)
          : n || (o[o.length] = u);
      }
      return o;
    }
    Cg.exports = Rg;
  });
  var Ng = d((Sk, Pg) => {
    var wN = Lg();
    function ON(e) {
      var t = e == null ? 0 : e.length;
      return t ? wN(e, 1) : [];
    }
    Pg.exports = ON;
  });
  var Mg = d((xk, Dg) => {
    function SN(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Dg.exports = SN;
  });
  var kg = d((Rk, qg) => {
    var xN = Mg(),
      Fg = Math.max;
    function RN(e, t, r) {
      return (
        (t = Fg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = Fg(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var u = Array(t + 1); ++o < t; ) u[o] = n[o];
          return (u[t] = r(a)), xN(e, this, u);
        }
      );
    }
    qg.exports = RN;
  });
  var Gg = d((Ck, Xg) => {
    function CN(e) {
      return function () {
        return e;
      };
    }
    Xg.exports = CN;
  });
  var Wg = d((Lk, Vg) => {
    var LN = Gg(),
      Ug = So(),
      PN = cn(),
      NN = Ug
        ? function (e, t) {
            return Ug(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: LN(t),
              writable: !0,
            });
          }
        : PN;
    Vg.exports = NN;
  });
  var Bg = d((Pk, Hg) => {
    var DN = 800,
      MN = 16,
      FN = Date.now;
    function qN(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = FN(),
          o = MN - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= DN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Hg.exports = qN;
  });
  var Kg = d((Nk, zg) => {
    var kN = Wg(),
      XN = Bg(),
      GN = XN(kN);
    zg.exports = GN;
  });
  var Yg = d((Dk, jg) => {
    var UN = Ng(),
      VN = kg(),
      WN = Kg();
    function HN(e) {
      return WN(VN(e, void 0, UN), e + "");
    }
    jg.exports = HN;
  });
  var Zg = d((Mk, $g) => {
    var Qg = Ci(),
      BN = Qg && new Qg();
    $g.exports = BN;
  });
  var eh = d((Fk, Jg) => {
    function zN() {}
    Jg.exports = zN;
  });
  var Bo = d((qk, rh) => {
    var th = Zg(),
      KN = eh(),
      jN = th
        ? function (e) {
            return th.get(e);
          }
        : KN;
    rh.exports = jN;
  });
  var ih = d((kk, nh) => {
    var YN = {};
    nh.exports = YN;
  });
  var zo = d((Xk, ah) => {
    var oh = ih(),
      QN = Object.prototype,
      $N = QN.hasOwnProperty;
    function ZN(e) {
      for (
        var t = e.name + "", r = oh[t], n = $N.call(oh, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    ah.exports = ZN;
  });
  var Nn = d((Gk, sh) => {
    var JN = Ho(),
      eD = Rn(),
      tD = 4294967295;
    function Pn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = tD),
        (this.__views__ = []);
    }
    Pn.prototype = JN(eD.prototype);
    Pn.prototype.constructor = Pn;
    sh.exports = Pn;
  });
  var ch = d((Uk, uh) => {
    function rD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    uh.exports = rD;
  });
  var fh = d((Vk, lh) => {
    var nD = Nn(),
      iD = Ln(),
      oD = ch();
    function aD(e) {
      if (e instanceof nD) return e.clone();
      var t = new iD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = oD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    lh.exports = aD;
  });
  var gh = d((Wk, ph) => {
    var sD = Nn(),
      dh = Ln(),
      uD = Rn(),
      cD = be(),
      lD = ot(),
      fD = fh(),
      dD = Object.prototype,
      pD = dD.hasOwnProperty;
    function Dn(e) {
      if (lD(e) && !cD(e) && !(e instanceof sD)) {
        if (e instanceof dh) return e;
        if (pD.call(e, "__wrapped__")) return fD(e);
      }
      return new dh(e);
    }
    Dn.prototype = uD.prototype;
    Dn.prototype.constructor = Dn;
    ph.exports = Dn;
  });
  var vh = d((Hk, hh) => {
    var gD = Nn(),
      hD = Bo(),
      vD = zo(),
      ED = gh();
    function mD(e) {
      var t = vD(e),
        r = ED[t];
      if (typeof r != "function" || !(t in gD.prototype)) return !1;
      if (e === r) return !0;
      var n = hD(r);
      return !!n && e === n[0];
    }
    hh.exports = mD;
  });
  var _h = d((Bk, yh) => {
    var Eh = Ln(),
      yD = Yg(),
      _D = Bo(),
      Ko = zo(),
      ID = be(),
      mh = vh(),
      TD = "Expected a function",
      bD = 8,
      AD = 32,
      wD = 128,
      OD = 256;
    function SD(e) {
      return yD(function (t) {
        var r = t.length,
          n = r,
          o = Eh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(TD);
          if (o && !a && Ko(i) == "wrapper") var a = new Eh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var u = Ko(i),
            s = u == "wrapper" ? _D(i) : void 0;
          s &&
          mh(s[0]) &&
          s[1] == (wD | bD | AD | OD) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[Ko(s[0])].apply(a, s[3]))
            : (a = i.length == 1 && mh(i) ? a[u]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            _ = f[0];
          if (a && f.length == 1 && ID(_)) return a.plant(_).value();
          for (var v = 0, h = r ? t[v].apply(this, f) : _; ++v < r; )
            h = t[v].call(this, h);
          return h;
        };
      });
    }
    yh.exports = SD;
  });
  var Th = d((zk, Ih) => {
    var xD = _h(),
      RD = xD();
    Ih.exports = RD;
  });
  var Ah = d((Kk, bh) => {
    function CD(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    bh.exports = CD;
  });
  var Oh = d((jk, wh) => {
    var LD = Ah(),
      jo = ln();
    function PD(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = jo(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = jo(t)), (t = t === t ? t : 0)),
        LD(jo(e), t, r)
      );
    }
    wh.exports = PD;
  });
  var Mh,
    Fh,
    qh,
    kh,
    ND,
    DD,
    MD,
    FD,
    qD,
    kD,
    XD,
    GD,
    UD,
    VD,
    WD,
    HD,
    BD,
    zD,
    KD,
    Xh,
    Gh,
    jD,
    YD,
    QD,
    Uh,
    $D,
    ZD,
    Vh,
    JD,
    Yo,
    Wh,
    Sh,
    xh,
    Hh,
    Rr,
    eM,
    nt,
    Bh,
    tM,
    Fe,
    Ke,
    Cr,
    zh,
    Qo,
    Rh,
    $o,
    rM,
    xr,
    nM,
    iM,
    oM,
    Kh,
    Ch,
    aM,
    Lh,
    sM,
    uM,
    cM,
    Ph,
    Mn,
    Fn,
    Nh,
    Dh,
    jh,
    Yh = Ee(() => {
      "use strict";
      (Mh = le(Th())), (Fh = le(un())), (qh = le(Oh()));
      De();
      Zo();
      xn();
      (kh = le(At())),
        ({
          MOUSE_CLICK: ND,
          MOUSE_SECOND_CLICK: DD,
          MOUSE_DOWN: MD,
          MOUSE_UP: FD,
          MOUSE_OVER: qD,
          MOUSE_OUT: kD,
          DROPDOWN_CLOSE: XD,
          DROPDOWN_OPEN: GD,
          SLIDER_ACTIVE: UD,
          SLIDER_INACTIVE: VD,
          TAB_ACTIVE: WD,
          TAB_INACTIVE: HD,
          NAVBAR_CLOSE: BD,
          NAVBAR_OPEN: zD,
          MOUSE_MOVE: KD,
          PAGE_SCROLL_DOWN: Xh,
          SCROLL_INTO_VIEW: Gh,
          SCROLL_OUT_OF_VIEW: jD,
          PAGE_SCROLL_UP: YD,
          SCROLLING_IN_VIEW: QD,
          PAGE_FINISH: Uh,
          ECOMMERCE_CART_CLOSE: $D,
          ECOMMERCE_CART_OPEN: ZD,
          PAGE_START: Vh,
          PAGE_SCROLL: JD,
        } = Be),
        (Yo = "COMPONENT_ACTIVE"),
        (Wh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Sh } = we),
        ({ getNamespacedParameterId: xh } = kh.IX2VanillaUtils),
        (Hh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Rr = Hh(({ element: e, nativeEvent: t }) => e === t.target)),
        (eM = Hh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, Mh.default)([Rr, eM])),
        (Bh = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              o = n[t];
            if (o && !rM[o.eventTypeId]) return o;
          }
          return null;
        }),
        (tM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Bh(e, n);
        }),
        (Fe = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
          let { action: i, id: a } = t,
            { actionListId: u, autoStopEventId: s } = i.config,
            f = Bh(e, s);
          return (
            f &&
              Jt({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Sh + n.split(Sh)[1],
                actionListId: (0, Fh.default)(f, "action.config.actionListId"),
              }),
            Jt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            Lr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            o
          );
        }),
        (Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Cr = { handler: Ke(nt, Fe) }),
        (zh = { ...Cr, types: [Yo, Wh].join(" ") }),
        (Qo = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Rh = "mouseover mouseout"),
        ($o = { types: Qo }),
        (rM = { PAGE_START: Vh, PAGE_FINISH: Uh }),
        (xr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, qh.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (nM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (iM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: o } = t,
            i = e.contains(n);
          if (r === "mouseover" && i) return !0;
          let a = e.contains(o);
          return !!(r === "mouseout" && i && a);
        }),
        (oM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: o } = xr(),
            i = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
          return nM(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: o - s,
          });
        }),
        (Kh = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            o = [Yo, Wh].indexOf(n) !== -1 ? n === Yo : r.isActive,
            i = { ...r, isActive: o };
          return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
        }),
        (Ch = (e) => (t, r) => {
          let n = { elementHovered: iM(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (aM = (e) => (t, r) => {
          let n = { ...r, elementVisible: oM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Lh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = xr(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: f } = a,
              _ = f === "PX",
              v = o - i,
              h = Number((n / v).toFixed(2));
            if (r && r.percentTop === h) return r;
            let I = (_ ? s : (i * (s || 0)) / 100) / v,
              x,
              A,
              C = 0;
            r &&
              ((x = h > r.percentTop),
              (A = r.scrollingDown !== x),
              (C = A ? h : r.anchorTop));
            let b = u === Xh ? h >= C + I : h <= C - I,
              N = {
                ...r,
                percentTop: h,
                inBounds: b,
                anchorTop: C,
                scrollingDown: x,
              };
            return (r && b && (A || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (sM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (uM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (cM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Ph =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Mn = (e = !0) => ({
          ...zh,
          handler: Ke(
            e ? nt : Rr,
            Kh((t, r) => (r.isActive ? Cr.handler(t, r) : r))
          ),
        })),
        (Fn = (e = !0) => ({
          ...zh,
          handler: Ke(
            e ? nt : Rr,
            Kh((t, r) => (r.isActive ? r : Cr.handler(t, r)))
          ),
        })),
        (Nh = {
          ...$o,
          handler: aM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: o } = e,
              { ixData: i } = o.getState(),
              { events: a } = i;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Gh) === r
              ? (Fe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Dh = 0.05),
        (jh = {
          [UD]: Mn(),
          [VD]: Fn(),
          [GD]: Mn(),
          [XD]: Fn(),
          [zD]: Mn(!1),
          [BD]: Fn(!1),
          [WD]: Mn(),
          [HD]: Fn(),
          [ZD]: { types: "ecommerce-cart-open", handler: Ke(nt, Fe) },
          [$D]: { types: "ecommerce-cart-close", handler: Ke(nt, Fe) },
          [ND]: {
            types: "click",
            handler: Ke(
              nt,
              Ph((e, { clickCount: t }) => {
                tM(e) ? t === 1 && Fe(e) : Fe(e);
              })
            ),
          },
          [DD]: {
            types: "click",
            handler: Ke(
              nt,
              Ph((e, { clickCount: t }) => {
                t === 2 && Fe(e);
              })
            ),
          },
          [MD]: { ...Cr, types: "mousedown" },
          [FD]: { ...Cr, types: "mouseup" },
          [qD]: {
            types: Rh,
            handler: Ke(
              nt,
              Ch((e, t) => {
                t.elementHovered && Fe(e);
              })
            ),
          },
          [kD]: {
            types: Rh,
            handler: Ke(
              nt,
              Ch((e, t) => {
                t.elementHovered || Fe(e);
              })
            ),
          },
          [KD]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: o,
              },
              i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: f,
                  restingState: _ = 0,
                } = r,
                {
                  clientX: v = i.clientX,
                  clientY: h = i.clientY,
                  pageX: I = i.pageX,
                  pageY: x = i.pageY,
                } = n,
                A = u === "X_AXIS",
                C = n.type === "mouseout",
                b = _ / 100,
                N = s,
                L = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  b = A
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: k,
                    scrollTop: G,
                    scrollWidth: D,
                    scrollHeight: Y,
                  } = xr();
                  b = A ? Math.min(k + I, D) / D : Math.min(G + x, Y) / Y;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  N = xh(o, s);
                  let k = n.type.indexOf("mouse") === 0;
                  if (k && nt({ element: t, nativeEvent: n }) !== !0) break;
                  let G = t.getBoundingClientRect(),
                    { left: D, top: Y, width: K, height: Q } = G;
                  if (!k && !sM({ left: v, top: h }, G)) break;
                  (L = !0), (b = A ? (v - D) / K : (h - Y) / Q);
                  break;
                }
              }
              return (
                C && (b > 1 - Dh || b < Dh) && (b = Math.round(b)),
                (a !== Je.ELEMENT || L || L !== i.elementHovered) &&
                  ((b = f ? 1 - b : b), e.dispatch($t(N, b))),
                {
                  elementHovered: L,
                  clientX: v,
                  clientY: h,
                  pageX: I,
                  pageY: x,
                }
              );
            },
          },
          [JD]: {
            types: Qo,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: o, scrollHeight: i, clientHeight: a } = xr(),
                u = o / (i - a);
              (u = n ? 1 - u : u), e.dispatch($t(r, u));
            },
          },
          [QD]: {
            types: Qo,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              o = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: i,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: f,
                } = xr(),
                {
                  basedOn: _,
                  selectedAxis: v,
                  continuousParameterGroupId: h,
                  startsEntering: I,
                  startsExiting: x,
                  addEndOffset: A,
                  addStartOffset: C,
                  addOffsetValue: b = 0,
                  endOffsetValue: N = 0,
                } = r,
                L = v === "X_AXIS";
              if (_ === Je.VIEWPORT) {
                let k = L ? i / u : a / s;
                return (
                  k !== o.scrollPercent && t.dispatch($t(h, k)),
                  { scrollPercent: k }
                );
              } else {
                let k = xh(n, h),
                  G = e.getBoundingClientRect(),
                  D = (C ? b : 0) / 100,
                  Y = (A ? N : 0) / 100;
                (D = I ? D : 1 - D), (Y = x ? Y : 1 - Y);
                let K = G.top + Math.min(G.height * D, f),
                  J = G.top + G.height * Y - K,
                  ee = Math.min(f + J, s),
                  O = Math.min(Math.max(0, f - K), ee) / ee;
                return (
                  O !== o.scrollPercent && t.dispatch($t(k, O)),
                  { scrollPercent: O }
                );
              }
            },
          },
          [Gh]: Nh,
          [jD]: Nh,
          [Xh]: {
            ...$o,
            handler: Lh((e, t) => {
              t.scrollingDown && Fe(e);
            }),
          },
          [YD]: {
            ...$o,
            handler: Lh((e, t) => {
              t.scrollingDown || Fe(e);
            }),
          },
          [Uh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Rr, uM(Fe)),
          },
          [Vh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Rr, cM(Fe)),
          },
        });
    });
  var dv = {};
  Pe(dv, {
    observeRequests: () => RM,
    startActionGroup: () => Lr,
    startEngine: () => Vn,
    stopActionGroup: () => Jt,
    stopAllActionGroups: () => cv,
    stopEngine: () => Wn,
  });
  function RM(e) {
    wt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: PM }),
      wt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: NM }),
      wt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: DM }),
      wt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: MM });
  }
  function CM(e) {
    wt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Wn(e),
          ov({ store: e, elementApi: Re }),
          Vn({ store: e, allowEvents: !0 }),
          av();
      },
    });
  }
  function LM(e, t) {
    let r = wt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function PM({ rawData: e, defer: t }, r) {
    let n = () => {
      Vn({ store: r, rawData: e, allowEvents: !0 }), av();
    };
    t ? setTimeout(n, 0) : n();
  }
  function av() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function NM(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: o,
        eventId: i,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: f = !0,
      } = e,
      { rawData: _ } = e;
    if (n && o && _ && u) {
      let v = _.actionLists[n];
      v && (_ = mM({ actionList: v, actionItemId: o, rawData: _ }));
    }
    if (
      (Vn({ store: t, rawData: _, allowEvents: a, testManual: s }),
      (n && r === Ne.GENERAL_START_ACTION) || Jo(r))
    ) {
      Jt({ store: t, actionListId: n }),
        uv({ store: t, actionListId: n, eventId: i });
      let v = Lr({
        store: t,
        eventId: i,
        actionListId: n,
        immediate: u,
        verbose: f,
      });
      f && v && t.dispatch(Zt({ actionListId: n, isPlaying: !u }));
    }
  }
  function DM({ actionListId: e }, t) {
    e ? Jt({ store: t, actionListId: e }) : cv({ store: t }), Wn(t);
  }
  function MM(e, t) {
    Wn(t), ov({ store: t, elementApi: Re });
  }
  function Vn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: o } = e.getState();
    t && e.dispatch(Co(t)),
      o.active ||
        (e.dispatch(
          Lo({
            hasBoundaryNodes: !!document.querySelector(kn),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (UM(e), FM(), e.getState().ixSession.hasDefinedMediaQueries && CM(e)),
        e.dispatch(Po()),
        qM(e, n));
  }
  function FM() {
    let { documentElement: e } = document;
    e.className.indexOf(Qh) === -1 && (e.className += ` ${Qh}`);
  }
  function qM(e, t) {
    let r = (n) => {
      let { ixSession: o, ixParameters: i } = e.getState();
      o.active &&
        (e.dispatch(On(n, i)), t ? LM(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Wn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(kM), TM(), e.dispatch(No());
    }
  }
  function kM({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function XM({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: o,
    actionListId: i,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: f, ixSession: _ } = e.getState(),
      { events: v } = f,
      h = v[n],
      { eventTypeId: I } = h,
      x = {},
      A = {},
      C = [],
      { continuousActionGroups: b } = a,
      { id: N } = a;
    yM(I, o) && (N = _M(t, N));
    let L = _.hasBoundaryNodes && r ? Sr(r, kn) : null;
    b.forEach((k) => {
      let { keyframe: G, actionItems: D } = k;
      D.forEach((Y) => {
        let { actionTypeId: K } = Y,
          { target: Q } = Y.config;
        if (!Q) return;
        let J = Q.boundaryMode ? L : null,
          ee = bM(Q) + ea + K;
        if (((A[ee] = GM(A[ee], G, Y)), !x[ee])) {
          x[ee] = !0;
          let { config: q } = Y;
          Xn({
            config: q,
            event: h,
            eventTarget: r,
            elementRoot: J,
            elementApi: Re,
          }).forEach((O) => {
            C.push({ element: O, key: ee });
          });
        }
      });
    }),
      C.forEach(({ element: k, key: G }) => {
        let D = A[G],
          Y = (0, ct.default)(D, "[0].actionItems[0]", {}),
          { actionTypeId: K } = Y,
          Q = Un(K) ? ra(K)(k, Y) : null,
          J = ta({ element: k, actionItem: Y, elementApi: Re }, Q);
        na({
          store: e,
          element: k,
          eventId: n,
          actionListId: i,
          actionItem: Y,
          destination: J,
          continuous: !0,
          parameterId: N,
          actionGroups: D,
          smoothing: u,
          restingValue: s,
          pluginInstance: Q,
        });
      });
  }
  function GM(e = [], t, r) {
    let n = [...e],
      o;
    return (
      n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
      o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[o].actionItems.push(r),
      n
    );
  }
  function UM(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    sv(e),
      (0, er.default)(r, (o, i) => {
        let a = jh[i];
        if (!a) {
          console.warn(`IX2 event type not configured: ${i}`);
          return;
        }
        KM({ logic: a, store: e, events: o });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && WM(e);
  }
  function WM(e) {
    let t = () => {
      sv(e);
    };
    VM.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(wn(window, [r, t]));
    }),
      t();
  }
  function sv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: o } = r;
      e.dispatch(ko({ width: n, mediaQueries: o }));
    }
  }
  function KM({ logic: e, store: t, events: r }) {
    jM(r);
    let { types: n, handler: o } = e,
      { ixData: i } = t.getState(),
      { actionLists: a } = i,
      u = HM(r, zM);
    if (!(0, Jh.default)(u)) return;
    (0, er.default)(u, (v, h) => {
      let I = r[h],
        { action: x, id: A, mediaQueries: C = i.mediaQueryKeys } = I,
        { actionListId: b } = x.config;
      AM(C, i.mediaQueryKeys) || t.dispatch(Xo()),
        x.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(I.config) ? I.config : [I.config]).forEach((L) => {
            let { continuousParameterGroupId: k } = L,
              G = (0, ct.default)(a, `${b}.continuousParameterGroups`, []),
              D = (0, Zh.default)(G, ({ id: Q }) => Q === k),
              Y = (L.smoothing || 0) / 100,
              K = (L.restingState || 0) / 100;
            D &&
              v.forEach((Q, J) => {
                let ee = A + ea + J;
                XM({
                  store: t,
                  eventStateKey: ee,
                  eventTarget: Q,
                  eventId: A,
                  eventConfig: L,
                  actionListId: b,
                  parameterGroup: D,
                  smoothing: Y,
                  restingValue: K,
                });
              });
          }),
        (x.actionTypeId === Ne.GENERAL_START_ACTION || Jo(x.actionTypeId)) &&
          uv({ store: t, actionListId: b, eventId: A });
    });
    let s = (v) => {
        let { ixSession: h } = t.getState();
        BM(u, (I, x, A) => {
          let C = r[x],
            b = h.eventState[A],
            { action: N, mediaQueries: L = i.mediaQueryKeys } = C;
          if (!Gn(L, h.mediaQueryKey)) return;
          let k = (G = {}) => {
            let D = o(
              {
                store: t,
                element: I,
                event: C,
                eventConfig: G,
                nativeEvent: v,
                eventStateKey: A,
              },
              b
            );
            wM(D, b) || t.dispatch(Do(A, D));
          };
          N.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(k)
            : k();
        });
      },
      f = (0, nv.default)(s, xM),
      _ = ({ target: v = document, types: h, throttle: I }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((x) => {
            let A = I ? f : s;
            v.addEventListener(x, A), t.dispatch(wn(v, [x, A]));
          });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function jM(e) {
    if (!SM) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: o, target: i } = e[n],
        a = Uo(i);
      t[a] ||
        ((o === Be.MOUSE_CLICK || o === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function uv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: o } = e.getState(),
      { actionLists: i, events: a } = n,
      u = a[r],
      s = i[t];
    if (s && s.useFirstGroupAsInitialState) {
      let f = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
        _ = (0, ct.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Gn(_, o.mediaQueryKey)) return;
      f.forEach((v) => {
        let { config: h, actionTypeId: I } = v,
          x =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : h,
          A = Xn({ config: x, event: u, elementApi: Re }),
          C = Un(I);
        A.forEach((b) => {
          let N = C ? ra(I)(b, v) : null;
          na({
            destination: ta({ element: b, actionItem: v, elementApi: Re }, N),
            immediate: !0,
            store: e,
            element: b,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function cv({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: o } = r;
        ia(r, e), o && e.dispatch(Zt({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function Jt({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
  }) {
    let { ixInstances: i, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? Sr(r, kn) : null;
    (0, er.default)(i, (s) => {
      let f = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
        _ = n ? s.eventStateKey === n : !0;
      if (s.actionListId === o && s.eventId === t && _) {
        if (u && f && !Vo(u, s.element)) return;
        ia(s, e),
          s.verbose && e.dispatch(Zt({ actionListId: o, isPlaying: !1 }));
      }
    });
  }
  function Lr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
    groupIndex: i = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: f } = e.getState(),
      { events: _ } = s,
      v = _[t] || {},
      { mediaQueries: h = s.mediaQueryKeys } = v,
      I = (0, ct.default)(s, `actionLists.${o}`, {}),
      { actionItemGroups: x, useFirstGroupAsInitialState: A } = I;
    if (!x || !x.length) return !1;
    i >= x.length && (0, ct.default)(v, "config.loop") && (i = 0),
      i === 0 && A && i++;
    let b =
        (i === 0 || (i === 1 && A)) && Jo(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      N = (0, ct.default)(x, [i, "actionItems"], []);
    if (!N.length || !Gn(h, f.mediaQueryKey)) return !1;
    let L = f.hasBoundaryNodes && r ? Sr(r, kn) : null,
      k = hM(N),
      G = !1;
    return (
      N.forEach((D, Y) => {
        let { config: K, actionTypeId: Q } = D,
          J = Un(Q),
          { target: ee } = K;
        if (!ee) return;
        let q = ee.boundaryMode ? L : null;
        Xn({
          config: K,
          event: v,
          eventTarget: r,
          elementRoot: q,
          elementApi: Re,
        }).forEach((M, z) => {
          let W = J ? ra(Q)(M, D) : null,
            te = J ? OM(Q)(M, D) : null;
          G = !0;
          let re = k === Y && z === 0,
            X = vM({ element: M, actionItem: D }),
            j = ta({ element: M, actionItem: D, elementApi: Re }, W);
          na({
            store: e,
            element: M,
            actionItem: D,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i,
            isCarrier: re,
            computedStyle: X,
            destination: j,
            immediate: a,
            verbose: u,
            pluginInstance: W,
            pluginDuration: te,
            instanceDelay: b,
          });
        });
      }),
      G
    );
  }
  function na(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: o,
        actionItem: i,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: f,
        eventId: _,
      } = n,
      v = !s,
      h = pM(),
      { ixElements: I, ixSession: x, ixData: A } = t.getState(),
      C = dM(I, o),
      { refState: b } = I[C] || {},
      N = Wo(o),
      L = x.reducedMotion && Ei[i.actionTypeId],
      k;
    if (L && s)
      switch (A.events[_]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          k = f;
          break;
        default:
          k = 0.5;
          break;
      }
    let G = EM(o, b, r, i, Re, u);
    if (
      (t.dispatch(
        Mo({
          instanceId: h,
          elementId: C,
          origin: G,
          refType: N,
          skipMotion: L,
          skipToValue: k,
          ...n,
        })
      ),
      lv(document.body, "ix2-animation-started", h),
      a)
    ) {
      YM(t, h);
      return;
    }
    wt({ store: t, select: ({ ixInstances: D }) => D[h], onChange: fv }),
      v && t.dispatch(Sn(h, x.tick));
  }
  function ia(e, t) {
    lv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: o } = t.getState(),
      { ref: i, refType: a } = o[r] || {};
    a === iv && IM(i, n, Re), t.dispatch(Fo(e.id));
  }
  function lv(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function YM(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Sn(t, 0)), e.dispatch(On(performance.now(), r));
    let { ixInstances: n } = e.getState();
    fv(n[t], e);
  }
  function fv(e, t) {
    let {
        active: r,
        continuous: n,
        complete: o,
        elementId: i,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: f,
        groupIndex: _,
        eventId: v,
        eventTarget: h,
        eventStateKey: I,
        actionListId: x,
        isCarrier: A,
        styleProp: C,
        verbose: b,
        pluginInstance: N,
      } = e,
      { ixData: L, ixSession: k } = t.getState(),
      { events: G } = L,
      D = G && G[v] ? G[v] : {},
      { mediaQueries: Y = L.mediaQueryKeys } = D;
    if (Gn(Y, k.mediaQueryKey) && (n || r || o)) {
      if (f || (s === fM && o)) {
        t.dispatch(qo(i, u, f, a));
        let { ixElements: K } = t.getState(),
          { ref: Q, refType: J, refState: ee } = K[i] || {},
          q = ee && ee[u];
        (J === iv || Un(u)) && gM(Q, ee, q, v, a, C, Re, s, N);
      }
      if (o) {
        if (A) {
          let K = Lr({
            store: t,
            eventId: v,
            eventTarget: h,
            eventStateKey: I,
            actionListId: x,
            groupIndex: _ + 1,
            verbose: b,
          });
          b && !K && t.dispatch(Zt({ actionListId: x, isPlaying: !1 }));
        }
        ia(e, t);
      }
    }
  }
  var Zh,
    ct,
    Jh,
    ev,
    tv,
    rv,
    er,
    nv,
    qn,
    lM,
    Jo,
    ea,
    kn,
    iv,
    fM,
    Qh,
    Xn,
    dM,
    ta,
    wt,
    pM,
    gM,
    ov,
    hM,
    vM,
    EM,
    mM,
    yM,
    _M,
    Gn,
    IM,
    TM,
    bM,
    AM,
    wM,
    Un,
    ra,
    OM,
    $h,
    SM,
    xM,
    VM,
    HM,
    BM,
    zM,
    Zo = Ee(() => {
      "use strict";
      (Zh = le(zi())),
        (ct = le(un())),
        (Jh = le(wp())),
        (ev = le($p())),
        (tv = le(Jp())),
        (rv = le(tg())),
        (er = le(sg())),
        (nv = le(gg()));
      De();
      qn = le(At());
      xn();
      _g();
      Yh();
      (lM = Object.keys(Xr)),
        (Jo = (e) => lM.includes(e)),
        ({
          COLON_DELIMITER: ea,
          BOUNDARY_SELECTOR: kn,
          HTML_ELEMENT: iv,
          RENDER_GENERAL: fM,
          W_MOD_IX: Qh,
        } = we),
        ({
          getAffectedElements: Xn,
          getElementId: dM,
          getDestinationValues: ta,
          observeStore: wt,
          getInstanceId: pM,
          renderHTMLElement: gM,
          clearAllStyles: ov,
          getMaxDurationItemIndex: hM,
          getComputedStyle: vM,
          getInstanceOrigin: EM,
          reduceListToGroup: mM,
          shouldNamespaceEventParameter: yM,
          getNamespacedParameterId: _M,
          shouldAllowMediaQuery: Gn,
          cleanupHTMLElement: IM,
          clearObjectCache: TM,
          stringifyTarget: bM,
          mediaQueriesEqual: AM,
          shallowEqual: wM,
        } = qn.IX2VanillaUtils),
        ({
          isPluginType: Un,
          createPluginInstance: ra,
          getPluginDuration: OM,
        } = qn.IX2VanillaPlugins),
        ($h = navigator.userAgent),
        (SM = $h.match(/iPad/i) || $h.match(/iPhone/)),
        (xM = 12);
      VM = ["resize", "orientationchange"];
      (HM = (e, t) => (0, ev.default)((0, rv.default)(e, t), tv.default)),
        (BM = (e, t) => {
          (0, er.default)(e, (r, n) => {
            r.forEach((o, i) => {
              let a = n + ea + i;
              t(o, n, a);
            });
          });
        }),
        (zM = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Xn({ config: t, elementApi: Re });
        });
    });
  var hv = d((aa) => {
    "use strict";
    Object.defineProperty(aa, "__esModule", { value: !0 });
    function QM(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    QM(aa, {
      actions: function () {
        return JM;
      },
      destroy: function () {
        return gv;
      },
      init: function () {
        return nF;
      },
      setEnv: function () {
        return rF;
      },
      store: function () {
        return Hn;
      },
    });
    var $M = gi(),
      ZM = eF((ap(), Qe(op))),
      oa = (Zo(), Qe(dv)),
      JM = tF((xn(), Qe(vg)));
    function eF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function pv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (pv = function (n) {
        return n ? r : t;
      })(e);
    }
    function tF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = pv(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Hn = (0, $M.createStore)(ZM.default);
    function rF(e) {
      e() && (0, oa.observeRequests)(Hn);
    }
    function nF(e) {
      gv(), (0, oa.startEngine)({ store: Hn, rawData: e, allowEvents: !0 });
    }
    function gv() {
      (0, oa.stopEngine)(Hn);
    }
  });
  var yv = d((iX, mv) => {
    "use strict";
    var vv = qe(),
      Ev = hv();
    Ev.setEnv(vv.env);
    vv.define(
      "ix2",
      (mv.exports = function () {
        return Ev;
      })
    );
  });
  var Iv = d((oX, _v) => {
    "use strict";
    var tr = qe();
    tr.define(
      "links",
      (_v.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = tr.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          _ = /\/$/,
          v,
          h;
        r.ready = r.design = r.preview = I;
        function I() {
          (o = i && tr.env("design")),
            (h = tr.env("slug") || a.pathname || ""),
            tr.scroll.off(A),
            (v = []);
          for (var b = document.links, N = 0; N < b.length; ++N) x(b[N]);
          v.length && (tr.scroll.on(A), A());
        }
        function x(b) {
          if (!b.getAttribute("hreflang")) {
            var N =
              (o && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((u.href = N), !(N.indexOf(":") >= 0))) {
              var L = e(b);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var k = e(u.hash);
                k.length && v.push({ link: L, sec: k, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var G =
                  u.href === a.href || N === h || (f.test(N) && _.test(h));
                C(L, s, G);
              }
            }
          }
        }
        function A() {
          var b = n.scrollTop(),
            N = n.height();
          t.each(v, function (L) {
            if (!L.link.attr("hreflang")) {
              var k = L.link,
                G = L.sec,
                D = G.offset().top,
                Y = G.outerHeight(),
                K = N * 0.5,
                Q = G.is(":visible") && D + Y - K >= b && D + K <= b + N;
              L.active !== Q && ((L.active = Q), C(k, s, Q));
            }
          });
        }
        function C(b, N, L) {
          var k = b.hasClass(N);
          (L && k) || (!L && !k) || (L ? b.addClass(N) : b.removeClass(N));
        }
        return r;
      })
    );
  });
  var bv = d((aX, Tv) => {
    "use strict";
    var Bn = qe();
    Bn.define(
      "scroll",
      (Tv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = x() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (q) {
              window.setTimeout(q, 15);
            },
          s = Bn.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(h));
        function x() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var A = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(q) {
          return A.test(q.hash) && q.host + q.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function L(q, O) {
          var M;
          switch (O) {
            case "add":
              (M = q.attr("tabindex")),
                M
                  ? q.attr("data-wf-tabindex-swap", M)
                  : q.attr("tabindex", "-1");
              break;
            case "remove":
              (M = q.attr("data-wf-tabindex-swap")),
                M
                  ? (q.attr("tabindex", M),
                    q.removeAttr("data-wf-tabindex-swap"))
                  : q.removeAttr("tabindex");
              break;
          }
          q.toggleClass("wf-force-outline-none", O === "add");
        }
        function k(q) {
          var O = q.currentTarget;
          if (
            !(
              Bn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))
            )
          ) {
            var M = C(O) ? O.hash : "";
            if (M !== "") {
              var z = e(M);
              z.length &&
                (q && (q.preventDefault(), q.stopPropagation()),
                G(M, q),
                window.setTimeout(
                  function () {
                    D(z, function () {
                      L(z, "add"),
                        z.get(0).focus({ preventScroll: !0 }),
                        L(z, "remove");
                    });
                  },
                  q ? 0 : 300
                ));
            }
          }
        }
        function G(q) {
          if (
            r.hash !== q &&
            n &&
            n.pushState &&
            !(Bn.env.chrome && r.protocol === "file:")
          ) {
            var O = n.state && n.state.hash;
            O !== q && n.pushState({ hash: q }, "", q);
          }
        }
        function D(q, O) {
          var M = o.scrollTop(),
            z = Y(q);
          if (M !== z) {
            var W = K(q, M, z),
              te = Date.now(),
              re = function () {
                var X = Date.now() - te;
                window.scroll(0, Q(M, z, X, W)),
                  X <= W ? u(re) : typeof O == "function" && O();
              };
            u(re);
          }
        }
        function Y(q) {
          var O = e(f),
            M = O.css("position") === "fixed" ? O.outerHeight() : 0,
            z = q.offset().top - M;
          if (q.data("scroll") === "mid") {
            var W = o.height() - M,
              te = q.outerHeight();
            te < W && (z -= Math.round((W - te) / 2));
          }
          return z;
        }
        function K(q, O, M) {
          if (N()) return 0;
          var z = 1;
          return (
            a.add(q).each(function (W, te) {
              var re = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (z = re);
            }),
            (472.143 * Math.log(Math.abs(O - M) + 125) - 2e3) * z
          );
        }
        function Q(q, O, M, z) {
          return M > z ? O : q + (O - q) * J(M / z);
        }
        function J(q) {
          return q < 0.5
            ? 4 * q * q * q
            : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
        }
        function ee() {
          var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: O } = t;
          i.on(O, v, k),
            i.on(q, _, function (M) {
              M.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: ee };
      })
    );
  });
  var wv = d((sX, Av) => {
    "use strict";
    var iF = qe();
    iF.define(
      "touch",
      (Av.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            _;
          i.addEventListener("touchstart", v, !1),
            i.addEventListener("touchmove", h, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", x, !1),
            i.addEventListener("mousedown", v, !1),
            i.addEventListener("mousemove", h, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", x, !1);
          function v(C) {
            var b = C.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((u = !0), (f = b[0].clientX)) : (f = C.clientX),
              (_ = f));
          }
          function h(C) {
            if (a) {
              if (u && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var b = C.touches,
                N = b ? b[0].clientX : C.clientX,
                L = N - _;
              (_ = N),
                Math.abs(L) > s &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", C, { direction: L > 0 ? "right" : "left" }), x());
            }
          }
          function I(C) {
            if (a && ((a = !1), u && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (u = !1);
              return;
            }
          }
          function x() {
            a = !1;
          }
          function A() {
            i.removeEventListener("touchstart", v, !1),
              i.removeEventListener("touchmove", h, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", x, !1),
              i.removeEventListener("mousedown", v, !1),
              i.removeEventListener("mousemove", h, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", x, !1),
              (i = null);
          }
          this.destroy = A;
        }
        function o(i, a, u) {
          var s = e.Event(i, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var xv = d((uX, Sv) => {
    "use strict";
    var Ot = qe(),
      oF = nr(),
      je = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Ov = !0,
      aF = /^#[a-zA-Z0-9\-_]+$/;
    Ot.define(
      "dropdown",
      (Sv.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Ot.env(),
          i = !1,
          a,
          u = Ot.env.touch,
          s = ".w-dropdown",
          f = "w--open",
          _ = oF.triggers,
          v = 900,
          h = "focusout" + s,
          I = "keydown" + s,
          x = "mouseenter" + s,
          A = "mousemove" + s,
          C = "mouseleave" + s,
          b = (u ? "click" : "mouseup") + s,
          N = "w-close" + s,
          L = "setting" + s,
          k = e(document),
          G;
        (n.ready = D),
          (n.design = function () {
            i && O(), (i = !1), D();
          }),
          (n.preview = function () {
            (i = !0), D();
          });
        function D() {
          (a = o && Ot.env("design")), (G = k.find(s)), G.each(Y);
        }
        function Y(c, F) {
          var U = e(F),
            S = e.data(F, s);
          S ||
            (S = e.data(F, s, {
              open: !1,
              el: U,
              config: {},
              selectedIdx: -1,
            })),
            (S.toggle = S.el.children(".w-dropdown-toggle")),
            (S.list = S.el.children(".w-dropdown-list")),
            (S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (S.complete = W(S)),
            (S.mouseLeave = re(S)),
            (S.mouseUpOutside = z(S)),
            (S.mouseMoveOutside = X(S)),
            K(S);
          var ie = S.toggle.attr("id"),
            fe = S.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + c),
            fe || (fe = "w-dropdown-list-" + c),
            S.toggle.attr("id", ie),
            S.toggle.attr("aria-controls", fe),
            S.toggle.attr("aria-haspopup", "menu"),
            S.toggle.attr("aria-expanded", "false"),
            S.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            S.toggle.prop("tagName") !== "BUTTON" &&
              (S.toggle.attr("role", "button"),
              S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")),
            S.list.attr("id", fe),
            S.list.attr("aria-labelledby", ie),
            S.links.each(function (g, V) {
              V.hasAttribute("tabindex") || V.setAttribute("tabindex", "0"),
                aF.test(V.hash) && V.addEventListener("click", q.bind(null, S));
            }),
            S.el.off(s),
            S.toggle.off(s),
            S.nav && S.nav.off(s);
          var oe = J(S, Ov);
          a && S.el.on(L, Q(S)),
            a ||
              (o && ((S.hovering = !1), q(S)),
              S.config.hover && S.toggle.on(x, te(S)),
              S.el.on(N, oe),
              S.el.on(I, j(S)),
              S.el.on(h, m(S)),
              S.toggle.on(b, oe),
              S.toggle.on(I, E(S)),
              (S.nav = S.el.closest(".w-nav")),
              S.nav.on(N, oe));
        }
        function K(c) {
          var F = Number(c.el.css("z-index"));
          (c.manageZ = F === v || F === v + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !u,
              delay: c.el.attr("data-delay"),
            });
        }
        function Q(c) {
          return function (F, U) {
            (U = U || {}),
              K(c),
              U.open === !0 && ee(c, !0),
              U.open === !1 && q(c, { immediate: !0 });
          };
        }
        function J(c, F) {
          return r(function (U) {
            if (c.open || (U && U.type === "w-close"))
              return q(c, { forceClose: F });
            ee(c);
          });
        }
        function ee(c) {
          if (!c.open) {
            M(c),
              (c.open = !0),
              c.list.addClass(f),
              c.toggle.addClass(f),
              c.toggle.attr("aria-expanded", "true"),
              _.intro(0, c.el[0]),
              Ot.redraw.up(),
              c.manageZ && c.el.css("z-index", v + 1);
            var F = Ot.env("editor");
            a || k.on(b, c.mouseUpOutside),
              c.hovering && !F && c.el.on(C, c.mouseLeave),
              c.hovering && F && k.on(A, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function q(c, { immediate: F, forceClose: U } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !U)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var S = c.config;
            if (
              (_.outro(0, c.el[0]),
              k.off(b, c.mouseUpOutside),
              k.off(A, c.mouseMoveOutside),
              c.el.off(C, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !S.delay || F)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, S.delay);
          }
        }
        function O() {
          k.find(s).each(function (c, F) {
            e(F).triggerHandler(N);
          });
        }
        function M(c) {
          var F = c.el[0];
          G.each(function (U, S) {
            var ie = e(S);
            ie.is(F) || ie.has(F).length || ie.triggerHandler(N);
          });
        }
        function z(c) {
          return (
            c.mouseUpOutside && k.off(b, c.mouseUpOutside),
            r(function (F) {
              if (c.open) {
                var U = e(F.target);
                if (!U.closest(".w-dropdown-toggle").length) {
                  var S = e.inArray(c.el[0], U.parents(s)) === -1,
                    ie = Ot.env("editor");
                  if (S) {
                    if (ie) {
                      var fe =
                          U.parents().length === 1 &&
                          U.parents("svg").length === 1,
                        oe = U.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (fe || oe) return;
                    }
                    q(c);
                  }
                }
              }
            })
          );
        }
        function W(c) {
          return function () {
            c.list.removeClass(f),
              c.toggle.removeClass(f),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function te(c) {
          return function () {
            (c.hovering = !0), ee(c);
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || q(c);
          };
        }
        function X(c) {
          return r(function (F) {
            if (c.open) {
              var U = e(F.target),
                S = e.inArray(c.el[0], U.parents(s)) === -1;
              if (S) {
                var ie = U.parents(".w-editor-bem-EditorHoverControls").length,
                  fe = U.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  g =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || fe || g) return;
                (c.hovering = !1), q(c);
              }
            }
          });
        }
        function j(c) {
          return function (F) {
            if (!(a || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                F.keyCode)
              ) {
                case je.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), p(c), F.preventDefault())
                    : void 0;
                case je.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      p(c),
                      F.preventDefault())
                    : void 0;
                case je.ESCAPE:
                  return q(c), c.toggle.focus(), F.stopPropagation();
                case je.ARROW_RIGHT:
                case je.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    p(c),
                    F.preventDefault()
                  );
                case je.ARROW_LEFT:
                case je.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    p(c),
                    F.preventDefault()
                  );
              }
          };
        }
        function p(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function E(c) {
          var F = J(c, Ov);
          return function (U) {
            if (!a) {
              if (!c.open)
                switch (U.keyCode) {
                  case je.ARROW_UP:
                  case je.ARROW_DOWN:
                    return U.stopPropagation();
                }
              switch (U.keyCode) {
                case je.SPACE:
                case je.ENTER:
                  return F(), U.stopPropagation(), U.preventDefault();
              }
            }
          };
        }
        function m(c) {
          return r(function (F) {
            var { relatedTarget: U, target: S } = F,
              ie = c.el[0],
              fe = ie.contains(U) || ie.contains(S);
            return fe || q(c), F.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var Cv = d((cX, Rv) => {
    "use strict";
    var sa = qe();
    sa.define(
      "forms",
      (Rv.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          f = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          v = window.alert,
          h = sa.env(),
          I,
          x,
          A,
          C = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !h && !I && k();
            };
        function N() {
          (s = e("html").attr("data-wf-site")),
            (x = "https://webflow.com/api/v1/form/" + s),
            a &&
              x.indexOf("https://webflow.com") >= 0 &&
              (x = x.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (A = `${x}/signFile`),
            (o = e(u + " form")),
            o.length && o.each(L);
        }
        function L(X, j) {
          var p = e(j),
            E = e.data(j, u);
          E || (E = e.data(j, u, { form: p })), G(E);
          var m = p.closest("div.w-form");
          (E.done = m.find("> .w-form-done")),
            (E.fail = m.find("> .w-form-fail")),
            (E.fileUploads = m.find(".w-file-upload")),
            E.fileUploads.each(function (U) {
              W(U, E);
            });
          var c =
            E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
          E.done.attr("aria-label") || E.form.attr("aria-label", c),
            E.done.attr("tabindex", "-1"),
            E.done.attr("role", "region"),
            E.done.attr("aria-label") ||
              E.done.attr("aria-label", c + " success"),
            E.fail.attr("tabindex", "-1"),
            E.fail.attr("role", "region"),
            E.fail.attr("aria-label") ||
              E.fail.attr("aria-label", c + " failure");
          var F = (E.action = p.attr("action"));
          if (
            ((E.handler = null),
            (E.redirect = p.attr("data-redirect")),
            C.test(F))
          ) {
            E.handler = O;
            return;
          }
          if (!F) {
            if (s) {
              E.handler = q;
              return;
            }
            b();
          }
        }
        function k() {
          (I = !0),
            n.on("submit", u + " form", function (U) {
              var S = e.data(this, u);
              S.handler && ((S.evt = U), S.handler(S));
            });
          let X = ".w-checkbox-input",
            j = ".w-radio-input",
            p = "w--redirected-checked",
            E = "w--redirected-focus",
            m = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            F = [
              ["checkbox", X],
              ["radio", j],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + X + ")",
            (U) => {
              e(U.target).siblings(X).toggleClass(p);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (U) => {
              e(`input[name="${U.target.name}"]:not(${X})`).map((ie, fe) =>
                e(fe).siblings(j).removeClass(p)
              );
              let S = e(U.target);
              S.hasClass("w-radio-input") || S.siblings(j).addClass(p);
            }),
            F.forEach(([U, S]) => {
              n.on(
                "focus",
                u + ` form input[type="${U}"]:not(` + S + ")",
                (ie) => {
                  e(ie.target).siblings(S).addClass(E),
                    e(ie.target).filter(c).siblings(S).addClass(m);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${U}"]:not(` + S + ")",
                  (ie) => {
                    e(ie.target).siblings(S).removeClass(`${E} ${m}`);
                  }
                );
            });
        }
        function G(X) {
          var j = (X.btn = X.form.find(':input[type="submit"]'));
          (X.wait = X.btn.attr("data-wait") || null),
            (X.success = !1),
            j.prop("disabled", !1),
            X.label && j.val(X.label);
        }
        function D(X) {
          var j = X.btn,
            p = X.wait;
          j.prop("disabled", !0), p && ((X.label = j.val()), j.val(p));
        }
        function Y(X, j) {
          var p = null;
          return (
            (j = j || {}),
            X.find(':input:not([type="submit"]):not([type="file"])').each(
              function (E, m) {
                var c = e(m),
                  F = c.attr("type"),
                  U =
                    c.attr("data-name") || c.attr("name") || "Field " + (E + 1);
                U = encodeURIComponent(U);
                var S = c.val();
                if (F === "checkbox") S = c.is(":checked");
                else if (F === "radio") {
                  if (j[U] === null || typeof j[U] == "string") return;
                  S =
                    X.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof S == "string" && (S = e.trim(S)),
                  (j[U] = S),
                  (p = p || ee(c, F, U, S));
              }
            ),
            p
          );
        }
        function K(X) {
          var j = {};
          return (
            X.find(':input[type="file"]').each(function (p, E) {
              var m = e(E),
                c = m.attr("data-name") || m.attr("name") || "File " + (p + 1),
                F = m.attr("data-value");
              typeof F == "string" && (F = e.trim(F)), (j[c] = F);
            }),
            j
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (j, p) {
            let E = p.split("="),
              m = E[0];
            if (m in Q) {
              let c = Q[m],
                F = E.slice(1).join("=");
              j[c] = F;
            }
            return j;
          }, {});
        }
        function ee(X, j, p, E) {
          var m = null;
          return (
            j === "password"
              ? (m = "Passwords cannot be submitted.")
              : X.attr("required")
              ? E
                ? f.test(X.attr("type")) &&
                  (_.test(E) ||
                    (m = "Please enter a valid email address for: " + p))
                : (m = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !E &&
                (m = "Please confirm you\u2019re not a robot."),
            m
          );
        }
        function q(X) {
          z(X), M(X);
        }
        function O(X) {
          G(X);
          var j = X.form,
            p = {};
          if (/^https/.test(i.href) && !/^https/.test(X.action)) {
            j.attr("method", "post");
            return;
          }
          z(X);
          var E = Y(j, p);
          if (E) return v(E);
          D(X);
          var m;
          t.each(p, function (S, ie) {
            f.test(ie) && (p.EMAIL = S),
              /^((full[ _-]?)?name)$/i.test(ie) && (m = S),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = S),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = S);
          }),
            m &&
              !p.FNAME &&
              ((m = m.split(" ")),
              (p.FNAME = m[0]),
              (p.LNAME = p.LNAME || m[1]));
          var c = X.action.replace("/post?", "/post-json?") + "&c=?",
            F = c.indexOf("u=") + 2;
          F = c.substring(F, c.indexOf("&", F));
          var U = c.indexOf("id=") + 3;
          (U = c.substring(U, c.indexOf("&", U))),
            (p["b_" + F + "_" + U] = ""),
            e
              .ajax({ url: c, data: p, dataType: "jsonp" })
              .done(function (S) {
                (X.success = S.result === "success" || /already/.test(S.msg)),
                  X.success || console.info("MailChimp error: " + S.msg),
                  M(X);
              })
              .fail(function () {
                M(X);
              });
        }
        function M(X) {
          var j = X.form,
            p = X.redirect,
            E = X.success;
          if (E && p) {
            sa.location(p);
            return;
          }
          X.done.toggle(E),
            X.fail.toggle(!E),
            E ? X.done.focus() : X.fail.focus(),
            j.toggle(!E),
            G(X);
        }
        function z(X) {
          X.evt && X.evt.preventDefault(), (X.evt = null);
        }
        function W(X, j) {
          if (!j.fileUploads || !j.fileUploads[X]) return;
          var p,
            E = e(j.fileUploads[X]),
            m = E.find("> .w-file-upload-default"),
            c = E.find("> .w-file-upload-uploading"),
            F = E.find("> .w-file-upload-success"),
            U = E.find("> .w-file-upload-error"),
            S = m.find(".w-file-upload-input"),
            ie = m.find(".w-file-upload-label"),
            fe = ie.children(),
            oe = U.find(".w-file-upload-error-msg"),
            g = F.find(".w-file-upload-file"),
            V = F.find(".w-file-remove-link"),
            $ = g.find(".w-file-upload-file-name"),
            H = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Ce = oe.attr("data-w-generic-error");
          if (
            (h ||
              ie.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), S.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            h)
          )
            S.on("click", function (T) {
              T.preventDefault();
            }),
              ie.on("click", function (T) {
                T.preventDefault();
              }),
              fe.on("click", function (T) {
                T.preventDefault();
              });
          else {
            V.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              S.removeAttr("data-value"),
                S.val(""),
                $.html(""),
                m.toggle(!0),
                F.toggle(!1),
                ie.focus();
            }),
              S.on("change", function (T) {
                (p = T.target && T.target.files && T.target.files[0]),
                  p &&
                    (m.toggle(!1),
                    U.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    $.text(p.name),
                    R() || D(j),
                    (j.fileUploads[X].uploading = !0),
                    te(p, y));
              });
            var Xe = ie.outerHeight();
            S.height(Xe), S.width(1);
          }
          function l(T) {
            var P = T.responseJSON && T.responseJSON.msg,
              Z = Ce;
            typeof P == "string" && P.indexOf("InvalidFileTypeError") === 0
              ? (Z = de)
              : typeof P == "string" &&
                P.indexOf("MaxFileSizeError") === 0 &&
                (Z = H),
              oe.text(Z),
              S.removeAttr("data-value"),
              S.val(""),
              c.toggle(!1),
              m.toggle(!0),
              U.toggle(!0),
              U.focus(),
              (j.fileUploads[X].uploading = !1),
              R() || G(j);
          }
          function y(T, P) {
            if (T) return l(T);
            var Z = P.fileName,
              ae = P.postData,
              he = P.fileId,
              B = P.s3Url;
            S.attr("data-value", he), re(B, ae, p, Z, w);
          }
          function w(T) {
            if (T) return l(T);
            c.toggle(!1),
              F.css("display", "inline-block"),
              F.focus(),
              (j.fileUploads[X].uploading = !1),
              R() || G(j);
          }
          function R() {
            var T = (j.fileUploads && j.fileUploads.toArray()) || [];
            return T.some(function (P) {
              return P.uploading;
            });
          }
        }
        function te(X, j) {
          var p = new URLSearchParams({ name: X.name, size: X.size });
          e.ajax({ type: "GET", url: `${A}?${p}`, crossDomain: !0 })
            .done(function (E) {
              j(null, E);
            })
            .fail(function (E) {
              j(E);
            });
        }
        function re(X, j, p, E, m) {
          var c = new FormData();
          for (var F in j) c.append(F, j[F]);
          c.append("file", p, E),
            e
              .ajax({
                type: "POST",
                url: X,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                m(null);
              })
              .fail(function (U) {
                m(U);
              });
        }
        return r;
      })
    );
  });
  var Pv = d((lX, Lv) => {
    "use strict";
    var vt = qe(),
      sF = nr(),
      Ae = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    vt.define(
      "navbar",
      (Lv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          u,
          s,
          f,
          _,
          v = vt.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          I = ".w-nav",
          x = "w--open",
          A = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          b = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          L = sF.triggers,
          k = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (k = e()), D(), s && s.length && s.each(J);
          });
        function G() {
          (f = v && vt.env("design")),
            (_ = vt.env("editor")),
            (u = e(document.body)),
            (s = i.find(I)),
            s.length && (s.each(Q), D(), Y());
        }
        function D() {
          vt.resize.off(K);
        }
        function Y() {
          vt.resize.on(K);
        }
        function K() {
          s.each(m);
        }
        function Q(g, V) {
          var $ = e(V),
            H = e.data(V, I);
          H ||
            (H = e.data(V, I, {
              open: !1,
              el: $,
              config: {},
              selectedIdx: -1,
            })),
            (H.menu = $.find(".w-nav-menu")),
            (H.links = H.menu.find(".w-nav-link")),
            (H.dropdowns = H.menu.find(".w-dropdown")),
            (H.dropdownToggle = H.menu.find(".w-dropdown-toggle")),
            (H.dropdownList = H.menu.find(".w-dropdown-list")),
            (H.button = $.find(".w-nav-button")),
            (H.container = $.find(".w-container")),
            (H.overlayContainerId = "w-nav-overlay-" + g),
            (H.outside = p(H));
          var de = $.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            H.button.attr("style", "-webkit-user-select: text;"),
            H.button.attr("aria-label") == null &&
              H.button.attr("aria-label", "menu"),
            H.button.attr("role", "button"),
            H.button.attr("tabindex", "0"),
            H.button.attr("aria-controls", H.overlayContainerId),
            H.button.attr("aria-haspopup", "menu"),
            H.button.attr("aria-expanded", "false"),
            H.el.off(I),
            H.button.off(I),
            H.menu.off(I),
            O(H),
            f
              ? (ee(H), H.el.on("setting" + I, M(H)))
              : (q(H),
                H.button.on("click" + I, X(H)),
                H.menu.on("click" + I, "a", j(H)),
                H.button.on("keydown" + I, z(H)),
                H.el.on("keydown" + I, W(H))),
            m(g, V);
        }
        function J(g, V) {
          var $ = e.data(V, I);
          $ && (ee($), e.removeData(V, I));
        }
        function ee(g) {
          g.overlay && (oe(g, !0), g.overlay.remove(), (g.overlay = null));
        }
        function q(g) {
          g.overlay ||
            ((g.overlay = e(h).appendTo(g.el)),
            g.overlay.attr("id", g.overlayContainerId),
            (g.parent = g.menu.parent()),
            oe(g, !0));
        }
        function O(g) {
          var V = {},
            $ = g.config || {},
            H = (V.animation = g.el.attr("data-animation") || "default");
          (V.animOver = /^over/.test(H)),
            (V.animDirect = /left$/.test(H) ? -1 : 1),
            $.animation !== H && g.open && t.defer(re, g),
            (V.easing = g.el.attr("data-easing") || "ease"),
            (V.easing2 = g.el.attr("data-easing2") || "ease");
          var de = g.el.attr("data-duration");
          (V.duration = de != null ? Number(de) : 400),
            (V.docHeight = g.el.attr("data-doc-height")),
            (g.config = V);
        }
        function M(g) {
          return function (V, $) {
            $ = $ || {};
            var H = o.width();
            O(g),
              $.open === !0 && ie(g, !0),
              $.open === !1 && oe(g, !0),
              g.open &&
                t.defer(function () {
                  H !== o.width() && re(g);
                });
          };
        }
        function z(g) {
          return function (V) {
            switch (V.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return X(g)(), V.preventDefault(), V.stopPropagation();
              case Ae.ESCAPE:
                return oe(g), V.preventDefault(), V.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return g.open
                  ? (V.keyCode === Ae.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    te(g),
                    V.preventDefault(),
                    V.stopPropagation())
                  : (V.preventDefault(), V.stopPropagation());
            }
          };
        }
        function W(g) {
          return function (V) {
            if (g.open)
              switch (
                ((g.selectedIdx = g.links.index(document.activeElement)),
                V.keyCode)
              ) {
                case Ae.HOME:
                case Ae.END:
                  return (
                    V.keyCode === Ae.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    te(g),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ae.ESCAPE:
                  return (
                    oe(g),
                    g.button.focus(),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return (
                    (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)),
                    te(g),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return (
                    (g.selectedIdx = Math.min(
                      g.links.length - 1,
                      g.selectedIdx + 1
                    )),
                    te(g),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
              }
          };
        }
        function te(g) {
          if (g.links[g.selectedIdx]) {
            var V = g.links[g.selectedIdx];
            V.focus(), j(V);
          }
        }
        function re(g) {
          g.open && (oe(g, !0), ie(g, !0));
        }
        function X(g) {
          return a(function () {
            g.open ? oe(g) : ie(g);
          });
        }
        function j(g) {
          return function (V) {
            var $ = e(this),
              H = $.attr("href");
            if (!vt.validClick(V.currentTarget)) {
              V.preventDefault();
              return;
            }
            H && H.indexOf("#") === 0 && g.open && oe(g);
          };
        }
        function p(g) {
          return (
            g.outside && i.off("click" + I, g.outside),
            function (V) {
              var $ = e(V.target);
              (_ && $.closest(".w-editor-bem-EditorOverlay").length) || E(g, $);
            }
          );
        }
        var E = a(function (g, V) {
          if (g.open) {
            var $ = V.closest(".w-nav-menu");
            g.menu.is($) || oe(g);
          }
        });
        function m(g, V) {
          var $ = e.data(V, I),
            H = ($.collapsed = $.button.css("display") !== "none");
          if (($.open && !H && !f && oe($, !0), $.container.length)) {
            var de = F($);
            $.links.each(de), $.dropdowns.each(de);
          }
          $.open && fe($);
        }
        var c = "max-width";
        function F(g) {
          var V = g.container.css(c);
          return (
            V === "none" && (V = ""),
            function ($, H) {
              (H = e(H)), H.css(c, ""), H.css(c) === "none" && H.css(c, V);
            }
          );
        }
        function U(g, V) {
          V.setAttribute("data-nav-menu-open", "");
        }
        function S(g, V) {
          V.removeAttribute("data-nav-menu-open");
        }
        function ie(g, V) {
          if (g.open) return;
          (g.open = !0),
            g.menu.each(U),
            g.links.addClass(N),
            g.dropdowns.addClass(A),
            g.dropdownToggle.addClass(C),
            g.dropdownList.addClass(b),
            g.button.addClass(x);
          var $ = g.config,
            H = $.animation;
          (H === "none" || !n.support.transform || $.duration <= 0) && (V = !0);
          var de = fe(g),
            Ce = g.menu.outerHeight(!0),
            Xe = g.menu.outerWidth(!0),
            l = g.el.height(),
            y = g.el[0];
          if (
            (m(0, y),
            L.intro(0, y),
            vt.redraw.up(),
            f || i.on("click" + I, g.outside),
            V)
          ) {
            T();
            return;
          }
          var w = "transform " + $.duration + "ms " + $.easing;
          if (
            (g.overlay &&
              ((k = g.menu.prev()), g.overlay.show().append(g.menu)),
            $.animOver)
          ) {
            n(g.menu)
              .add(w)
              .set({ x: $.animDirect * Xe, height: de })
              .start({ x: 0 })
              .then(T),
              g.overlay && g.overlay.width(Xe);
            return;
          }
          var R = l + Ce;
          n(g.menu).add(w).set({ y: -R }).start({ y: 0 }).then(T);
          function T() {
            g.button.attr("aria-expanded", "true");
          }
        }
        function fe(g) {
          var V = g.config,
            $ = V.docHeight ? i.height() : u.height();
          return (
            V.animOver
              ? g.menu.height($)
              : g.el.css("position") !== "fixed" && ($ -= g.el.outerHeight(!0)),
            g.overlay && g.overlay.height($),
            $
          );
        }
        function oe(g, V) {
          if (!g.open) return;
          (g.open = !1), g.button.removeClass(x);
          var $ = g.config;
          if (
            (($.animation === "none" ||
              !n.support.transform ||
              $.duration <= 0) &&
              (V = !0),
            L.outro(0, g.el[0]),
            i.off("click" + I, g.outside),
            V)
          ) {
            n(g.menu).stop(), y();
            return;
          }
          var H = "transform " + $.duration + "ms " + $.easing2,
            de = g.menu.outerHeight(!0),
            Ce = g.menu.outerWidth(!0),
            Xe = g.el.height();
          if ($.animOver) {
            n(g.menu)
              .add(H)
              .start({ x: Ce * $.animDirect })
              .then(y);
            return;
          }
          var l = Xe + de;
          n(g.menu).add(H).start({ y: -l }).then(y);
          function y() {
            g.menu.height(""),
              n(g.menu).set({ x: 0, y: 0 }),
              g.menu.each(S),
              g.links.removeClass(N),
              g.dropdowns.removeClass(A),
              g.dropdownToggle.removeClass(C),
              g.dropdownList.removeClass(b),
              g.overlay &&
                g.overlay.children().length &&
                (k.length ? g.menu.insertAfter(k) : g.menu.prependTo(g.parent),
                g.overlay.attr("style", "").hide()),
              g.el.triggerHandler("w-close"),
              g.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Mv = d((fX, Dv) => {
    "use strict";
    var Et = qe(),
      uF = nr(),
      it = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Nv =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Et.define(
      "slider",
      (Dv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          u = Et.env(),
          s = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          _ =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          h = uF.triggers,
          I,
          x = !1;
        (r.ready = function () {
          (a = Et.env("design")), A();
        }),
          (r.design = function () {
            (a = !0), setTimeout(A, 1e3);
          }),
          (r.preview = function () {
            (a = !1), A();
          }),
          (r.redraw = function () {
            (x = !0), A(), (x = !1);
          }),
          (r.destroy = C);
        function A() {
          (i = o.find(s)), i.length && (i.each(L), !I && (C(), b()));
        }
        function C() {
          Et.resize.off(N), Et.redraw.off(r.redraw);
        }
        function b() {
          Et.resize.on(N), Et.redraw.on(r.redraw);
        }
        function N() {
          i.filter(":visible").each(W);
        }
        function L(p, E) {
          var m = e(E),
            c = e.data(E, s);
          c ||
            (c = e.data(E, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: m,
              config: {},
            })),
            (c.mask = m.children(".w-slider-mask")),
            (c.left = m.children(".w-slider-arrow-left")),
            (c.right = m.children(".w-slider-arrow-right")),
            (c.nav = m.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(h.reset),
            x && (c.maskWidth = 0),
            m.attr("role") === void 0 && m.attr("role", "region"),
            m.attr("aria-label") === void 0 && m.attr("aria-label", "carousel");
          var F = c.mask.attr("id");
          if (
            (F || ((F = "w-slider-mask-" + p), c.mask.attr("id", F)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(_).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", F),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", F),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (I = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            k(c),
            a
              ? (c.el.on("setting" + s, O(c)), q(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, O(c)),
                c.left.on("click" + s, K(c)),
                c.right.on("click" + s, Q(c)),
                c.left.on("keydown" + s, Y(c, K)),
                c.right.on("keydown" + s, Y(c, Q)),
                c.nav.on("keydown" + s, "> div", O(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), ee(c)),
                c.el.on("mouseenter" + s, D(c, !0, "mouse")),
                c.el.on("focusin" + s, D(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, D(c, !1, "mouse")),
                c.el.on("focusout" + s, D(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", O(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var U = m.filter(":hidden");
          U.addClass(v);
          var S = m.parents(":hidden");
          S.addClass(v), x || W(p, E), U.removeClass(v), S.removeClass(v);
        }
        function k(p) {
          var E = {};
          (E.crossOver = 0),
            (E.animation = p.el.attr("data-animation") || "slide"),
            E.animation === "outin" &&
              ((E.animation = "cross"), (E.crossOver = 0.5)),
            (E.easing = p.el.attr("data-easing") || "ease");
          var m = p.el.attr("data-duration");
          if (
            ((E.duration = m != null ? parseInt(m, 10) : 500),
            G(p.el.attr("data-infinite")) && (E.infinite = !0),
            G(p.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
            G(p.el.attr("data-hide-arrows"))
              ? (E.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            G(p.el.attr("data-autoplay")))
          ) {
            (E.autoplay = !0),
              (E.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (E.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            a ||
              p.el.off(c).one(c, function () {
                q(p);
              });
          }
          var F = p.right.width();
          (E.edge = F ? F + 40 : 100), (p.config = E);
        }
        function G(p) {
          return p === "1" || p === "true";
        }
        function D(p, E, m) {
          return function (c) {
            if (E) p.hasFocus[m] = E;
            else if (
              e.contains(p.el.get(0), c.relatedTarget) ||
              ((p.hasFocus[m] = E),
              (p.hasFocus.mouse && m === "keyboard") ||
                (p.hasFocus.keyboard && m === "mouse"))
            )
              return;
            E
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && q(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && ee(p));
          };
        }
        function Y(p, E) {
          return function (m) {
            switch (m.keyCode) {
              case it.SPACE:
              case it.ENTER:
                return E(p)(), m.preventDefault(), m.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            z(p, { index: p.index - 1, vector: -1 });
          };
        }
        function Q(p) {
          return function () {
            z(p, { index: p.index + 1, vector: 1 });
          };
        }
        function J(p, E) {
          var m = null;
          E === p.slides.length && (A(), te(p)),
            t.each(p.anchors, function (c, F) {
              e(c.els).each(function (U, S) {
                e(S).index() === E && (m = F);
              });
            }),
            m != null && z(p, { index: m, immediate: !0 });
        }
        function ee(p) {
          q(p);
          var E = p.config,
            m = E.timerMax;
          (m && p.timerCount++ > m) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (Q(p)(), ee(p));
            }, E.delay));
        }
        function q(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function O(p) {
          return function (E, m) {
            m = m || {};
            var c = p.config;
            if (a && E.type === "setting") {
              if (m.select === "prev") return K(p)();
              if (m.select === "next") return Q(p)();
              if ((k(p), te(p), m.select == null)) return;
              J(p, m.select);
              return;
            }
            if (E.type === "swipe")
              return c.disableSwipe || Et.env("editor")
                ? void 0
                : m.direction === "left"
                ? Q(p)()
                : m.direction === "right"
                ? K(p)()
                : void 0;
            if (p.nav.has(E.target).length) {
              var F = e(E.target).index();
              if (
                (E.type === "click" && z(p, { index: F }), E.type === "keydown")
              )
                switch (E.keyCode) {
                  case it.ENTER:
                  case it.SPACE: {
                    z(p, { index: F }), E.preventDefault();
                    break;
                  }
                  case it.ARROW_LEFT:
                  case it.ARROW_UP: {
                    M(p.nav, Math.max(F - 1, 0)), E.preventDefault();
                    break;
                  }
                  case it.ARROW_RIGHT:
                  case it.ARROW_DOWN: {
                    M(p.nav, Math.min(F + 1, p.pages)), E.preventDefault();
                    break;
                  }
                  case it.HOME: {
                    M(p.nav, 0), E.preventDefault();
                    break;
                  }
                  case it.END: {
                    M(p.nav, p.pages), E.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function M(p, E) {
          var m = p.children().eq(E).focus();
          p.children().not(m);
        }
        function z(p, E) {
          E = E || {};
          var m = p.config,
            c = p.anchors;
          p.previous = p.index;
          var F = E.index,
            U = {};
          F < 0
            ? ((F = c.length - 1),
              m.infinite &&
                ((U.x = -p.endX), (U.from = 0), (U.to = c[0].width)))
            : F >= c.length &&
              ((F = 0),
              m.infinite &&
                ((U.x = c[c.length - 1].width),
                (U.from = -c[c.length - 1].x),
                (U.to = U.from - U.x))),
            (p.index = F);
          var S = p.nav
            .children()
            .eq(F)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(S)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            m.hideArrows &&
              (p.index === c.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            fe = (p.offsetX = -c[p.index].x),
            oe = { x: fe, opacity: 1, visibility: "" },
            g = e(c[p.index].els),
            V = e(c[p.previous] && c[p.previous].els),
            $ = p.slides.not(g),
            H = m.animation,
            de = m.easing,
            Ce = Math.round(m.duration),
            Xe = E.vector || (p.index > p.previous ? 1 : -1),
            l = "opacity " + Ce + "ms " + de,
            y = "transform " + Ce + "ms " + de;
          if (
            (g.find(Nv).removeAttr("tabindex"),
            g.removeAttr("aria-hidden"),
            g.find("*").removeAttr("aria-hidden"),
            $.find(Nv).attr("tabindex", "-1"),
            $.attr("aria-hidden", "true"),
            $.find("*").attr("aria-hidden", "true"),
            a || (g.each(h.intro), $.each(h.outro)),
            E.immediate && !x)
          ) {
            n(g).set(oe), T();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${F + 1} of ${c.length}.`),
            H === "cross")
          ) {
            var w = Math.round(Ce - Ce * m.crossOver),
              R = Math.round(Ce - w);
            (l = "opacity " + w + "ms " + de),
              n(V).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(g)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .wait(R)
                .then({ opacity: 1 })
                .then(T);
            return;
          }
          if (H === "fade") {
            n(V).set({ visibility: "" }).stop(),
              n(g)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(T);
            return;
          }
          if (H === "over") {
            (oe = { x: p.endX }),
              n(V).set({ visibility: "" }).stop(),
              n(g)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: fe + c[p.index].width * Xe,
                })
                .add(y)
                .start({ x: fe })
                .then(T);
            return;
          }
          m.infinite && U.x
            ? (n(p.slides.not(V))
                .set({ visibility: "", x: U.x })
                .add(y)
                .start({ x: fe }),
              n(V).set({ visibility: "", x: U.from }).add(y).start({ x: U.to }),
              (p.shifted = V))
            : (m.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(y).start({ x: fe }));
          function T() {
            (g = e(c[p.index].els)),
              ($ = p.slides.not(g)),
              H !== "slide" && (oe.visibility = "hidden"),
              n($).set(oe);
          }
        }
        function W(p, E) {
          var m = e.data(E, s);
          if (m) {
            if (X(m)) return te(m);
            a && j(m) && te(m);
          }
        }
        function te(p) {
          var E = 1,
            m = 0,
            c = 0,
            F = 0,
            U = p.maskWidth,
            S = U - p.config.edge;
          S < 0 && (S = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (fe, oe) {
              c - m > S &&
                (E++,
                (m += U),
                (p.anchors[E - 1] = { els: [], x: c, width: 0 })),
                (F = e(oe).outerWidth(!0)),
                (c += F),
                (p.anchors[E - 1].width += F),
                p.anchors[E - 1].els.push(oe);
              var g = fe + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", g), e(oe).attr("role", "group");
            }),
            (p.endX = c),
            a && (p.pages = null),
            p.nav.length && p.pages !== E && ((p.pages = E), re(p));
          var ie = p.index;
          ie >= E && (ie = E - 1), z(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var E = [],
            m,
            c = p.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var F = 0, U = p.pages; F < U; F++)
            (m = e(f)),
              m
                .attr("aria-label", "Show slide " + (F + 1) + " of " + U)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && m.text(F + 1),
              c != null && m.css({ "margin-left": c, "margin-right": c }),
              E.push(m);
          p.nav.empty().append(E);
        }
        function X(p) {
          var E = p.mask.width();
          return p.maskWidth !== E ? ((p.maskWidth = E), !0) : !1;
        }
        function j(p) {
          var E = 0;
          return (
            p.slides.each(function (m, c) {
              E += e(c).outerWidth(!0);
            }),
            p.slidesWidth !== E ? ((p.slidesWidth = E), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Ia();
  ba();
  Oa();
  nr();
  yv();
  Iv();
  bv();
  wv();
  xv();
  Cv();
  Pv();
  Mv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "66cde38023387d736eebd475|b9c346f1-75b3-80b3-301a-bbdf02b7efb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cde38023387d736eebd475|b9c346f1-75b3-80b3-301a-bbdf02b7efb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 100,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 100,
          restingState: 50,
        },
      ],
      createdOn: 1639021304021,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-3" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cde38023387d736eebd475|3ab3b2c1-cf07-9de7-fcf0-481042428434",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cde38023387d736eebd475|3ab3b2c1-cf07-9de7-fcf0-481042428434",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1651035616094,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cde38023387d736eebd475|671dd605-27d8-2132-2d39-fd1480f93967",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cde38023387d736eebd475|671dd605-27d8-2132-2d39-fd1480f93967",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600235063090,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cde38023387d736eebd475|671dd605-27d8-2132-2d39-fd1480f93967",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cde38023387d736eebd475|671dd605-27d8-2132-2d39-fd1480f93967",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600235063090,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-wrapper",
        originalId:
          "61dada55249fb024f975bc25|578d10d2-d021-f6d8-fcfb-8faa2ae5de31",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-wrapper",
          originalId:
            "61dada55249fb024f975bc25|578d10d2-d021-f6d8-fcfb-8faa2ae5de31",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1641856802172,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-wrapper",
        originalId:
          "61dada55249fb024f975bc25|578d10d2-d021-f6d8-fcfb-8faa2ae5de31",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-wrapper",
          originalId:
            "61dada55249fb024f975bc25|578d10d2-d021-f6d8-fcfb-8faa2ae5de31",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1641856802172,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-item-line",
        originalId:
          "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-item-line",
          originalId:
            "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1646655723184,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".faq-item-line",
        originalId:
          "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".faq-item-line",
          originalId:
            "61ef7f445c03bc13aa721b01|bcd7b69a-90e9-fa95-907a-8147b8eea56e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1646655723184,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cde38023387d736eebd475",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cde38023387d736eebd475",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 47,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1651037923492,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cdef9e98a619d8e9c26c82",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cdef9e98a619d8e9c26c82",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-9-p",
          smoothing: 47,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1724772255042,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66cdf1088ac75f5ef1849666",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66cdf1088ac75f5ef1849666",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-10-p",
          smoothing: 47,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1724772617114,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-22" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66d02f6262976ec6e6c105de|3ab3b2c1-cf07-9de7-fcf0-481042428434",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66d02f6262976ec6e6c105de|3ab3b2c1-cf07-9de7-fcf0-481042428434",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1724919652099,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-13", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66d02f6262976ec6e6c105de",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66d02f6262976ec6e6c105de",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-13-p",
          smoothing: 47,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1724919652099,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-27" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66d04db6758d8fce07f6ed4d|3ab3b2c1-cf07-9de7-fcf0-481042428434",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66d04db6758d8fce07f6ed4d|3ab3b2c1-cf07-9de7-fcf0-481042428434",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1724927414799,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66d04db6758d8fce07f6ed4d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66d04db6758d8fce07f6ed4d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 47,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1724927414799,
    },
    "e-29": {
      id: "e-29",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-slide",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd4d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-slide",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd4d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574139126618,
    },
    "e-30": {
      id: "e-30",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-slide",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd4d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-slide",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd4d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574139126618,
    },
    "e-31": {
      id: "e-31",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-right",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd5d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-right",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd5d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574135786096,
    },
    "e-32": {
      id: "e-32",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-right",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd5d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-right",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd5d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574135786096,
    },
    "e-33": {
      id: "e-33",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-left",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd6d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-left",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd6d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574147693612,
    },
    "e-34": {
      id: "e-34",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-left",
        originalId:
          "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd6d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-left",
          originalId:
            "66cde38023387d736eebd475|50975e12-76ba-a29a-0752-4f788d3ccd6d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1574147693613,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Simple Mouse Parralax",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-heart",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce47"],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-pen",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce49"],
                    },
                    yValue: 30,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".laptop",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce6a"],
                    },
                    yValue: 15,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-heart",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce47"],
                    },
                    yValue: 30,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-pen",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce49"],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".laptop",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce6a"],
                    },
                    yValue: -15,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-heart",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce47"],
                    },
                    xValue: -30,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-pen",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce49"],
                    },
                    xValue: 30,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".laptop",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce6a"],
                    },
                    xValue: null,
                    yValue: 15,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-heart",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce47"],
                    },
                    xValue: 30,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".card-pen",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce49"],
                    },
                    xValue: -30,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".laptop",
                      selectorGuids: ["f6009927-70d7-c6b3-eb19-c589f653ce6a"],
                    },
                    yValue: -15,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1639021311149,
    },
    "a-2": {
      id: "a-2",
      title: "(Toggle) Show Individuo",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".yearly-wrapper",
                  selectorGuids: ["95fb55e5-3e82-79af-a0c1-dbeba116f14d"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 240,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-round",
                  selectorGuids: ["95fb55e5-3e82-79af-a0c1-dbeba116f15a"],
                },
                xValue: 36,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".blocco-azienda",
                  selectorGuids: ["d6ea03b6-52b6-ae95-1b47-7f0190cea32b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".blocco-azienda",
                  selectorGuids: ["d6ea03b6-52b6-ae95-1b47-7f0190cea32b"],
                },
                value: "none",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".footer-form-two.blocco-individuo",
                  selectorGuids: [
                    "989d0219-f03b-00f8-6800-dcd26fc8c565",
                    "3367390f-d9dd-9b08-5585-c38247aa9fe7",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-form-two.blocco-individuo",
                  selectorGuids: [
                    "989d0219-f03b-00f8-6800-dcd26fc8c565",
                    "3367390f-d9dd-9b08-5585-c38247aa9fe7",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-2-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".azienda-par",
                  selectorGuids: ["f6a663a7-cb9b-0248-5dea-67db38e507ff"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".azienda-par",
                  selectorGuids: ["f6a663a7-cb9b-0248-5dea-67db38e507ff"],
                },
                value: "none",
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".individuo-par",
                  selectorGuids: ["2da72bf7-e2c7-df96-c1ff-6ad44ecbe417"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".individuo-par",
                  selectorGuids: ["2da72bf7-e2c7-df96-c1ff-6ad44ecbe417"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1600234540795,
    },
    "a-3": {
      id: "a-3",
      title: "(Toggle) Show Azienda",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".blocco-individuo",
                  selectorGuids: ["7b34b714-b138-b2e5-349b-8f2aa01041dc"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "swingFrom",
                duration: 240,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-round",
                  selectorGuids: ["95fb55e5-3e82-79af-a0c1-dbeba116f15a"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".blocco-azienda",
                  selectorGuids: ["d6ea03b6-52b6-ae95-1b47-7f0190cea32b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".blocco-azienda",
                  selectorGuids: ["d6ea03b6-52b6-ae95-1b47-7f0190cea32b"],
                },
                value: "flex",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".footer-form-two.blocco-individuo",
                  selectorGuids: [
                    "989d0219-f03b-00f8-6800-dcd26fc8c565",
                    "3367390f-d9dd-9b08-5585-c38247aa9fe7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-form-two.blocco-individuo",
                  selectorGuids: [
                    "989d0219-f03b-00f8-6800-dcd26fc8c565",
                    "3367390f-d9dd-9b08-5585-c38247aa9fe7",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-3-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".azienda-par",
                  selectorGuids: ["f6a663a7-cb9b-0248-5dea-67db38e507ff"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".azienda-par",
                  selectorGuids: ["f6a663a7-cb9b-0248-5dea-67db38e507ff"],
                },
                value: "block",
              },
            },
            {
              id: "a-3-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 240,
                target: {
                  selector: ".individuo-par",
                  selectorGuids: ["2da72bf7-e2c7-df96-c1ff-6ad44ecbe417"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".individuo-par",
                  selectorGuids: ["2da72bf7-e2c7-df96-c1ff-6ad44ecbe417"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1600234540795,
    },
    "a-4": {
      id: "a-4",
      title: "Hover / Blog Card / In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["0dcb627f-0815-48fb-b090-9ef7568394e8"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-heading",
                  selectorGuids: ["58921e0b-00c8-3389-7b75-379b0c435cec"],
                },
                globalSwatchId: "9f39f68f",
                rValue: 19,
                bValue: 255,
                gValue: 85,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1641856805016,
    },
    "a-5": {
      id: "a-5",
      title: "Hover / Blog Card / Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["0dcb627f-0815-48fb-b090-9ef7568394e8"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-heading",
                  selectorGuids: ["58921e0b-00c8-3389-7b75-379b0c435cec"],
                },
                globalSwatchId: "734bf5e2",
                rValue: 6,
                bValue: 55,
                gValue: 18,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1641856805016,
    },
    "a-6": {
      id: "a-6",
      title: "Click / Accordian / OPEN 🟢",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8738"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: -10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8738"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "2d1581e5",
                rValue: 100,
                bValue: 255,
                gValue: 46,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "swingFromTo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8740"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8740"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1630185343811,
    },
    "a-7": {
      id: "a-7",
      title: "Click / Accordian / CLOSE 🔴",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-content",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8738"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 200,
                target: {},
                yValue: -10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {},
                globalSwatchId: "7b64cafb",
                rValue: 22,
                bValue: 66,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8740"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["daf846ec-d1d6-b000-46da-0ec297bd8740"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1630185343811,
    },
    "a-8": {
      id: "a-8",
      title: "Nav Color Change",
      continuousParameterGroups: [
        {
          id: "a-8-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-8-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-8-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-8-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-8-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-8-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-8-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "e2f97efd-812e-0919-8230-33257edca12a" },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1651037926740,
    },
    "a-9": {
      id: "a-9",
      title: "Nav Color Change 2",
      continuousParameterGroups: [
        {
          id: "a-9-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-9-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-9-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-9-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-9-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-9-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-9-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdef9e98a619d8e9c26c82|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1651037926740,
    },
    "a-10": {
      id: "a-10",
      title: "Nav Color Change 3",
      continuousParameterGroups: [
        {
          id: "a-10-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-10-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-10-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-10-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-10-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-10-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-10-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66cdf1088ac75f5ef1849666|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1651037926740,
    },
    "a-13": {
      id: "a-13",
      title: "Nav Color Change 4",
      continuousParameterGroups: [
        {
          id: "a-13-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-13-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-13-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-13-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-13-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-13-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-13-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d02f6262976ec6e6c105de|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1651037926740,
    },
    "a-15": {
      id: "a-15",
      title: "Nav Color Change 6",
      continuousParameterGroups: [
        {
          id: "a-15-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-15-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-15-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-15-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-15-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-15-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 245,
                    bValue: 234,
                    gValue: 242,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-15-n-6",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "66d04db6758d8fce07f6ed4d|b9c346f1-75b3-80b3-301a-bbdf02b7ef9c",
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1651037926740,
    },
    "a-16": {
      id: "a-16",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1574139138359,
    },
    "a-17": {
      id: "a-17",
      title: "New Timed Animation 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-image-block",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba17"],
                },
                yValue: 35,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1574139138359,
    },
    "a-18": {
      id: "a-18",
      title: "Right Arrow (Hover)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba12"],
                },
                xValue: 4,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1574135795703,
    },
    "a-19": {
      id: "a-19",
      title: "Right Arrow (Hover Out)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba12"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1574135795703,
    },
    "a-20": {
      id: "a-20",
      title: "Left Arrow (Hover)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba12"],
                },
                xValue: -4,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1574135795703,
    },
    "a-21": {
      id: "a-21",
      title: "Left Arrow (Hover Out)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["86822dc6-ff11-a26b-e997-9f293a7fba12"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1574135795703,
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
