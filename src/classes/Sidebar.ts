import SidebarItem, { ISidebarItem } from './SidebarItem'

export interface ISidebar {
  title: string
  data: Array<SidebarItem>
}

export default class Sidebar {
  constructor(item: ISidebar) {
    Object.assign(this, item)
  }
}
