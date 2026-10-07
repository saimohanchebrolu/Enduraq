export type Service = {
  slug: string;
  category:
    | "Endpoint"
    | "Security"
    | "Identity"
    | "Microsoft 365"
    | "Automation"
    | "AI Solutions"
    | "Web & Digital";
  icon: string; // lucide-react icon name
  title: string;
  short: string;
  image: string;
  challenges: string[];
  capabilities: string[];
  scope: string[];
  deliverables?: string[];
  prerequisites: string[];
  methodology: { step: string; detail: string }[];
  stack: string[];
  outcomes: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "endpoint-modernization",
    category: "Endpoint",
    icon: "Monitor",
    title: "Endpoint Modernization",
    short: "Windows 11 upgrade, device modernization and lifecycle management.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Windows 10 devices beyond standard support, without a completed Windows 11 migration or an active Extended Security Updates plan",
      "Devices that do not meet Windows 11 hardware requirements and need a refresh or transition plan",
      "Application compatibility and business-critical workflows that make upgrades difficult to schedule",
      "Inconsistent enrollment, provisioning and policy across cloud-managed, co-managed and remote devices",
      "Limited visibility into device readiness, update compliance and rollout progress",
    ],
    capabilities: [
      "Windows 11 readiness assessment and hardware compatibility review",
      "Autopilot-based zero-touch provisioning",
      "Device lifecycle and refresh planning",
      "Application compatibility testing",
    ],
    scope: [
      "Intune tenant baseline and role-based access control (RBAC) design",
      "Enrollment: Windows Autopilot, co-management and BYOD",
      "Configuration profiles and Settings Catalog",
      "Compliance policies linked to Conditional Access",
      "Update rings, feature updates and Windows Autopatch",
      "Application configuration policies",
      "Certificates: SCEP/PKCS, Cloud PKI and Wi-Fi/VPN profiles",
      "Proactive remediations and Endpoint Analytics",
    ],
    deliverables: [
      "High-level and low-level design",
      "Policy workbook",
      "Pilot report",
      "Administrator runbook",
    ],
    prerequisites: [
      "A suitable Microsoft Intune license, such as Microsoft 365 Business Premium or an eligible Microsoft 365 E3/E5 plan",
      "Intune administrator access",
      "Microsoft Entra ID tenant",
      "Test devices for pilot validation",
    ],
    methodology: [
      { step: "Discover", detail: "Review the tenant, devices, requirements and current management setup." },
      { step: "Design", detail: "Document the target configuration, policies and rollout approach." },
      { step: "Build in pilot", detail: "Configure the solution and policies for a controlled pilot group." },
      { step: "Validate", detail: "Test enrollment, configuration, compliance, applications and updates." },
      { step: "Phased rollout", detail: "Deploy to broader groups in planned waves and monitor progress." },
      { step: "Handover", detail: "Deliver the runbook, design documents and operational guidance." },
    ],
    stack: ["Windows 11", "Microsoft Intune", "Autopilot", "Microsoft Graph"],
    outcomes: [
      "Standardized, current device fleet",
      "Faster provisioning of new hardware",
      "Reduced help desk tickets from legacy issues",
    ],
    faq: [
      {
        q: "How long does a Windows 11 rollout take?",
        a: "Timelines vary by fleet size and application complexity; most mid-size environments complete a phased rollout within one to two quarters.",
      },
      {
        q: "Do you support hybrid or fully cloud-managed devices?",
        a: "Yes. We design provisioning for hybrid Azure AD-joined, Entra-joined, and co-managed configurations.",
      },
    ],
  },
  {
    slug: "intune-mdm",
    category: "Endpoint",
    icon: "Smartphone",
    title: "Intune & MDM",
    short: "Cloud-based device management with Microsoft Intune, Autopilot and MDM.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Manual device configuration and inconsistent policy enforcement",
      "Limited visibility into compliance state",
      "Difficulty supporting remote and BYOD users",
    ],
    capabilities: [
      "Intune tenant design and configuration profiles",
      "Compliance and conditional access policy alignment",
      "Mobile application management (MAM) for BYOD",
      "Co-management strategy for hybrid environments",
    ],
    scope: [
      "Review of the Intune tenant, device estate and current management tools",
      "Enrollment and device management design for Windows and supported mobile platforms",
      "Configuration profiles, Settings Catalog and security baselines",
      "Compliance policies aligned with Conditional Access",
      "Application deployment and mobile application management (MAM)",
      "Update policies, deployment rings and co-management planning",
      "Pilot validation, reporting and operational handover",
    ],
    prerequisites: [
      "Microsoft Intune licensing appropriate for the required capabilities",
      "Access to the Microsoft Intune and Entra ID administration portals",
      "Current user, device and application inventory",
      "Pilot devices and users representing the platforms in scope",
      "Existing enrollment, network and certificate requirements, where applicable",
    ],
    methodology: [
      { step: "Assess", detail: "Review current management tooling and policy gaps." },
      { step: "Design", detail: "Define profiles, compliance policies and app deployment model." },
      { step: "Pilot", detail: "Test against a pilot ring of devices and users." },
      { step: "Deploy", detail: "Migrate the full fleet with monitoring in place." },
    ],
    stack: ["Microsoft Intune", "Autopilot", "Entra ID", "Microsoft Graph"],
    outcomes: [
      "Consistent policy enforcement across all devices",
      "Improved compliance visibility",
      "Reduced manual IT overhead",
    ],
    faq: [
      {
        q: "Can Intune manage both Windows and mobile devices?",
        a: "Yes, Intune provides unified management across Windows, iOS, Android and macOS endpoints.",
      },
      {
        q: "Do you migrate from existing MDM/SCCM environments?",
        a: "We plan and execute migrations from legacy MDM or Configuration Manager environments to Intune, including co-management transition paths.",
      },
    ],
  },
  {
    slug: "endpoint-security",
    category: "Security",
    icon: "ShieldCheck",
    title: "Endpoint Security",
    short: "Defender for Endpoint, vulnerability management and compliance.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Limited endpoint threat visibility",
      "Inconsistent patching and vulnerability remediation",
      "Difficulty meeting compliance and audit requirements",
    ],
    capabilities: [
      "Microsoft Defender for Endpoint deployment and tuning",
      "Vulnerability management and patch orchestration",
      "Attack surface reduction policy design",
      "Security baseline and compliance reporting",
    ],
    scope: [
      "Review of endpoint security posture, Defender configuration and existing security tools",
      "Defender for Endpoint onboarding and configuration planning",
      "Endpoint detection and response (EDR) policy configuration",
      "Attack surface reduction rules and security baseline alignment",
      "Vulnerability prioritization and remediation workflow planning",
      "Alert triage, response process and security posture reporting",
    ],
    prerequisites: [
      "Eligible Microsoft Defender licensing and a Microsoft tenant",
      "Security administration access and agreed incident escalation contacts",
      "Endpoint inventory, operating system versions and current security tooling details",
      "Pilot endpoints and change windows for onboarding and policy validation",
      "Applicable security policies or compliance requirements",
    ],
    methodology: [
      { step: "Assess", detail: "Review current security posture and exposure." },
      { step: "Design", detail: "Define baselines, policies and response workflows." },
      { step: "Pilot", detail: "Validate detection and response on a pilot group." },
      { step: "Deploy", detail: "Roll out protection fleet-wide with ongoing tuning." },
    ],
    stack: ["Microsoft Defender", "Intune", "Microsoft Sentinel", "Entra ID"],
    outcomes: [
      "Improved endpoint threat detection and response time",
      "Higher patch compliance rates",
      "Clear audit-ready security reporting",
    ],
    faq: [
      {
        q: "Does this replace our existing antivirus?",
        a: "In most cases Microsoft Defender for Endpoint can consolidate and replace third-party antivirus, reducing agent sprawl.",
      },
      {
        q: "Can you help with compliance frameworks like ISO 27001?",
        a: "Yes, we align endpoint security baselines with common compliance frameworks as part of the engagement.",
      },
    ],
  },
  {
    slug: "identity-access",
    category: "Identity",
    icon: "Users",
    title: "Identity & Access",
    short: "Entra ID, conditional access, user management and SSO.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Weak or inconsistent access controls",
      "No conditional access strategy",
      "Fragmented identity across cloud and on-premises systems",
    ],
    capabilities: [
      "Entra ID architecture and hybrid identity design",
      "Conditional access policy design",
      "Single sign-on (SSO) for business applications",
      "Privileged identity management (PIM)",
    ],
    scope: [
      "Review of Entra ID tenant configuration, identities and authentication methods",
      "Multifactor authentication and Conditional Access policy design",
      "Single sign-on integration planning for agreed business applications",
      "Privileged Identity Management and administrative role review",
      "Hybrid identity and synchronization considerations, where applicable",
      "Identity lifecycle, access review and policy documentation",
    ],
    prerequisites: [
      "Entra ID tenant and appropriate identity administration access",
      "Current identity architecture, synchronization and authentication details",
      "Application owners and configuration contacts for SSO integrations",
      "Agreed test users and emergency access account procedures",
      "Applicable Entra ID licensing for requested features such as PIM",
    ],
    methodology: [
      { step: "Assess", detail: "Review identity architecture and access risk." },
      { step: "Design", detail: "Define conditional access and identity governance model." },
      { step: "Pilot", detail: "Test policies against a controlled user group." },
      { step: "Deploy", detail: "Enforce policies organization-wide with monitoring." },
    ],
    stack: ["Microsoft Entra ID", "Conditional Access", "PIM", "Microsoft Graph"],
    outcomes: [
      "Reduced identity-based risk",
      "Consistent access policy enforcement",
      "Simplified sign-on experience for users",
    ],
    faq: [
      {
        q: "Can you integrate our legacy applications with SSO?",
        a: "Most modern and many legacy applications can be integrated with Entra ID SSO through SAML, OIDC or application proxy.",
      },
      {
        q: "What is conditional access?",
        a: "Conditional access applies if-then policies to sign-ins, requiring conditions like device compliance or multi-factor authentication before granting access.",
      },
    ],
  },
  {
    slug: "microsoft-365",
    category: "Microsoft 365",
    icon: "Mail",
    title: "Microsoft 365",
    short: "Email, Teams, SharePoint, OneDrive and productivity solutions.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Underused Microsoft 365 licensing and features",
      "Inconsistent collaboration and file-sharing practices",
      "Migration complexity from legacy email or file servers",
    ],
    capabilities: [
      "Exchange Online migration and configuration",
      "Teams and SharePoint information architecture",
      "OneDrive and data governance setup",
      "License optimization and adoption planning",
    ],
    scope: [
      "Review of Microsoft 365 tenant, licensing, workloads and current usage",
      "Exchange Online configuration or migration planning",
      "Teams, SharePoint and OneDrive structure and governance design",
      "External sharing, retention and collaboration policy alignment",
      "License usage review and feature adoption recommendations",
      "Pilot, migration or rollout planning with user guidance",
    ],
    prerequisites: [
      "Microsoft 365 tenant and authorized administrator access",
      "Licensing details and inventory of users, mailboxes, sites and shared data",
      "Access to source systems for any agreed migration",
      "Verified domains and DNS administration access, where migration requires it",
      "Business owners, pilot users and agreed migration windows",
    ],
    methodology: [
      { step: "Assess", detail: "Review current usage, licensing and pain points." },
      { step: "Design", detail: "Plan information architecture and governance model." },
      { step: "Pilot", detail: "Validate with a pilot department or team." },
      { step: "Deploy", detail: "Roll out and drive adoption organization-wide." },
    ],
    stack: ["Exchange Online", "Teams", "SharePoint", "OneDrive"],
    outcomes: [
      "Higher utilization of licensed features",
      "Consistent collaboration governance",
      "Smoother migration with minimal downtime",
    ],
    faq: [
      {
        q: "Can you migrate us from on-premises Exchange?",
        a: "Yes, we plan and execute hybrid or cutover migrations from on-premises Exchange to Exchange Online.",
      },
      {
        q: "Do you help with user adoption, not just setup?",
        a: "Adoption planning, training materials and champion programs are part of our Microsoft 365 engagements.",
      },
    ],
  },
  {
    slug: "application-management",
    category: "Endpoint",
    icon: "LayoutGrid",
    title: "Application Management",
    short: "Application packaging, deployment and lifecycle management.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Inconsistent application packaging standards",
      "Manual deployment processes",
      "Lack of visibility into application lifecycle and versions",
    ],
    capabilities: [
      "Win32 and MSIX application packaging",
      "Automated deployment via Intune",
      "Application lifecycle and update management",
      "License and inventory tracking",
    ],
    scope: [
      "Application inventory and packaging requirements review",
      "Packaging and deployment design for agreed Win32, MSIX or Store applications",
      "Installation, detection, requirement and dependency configuration",
      "Deployment assignments, update rings and rollback planning",
      "Pilot testing and deployment validation",
      "Application catalog and lifecycle documentation",
    ],
    prerequisites: [
      "Application installers, vendor documentation and license information",
      "Intune or Configuration Manager access, depending on the deployment approach",
      "Application owners to confirm installation and acceptance requirements",
      "Test devices and representative user accounts",
      "Details of dependencies, upgrade paths and any applications requiring special handling",
    ],
    methodology: [
      { step: "Assess", detail: "Inventory applications and packaging requirements." },
      { step: "Design", detail: "Define packaging standards and deployment rings." },
      { step: "Pilot", detail: "Validate packages with a pilot user group." },
      { step: "Deploy", detail: "Deploy and monitor across the environment." },
    ],
    stack: ["Microsoft Intune", "MSIX", "Win32 App Packaging", "Microsoft Store for Business"],
    outcomes: [
      "Standardized, repeatable packaging process",
      "Faster application rollout",
      "Reduced application-related support tickets",
    ],
    faq: [
      {
        q: "Do you support line-of-business application packaging?",
        a: "Yes, including complex line-of-business applications with custom install logic and dependencies.",
      },
      {
        q: "How are application updates handled after deployment?",
        a: "We configure automated update rings so applications stay current without manual intervention.",
      },
    ],
  },
  {
    slug: "desktop-support",
    category: "Endpoint",
    icon: "Headphones",
    title: "Remote Desktop Support",
    short: "L1/L2/L3 support for endpoints and applications.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Long resolution times for endpoint issues",
      "No clear escalation path for complex problems",
      "Limited reporting on support trends",
    ],
    capabilities: [
      "Tiered L1/L2/L3 support model",
      "Remote troubleshooting and remediation",
      "Escalation management for complex incidents",
      "Support analytics and trend reporting",
    ],
    scope: [
      "Support coverage, service hours and endpoint scope definition",
      "Remote troubleshooting and agreed endpoint/application support",
      "Ticket triage, prioritization and escalation workflow alignment",
      "Knowledge base and repeatable resolution guidance",
      "Service trend reporting and continuous improvement reviews",
    ],
    prerequisites: [
      "Named service owner, user support contacts and escalation path",
      "Agreed service hours, priorities and response targets",
      "Approved remote support and ticketing tools with required access",
      "Endpoint, application and existing support-process documentation",
      "Security, privacy and user-consent requirements for remote assistance",
    ],
    methodology: [
      { step: "Assess", detail: "Review current support model and ticket trends." },
      { step: "Design", detail: "Define support tiers, SLAs and escalation paths." },
      { step: "Pilot", detail: "Run the model with a subset of users or sites." },
      { step: "Deploy", detail: "Scale support coverage across the organization." },
    ],
    stack: ["Microsoft Intune", "Remote Help", "Microsoft 365 Admin Center"],
    outcomes: [
      "Faster ticket resolution times",
      "Clearer escalation paths for complex issues",
      "Improved end-user satisfaction",
    ],
    faq: [
      {
        q: "Do you provide 24/7 support coverage?",
        a: "Support hours are scoped per engagement; extended and follow-the-sun coverage can be arranged.",
      },
      {
        q: "Can this integrate with our existing ticketing system?",
        a: "We work within your existing ITSM tooling wherever possible, or recommend a suitable platform if needed.",
      },
    ],
  },
  {
    slug: "automation",
    category: "Automation",
    icon: "BrainCircuit",
    title: "AI Chatbots & Automation",
    short: "Copilot Studio agents and AI workflows that help automate everyday business processes.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Repetitive manual IT administration tasks",
      "Inconsistent processes across teams",
      "Teams spending time answering recurring IT, HR and customer questions",
      "Limited use of available automation and conversational AI tooling",
    ],
    capabilities: [
      "Copilot Studio agents designed around agreed business processes",
      "AI chatbots for IT, HR and customer frequently asked questions",
      "Power Automate workflows for forms, approvals and notifications",
      "Prompt libraries and reusable templates for team workflows",
      "PowerShell scripting and runbook development",
      "Microsoft Graph API integrations",
      "Automated reporting and alerting",
    ],
    scope: [
      "Discovery and prioritization of repetitive, rules-based IT processes",
      "Conversational agent and chatbot design for agreed IT, HR or customer use cases",
      "Knowledge source, access boundary and response escalation design for agents",
      "Power Automate flows for agreed forms, approvals and notifications",
      "Prompt library and reusable prompt template design for selected team workflows",
      "Automation design using PowerShell, Microsoft Graph or Power Automate as appropriate",
      "Access, permissions, approval and error-handling design",
      "Testing of representative questions, expected outputs and failure cases",
      "Human handoff, logging, monitoring and operational alerting",
      "Testing, deployment and documented support handover",
    ],
    prerequisites: [
      "Process owner and documented current workflow",
      "Defined chatbot or automation use case, intended users and success criteria",
      "Appropriate Microsoft 365, Power Platform or Copilot Studio licensing for selected features",
      "Approved knowledge sources and an owner responsible for keeping them current",
      "Appropriate tenant, API or platform access for the approved automation",
      "Approved service accounts, permissions and security constraints, where required",
      "Privacy, data classification and security requirements for information used by AI features",
      "Test environment or representative pilot questions and data for validation",
      "Operational owner to review and accept the runbook and alerts",
    ],
    methodology: [
      { step: "Assess", detail: "Identify high-value manual processes to automate." },
      { step: "Design", detail: "Design automation workflows and governance." },
      { step: "Pilot", detail: "Test automations in a controlled environment." },
      { step: "Deploy", detail: "Deploy with monitoring and documented handoff." },
    ],
    stack: [
      "Microsoft Copilot Studio",
      "Power Automate",
      "Microsoft 365",
      "PowerShell",
      "Microsoft Graph",
      "Azure Functions",
    ],
    outcomes: [
      "Reduced manual administrative effort",
      "Consistent, repeatable IT processes",
      "Faster responses to recurring questions with clear escalation paths",
      "More consistent forms, approvals and notifications",
      "Reusable prompt guidance for agreed team workflows",
      "Faster turnaround on routine requests",
    ],
    faq: [
      {
        q: "What kinds of tasks can be automated?",
        a: "Common examples include user onboarding/offboarding, license assignment, device compliance reporting and routine maintenance tasks.",
      },
      {
        q: "Do we need developers on staff to maintain automations?",
        a: "We document and hand off every automation with clear runbooks so your existing IT team can maintain it.",
      },
      {
        q: "Can an AI chatbot answer every question accurately?",
        a: "No. AI-generated answers can be incomplete or incorrect. We define approved knowledge sources, test representative questions and provide escalation or human review for cases the agent cannot handle confidently.",
      },
      {
        q: "Are Copilot Studio and Power Platform licenses included?",
        a: "Microsoft licensing and consumption costs are separate unless they are explicitly included in a written proposal. Required licensing depends on the selected features and usage.",
      },
    ],
  },
  {
    slug: "sccm-on-premises-support",
    category: "Endpoint",
    icon: "Server",
    title: "SCCM On-Premises Support",
    short: "Support and optimization for on-premises Microsoft Configuration Manager environments.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Configuration Manager infrastructure that is difficult to maintain",
      "Inconsistent application and operating system deployments",
      "Limited visibility into client health and deployment status",
    ],
    capabilities: [
      "Configuration Manager site and client health review",
      "Application and software update deployment support",
      "Task sequence and operating system deployment assistance",
      "Co-management planning alongside Microsoft Intune",
    ],
    scope: [
      "Review of Configuration Manager site health, hierarchy and client status",
      "Application deployment and software update workflow assessment",
      "Task sequence and operating system deployment review",
      "Boundary, distribution point and content distribution checks",
      "Co-management readiness and Intune integration planning",
      "Prioritized remediation and operational guidance",
    ],
    prerequisites: [
      "Authorized access to Configuration Manager and related infrastructure",
      "Site topology, product version and current architecture documentation",
      "Recent client health, deployment and update compliance reports",
      "Approved maintenance windows, change process and backup/recovery information",
      "Pilot devices and relevant application or deployment owners",
    ],
    methodology: [
      { step: "Assess", detail: "Review the Configuration Manager environment, client health and operational needs." },
      { step: "Plan", detail: "Prioritize improvements and define a support or modernization roadmap." },
      { step: "Pilot", detail: "Validate configuration and deployments with a controlled device group." },
      { step: "Improve", detail: "Apply agreed changes and document operational guidance." },
    ],
    stack: ["Microsoft Configuration Manager", "SCCM", "WSUS", "Microsoft Intune"],
    outcomes: [
      "More reliable Configuration Manager operations",
      "Improved visibility into deployments and client health",
      "A clearer path for ongoing on-premises or co-management needs",
    ],
    faq: [
      {
        q: "Can you support an existing SCCM environment?",
        a: "Yes. Support can begin with a review of the current Configuration Manager environment and be scoped around your operational priorities.",
      },
      {
        q: "Can SCCM and Intune be used together?",
        a: "Yes. We can help assess co-management options and plan a suitable transition based on your environment and requirements.",
      },
    ],
  },
  {
    slug: "kiosk-management",
    category: "Endpoint",
    icon: "Tablet",
    title: "Kiosk Management",
    short: "Configure and manage locked-down shared-use devices for focused business tasks.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Shared devices being used outside their intended purpose",
      "Inconsistent kiosk configuration across locations",
      "Manual setup and maintenance of single-purpose devices",
    ],
    capabilities: [
      "Kiosk mode and assigned access design for supported Windows devices",
      "Single-app and multi-app experience planning",
      "Configuration and policy deployment through Microsoft Intune",
      "Operational guidance for device enrollment, updates and recovery",
    ],
    scope: [
      "Kiosk use-case, user journey and device location assessment",
      "Single-app or restricted multi-app experience design",
      "Windows Assigned Access and supported device configuration",
      "Intune enrollment, configuration and security policy deployment",
      "Update, monitoring, recovery and reset process planning",
      "Pilot testing and administrator operating guidance",
    ],
    prerequisites: [
      "Supported Windows devices and suitable Intune licensing for the design",
      "Defined kiosk purpose, locations, users and approved applications",
      "Application licensing, sign-in and network requirements",
      "Administrator access and device enrollment method",
      "Pilot devices and agreed physical or remote test access",
    ],
    methodology: [
      { step: "Assess", detail: "Understand the device, user, application and location requirements." },
      { step: "Design", detail: "Define the restricted user experience and device configuration." },
      { step: "Pilot", detail: "Test usability, access controls and recovery with representative devices." },
      { step: "Deploy", detail: "Roll out the validated configuration and provide support guidance." },
    ],
    stack: ["Windows", "Microsoft Intune", "Assigned Access", "Microsoft Entra ID"],
    outcomes: [
      "Consistent, task-focused shared device experiences",
      "Reduced opportunities for unintended device use",
      "Simpler centralized configuration and maintenance",
    ],
    faq: [
      {
        q: "Can kiosks be configured for one or multiple applications?",
        a: "Yes. The kiosk experience can be designed for a single application or a restricted set of applications, depending on the device and operating system requirements.",
      },
      {
        q: "Can kiosk devices be managed remotely?",
        a: "Supported Windows kiosk devices can be enrolled and managed using Microsoft Intune, subject to the device and licensing configuration.",
      },
    ],
  },
  {
    slug: "windows-linux-patching",
    category: "Endpoint",
    icon: "RefreshCw",
    title: "Windows & Linux Patching",
    short: "Plan and improve operating system patching, deployment rings and compliance visibility.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Inconsistent patching schedules across Windows and Linux devices",
      "Limited reporting on update compliance and outstanding vulnerabilities",
      "Updates causing avoidable disruption to business-critical workloads",
    ],
    capabilities: [
      "Review of current patching tools, policies and operational processes",
      "Windows update ring and deployment planning",
      "Linux patching workflow and tooling alignment",
      "Compliance reporting, exception handling and maintenance window guidance",
    ],
    scope: [
      "Inventory of Windows and Linux platforms, versions and patch management tools",
      "Windows update rings, feature updates and deployment policy planning",
      "Linux repository, package update and maintenance workflow alignment",
      "Pilot groups, maintenance windows and staged rollout planning",
      "Patch compliance reporting, exception handling and remediation workflow",
      "Rollback and communication considerations for updates",
    ],
    prerequisites: [
      "Windows and Linux device/server inventory, including distributions and versions",
      "Administrator access to the agreed patch management platforms",
      "Maintenance windows, service owners and critical workload constraints",
      "Pilot devices or non-production workloads for update validation",
      "Backup, recovery and change-management procedures",
    ],
    methodology: [
      { step: "Assess", detail: "Inventory operating systems, patch tools, risk and maintenance requirements." },
      { step: "Design", detail: "Define deployment groups, maintenance windows and reporting needs." },
      { step: "Pilot", detail: "Validate updates with representative devices or workloads." },
      { step: "Operate", detail: "Roll out in planned waves and review compliance and exceptions." },
    ],
    stack: ["Windows Update", "Microsoft Intune", "Microsoft Configuration Manager", "Linux patch management tools"],
    outcomes: [
      "More predictable and repeatable patch cycles",
      "Clearer view of update compliance and exceptions",
      "Reduced risk from delayed operating system updates",
    ],
    faq: [
      {
        q: "Do you support patching for both Windows and Linux?",
        a: "Yes. We help plan Windows update management and align Linux patching workflows with your existing distributions, tools and operational requirements.",
      },
      {
        q: "Will updates be installed on all devices at once?",
        a: "A phased approach is recommended. Pilot groups, deployment rings and maintenance windows help validate updates before broader rollout.",
      },
    ],
  },
  {
    slug: "mobile-mac-management",
    category: "Endpoint",
    icon: "Laptop",
    title: "Mobile & Mac Management",
    short: "Manage Apple and mobile endpoints with enrollment, configuration and compliance policies.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Apple and mobile devices managed with inconsistent policies",
      "Difficulty balancing employee privacy with organizational controls",
      "Limited visibility into enrollment and device compliance",
    ],
    capabilities: [
      "Apple device enrollment and management planning",
      "macOS, iOS and iPadOS configuration and compliance policy guidance",
      "Application deployment and update workflow planning",
      "Alignment of device compliance with identity and access policies",
    ],
    scope: [
      "Review of Mac, iPhone and iPad inventory, ownership and enrollment status",
      "Apple Business Manager and automated enrollment planning, where available",
      "macOS, iOS and iPadOS configuration and compliance policy design",
      "Application deployment and update workflow planning",
      "Privacy-conscious controls for personally owned devices, where in scope",
      "Conditional Access alignment, pilot testing and support documentation",
    ],
    prerequisites: [
      "Microsoft Intune licensing and authorized Intune/Entra ID access",
      "Apple Business Manager access and device assignment details, where used",
      "Device inventory, ownership model and target enrollment approach",
      "Pilot devices and users for each platform in scope",
      "Application, certificate, Wi-Fi and VPN requirements, where applicable",
    ],
    methodology: [
      { step: "Assess", detail: "Review device ownership, enrollment, platforms and current management tools." },
      { step: "Design", detail: "Define appropriate profiles, compliance controls and user experience." },
      { step: "Pilot", detail: "Test enrollment, applications and policies with a representative group." },
      { step: "Deploy", detail: "Roll out in phases with user guidance and operational documentation." },
    ],
    stack: ["Microsoft Intune", "Apple Business Manager", "macOS", "iOS and iPadOS"],
    outcomes: [
      "More consistent management across Apple and mobile devices",
      "Improved compliance visibility and access alignment",
      "A clearer enrollment and support experience for users",
    ],
    faq: [
      {
        q: "Can Microsoft Intune manage Mac and mobile devices?",
        a: "Yes. Intune supports management for macOS, iOS and iPadOS devices, with available capabilities depending on enrollment method and platform.",
      },
      {
        q: "Can personally owned devices be supported?",
        a: "Personally owned device management can be scoped with privacy-conscious controls, such as app protection or appropriate enrollment options, based on platform and requirements.",
      },
    ],
  },
  {
    slug: "website-design-domain-hosting",
    category: "Web & Digital",
    icon: "Globe",
    title: "Website Design, Domain & Hosting",
    short: "Plan, design and launch a professional website with domain and hosting setup.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "No clear, professional website to explain your services",
      "Domain registration and hosting setup feel difficult to manage",
      "A website that is hard to update or does not work well on mobile",
    ],
    capabilities: [
      "Website planning, visual design and responsive implementation",
      "Domain name selection and registration assistance",
      "Hosting setup, DNS configuration and SSL enablement",
      "Launch checks and optional ongoing updates and maintenance",
    ],
    scope: [
      "Discovery of business goals, audience, content and website requirements",
      "Sitemap, page structure and visual design for review",
      "Responsive website implementation and agreed content integration",
      "Domain registration assistance and DNS configuration",
      "Hosting setup and SSL configuration",
      "Pre-launch checks, publishing and optional maintenance planning",
    ],
    prerequisites: [
      "Approved project goals, page list, content and brand assets",
      "A decision-maker available for design and content approvals",
      "Domain and hosting account access, or approval to help establish them",
      "Domain registration and hosting costs paid directly by the business",
      "Required legal, privacy and contact information for publication",
    ],
    methodology: [
      { step: "Discover", detail: "Clarify your goals, audience, content and preferred website features." },
      { step: "Design", detail: "Create a visual direction and page structure for your approval." },
      { step: "Build", detail: "Develop and review the responsive website with your content." },
      { step: "Launch", detail: "Connect the domain, configure hosting and verify the live website." },
    ],
    stack: ["Responsive Web Design", "Domain & DNS Setup", "Web Hosting", "SSL"],
    outcomes: [
      "A polished website that presents your business clearly",
      "A mobile-friendly experience across common screen sizes",
      "Domain and hosting configured for a smooth launch",
    ],
    faq: [
      {
        q: "Can you help us choose and register a domain?",
        a: "Yes. We can assist with domain selection and registration. The domain should be registered in your organization's name, with your organization retaining ownership and account access.",
      },
      {
        q: "Do you provide website hosting?",
        a: "We can help select and configure a hosting provider to suit the website. Hosting and domain provider charges are separate from design and implementation unless agreed otherwise.",
      },
    ],
  },
  {
    slug: "claude-ai-solutions",
    category: "AI Solutions",
    icon: "BrainCircuit",
    title: "Claude AI Solutions",
    short:
      "Design and integrate Claude-powered assistants and workflows around your business needs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    challenges: [
      "Teams want to use AI but need to identify safe, useful business applications first",
      "Manual knowledge and document workflows take time and are difficult to scale",
      "AI pilots can lack clear evaluation, access boundaries and human review",
      "Connecting AI to internal tools and data requires deliberate security and integration design",
    ],
    capabilities: [
      "Claude-powered assistants and agents for agreed business workflows",
      "Claude API integration with compatible applications and internal tools",
      "Model Context Protocol (MCP) integrations where supported and appropriate",
      "Structured outputs and document or data extraction pipelines",
      "Claude Code setup and developer workflow guidance",
      "Guardrails, context management, evaluations and human-in-the-loop design",
      "AI architecture reviews and solution design",
    ],
    scope: [
      "Discovery of business goals, users, workflows, data sources and success criteria",
      "Review of Claude product, API and integration requirements for the use case",
      "Solution architecture covering model access, application flow and approved data boundaries",
      "Assistant, agent or API workflow implementation for an agreed pilot",
      "MCP server and tool connection design where compatible with the chosen Claude client",
      "Structured output validation, testing and quality evaluation",
      "Safety controls, human review, monitoring and failure-handling design",
      "Documentation and handover for the agreed solution",
    ],
    deliverables: [
      "Use-case and requirements summary",
      "AI solution architecture",
      "Configured proof of concept or pilot",
      "Evaluation and guardrail guidance",
      "Technical handover documentation",
    ],
    prerequisites: [
      "A defined business use case, process owner and pilot success criteria",
      "An Anthropic account and Claude/API access appropriate to the selected solution",
      "Approved access to required applications, tools and data sources",
      "A review of data classification, privacy, security and applicable vendor terms",
      "A designated stakeholder to validate outputs and approve human-review steps",
      "Agreement on model usage, API charges, hosting and third-party service costs",
    ],
    methodology: [
      {
        step: "Discover",
        detail: "Understand the workflow, users, data, risks and measurable outcomes.",
      },
      {
        step: "Design",
        detail: "Define the Claude architecture, integrations, access boundaries and review controls.",
      },
      {
        step: "Pilot",
        detail: "Build a limited solution and test it against representative tasks and data.",
      },
      {
        step: "Evaluate",
        detail: "Review output quality, safety, failure cases and user feedback against agreed criteria.",
      },
      {
        step: "Handover",
        detail: "Document the solution, operating guidance and next steps for an approved rollout.",
      },
    ],
    stack: [
      "Claude",
      "Anthropic API",
      "Model Context Protocol (MCP)",
      "Claude Code",
      "Application integrations",
    ],
    outcomes: [
      "A clearly scoped AI use case aligned with business needs",
      "A tested pilot with documented limitations and evaluation criteria",
      "More controlled connections between Claude, approved tools and data",
      "Human review and operational guidance appropriate to the workflow",
    ],
    faq: [
      {
        q: "Do you provide certified Claude architecture?",
        a: "We provide AI solution discovery, design and implementation support. We do not claim Anthropic or Claude certification unless a specific, verifiable credential is agreed and documented.",
      },
      {
        q: "Can Claude connect to our internal tools and data?",
        a: "Potentially, depending on the application, integration method, access controls and your chosen Claude product. We assess the required permissions, data handling and technical compatibility before proposing an integration.",
      },
      {
        q: "Will AI-generated results be accurate every time?",
        a: "No. Model outputs can be incomplete or incorrect. We define evaluation and human-review steps for the use case and do not recommend relying on generated outputs without appropriate validation.",
      },
      {
        q: "Are Anthropic subscriptions, API usage and hosting included?",
        a: "Third-party subscriptions, API usage, hosting and related provider charges are separate unless a written proposal explicitly includes them.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
