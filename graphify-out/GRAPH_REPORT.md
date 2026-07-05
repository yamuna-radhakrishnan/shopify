# Graph Report - FARM_BUDDY_NEW_EDITION  (2026-07-05)

## Corpus Check
- 38 files · ~1,707,563 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 123 nodes · 159 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `133d8f98`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `SupaBase` - 11 edges
2. `scripts` - 6 edges
3. `FarmBuddy` - 6 edges
4. `main()` - 3 edges
5. `Navbar()` - 3 edges
6. `seedTable()` - 2 edges
7. `seedFarmerProducts()` - 2 edges
8. `App()` - 2 edges
9. `SignInSide()` - 2 edges
10. `SignUpSide()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (14): dependencies, axios, @emotion/react, @emotion/styled, @fortawesome/fontawesome-svg-core, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, @mui/icons-material (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (12): About(), Farmer(), featureItems, Home(), Payment(), centralLoanLinks, loanLinks, Services() (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (11): SupaBase, defaultTheme, SignIn(), Fruits(), Nuts(), SignInSide(), theme, theme (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.24
Nodes (6): AddCart(), categories, Consumer(), Navbar(), theme, Nothing()

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (11): homepage, name, private, scripts, build, dev, lint, preview (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @types/react, @types/react-dom, vite (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (8): Contributing, Enjoy our app at https://farm-buddy-new-edition.vercel.app/, FarmBuddy, Features, Getting Started, Happy Consuming with FarmBuddy! 🌾🚜, License, Technologies Used

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 8 - "Community 8"
Cohesion: 0.24
Nodes (9): __dirname, envContent, envPath, envVars, main(), SEED_FILES, seedFarmerProducts(), seedTable() (+1 more)

## Knowledge Gaps
- **59 isolated node(s):** `homepage`, `name`, `private`, `version`, `type` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `homepage`, `name`, `private` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12121212121212122 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._