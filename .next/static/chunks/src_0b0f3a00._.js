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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/auth/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AuthGuard(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { accessToken, hydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "AuthGuard.useAppSelector": (s)=>s.auth
    }["AuthGuard.useAppSelector"]);
    const { isError, isFetching, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"])(undefined, {
        skip: !hydrated || !accessToken,
        refetchOnMountOrArgChange: true
    });
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            var _data_player;
            if (!hydrated || !accessToken || isFetching) return;
            if (isError || (data === null || data === void 0 ? void 0 : (_data_player = data.player) === null || _data_player === void 0 ? void 0 : _data_player.isBlocked)) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCredentials"])());
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthSession"])();
                router.replace("/login");
            }
        }
    }["AuthGuard.useEffect"], [
        hydrated,
        accessToken,
        isFetching,
        isError,
        data,
        dispatch,
        router
    ]);
    if (!hydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    if (!accessToken) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Redirecting to login…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (isFetching && !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Checking session…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(AuthGuard, "KBowFcNQ85gl6w8D8f6NwQEjKkI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"]
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
                            lineNumber: 36,
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
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.62rem] font-medium tracking-[0.16em] text-[#c5bba3] sm:text-[0.68rem]",
                                    children: "PLAY RICH • WIN GOLD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 35,
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
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                item.label
                            ]
                        }, item.key, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 54,
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
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[1.05rem] font-bold text-[#e8c547] sm:text-[1.15rem]",
                                            children: hidden ? "••••" : "".concat(mmk, " MMK")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 76,
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
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        onLogout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onLogout,
                            className: "hidden rounded-xl border border-[#d4af37]/50 px-3.5 py-2.5 text-[0.82rem] font-semibold text-[#e8c547] hover:bg-[#d4af37]/10 sm:inline-flex",
                            children: "Log out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 33,
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
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12 20 7.5M12 12v9M12 12 4 7.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 122,
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
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 10h18M16 14.5h2"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 130,
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
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1M12 11v5M9.5 13.5 12 11l2.5 2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 137,
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
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 147,
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
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4 4 16 16"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 154,
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
"[project]/src/components/lobby/CategorySearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySearchBar",
    ()=>CategorySearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const CATEGORIES = [
    {
        key: "slots",
        label: "Slots"
    },
    {
        key: "live",
        label: "Live Casino"
    },
    {
        key: "jackpot",
        label: "Jackpot"
    },
    {
        key: "popular",
        label: "Popular"
    }
];
function CategorySearchBar(param) {
    let { category, search, onCategoryChange, onSearchChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 sm:gap-2.5",
                children: CATEGORIES.map((c)=>{
                    const active = c.key === category;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onCategoryChange(c.key),
                        className: "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.92rem] font-semibold transition ".concat(active ? "border-[#d4af37] bg-[#d4af37] text-[#1a1205]" : "border-[#d4af37]/60 bg-transparent text-white hover:border-[#e8c547] hover:text-[#e8c547]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryIcon, {
                                name: c.key,
                                active: active
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            c.label
                        ]
                    }, c.key, true, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full sm:max-w-md lg:max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: (e)=>onSearchChange(e.target.value),
                        placeholder: "Search games...",
                        className: "w-full rounded-full border border-[#d4af37]/45 bg-[#021a12] py-2.5 pl-11 pr-11 text-[0.92rem] text-white placeholder:text-[#7a7a7a] outline-none focus:border-[#d4af37]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = CategorySearchBar;
function CategoryIcon(param) {
    let { name, active } = param;
    const stroke = active ? "#1a1205" : "#d4af37";
    const common = {
        width: 18,
        height: 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke,
        strokeWidth: 1.8
    };
    if (name === "slots") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3 14.5 9.5 21 10l-5 4.2L17.5 21 12 17.5 6.5 21 8 14.2 3 10l6.5-.5L12 3Z"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    if (name === "live") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.5 7A9 9 0 0 0 5.5 17M18.5 7a9 9 0 0 1 0 10"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    if (name === "jackpot") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...common,
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 4h8v4a4 4 0 0 1-8 0V4Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M10 18h4M12 12v6"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...common,
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3 14.5 9.5 21 10l-5 4.2L17.5 21 12 17.5 6.5 21 8 14.2 3 10l6.5-.5L12 3Z"
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = CategoryIcon;
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "6.5"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m16 16 4 4"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c2 = SearchIcon;
function FilterIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 6h16M7 12h10M10 18h4"
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c3 = FilterIcon;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CategorySearchBar");
__turbopack_context__.k.register(_c1, "CategoryIcon");
__turbopack_context__.k.register(_c2, "SearchIcon");
__turbopack_context__.k.register(_c3, "FilterIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/GameCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameCard",
    ()=>GameCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const GRADIENTS = [
    "from-[#5b2c6f] to-[#1a5276]",
    "from-[#145a32] to-[#0b5345]",
    "from-[#922b21] to-[#1b2631]",
    "from-[#7d3c98] to-[#f5b041]",
    "from-[#1a5276] to-[#154360]",
    "from-[#6c3483] to-[#c0392b]",
    "from-[#0e6655] to-[#1c2833]",
    "from-[#7b241c] to-[#4a235a]"
];
function GameCard(param) {
    let { game, index, onPlay } = param;
    const gradient = GRADIENTS[index % GRADIENTS.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onPlay === null || onPlay === void 0 ? void 0 : onPlay(game),
        className: "group flex w-full flex-col overflow-hidden rounded-lg border border-[#d4af37]/55 bg-[#02150f] text-left transition hover:border-[#e8c547]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] w-full overflow-hidden",
                children: [
                    game.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: game.imageUrl,
                        alt: game.title,
                        className: "absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br ".concat(gradient),
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    game.isNew ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-2 top-2 rounded-[3px] bg-[#1f9d55] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white",
                        children: "NEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this) : null,
                    game.isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-2 top-2 rounded-[3px] bg-[#e11d48] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white",
                        children: "LIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/GameCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#d4af37]/30 bg-[#02120d] px-2.5 py-2 sm:px-3 sm:py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-center text-[0.9rem] font-bold leading-tight text-white sm:text-[0.95rem]",
                        children: game.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 truncate text-center text-[0.75rem] font-medium leading-tight text-[#d4af37]",
                        children: game.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/GameCard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/GameCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GameCard;
var _c;
__turbopack_context__.k.register(_c, "GameCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/GameGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameGrid",
    ()=>GameGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/GameCard.tsx [app-client] (ecmascript)");
"use client";
;
;
function GameGrid(param) {
    let { games, loading, onPlay } = param;
    const gridClass = "grid w-full grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6";
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: gridClass,
            children: Array.from({
                length: 18
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-lg border border-[#d4af37]/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[4/3] animate-pulse bg-[#0a2a1c]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/GameGrid.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-12 animate-pulse bg-[#02150f]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/GameGrid.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/lobby/GameGrid.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/GameGrid.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    if (games.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-[#d4af37]/25 bg-[#02150f] px-4 py-12 text-center text-[0.95rem] text-[#9a9280]",
            children: "No games found."
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/GameGrid.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: gridClass,
        children: games.map((game, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameCard"], {
                game: game,
                index: index,
                onPlay: onPlay
            }, game.id, false, {
                fileName: "[project]/src/components/lobby/GameGrid.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/GameGrid.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = GameGrid;
var _c;
__turbopack_context__.k.register(_c, "GameGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/bonusApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bonusApi",
    ()=>bonusApi,
    "useClaimDailyLoginMutation",
    ()=>useClaimDailyLoginMutation,
    "useGetDailyLoginQuery",
    ()=>useGetDailyLoginQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const bonusApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getDailyLogin: build.query({
                query: ()=>"/bonus/daily-login",
                providesTags: [
                    "Bonus"
                ]
            }),
            claimDailyLogin: build.mutation({
                query: ()=>({
                        url: "/bonus/daily-login/claim",
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Bonus",
                    "Me"
                ]
            })
        })
});
const { useGetDailyLoginQuery, useClaimDailyLoginMutation } = bonusApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/DailyLoginClaimBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyLoginClaimBox",
    ()=>DailyLoginClaimBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/bonusApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DailyLoginClaimBox() {
    _s();
    const { data, isFetching, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDailyLoginQuery"])(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [claim, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClaimDailyLoginMutation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (isError || !data) {
        return null;
    }
    async function onClaim() {
        setError(null);
        setFlash(null);
        try {
            const res = await claim().unwrap();
            setFlash("Claimed ".concat(res.amountMmk, " MMK bonus (play only)"));
        } catch (err) {
            var _data;
            const msg = err && typeof err === "object" && "data" in err ? (_data = err.data) === null || _data === void 0 ? void 0 : _data.message : null;
            setError(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Could not claim");
        }
    }
    const amountLabel = "".concat(Number(data.amountMmk).toLocaleString("en-US", {
        maximumFractionDigits: 0
    }), " MMK");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                                children: "DAILY LOGIN BONUS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-[#f5efe0]",
                                children: data.canClaim ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Claim",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#e8c547]",
                                            children: amountLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        "play-only bonus"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Claimed today · comes back tomorrow (",
                                        data.timezone,
                                        ")"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[0.72rem] text-[#8a8070]",
                                children: [
                                    "For game play only — not withdrawable",
                                    isFetching ? " · refreshing…" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !data.canClaim || isLoading,
                        onClick: onClaim,
                        className: "shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-5 py-2.5 text-sm font-extrabold tracking-[0.12em] text-[#1a1205] disabled:cursor-not-allowed disabled:opacity-45",
                        children: isLoading ? "…" : data.canClaim ? "CLAIM" : "CLAIMED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-[#ff8f8f]",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : null,
            flash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-[#7dffa3]",
                children: flash
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/DailyLoginClaimBox.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(DailyLoginClaimBox, "sNXTZrKA/kVh3uAH4XdAjc/wH3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDailyLoginQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClaimDailyLoginMutation"]
    ];
});
_c = DailyLoginClaimBox;
var _c;
__turbopack_context__.k.register(_c, "DailyLoginClaimBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/questsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questsApi",
    ()=>questsApi,
    "useClaimQuestMutation",
    ()=>useClaimQuestMutation,
    "useGetQuestsQuery",
    ()=>useGetQuestsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const questsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getQuests: build.query({
                query: ()=>"/quests",
                providesTags: [
                    "Quests"
                ]
            }),
            claimQuest: build.mutation({
                query: (id)=>({
                        url: "/quests/".concat(id, "/claim"),
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Quests",
                    "Me",
                    "Bonus"
                ]
            })
        })
});
const { useGetQuestsQuery, useClaimQuestMutation } = questsApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/QuestsClaimBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestsClaimBox",
    ()=>QuestsClaimBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/questsApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function QuestsClaimBox() {
    _s();
    const { data, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetQuestsQuery"])(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [claim, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClaimQuestMutation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var _data_items;
    const items = (_data_items = data === null || data === void 0 ? void 0 : data.items) !== null && _data_items !== void 0 ? _data_items : [];
    if (!items.length) return null;
    async function onClaim(id) {
        setError(null);
        setFlash(null);
        try {
            const res = await claim(id).unwrap();
            setFlash("Claimed ".concat(res.rewardMmk, " MMK bonus (play only)"));
        } catch (err) {
            var _data;
            const msg = err && typeof err === "object" && "data" in err ? (_data = err.data) === null || _data === void 0 ? void 0 : _data.message : null;
            setError(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Could not claim");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-baseline justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                        children: "QUESTS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.7rem] text-[#8a8070]",
                        children: [
                            "Play-only rewards",
                            isFetching ? " · …" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: items.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-[#2a2418] bg-[#0a0f0c]/80 px-3 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-[#f5efe0]",
                                            children: q.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[0.72rem] text-[#8a8070]",
                                            children: [
                                                q.goalLabel,
                                                ": ",
                                                q.progressValue,
                                                " / ",
                                                q.targetValue,
                                                " · ",
                                                "Reward",
                                                " ",
                                                Number(q.rewardMmk).toLocaleString("en-US", {
                                                    maximumFractionDigits: 0
                                                }),
                                                " ",
                                                "MMK"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[#1a241c]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full bg-[linear-gradient(90deg,#d4af37,#e8c547)]",
                                                style: {
                                                    width: "".concat(q.percent, "%")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !q.canClaim || isLoading || q.status === "claimed",
                                    onClick: ()=>onClaim(q.id),
                                    className: "shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-4 py-2 text-xs font-extrabold tracking-[0.1em] text-[#1a1205] disabled:cursor-not-allowed disabled:opacity-45",
                                    children: q.status === "claimed" ? "CLAIMED" : q.canClaim ? "CLAIM" : "".concat(q.percent, "%")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, q.id, false, {
                        fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-[#ff8f8f]",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                lineNumber: 95,
                columnNumber: 16
            }, this) : null,
            flash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-[#7dffa3]",
                children: flash
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                lineNumber: 96,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(QuestsClaimBox, "eWo4uu6FjWqp4odliPoK+SZXPZY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetQuestsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClaimQuestMutation"]
    ];
});
_c = QuestsClaimBox;
var _c;
__turbopack_context__.k.register(_c, "QuestsClaimBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/bigWinsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bigWinsApi",
    ()=>bigWinsApi,
    "useGetRecentBigWinsQuery",
    ()=>useGetRecentBigWinsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const bigWinsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getRecentBigWins: build.query({
                query: (params)=>{
                    var _params_limit;
                    return {
                        url: "/big-wins/recent",
                        params: {
                            limit: (_params_limit = params === null || params === void 0 ? void 0 : params.limit) !== null && _params_limit !== void 0 ? _params_limit : 20
                        }
                    };
                },
                providesTags: [
                    "BigWins"
                ]
            })
        })
});
const { useGetRecentBigWinsQuery } = bigWinsApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/BigWinTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BigWinTicker",
    ()=>BigWinTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bigWinsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/bigWinsApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function resolveApiBase() {
    var _process_env_NEXT_PUBLIC_API_URL;
    const fromEnv = (_process_env_NEXT_PUBLIC_API_URL = ("TURBOPACK compile-time value", "https://game-api-2.onrender.com")) === null || _process_env_NEXT_PUBLIC_API_URL === void 0 ? void 0 : _process_env_NEXT_PUBLIC_API_URL.replace(/\/$/, "");
    if (fromEnv) return fromEnv;
    return "http://localhost:5000";
}
function BigWinTicker() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bigWinsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecentBigWinsQuery"])({
        limit: 20
    });
    const [live, setLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BigWinTicker.useEffect": ()=>{
            var _data_items;
            if (data === null || data === void 0 ? void 0 : (_data_items = data.items) === null || _data_items === void 0 ? void 0 : _data_items.length) setLive(data.items);
        }
    }["BigWinTicker.useEffect"], [
        data === null || data === void 0 ? void 0 : data.items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BigWinTicker.useEffect": ()=>{
            const es = new EventSource("".concat(resolveApiBase(), "/big-wins/stream"));
            es.onmessage = ({
                "BigWinTicker.useEffect": (ev)=>{
                    try {
                        const item = JSON.parse(ev.data);
                        setLive({
                            "BigWinTicker.useEffect": (prev)=>[
                                    item,
                                    ...prev.filter({
                                        "BigWinTicker.useEffect": (x)=>x.id !== item.id
                                    }["BigWinTicker.useEffect"])
                                ].slice(0, 30)
                        }["BigWinTicker.useEffect"]);
                    } catch (e) {
                    // ignore malformed
                    }
                }
            })["BigWinTicker.useEffect"];
            return ({
                "BigWinTicker.useEffect": ()=>es.close()
            })["BigWinTicker.useEffect"];
        }
    }["BigWinTicker.useEffect"], []);
    const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BigWinTicker.useMemo[line]": ()=>{
            if (!live.length) return "Big wins will appear here…";
            return live.slice(0, 12).map({
                "BigWinTicker.useMemo[line]": (w)=>"".concat(w.displayName, " won ").concat(Number(w.amountMmk).toLocaleString("en-US", {
                        maximumFractionDigits: 0
                    }), " MMK")
            }["BigWinTicker.useMemo[line]"]).join("   ·   ");
        }
    }["BigWinTicker.useMemo[line]"], [
        live
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 overflow-hidden rounded-xl border border-[#d4af37]/40 bg-[#06140f]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "shrink-0 rounded bg-[#d4af37] px-2 py-1 text-[0.62rem] font-extrabold tracking-[0.14em] text-[#1a1205]",
                    children: "BIG WIN"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/BigWinTicker.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative min-w-0 flex-1 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sd-bigwin-marquee whitespace-nowrap text-[0.82rem] font-medium text-[#e8c547]",
                        children: line
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/BigWinTicker.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/BigWinTicker.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/BigWinTicker.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/BigWinTicker.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(BigWinTicker, "nd+X6wYHM3YVEbaGmSHYBiZPBMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bigWinsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecentBigWinsQuery"]
    ];
});
_c = BigWinTicker;
var _c;
__turbopack_context__.k.register(_c, "BigWinTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/leaderboardApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leaderboardApi",
    ()=>leaderboardApi,
    "useGetLeaderboardQuery",
    ()=>useGetLeaderboardQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const leaderboardApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getLeaderboard: build.query({
                query: (param)=>{
                    let { metric = "win", period = "day", limit = 20 } = param;
                    return {
                        url: "/leaderboard",
                        params: {
                            metric,
                            period,
                            limit
                        }
                    };
                },
                providesTags: [
                    "Leaderboard"
                ]
            })
        })
});
const { useGetLeaderboardQuery } = leaderboardApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/LeaderboardPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeaderboardPanel",
    ()=>LeaderboardPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$leaderboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/leaderboardApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const METRICS = [
    {
        id: "win",
        label: "TOP WIN"
    },
    {
        id: "bet",
        label: "TOP BET"
    },
    {
        id: "net",
        label: "TOP NET"
    },
    {
        id: "biggest",
        label: "BIGGEST"
    }
];
const PERIODS = [
    {
        id: "day",
        label: "TODAY"
    },
    {
        id: "week",
        label: "WEEK"
    },
    {
        id: "all",
        label: "ALL"
    }
];
function LeaderboardPanel() {
    _s();
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("win");
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("day");
    const { data, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$leaderboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetLeaderboardQuery"])({
        metric,
        period,
        limit: 10
    }, {
        pollingInterval: 30_000
    });
    var _data_periodKey, _data_items;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-4 rounded-xl border border-[#d4af37]/35 bg-[#06140f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#2a2418] px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.68rem] font-extrabold tracking-[0.16em] text-[#d4af37]",
                        children: "LEADERBOARD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.62rem] text-[#8a8070]",
                        children: [
                            (_data_periodKey = data === null || data === void 0 ? void 0 : data.periodKey) !== null && _data_periodKey !== void 0 ? _data_periodKey : "—",
                            " · Yangon",
                            isFetching ? " · …" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 px-3 pt-3",
                children: PERIODS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setPeriod(p.id),
                        className: "rounded-md px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] transition ".concat(period === p.id ? "bg-[#d4af37] text-[#1a1205]" : "border border-[#2a2418] text-[#c4b48a] hover:text-[#e8c547]"),
                        children: p.label
                    }, p.id, false, {
                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 px-3 pt-2",
                children: METRICS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMetric(m.id),
                        className: "rounded-md px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] transition ".concat(metric === m.id ? "border border-[#2ecc71]/45 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]" : "border border-transparent text-[#9a9280] hover:text-[#e8c547]"),
                        children: m.label
                    }, m.id, false, {
                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "mt-2 max-h-[280px] space-y-0 overflow-y-auto px-2 pb-3",
                children: ((_data_items = data === null || data === void 0 ? void 0 : data.items) !== null && _data_items !== void 0 ? _data_items : []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "px-2 py-6 text-center text-[0.8rem] text-[#8a8070]",
                    children: "No rankings yet for this filter."
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this) : data.items.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[rgba(212,175,55,0.06)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-6 shrink-0 text-center text-[0.78rem] font-bold tabular-nums ".concat(row.rank <= 3 ? "text-[#e8c547]" : "text-[#8a8070]"),
                                        children: row.rank
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate text-[0.85rem] text-[#f5efe0]",
                                        children: row.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 text-[0.82rem] font-semibold tabular-nums text-[#e8c547]",
                                children: [
                                    fmt(row.valueMmk),
                                    " MMK"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "".concat(row.rank, "-").concat(row.displayName), true, {
                        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LeaderboardPanel.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(LeaderboardPanel, "rbcugg/RUnulbPgHK+LA1YeWUm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$leaderboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetLeaderboardQuery"]
    ];
});
_c = LeaderboardPanel;
function fmt(n) {
    const v = Number(n);
    if (!Number.isFinite(v)) return n;
    return v.toLocaleString("en-US", {
        maximumFractionDigits: v >= 100 ? 0 : 2
    });
}
var _c;
__turbopack_context__.k.register(_c, "LeaderboardPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/announcementsApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "announcementsApi",
    ()=>announcementsApi,
    "useGetAnnouncementInboxQuery",
    ()=>useGetAnnouncementInboxQuery,
    "useMarkAnnouncementReadMutation",
    ()=>useMarkAnnouncementReadMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const announcementsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getAnnouncementInbox: build.query({
                query: (params)=>{
                    var _params_limit;
                    return {
                        url: "/announcements/inbox",
                        params: {
                            limit: (_params_limit = params === null || params === void 0 ? void 0 : params.limit) !== null && _params_limit !== void 0 ? _params_limit : 10
                        }
                    };
                },
                providesTags: [
                    "Announcements"
                ]
            }),
            markAnnouncementRead: build.mutation({
                query: (announcementId)=>({
                        url: "/announcements/".concat(announcementId, "/read"),
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Announcements"
                ]
            })
        })
});
const { useGetAnnouncementInboxQuery, useMarkAnnouncementReadMutation } = announcementsApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lobby/AnnouncementBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementBox",
    ()=>AnnouncementBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/announcementsApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AnnouncementBox() {
    _s();
    const { data, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAnnouncementInboxQuery"])({
        limit: 5
    }, {
        pollingInterval: 30_000
    });
    const [markRead, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkAnnouncementReadMutation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    var _data_items;
    const latest = ((_data_items = data === null || data === void 0 ? void 0 : data.items) !== null && _data_items !== void 0 ? _data_items : []).find((x)=>!x.readAt);
    if (!latest) return null;
    async function onDismiss() {
        setError(null);
        try {
            await markRead(latest.announcementId).unwrap();
        } catch (e) {
            setError("Could not mark as read");
        }
    }
    var _data_unreadCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                            children: [
                                "ANNOUNCEMENT",
                                ((_data_unreadCount = data === null || data === void 0 ? void 0 : data.unreadCount) !== null && _data_unreadCount !== void 0 ? _data_unreadCount : 0) > 0 ? " · ".concat(data.unreadCount, " NEW") : "",
                                isFetching ? " · …" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm font-semibold text-[#f5efe0]",
                            children: latest.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[0.82rem] text-[#c5bba3]",
                            children: latest.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[0.75rem] text-[#ff8f8f]",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                !latest.readAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    disabled: isLoading,
                    onClick: onDismiss,
                    className: "shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-5 py-2.5 text-sm font-extrabold tracking-[0.12em] text-[#1a1205] disabled:opacity-45",
                    children: isLoading ? "…" : "GOT IT"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AnnouncementBox, "4WdIY2Hl8uD5TMMHkjTSELjV9V4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAnnouncementInboxQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkAnnouncementReadMutation"]
    ];
});
_c = AnnouncementBox;
var _c;
__turbopack_context__.k.register(_c, "AnnouncementBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/chatApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatApi",
    ()=>chatApi,
    "useAskFaqMutation",
    ()=>useAskFaqMutation,
    "useGetChatThreadQuery",
    ()=>useGetChatThreadQuery,
    "useGetFaqsQuery",
    ()=>useGetFaqsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const chatApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getFaqs: build.query({
                query: ()=>"/faqs",
                providesTags: [
                    "Faqs"
                ]
            }),
            getChatThread: build.query({
                query: ()=>"/chat/thread",
                providesTags: [
                    "Chat"
                ]
            }),
            askFaq: build.mutation({
                query: (body)=>({
                        url: "/chat/faq-ask",
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Chat"
                ]
            })
        })
});
const { useGetFaqsQuery, useGetChatThreadQuery, useAskFaqMutation } = chatApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/FaqChatWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqChatWidget",
    ()=>FaqChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/chatApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FaqChatWidget() {
    _s();
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "FaqChatWidget.useAppSelector[accessToken]": (s)=>s.auth.accessToken
    }["FaqChatWidget.useAppSelector[accessToken]"]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: faqsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFaqsQuery"])(undefined, {
        skip: !accessToken
    });
    const { data: thread } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetChatThreadQuery"])(undefined, {
        skip: !accessToken || !open
    });
    const [askFaq, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAskFaqMutation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaqChatWidget.useEffect": ()=>{
            if (thread === null || thread === void 0 ? void 0 : thread.items) setMessages(thread.items);
        }
    }["FaqChatWidget.useEffect"], [
        thread === null || thread === void 0 ? void 0 : thread.items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaqChatWidget.useEffect": ()=>{
            var _bottomRef_current;
            if (!open) return;
            (_bottomRef_current = bottomRef.current) === null || _bottomRef_current === void 0 ? void 0 : _bottomRef_current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["FaqChatWidget.useEffect"], [
        open,
        messages.length
    ]);
    if (!accessToken) return null;
    async function onPick(faqId) {
        try {
            const res = await askFaq({
                faqId
            }).unwrap();
            setMessages((prev)=>{
                const ids = new Set(prev.map((m)=>m.id));
                const next = [
                    ...prev
                ];
                for (const m of res.messages){
                    if (!ids.has(m.id)) next.push(m);
                }
                return next;
            });
        } catch (e) {
        // keep UI quiet
        }
    }
    var _faqsData_items;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3",
        children: [
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex h-[min(520px,70vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/45 bg-[#07140f] shadow-[0_16px_48px_rgba(0,0,0,0.55)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#2a2418] bg-[#0c1a14] px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[0.72rem] font-extrabold tracking-[0.16em] text-[#d4af37]",
                                        children: "HELP CHAT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[0.68rem] text-[#8a8070]",
                                        children: "Pick a question · typing coming later"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(false),
                                className: "rounded-md border border-[#3a3220] px-2 py-1 text-[0.7rem] text-[#c4b48a] hover:text-[#e8c547]",
                                children: "CLOSE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2.5 overflow-y-auto px-3 py-3",
                        children: [
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-lg bg-[#0c0c0c] px-3 py-2 text-[0.8rem] text-[#9a9280]",
                                children: "Choose an FAQ below to get an answer."
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this) : messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex ".concat(m.role === "user" ? "justify-end" : "justify-start"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[85%] rounded-2xl px-3 py-2 text-[0.82rem] leading-snug ".concat(m.role === "user" ? "bg-[#d4af37] text-[#1a1205]" : "border border-[#2a2418] bg-[#101010] text-[#f5efe0]"),
                                        children: m.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, m.id, false, {
                                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: bottomRef
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#2a2418] bg-[#0a1210] px-3 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[0.62rem] font-semibold tracking-[0.14em] text-[#8a8070]",
                                children: "FREQUENT QUESTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex max-h-[120px] flex-col gap-1.5 overflow-y-auto",
                                children: ((_faqsData_items = faqsData === null || faqsData === void 0 ? void 0 : faqsData.items) !== null && _faqsData_items !== void 0 ? _faqsData_items : []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.75rem] text-[#8a8070]",
                                    children: "No FAQs yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : faqsData.items.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: isLoading,
                                        onClick: ()=>onPick(faq.id),
                                        className: "rounded-lg border border-[#d4af37]/30 bg-[#0c0c0c] px-3 py-2 text-left text-[0.78rem] text-[#e8c547] hover:border-[#d4af37]/70 disabled:opacity-50",
                                        children: faq.question
                                    }, faq.id, false, {
                                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                className: "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1205] shadow-[0_8px_24px_rgba(212,175,55,0.35)]",
                "aria-label": open ? "Close chat" : "Open chat",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-bold",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 6.5h16v9.5H9l-4 3v-3H4V6.5Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(FaqChatWidget, "kzw+HLsxcQIT90dxMcO0QjHVqkA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFaqsQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetChatThreadQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAskFaqMutation"]
    ];
});
_c = FaqChatWidget;
var _c;
__turbopack_context__.k.register(_c, "FaqChatWidget");
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
"[project]/src/store/api/gamesApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_GAMES",
    ()=>FALLBACK_GAMES,
    "gamesApi",
    ()=>gamesApi,
    "normalizeGamesPayload",
    ()=>normalizeGamesPayload,
    "useGetGamesQuery",
    ()=>useGetGamesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const CMS_ASSET_BASE = "https://www.cmsbetconstruct.com";
function asRecord(v) {
    return v && typeof v === "object" ? v : null;
}
function pickString(obj, keys) {
    for (const k of keys){
        const v = obj[k];
        if (typeof v === "string" && v.trim()) return v.trim();
        if (typeof v === "number") return String(v);
    }
    return "";
}
function absoluteUrl(path) {
    if (!path || typeof path !== "string") return null;
    const p = path.trim();
    if (!p) return null;
    if (p.startsWith("http://") || p.startsWith("https://")) return p;
    if (p.startsWith("//")) return "https:".concat(p);
    if (p.startsWith("/")) return "".concat(CMS_ASSET_BASE).concat(p);
    return "".concat(CMS_ASSET_BASE, "/").concat(p);
}
function pickImage(row) {
    const direct = pickString(row, [
        "icon_2",
        "icon_3",
        "icon_url",
        "image",
        "image_url",
        "thumbnail",
        "background"
    ]);
    if (direct) return absoluteUrl(direct);
    const icon = asRecord(row.icon);
    if (icon) {
        const nested = pickString(icon, [
            "icon_2",
            "icon_3",
            "background"
        ]);
        if (nested) return absoluteUrl(nested);
    }
    const webp = asRecord(row.webp_icon);
    if (webp) {
        const nested = pickString(webp, [
            "icon_2",
            "icon_3",
            "background"
        ]);
        if (nested) return absoluteUrl(nested);
    }
    return null;
}
function catTitles(row) {
    const cats = row.cats;
    if (!Array.isArray(cats)) return "";
    return cats.map((c)=>{
        const r = asRecord(c);
        return r ? pickString(r, [
            "title",
            "name"
        ]) : "";
    }).filter(Boolean).join(" ");
}
function detectCategory(row) {
    var _asRecord;
    const blob = [
        catTitles(row),
        pickString(row, [
            "category",
            "categories",
            "type",
            "game_category"
        ]),
        pickString(row, [
            "name",
            "game_name",
            "title"
        ]),
        pickString((_asRecord = asRecord(row.extra_category)) !== null && _asRecord !== void 0 ? _asRecord : {}, [
            "title",
            "name"
        ])
    ].join(" ").toLowerCase();
    if (blob.includes("live") || blob.includes("roulette") || blob.includes("baccarat") || blob.includes("blackjack")) {
        return "live";
    }
    if (blob.includes("jackpot")) return "jackpot";
    if (blob.includes("popular") || blob.includes("hot")) return "popular";
    return "slots";
}
function detectNew(row, index) {
    const titles = catTitles(row).toLowerCase();
    if (titles.includes("new")) return true;
    if (row.badge) return true;
    return index < 6;
}
function normalizeGamesPayload(payload) {
    const root = asRecord(payload);
    var _asRecord;
    const data = (_asRecord = asRecord(root === null || root === void 0 ? void 0 : root.data)) !== null && _asRecord !== void 0 ? _asRecord : root;
    var _data_games, _ref, _ref1, _ref2;
    const listCandidate = (_ref2 = (_ref1 = (_ref = (_data_games = data === null || data === void 0 ? void 0 : data.games) !== null && _data_games !== void 0 ? _data_games : data === null || data === void 0 ? void 0 : data.Items) !== null && _ref !== void 0 ? _ref : data === null || data === void 0 ? void 0 : data.items) !== null && _ref1 !== void 0 ? _ref1 : data === null || data === void 0 ? void 0 : data.list) !== null && _ref2 !== void 0 ? _ref2 : Array.isArray(data) ? data : null;
    if (!Array.isArray(listCandidate)) return [];
    return listCandidate.map((item, index)=>{
        const row = asRecord(item);
        if (!row) return null;
        const cmsId = pickString(row, [
            "id"
        ]) || "cms-".concat(index);
        // Prefer external game id for RGS launch; fallback to CMS id
        const launchId = pickString(row, [
            "extearnal_game_id",
            "external_game_id",
            "game_id",
            "id"
        ]) || cmsId;
        const title = pickString(row, [
            "name",
            "game_name",
            "title",
            "gameName"
        ]) || "Game ".concat(index + 1);
        const subtitle = pickString(row, [
            "provider_title",
            "provider",
            "show_as_provider"
        ]) || "Casino";
        const types = asRecord(row.types);
        var _types_funMode;
        const funMode = Number((_types_funMode = types === null || types === void 0 ? void 0 : types.funMode) !== null && _types_funMode !== void 0 ? _types_funMode : 1) === 1;
        var _types_realMode;
        const realMode = Number((_types_realMode = types === null || types === void 0 ? void 0 : types.realMode) !== null && _types_realMode !== void 0 ? _types_realMode : 1) === 1;
        const category = detectCategory(row);
        const isLive = category === "live";
        return {
            id: launchId,
            cmsId,
            title,
            subtitle,
            imageUrl: pickImage(row),
            category,
            isNew: detectNew(row, index),
            isLive,
            funMode,
            realMode
        };
    }).filter(Boolean);
}
const FALLBACK_GAMES = [
    {
        id: "f1",
        cmsId: "f1",
        title: "Sweet Fortune",
        subtitle: "Dragon Gold",
        imageUrl: null,
        category: "slots",
        isNew: true,
        isLive: false,
        funMode: false,
        realMode: false
    }
];
const gamesApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getGames: build.query({
                query: (param)=>{
                    let { limit = 30, offset = 0, search, category } = param;
                    const safeLimit = Math.min(Math.max(limit, 1), 30);
                    const params = {
                        limit: String(safeLimit),
                        offset: String(offset)
                    };
                    if (search) params.search = search;
                    if (category && category !== "slots") {
                        params.category = category;
                    }
                    return {
                        url: "/games",
                        params
                    };
                },
                transformResponse: (response)=>{
                    const games = normalizeGamesPayload(response);
                    if (games.length === 0) {
                        return {
                            games: FALLBACK_GAMES,
                            fromFallback: true,
                            cached: response.cached
                        };
                    }
                    return {
                        games,
                        fromFallback: false,
                        cached: response.cached
                    };
                },
                providesTags: [
                    "Games"
                ]
            })
        })
});
const { useGetGamesQuery } = gamesApi;
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
                query: ()=>"/payments/rate",
                // No user SSE — refetch when revisiting pages
                keepUnusedDataFor: 60
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
                ],
                keepUnusedDataFor: 30
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
"[project]/src/app/games/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/LobbyHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$CategorySearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/CategorySearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/GameGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$DailyLoginClaimBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/DailyLoginClaimBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$QuestsClaimBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/QuestsClaimBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$BigWinTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/BigWinTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/LeaderboardPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$AnnouncementBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/AnnouncementBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$FaqChatWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/FaqChatWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLobbyLogout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$gamesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/gamesApi.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function GamesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LobbyPage, {}, void 0, false, {
            fileName: "[project]/src/app/games/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/games/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = GamesPage;
function LobbyPage() {
    var _me_balance;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLobbyLogout"])();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("slots");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { data: me } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"])();
    const { data: rateData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRateQuery"])();
    const { data: gamesData, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$gamesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGamesQuery"])({
        // CMS getGames rejects higher limits (e.g. 48 → status -1, empty list)
        limit: 30,
        offset: 0,
        search: search.trim() || undefined
    });
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LobbyPage.useMemo[filtered]": ()=>{
            var _gamesData_games;
            const list = (_gamesData_games = gamesData === null || gamesData === void 0 ? void 0 : gamesData.games) !== null && _gamesData_games !== void 0 ? _gamesData_games : [];
            const q = search.trim().toLowerCase();
            return list.filter({
                "LobbyPage.useMemo[filtered]": (g)=>{
                    const matchSearch = !q || g.title.toLowerCase().includes(q) || g.subtitle.toLowerCase().includes(q);
                    if (gamesData === null || gamesData === void 0 ? void 0 : gamesData.fromFallback) {
                        return g.category === category && matchSearch;
                    }
                    if (category === "slots") return matchSearch;
                    return g.category === category && matchSearch;
                }
            }["LobbyPage.useMemo[filtered]"]);
        }
    }["LobbyPage.useMemo[filtered]"], [
        gamesData,
        category,
        search
    ]);
    function onPlay(game) {
        if (gamesData === null || gamesData === void 0 ? void 0 : gamesData.fromFallback) return;
        const mode = game.funMode ? "fun" : "real";
        const params = new URLSearchParams({
            gameId: game.id,
            title: game.title,
            mode
        });
        router.push("/play?".concat(params.toString()));
    }
    var _me_balance_realBalance, _rateData_mmkPerUsd;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-[#01100b] text-[#f5efe0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LobbyHeader"], {
                active: "games",
                balanceUsd: (_me_balance_realBalance = me === null || me === void 0 ? void 0 : (_me_balance = me.balance) === null || _me_balance === void 0 ? void 0 : _me_balance.realBalance) !== null && _me_balance_realBalance !== void 0 ? _me_balance_realBalance : "0",
                mmkPerUsd: (_rateData_mmkPerUsd = rateData === null || rateData === void 0 ? void 0 : rateData.mmkPerUsd) !== null && _rateData_mmkPerUsd !== void 0 ? _rateData_mmkPerUsd : "4500",
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full px-3 pb-5 pt-4 sm:px-4 lg:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$BigWinTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BigWinTicker"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$AnnouncementBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnouncementBox"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeaderboardPanel"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$DailyLoginClaimBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailyLoginClaimBox"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$QuestsClaimBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestsClaimBox"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$CategorySearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategorySearchBar"], {
                        category: category,
                        search: search,
                        onCategoryChange: setCategory,
                        onSearchChange: setSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    (gamesData === null || gamesData === void 0 ? void 0 : gamesData.fromFallback) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-lg border border-[#d4af37]/40 bg-[rgba(120,90,20,0.18)] px-4 py-3 text-[0.85rem] text-[#e8c547]",
                        children: "Provider CMS returned 0 games for this partner. Showing preview lobby cards until games are enabled. Play launch is disabled."
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[0.8rem] text-[#9a9280]",
                        children: [
                            filtered.length,
                            " games · click a card to launch (starts in Fun mode when available)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameGrid"], {
                            games: filtered,
                            loading: isFetching && !gamesData,
                            onPlay: (gamesData === null || gamesData === void 0 ? void 0 : gamesData.fromFallback) ? undefined : onPlay
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$FaqChatWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqChatWidget"], {}, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/games/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(LobbyPage, "q0YxfbPud8A+sXnGP8GTNQ6K7Pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLobbyLogout"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRateQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$gamesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGamesQuery"]
    ];
});
_c1 = LobbyPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "GamesPage");
__turbopack_context__.k.register(_c1, "LobbyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0b0f3a00._.js.map