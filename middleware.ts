import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: (req) =>
    !(
      req.url.includes("/cart") ||
      req.url.includes("/checkout") ||
      req.url.includes("/favorite")
    ),
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
