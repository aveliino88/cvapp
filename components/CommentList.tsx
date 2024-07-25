'use client';

import React, { useEffect, useState } from 'react';

interface CommentListProps {
  postSlug: string;
  refreshKey: number;
}

const CommentList: React.FC<CommentListProps> = ({ postSlug, refreshKey }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/comments?postSlug=${postSlug}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postSlug, refreshKey]);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment: any) => (
          <div key={comment.id} className="mb-4 p-4  rounded">
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              By: {comment.userName || 'Anonymous'} | Posted: {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;