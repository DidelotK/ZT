import * as C from '../../constants/serie';

function serieCreate() {
  return {
    type: C.SERIE_CREATE
  }
}
export function createSerie(serie) {
  return dispatch => {
    dispatch(serieCreate());
    return Promise.resolve(serie);
  }
}