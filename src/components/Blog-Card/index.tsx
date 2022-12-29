import React from 'react';
import { BlogCardProps } from '../../types/declarations';
import styled from 'styled-components';

export const BlogCardGripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  padding: 2rem 2rem;
  justify-content: flex-start;
  gap: 4rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;
const BlogCardContainer = styled.div`
  box-shadow: black 0 0 15px -5px;
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;
  border-radius: 1rem;
  transition: transform 0.5s ease-in-out;
  padding-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: black 0 0 15px 0;
  }

  .blog-title {
    margin-bottom: 0.5rem;
  }

  .blog-body {
    background-color: #2581c1;
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  .btn a {
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    font-size: 14px !important;
    font-weight: bold;
    transition: 0.2s;
    color: #fff;
  }

  .card-content {
    margin: 0.5rem;
  }

  h3 {
    text-align: start !important;
    font-size: 14px !important;
    display: flex;
    justify-content: flex-start;
  }
  h3,
  p {
    text-align: start !important;
    font-size: 12px !important;
    margin: 0;
    padding: 0;
  }

  .publish-date {
    margin: 0.5rem 0;
    font-size: 12px !important;
    font-weight: bold;
  }
`;

const BlogImageContainer = styled.img`
  overflow: hidden;
  width: 300px;
  height: 200px;
`;

const BlogCard = ({ img, title, body, url, publish_date }: BlogCardProps) => {
  return (
    <BlogCardContainer id={title}>
      <BlogImageContainer src={img} alt={title} />
      <div className="card-content">
        <div className="blog-title">
          <h3>{title}</h3>
          <p className={'publish-date'}>{publish_date}</p>
        </div>
        <div className="blog-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <a href={url} target="_blank" rel="noopener noreferrer">
          read more
        </a>
      </div>
    </BlogCardContainer>
  );
};

export default BlogCard;
