import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function CreatePost() {

    let navigate = useNavigate();

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/Posts", data).then((response) => {
            navigate("/");
        })
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

  return (
    <div className="create-post-container">
        <h2>Create a new post:</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <label>Post Title:</label>
            <ErrorMessage name="title" component="span"></ErrorMessage>
            <Field id="inputCreatePost" name="title" placeholder="Your post title"></Field>
            <label>Post Text:</label>
            <ErrorMessage name="postText" component="span"></ErrorMessage>
            <Field id="inputCreatePost" name="postText" placeholder="Your post text"></Field>
            <label>Your Username:</label>
            <ErrorMessage name="username" component="span"></ErrorMessage>
            <Field id="inputCreatePost" name="username" placeholder="Your username"></Field>
            <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
