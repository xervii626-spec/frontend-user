module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/store/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"].withTypes();
}),
"[project]/src/store/api/authApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const authApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
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
}),
"[project]/src/components/auth/AuthGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/auth/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AuthGuard({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { accessToken, hydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((s)=>s.auth);
    const { isError, isFetching, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMeQuery"])(undefined, {
        skip: !hydrated || !accessToken,
        refetchOnMountOrArgChange: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydrated) return;
        if (!accessToken) {
            router.replace("/login");
        }
    }, [
        hydrated,
        accessToken,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydrated || !accessToken || isFetching) return;
        if (isError || data?.player?.isBlocked) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCredentials"])());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthSession"])();
            router.replace("/login");
        }
    }, [
        hydrated,
        accessToken,
        isFetching,
        isError,
        data,
        dispatch,
        router
    ]);
    if (!hydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    if (!accessToken) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Redirecting to login…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (isFetching && !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]",
            children: "Checking session…"
        }, void 0, false, {
            fileName: "[project]/src/components/auth/AuthGuard.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/lib/money-format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatMmk",
    ()=>formatMmk,
    "formatUsd",
    ()=>formatUsd
]);
function formatUsd(value) {
    const n = Number(value ?? 0);
    if (Number.isNaN(n)) return "0.00";
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function formatMmk(usd, rate) {
    const u = Number(usd ?? 0);
    const r = Number(rate ?? 0);
    if (Number.isNaN(u) || Number.isNaN(r)) return "0";
    return (u * r).toLocaleString("en-US", {
        maximumFractionDigits: 0
    });
}
}),
"[project]/src/components/lobby/LobbyHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LobbyHeader",
    ()=>LobbyHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money-format.ts [app-ssr] (ecmascript)");
"use client";
;
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
function LobbyHeader({ active = "games", balanceUsd = "0", mmkPerUsd = "4500", onLogout }) {
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mmk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMmk"])(balanceUsd, mmkPerUsd);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full border-b border-[#d4af37]/20 bg-[linear-gradient(180deg,#021a12_0%,#01100b_100%)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-[84px] w-full items-center justify-between gap-3 px-3 sm:h-[96px] sm:px-4 lg:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/games",
                        className: "flex shrink-0 items-center gap-3 sm:gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 rounded-full bg-[#d4af37]/30 blur-lg",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/brand/sd-logo-circle.jpg",
                                        alt: "Shwe Dunn",
                                        width: 64,
                                        height: 64,
                                        className: "relative h-14 w-14 rounded-full border-2 border-[#d4af37]/60 object-cover shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:h-16 sm:w-16",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-[family-name:var(--font-cinzel)] text-[1.35rem] font-semibold tracking-[0.12em] text-[#e8c547] sm:text-[1.7rem] lg:text-[1.85rem]",
                                children: "SHWE DUNN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-11",
                        children: NAV.map((item)=>{
                            const isActive = item.key === active;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `relative pb-1.5 font-[family-name:var(--font-cinzel)] text-[1.15rem] font-semibold tracking-[0.06em] transition lg:text-[1.3rem] ${isActive ? "text-[#e8c547]" : "text-[#d8d0bc] hover:text-[#e8c547]"}`,
                                children: [
                                    item.label,
                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-[#d4af37]",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this) : null
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-2.5 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#f0d78c_0%,#d4af37_55%,#b8922a_100%)] px-4 py-2.5 shadow-[0_8px_24px_rgba(212,175,55,0.32)] sm:px-5 sm:py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[1.05rem] font-extrabold tabular-nums tracking-wide text-[#1a1205] sm:text-[1.2rem]",
                                        children: hidden ? "••••" : `${mmk} MMK`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": hidden ? "Show balance" : "Hide balance",
                                        onClick: ()=>setHidden((v)=>!v),
                                        className: "text-[#1a1205]/80 hover:text-[#1a1205]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {
                                            open: !hidden
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            onLogout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onLogout,
                                className: "hidden rounded-full border border-[#d4af37]/45 px-4 py-2.5 text-[0.85rem] font-semibold tracking-[0.06em] text-[#e8c547] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10 sm:inline-flex",
                                children: "Log out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center justify-center gap-7 border-t border-[#d4af37]/12 px-3 py-3 md:hidden",
                children: NAV.map((item)=>{
                    const isActive = item.key === active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `relative pb-1 font-[family-name:var(--font-cinzel)] text-[1.05rem] font-semibold tracking-[0.05em] ${isActive ? "text-[#e8c547]" : "text-[#c5bba3]"}`,
                        children: [
                            item.label,
                            isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#d4af37]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function EyeIcon({ open }) {
    if (open) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4 4 16 16"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/LobbyHeader.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/lobby/CategorySearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySearchBar",
    ()=>CategorySearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
function CategorySearchBar({ category, search, onCategoryChange, onSearchChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end gap-5 sm:gap-8",
                children: CATEGORIES.map((c)=>{
                    const active = c.key === category;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onCategoryChange(c.key),
                        className: `relative pb-2 text-[1.05rem] font-semibold tracking-[0.04em] transition sm:text-[1.12rem] ${active ? "text-[#e8c547]" : "text-[#b8ae96] hover:text-[#e8c547]"}`,
                        children: [
                            c.label,
                            active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#d4af37]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this) : null
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full sm:max-w-sm lg:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: (e)=>onSearchChange(e.target.value),
                        placeholder: "Search games...",
                        className: "w-full rounded-full border border-[#d4af37]/40 bg-[#021a12] py-2.5 pl-11 pr-4 text-[0.92rem] text-white placeholder:text-[#7a7a7a] outline-none focus:border-[#d4af37]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "6.5"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m16 16 4 4"
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/CategorySearchBar.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/lobby/GameCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameCard",
    ()=>GameCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
function GameCard({ game, index, onPlay }) {
    const gradient = GRADIENTS[index % GRADIENTS.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onPlay?.(game),
        className: "group flex w-full flex-col overflow-hidden rounded-xl border border-[#d4af37]/50 bg-[#02150f] text-left shadow-[0_0_0_1px_rgba(212,175,55,0.06)] transition hover:border-[#e8c547] hover:shadow-[0_0_18px_rgba(212,175,55,0.18)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] w-full overflow-hidden",
                children: [
                    game.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: game.imageUrl,
                        alt: game.title,
                        className: "absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 bg-gradient-to-br ${gradient}`,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    game.isNew ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-2 top-2 rounded-[3px] bg-[#1f9d55] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white",
                        children: "NEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this) : null,
                    game.isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-2 top-2 rounded-[3px] bg-[#e11d48] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white",
                        children: "LIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/GameCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#d4af37]/28 bg-[#02120d] px-2.5 py-2 sm:px-3 sm:py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-center text-[0.9rem] font-bold leading-tight text-[#e8c547] sm:text-[0.95rem]",
                        children: game.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 truncate text-center text-[0.72rem] font-medium leading-tight text-[#c5bba3]",
                        children: game.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/GameCard.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lobby/GameCard.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lobby/GameCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/lobby/GameGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameGrid",
    ()=>GameGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/GameCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function GameGrid({ games, loading, onPlay }) {
    const gridClass = "grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6";
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: gridClass,
            children: Array.from({
                length: 18
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-lg border border-[#d4af37]/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[4/3] animate-pulse bg-[#0a2a1c]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/GameGrid.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-[#d4af37]/25 bg-[#02150f] px-4 py-12 text-center text-[0.95rem] text-[#9a9280]",
            children: "No games found."
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/GameGrid.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: gridClass,
        children: games.map((game, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameCard"], {
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
}),
"[project]/src/store/api/questsApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questsApi",
    ()=>questsApi,
    "useClaimQuestMutation",
    ()=>useClaimQuestMutation,
    "useGetQuestsQuery",
    ()=>useGetQuestsQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const questsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getQuests: build.query({
                query: ()=>"/quests",
                providesTags: [
                    "Quests"
                ]
            }),
            claimQuest: build.mutation({
                query: (id)=>({
                        url: `/quests/${id}/claim`,
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
}),
"[project]/src/components/lobby/QuestsClaimBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestsClaimBox",
    ()=>QuestsClaimBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/questsApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function QuestsClaimBox() {
    const { data, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetQuestsQuery"])(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [claim, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$questsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClaimQuestMutation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const items = data?.items ?? [];
    if (!items.length) return null;
    async function onClaim(id) {
        setError(null);
        setFlash(null);
        try {
            const res = await claim(id).unwrap();
            setFlash(`Claimed ${res.rewardMmk} MMK bonus (play only)`);
        } catch (err) {
            const msg = err && typeof err === "object" && "data" in err ? err.data?.message : null;
            setError(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Could not claim");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-baseline justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                        children: "QUESTS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: items.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-[#2a2418] bg-[#0a0f0c]/80 px-3 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-[#f5efe0]",
                                            children: q.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[#1a241c]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full bg-[linear-gradient(90deg,#d4af37,#e8c547)]",
                                                style: {
                                                    width: `${q.percent}%`
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !q.canClaim || isLoading || q.status === "claimed",
                                    onClick: ()=>onClaim(q.id),
                                    className: "shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-4 py-2 text-xs font-extrabold tracking-[0.1em] text-[#1a1205] disabled:cursor-not-allowed disabled:opacity-45",
                                    children: q.status === "claimed" ? "CLAIMED" : q.canClaim ? "CLAIM" : `${q.percent}%`
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
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-[#ff8f8f]",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/lobby/QuestsClaimBox.tsx",
                lineNumber: 95,
                columnNumber: 16
            }, this) : null,
            flash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/store/api/announcementsApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "announcementsApi",
    ()=>announcementsApi,
    "useGetAnnouncementInboxQuery",
    ()=>useGetAnnouncementInboxQuery,
    "useMarkAnnouncementReadMutation",
    ()=>useMarkAnnouncementReadMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const announcementsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getAnnouncementInbox: build.query({
                query: (params)=>({
                        url: "/announcements/inbox",
                        params: {
                            limit: params?.limit ?? 10
                        }
                    }),
                providesTags: [
                    "Announcements"
                ]
            }),
            markAnnouncementRead: build.mutation({
                query: (announcementId)=>({
                        url: `/announcements/${announcementId}/read`,
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Announcements"
                ]
            })
        })
});
const { useGetAnnouncementInboxQuery, useMarkAnnouncementReadMutation } = announcementsApi;
}),
"[project]/src/components/lobby/AnnouncementBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementBox",
    ()=>AnnouncementBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/announcementsApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnnouncementBox() {
    const { data, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetAnnouncementInboxQuery"])({
        limit: 5
    }, {
        pollingInterval: 30_000
    });
    const [markRead, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$announcementsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMarkAnnouncementReadMutation"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const latest = (data?.items ?? []).find((x)=>!x.readAt);
    if (!latest) return null;
    async function onDismiss() {
        setError(null);
        try {
            await markRead(latest.announcementId).unwrap();
        } catch  {
            setError("Could not mark as read");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]",
                            children: [
                                "ANNOUNCEMENT",
                                (data?.unreadCount ?? 0) > 0 ? ` · ${data.unreadCount} NEW` : "",
                                isFetching ? " · …" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm font-semibold text-[#f5efe0]",
                            children: latest.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[0.82rem] text-[#c5bba3]",
                            children: latest.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/AnnouncementBox.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                !latest.readAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/lobby/WelcomeStrip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Slim welcome bar matching home mockup v3. */ __turbopack_context__.s([
    "WelcomeStrip",
    ()=>WelcomeStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WelcomeStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 rounded-md border border-[#d4af37]/35 bg-[#06140f] px-3 py-2 text-center sm:px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[0.92rem] font-medium tracking-wide text-[#f5efe0] sm:text-[1rem]",
            children: "Welcome to Shwe Dunn"
        }, void 0, false, {
            fileName: "[project]/src/components/lobby/WelcomeStrip.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/WelcomeStrip.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/store/api/bonusApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bonusApi",
    ()=>bonusApi,
    "useClaimDailyLoginMutation",
    ()=>useClaimDailyLoginMutation,
    "useGetDailyLoginQuery",
    ()=>useGetDailyLoginQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const bonusApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
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
}),
"[project]/src/lib/daily-login-prompt.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDailyLoginPrompt",
    ()=>clearDailyLoginPrompt,
    "readDailyLoginPrompt",
    ()=>readDailyLoginPrompt,
    "saveDailyLoginPrompt",
    ()=>saveDailyLoginPrompt
]);
const KEY = "sd_daily_login_prompt";
function saveDailyLoginPrompt(status) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const payload = undefined;
}
function readDailyLoginPrompt() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function clearDailyLoginPrompt() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/components/lobby/DailyLoginClaimModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyLoginClaimModal",
    ()=>DailyLoginClaimModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/bonusApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2d$login$2d$prompt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/daily-login-prompt.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DailyLoginClaimModal() {
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claim, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$bonusApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClaimDailyLoginMutation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2d$login$2d$prompt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readDailyLoginPrompt"])();
        if (p?.show && p.status.canClaim) setPrompt(p);
    }, []);
    if (!prompt) return null;
    async function onClaim() {
        setError(null);
        try {
            const res = await claim().unwrap();
            setDone(`Claimed ${Number(res.amountMmk).toLocaleString("en-US", {
                maximumFractionDigits: 0
            })} MMK`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2d$login$2d$prompt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearDailyLoginPrompt"])();
        } catch (err) {
            const msg = err && typeof err === "object" && "data" in err ? err.data?.message : null;
            setError(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Could not claim");
        }
    }
    function onClose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2d$login$2d$prompt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearDailyLoginPrompt"])();
        setPrompt(null);
    }
    const amountLabel = Number(prompt.status.amountMmk).toLocaleString("en-US", {
        maximumFractionDigits: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(1,10,7,0.78)] p-4 backdrop-blur-[3px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "daily-login-title",
            className: "relative w-full max-w-[400px] pt-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 top-0 z-10 -translate-x-1/2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-0 rounded-full bg-[#d4af37]/35 blur-xl",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/brand/sd-logo-circle.jpg",
                            alt: "Shwe Dunn",
                            width: 84,
                            height: 84,
                            className: "relative rounded-full border-2 border-[#d4af37] object-cover shadow-[0_0_32px_rgba(212,175,55,0.45)]",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-[20px] border-2 border-[#d4af37]/70 bg-[radial-gradient(ellipse_at_50%_0%,rgba(48,78,50,0.98)_0%,rgba(6,18,12,0.99)_52%,rgba(2,10,7,1)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.7),0_0_48px_rgba(212,175,55,0.16)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-x-10 top-10 h-px bg-[linear-gradient(90deg,transparent,#d4af37,transparent)]",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-6 pb-5 pt-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "daily-login-title",
                                    className: "font-[family-name:var(--font-cinzel)] text-[0.82rem] font-semibold tracking-[0.24em] text-[#d4af37]",
                                    children: "DAILY LOGIN BONUS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-[1.1rem] font-semibold text-[#7dffa3]",
                                    children: done
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 font-[family-name:var(--font-cinzel)] text-[2.6rem] font-semibold leading-none tracking-wide text-[#e8c547] drop-shadow-[0_0_22px_rgba(232,197,71,0.45)] sm:text-[2.85rem]",
                                            children: [
                                                amountLabel,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-[1.05rem] tracking-[0.16em] text-[#d4af37]",
                                                    children: "MMK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-[0.82rem] text-[#d8d0bc]",
                                            children: "play-only · not withdrawable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[0.72rem] tracking-wide text-[#7a9a82]",
                                            children: [
                                                "Resets daily in ",
                                                prompt.status.timezone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-[#ff8f8f]",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2.5 border-t border-[#d4af37]/18 px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 rounded-xl border border-[#d4af37]/45 bg-[rgba(8,28,18,0.85)] px-4 py-3 text-sm font-semibold tracking-[0.14em] text-[#e8c547] transition hover:border-[#d4af37] hover:bg-[rgba(20,48,32,0.9)]",
                                    children: done ? "CLOSE" : "LATER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                !done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isLoading,
                                    onClick: onClaim,
                                    className: "flex-[1.4] rounded-xl bg-[linear-gradient(180deg,#f5e0a0_0%,#d4af37_42%,#b8922a_100%)] px-4 py-3 text-sm font-extrabold tracking-[0.18em] text-[#1a1205] shadow-[0_10px_28px_rgba(212,175,55,0.35)] transition hover:brightness-105 disabled:opacity-50",
                                    children: isLoading ? "…" : "CLAIM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/lobby/DailyLoginClaimModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/store/api/chatApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const chatApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
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
}),
"[project]/src/components/chat/FaqChatWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqChatWidget",
    ()=>FaqChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/chatApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FaqChatWidget() {
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((s)=>s.auth.accessToken);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: faqsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetFaqsQuery"])(undefined, {
        skip: !accessToken
    });
    const { data: thread } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetChatThreadQuery"])(undefined, {
        skip: !accessToken || !open
    });
    const [askFaq, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAskFaqMutation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (thread?.items) setMessages(thread.items);
    }, [
        thread?.items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
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
        } catch  {
        // keep UI quiet
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3",
        children: [
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex h-[min(520px,70vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/45 bg-[#07140f] shadow-[0_16px_48px_rgba(0,0,0,0.55)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-[#2a2418] bg-[#0c1a14] px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[0.72rem] font-extrabold tracking-[0.16em] text-[#d4af37]",
                                        children: "HELP CHAT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2.5 overflow-y-auto px-3 py-3",
                        children: [
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-lg bg-[#0c0c0c] px-3 py-2 text-[0.8rem] text-[#9a9280]",
                                children: "Choose an FAQ below to get an answer."
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this) : messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[85%] rounded-2xl px-3 py-2 text-[0.82rem] leading-snug ${m.role === "user" ? "bg-[#d4af37] text-[#1a1205]" : "border border-[#2a2418] bg-[#101010] text-[#f5efe0]"}`,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#2a2418] bg-[#0a1210] px-3 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[0.62rem] font-semibold tracking-[0.14em] text-[#8a8070]",
                                children: "FREQUENT QUESTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex max-h-[120px] flex-col gap-1.5 overflow-y-auto",
                                children: (faqsData?.items ?? []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.75rem] text-[#8a8070]",
                                    children: "No FAQs yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : faqsData.items.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                className: "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1205] shadow-[0_8px_24px_rgba(212,175,55,0.35)]",
                "aria-label": open ? "Close chat" : "Open chat",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-bold",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/FaqChatWidget.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/src/hooks/useLobbyLogout.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLobbyLogout",
    ()=>useLobbyLogout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/features/auth/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useLobbyLogout() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [logoutApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    return async function onLogout() {
        try {
            await logoutApi().unwrap();
        } catch  {
        // ignore network errors; clear local session anyway
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthSession"])();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$features$2f$auth$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCredentials"])());
        router.replace("/login");
    };
}
}),
"[project]/src/store/api/gamesApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
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
    if (p.startsWith("//")) return `https:${p}`;
    if (p.startsWith("/")) return `${CMS_ASSET_BASE}${p}`;
    return `${CMS_ASSET_BASE}/${p}`;
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
        pickString(asRecord(row.extra_category) ?? {}, [
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
    const data = asRecord(root?.data) ?? root;
    const listCandidate = data?.games ?? data?.Items ?? data?.items ?? data?.list ?? (Array.isArray(data) ? data : null);
    if (!Array.isArray(listCandidate)) return [];
    return listCandidate.map((item, index)=>{
        const row = asRecord(item);
        if (!row) return null;
        const cmsId = pickString(row, [
            "id"
        ]) || `cms-${index}`;
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
        ]) || `Game ${index + 1}`;
        const subtitle = pickString(row, [
            "provider_title",
            "provider",
            "show_as_provider"
        ]) || "Casino";
        const types = asRecord(row.types);
        const funMode = Number(types?.funMode ?? 1) === 1;
        const realMode = Number(types?.realMode ?? 1) === 1;
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
const gamesApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getGames: build.query({
                query: ({ limit = 30, offset = 0, search, category })=>{
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
}),
"[project]/src/store/api/paymentsApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const paymentsApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getRate: build.query({
                query: ()=>"/payments/rate",
                // No user SSE — refetch when revisiting pages
                keepUnusedDataFor: 60
            }),
            getMyPayments: build.query({
                query: (params)=>({
                        url: "/payments/me",
                        params: {
                            page: params?.page ?? 1,
                            limit: params?.limit ?? 20
                        }
                    }),
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
                query: ({ id })=>({
                        url: `/payments/me/${id}/cancel`,
                        method: "POST"
                    }),
                invalidatesTags: [
                    "Wallet",
                    "Me"
                ]
            })
        })
});
const { useGetRateQuery, useGetMyPaymentsQuery, useCreateDepositMutation, useCreateWithdrawMutation, useCancelPaymentMutation } = paymentsApi;
}),
"[project]/src/app/games/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/LobbyHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$CategorySearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/CategorySearchBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/GameGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$QuestsClaimBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/QuestsClaimBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$AnnouncementBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/AnnouncementBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$WelcomeStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/WelcomeStrip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$DailyLoginClaimModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lobby/DailyLoginClaimModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$FaqChatWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/FaqChatWidget.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLobbyLogout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/authApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$gamesApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/gamesApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/paymentsApi.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LobbyPage, {}, void 0, false, {
            fileName: "[project]/src/app/games/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/games/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function LobbyPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const onLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLobbyLogout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLobbyLogout"])();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("slots");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { data: me } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$authApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMeQuery"])();
    const { data: rateData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$paymentsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetRateQuery"])();
    const { data: gamesData, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$gamesApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetGamesQuery"])({
        // CMS getGames rejects higher limits (e.g. 48 → status -1, empty list)
        limit: 30,
        offset: 0,
        search: search.trim() || undefined
    });
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const list = gamesData?.games ?? [];
        const q = search.trim().toLowerCase();
        return list.filter((g)=>{
            const matchSearch = !q || g.title.toLowerCase().includes(q) || g.subtitle.toLowerCase().includes(q);
            if (gamesData?.fromFallback) {
                return g.category === category && matchSearch;
            }
            if (category === "slots") return matchSearch;
            return g.category === category && matchSearch;
        });
    }, [
        gamesData,
        category,
        search
    ]);
    function onPlay(game) {
        if (gamesData?.fromFallback) return;
        const mode = game.funMode ? "fun" : "real";
        const params = new URLSearchParams({
            gameId: game.id,
            title: game.title,
            mode
        });
        router.push(`/play?${params.toString()}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-[radial-gradient(ellipse_at_50%_0%,#062218_0%,#01100b_42%,#010c08_100%)] text-[#f5efe0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$LobbyHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LobbyHeader"], {
                active: "games",
                balanceUsd: me?.balance?.realBalance ?? "0",
                mmkPerUsd: rateData?.mmkPerUsd ?? "4500",
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full px-3 pb-5 pt-4 sm:px-4 lg:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$WelcomeStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WelcomeStrip"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$AnnouncementBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnnouncementBox"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$QuestsClaimBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestsClaimBox"], {}, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$CategorySearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategorySearchBar"], {
                        category: category,
                        search: search,
                        onCategoryChange: setCategory,
                        onSearchChange: setSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    gamesData?.fromFallback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-lg border border-[#d4af37]/40 bg-[rgba(120,90,20,0.18)] px-4 py-3 text-[0.85rem] text-[#e8c547]",
                        children: "Provider CMS returned 0 games for this partner. Showing preview lobby cards until games are enabled. Play launch is disabled."
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$GameGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameGrid"], {
                            games: filtered,
                            loading: isFetching && !gamesData,
                            onPlay: gamesData?.fromFallback ? undefined : onPlay
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$FaqChatWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaqChatWidget"], {}, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lobby$2f$DailyLoginClaimModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DailyLoginClaimModal"], {}, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/games/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1a001306._.js.map