const actionCreators = {

  routeParamsChange: function (params) {

    console.log('routeParamsChange action creator is called with', params);

    return { type: 'ROUTE_PARAMS_CHANGE', params };
  }

};

export default actionCreators;