import { GET_ALL_DOCS, GET_DOC, DOCS_ERROR, GET_SLOTS } from "../types";
import axios from "axios";

//Get all docs
export const getAllDocs = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/doctor/all`
    );
    dispatch({
      type: GET_ALL_DOCS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DOCS_ERROR,
      payload: err,
    });
  }
};

//Get a doc by id
export const getDoc = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/doctor/${id}`
    );
    dispatch({
      type: GET_DOC,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DOCS_ERROR,
      payload: err,
    });
  }
};

//Get Doctor's Slot
export const getDocSlots = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/doctor/getTimetable/${id}`
    );
    const date = new Date();
    const today = date.getDay();
    const tomm = (today + 1) % 7;
    console.log(today, tomm);
    const obj = {
      today: res.data.days[today],
      tommorow: res.data.days[tomm],
    };
    dispatch({
      type: GET_SLOTS,
      payload: obj,
    });
  } catch (err) {
    dispatch({
      type: DOCS_ERROR,
      payload: err,
    });
  }
};
