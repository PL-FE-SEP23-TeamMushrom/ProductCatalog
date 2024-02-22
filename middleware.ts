import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/accessories",
    "/cart",
    "/favourites",
    "/phones",
    "/tablets",
  ],
  ignoredRoutes: ["/api"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
