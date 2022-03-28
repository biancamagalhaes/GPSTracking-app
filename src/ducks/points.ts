import {hen, Hen} from '../utils/createReducer';
import {createSelector} from 'reselect';
import {RootState} from './state';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';

const apiUrl = 'http://localhost:8082'

export type TPoint = {
  id: string;
  latitude: number;
  longitude: number;
  speed: number | null;
  time: string;
  sync?: boolean;
};

export interface pointState {
  point: TPoint;
  points: TPoint[];
  loading: boolean;
}

export type InitialState = pointState;

const initialState: InitialState = {
  loading: false,
  point: {} as TPoint,
  points: [],
};

// Selectors
const mainSelector = (state: RootState) => state.point;

export const setPoint = createSelector(mainSelector, state => {
  return {
    point: state.point,
  };
});

export const setPoints = createSelector(mainSelector, state => {
  return {
    points: state.points,
    loading: state.loading,
  };
});

//Actions
class EditorReactions extends Hen<InitialState> {
  loading(a: boolean) {
    this.state.loading = a;
  }

  point(point: TPoint) {
    this.state.point = point;
  }

  points(points: Array<TPoint>) {
    this.state.points = points
      .sort(function (a, b) {
        return a.time.localeCompare(b.time);
      })
      .reverse();
  }
}

//Reducers

export const [pointReducer, actions] = hen(new EditorReactions(initialState));
export default pointReducer;

export function getPoint(
  id: string,
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    dispatch(actions.loading(true));
    return axios
      .get(`${apiUrl}/points/${id}`)
      .then(r => {
        dispatch(actions.loading(false));
        dispatch(actions.point(r.data.points));
        return {...r.data.points, sync: true};
      })
      .catch(error => {
        dispatch(actions.loading(false));
        console.log(error);
        throw Error(error.response.data.error);
      });
  };
}

export function getPoints(): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    dispatch(actions.loading(true));
    return axios
      .get(`${apiUrl}/points`)
      .then(async r => {
        dispatch(actions.loading(false));
        const points = await Promise.all(
          r.data.keys.map((id: string) => {
            return dispatch(getPoint(id));
          }),
        ).then((result: TPoint[]) => result);
        dispatch(actions.points(points));
      })
      .catch(error => {
        dispatch(actions.loading(false));
        console.log(error);
        throw Error(error);
      });
  };
}

export function postPoint(
  data: TPoint,
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch: any) => {
    dispatch(actions.loading(true));
    return axios
      .post(`${apiUrl}/points/${data.id}`, data)
      .then(() => {
        dispatch(actions.loading(false));
      })
      .catch(error => {
        dispatch(actions.loading(false));
        throw Error(error);
      });
  };
}
