export interface DateTime {
  $date: string,
}

export interface Action {
  action: string,
  behalf: string,
  initiated: string,
  date: DateTime,
  notes?: string
}

export interface blah {
  action: {
    value: null;
    matchMode: string | undefined;
  }
}