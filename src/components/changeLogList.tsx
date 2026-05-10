export const changelogList = [
    {
        version: "2.4.17",
        date: "10 May 2026",
        changes: {
            Adds: [
                "Enable Code Sync button hidden for users already enrolled in the beta",
            ],
        },
        skip: true,
    },
    {
        version: "2.4.16",
        date: "10 May 2026",
        changes: {
            Adds: [
                "Mocks as Code (Beta) — sync your mocks to a local folder as version-controlled JSON files, reviewable in PRs and editable in VS Code",
                "Push and pull mocks and headers between Mokku and your repo folder",
                "Smart push detects renames and deletions — no stale files left behind",
            ],
            Fixes: ["Improved border visibility in dark mode"],
        },
        skip: true,
    },
    {
        version: "2.4.15",
        date: "25 April 2026",
        skip: true,
        changes: {
            Adds: ["Update form"],
        },
    },
    {
        version: "2.4.14",
        date: "21 April 2026",
        skip: true,
        changes: {
            Adds: ["Update form"],
        },
    },
    {
        version: "2.4.13",
        date: "19 April 2026",
        skip: true,
        changes: {
            Adds: ["Update docs"],
        },
    },
    {
        version: "2.4.12",
        date: "19 April 2026",
        skip: true,
        changes: {
            Adds: ["Fix Survey form"],
        },
    },
    {
        version: "2.4.11",
        date: "18 April 2026",
        skip: true,
        changes: {
            Adds: ["Survey form"],
        },
    },
    {
        version: "2.4.10",
        date: "29 March 2026",
        changes: {
            Adds: [
                "Adds Request domain to header",
                "Improves Dynamic URL identifier",
                "Improves function executor",
            ],
        },
    },
    {
        version: "2.4.9",
        date: "16 March 2026",
        changes: {
            Fixes: [
                "Project navigation loop, when no project is added",
                "add add project option to mock and header form",
            ],
        },
        skip: true,
    },
    {
        version: "2.4.7",
        date: "1 February 2026",
        changes: {
            Adds: [
                "Reduce spacing in forms",
                "Improve log listing/mocking performance",
                "Add Docs",
                "Refresh the Panel with page refresh, mimics the current network tab behavior",
            ],
            Fixes: [
                "Create and Edit Mock from log details view, it used to open blank form",
                "Open log details after searching in logs, it used to open the log from unfiltered list",
                "Navigation in Panel tabs",
                "Prevent from GraphQL mocking matching as REST mock",
            ],
        },
    },
    {
        version: "2.4.6",
        date: "23 January 2026",
        skip: true,
        changes: {
            Adds: [
                "Rate Mokku dialog, appears once per user, after 3 mocks are created",
            ],
            Fixes: ["Dynamic mock update fix"],
        },
    },
    {
        version: "2.4.5",
        date: "14 January 2026",
        skip: true,
        changes: {
            Fixes: ["Cache issue with data"],
        },
    },
    {
        version: "2.4.3",
        date: "8 January 2026",
        changes: {
            Adds: ["Added duplicate button for mocks and headers"],
            Fixes: ["Remove cache after using it for mocks and headers"],
        },
    },
    {
        version: "2.4.2",
        date: "30 December 2025",
        changes: {
            Adds: [
                "Added create project screen if there are no projects available",
            ],
        },
    },
    {
        version: "2.4.1",
        date: "29 December 2025",
        changes: {
            Adds: [
                "Added Dark theme",
                "Added theme selectors in settings",
                "Added proper URL tester, where you can test against existing mocks or custom test values.",
                "Tabs will retain filter state for each tab.",
                "Added changelog dialog on new version load.",
            ],
        },
    },
    {
        version: "2.3.0",
        date: "26 December 2025",
        changes: {
            Adds: [
                "Add App back to Panel: All Curd can be done in Panel only, while Dashboard can be open for full view",
                "Added Selection to headers",
                "Added dedicated Panel settings",
            ],
            Fixes: ["Fixed header search"],
        },
    },
    {
        version: "2.2.2",
        date: "22 December 2025",
        changes: {
            Adds: [
                "Added project dropdown in mock form",
                "Added bulk operations like delete, active, deactivate and change project to mocks listing",
                "Remove redundant headings",
                "Improves mock pagination U",
            ],
            Fixes: [
                "Mocking status apart from 200",
                "Status apart from 200 will be mocked properly",
                "Will identify url's in 3 part, protocol, origin and pathname, will check only pathname for dynamic parts.",
                "Adds tests for urlParser",
                "Highlight side nav option when on the page",
                "fix Project search",
                "Fix Monaco editor linting",
            ],
        },
    },
    {
        version: "2.2.1",
        date: "15 December 2025",
        changes: {
            Fixes: [
                "Fixed URL when opening dashboard from add mock and no existing page is loaded",
            ],
        },
    },
    {
        version: "2.2.0",
        date: "10 December 2025",
        changes: {
            Updated: [
                "Bundled mokku.app with extension as dashboard.html page",
            ],
        },
    },
    {
        version: "2.1.2",
        date: "26 November 2025",
        changes: {
            Updated: [
                "Header: Use declarativeNetRequest for header modification, this ensures we are setting right headers even on page load for all resource type",
                "Header: Add support for multi method and resource type",
                "Header: Add support domain filter, url pattern matching or regex",
            ],
        },
    },
    {
        version: "2.1.1",
        date: "19 November 2025",
        changes: {
            Updated: ["Check if Mokku and loaded before starting the app"],
        },
    },
    {
        version: "2.1.0",
        date: "17 November 2025",
        changes: {
            Adds: [
                "GraphQL support",
                "Dynamic Response via functions",
                "Create Projects to manage mocks",
                "Import export",
                "Added the Monaco editor (VSCode editor)",
            ],
        },
    },
];
