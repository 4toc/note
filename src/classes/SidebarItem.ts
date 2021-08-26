export interface ISidebarItem {
  id: number
  name: string
  special?: boolean
}

export default class SidebarItem {
  constructor(item: ISidebarItem) {
    Object.assign(this, item)
  }
}
