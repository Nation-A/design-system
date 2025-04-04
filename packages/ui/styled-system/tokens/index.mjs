const tokens = {
  "animations.backdrop-in": {
    "value": "fade-in 250ms var(--easings-emphasized-in)",
    "variable": "var(--animations-backdrop-in)"
  },
  "animations.backdrop-out": {
    "value": "fade-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-backdrop-out)"
  },
  "animations.dialog-in": {
    "value": "slide-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-dialog-in)"
  },
  "animations.dialog-out": {
    "value": "slide-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-dialog-out)"
  },
  "animations.drawer-in-left": {
    "value": "slide-in-left 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-left)"
  },
  "animations.drawer-out-left": {
    "value": "slide-out-left 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-left)"
  },
  "animations.drawer-in-right": {
    "value": "slide-in-right 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-right)"
  },
  "animations.drawer-out-right": {
    "value": "slide-out-right 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-right)"
  },
  "animations.skeleton-pulse": {
    "value": "skeleton-pulse 2s var(--easings-pulse) infinite",
    "variable": "var(--animations-skeleton-pulse)"
  },
  "animations.fade-in": {
    "value": "fade-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-fade-in)"
  },
  "animations.collapse-in": {
    "value": "collapse-in 250ms var(--easings-emphasized-in)",
    "variable": "var(--animations-collapse-in)"
  },
  "animations.collapse-out": {
    "value": "collapse-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-collapse-out)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "easings.pulse": {
    "value": "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
    "variable": "var(--easings-pulse)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.2, 0.0, 0, 1.0)",
    "variable": "var(--easings-default)"
  },
  "easings.emphasized-in": {
    "value": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "variable": "var(--easings-emphasized-in)"
  },
  "easings.emphasized-out": {
    "value": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    "variable": "var(--easings-emphasized-out)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--sizes-4\\.5)"
  },
  "sizes.2xs": {
    "value": "16rem",
    "variable": "var(--sizes-2xs)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    "value": 1600,
    "variable": "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "colors.neutral.0": {
    "value": "#080A0E",
    "variable": "var(--colors-neutral-0)"
  },
  "colors.neutral.100": {
    "value": "#101216",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#181A1E",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#282A2E",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#383A3E",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#505256",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#64666A",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#787A7E",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#A0A2A6",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#B4B6BA",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.1000": {
    "value": "#F2F4F8",
    "variable": "var(--colors-neutral-1000)"
  },
  "colors.neutral.1050": {
    "value": "#EDEEF1",
    "variable": "var(--colors-neutral-1050)"
  },
  "colors.neutral.1100": {
    "value": "#FAFCFF",
    "variable": "var(--colors-neutral-1100)"
  },
  "colors.neutral.1200": {
    "value": "#F8F9FF",
    "variable": "var(--colors-neutral-1200)"
  },
  "colors.black.700A": {
    "value": "rgba(0,0,0,0.8)",
    "variable": "var(--colors-black-700-a)"
  },
  "colors.black.600A": {
    "value": "rgba(0,0,0,0.6)",
    "variable": "var(--colors-black-600-a)"
  },
  "colors.black.500A": {
    "value": "rgba(0,0,0,0.4)",
    "variable": "var(--colors-black-500-a)"
  },
  "colors.black.400A": {
    "value": "rgba(0,0,0,0.32)",
    "variable": "var(--colors-black-400-a)"
  },
  "colors.black.300A": {
    "value": "rgba(0,0,0,0.2)",
    "variable": "var(--colors-black-300-a)"
  },
  "colors.black.200A": {
    "value": "rgba(0,0,0,0.12)",
    "variable": "var(--colors-black-200-a)"
  },
  "colors.black.100A": {
    "value": "rgba(0,0,0,0.08)",
    "variable": "var(--colors-black-100-a)"
  },
  "colors.white.700A": {
    "value": "rgba(255,255,255,0.8)",
    "variable": "var(--colors-white-700-a)"
  },
  "colors.white.600A": {
    "value": "rgba(255,255,255,0.6)",
    "variable": "var(--colors-white-600-a)"
  },
  "colors.white.500A": {
    "value": "rgba(255,255,255,0.4)",
    "variable": "var(--colors-white-500-a)"
  },
  "colors.white.400A": {
    "value": "rgba(255,255,255,0.32)",
    "variable": "var(--colors-white-400-a)"
  },
  "colors.white.300A": {
    "value": "rgba(255,255,255,0.2)",
    "variable": "var(--colors-white-300-a)"
  },
  "colors.white.200A": {
    "value": "rgba(255,255,255,0.12)",
    "variable": "var(--colors-white-200-a)"
  },
  "colors.white.100A": {
    "value": "rgba(255,255,255,0.08)",
    "variable": "var(--colors-white-100-a)"
  },
  "colors.red.100": {
    "value": "#ffeceb",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#ffd5d2",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fd9891",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87168",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#f15b50",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#e2483d",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#c9372c",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#87241c",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#5d1f1a",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.1000": {
    "value": "#42221f",
    "variable": "var(--colors-red-1000)"
  },
  "colors.orange.100": {
    "value": "#fff5eb",
    "variable": "var(--colors-orange-100)"
  },
  "colors.orange.200": {
    "value": "#ffe9d2",
    "variable": "var(--colors-orange-200)"
  },
  "colors.orange.300": {
    "value": "#fdc991",
    "variable": "var(--colors-orange-300)"
  },
  "colors.orange.400": {
    "value": "#f8b268",
    "variable": "var(--colors-orange-400)"
  },
  "colors.orange.500": {
    "value": "#f1a350",
    "variable": "var(--colors-orange-500)"
  },
  "colors.orange.600": {
    "value": "#e2923d",
    "variable": "var(--colors-orange-600)"
  },
  "colors.orange.700": {
    "value": "#c97d2c",
    "variable": "var(--colors-orange-700)"
  },
  "colors.orange.800": {
    "value": "#87531c",
    "variable": "var(--colors-orange-800)"
  },
  "colors.orange.900": {
    "value": "#5d3d1a",
    "variable": "var(--colors-orange-900)"
  },
  "colors.orange.1000": {
    "value": "#42311f",
    "variable": "var(--colors-orange-1000)"
  },
  "colors.blue.100": {
    "value": "#ebf2ff",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#d2e1ff",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#91b5fd",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#6898f8",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#5086f1",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#3d74e2",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#2c60c9",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#1c4087",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#1a305d",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.1000": {
    "value": "#1f2b42",
    "variable": "var(--colors-blue-1000)"
  },
  "colors.green.100": {
    "value": "#ebfff5",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#9cfccc",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#47EB99",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#26d980",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#14b866",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#10934c",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#147042",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#125433",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#104129",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.1000": {
    "value": "#0b2819",
    "variable": "var(--colors-green-1000)"
  },
  "colors.purple.100": {
    "value": "#f3ebff",
    "variable": "var(--colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#e9ddfd",
    "variable": "var(--colors-purple-200)"
  },
  "colors.purple.300": {
    "value": "#cbacfb",
    "variable": "var(--colors-purple-300)"
  },
  "colors.purple.400": {
    "value": "#ac7cf8",
    "variable": "var(--colors-purple-400)"
  },
  "colors.purple.500": {
    "value": "#8d4bf6",
    "variable": "var(--colors-purple-500)"
  },
  "colors.purple.600": {
    "value": "#6d19f5",
    "variable": "var(--colors-purple-600)"
  },
  "colors.purple.700": {
    "value": "#570ad1",
    "variable": "var(--colors-purple-700)"
  },
  "colors.purple.800": {
    "value": "#4308a0",
    "variable": "var(--colors-purple-800)"
  },
  "colors.purple.900": {
    "value": "#2f0670",
    "variable": "var(--colors-purple-900)"
  },
  "colors.purple.1000": {
    "value": "#1a033f",
    "variable": "var(--colors-purple-1000)"
  },
  "colors.ohre.100": {
    "value": "#FFF8F1",
    "variable": "var(--colors-ohre-100)"
  },
  "colors.ohre.200": {
    "value": "#FFE6C8",
    "variable": "var(--colors-ohre-200)"
  },
  "colors.ohre.300": {
    "value": "#FFD3A0",
    "variable": "var(--colors-ohre-300)"
  },
  "colors.ohre.400": {
    "value": "#FFC077",
    "variable": "var(--colors-ohre-400)"
  },
  "colors.ohre.500": {
    "value": "#E2A763",
    "variable": "var(--colors-ohre-500)"
  },
  "colors.ohre.600": {
    "value": "#C58F50",
    "variable": "var(--colors-ohre-600)"
  },
  "colors.ohre.700": {
    "value": "#A8773F",
    "variable": "var(--colors-ohre-700)"
  },
  "colors.ohre.800": {
    "value": "#8A6030",
    "variable": "var(--colors-ohre-800)"
  },
  "colors.ohre.900": {
    "value": "#6D4B22",
    "variable": "var(--colors-ohre-900)"
  },
  "colors.ohre.1000": {
    "value": "#503617",
    "variable": "var(--colors-ohre-1000)"
  },
  "colors.cyan.100": {
    "value": "#ecffff",
    "variable": "var(--colors-cyan-100)"
  },
  "colors.cyan.200": {
    "value": "#c1feff",
    "variable": "var(--colors-cyan-200)"
  },
  "colors.cyan.300": {
    "value": "#96feff",
    "variable": "var(--colors-cyan-300)"
  },
  "colors.cyan.400": {
    "value": "#6bfdff",
    "variable": "var(--colors-cyan-400)"
  },
  "colors.cyan.500": {
    "value": "#3df1f3",
    "variable": "var(--colors-cyan-500)"
  },
  "colors.cyan.600": {
    "value": "#2acfd1",
    "variable": "var(--colors-cyan-600)"
  },
  "colors.cyan.700": {
    "value": "#1aadaf",
    "variable": "var(--colors-cyan-700)"
  },
  "colors.cyan.800": {
    "value": "#0e8c8d",
    "variable": "var(--colors-cyan-800)"
  },
  "colors.cyan.900": {
    "value": "#056a6b",
    "variable": "var(--colors-cyan-900)"
  },
  "colors.cyan.1000": {
    "value": "#004849",
    "variable": "var(--colors-cyan-1000)"
  },
  "colors.yellow.100": {
    "value": "#FFFBED",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#FFF3C5",
    "variable": "var(--colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#FFEB9D",
    "variable": "var(--colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#FFE375",
    "variable": "var(--colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#FFDB4D",
    "variable": "var(--colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#DDBC38",
    "variable": "var(--colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#BB9D27",
    "variable": "var(--colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#997F19",
    "variable": "var(--colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#77620E",
    "variable": "var(--colors-yellow-900)"
  },
  "colors.yellow.1000": {
    "value": "#554506",
    "variable": "var(--colors-yellow-1000)"
  },
  "borderWidths.none": {
    "value": "0px",
    "variable": "var(--border-widths-none)"
  },
  "borderWidths.sm": {
    "value": "1px",
    "variable": "var(--border-widths-sm)"
  },
  "borderWidths.md": {
    "value": "2px",
    "variable": "var(--border-widths-md)"
  },
  "borderWidths.lg": {
    "value": "4px",
    "variable": "var(--border-widths-lg)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.30": {
    "value": "7.5rem",
    "variable": "var(--spacing-30)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.98": {
    "value": "24rem",
    "variable": "var(--spacing-98)"
  },
  "spacing.128": {
    "value": "32rem",
    "variable": "var(--spacing-128)"
  },
  "spacing.160": {
    "value": "40rem",
    "variable": "var(--spacing-160)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--spacing-4\\.5)"
  },
  "radii.none": {
    "value": "0px",
    "variable": "var(--radii-none)"
  },
  "radii.xs": {
    "value": "2px",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "8px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "16px",
    "variable": "var(--radii-lg)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "2rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "2.5rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "letterSpacings.xs": {
    "value": "-1.5px",
    "variable": "var(--letter-spacings-xs)"
  },
  "letterSpacings.sm": {
    "value": "-1.2px",
    "variable": "var(--letter-spacings-sm)"
  },
  "letterSpacings.md": {
    "value": "-1px",
    "variable": "var(--letter-spacings-md)"
  },
  "letterSpacings.lg": {
    "value": "-0.8px",
    "variable": "var(--letter-spacings-lg)"
  },
  "letterSpacings.xl": {
    "value": "-0.6px",
    "variable": "var(--letter-spacings-xl)"
  },
  "letterSpacings.2xl": {
    "value": "-0.4px",
    "variable": "var(--letter-spacings-2xl)"
  },
  "letterSpacings.3xl": {
    "value": "-0.2px",
    "variable": "var(--letter-spacings-3xl)"
  },
  "lineHeights.md": {
    "value": "1rem",
    "variable": "var(--line-heights-md)"
  },
  "lineHeights.lg": {
    "value": "1.25rem",
    "variable": "var(--line-heights-lg)"
  },
  "lineHeights.xl": {
    "value": "1.5rem",
    "variable": "var(--line-heights-xl)"
  },
  "lineHeights.2xl": {
    "value": "1.75rem",
    "variable": "var(--line-heights-2xl)"
  },
  "lineHeights.3xl": {
    "value": "2.25rem",
    "variable": "var(--line-heights-3xl)"
  },
  "lineHeights.4xl": {
    "value": "2.75rem",
    "variable": "var(--line-heights-4xl)"
  },
  "lineHeights.5xl": {
    "value": "3rem",
    "variable": "var(--line-heights-5xl)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.regularItalic": {
    "value": "Italic",
    "variable": "var(--font-weights-regular-italic)"
  },
  "fontWeights.mediumItalic": {
    "value": "Medium Italic",
    "variable": "var(--font-weights-medium-italic)"
  },
  "fonts.inter": {
    "value": "Inter",
    "variable": "var(--fonts-inter)"
  },
  "fonts.notoSans": {
    "value": "Noto Sans",
    "variable": "var(--fonts-noto-sans)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.content.neutral.bold": {
    "value": "var(--colors-content-neutral-bold)",
    "variable": "var(--colors-content-neutral-bold)"
  },
  "colors.content.neutral.default": {
    "value": "var(--colors-content-neutral-default)",
    "variable": "var(--colors-content-neutral-default)"
  },
  "colors.content.neutral.subtle": {
    "value": "var(--colors-content-neutral-subtle)",
    "variable": "var(--colors-content-neutral-subtle)"
  },
  "colors.content.neutral.subtlest": {
    "value": "var(--colors-content-neutral-subtlest)",
    "variable": "var(--colors-content-neutral-subtlest)"
  },
  "colors.content.neutral.disabled": {
    "value": "var(--colors-content-neutral-disabled)",
    "variable": "var(--colors-content-neutral-disabled)"
  },
  "colors.content.neutral.default_inverse": {
    "value": "var(--colors-content-neutral-default_inverse)",
    "variable": "var(--colors-content-neutral-default_inverse)"
  },
  "colors.content.neuroidPrimary.default": {
    "value": "var(--colors-content-neuroid-primary-default)",
    "variable": "var(--colors-content-neuroid-primary-default)"
  },
  "colors.content.neuroidPrimary.default_inverse": {
    "value": "var(--colors-content-neuroid-primary-default_inverse)",
    "variable": "var(--colors-content-neuroid-primary-default_inverse)"
  },
  "colors.content.danger.default": {
    "value": "var(--colors-content-danger-default)",
    "variable": "var(--colors-content-danger-default)"
  },
  "colors.content.warning.default": {
    "value": "var(--colors-content-warning-default)",
    "variable": "var(--colors-content-warning-default)"
  },
  "colors.content.success.default": {
    "value": "var(--colors-content-success-default)",
    "variable": "var(--colors-content-success-default)"
  },
  "colors.content.informative.default": {
    "value": "var(--colors-content-informative-default)",
    "variable": "var(--colors-content-informative-default)"
  },
  "colors.content.zoltarinaPrimary.default": {
    "value": "var(--colors-content-zoltarina-primary-default)",
    "variable": "var(--colors-content-zoltarina-primary-default)"
  },
  "colors.content.zoltarinaPrimary.default_inverse": {
    "value": "var(--colors-content-zoltarina-primary-default_inverse)",
    "variable": "var(--colors-content-zoltarina-primary-default_inverse)"
  },
  "colors.content.heydPrimary.default": {
    "value": "var(--colors-content-heyd-primary-default)",
    "variable": "var(--colors-content-heyd-primary-default)"
  },
  "colors.content.heydPrimary.default_inverse": {
    "value": "var(--colors-content-heyd-primary-default_inverse)",
    "variable": "var(--colors-content-heyd-primary-default_inverse)"
  },
  "colors.content.static.white.bold": {
    "value": "var(--colors-content-static-white-bold)",
    "variable": "var(--colors-content-static-white-bold)"
  },
  "colors.content.static.white.default": {
    "value": "var(--colors-content-static-white-default)",
    "variable": "var(--colors-content-static-white-default)"
  },
  "colors.content.static.white.subtle": {
    "value": "var(--colors-content-static-white-subtle)",
    "variable": "var(--colors-content-static-white-subtle)"
  },
  "colors.content.static.white.subtlest": {
    "value": "var(--colors-content-static-white-subtlest)",
    "variable": "var(--colors-content-static-white-subtlest)"
  },
  "colors.content.static.white.disabled": {
    "value": "var(--colors-content-static-white-disabled)",
    "variable": "var(--colors-content-static-white-disabled)"
  },
  "colors.content.static.black.bold": {
    "value": "var(--colors-content-static-black-bold)",
    "variable": "var(--colors-content-static-black-bold)"
  },
  "colors.content.static.black.default": {
    "value": "var(--colors-content-static-black-default)",
    "variable": "var(--colors-content-static-black-default)"
  },
  "colors.content.static.black.subtle": {
    "value": "var(--colors-content-static-black-subtle)",
    "variable": "var(--colors-content-static-black-subtle)"
  },
  "colors.content.static.black.subtlest": {
    "value": "var(--colors-content-static-black-subtlest)",
    "variable": "var(--colors-content-static-black-subtlest)"
  },
  "colors.content.static.black.disabled": {
    "value": "var(--colors-content-static-black-disabled)",
    "variable": "var(--colors-content-static-black-disabled)"
  },
  "colors.content.heybeePrimary.default": {
    "value": "var(--colors-content-heybee-primary-default)",
    "variable": "var(--colors-content-heybee-primary-default)"
  },
  "colors.content.heybeePrimary.default_inverse": {
    "value": "var(--colors-content-heybee-primary-default_inverse)",
    "variable": "var(--colors-content-heybee-primary-default_inverse)"
  },
  "colors.content.neutralInverse.bold": {
    "value": "var(--colors-content-neutral-inverse-bold)",
    "variable": "var(--colors-content-neutral-inverse-bold)"
  },
  "colors.content.neutralInverse.default": {
    "value": "var(--colors-content-neutral-inverse-default)",
    "variable": "var(--colors-content-neutral-inverse-default)"
  },
  "colors.content.neutralInverse.subtle": {
    "value": "var(--colors-content-neutral-inverse-subtle)",
    "variable": "var(--colors-content-neutral-inverse-subtle)"
  },
  "colors.content.neutralInverse.subtlest": {
    "value": "var(--colors-content-neutral-inverse-subtlest)",
    "variable": "var(--colors-content-neutral-inverse-subtlest)"
  },
  "colors.content.neutralInverse.disabled": {
    "value": "var(--colors-content-neutral-inverse-disabled)",
    "variable": "var(--colors-content-neutral-inverse-disabled)"
  },
  "colors.content.neutralInverse.default_inverse": {
    "value": "var(--colors-content-neutral-inverse-default_inverse)",
    "variable": "var(--colors-content-neutral-inverse-default_inverse)"
  },
  "colors.background.neutral.default": {
    "value": "var(--colors-background-neutral-default)",
    "variable": "var(--colors-background-neutral-default)"
  },
  "colors.background.neutral.selected": {
    "value": "var(--colors-background-neutral-selected)",
    "variable": "var(--colors-background-neutral-selected)"
  },
  "colors.background.neutral.disabled": {
    "value": "var(--colors-background-neutral-disabled)",
    "variable": "var(--colors-background-neutral-disabled)"
  },
  "colors.background.neuroidPrimary.default": {
    "value": "var(--colors-background-neuroid-primary-default)",
    "variable": "var(--colors-background-neuroid-primary-default)"
  },
  "colors.background.neuroidPrimary.selected": {
    "value": "var(--colors-background-neuroid-primary-selected)",
    "variable": "var(--colors-background-neuroid-primary-selected)"
  },
  "colors.background.neuroidSecondary.default": {
    "value": "var(--colors-background-neuroid-secondary-default)",
    "variable": "var(--colors-background-neuroid-secondary-default)"
  },
  "colors.background.neuroidSecondary.selected": {
    "value": "var(--colors-background-neuroid-secondary-selected)",
    "variable": "var(--colors-background-neuroid-secondary-selected)"
  },
  "colors.background.danger.default": {
    "value": "var(--colors-background-danger-default)",
    "variable": "var(--colors-background-danger-default)"
  },
  "colors.background.danger.selected": {
    "value": "var(--colors-background-danger-selected)",
    "variable": "var(--colors-background-danger-selected)"
  },
  "colors.background.warning.default": {
    "value": "var(--colors-background-warning-default)",
    "variable": "var(--colors-background-warning-default)"
  },
  "colors.background.warning.selected": {
    "value": "var(--colors-background-warning-selected)",
    "variable": "var(--colors-background-warning-selected)"
  },
  "colors.background.success.default": {
    "value": "var(--colors-background-success-default)",
    "variable": "var(--colors-background-success-default)"
  },
  "colors.background.success.selected": {
    "value": "var(--colors-background-success-selected)",
    "variable": "var(--colors-background-success-selected)"
  },
  "colors.background.informative.default": {
    "value": "var(--colors-background-informative-default)",
    "variable": "var(--colors-background-informative-default)"
  },
  "colors.background.informative.selected": {
    "value": "var(--colors-background-informative-selected)",
    "variable": "var(--colors-background-informative-selected)"
  },
  "colors.background.zoltarinaPrimary.default": {
    "value": "var(--colors-background-zoltarina-primary-default)",
    "variable": "var(--colors-background-zoltarina-primary-default)"
  },
  "colors.background.zoltarinaPrimary.selected": {
    "value": "var(--colors-background-zoltarina-primary-selected)",
    "variable": "var(--colors-background-zoltarina-primary-selected)"
  },
  "colors.background.zoltarinaSecondary.default": {
    "value": "var(--colors-background-zoltarina-secondary-default)",
    "variable": "var(--colors-background-zoltarina-secondary-default)"
  },
  "colors.background.zoltarinaSecondary.selected": {
    "value": "var(--colors-background-zoltarina-secondary-selected)",
    "variable": "var(--colors-background-zoltarina-secondary-selected)"
  },
  "colors.background.heydPrimary.default": {
    "value": "var(--colors-background-heyd-primary-default)",
    "variable": "var(--colors-background-heyd-primary-default)"
  },
  "colors.background.heydPrimary.selected": {
    "value": "var(--colors-background-heyd-primary-selected)",
    "variable": "var(--colors-background-heyd-primary-selected)"
  },
  "colors.background.heydSecondary.default": {
    "value": "var(--colors-background-heyd-secondary-default)",
    "variable": "var(--colors-background-heyd-secondary-default)"
  },
  "colors.background.heydSecondary.selected": {
    "value": "var(--colors-background-heyd-secondary-selected)",
    "variable": "var(--colors-background-heyd-secondary-selected)"
  },
  "colors.background.static.whiteAlpha.bold": {
    "value": "var(--colors-background-static-white-alpha-bold)",
    "variable": "var(--colors-background-static-white-alpha-bold)"
  },
  "colors.background.static.whiteAlpha.default": {
    "value": "var(--colors-background-static-white-alpha-default)",
    "variable": "var(--colors-background-static-white-alpha-default)"
  },
  "colors.background.static.whiteAlpha.selected": {
    "value": "var(--colors-background-static-white-alpha-selected)",
    "variable": "var(--colors-background-static-white-alpha-selected)"
  },
  "colors.background.static.whiteAlpha.disabled": {
    "value": "var(--colors-background-static-white-alpha-disabled)",
    "variable": "var(--colors-background-static-white-alpha-disabled)"
  },
  "colors.background.static.blackAlpha.bold": {
    "value": "var(--colors-background-static-black-alpha-bold)",
    "variable": "var(--colors-background-static-black-alpha-bold)"
  },
  "colors.background.static.blackAlpha.default": {
    "value": "var(--colors-background-static-black-alpha-default)",
    "variable": "var(--colors-background-static-black-alpha-default)"
  },
  "colors.background.static.blackAlpha.selected": {
    "value": "var(--colors-background-static-black-alpha-selected)",
    "variable": "var(--colors-background-static-black-alpha-selected)"
  },
  "colors.background.static.blackAlpha.disabled": {
    "value": "var(--colors-background-static-black-alpha-disabled)",
    "variable": "var(--colors-background-static-black-alpha-disabled)"
  },
  "colors.background.heybeePrimary.default": {
    "value": "var(--colors-background-heybee-primary-default)",
    "variable": "var(--colors-background-heybee-primary-default)"
  },
  "colors.background.heybeePrimary.selected": {
    "value": "var(--colors-background-heybee-primary-selected)",
    "variable": "var(--colors-background-heybee-primary-selected)"
  },
  "colors.background.neutralInverse.default": {
    "value": "var(--colors-background-neutral-inverse-default)",
    "variable": "var(--colors-background-neutral-inverse-default)"
  },
  "colors.background.neutralInverse.selected": {
    "value": "var(--colors-background-neutral-inverse-selected)",
    "variable": "var(--colors-background-neutral-inverse-selected)"
  },
  "colors.background.neutralInverse.disabled": {
    "value": "var(--colors-background-neutral-inverse-disabled)",
    "variable": "var(--colors-background-neutral-inverse-disabled)"
  },
  "colors.surface.base": {
    "value": "var(--colors-surface-base)",
    "variable": "var(--colors-surface-base)"
  },
  "colors.surface.layer_1": {
    "value": "var(--colors-surface-layer_1)",
    "variable": "var(--colors-surface-layer_1)"
  },
  "colors.surface.layer_2": {
    "value": "var(--colors-surface-layer_2)",
    "variable": "var(--colors-surface-layer_2)"
  },
  "colors.shadow.overlay": {
    "value": "var(--colors-shadow-overlay)",
    "variable": "var(--colors-shadow-overlay)"
  },
  "colors.shadow.raised": {
    "value": "var(--colors-shadow-raised)",
    "variable": "var(--colors-shadow-raised)"
  },
  "colors.scrim.default": {
    "value": "var(--colors-scrim-default)",
    "variable": "var(--colors-scrim-default)"
  },
  "colors.skeleton.default": {
    "value": "var(--colors-skeleton-default)",
    "variable": "var(--colors-skeleton-default)"
  },
  "colors.skeleton.subtle": {
    "value": "var(--colors-skeleton-subtle)",
    "variable": "var(--colors-skeleton-subtle)"
  },
  "colors.border.neutral.default": {
    "value": "var(--colors-border-neutral-default)",
    "variable": "var(--colors-border-neutral-default)"
  },
  "colors.border.neutral.subtle": {
    "value": "var(--colors-border-neutral-subtle)",
    "variable": "var(--colors-border-neutral-subtle)"
  },
  "colors.border.neutral.disabled": {
    "value": "var(--colors-border-neutral-disabled)",
    "variable": "var(--colors-border-neutral-disabled)"
  },
  "colors.border.neuroidPrimary.default": {
    "value": "var(--colors-border-neuroid-primary-default)",
    "variable": "var(--colors-border-neuroid-primary-default)"
  },
  "colors.border.danger.default": {
    "value": "var(--colors-border-danger-default)",
    "variable": "var(--colors-border-danger-default)"
  },
  "colors.border.warning.default": {
    "value": "var(--colors-border-warning-default)",
    "variable": "var(--colors-border-warning-default)"
  },
  "colors.border.success.default": {
    "value": "var(--colors-border-success-default)",
    "variable": "var(--colors-border-success-default)"
  },
  "colors.border.informative.default": {
    "value": "var(--colors-border-informative-default)",
    "variable": "var(--colors-border-informative-default)"
  },
  "colors.border.zoltarinaPrimary.default": {
    "value": "var(--colors-border-zoltarina-primary-default)",
    "variable": "var(--colors-border-zoltarina-primary-default)"
  },
  "colors.border.heydPrimary.default": {
    "value": "var(--colors-border-heyd-primary-default)",
    "variable": "var(--colors-border-heyd-primary-default)"
  },
  "colors.border.heybeePrimary.default": {
    "value": "var(--colors-border-heybee-primary-default)",
    "variable": "var(--colors-border-heybee-primary-default)"
  },
  "shadows.raised": {
    "value": "0px 1px 3px 0px var(--colors-shadow-raised)",
    "variable": "var(--shadows-raised)"
  },
  "shadows.overlay": {
    "value": "0px 20px 25px -5px var(--colors-shadow-overlay)",
    "variable": "var(--shadows-overlay)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-30": {
    "value": "calc(var(--spacing-30) * -1)",
    "variable": "var(--spacing-30)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-98": {
    "value": "calc(var(--spacing-98) * -1)",
    "variable": "var(--spacing-98)"
  },
  "spacing.-128": {
    "value": "calc(var(--spacing-128) * -1)",
    "variable": "var(--spacing-128)"
  },
  "spacing.-160": {
    "value": "calc(var(--spacing-160) * -1)",
    "variable": "var(--spacing-160)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--spacing-4\\.5) * -1)",
    "variable": "var(--spacing-4\\.5)"
  },
  "colors.colorPalette.0": {
    "value": "var(--colors-color-palette-0)",
    "variable": "var(--colors-color-palette-0)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.1000": {
    "value": "var(--colors-color-palette-1000)",
    "variable": "var(--colors-color-palette-1000)"
  },
  "colors.colorPalette.1050": {
    "value": "var(--colors-color-palette-1050)",
    "variable": "var(--colors-color-palette-1050)"
  },
  "colors.colorPalette.1100": {
    "value": "var(--colors-color-palette-1100)",
    "variable": "var(--colors-color-palette-1100)"
  },
  "colors.colorPalette.1200": {
    "value": "var(--colors-color-palette-1200)",
    "variable": "var(--colors-color-palette-1200)"
  },
  "colors.colorPalette.700A": {
    "value": "var(--colors-color-palette-700-a)",
    "variable": "var(--colors-color-palette-700-a)"
  },
  "colors.colorPalette.600A": {
    "value": "var(--colors-color-palette-600-a)",
    "variable": "var(--colors-color-palette-600-a)"
  },
  "colors.colorPalette.500A": {
    "value": "var(--colors-color-palette-500-a)",
    "variable": "var(--colors-color-palette-500-a)"
  },
  "colors.colorPalette.400A": {
    "value": "var(--colors-color-palette-400-a)",
    "variable": "var(--colors-color-palette-400-a)"
  },
  "colors.colorPalette.300A": {
    "value": "var(--colors-color-palette-300-a)",
    "variable": "var(--colors-color-palette-300-a)"
  },
  "colors.colorPalette.200A": {
    "value": "var(--colors-color-palette-200-a)",
    "variable": "var(--colors-color-palette-200-a)"
  },
  "colors.colorPalette.100A": {
    "value": "var(--colors-color-palette-100-a)",
    "variable": "var(--colors-color-palette-100-a)"
  },
  "colors.colorPalette.neutral.bold": {
    "value": "var(--colors-color-palette-neutral-bold)",
    "variable": "var(--colors-color-palette-neutral-bold)"
  },
  "colors.colorPalette.bold": {
    "value": "var(--colors-color-palette-bold)",
    "variable": "var(--colors-color-palette-bold)"
  },
  "colors.colorPalette.neutral.default": {
    "value": "var(--colors-color-palette-neutral-default)",
    "variable": "var(--colors-color-palette-neutral-default)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.neutral.subtle": {
    "value": "var(--colors-color-palette-neutral-subtle)",
    "variable": "var(--colors-color-palette-neutral-subtle)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.neutral.subtlest": {
    "value": "var(--colors-color-palette-neutral-subtlest)",
    "variable": "var(--colors-color-palette-neutral-subtlest)"
  },
  "colors.colorPalette.subtlest": {
    "value": "var(--colors-color-palette-subtlest)",
    "variable": "var(--colors-color-palette-subtlest)"
  },
  "colors.colorPalette.neutral.disabled": {
    "value": "var(--colors-color-palette-neutral-disabled)",
    "variable": "var(--colors-color-palette-neutral-disabled)"
  },
  "colors.colorPalette.disabled": {
    "value": "var(--colors-color-palette-disabled)",
    "variable": "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.neutral.default_inverse": {
    "value": "var(--colors-color-palette-neutral-default_inverse)",
    "variable": "var(--colors-color-palette-neutral-default_inverse)"
  },
  "colors.colorPalette.default_inverse": {
    "value": "var(--colors-color-palette-default_inverse)",
    "variable": "var(--colors-color-palette-default_inverse)"
  },
  "colors.colorPalette.neuroidPrimary.default": {
    "value": "var(--colors-color-palette-neuroid-primary-default)",
    "variable": "var(--colors-color-palette-neuroid-primary-default)"
  },
  "colors.colorPalette.neuroidPrimary.default_inverse": {
    "value": "var(--colors-color-palette-neuroid-primary-default_inverse)",
    "variable": "var(--colors-color-palette-neuroid-primary-default_inverse)"
  },
  "colors.colorPalette.danger.default": {
    "value": "var(--colors-color-palette-danger-default)",
    "variable": "var(--colors-color-palette-danger-default)"
  },
  "colors.colorPalette.warning.default": {
    "value": "var(--colors-color-palette-warning-default)",
    "variable": "var(--colors-color-palette-warning-default)"
  },
  "colors.colorPalette.success.default": {
    "value": "var(--colors-color-palette-success-default)",
    "variable": "var(--colors-color-palette-success-default)"
  },
  "colors.colorPalette.informative.default": {
    "value": "var(--colors-color-palette-informative-default)",
    "variable": "var(--colors-color-palette-informative-default)"
  },
  "colors.colorPalette.zoltarinaPrimary.default": {
    "value": "var(--colors-color-palette-zoltarina-primary-default)",
    "variable": "var(--colors-color-palette-zoltarina-primary-default)"
  },
  "colors.colorPalette.zoltarinaPrimary.default_inverse": {
    "value": "var(--colors-color-palette-zoltarina-primary-default_inverse)",
    "variable": "var(--colors-color-palette-zoltarina-primary-default_inverse)"
  },
  "colors.colorPalette.heydPrimary.default": {
    "value": "var(--colors-color-palette-heyd-primary-default)",
    "variable": "var(--colors-color-palette-heyd-primary-default)"
  },
  "colors.colorPalette.heydPrimary.default_inverse": {
    "value": "var(--colors-color-palette-heyd-primary-default_inverse)",
    "variable": "var(--colors-color-palette-heyd-primary-default_inverse)"
  },
  "colors.colorPalette.static.white.bold": {
    "value": "var(--colors-color-palette-static-white-bold)",
    "variable": "var(--colors-color-palette-static-white-bold)"
  },
  "colors.colorPalette.white.bold": {
    "value": "var(--colors-color-palette-white-bold)",
    "variable": "var(--colors-color-palette-white-bold)"
  },
  "colors.colorPalette.static.white.default": {
    "value": "var(--colors-color-palette-static-white-default)",
    "variable": "var(--colors-color-palette-static-white-default)"
  },
  "colors.colorPalette.white.default": {
    "value": "var(--colors-color-palette-white-default)",
    "variable": "var(--colors-color-palette-white-default)"
  },
  "colors.colorPalette.static.white.subtle": {
    "value": "var(--colors-color-palette-static-white-subtle)",
    "variable": "var(--colors-color-palette-static-white-subtle)"
  },
  "colors.colorPalette.white.subtle": {
    "value": "var(--colors-color-palette-white-subtle)",
    "variable": "var(--colors-color-palette-white-subtle)"
  },
  "colors.colorPalette.static.white.subtlest": {
    "value": "var(--colors-color-palette-static-white-subtlest)",
    "variable": "var(--colors-color-palette-static-white-subtlest)"
  },
  "colors.colorPalette.white.subtlest": {
    "value": "var(--colors-color-palette-white-subtlest)",
    "variable": "var(--colors-color-palette-white-subtlest)"
  },
  "colors.colorPalette.static.white.disabled": {
    "value": "var(--colors-color-palette-static-white-disabled)",
    "variable": "var(--colors-color-palette-static-white-disabled)"
  },
  "colors.colorPalette.white.disabled": {
    "value": "var(--colors-color-palette-white-disabled)",
    "variable": "var(--colors-color-palette-white-disabled)"
  },
  "colors.colorPalette.static.black.bold": {
    "value": "var(--colors-color-palette-static-black-bold)",
    "variable": "var(--colors-color-palette-static-black-bold)"
  },
  "colors.colorPalette.black.bold": {
    "value": "var(--colors-color-palette-black-bold)",
    "variable": "var(--colors-color-palette-black-bold)"
  },
  "colors.colorPalette.static.black.default": {
    "value": "var(--colors-color-palette-static-black-default)",
    "variable": "var(--colors-color-palette-static-black-default)"
  },
  "colors.colorPalette.black.default": {
    "value": "var(--colors-color-palette-black-default)",
    "variable": "var(--colors-color-palette-black-default)"
  },
  "colors.colorPalette.static.black.subtle": {
    "value": "var(--colors-color-palette-static-black-subtle)",
    "variable": "var(--colors-color-palette-static-black-subtle)"
  },
  "colors.colorPalette.black.subtle": {
    "value": "var(--colors-color-palette-black-subtle)",
    "variable": "var(--colors-color-palette-black-subtle)"
  },
  "colors.colorPalette.static.black.subtlest": {
    "value": "var(--colors-color-palette-static-black-subtlest)",
    "variable": "var(--colors-color-palette-static-black-subtlest)"
  },
  "colors.colorPalette.black.subtlest": {
    "value": "var(--colors-color-palette-black-subtlest)",
    "variable": "var(--colors-color-palette-black-subtlest)"
  },
  "colors.colorPalette.static.black.disabled": {
    "value": "var(--colors-color-palette-static-black-disabled)",
    "variable": "var(--colors-color-palette-static-black-disabled)"
  },
  "colors.colorPalette.black.disabled": {
    "value": "var(--colors-color-palette-black-disabled)",
    "variable": "var(--colors-color-palette-black-disabled)"
  },
  "colors.colorPalette.heybeePrimary.default": {
    "value": "var(--colors-color-palette-heybee-primary-default)",
    "variable": "var(--colors-color-palette-heybee-primary-default)"
  },
  "colors.colorPalette.heybeePrimary.default_inverse": {
    "value": "var(--colors-color-palette-heybee-primary-default_inverse)",
    "variable": "var(--colors-color-palette-heybee-primary-default_inverse)"
  },
  "colors.colorPalette.neutralInverse.bold": {
    "value": "var(--colors-color-palette-neutral-inverse-bold)",
    "variable": "var(--colors-color-palette-neutral-inverse-bold)"
  },
  "colors.colorPalette.neutralInverse.default": {
    "value": "var(--colors-color-palette-neutral-inverse-default)",
    "variable": "var(--colors-color-palette-neutral-inverse-default)"
  },
  "colors.colorPalette.neutralInverse.subtle": {
    "value": "var(--colors-color-palette-neutral-inverse-subtle)",
    "variable": "var(--colors-color-palette-neutral-inverse-subtle)"
  },
  "colors.colorPalette.neutralInverse.subtlest": {
    "value": "var(--colors-color-palette-neutral-inverse-subtlest)",
    "variable": "var(--colors-color-palette-neutral-inverse-subtlest)"
  },
  "colors.colorPalette.neutralInverse.disabled": {
    "value": "var(--colors-color-palette-neutral-inverse-disabled)",
    "variable": "var(--colors-color-palette-neutral-inverse-disabled)"
  },
  "colors.colorPalette.neutralInverse.default_inverse": {
    "value": "var(--colors-color-palette-neutral-inverse-default_inverse)",
    "variable": "var(--colors-color-palette-neutral-inverse-default_inverse)"
  },
  "colors.colorPalette.neutral.selected": {
    "value": "var(--colors-color-palette-neutral-selected)",
    "variable": "var(--colors-color-palette-neutral-selected)"
  },
  "colors.colorPalette.selected": {
    "value": "var(--colors-color-palette-selected)",
    "variable": "var(--colors-color-palette-selected)"
  },
  "colors.colorPalette.neuroidPrimary.selected": {
    "value": "var(--colors-color-palette-neuroid-primary-selected)",
    "variable": "var(--colors-color-palette-neuroid-primary-selected)"
  },
  "colors.colorPalette.neuroidSecondary.default": {
    "value": "var(--colors-color-palette-neuroid-secondary-default)",
    "variable": "var(--colors-color-palette-neuroid-secondary-default)"
  },
  "colors.colorPalette.neuroidSecondary.selected": {
    "value": "var(--colors-color-palette-neuroid-secondary-selected)",
    "variable": "var(--colors-color-palette-neuroid-secondary-selected)"
  },
  "colors.colorPalette.danger.selected": {
    "value": "var(--colors-color-palette-danger-selected)",
    "variable": "var(--colors-color-palette-danger-selected)"
  },
  "colors.colorPalette.warning.selected": {
    "value": "var(--colors-color-palette-warning-selected)",
    "variable": "var(--colors-color-palette-warning-selected)"
  },
  "colors.colorPalette.success.selected": {
    "value": "var(--colors-color-palette-success-selected)",
    "variable": "var(--colors-color-palette-success-selected)"
  },
  "colors.colorPalette.informative.selected": {
    "value": "var(--colors-color-palette-informative-selected)",
    "variable": "var(--colors-color-palette-informative-selected)"
  },
  "colors.colorPalette.zoltarinaPrimary.selected": {
    "value": "var(--colors-color-palette-zoltarina-primary-selected)",
    "variable": "var(--colors-color-palette-zoltarina-primary-selected)"
  },
  "colors.colorPalette.zoltarinaSecondary.default": {
    "value": "var(--colors-color-palette-zoltarina-secondary-default)",
    "variable": "var(--colors-color-palette-zoltarina-secondary-default)"
  },
  "colors.colorPalette.zoltarinaSecondary.selected": {
    "value": "var(--colors-color-palette-zoltarina-secondary-selected)",
    "variable": "var(--colors-color-palette-zoltarina-secondary-selected)"
  },
  "colors.colorPalette.heydPrimary.selected": {
    "value": "var(--colors-color-palette-heyd-primary-selected)",
    "variable": "var(--colors-color-palette-heyd-primary-selected)"
  },
  "colors.colorPalette.heydSecondary.default": {
    "value": "var(--colors-color-palette-heyd-secondary-default)",
    "variable": "var(--colors-color-palette-heyd-secondary-default)"
  },
  "colors.colorPalette.heydSecondary.selected": {
    "value": "var(--colors-color-palette-heyd-secondary-selected)",
    "variable": "var(--colors-color-palette-heyd-secondary-selected)"
  },
  "colors.colorPalette.static.whiteAlpha.bold": {
    "value": "var(--colors-color-palette-static-white-alpha-bold)",
    "variable": "var(--colors-color-palette-static-white-alpha-bold)"
  },
  "colors.colorPalette.whiteAlpha.bold": {
    "value": "var(--colors-color-palette-white-alpha-bold)",
    "variable": "var(--colors-color-palette-white-alpha-bold)"
  },
  "colors.colorPalette.static.whiteAlpha.default": {
    "value": "var(--colors-color-palette-static-white-alpha-default)",
    "variable": "var(--colors-color-palette-static-white-alpha-default)"
  },
  "colors.colorPalette.whiteAlpha.default": {
    "value": "var(--colors-color-palette-white-alpha-default)",
    "variable": "var(--colors-color-palette-white-alpha-default)"
  },
  "colors.colorPalette.static.whiteAlpha.selected": {
    "value": "var(--colors-color-palette-static-white-alpha-selected)",
    "variable": "var(--colors-color-palette-static-white-alpha-selected)"
  },
  "colors.colorPalette.whiteAlpha.selected": {
    "value": "var(--colors-color-palette-white-alpha-selected)",
    "variable": "var(--colors-color-palette-white-alpha-selected)"
  },
  "colors.colorPalette.static.whiteAlpha.disabled": {
    "value": "var(--colors-color-palette-static-white-alpha-disabled)",
    "variable": "var(--colors-color-palette-static-white-alpha-disabled)"
  },
  "colors.colorPalette.whiteAlpha.disabled": {
    "value": "var(--colors-color-palette-white-alpha-disabled)",
    "variable": "var(--colors-color-palette-white-alpha-disabled)"
  },
  "colors.colorPalette.static.blackAlpha.bold": {
    "value": "var(--colors-color-palette-static-black-alpha-bold)",
    "variable": "var(--colors-color-palette-static-black-alpha-bold)"
  },
  "colors.colorPalette.blackAlpha.bold": {
    "value": "var(--colors-color-palette-black-alpha-bold)",
    "variable": "var(--colors-color-palette-black-alpha-bold)"
  },
  "colors.colorPalette.static.blackAlpha.default": {
    "value": "var(--colors-color-palette-static-black-alpha-default)",
    "variable": "var(--colors-color-palette-static-black-alpha-default)"
  },
  "colors.colorPalette.blackAlpha.default": {
    "value": "var(--colors-color-palette-black-alpha-default)",
    "variable": "var(--colors-color-palette-black-alpha-default)"
  },
  "colors.colorPalette.static.blackAlpha.selected": {
    "value": "var(--colors-color-palette-static-black-alpha-selected)",
    "variable": "var(--colors-color-palette-static-black-alpha-selected)"
  },
  "colors.colorPalette.blackAlpha.selected": {
    "value": "var(--colors-color-palette-black-alpha-selected)",
    "variable": "var(--colors-color-palette-black-alpha-selected)"
  },
  "colors.colorPalette.static.blackAlpha.disabled": {
    "value": "var(--colors-color-palette-static-black-alpha-disabled)",
    "variable": "var(--colors-color-palette-static-black-alpha-disabled)"
  },
  "colors.colorPalette.blackAlpha.disabled": {
    "value": "var(--colors-color-palette-black-alpha-disabled)",
    "variable": "var(--colors-color-palette-black-alpha-disabled)"
  },
  "colors.colorPalette.heybeePrimary.selected": {
    "value": "var(--colors-color-palette-heybee-primary-selected)",
    "variable": "var(--colors-color-palette-heybee-primary-selected)"
  },
  "colors.colorPalette.neutralInverse.selected": {
    "value": "var(--colors-color-palette-neutral-inverse-selected)",
    "variable": "var(--colors-color-palette-neutral-inverse-selected)"
  },
  "colors.colorPalette.base": {
    "value": "var(--colors-color-palette-base)",
    "variable": "var(--colors-color-palette-base)"
  },
  "colors.colorPalette.layer_1": {
    "value": "var(--colors-color-palette-layer_1)",
    "variable": "var(--colors-color-palette-layer_1)"
  },
  "colors.colorPalette.layer_2": {
    "value": "var(--colors-color-palette-layer_2)",
    "variable": "var(--colors-color-palette-layer_2)"
  },
  "colors.colorPalette.overlay": {
    "value": "var(--colors-color-palette-overlay)",
    "variable": "var(--colors-color-palette-overlay)"
  },
  "colors.colorPalette.raised": {
    "value": "var(--colors-color-palette-raised)",
    "variable": "var(--colors-color-palette-raised)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar