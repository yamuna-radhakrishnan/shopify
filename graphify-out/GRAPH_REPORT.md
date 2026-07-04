# Graph Report - FARM_BUDDY_NEW_EDITION  (2026-07-04)

## Corpus Check
- 39 files · ~1,705,458 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 113 nodes · 146 edges · 18 communities (11 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4c1b9fd5`
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
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `SupaBase` - 10 edges
2. `FarmBuddy` - 6 edges
3. `scripts` - 5 edges
4. `Consumer()` - 3 edges
5. `Navbar()` - 3 edges
6. `App()` - 2 edges
7. `SignInSide()` - 2 edges
8. `SignUpSide()` - 2 edges
9. `About()` - 2 edges
10. `AddCart()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (18 total, 7 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (17): dependencies, axios, @emotion/react, @emotion/style, @emotion/styled, @fortawesome/fontawesome-svg-core, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome (+9 more)

### Community 1 - "Community 1"
Cohesion: 0.21
Nodes (7): About(), Farmer(), Fruits(), Home(), Services(), Translate(), Weather()

### Community 2 - "Community 2"
Cohesion: 0.21
Nodes (7): SupaBase, defaultTheme, SignIn(), Grains(), Nuts(), Spices(), Vegetables()

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (6): AddCart(), Consumer(), useStyles, Navbar(), theme, Nothing()

### Community 4 - "Community 4"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @types/react, @types/react-dom, vite (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (8): Contributing, Enjoy our app at https://farm-buddy-new-edition.vercel.app/, FarmBuddy, Features, Getting Started, Happy Consuming with FarmBuddy! 🌾🚜, License, Technologies Used

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

## Knowledge Gaps
- **52 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._