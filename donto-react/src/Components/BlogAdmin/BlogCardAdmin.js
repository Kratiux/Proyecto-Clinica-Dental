import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogCardAdmin = ({ onEdit, onDelete }) => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.clinicadentalsofiacastro.com/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error al obtener blogs:', error);
      });
  }, []);

  return (
    <React.Fragment>
      {blogs.map((item) => (
        <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12" key={item._id}>
          <div className="single-blog-card">
            <div className="featured-thumb">
              <img src={item.imageUrl} alt="blog" />
            </div>
            <div className="card-content">
              <h3>
                <a href={item.link}>{item.blogTitle}</a>
              </h3>
              <div className="card-meta">
                <div className="col-6">
                  <span>Post by: {item.author}</span>
                </div>
                <div className="col-6">
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="card-actions">
                <Link
                  to={`BlogDetailsAdminUpdate/${item._id}`}
                  className="edit-button"
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                >
                  Editar
                </Link>
                <button
                  className="delete-button"
                  onClick={() => onDelete(item._id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '10px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12">
        <AddCardButton onClick={() => alert('Add Card Clicked')} />
      </div>
    </React.Fragment>
  );
};

const AddCardButton = ({ onClick }) => {
  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px 0',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <button className="add-card-button" onClick={onClick} style={buttonStyles}>
      + Add Card
    </button>
  );
};

export default BlogCardAdmin;






