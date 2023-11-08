import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BlogCardAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: this.props.BlogDataAdmin.postItem,
            selectedImages: {},
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.state.blogData.map(item => (
                    <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12" key={item.id}>
                        <div className="single-blog-card">
                            <div className="featured-thumb">
                                <img
                                    src={this.state.selectedImages[item.id] || require("../../assets/img/blog/" + item.imgUrl)}
                                    alt="blog"
                                />
                                <input
                                    type="file"
                                    onChange={e => this.handleImageChange(e, item.id)}
                                />
                            </div>
                            <div className="card-content">
                                <h3>
                                    <a href={item.link} onClick={e => this.handleTextChange(e, item.id)}>
                                        {item.title}
                                    </a>
                                </h3>
                                <div className="card-meta">
                                    <div className="col-6">
                                        <span>Post by: {item.author}</span>
                                    </div>
                                    <div className="col-6">
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <button onClick={() => this.navigateToDetails(item.id)}>Detalles</button> <></>
                                <button onClick={() => this.deleteCard(item.id)}>Eliminar</button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
    handleImageChange(event, blogId) {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            const selectedImages = { ...this.state.selectedImages, [blogId]: imageURL };
            this.setState({ selectedImages });

            // Realizar una solicitud PUT para actualizar la imagen en el servidor
            fetch(`/update-image/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imgUrl: file.name }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    handleTextChange(event, blogId) {
        event.preventDefault();
        const updatedBlogData = this.state.blogData.map(item => {
            if (item.id === blogId) {
                const newText = prompt('Edit the text:', item.title);
                if (newText !== null) {
                    // Realizar una solicitud PUT para actualizar el título en el servidor
                    fetch(`/update-title/${blogId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ title: newText }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => {
                            console.error(error);
                        });

                    return { ...item, title: newText };
                }
            }
            return item;
        });
        this.setState({ blogData: updatedBlogData });
    }


    navigateToDetails(blogId) {
        // Navegar a la ruta BlogAdmin/BlogDetailsAdmin con el ID del blog
        // Utiliza this.props.history.push para acceder al historial de navegación
        window.location.href = `/BlogAdmin/BlogDetailsAdmin/${blogId}`;
    }




    deleteCard(blogId) {
        // Realiza una solicitud DELETE al servidor para eliminar la tarjeta con el ID dado
        fetch(`/delete-card/${blogId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Si la eliminación es exitosa, actualiza el estado para reflejar el cambio
                    const updatedBlogData = this.state.blogData.filter(item => item.id !== blogId);
                    this.setState({ blogData: updatedBlogData });
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

}

export default BlogCardAdmin;



