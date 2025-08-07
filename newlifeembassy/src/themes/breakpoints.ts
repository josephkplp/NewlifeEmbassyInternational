import type { Breakpoint, BreakpointsOptions } from "@mui/material";

export const breakpoints:BreakpointsOptions= {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
    keys: [],
    up: function (key: Breakpoint | number): string {
        throw new Error("Function not implemented.");
    },
    down: function (key: Breakpoint | number): string {
        throw new Error("Function not implemented.");
    },
    between: function (start: Breakpoint | number, end: Breakpoint | number): string {
        throw new Error("Function not implemented.");
    },
    only: function (key: Breakpoint): string {
        throw new Error("Function not implemented.");
    },
    not: function (key: Breakpoint): string {
        throw new Error("Function not implemented.");
    }
}
