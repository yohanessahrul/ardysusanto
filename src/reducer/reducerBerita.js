const initilState = {
  isLoading: false,
  data: null,
  readNews: null,
  formEdit: null,
  beritaTerbaru: null
}

export default function reducerBerita(state={...initilState}, action) {
  switch (action.type) {
    case 'GET_ALL_NEWS':
      return {
        ...state,
        data: action.payload
      }
    case 'READ_NEWS_BY_ID':
      return {
        ...state,
        readNews: action.payload
      }
    case 'READ_NEWS':
      return {
        ...state,
        readNews: action.payload
      }
    case 'UPDATE_NEWS':
      return {
        ...state,
        data: action.payload
      }
    case 'FORM_EDIT':
      return {
        ...state,
        formEdit: action.payload
      }
    case 'GET_BERITA_TERBARU':
      return {
        ...state,
        beritaTerbaru: action.payload
      }
    default: 
      return state;
  }
}