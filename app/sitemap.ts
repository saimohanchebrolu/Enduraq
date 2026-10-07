import { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";

// Required for static export (Cloudflare Pages)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/sitemap",
  ].map((route) => ({
    url: `${site.website}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.website}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${site.website}/solutions/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes];
}
