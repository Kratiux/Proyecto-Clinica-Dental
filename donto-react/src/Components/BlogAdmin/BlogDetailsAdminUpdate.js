import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import axios from 'axios';

const BlogUpdateAdmin = ({ blogId }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
 

  useEffect(() => {
    axios
      .get(`https://api.clinicadentalsofiacastro.com/api/blogs/${blogId}`)
      .then((response) => {
        const blogDetails = response.data;
        console.log(blogDetails);
        setImageUrl(blogDetails.imageUrl);
        setBlogTitle(blogDetails.blogTitle || ''); // Ensure a default value if blogTitle is null or undefined
        setBlogDescription(blogDetails.blogDescription);
        console.log(response)
      })
      .catch((error) => {
        console.error('Error al obtener detalles del blog:', error);
      });
  }, [blogId]);

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

  

  

  const handleUpdate = async () => {
    try {
      await axios.put(`https://api.clinicadentalsofiacastro.com/api/blogs/update/${blogId}`, {
        imageUrl,
        blogTitle,
        blogDescription,
        
      });
      // Puedes redirigir al usuario a la lista de blogs u otras acciones después de actualizar
      alert('Blog actualizado correctamente.');
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
      alert('Error al actualizar el blog.');
    }
  }

  return (
    <React.Fragment>
      <Banner pageTitle='Actualizar blog' />
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
                 
                </form>
                <div className="comment-template-section">
                  
                  <ul>
                    
                  </ul>
                  <div className="contact-form-wraper comment-form">
                    
                    <div className="form-group">
                      <button type="button" onClick={handleUpdate}>
                        Update
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

export default BlogUpdateAdmin;
