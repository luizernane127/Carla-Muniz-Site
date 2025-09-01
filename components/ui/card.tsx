import * as React from "react";
export function Card({ className, children, ...props }: any) { return <div className={`card ${className||""}`} {...props}>{children}</div>; }
export function CardHeader({ className, children, ...props }: any) { return <div className={`px-5 pt-5 ${className||""}`} {...props}>{children}</div>; }
export function CardTitle({ className, children, ...props }: any) { return <div className={`text-lg font-semibold ${className||""}`} {...props}>{children}</div>; }
export function CardContent({ className, children, ...props }: any) { return <div className={`px-5 pb-5 ${className||""}`} {...props}>{children}</div>; }
