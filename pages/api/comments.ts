"use client";
import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { content, postSlug, userName } = req.body;

    try {
      const comment = await prisma.comment.create({
        data: {
          content,
          userId,
          postSlug,
          userName,
        },
      });

      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Error creating comment' });
    }
  } else if (req.method === 'GET') {
    const { postSlug } = req.query;

    try {
      const comments = await prisma.comment.findMany({
        where: {
          postSlug: postSlug as string,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching comments' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}