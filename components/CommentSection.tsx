'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Comment from './Comment';
import CommentList from './CommentList';

interface CommentSectionProps {
  postSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug }) => {
  const { isSignedIn } = useUser();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCommentAdded = () => {
    // Increment the refresh key to trigger a re-render of CommentList
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {isSignedIn ? (
        <Comment postSlug={postSlug} onCommentAdded={handleCommentAdded} />
      ) : (
        <p className="mb-4 text-gray-600">Please sign in to leave a comment.</p>
      )}
      <CommentList postSlug={postSlug} refreshKey={refreshKey} />
    </div>
  );
};

export default CommentSection;