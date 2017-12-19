function timeMiddleware() {
    return (next: any) => (action: any) => {
        const { promise, types, ...rest } = action
        if (!promise) {
          return next(action)
        }
    
        const [REQUEST, SUCCESS, FAILURE] = types
    
        next({...rest, type: REQUEST})
    
        return promise().then(
          (result: any) => {
            next({...rest, result, type: SUCCESS})
          },
          (error: any) => {
            next({...rest, error, type: FAILURE})
          }
        )
    }
}

export const middlewares = [timeMiddleware];