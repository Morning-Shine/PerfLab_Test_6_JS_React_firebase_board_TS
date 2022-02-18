export interface IState {
  user: IUser;
  loading: ILoading;
  theme: ITheme;
  tableView: ITableView;
  firebaseData: IFirebaseDataLoading;
}

export interface IUser {
  name: null | string;
  id: null | string;
  avatar: null | string;
}

export interface ITheme {
  currentTheme: string;
  blockedBtn: string;
}

export interface ITableView {
  currentView: string;
}

export interface ILoading {
  isLoading: boolean;
}

export interface IFirebaseDataLoading {
  tickets: [];
  status: null | string;
  error: null | string;
  calcAllUncompletedTickets: {
    high: number;
    normal: number;
    low: number;
    status: null | string;
    error: null | string;
  };
  calcUserUncompletedTickets: {
    high: number;
    normal: number;
    low: number;
    status: null | string;
    error: null | string;
  };
  totalTickets: { total: null | number; totalThisUser: null | number };
}
