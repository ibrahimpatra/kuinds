import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Calendar, User, ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const blogsQuery = query(
        collection(db, 'blogs'),
        where('slug', '==', slug)
      );
      const snapshot = await getDocs(blogsQuery);
      
      if (!snapshot.empty) {
        const blogData = {
          id: snapshot.docs[0].id,
          ...snapshot.docs[0].data()
        };
        setBlog(blogData);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', blog.id));
        toast({
          title: "Blog deleted successfully",
        });
        navigate('/blog');
      } catch (error) {
        toast({
          title: "Error deleting blog",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog not found</h1>
          <Link to="/blog">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Featured Image */}
        {blog.imageUrl && (
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Blog Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{blog.author || 'Admin'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </div>

          {/* Admin Actions */}
          {isAdmin && (
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
              <Button
                onClick={() => navigate(`/admin/blog/edit/${blog.id}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                variant="destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          )}

          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
          />
        </div>

        {/* Back to Blog */}
        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Back to All Posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};
