import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogCard = () => {
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
            <Link to={`BlogDetails/${item._id}`}>
              <div className="featured-thumb">
                <img
                  src={item.imageUrl}
                  alt="blog"
                  style={{ width: '450px', height: '320px' }} // Set a fixed height
                />
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
              </div>
            </Link>
          </div>
        </div>
      ))}

      <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12">
        {/* AddCardButton component or any other content you want */}
      </div>
    </React.Fragment>
  );
};

export default BlogCard;


