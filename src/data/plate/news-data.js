module.exports.HEADER = JSON.stringify({
  title: '新闻资讯',
  content: '提供及时的邮轮新闻资讯，邮轮政策，企业新闻，让您及时的了解最新的邮轮动态与企业动态',
  image: 'news.png',
  color: '#21b1b7',
  header: {
    title: '',
    icon: ''
  }
})

module.exports.SORTS = JSON.stringify([
  {
    sortTitle: '',
    template: 1,
    lists: [{
      title: '公司动态',
      icon: 'iconfont icon-qiye-A',
      mark: 'GSDT',
      type: 'lists'
    }, {
      title: '行业动态',
      icon: 'iconfont icon-dongtai-A',
      mark: 'HYDT',
      type: 'lists'
    }]
  }, {
    sortTitle: '行业知识',
    template: 2,
    lists: [{
      title: '邮轮知识',
      icon: '',
      mark: 'YLZS',
      type: 'article'
    }, {
      title: '游船知识',
      icon: '',
      mark: 'YCZS',
      type: 'article'
    }, {
      title: '旅游管理（邮轮方向）',
      icon: 'iconfont icon-qiye-A',
      mark: 'LYGL',
      type: 'article'
    }, {
      title: '轮渡管理流程',
      icon: '',
      mark: 'LDGLLC',
      type: 'article'
    }, {
      title: '邮轮安全',
      icon: '',
      mark: 'YLAQ',
      type: 'article'
    }]
  }
])
