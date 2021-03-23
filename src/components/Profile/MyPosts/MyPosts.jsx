import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likes={p.likes} />
  ));

  // let newPostElement = React.createRef();  

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  let AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            name='newPostText'
            validate={[required, maxLength10 ]}
            placeholder='Post message'
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    );
  };

  AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
