import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

interface UserMetadata {
  role?: string;
}

export default async function AdminPage() {
  const { userId } = auth();
  const user = userId ? await currentUser() : null;
  
  if (!user) {
    redirect('/sign-in');
  }

  const metadata = user.publicMetadata as UserMetadata;

  if (metadata.role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-indigo-600 dark:bg-indigo-800">
          <h1 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9">
            Admin Dashboard
          </h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Welcome, {user.firstName}! You are logged in as an admin.
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{user.id}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">{user.emailAddresses[0].emailAddress}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                    {metadata.role}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}