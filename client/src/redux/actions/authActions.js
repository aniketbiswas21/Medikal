import {
  LOGIN_USER,
  REGISTER_USER,
  USER_ERROR,
  CLEAR_ERROR,
  GET_PROFILE,
} from "../types";
import axios from "axios";

//Login a user
export const login = (formData, value) => async (dispatch) => {
  try {
    if (value === 0) {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/patient/login`,
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
      } else if (res.status === 400) {
        const message = "Invalid Credentials";
        dispatch({
          type: USER_ERROR,
          payload: message,
        });
      }
    } else if (value === 1) {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/doctor/login`,
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
      } else if (res.status === 400) {
        const message = "Invalid Credentials";
        dispatch({
          type: USER_ERROR,
          payload: message,
        });
      }
    } else if (value === 2) {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/organisation/login`,
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        });
      } else if (res.status === 400) {
        const message = "Invalid Credentials";
        dispatch({
          type: USER_ERROR,
          payload: message,
        });
      }
    }
  } catch (err) {
    const message = "Invalid Credentials";
    console.log(err);
    dispatch({
      type: USER_ERROR,
      payload: message,
    });
  }
};

//Register a patient
export const register = (formData) => async (dispatch) => {
  try {
    const newFormData = {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      emailProp: {
        email: formData.email,
      },
      contactNo: formData.contactNo,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/patient/signUp`,
      newFormData
    );
    if (res.status === 200) {
      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      });
    } else if (res.status === 400) {
      const message = "Enter valid details";
      dispatch({
        type: USER_ERROR,
        payload: message,
      });
    }
  } catch (err) {
    const message = "Enter valid details";
    console.log(err);
    dispatch({
      type: USER_ERROR,
      payload: message,
    });
  }
};

//Register a Doctor
export const registerDoctor = (formData) => async (dispatch) => {
  try {
    const newFormData = {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      contactNo: formData.contactNo,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      password: formData.password,
      description: formData.description,
      org: formData.org,
      fields: {
        type: formData.fields,
      },
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/patient/signUp`,
      newFormData
    );
    if (res.status === 200) {
      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      });
    } else if (res.status === 400) {
      const message = "Enter valid details";
      dispatch({
        type: USER_ERROR,
        payload: message,
      });
    }
  } catch (err) {
    const message = "Enter valid details";
    console.log(err);
    dispatch({
      type: USER_ERROR,
      payload: message,
    });
  }
};

//Register an Organisation
export const registerOrganisation = (formData) => async (dispatch) => {
  try {
    const newFormData = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNo,
      password: formData.password,
      description: formData.description,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/patient/signUp`,
      newFormData
    );
    if (res.status === 200) {
      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      });
    } else if (res.status === 400) {
      const message = "Enter valid details";
      dispatch({
        type: USER_ERROR,
        payload: message,
      });
    }
  } catch (err) {
    const message = "Enter valid details";
    console.log(err);
    dispatch({
      type: USER_ERROR,
      payload: message,
    });
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/patient/profile`,
      { withCredentials: true }
    );
    if (res) {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_ERROR,
    });
  }
};
