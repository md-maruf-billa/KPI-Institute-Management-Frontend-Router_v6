import { Link } from 'react-router-dom'
import { TLayoutes, TRouteProps } from '../Types'

export const GenarateSideBarItems = (paths: TRouteProps[], baseRoutePath:string) => {
  return paths.reduce<TLayoutes[]>((acc, el) => {
    if (el.element) {
      acc.push({
        key: el.key,
        path: el.path,
        label: <Link to={`/${baseRoutePath}/${el.path}`}>{el.label}</Link>,
        icon: el.icon
      })
    }
    if (el.children) {
      acc.push({
        key: el.key,
        label: el.label,
        icon: el.icon,
        path: el.path,
        children: el.children.map(child => ({
          key: child.key,
          path: child.path,
          label: <Link to={`/${baseRoutePath}/${child.path}`}>{child.label}</Link>,
          icon: child.icon
        }))
      })
    }
    return acc
  }, [])
}
