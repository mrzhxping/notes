export const sidebar = {
    "/web/": [
      {
        text: "Web",
        collapsible: true,
        children: [
          {
            text: "Vue",
            collapsible: true,
            children: [
              "/web/vue/v1.md",
              "/web/vue/v2.md"
            ]
          }
        ]
      }
    ],
    "/serve/": [
      {
        text: "Serve",
        collapsible: true,
        children: [
          {
            text: "Git",
            collapsible: true,
            children: [
              "/serve/git/github-account.md",
            ]
          }
        ]
      }
    ],
    "/life/": [
      {
        text: "Mac",
        collapsible: true,
        children: [
          "/life/mac/brew.md",
          "/life/mac/shell.md"
        ]
      },
    ]
  }