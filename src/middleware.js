export { default } from "next-auth/middleware"

export const config = { matcher: ["/", "/profile", "/admin", "/users/:path*"] }

// "/", "/profile", "/admin", "/users/:path*"