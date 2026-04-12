# Competitor Feature Research

Fetched: 2026-04-12

Sources:
- Requestly: https://requestly.com/ + https://chromewebstore.google.com/detail/requestly-supercharge-you/mdnleldcmiljblolnjhpnblkcekpdkpa
- Mockman: https://chromewebstore.google.com/detail/mockman-mock-apis/bigfgeehfoenaimkoohnokeeideaomnd
- Tweak: https://tweak-extension.com/ + https://chromewebstore.google.com/detail/tweak-mock-and-modify-htt/feahianecghpnipmhphmfgmpdodhcapi
- Postman: https://www.postman.com/

---

## Quick Reference Table

| Feature | Requestly | Mockman | Tweak | Postman | **Mokku** |
|---|---|---|---|---|---|
| **Free tier** | Yes (limited) | Yes (fully free) | Yes (12 rule cap) | Yes (1 user, limited) | **Yes (fully free, unlimited)** |
| **Paid plans** | $8–$23/mo | None | $36/year | $9–$49/user/mo | **None — always free** |
| **Lives in Chrome DevTools** | No | No | No | No | **Yes — only one** |
| **Requires signup** | No (local) | No | Not confirmed | **Yes (mandatory)** | **No** |
| **Dynamic JS responses** | Yes | No | Yes | Partial (templates only) | **Yes (Monaco Editor)** |
| **GraphQL support** | Yes | No | Paid only ($36/yr) | Yes | **Yes — free** |
| **Header modification** | Yes | Partial (response only) | Yes | Yes | **Yes** |
| **Open source** | Yes (AGPLv3, partial) | No | No | No | **Yes** |
| **Zero telemetry** | Not stated | Not stated | Not stated | No (account-linked) | **Yes** |
| **Visible in Network tab** | Yes | **No (console only)** | Yes | N/A | **Yes** |

---

## Requestly

- **Pricing:** Free (local, limited); Lite $8/mo; Basic $15/user/mo; Professional $23/user/mo
- **DevTools integration:** No — browser popup extension + standalone desktop app
- **Signup required:** No for local use; yes for team collaboration/cloud sync
- **Dynamic JS responses:** Yes (pre/post request scripts)
- **GraphQL:** Yes — free
- **Header modification:** Yes — request and response headers
- **Open source:** Yes — GitHub, GNU AGPLv3 (copyleft); Enterprise Edition components separately licensed (not fully open)
- **Key limitations:**
  - Not inside DevTools; separate popup UI
  - AGPLv3 license means modifications must be shared
  - Enterprise features locked behind highest tier
  - Now owned by BrowserStack — direction concerns among some users
- **Differentiators:**
  - 300K+ developers, SOC-II Type II certified
  - Import from Postman, Charles Proxy, cURL, Bruno, OpenAPI
  - Full API client (Postman alternative) bundled
  - Works across mobile app traffic

---

## Mockman

- **Pricing:** Fully free, no paid tier
- **DevTools integration:** No — browser popup extension
- **Signup required:** No evidence of requirement
- **Dynamic JS responses:** No — static JSON only
- **GraphQL:** No
- **Header modification:** Response headers only (partial)
- **Open source:** Not confirmed; no public GitHub repo found
- **Key limitations:**
  - Mocked requests **disappear from the Network tab** — only logged to console. Cannot inspect mocked calls alongside real traffic.
  - No dynamic/scripted responses
  - No GraphQL support
  - Sparse documentation; minimal official website
  - Small user base, less maintained
- **Differentiators:**
  - Label system for switching between response variations per endpoint
  - Minimal UI — low learning curve

---

## Tweak

- **Pricing:** Free (12 mock rules cap); Premium $36/year (unlimited rules, GraphQL, priority support; 7-day trial)
- **DevTools integration:** No — browser extension (Chrome, Edge, Firefox, Opera, Brave)
- **Signup required:** Not stated; likely no
- **Dynamic JS responses:** Yes — "custom JavaScript snippets" / response hook scripts (v5.0.0+)
- **GraphQL:** **Paid only** — requires $36/year plan; operation name matching, variable-based targeting
- **Header modification:** Yes — response (v4.0.0) and request (v8.0.2) headers
- **Open source:** No; no public repo found
- **Key limitations:**
  - Free tier capped at 12 rules — significant constraint
  - GraphQL behind paywall
  - Disabled on Gmail, Calendar and other Google properties due to breakage (v8.4.1)
  - No DevTools panel integration
- **Differentiators:**
  - Widest browser support of all tools (5 browsers)
  - Random data generators and custom variables built in
  - "No code" positioning — targets non-developer testers

---

## Postman

- **Pricing:** Free ($0, 1 user, limited AI credits/monitoring); Solo $9/mo; Team $19/user/mo; Enterprise $49/user/mo
- **DevTools integration:** None — standalone desktop app + web platform
- **Signup required:** **Yes — mandatory for all functionality**
- **Dynamic JS responses:** Partial — template/variable system only (`{{$randomFullName}}`, Faker helpers). Not arbitrary JavaScript functions.
- **GraphQL:** Yes — HTTP, GraphQL, gRPC, WebSocket, MQTT, MCP all supported
- **Header modification:** Yes — within API client and mock server config
- **Open source:** No — proprietary, closed-source
- **Key limitations:**
  - Mandatory account creation — no anonymous use
  - Cannot intercept live browser traffic without extra setup
  - No browser extension, no DevTools integration
  - "Dynamic responses" are template-based, not real JavaScript
  - Heavy full-platform tool — significant overhead for simple mocking
  - Free plan: only 1 user, 1K monitoring requests/mo
- **Differentiators:**
  - Most feature-complete API platform: design, mock, test, docs, monitor, governance
  - Multi-protocol in one client: HTTP, GraphQL, gRPC, WebSocket, MQTT, MCP, AI
  - Agent Mode (AI-native automation)
  - API Catalog and Private API Network (Enterprise)
  - Largest ecosystem and community

---

## Key Insights for Mokku Positioning

1. **Mokku is the ONLY tool that lives inside Chrome DevTools** — all competitors use popup extensions or standalone apps
2. **Postman is the only tool requiring mandatory signup** — strong differentiator for Mokku's "no account needed" story
3. **Tweak gates GraphQL behind $36/year** — Mokku offers it free
4. **Mockman's mocked requests vanish from the Network tab** — major workflow friction Mokku avoids
5. **Postman's "dynamic responses" are template-based, not real JS** — Mokku's Monaco Editor with arbitrary JS is genuinely more powerful
6. **Only Requestly is also open source**, but under AGPLv3 (copyleft) with partial Enterprise proprietary code — Mokku's open-source story is cleaner
