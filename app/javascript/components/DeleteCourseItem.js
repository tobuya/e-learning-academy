import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaGraduationCap, FaClock, FaMoneyBillAlt, FaTrash,
} from 'react-icons/fa';

const CourseItem = ({ course, onDelete }) => (
  <div key={course.id} className="course-card">
    <div className="course-card__frame">
      <img
        src={course.img_url}
        alt={course.title}
        className="course-card__img"
      />
    </div>
    <Link to={`/courses/${course.id}`} className="course-card__title">
      {course.title}
    </Link>
    <hr className="course-card__hr" />

    <p>{course.description}</p>
    <div className="course-card__details">
      <div>
        <span className="course-card__icon">
          <FaMoneyBillAlt />
          {' '}
        </span>
        <p>
          $
          {course.price}
        </p>
      </div>
      <button type="button" className="course-card__delete-btn" onClick={() => onDelete(course.id)}>
        <FaTrash />
      </button>
      <div>
        <span className="course-card__icon">
          <FaClock />
        </span>
        <p>
          {course.duration}
          {' '}
          minutes
        </p>
      </div>
      <div>
        <span className="course-card__icon">
          <FaGraduationCap />
        </span>
        <p>{course.instructor}</p>
      </div>
    </div>
  </div>
);

CourseItem.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseItem;
