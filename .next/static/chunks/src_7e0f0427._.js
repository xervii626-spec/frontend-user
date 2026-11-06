(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/AuthGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthGuard(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { accessToken, hydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "AuthGuard.useAppSelector": (s)=>s.auth
    }["AuthGuard.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (!hydrated) return;
            if (!accessToken) {
                router.replace("/login");
            }
        }
    }["AuthGuard.useEffect"], [
        hydrated,
        accessToken,
        router
    ]);
    if (!hydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    if (!accessToken) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Redirecting to login…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(AuthGuard, "drsmUSe2QUQnRCjm+av4pjAqGZA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = AuthGuard;
var _c;
__turbopack_context__.k.register(_c, "AuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/money-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatMmk",
    ()=>formatMmk,
    "formatUsd",
    ()=>formatUsd
]);
function formatUsd(value) {
    const n = Number(value !== null && value !== void 0 ? value : 0);
    if (Number.isNaN(n)) return "0.00";
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function formatMmk(usd, rate) {
    const u = Number(usd !== null && usd !== void 0 ? usd : 0);
    const r = Number(rate !== null && rate !== void 0 ? rate : 0);
    if (Number.isNaN(u) || Number.isNaN(r)) return "0.00";
    return (u * r).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/LobbyHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LobbyHeader",
    ()=>LobbyHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money-format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NAV = [
    {
        key: "games",
        label: "Games",
        href: "/games"
    },
    {
        key: "wallet",
        label: "Wallet",
        href: "/wallet"
    },
    {
        key: "deposit",
        label: "Deposit",
        href: "/deposit"
    }
];
function LobbyHeader(param) {
    let { active = "games", balanceUsd = "0", mmkPerUsd = "4500", onLogout } = param;
    _s();
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const usd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUsd"])(balanceUsd);
    const mmk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMmk"])(balanceUsd, mmkPerUsd);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full border-b border-[#d4af37]/15 bg-[#01100b]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-[76px] w-full items-center justify-between gap-3 px-3 sm:h-[84px] sm:px-4 lg:px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/games",
                    className: "flex shrink-0 items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/brand/lotus-mark.jpg",
                            alt: "Shwe Dunn",
                            width: 46,
                            height: 46,
                            className: "rounded-full object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leading-[1.1]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-[family-name:var(--font-cinzel)] text-[1.15rem] font-semibold tracking-[0.12em] text-[#e8c547] sm:text-[1.3rem]",
                                    children: "SHWE DUNN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.62rem] font-medium tracking-[0.16em] text-[#c5bba3] sm:text-[0.68rem]",
                                    children: "PLAY RICH • WIN GOLD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex lg:gap-2.5",
                    children: NAV.map((item)=>{
                        const isActive = item.key === active;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[0.95rem] font-semibold transition lg:px-5 ".concat(isActive ? "bg-[#d4af37] text-[#1a1205]" : "text-white hover:text-[#e8c547]"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIcon, {
                                    name: item.key,
                                    active: isActive
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this),
                                item.label
                            ]
                        }, item.key, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-xl border border-[#d4af37]/50 bg-[#021a12] px-3.5 py-2 sm:gap-3.5 sm:px-4 sm:py-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[0.58rem] font-semibold tracking-[0.14em] text-[#9a9280]",
                                            children: "BALANCE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[1.05rem] font-bold text-white sm:text-[1.15rem]",
                                            children: hidden ? "••••" : "".concat(usd, " USD")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-light text-[#d4af37]",
                                    children: "="
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[0.58rem] font-semibold tracking-[0.14em] text-[#9a9280]",
                                            children: "MMK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[1.05rem] font-bold text-[#e8c547] sm:text-[1.15rem]",
                                            children: hidden ? "••••" : mmk
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": hidden ? "Show balance" : "Hide balance",
                                    onClick: ()=>setHidden((v)=>!v),
                                    className: "text-[#d4af37] hover:text-[#f0d78c]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {
                                        open: !hidden
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        onLogout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onLogout,
                            className: "hidden rounded-xl border border-[#d4af37]/50 px-3.5 py-2.5 text-[0.82rem] font-semibold text-[#e8c547] hover:bg-[#d4af37]/10 sm:inline-flex",
                            children: "Log out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(LobbyHeader, "kQt600tPsTduHMlWvIDJn56wzAI=");
_c = LobbyHeader;
function NavIcon(param) {
    let { name, active } = param;
    const stroke = active ? "#1a1205" : "#d4af37";
    const common = {
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke,
        strokeWidth: 1.8
    };
    if (name === "games") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12 20 7.5M12 12v9M12 12 4 7.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    }
    if (name === "wallet") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "6",
                    width: "18",
                    height: "13",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 10h18M16 14.5h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...common,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "6",
                width: "18",
                height: "13",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1M12 11v5M9.5 13.5 12 11l2.5 2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c1 = NavIcon;
function EyeIcon(param) {
    let { open } = param;
    if (open) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.7",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4 4 16 16"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c2 = EyeIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LobbyHeader");
__turbopack_context__.k.register(_c1, "NavIcon");
__turbopack_context__.k.register(_c2, "EyeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/deposit/WalletSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletSidebar",
    ()=>WalletSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money-format.ts [app-client] (ecmascript)");
"use client";
;
;
;
const ITEMS = [
    {
        key: "deposit",
        label: "Deposit"
    },
    {
        key: "withdraw",
        label: "Withdraw"
    },
    {
        key: "history",
        label: "History"
    },
    {
        key: "transactions",
        label: "Transactions",
        href: "/wallet"
    }
];
function WalletSidebar(param) {
    let { active, balanceUsd, mmkPerUsd, onSelect } = param;
    const usd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUsd"])(balanceUsd);
    const mmk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMmk"])(balanceUsd, mmkPerUsd);
    const rate = Number(mmkPerUsd || 0).toLocaleString("en-US");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex w-full flex-col rounded-xl border border-[#d4af37]/40 bg-[#02150f] lg:w-[260px] lg:shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-[#d4af37]/25 px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.7rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                        children: "USER WALLET"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-lg border border-[#d4af37]/35 bg-[#01100b] px-3.5 py-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.65rem] font-semibold tracking-[0.14em] text-[#9a9280]",
                                children: "TOTAL BALANCE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[1.45rem] font-bold leading-none text-[#e8c547]",
                                children: [
                                    "USD ",
                                    usd
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[0.9rem] font-medium text-white",
                                children: [
                                    "MMK ",
                                    mmk
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[0.72rem] text-[#9a9280]",
                                children: [
                                    "1 USD = ",
                                    rate,
                                    " MMK"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-1.5 p-3",
                children: ITEMS.map((item)=>{
                    const isActive = item.key === active;
                    const className = "inline-flex items-center gap-3 rounded-lg border px-3.5 py-3 text-[0.95rem] font-semibold transition ".concat(isActive ? "border-[#d4af37] bg-[#d4af37]/15 text-[#e8c547]" : "border-transparent text-white hover:border-[#d4af37]/35 hover:text-[#e8c547]");
                    if (item.href) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: className,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideIcon, {
                                    name: item.key,
                                    active: isActive
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this),
                                item.label
                            ]
                        }, item.key, true, {
                            fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(item.key),
                        className: className,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideIcon, {
                                name: item.key,
                                active: isActive
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto border-t border-[#d4af37]/20 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex items-start gap-2 text-[0.72rem] leading-relaxed text-[#9a9280]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        "Your funds are safe and secure with Shwe Dunn Casino."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = WalletSidebar;
function SideIcon(param) {
    let { name, active } = param;
    const stroke = active ? "#e8c547" : "#d4af37";
    const common = {
        width: 18,
        height: 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke,
        strokeWidth: 1.7
    };
    if (name === "deposit") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "6",
                    width: "18",
                    height: "13",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 10v5M9.5 12.5 12 10l2.5 2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    }
    if (name === "withdraw") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "6",
                    width: "18",
                    height: "13",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 15v-5M9.5 12.5 12 15l2.5-2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    }
    if (name === "history") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 8v4.5L15 15"
                }, void 0, false, {
                    fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...common,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7h16v12H4V7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7V5h8v2M8 12h8M8 15h5"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c1 = SideIcon;
function LockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#d4af37",
        strokeWidth: "1.7",
        className: "mt-0.5 shrink-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "11",
                width: "14",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 11V8a4 4 0 0 1 8 0v3"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/WalletSidebar.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c2 = LockIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WalletSidebar");
__turbopack_context__.k.register(_c1, "SideIcon");
__turbopack_context__.k.register(_c2, "LockIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/deposit/deposit-mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPOSIT_MAX_MMK",
    ()=>DEPOSIT_MAX_MMK,
    "DEPOSIT_METHODS",
    ()=>DEPOSIT_METHODS,
    "DEPOSIT_MIN_MMK",
    ()=>DEPOSIT_MIN_MMK
]);
const DEPOSIT_METHODS = [
    {
        id: "kbz-wave",
        label: "KBZ Wave Bank",
        short: "KBZ"
    },
    {
        id: "kbzpay",
        label: "KBZPay",
        short: "Pay"
    },
    {
        id: "wavepay",
        label: "WavePay",
        short: "Wave"
    },
    {
        id: "cb-bank",
        label: "CB Bank",
        short: "CB"
    }
];
const DEPOSIT_MIN_MMK = 10_000;
const DEPOSIT_MAX_MMK = 5_000_000;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/paymentsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentsApi",
    ()=>paymentsApi,
    "useCancelPaymentMutation",
    ()=>useCancelPaymentMutation,
    "useCreateDepositMutation",
    ()=>useCreateDepositMutation,
    "useCreateWithdrawMutation",
    ()=>useCreateWithdrawMutation,
    "useGetMyPaymentsQuery",
    ()=>useGetMyPaymentsQuery,
    "useGetRateQuery",
    ()=>useGetRateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const paymentsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getRate: build.query({
                query: ()=>"/payments/rate"
            }),
            getMyPayments: build.query({
                query: (params)=>{
                    var _params_page, _params_limit;
                    return {
                        url: "/payments/me",
                        params: {
                            page: (_params_page = params === null || params === void 0 ? void 0 : params.page) !== null && _params_page !== void 0 ? _params_page : 1,
                            limit: (_params_limit = params === null || params === void 0 ? void 0 : params.limit) !== null && _params_limit !== void 0 ? _params_limit : 20
                        }
                    };
                },
                providesTags: [
                    "Wallet"
                ]
            }),
            createDeposit: build.mutation({
                query: (body)=>({
                        url: "/payments/deposit",
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Wallet",
                    "Me"
                ]
            }),
            createWithdraw: build.mutation({
                query: (body)=>({
                        url: "/payments/withdraw",
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Wallet",
                    "Me"
                ]
            }),
            cancelPayment: build.mutation({
                query: (param)=>{
                    let { id } = param;
                    return {
                        url: "/payments/me/".concat(id, "/cancel"),
                        method: "POST"
                    };
                },
                invalidatesTags: [
                    "Wallet",
                    "Me"
                ]
            })
        })
});
const { useGetRateQuery, useGetMyPaymentsQuery, useCreateDepositMutation, useCreateWithdrawMutation, useCancelPaymentMutation } = paymentsApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/payment-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPaymentDateTime",
    ()=>formatPaymentDateTime,
    "formatPaymentRequestId",
    ()=>formatPaymentRequestId,
    "formatStatusLabel",
    ()=>formatStatusLabel,
    "isPendingDeposit",
    ()=>isPendingDeposit,
    "isPendingPayment",
    ()=>isPendingPayment,
    "statusPillClass",
    ()=>statusPillClass
]);
function formatPaymentRequestId(id, type) {
    const prefix = type === "withdraw" ? "WRQ" : "DRQ";
    return "".concat(prefix, "-").concat(String(id).padStart(6, "0"));
}
function formatPaymentDateTime(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}
function formatStatusLabel(status) {
    return status.toUpperCase();
}
function statusPillClass(status) {
    const s = status.toLowerCase();
    if (s === "pending") {
        return "border-[#d4af37]/55 bg-[#d4af37]/15 text-[#e8c547]";
    }
    if (s === "approved") {
        return "border-[#2ecc71]/45 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]";
    }
    if (s === "rejected" || s === "cancelled") {
        return "border-[#e74c3c]/45 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]";
    }
    return "border-[#8a8070]/40 bg-[#1a1a1a] text-[#c5bba3]";
}
function isPendingDeposit(p) {
    return p.type === "deposit" && p.status === "pending";
}
function isPendingPayment(p, type) {
    if (p.status !== "pending") return false;
    if (!type) return true;
    return p.type === type;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/deposit/DepositWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DepositWorkspace",
    ()=>DepositWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$WalletSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/deposit/WalletSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/deposit/deposit-mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/paymentsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DepositWorkspace(param) {
    let { balanceUsd, mmkPerUsd, initialTab = "deposit" } = param;
    var _DEPOSIT_METHODS_;
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100000");
    var _DEPOSIT_METHODS__id;
    const [methodId, setMethodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_DEPOSIT_METHODS__id = (_DEPOSIT_METHODS_ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_METHODS"][0]) === null || _DEPOSIT_METHODS_ === void 0 ? void 0 : _DEPOSIT_METHODS_.id) !== null && _DEPOSIT_METHODS__id !== void 0 ? _DEPOSIT_METHODS__id : "");
    const [reference, setReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [accountName, setAccountName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [methodOpen, setMethodOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formSuccess, setFormSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: paymentsData, isFetching: paymentsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMyPaymentsQuery"])({
        page: 1,
        limit: 50
    });
    const [createDeposit, { isLoading: depositing }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateDepositMutation"])();
    const [createWithdraw, { isLoading: withdrawing }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateWithdrawMutation"])();
    const [cancelPayment, { isLoading: cancelling }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelPaymentMutation"])();
    const submitting = depositing || withdrawing;
    const selectedMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DepositWorkspace.useMemo[selectedMethod]": ()=>{
            var _DEPOSIT_METHODS_find;
            return (_DEPOSIT_METHODS_find = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_METHODS"].find({
                "DepositWorkspace.useMemo[selectedMethod]": (m)=>m.id === methodId
            }["DepositWorkspace.useMemo[selectedMethod]"])) !== null && _DEPOSIT_METHODS_find !== void 0 ? _DEPOSIT_METHODS_find : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_METHODS"][0];
        }
    }["DepositWorkspace.useMemo[selectedMethod]"], [
        methodId
    ]);
    const pendingRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DepositWorkspace.useMemo[pendingRows]": ()=>{
            const type = tab === "withdraw" ? "withdraw" : "deposit";
            var _paymentsData_items;
            return ((_paymentsData_items = paymentsData === null || paymentsData === void 0 ? void 0 : paymentsData.items) !== null && _paymentsData_items !== void 0 ? _paymentsData_items : []).filter({
                "DepositWorkspace.useMemo[pendingRows]": (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPendingPayment"])(p, type)
            }["DepositWorkspace.useMemo[pendingRows]"]);
        }
    }["DepositWorkspace.useMemo[pendingRows]"], [
        paymentsData,
        tab
    ]);
    const historyItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DepositWorkspace.useMemo[historyItems]": ()=>{
            var _paymentsData_items;
            return (_paymentsData_items = paymentsData === null || paymentsData === void 0 ? void 0 : paymentsData.items) !== null && _paymentsData_items !== void 0 ? _paymentsData_items : [];
        }
    }["DepositWorkspace.useMemo[historyItems]"], [
        paymentsData
    ]);
    function onSideSelect(side) {
        if (side === "transactions") return;
        if (side === "deposit" || side === "withdraw" || side === "history") {
            setTab(side);
            setFormError(null);
            setFormSuccess(null);
        }
    }
    async function onCancelPending(id) {
        setFormError(null);
        setFormSuccess(null);
        try {
            const cancelled = await cancelPayment({
                id
            }).unwrap();
            setFormSuccess("Cancelled ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentRequestId"])(cancelled.id, cancelled.type), "."));
        } catch (err) {
            setFormError(extractApiError(err, tab === "withdraw" ? "withdraw" : "deposit"));
        }
    }
    async function onSubmit(e) {
        e.preventDefault();
        setFormError(null);
        setFormSuccess(null);
        const n = Number(amount);
        if (!amount || Number.isNaN(n)) {
            setFormError("Please enter a valid amount.");
            return;
        }
        if (n < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MIN_MMK"] || n > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MAX_MMK"]) {
            setFormError("Amount must be between ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MIN_MMK"].toLocaleString("en-US"), " and ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MAX_MMK"].toLocaleString("en-US"), " MMK."));
            return;
        }
        try {
            if (tab === "withdraw") {
                const name = accountName.trim();
                const phoneDigits = phone.replace(/\D/g, "");
                if (name.length < 2) {
                    setFormError("Enter the account holder name for cashout.");
                    return;
                }
                if (phoneDigits.length < 6) {
                    setFormError("Enter a valid KBZPay / Wave phone number.");
                    return;
                }
                const created = await createWithdraw({
                    amountMmk: String(n),
                    method: selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.label,
                    // phone for cashier payout
                    reference: phoneDigits,
                    // account name for cashier payout
                    playerNote: name
                }).unwrap();
                setFormSuccess("Cashout request ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentRequestId"])(created.id, "withdraw"), " submitted. Waiting for admin approval."));
                setAccountName("");
                setPhone("");
            } else {
                const created = await createDeposit({
                    amountMmk: String(n),
                    method: selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.label,
                    reference: reference.trim() || undefined
                }).unwrap();
                setFormSuccess("Deposit request ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentRequestId"])(created.id, "deposit"), " submitted. Waiting for admin approval."));
                setReference("");
            }
            setAmount("100000");
        } catch (err) {
            setFormError(extractApiError(err, tab === "withdraw" ? "withdraw" : "deposit"));
        }
    }
    var _selectedMethod_short;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-4 lg:flex-row lg:items-start lg:gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$WalletSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletSidebar"], {
                active: tab === "withdraw" ? "withdraw" : tab === "history" ? "history" : "deposit",
                balanceUsd: balanceUsd,
                mmkPerUsd: mmkPerUsd,
                onSelect: onSideSelect
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-[#d4af37]/40 bg-[#02150f] px-4 py-5 sm:px-5 sm:py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-end justify-between gap-3 border-b border-[#d4af37]/20 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-[family-name:var(--font-cinzel)] text-[1.55rem] font-semibold tracking-[0.14em] text-[#e8c547]",
                                                children: tab === "withdraw" ? "WITHDRAW" : tab === "history" ? "HISTORY" : "DEPOSIT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1.5 text-[0.9rem] text-[#9a9280]",
                                                children: tab === "withdraw" ? "Request a withdrawal from your wallet." : tab === "history" ? "Review your recent deposit and withdraw requests." : "Add funds to your wallet quickly and securely."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 rounded-lg border border-[#d4af37]/30 bg-[#01100b] p-1",
                                        children: [
                                            "deposit",
                                            "withdraw",
                                            "history"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTab(t),
                                                className: "rounded-md px-3.5 py-2 text-[0.82rem] font-semibold capitalize transition ".concat(tab === t ? "bg-[#d4af37] text-[#1a1205]" : "text-[#c5bba3] hover:text-[#e8c547]"),
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            tab === "deposit" || tab === "withdraw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: onSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]",
                                                        children: "AMOUNT (MMK)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center overflow-hidden rounded-lg border border-[#d4af37]/45 bg-[#01100b]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: amount,
                                                                onChange: (e)=>setAmount(e.target.value.replace(/[^\d]/g, "")),
                                                                inputMode: "numeric",
                                                                className: "w-full bg-transparent px-3.5 py-3 text-[1.05rem] font-semibold text-white outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "border-l border-[#d4af37]/30 px-3.5 py-3 text-[0.85rem] font-bold text-[#d4af37]",
                                                                children: "MMK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1.5 text-[0.75rem] text-[#9a9280]",
                                                        children: [
                                                            "Min: ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MIN_MMK"].toLocaleString("en-US"),
                                                            " MMK | Max:",
                                                            " ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MAX_MMK"].toLocaleString("en-US"),
                                                            " MMK",
                                                            tab === "withdraw" ? " · Wallet ≈ $".concat(Number(balanceUsd).toLocaleString("en-US", {
                                                                maximumFractionDigits: 2
                                                            }), " USD") : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]",
                                                        children: tab === "withdraw" ? "CASHOUT METHOD" : "DEPOSIT METHOD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMethodOpen((v)=>!v),
                                                        className: "flex w-full items-center justify-between rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodBadge, {
                                                                        short: (_selectedMethod_short = selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.short) !== null && _selectedMethod_short !== void 0 ? _selectedMethod_short : "?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[0.95rem] font-medium text-white",
                                                                        children: selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                                                                open: methodOpen
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    methodOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "absolute z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-[#d4af37]/45 bg-[#021a12] shadow-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_METHODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setMethodId(m.id);
                                                                        setMethodOpen(false);
                                                                    },
                                                                    className: "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[0.92rem] text-white hover:bg-[#d4af37]/15",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodBadge, {
                                                                            short: m.short
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                            lineNumber: 261,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        m.label
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, m.id, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            tab === "withdraw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]",
                                                                children: "ACCOUNT NAME"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: accountName,
                                                                onChange: (e)=>setAccountName(e.target.value),
                                                                placeholder: "Name on KBZPay / Wave account",
                                                                className: "w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]",
                                                                disabled: submitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]",
                                                                children: "PHONE NUMBER"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: phone,
                                                                onChange: (e)=>setPhone(e.target.value.replace(/[^\d+]/g, "")),
                                                                inputMode: "tel",
                                                                placeholder: "09xxxxxxxxx",
                                                                className: "w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]",
                                                                disabled: submitting
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]",
                                                        children: [
                                                            "REFERENCE / REMARKS",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-[#9a9280]",
                                                                children: "(Optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: reference,
                                                        onChange: (e)=>setReference(e.target.value),
                                                        placeholder: "Enter slip / txn reference (optional)",
                                                        className: "w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]",
                                                        disabled: submitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            formError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-[0.85rem] text-[#ff8f8f]",
                                                children: formError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this) : null,
                                            formSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-lg border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.25)] px-3 py-2 text-[0.85rem] text-[#7dffa3]",
                                                children: formSuccess
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: submitting,
                                                className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-4 py-3.5 text-[0.95rem] font-extrabold tracking-[0.12em] text-[#1a1205] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this),
                                                    submitting ? "SUBMITTING…" : tab === "withdraw" ? "SUBMIT CASHOUT" : "SUBMIT REQUEST"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    tab === "withdraw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WithdrawInfoCard, {}, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 343,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DepositInfoCard, {}, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 343,
                                        columnNumber: 60
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentsHistoryTable, {
                                items: historyItems,
                                loading: paymentsLoading && !paymentsData
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    tab === "deposit" || tab === "withdraw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PendingRequestsTable, {
                        rows: pendingRows,
                        loading: paymentsLoading && !paymentsData,
                        cancelling: cancelling,
                        onCancel: onCancelPending,
                        onViewHistory: ()=>setTab("history"),
                        title: tab === "withdraw" ? "PENDING WITHDRAWS" : "PENDING REQUESTS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "flex flex-col gap-2 border-t border-[#d4af37]/15 pt-4 text-[0.72rem] text-[#7a7468] sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2025 Shwe Dunn Casino. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inline-flex items-center gap-2",
                                children: [
                                    "Licensed & Regulated | 18+ | Play Responsibly",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {
                                        small: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(DepositWorkspace, "Fc5NlL8MR8pNqs3ogiTARjQ3X3I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMyPaymentsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateDepositMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateWithdrawMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelPaymentMutation"]
    ];
});
_c = DepositWorkspace;
function DepositInfoCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "h-fit rounded-xl border border-[#d4af37]/40 bg-[#01100b] px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[0.82rem] font-bold tracking-[0.14em] text-[#e8c547]",
                children: "DEPOSIT INFORMATION"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "clock",
                        label: "Processing Time",
                        value: "After admin approve"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "bank",
                        label: "Daily Limit",
                        value: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MIN_MMK"].toLocaleString("en-US"), " – ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MAX_MMK"].toLocaleString("en-US"), " MMK")
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "wallet",
                        label: "Transaction Fee",
                        value: "Free"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[0.75rem] leading-relaxed text-[#9a9280]",
                children: "Transfer MMK first, then submit this request with your reference. Balance updates after admin approval."
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c1 = DepositInfoCard;
function WithdrawInfoCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "h-fit rounded-xl border border-[#d4af37]/40 bg-[#01100b] px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[0.82rem] font-bold tracking-[0.14em] text-[#e8c547]",
                children: "WITHDRAW INFORMATION"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "clock",
                        label: "Processing Time",
                        value: "After admin approve"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "bank",
                        label: "Amount Range",
                        value: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MIN_MMK"].toLocaleString("en-US"), " – ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$deposit$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPOSIT_MAX_MMK"].toLocaleString("en-US"), " MMK")
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        icon: "wallet",
                        label: "Wallet check",
                        value: "USD balance required"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[0.75rem] leading-relaxed text-[#9a9280]",
                children: "Cashout = withdraw. Enter the name + phone for your KBZPay / Wave account so cashier can send money. USD wallet is checked before submit."
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 403,
        columnNumber: 5
    }, this);
}
_c2 = WithdrawInfoCard;
function PendingRequestsTable(param) {
    let { rows, loading, cancelling, onCancel, onViewHistory, title = "PENDING REQUESTS" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden rounded-xl border border-[#d4af37]/40 bg-[#02150f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/25 px-4 py-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[0.95rem] font-bold tracking-[0.08em] text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex min-w-6 items-center justify-center rounded-full bg-[#d4af37] px-1.5 py-0.5 text-[0.7rem] font-bold text-[#1a1205]",
                                children: rows.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onViewHistory,
                        className: "text-[0.82rem] font-semibold text-[#d4af37] hover:text-[#f0d78c]",
                        children: "View All History →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[720px] text-left text-[0.88rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-[#d4af37]/20 text-[0.68rem] tracking-[0.12em] text-[#9a9280]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "REQUEST ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "DATE & TIME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "METHOD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "AMOUNT (MMK)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "ACTION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-4 py-8 text-center text-[#9a9280]",
                                    children: "Loading…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 474,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 473,
                                columnNumber: 15
                            }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-4 py-8 text-center text-[#9a9280]",
                                    children: "No pending requests."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this) : rows.map((row)=>{
                                var _row_method;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-t border-[#d4af37]/15 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5 font-mono text-[0.82rem] text-[#c5bba3]",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentRequestId"])(row.id, row.type)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "whitespace-nowrap px-4 py-3.5 text-[#e8e0d0]",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentDateTime"])(row.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: (_row_method = row.method) !== null && _row_method !== void 0 ? _row_method : "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5 font-semibold tabular-nums",
                                            children: Number(row.amountMmk).toLocaleString("en-US")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex rounded-full border px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusPillClass"])(row.status)),
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStatusLabel"])(row.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 497,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: cancelling,
                                                onClick: ()=>onCancel === null || onCancel === void 0 ? void 0 : onCancel(row.id),
                                                className: "rounded-md border border-[#e74c3c]/45 px-2.5 py-1 text-[0.72rem] font-semibold text-[#ff8f8f] transition hover:bg-[rgba(120,30,30,0.3)] disabled:opacity-50",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                                lineNumber: 505,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 504,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 486,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                    lineNumber: 460,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
}
_c3 = PendingRequestsTable;
function PaymentsHistoryTable(param) {
    let { items, loading } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-5 overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#01100b]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[700px] text-left text-[0.88rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-[#d4af37]/20 text-[0.68rem] tracking-[0.12em] text-[#9a9280]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "REQUEST ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "TYPE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "DATE & TIME"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "METHOD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "DETAILS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 541,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "AMOUNT (MMK)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 font-semibold",
                                    children: "STATUS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                className: "px-4 py-8 text-center text-[#9a9280]",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 549,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                            lineNumber: 548,
                            columnNumber: 15
                        }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                className: "px-4 py-8 text-center text-[#9a9280]",
                                children: "No payment history yet."
                            }, void 0, false, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 555,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                            lineNumber: 554,
                            columnNumber: 15
                        }, this) : items.map((row)=>{
                            var _row_method, _row_playerNote, _row_reference, _row_reference1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-t border-[#d4af37]/15 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 font-mono text-[0.82rem] text-[#c5bba3]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentRequestId"])(row.id, row.type)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 562,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 capitalize",
                                        children: row.type === "withdraw" ? "cashout" : row.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 565,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "whitespace-nowrap px-4 py-3.5 text-[#e8e0d0]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPaymentDateTime"])(row.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 568,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: (_row_method = row.method) !== null && _row_method !== void 0 ? _row_method : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 571,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 text-[0.82rem] text-[#c5bba3]",
                                        children: row.type === "withdraw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                (_row_playerNote = row.playerNote) !== null && _row_playerNote !== void 0 ? _row_playerNote : "—",
                                                " · ",
                                                (_row_reference = row.reference) !== null && _row_reference !== void 0 ? _row_reference : "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 574,
                                            columnNumber: 23
                                        }, this) : (_row_reference1 = row.reference) !== null && _row_reference1 !== void 0 ? _row_reference1 : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 572,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 font-semibold tabular-nums",
                                        children: Number(row.amountMmk).toLocaleString("en-US")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 581,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex rounded-full border px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusPillClass"])(row.status)),
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatStatusLabel"])(row.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                            lineNumber: 585,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                        lineNumber: 584,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, row.id, true, {
                                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                                lineNumber: 561,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
            lineNumber: 533,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
_c4 = PaymentsHistoryTable;
function extractApiError(err) {
    let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "deposit";
    if (err && typeof err === "object" && "data" in err) {
        const data = err.data;
        const message = data === null || data === void 0 ? void 0 : data.message;
        if (Array.isArray(message)) return message.join(", ");
        if (typeof message === "string" && message.trim()) return message;
    }
    return kind === "withdraw" ? "Could not submit withdraw request. Please try again." : "Could not submit deposit request. Please try again.";
}
function MethodBadge(param) {
    let { short } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex size-8 items-center justify-center rounded-md border border-[#d4af37]/45 bg-[#0a2a1c] text-[0.58rem] font-extrabold text-[#e8c547]",
        children: short
    }, void 0, false, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 618,
        columnNumber: 5
    }, this);
}
_c5 = MethodBadge;
function InfoRow(param) {
    let { icon, label, value } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#d4af37]/35 bg-[#02150f] text-[#d4af37]",
                children: [
                    icon === "clock" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 636,
                        columnNumber: 29
                    }, this) : null,
                    icon === "bank" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BankIcon, {}, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 637,
                        columnNumber: 28
                    }, this) : null,
                    icon === "wallet" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletGlyph, {}, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 638,
                        columnNumber: 30
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.72rem] font-semibold tracking-wide text-[#9a9280]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-[0.9rem] font-semibold text-white",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
}
_c6 = InfoRow;
function ChevronIcon(param) {
    let { open } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#d4af37",
        strokeWidth: "1.8",
        className: "transition ".concat(open ? "rotate-180" : ""),
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
            lineNumber: 662,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 652,
        columnNumber: 5
    }, this);
}
_c7 = ChevronIcon;
function ShieldIcon(param) {
    let { small = false } = param;
    const size = small ? 12 : 16;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 670,
        columnNumber: 5
    }, this);
}
_c8 = ShieldIcon;
function ClockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v4.5L15 15"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 687,
        columnNumber: 5
    }, this);
}
_c9 = ClockIcon;
function BankIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M12 4l9 6H3l9-6Z"
        }, void 0, false, {
            fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
            lineNumber: 697,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 696,
        columnNumber: 5
    }, this);
}
_c10 = BankIcon;
function WalletGlyph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "6",
                width: "18",
                height: "13",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10h18M16 14.5h2"
            }, void 0, false, {
                fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/deposit/DepositWorkspace.tsx",
        lineNumber: 704,
        columnNumber: 5
    }, this);
}
_c11 = WalletGlyph;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "DepositWorkspace");
__turbopack_context__.k.register(_c1, "DepositInfoCard");
__turbopack_context__.k.register(_c2, "WithdrawInfoCard");
__turbopack_context__.k.register(_c3, "PendingRequestsTable");
__turbopack_context__.k.register(_c4, "PaymentsHistoryTable");
__turbopack_context__.k.register(_c5, "MethodBadge");
__turbopack_context__.k.register(_c6, "InfoRow");
__turbopack_context__.k.register(_c7, "ChevronIcon");
__turbopack_context__.k.register(_c8, "ShieldIcon");
__turbopack_context__.k.register(_c9, "ClockIcon");
__turbopack_context__.k.register(_c10, "BankIcon");
__turbopack_context__.k.register(_c11, "WalletGlyph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/authApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "useLazyMeQuery",
    ()=>useLazyMeQuery,
    "useLoginMutation",
    ()=>useLoginMutation,
    "useLogoutMutation",
    ()=>useLogoutMutation,
    "useMeQuery",
    ()=>useMeQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const authApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            login: build.mutation({
                query: (body)=>({
                        url: "/auth/login",
                        method: "POST",
                        body
                    })
            }),
            me: build.query({
                query: ()=>"/auth/me",
                providesTags: [
                    "Me"
                ]
            }),
            logout: build.mutation({
                query: ()=>({
                        url: "/auth/logout",
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Me",
                    "Wallet"
                ]
            })
        })
});
const { useLoginMutation, useMeQuery, useLazyMeQuery, useLogoutMutation } = authApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLobbyLogout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLobbyLogout",
    ()=>useLobbyLogout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/auth/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useLobbyLogout() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [logoutApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    return async function onLogout() {
        try {
            await logoutApi().unwrap();
        } catch (e) {
        // ignore network errors; clear local session anyway
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthSession"])();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCredentials"])());
        router.replace("/login");
    };
}
_s(useLobbyLogout, "+z2URqW6D+ffziU5WegCRlh3Tlk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/deposit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DepositPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/LobbyHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$DepositWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/deposit/DepositWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLobbyLogout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/paymentsApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function DepositPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DepositLoading, {}, void 0, false, {
                fileName: "[project]/src/app/deposit/page.tsx",
                lineNumber: 18,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DepositView, {}, void 0, false, {
                fileName: "[project]/src/app/deposit/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/deposit/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/deposit/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = DepositPage;
function DepositView() {
    var _me_balance, _me_balance1;
    _s();
    const onLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLobbyLogout"])();
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { data: me } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"])();
    const { data: rateData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRateQuery"])();
    const tabParam = search.get("tab");
    const initialTab = tabParam === "withdraw" || tabParam === "history" ? tabParam : "deposit";
    var _me_balance_realBalance, _rateData_mmkPerUsd, _me_balance_realBalance1, _rateData_mmkPerUsd1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-[#01100b] text-[#f5efe0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LobbyHeader"], {
                active: "deposit",
                balanceUsd: (_me_balance_realBalance = me === null || me === void 0 ? void 0 : (_me_balance = me.balance) === null || _me_balance === void 0 ? void 0 : _me_balance.realBalance) !== null && _me_balance_realBalance !== void 0 ? _me_balance_realBalance : "0",
                mmkPerUsd: (_rateData_mmkPerUsd = rateData === null || rateData === void 0 ? void 0 : rateData.mmkPerUsd) !== null && _rateData_mmkPerUsd !== void 0 ? _rateData_mmkPerUsd : "4500",
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/app/deposit/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full px-3 pb-6 pt-4 sm:px-4 lg:px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$deposit$2f$DepositWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepositWorkspace"], {
                    balanceUsd: (_me_balance_realBalance1 = me === null || me === void 0 ? void 0 : (_me_balance1 = me.balance) === null || _me_balance1 === void 0 ? void 0 : _me_balance1.realBalance) !== null && _me_balance_realBalance1 !== void 0 ? _me_balance_realBalance1 : "0",
                    mmkPerUsd: (_rateData_mmkPerUsd1 = rateData === null || rateData === void 0 ? void 0 : rateData.mmkPerUsd) !== null && _rateData_mmkPerUsd1 !== void 0 ? _rateData_mmkPerUsd1 : "4500",
                    initialTab: initialTab
                }, void 0, false, {
                    fileName: "[project]/src/app/deposit/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/deposit/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/deposit/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(DepositView, "N6FQm0EM2Agps2LDdyv0/OKmc7E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLobbyLogout"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRateQuery"]
    ];
});
_c1 = DepositView;
function DepositLoading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-[#01100b] text-[#d4af37]",
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/app/deposit/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c2 = DepositLoading;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DepositPage");
__turbopack_context__.k.register(_c1, "DepositView");
__turbopack_context__.k.register(_c2, "DepositLoading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7e0f0427._.js.map