import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'src/context'
import Footer from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar'
import './community.css'

export const Community = () => {
  // const [posts, setPosts] = useState<Post[]>([])
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostContent, setNewPostContent] = useState('')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [activeFilter, setActiveFilter] = useState('latest')
  const [isLoading, setIsLoading] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)

  const { posts, updatePost, createPost, postsError } = useContext(AuthContext)

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true)
    }, 300)
  }, [])

  // Handle voting
  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    // TODO: Handle voting!!
    // setPosts(
    //   posts.map((post) => {
    //     if (post.id === postId) {
    //       // If user already voted the same way, remove the vote
    //       if (post.userVote === voteType) {
    //         return {
    //           ...post,
    //           votes: voteType === 'up' ? post.votes - 1 : post.votes + 1,
    //           userVote: null,
    //         }
    //       }
    //       // If user already voted the opposite way, change the vote (counts as 2)
    //       else if (post.userVote !== null) {
    //         return {
    //           ...post,
    //           votes: voteType === 'up' ? post.votes + 2 : post.votes - 2,
    //           userVote: voteType,
    //         }
    //       }
    //       // If user hasn't voted yet
    //       else {
    //         return {
    //           ...post,
    //           votes: voteType === 'up' ? post.votes + 1 : post.votes - 1,
    //           userVote: voteType,
    //         }
    //       }
    //     }
    //     return post
    //   }),
    // )
  }

  // Handle creating a new post
  const handleCreatePost = async () => {
    if (newPostTitle.trim() === '' || newPostContent.trim() === '') {
      return
    }

    setIsLoading(true)

    const res = await createPost({
      title: newPostTitle,
      content: newPostContent,
    })
    if (res.success) {
      setNewPostTitle('')
      setNewPostContent('')
      setShowNewPostForm(false)
      setIsLoading(false)
    }
  }

  // Filter posts
  const filterPosts = () => {
    const filteredPosts = [...posts]

    switch (activeFilter) {
      case 'latest':
        // Posts are already in order of newest first
        break
      case 'top':
        filteredPosts.sort((a, b) => b.votes - a.votes)
        break
    }

    return filteredPosts
  }

  return (
    <div className="community-page">
      <div className="community-content">
        <NavigationBar />

        <main className="community-main">
          <div className={`community-header ${animateHeader ? 'animate' : ''}`}>
            <h1 className="page-title">Community Updates</h1>
          </div>

          <div className="community-stats">
            <div className="stat-item">
              <span className="stat-value">{posts.length}</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {posts.reduce((sum, post) => sum + post.votes, 0)}
              </span>
              <span className="stat-label">Votes</span>
            </div>
          </div>

          <div className="community-actions">
            <button
              className="create-post-button"
              onClick={() => setShowNewPostForm(!showNewPostForm)}
            >
              {showNewPostForm ? 'Cancel' : 'Create Post'}
            </button>

            <div className="filter-buttons">
              <button
                className={`filter-button ${activeFilter === 'latest' ? 'active' : ''}`}
                onClick={() => setActiveFilter('latest')}
              >
                Latest
              </button>
              <button
                className={`filter-button ${activeFilter === 'top' ? 'active' : ''}`}
                onClick={() => setActiveFilter('top')}
              >
                Top
              </button>
            </div>
          </div>

          {showNewPostForm && (
            <div className="new-post-form">
              <h3>Create a New Post</h3>
              <input
                type="text"
                placeholder="Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="post-title-input"
              />
              <textarea
                placeholder="Share your thoughts, questions, or information..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="post-content-input"
              />
              <button
                className={`submit-post-button ${isLoading ? 'loading' : ''}`}
                onClick={handleCreatePost}
                disabled={isLoading}
              >
                {isLoading ? 'Posting...' : 'Post'}
              </button>
              <p>{postsError}</p>
            </div>
          )}

          <div className="posts-container">
            {filterPosts().map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-votes">
                  <button
                    className={`vote-button upvote ${post.userVote === 'up' ? 'voted' : ''}`}
                    onClick={() => handleVote(post.id, 'up')}
                    aria-label="Upvote"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4L4 12H9V20H15V12H20L12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <span className="vote-count">{post.votes}</span>
                  <button
                    className={`vote-button downvote ${post.userVote === 'down' ? 'voted' : ''}`}
                    onClick={() => handleVote(post.id, 'down')}
                    aria-label="Downvote"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 20L20 12H15V4H9V12H4L12 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-meta">
                      <div className="author-info">
                        <div className="author-avatar">{post.avatar}</div>
                        <span className="post-author">
                          Posted by {post.author}
                        </span>
                      </div>
                      <span className="post-timestamp">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <p className="post-text">{post.content}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Community
