export interface IPageBlockButton {
  title: string
  link: string
  componentName: string
}

export default class PageBlockButton implements IPageBlockButton {
  title = ''
  link = ''
  componentName = 'PageBlockButton'
  constructor(item: Partial<IPageBlockButton>) {
    Object.assign(this, item)
  }
}
