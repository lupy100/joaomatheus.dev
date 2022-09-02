export interface ITixClock {
  'column-1': {
    color: string
    leds: boolean[]
  }
  'column-2': {
    color: string
    leds: boolean[]
  }
  'column-3': {
    color: string
    leds: boolean[]
  }
  'column-4': {
    color: string
    leds: boolean[]
  }
}

export interface IColumn {
  columnName: string
}

export interface IColumnKeys {
  columnKey: 'column-1' | 'column-2' | 'column-3' | 'column-4'
}
