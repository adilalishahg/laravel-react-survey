import React from "react";
import { Link } from "react-router-dom";

const TButton = ({
    color = "indigo",
    to = "",
    circle = false,
    href = "",
    link = false,
    target = "_blank",
    onClick = () => {},
    children,
}) => {
    let classes = [
        "flex",
        "items-center",
        "whitespace-nowrap",
        "text-sm",
        "border",
        "border-2",
        "border-transparent",
    ];
    if (link) {
        classes = [...classes, "transition-colors"];

        switch (color) {
            case "indigo":
                classes = [
                    ...classes,
                    "text-indigo-500",
                    "focus:border-indigo-500",
                ];
                break;
            case "red":
                classes = [...classes, "text-red-500", "focus:border-red-500"];
                break;
        }
    } else {
        classes = [
            ...classes,
            "text-white",
            "focus:ring-2",
            "focus:ring-offset-2",
        ];
        switch (color) {
            case "indigo":
                classes = [
                    ...classes,
                    "text-indigo-600",
                    "focus:bg-indigo-600",
                    "focus:ring-indigo-400",
                ];
                break;
            case "red":
                classes = [
                    ...classes,
                    "text-red-600",
                    "focus:bg-red-600",
                    "focus:ring-red-400",
                ];
                break;
            case "green":
                classes = [
                    ...classes,
                    "text-emerald-600",
                    "focus:bg-emerald-600",
                    "focus:ring-emerald-400",
                ];
                break;
        }
        if (circle) {
            classes = [
                ...classes,
                "rounded-full",
                "h-8",
                "w-8",
                "items-center",
                "justify-center",
                "rounded-full",
                "text-sm",
            ];
        } else {
            classes = [...classes, "p-0", "py-2", "px-4", "rounded-md"];
        }
    }
    return (
        <>
            {href && (
                <a href="{href}" target={target} className={classes.join(" ")}>
                    {children}
                </a>
            )}
            {to && (
                <Link to={to} className={classes.join(" ")}>
                    {children}
                </Link>
            )}
            {!to && !href && (
                <button className={classes.join(" ")}>{children}</button>
            )}
        </>
    );
};

export default TButton;
