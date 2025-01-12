import { TRouteProps, TRoutes } from '../Types'



export const GenarateRoutes = (routePath: TRouteProps[]): TRoutes[] => {
  return routePath.reduce<TRoutes[]>((acc, el) => {
    if (el.element) {
      acc.push({ path: el.path, element: el.element })
    }
    if (el.children) {
      acc.push(
        ...el.children.map(child => ({
          path: child.path,
          element: child.element
        }))
      )
    }
    return  acc
  }, [])
}
