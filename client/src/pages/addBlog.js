import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Grid, TextField, Box, Button } from "@material-ui/core";
import { useStyles } from "./css/addBlogStyles";
import { useDispatch } from "react-redux";
import { publishBlog } from "../redux/actions/blogActions";
import swal from "sweetalert";

const Blog = () => {
  const classes = useStyles();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [file, setFile] = useState({ name: null, data: null });
  const dispatch = useDispatch();
  const formData = new FormData();
  const onChangeTitle = (e) => {
    setBlogTitle(e.target.value);
  };
  const fileChoose = (e) => {
    console.log(e.target.files[0]);
    setFile({
      ...file,
      name: e.target.files[0].name,
      data: e.target.files[0],
    });
  };
  const onChangeContent = (event, editor) => {
    setBlogContent(editor.getData());
  };
  const upload = () => {
    if (file.data) {
      formData.append("photo", file.data);
    }
    formData.append("title", blogTitle);
    formData.append("content", blogContent);
    console.log(formData);

    if (!file.data || (file.data && file.data.size < 4000000)) {
      dispatch(publishBlog(formData));
    } else {
      swal("Upload failed", "File size cannot exceed 4mb", "error");
    }
  };

  return (
    <>
      <Navbar />
      <Container fixed>
        <Box className={classes.mainContainer}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                style={{ backgroundColor: "white" }}
                value={blogTitle}
                onChange={(e) => {
                  onChangeTitle(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} className={classes.addFileGrid}>
                <Grid item xs={12} lg={3}>
                  <input
                    accept=".png,.jpg,.jpeg"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={fileChoose}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      size="large"
                      className={classes.btn}
                    >
                      Add a cover image
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12} lg={9}>
                  {file && file.name ? (
                    <p style={{ display: "inline-block" }}>{file.name}&nbsp;</p>
                  ) : (
                    <p style={{ display: "inline-block" }}>
                      No files chosen &nbsp;
                    </p>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Enter your Blog Content here!</p>"
                onInit={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  onChangeContent(event, editor);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                size="large"
                className={classes.btn}
                onClick={upload}
              >
                Publish
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
