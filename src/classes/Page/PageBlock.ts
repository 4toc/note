import { PageTypeEnum } from '@/classes/enums/page-type.enum'
import PageBlockButton from './PageBlockButton'
import PageBlockTable from './PageBlockTable'

export interface IPageBlock {
  type: PageTypeEnum
  data?: PageBlockButton | PageBlockTable
  isTypeExist(): boolean
}

export default class PageBlock implements IPageBlock {
  type: PageTypeEnum
  data?: PageBlockButton | PageBlockTable
  constructor(type: string, data: any) {
    this.type = PageTypeEnum[type]
    switch (this.type) {
      case PageTypeEnum.button:
        this.data = new PageBlockButton(data)
        break
      case PageTypeEnum.table:
        this.data = new PageBlockTable(data.name, data.th, data.tr)
        break
    }
  }

  isTypeExist() {
    return this.type ? true : false
  }
}
