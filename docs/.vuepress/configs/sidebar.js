export const sidebar = {
    "/code/": [
      {
        text: "Git",
        collapsible: true,
        // link: '/code/vue/', // link与 collapsible、prefix互斥
        children: [
          "/code/git/github-account.md",
          "/code/git/operations.md",
        ]
      },
      {
        text: "Vue",
        collapsible: true,
        // link: '/code/vue/', // link与 collapsible、prefix互斥
        children: [
          "/code/vue/v1.md",
          "/code/vue/v2.md"
        ]
      },
      {
        text: "React",
        collapsible: true,
        // link: '/code/react/', // link与 collapsible、prefix互斥
        prefix: 'react/',
        children: [
          "r1.md",
          "r2.md"
        ]
      },
      {
        text: "Mac",
        collapsible: true,
        // link: '/code/react/', // link与 collapsible、prefix互斥
        prefix: 'mac/',
        children: [
          "brew.md",
          "shell.md"
        ]
      },
    ],
    "/life/": [
      {
        text: "文章",
        collapsible: true,
        children: [
          '/life/docs/d1.md',
        ]
      },
      {
        text: "游戏",
        collapsible: true,
        children: [
          '/life/game/g1.md',
        ]
      }
    ]
  }