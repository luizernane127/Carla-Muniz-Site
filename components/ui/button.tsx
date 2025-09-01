import * as React from "react";
export function Button({ asChild, variant, className, children, ...props }: any) { const Comp: any = asChild ? 'a' : 'button'; const base = variant === "outline" ? "btn-outline" : "btn-primary"; return <Comp className={`${base} ${className||""}`} {...props}>{children}</Comp>; }
