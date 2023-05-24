/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container, Form } from 'react-bootstrap';
import { createCourse } from '../store/coursesSlice';

const NewCourse = ({ createCourse }) => {
  const [title, setTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [img_url, setImgUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      instructor,
      description,
      price,
      duration,
      img_url,
    };

    createCourse(newCourse);

    setTitle('');
    setInstructor('');
    setDescription('');
    setPrice('');
    setDuration('');
    setImgUrl('');
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center gap-2 p-3 new-course-form-container" fluid>
      <h1>Add New Course</h1>

      <Form onSubmit={handleSubmit} className="d-flex flex-column p-3 text-dark bg-white rounded w-50 h-50">
        <Form.Label>
          Title:
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Form.Label>
          Course Image URL:
          <Form.Control
            type="text"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Form.Label>
          Instructor:
          <Form.Control
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Form.Label>
          Description:
          <Form.Control
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Form.Label>
          Price:
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Form.Label>
          Duration:
          <Form.Control
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Form.Label>
        <br />

        <Button variant="primary" type="submit">
          Create Course
        </Button>
      </Form>
    </Container>
  );
};

NewCourse.propTypes = {
  createCourse: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(null, { createCourse })(NewCourse);
