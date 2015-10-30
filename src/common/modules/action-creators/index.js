import Parse from '../../../common/modules/parse-client/index';


const actionCreators = {

    signUp: function () {

        return async function (dispatch) {

            const user = new Parse.User();
            user.set('username', 'user'+Date.now());
            user.set('password', 'password'+Date.now());

            // optimistic update
            dispatch({type: 'CURRENT_USER_CHANGE', payload: user});

            try {

                await user.signUp();
                dispatch({type: 'CURRENT_USER_CHANGE', payload: Parse.User.current()});

            } catch (exception) {
                console.error('CURRENT_USER_CHANGE', exception);
            }

        };

    }


};


export default actionCreators;
