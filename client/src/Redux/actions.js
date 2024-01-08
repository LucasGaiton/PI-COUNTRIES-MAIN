//Aca van a ir la action; son funciones que retornan objetos 
//Importamos axios 
import axios from "axios";



// ACTION | showHome
export const loadHome = () => {
    // const endpoint = 'http://localhost:3001/countries';
    return (async (dispatch) => {
        try {
            const { data } = await axios.get("/countries")
            let countries = []
            for (let i = 0; i < 72; i++) {
                countries.push(data[i])
            }
            return (dispatch({
                type: 'LOAD_HOME',
                payload: countries,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};
export const loadAll = () => {
    // const endpoint = 'http://localhost:3001/countries';
    return (async (dispatch) => {
        try {
            const { data } = await axios.get("/countries")
            return (dispatch({
                type: 'LOAD_ALL',
                payload: data,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};
export const loadActivities = () => {
    // const endpoint = 'http://localhost:3001/activities';
    return (async (dispatch) => {
        try {
            const { data } = await axios.get("/activities")
            return (dispatch({
                type: 'LOAD_ACTIVITIES',
                payload: data,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};
export const loadFilter = (filtredArray) => {
    return (async (dispatch) => {
            return (dispatch({
                type: 'LOAD_FILTER',
                payload: filtredArray,
            }))

    });
};
export const loadFilterByName = (name) => {
    // const endpoint = `http://localhost:3001/countries?name=${name}`;
    return (async (dispatch) => {
        try {
            const { data } = await axios.get(`/countries?name=${name}`)
            return (dispatch({
                type: 'LOAD_FILTER_NAME',
                payload: data,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};
export const loadDetail = (id) => {
    // const endpoint = `http://localhost:3001/countries/${id}`;
    return (async (dispatch) => {
        try {
            const { data } = await axios.get(`/countries/${id}`)
            return (dispatch({
                type: 'LOAD_DETAIL',
                payload: data,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};
export const postActivity = (activity) => {
    // const endpoint = `http://localhost:3001/activities`;
    return (async (dispatch) => {
        try {
            const { data } = await axios.post("/activities", activity)
            return (dispatch({
                type: 'POST_DIETS',
                payload: data,
            }))

        } catch (error) {
            console.log(error.message);

        }
    });
};


