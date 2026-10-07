import { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required for static export (Cloudflare Pages)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.website}/sitemap.xml`,
  };
}
