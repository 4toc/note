import PageBlockTableTh from './PageBlockTableTh'

export interface IPageBlockTable {
  name: string
  th: Array<PageBlockTableTh>
  tr: Array<number | string>
  componentName: string
}

export default class PageBlockTable implements IPageBlockTable {
  name = 'Страница'
  th: Array<PageBlockTableTh>
  tr: Array<number | string>
  componentName = 'PageBlockTable'
  constructor(name: string, th: any, tr: Array<number | string>) {
    this.name = name
    this.th = th.map(
      (row) => new PageBlockTableTh(row.name, row.icon, row.type)
    )
    this.tr = tr
  }
}
