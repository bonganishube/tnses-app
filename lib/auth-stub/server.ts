import { NextResponse } from "next/server";

// Temporary stand-in for `@clerk/nextjs/server` so the app runs without Clerk
// credentials. Aliased in next.config.js. Delete that alias to restore Clerk.

export const DEV_USER_ID = process.env.NEXT_PUBLIC_TEACHER_ID || "dev-user";

export const auth = async () => ({
    userId: DEV_USER_ID,
    sessionId: "dev-session",
    getToken: async () => null,
    redirectToSignIn: () => NextResponse.next(),
});

export const currentUser = async () => ({
    id: DEV_USER_ID,
    firstName: "Dev",
    lastName: "User",
    fullName: "Dev User",
    emailAddresses: [{ emailAddress: "dev@example.com" }],
    primaryEmailAddress: { emailAddress: "dev@example.com" },
    imageUrl: "",
});

export const clerkMiddleware = (..._args: any[]) => () => NextResponse.next();

export const createRouteMatcher = (..._args: any[]) => () => false;

export const clerkClient = async () => ({
    users: {
        getUser: async () => currentUser(),
    },
});
