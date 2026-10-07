export type Solution = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  image: string;
  overview: string;
  outcomes: string[];
  stack: string[];
};

export const solutions: Solution[] = [
  {
    slug: "windows-11-transformation",
    icon: "Monitor",
    title: "Windows 11 Transformation",
    short: "Move your fleet to Windows 11 with a structured, low-disruption plan.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1600&auto=format&fit=crop",
    overview:
      "A complete path from readiness assessment through phased deployment, covering hardware compatibility, application testing and zero-touch provisioning with Autopilot.",
    outcomes: ["Standardized OS baseline", "Reduced compatibility incidents", "Faster device provisioning"],
    stack: ["Windows 11", "Autopilot", "Microsoft Intune"],
  },
  {
    slug: "modern-endpoint-management",
    icon: "Laptop",
    title: "Modern Endpoint Management",
    short: "Unified, cloud-based management across your entire device fleet.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Consolidate device management under Intune with consistent policy, compliance and application deployment across Windows, mobile and hybrid environments.",
    outcomes: ["Single management plane", "Consistent compliance enforcement", "Lower management overhead"],
    stack: ["Microsoft Intune", "Entra ID", "Microsoft Graph"],
  },
  {
    slug: "zero-trust-security",
    icon: "ShieldCheck",
    title: "Zero Trust Security",
    short: "Verify explicitly, use least privilege, and assume breach.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Design and implement a Zero Trust architecture across identity, endpoints and data using conditional access, device compliance and continuous verification.",
    outcomes: ["Reduced attack surface", "Stronger identity controls", "Improved breach containment"],
    stack: ["Entra ID", "Conditional Access", "Microsoft Defender"],
  },
  {
    slug: "cloud-migration",
    icon: "Cloud",
    title: "Cloud Migration",
    short: "Move workloads and identity from on-premises to the cloud.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Plan and execute migration of directory services, email and file storage from on-premises infrastructure to Microsoft 365 and Azure, with minimal downtime.",
    outcomes: ["Reduced on-premises footprint", "Improved resilience", "Lower infrastructure costs"],
    stack: ["Azure AD Connect", "Exchange Online", "Azure"],
  },
  {
    slug: "microsoft-365-optimization",
    icon: "Mail",
    title: "Microsoft 365 Optimization",
    short: "Get full value from the Microsoft 365 licenses you already own.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Review licensing, governance and adoption across Teams, SharePoint and OneDrive to eliminate waste and improve collaboration outcomes.",
    outcomes: ["Optimized license spend", "Improved collaboration governance", "Higher feature adoption"],
    stack: ["Teams", "SharePoint", "OneDrive"],
  },
  {
    slug: "azure-virtual-desktop",
    icon: "MonitorSmartphone",
    title: "Azure Virtual Desktop",
    short: "Deliver secure, scalable virtual desktops from Azure.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Design and deploy AVD host pools, session hosts and FSLogix profile management for a consistent, high-performance remote desktop experience.",
    outcomes: ["Scalable remote access", "Consistent user experience", "Centralized cost control"],
    stack: ["Azure Virtual Desktop", "FSLogix", "Entra ID"],
  },
  {
    slug: "intune-transformation",
    icon: "Smartphone",
    title: "Intune Transformation",
    short: "Migrate from legacy MDM or Configuration Manager to Intune.",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1600&auto=format&fit=crop",
    overview:
      "A structured migration path from SCCM or third-party MDM to Intune, including co-management, policy translation and phased cutover.",
    outcomes: ["Modern cloud-based management", "Reduced on-premises infrastructure", "Simplified administration"],
    stack: ["Microsoft Intune", "Configuration Manager", "Co-management"],
  },
  {
    slug: "identity-modernization",
    icon: "KeyRound",
    title: "Identity Modernization",
    short: "Move to a modern, cloud-first identity architecture.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Transition from legacy Active Directory-only identity to a hybrid or cloud-native Entra ID model with modern authentication and governance.",
    outcomes: ["Modern authentication", "Simplified identity governance", "Reduced legacy dependency"],
    stack: ["Microsoft Entra ID", "Azure AD Connect", "PIM"],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
