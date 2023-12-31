import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import axios from 'axios';

const BlogDetailsAdmin = ({ blogId }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

 



  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleBlogTitleChange = (e) => {
    setBlogTitle(e.target.value);
  }

  const handleBlogDescriptionChange = (e) => {
    setBlogDescription(e.target.value);
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  }

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${blogId}`);
      // Puedes redirigir al usuario a la lista de blogs o realizar otras acciones después de eliminar
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
      alert('Error al eliminar el blog.');
    }
  }

  const handlePublish = async () => {
    try {
      await axios.post('https://api.clinicadentalsofiacastro.com/api/blogs', {
        imageUrl,
        blogTitle,
        blogDescription,
        comments,
      });
      alert('Blog publicado correctamente.');
    } catch (error) {
      console.error('Error al publicar el blog:', error);
      alert('Error al publicar el blog.');
    }
  }

  return (
    <React.Fragment>
      <Banner pageTitle='Single Blog Details' />
      <section className="blog-main-wrapper section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <div className="single-blog-details">
                <form>
                  <div className="form-group">
                    <label htmlFor="image">Blog Image:</label>
                    <img className="featured-thumbnail" src={imageUrl} alt="blog" />
                    <input type="file" id="image" onChange={handleImageChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Blog Title:</label>
                    <input type="text" id="title" value={blogTitle} onChange={handleBlogTitleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Blog Description:</label>
                    <textarea
                      id="description"
                      value={blogDescription}
                      onChange={handleBlogDescriptionChange}
                    />
                  </div>
                  <button type="button" onClick={handleAddComment}>
                    Add Comment
                  </button>
                </form>

                <div className="comment-template-section">
                  <h3>Comments ({comments.length})</h3>
                  <ul>
                    {comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                  <div className="contact-form-wraper comment-form">
                    <textarea
                      placeholder="Leave a comment"
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <div className="form-group">
                      <button type="button" onClick={handlePublish}>
                        Publish
                      </button>
                      <button type="button" onClick={handleDelete}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BlogDetailsAdmin;





