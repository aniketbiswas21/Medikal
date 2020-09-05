import { GET_BLOG, BLOGS_ERROR, CLEAR_BLOG, ADD_BLOG } from "../types";
import axios from "axios";
import swal from "sweetalert";

//Get a blog by id
export const getBlogById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/blog/view/${id}`
    );
    dispatch({
      type: GET_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: err,
    });
  }
};

//Clear Blog Data
export const clearBlogData = () => {
  return {
    type: CLEAR_BLOG,
  };
};

//Add a blog
export const publishBlog = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/blog/add`,
      formData,
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (res.status === 200) {
      swal("success", "Blog published successfully", "success");
      dispatch({
        type: ADD_BLOG,
      });
    }
    // .then((data) => {
    //   console.log(data);
    //   swal("success", "Blog published successfully", "success");
    //   return {
    //     type: ADD_BLOG,
    //   };
    // })
    // .catch((err) => {
    //   console.log(err);
    //   swal("Failed", "Could not publish blog.Please try again", "error");
    //   return {
    //     type: BLOGS_ERROR,
    //   };
    // });
  } catch (err) {
    console.log(err);
    swal("Failed", "Could not publish blog.Please try again", "error");
    return {
      type: BLOGS_ERROR,
    };
  }
};
