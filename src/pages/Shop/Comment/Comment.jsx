import React, { useEffect, useState } from "react";
import commentImg from "./comment.svg";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

import "./comment.scss";
// import { Form } from "react-router-dom";
function Comment() {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };

  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Adınızı yazın"),
    email: Yup.string()
      .email("Email atributlarından istifadə edin")
      .required("Emailinizi yazın"),
    comment: Yup.string().required("Fikirlərinizi bildirin").min(10),
  });

  const onSubmit = (values, { resetForm }) => {
    let lastId = 0;
    console.log(values);
    setTimeout(() => {
      resetForm({ values: "" });
    }, 1000);
    if (result.length > 0) {
      lastId = result.sort((a, b) => a.id - b.id);
      lastId = lastId.at(-1).id + 1;
    } else {
      lastId = lastId + 1;
    }

    setResult([...result, { ...values, id: lastId, like: 0, dislike: 0 }]);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("comment"))) {
      let localData = JSON.parse(localStorage.getItem("comment"));
      setResult(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(result));
  }, [result]);

  const Delete = (id) => {
    let check = result.filter((e) => e.id !== id);
    setResult(check);
  };

  const increaseLike = (id) => {
    let check = result.find((e) => e.id == id);
    if (check.dislike === 0) {
      check.dislike++;
    }
    else if(check.dislike==1){
      check.dislike--;
    }
    if (check.dislike === 1 && check.like > 0) {
      check.like--;
    }

    setResult([...result]);
  };

  const creaseLike = (id) => {
    let check = result.find((e) => e.id === id);

    if (check.like == 0) {
      check.like++;
    }
    else if(check.like==1){
      check.like--;
    }
    if (check.like == 1 && check.dislike > 0) {
      check.dislike--;
    }

    
    setResult([...result]);
    console.log(result);
  };

  console.log(result);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-6 commentfirstimg '>
            <div className='commentImg'>
              <img src={commentImg} alt='' />
            </div>
          </div>

          <div className='col-xs-12 col-6 commentf6'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className='formName'>
                      <label htmlFor='name'>Name</label>
                      <Field type='text' id='name' name='name' />
                      <ErrorMessage name='name'>
                        {(errorMsg) => (
                          <div className='commitError'>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className='formEmail'>
                      <label htmlFor='email'>Email</label>
                      <Field type='text' id='email' name='email' />
                      <ErrorMessage name='email'>
                        {(errorMsg) => (
                          <div className='commitError'>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className='formComment'>
                      <label htmlFor='comment'>Comment</label>
                      <Field as='textarea' id='comment' name='comment' />
                      <ErrorMessage name='comment'>
                        {(errorMsg) => (
                          <div className='commitError'>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <button type='submit'>Submit</button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className='col-xs-12 col-6 commentsecondtimg '>
            <div className='commentImg'>
              <img src={commentImg} alt='' />
            </div>
          </div>
        </div>
        <div className='row  commentresult'>
          {result.map((index, key) => (
            <div className=' col-6 col-xs-12 col-sm-6 '>
              <div className='resultBorder' key={key}>
                <p>
                  {index.name} {index.key}
                </p>
                <p>{index.comment}</p>
                <div className='commentLike'>
                  <p>{index.like}</p>
                  <button onClick={() => creaseLike(index.id)}>
                    <i class='fa-solid fa-thumbs-up'></i>
                  </button>
                  <p>{index.dislike}</p>
                  <button onClick={() => increaseLike(index.id)}>
                    <i class='fa-solid fa-thumbs-down'></i>
                  </button>
                </div>

                <button className='resultDel' onClick={() => Delete(index.id)}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comment;
