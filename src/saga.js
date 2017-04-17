import { call, put } from 'redux-saga/effects'
import dataRef from './storeIndex.js';

// worker Saga: будет запускаться на экшены
export function* fetchData() {
   try {
      const data = yield call(getData);
      console.log('data', data);
      yield put({type: "FetchData", amount: data});
   } catch (e) {
      yield console.log(e.message);
   }
}

function getData() {
  dataRef.then(result => {
      result.on('value', snapshot => {
        let itemObj = {}
        snapshot.forEach(item => {
          if (item.val().lat) {
            itemObj = {
              ...itemObj,
              startDate: item.val().startDate,
              time: item.val().time,
              lat: item.val().lat,
              log: item.val().log
            }
          }
        });
        return itemObj;
      });
    });
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchData);
// }