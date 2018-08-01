const CHANGE_ARTICLE = 'CHANGE_ARTICLE';

export default function(state, action) {
  if(!state) {
    return {
      article: {
        mark: '',
        id: 0
      },
      headerData: {}
    }
  }

  switch(action.type) {
    case CHANGE_ARTICLE:
      return {
        article: {
          mark: action.article.mark,
          id: action.article.id,
        },
        headerData: state.headerData
      }
    default:
      return state
  }
}

export const changeArticle = (article) => {
  return { type: CHANGE_ARTICLE, article}
}