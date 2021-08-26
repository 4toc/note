import { TableCellEnum } from '../enums/table-cell-type.enum'

export interface IPageBlockTableTh {
  name: string
  icon: string
  type: TableCellEnum
}

export default class PageBlockTableTh implements IPageBlockTableTh {
  name = 'Поле'
  icon = 'ListIcon'
  type = TableCellEnum.text
  constructor(name: string, icon: string, type: string) {
    this.name = name
    this.icon = icon
    this.type = TableCellEnum[type]
  }
}
