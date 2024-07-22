export const navbar = [
    "/",
    {
      text: 'Coder',
      children: [
        '/code/git/',
        '/code/vue/',
        '/code/react/',
        '/code/mac/',
        // 支持再次嵌套 最多两层
        // {
        //   text: 'Vue',
        //   link: '/code/vue/',
        //   children: [
        //     '/code/vue/v1.md',
        //     '/code/vue/v2.md',
        //   ]
        // }
      ],
    },
    {
      text: '生活',
      children: [
        '/life/docs/',
        '/life/game/',
      ],
    }
]