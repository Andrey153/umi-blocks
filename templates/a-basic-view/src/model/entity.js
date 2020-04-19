import { nameIDB, namespace } from '../config';
import { getDefaultList, getElement, delElement, putElement } from './service-IDB';


export default {
  namespace,

  state: {
    text: 'loading...',
  },

  effects: {
    *fetch(_, { call, put }) {
      // const { text } = yield call(getText);
      // yield put({
      //   type: 'save',
      //   payload: {
      //     text,
      //   },
      // });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};