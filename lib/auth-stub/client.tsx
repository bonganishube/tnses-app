"use client";

import React from "react";

// Temporary stand-in for `@clerk/nextjs` so the app runs without Clerk
// credentials. Aliased in next.config.js — delete that alias to restore Clerk.

const DEV_USER_ID = process.env.NEXT_PUBLIC_TEACHER_ID || "dev-user";

const DEV_USER = {
    id: DEV_USER_ID,
    firstName: "Dev",
    lastName: "User",
    fullName: "Dev User",
    primaryEmailAddress: { emailAddress: "dev@example.com" },
    imageUrl: "",
};

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
);

export const useAuth = () => ({
    userId: DEV_USER_ID,
    sessionId: "dev-session",
    isLoaded: true,
    isSignedIn: true,
    signOut: async () => {},
    getToken: async () => null,
});

export const useUser = () => ({
    isLoaded: true,
    isSignedIn: true,
    user: DEV_USER,
});

export const useClerk = () => ({ signOut: async () => {}, user: DEV_USER });

export const SignedIn = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
);

export const SignedOut = (_props: { children?: React.ReactNode }) => null;

export const SignOutButton = ({ children }: { children?: React.ReactNode }) =>
    children ? <>{children}</> : <span>Sign out</span>;

export const SignInButton = ({ children }: { children?: React.ReactNode }) =>
    children ? <>{children}</> : <span>Sign in</span>;

export const UserButton = () => (
    <div
        title="Dev User"
        className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-medium text-slate-700"
    >
        DU
    </div>
);

const AuthPlaceholder = ({ label }: { label: string }) => (
    <div className="rounded-lg border bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="mt-1 text-xs text-slate-500">
            Authentication is disabled in this build.
        </p>
    </div>
);

export const SignIn = () => <AuthPlaceholder label="Sign in" />;
export const SignUp = () => <AuthPlaceholder label="Sign up" />;
export const UserProfile = () => <AuthPlaceholder label="Profile" />;
