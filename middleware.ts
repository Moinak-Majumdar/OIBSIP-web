// hl3 without a matcher, the line bellow will apply next-auth to the entire app. 

export { default } from "next-auth/middleware"

// hl1 apply next-auth only matching route.

export const config = { matcher: ["/protected", '/users'] }