const timeState = {};

export const reducersTime = {
    time: function (state = timeState, action: any) {
        switch (action.type) {
            case 'GET_TIME_REQUEST':
              return {
                ...state,
                frozen: true
              }
            case 'GET_TIME_SUCCESS':
              return {
                ...state,
                time: action.result.time,
                frozen: false
              }
            case 'GET_TIME_FAILURE':
              // we could add an error message here, to be printed somewhere in our application
              return {
                ...state,
                frozen: false
              }
            default:
              return state
        }
    }
}

export const reducersName = {
  name: function (state = {}, action: any) {
    switch (action.type) {
      case 'GET_NAME':
        return {
          ...state,
          value: action.name
        }
        default:
          return state
    }
  }
}