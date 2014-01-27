var db = {
  posts: [
    {id: 1, title: 'one', body: 'Post one', published: true, views: 400},
    {id: 2, title: 'two', body: 'Post two', published: true, views: 3200},
    {id: 3, title: 'three', body: 'Post three', published: true, views: 2400},
    {id: 4, title: 'four', body: 'Post four', published: true, views: 8400},
    {id: 5, title: 'five', body: 'Post five', published: false, views: 1700},
    {id: 6, title: 'six', body: 'Post six', published: false, views: 9000},
    {id: 7, title: 'seven', body: 'Post seven', published: false, views: 200}
  ],
  comments: [
    {id: 1, body: 'Comment one', postId: 1},
    {id: 2, body: 'Comment two', postId: 2}
  ]
}
