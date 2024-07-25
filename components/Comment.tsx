'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface CommentProps {
  postSlug: string;
  onCommentAdded: () => void;
}

const Comment: React.FC<CommentProps> = ({ postSlug, onCommentAdded }) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();

  const getUserDisplayName = (user: any) => {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user.username) {
      return user.username;
    }
    if (user.emailAddresses && user.emailAddresses.length > 0) {
      const email = user.emailAddresses[0].emailAddress;
      // Mask the email: show first 3 characters, then asterisks, then the domain
      const [localPart, domain] = email.split('@');
      const maskedLocalPart = localPart.slice(0, 3) + '*'.repeat(localPart.length - 3);
      return `${maskedLocalPart}@${domain}`;
    }
    return 'Anonymous';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !user || isSubmitting) return;

    const userDisplayName = getUserDisplayName(user);

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          postSlug,
          userName: userDisplayName,
        }),
      });

      if (response.ok) {
        setContent('');
        onCommentAdded();
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        rows={3}
        placeholder="Write a comment..."
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Comment'}
      </button>
    </form>
  );
};

export default Comment;