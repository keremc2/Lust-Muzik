(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [120],
  {
    8e3: function (e, t, n) {
      "use strict";
      var a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      const o = (
        (a = n(7423)) && a.__esModule ? a : { default: a }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    5646: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(r.AmpStateContext));
        });
      var a,
        o = (a = n(7423)) && a.__esModule ? a : { default: a },
        r = n(8e3);
      function i({ ampFirst: e = !1, hybrid: t = !1, hasQuery: n = !1 } = {}) {
        return e || (t && n);
      }
    },
    2717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = l),
        (t.default = void 0);
      var a,
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var a =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, n)
                    : {};
                a.get || a.set ? Object.defineProperty(t, n, a) : (t[n] = e[n]);
              }
          return (t.default = e), t;
        })(n(7423)),
        r = (a = n(1585)) && a.__esModule ? a : { default: a },
        i = n(8e3),
        s = n(5850),
        c = n(5646);
      function l(e = !1) {
        const t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" === typeof t || "number" === typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      const d = ["name", "httpEquiv", "charSet", "itemProp"];
      function u(e, t) {
        return e
          .reduce((e, t) => {
            const n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              const e = new Set(),
                t = new Set(),
                n = new Set(),
                a = {};
              return (o) => {
                let r = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  const t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (r = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (r = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = d.length; e < t; e++) {
                      const t = d[e];
                      if (o.props.hasOwnProperty(t))
                        if ("charSet" === t) n.has(t) ? (r = !1) : n.add(t);
                        else {
                          const e = o.props[t],
                            n = a[t] || new Set();
                          ("name" === t && i) || !n.has(e)
                            ? (n.add(e), (a[t] = n))
                            : (r = !1);
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map((e, n) => {
            const a = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              const t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: a });
          });
      }
      var m = function ({ children: e }) {
        const t = o.useContext(i.AmpStateContext),
          n = o.useContext(s.HeadManagerContext);
        return o.default.createElement(
          r.default,
          {
            reduceComponentsToState: u,
            headManager: n,
            inAmpMode: c.isInAmpMode(t),
          },
          e
        );
      };
      t.default = m;
    },
    1585: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var a =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              a.get || a.set ? Object.defineProperty(t, n, a) : (t[n] = e[n]);
            }
        return (t.default = e), t;
      })(n(7423));
      class o extends a.Component {
        constructor(e) {
          super(e),
            (this.emitChange = () => {
              this._hasHeadManager &&
                this.props.headManager.updateHead(
                  this.props.reduceComponentsToState(
                    [...this.props.headManager.mountedInstances],
                    this.props
                  )
                );
            }),
            (this._hasHeadManager =
              this.props.headManager &&
              this.props.headManager.mountedInstances);
        }
        componentDidMount() {
          this._hasHeadManager &&
            this.props.headManager.mountedInstances.add(this),
            this.emitChange();
        }
        componentDidUpdate() {
          this.emitChange();
        }
        componentWillUnmount() {
          this._hasHeadManager &&
            this.props.headManager.mountedInstances.delete(this),
            this.emitChange();
        }
        render() {
          return null;
        }
      }
      t.default = o;
    },
    9051: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return w;
          },
          default: function () {
            return x;
          },
        });
      var a = n(9756),
        o = n(7423),
        r = n(4055),
        i = n(4234),
        s = n(6354),
        c = n(7615),
        l = n(2005),
        p = n(6160),
        d = n(1717),
        u = n(5137);
      function m(e = []) {
        const t = `https://fonts.googleapis.com/css2?family=${e
          .map((e) => {
            const [t, n] = e.split(":");
            return `${t.replace(/\s+/g, "+")}:wght@${n.split(",").join(";")}`;
          })
          .join("&family=")}&display=swap`;
        return [
          ...[
            o.default.createElement("link", {
              key: "gf-preconnect-1",
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            }),
            o.default.createElement("link", {
              key: "gf-preconnect-2",
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossOrigin: !0,
            }),
          ],
          o.default.createElement("link", {
            key: "gf-stylesheet",
            rel: "stylesheet",
            href: t,
          }),
        ];
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      class h extends o.default.Component {
        constructor(e) {
          super(e), (this.state = { done: !1 });
        }
        componentDidMount() {
          const { origin: e, changeContext: t } = this.props;
          if ("WORDPRESS" === e) {
            t((0, d.findContext)());
          }
        }
        checkForceDeployPending = () => {
          const { previewData: e = {}, origin: t } = this.props,
            { domain: n = "", order: a = {} } = e;
          return (
            ("WORDPRESS" === t && !a.paid) || !("CLIENT" !== t || !n || a.paid)
          );
        };
        render = () => {
          const {
            blueprint: e,
            deployPending: t,
            context: n,
            hasError: a = !1,
            origin: r,
            activeFonts: s = [],
          } = this.props;
          return this.checkForceDeployPending()
            ? o.default.createElement(y, null)
            : !a &&
              e[n] &&
              e[n].components &&
              Object.keys(e[n].components).length > 0
            ? o.default.createElement(
                o.default.Fragment,
                null,
                "WORDPRESS" === r &&
                  o.default.createElement(
                    u.Helmet,
                    null,
                    " ",
                    o.default.createElement("link", {
                      rel: "preload",
                      href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
                      as: "style",
                    }),
                    o.default.createElement("link", {
                      rel: "stylesheet",
                      href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
                    }),
                    o.default.createElement("link", {
                      href: "https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,500,600,700,800,900&display=swap",
                      rel: "stylesheet",
                    }),
                    m(s)
                  ),
                o.default.createElement(
                  c.default,
                  f({}, this.props, {
                    context: n,
                    done: !0,
                    toggleDone: (e) => this.setState({ done: e }),
                  })
                )
              )
            : this.props.isFetching
            ? o.default.createElement(l.default, null)
            : o.default.createElement(i.default, {
                origin: this.props.origin,
                type: t
                  ? p.builderConstants.errorpages.deploy
                  : p.builderConstants.errorpages.client,
              });
        };
      }
      var g = (0, a.$j)(
        (e) => ({
          screenWidth: e.ui.screenWidth,
          isFetching: e.customization.present.isFetchingHost,
          gridLayout: e.customization.present.gridLayout,
          previewData: e.customization.present.data,
          blueprint: e.customization.present.data.blueprint,
          projectMeta: e.customization.present.data.projectMeta,
          stateManagement: e.stateManagement,
          name: e.customization.present.data.name,
          classes: e.customization.present.data.classes,
          deployPending: e.customization.present.deployPending,
          canvasInit: e.customization.present.canvasInit,
          css: e.customization.present.data.css,
          js: e.customization.present.data.js,
          uiState: e.customization.present.uiState,
          storeState: e,
          context: e.customization.present.context,
          analytics: e.customization.present.data.analytics,
          activeFonts: e.customization.present.activeFonts,
        }),
        (e) => ({
          changeContext: (t) => {
            e(s.customizationActions.changeContext(t));
          },
          updateProjectName: (t) => {
            e(s.customizationActions.updateProjectName(t));
          },
          updateBlueprintContents: (t, n, a) => {
            e(s.customizationActions.updateBlueprintContents(t, n, a));
          },
          initiateCanvas: () => {
            e(s.customizationActions.initiateCanvas());
          },
          changeView: (t) => {
            e(s.customizationActions.changeView(t));
          },
          updateUIState: (t = {}) => {
            e(s.customizationActions.updateUIState(t));
          },
        })
      )(h);
      const y = () =>
        o.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              width: "100%",
              height: "100vh",
              margin: "0px",
              minHeight: "20px",
              minWidth: "20px",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "10px",
              padding: "16px",
            },
          },
          o.default.createElement(
            "span",
            {
              style: {
                display: "block",
                width: "fit-content",
                height: "auto",
                margin: "0px",
                minHeight: "10px",
                minWidth: "16px",
                position: "relative",
                fontFamily: "Nunito Sans",
                fontSize: "22px",
                fontWeight: "400",
                color: "#000000",
                lineHeight: "32px",
              },
            },
            "Page is waiting to be deployed \u2615\ufe0f"
          ),
          o.default.createElement(
            "span",
            {
              style: {
                display: "block",
                width: "fit-content",
                height: "auto",
                margin: "0",
                minHeight: "10px",
                minWidth: "16px",
                maxWidth: "600px",
                position: "relative",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontWeight: "400",
                color: "#000000",
                lineHeight: "26px",
                textAlign: "center",
              },
            },
            "If this is your site, please click on 'Publish' on the top right corner of the builder, and press 'Deploy Current Version to Live'. Can't wait to see what you've built!"
          )
        );
      var v = n(782),
        E = n(9008);
      var w = !0,
        x = (0, a.$j)(null)(function (e) {
          const t = (0, a.I0)(),
            {
              hasError: n,
              fonts: i = [],
              pageMeta: s = {},
              projectMeta: c = {},
              name: l,
            } = e;
          (0, o.useEffect)(
            () => (
              p(),
              window.addEventListener("resize", p),
              () => {
                window.removeEventListener("resize", p);
              }
            ),
            []
          );
          const p = () => {
            let e,
              n = window.innerWidth;
            n >= 1200
              ? (e = "xl")
              : n >= 992
              ? (e = "lg")
              : n >= 768
              ? (e = "md")
              : n >= 576
              ? (e = "sm")
              : n >= 479
              ? (e = "xs")
              : n < 479 && (e = "xxs"),
              t(r.uiActions.setView(e, n));
          };
          let d = {
              name: s.name || "",
              title: s.title || "",
              description: s.description || "",
              favIcon: s.favIcon || "",
              headExtras: s.headExtras || "",
            },
            u = {
              title: c.metaTitle || "",
              description: c.metaDescription || "",
              favIcon: c.favIcon || "",
              headExtras: c.headExtras,
              googleMetaImage: c.googleMetaImage || "",
            },
            f = d.name || u.name || "",
            h = d.title || u.title || "",
            y = d.description || u.description || "",
            w = u.googleMetaImage || "";
          const x = (e) => e.charAt(0).toUpperCase() + e.slice(1);
          let k;
          return (
            (k = h || `${x(l)} | ${x(f)}`),
            o.default.createElement(
              "div",
              null,
              o.default.createElement(
                E.default,
                null,
                o.default.createElement("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, maximum-scale=1",
                }),
                o.default.createElement("meta", {
                  name: "version",
                  content: "1.1.79",
                  key: "cd-meta-version",
                }),
                o.default.createElement("meta", {
                  charSet: "utf-8",
                  key: "cd-meta-charSet",
                }),
                o.default.createElement(
                  "title",
                  { key: "cd-page-title" },
                  " ",
                  k,
                  " "
                ),
                k &&
                  o.default.createElement("meta", {
                    property: "og:title",
                    content: k,
                    key: "cd-page-ogtitle",
                  }),
                k &&
                  o.default.createElement("meta", {
                    property: "twitter:title",
                    content: k,
                    key: "cd-page-twittertitle",
                  }),
                y &&
                  o.default.createElement("meta", {
                    name: "description",
                    content: y,
                    key: "cd-page-metadesc",
                  }),
                y &&
                  o.default.createElement("meta", {
                    property: "og:description",
                    content: y,
                    key: "cd-page-ogdesc",
                  }),
                y &&
                  o.default.createElement("meta", {
                    property: "twitter:description",
                    content: y,
                    key: "cd-page-twitterdesc",
                  }),
                w &&
                  o.default.createElement("meta", {
                    property: "og:image",
                    content: w,
                    key: "cd-page-ogimage",
                  }),
                w &&
                  o.default.createElement("meta", {
                    property: "twitter:image",
                    content: w,
                    key: "cd-page-twitterimage",
                  }),
                o.default.createElement("link", {
                  rel: "preload",
                  href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
                  as: "style",
                }),
                o.default.createElement("link", {
                  rel: "stylesheet",
                  href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
                }),
                m(i)
              ),
              o.default.createElement(g, { hasError: n, origin: "CLIENT" }),
              o.default.createElement(v.Ix, null)
            )
          );
        });
    },
    7708: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return n(9051);
        },
      ]);
    },
    9008: function (e, t, n) {
      e.exports = n(2717);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 7708), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
