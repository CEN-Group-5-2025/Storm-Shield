import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./community.css";

// Types
interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  timestamp: string;
  votes: number;
  userVote: 'up' | 'down' | null;
  authorAvatar: string;
}

export const Community = () => {
  // Sample initial posts
  const initialPosts: Post[] = [
    {
      id: 1,
      author: "HurricaneHelper",
      title: "Hurricane Preparation Tips",
      content: "I've been through several hurricanes and wanted to share some preparation tips that have helped me. Make sure to stock up on non-perishable food, water (1 gallon per person per day), batteries, and flashlights. Charge all your devices before the storm hits. If you have pets, don't forget to prepare for them too!",
      timestamp: "2 hours ago",
      votes: 45,
      userVote: null,
      authorAvatar: "H"
    },
    {
      id: 2,
      author: "IslandResident",
      title: "Power Outage in San Juan Area",
      content: "Is anyone else experiencing power outages in the San Juan metropolitan area? Our electricity went out about an hour ago, and I'm trying to get information about when it might be restored. Any updates would be appreciated!",
      timestamp: "4 hours ago",
      votes: 32,
      userVote: null,
      authorAvatar: "I"
    },
    {
      id: 3,
      author: "EmergencyVolunteer",
      title: "Volunteer Opportunities in Ponce",
      content: "The community center in Ponce is looking for volunteers to help distribute supplies this weekend. They need people from 9 AM to 5 PM on Saturday and Sunday. If you're available, please consider helping out. You can sign up at the community center or call (555) 123-4567.",
      timestamp: "Yesterday",
      votes: 78,
      userVote: null,
      authorAvatar: "E"
    },
    {
      id: 4,
      author: "RoadConditions",
      title: "Road Closure Update: PR-52",
      content: "PR-52 is currently closed between km 45 and km 52 due to flooding. Authorities estimate it will reopen tomorrow morning. Please use PR-1 as an alternative route if you need to travel in that area.",
      timestamp: "Yesterday",
      votes: 103,
      userVote: null,
      authorAvatar: "R"
    },
    {
      id: 5,
      author: "WeatherWatcher",
      title: "Tropical Storm Forming in the Atlantic",
      content: "Meteorologists are tracking a tropical depression that could develop into a tropical storm in the next 48 hours. It's currently about 800 miles east of the Lesser Antilles and moving west-northwest at 15 mph. We should keep an eye on this system as it could potentially affect Puerto Rico next week.",
      timestamp: "2 days ago",
      votes: 89,
      userVote: null,
      authorAvatar: "W"
    }
  ];

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("latest");
  const [isLoading, setIsLoading] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true);
    }, 300);
  }, []);

  // Handle voting
  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        // If user already voted the same way, remove the vote
        if (post.userVote === voteType) {
          return {
            ...post,
            votes: voteType === 'up' ? post.votes - 1 : post.votes + 1,
            userVote: null
          };
        }
        // If user already voted the opposite way, change the vote (counts as 2)
        else if (post.userVote !== null) {
          return {
            ...post,
            votes: voteType === 'up' ? post.votes + 2 : post.votes - 2,
            userVote: voteType
          };
        }
        // If user hasn't voted yet
        else {
          return {
            ...post,
            votes: voteType === 'up' ? post.votes + 1 : post.votes - 1,
            userVote: voteType
          };
        }
      }
      return post;
    }));
  };

  // Handle creating a new post
  const handleCreatePost = () => {
    if (newPostTitle.trim() === "" || newPostContent.trim() === "") {
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now(),
        author: "CurrentUser", // In a real app, this would be the logged-in user
        title: newPostTitle,
        content: newPostContent,
        timestamp: "Just now",
        votes: 0,
        userVote: null,
        authorAvatar: "C"
      };

      setPosts([newPost, ...posts]);
      setNewPostTitle("");
      setNewPostContent("");
      setShowNewPostForm(false);
      setIsLoading(false);
    }, 800);
  };

  // Filter posts
  const filterPosts = () => {
    let filteredPosts = [...posts];

    switch (activeFilter) {
      case "latest":
        // Posts are already in order of newest first
        break;
      case "top":
        filteredPosts.sort((a, b) => b.votes - a.votes);
        break;
    }

    return filteredPosts;
  };

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
              <span className="stat-value">{posts.reduce((sum, post) => sum + post.votes, 0)}</span>
              <span className="stat-label">Votes</span>
            </div>
          </div>

          <div className="community-actions">
            <button
              className="create-post-button"
              onClick={() => setShowNewPostForm(!showNewPostForm)}
            >
              {showNewPostForm ? "Cancel" : "Create Post"}
            </button>

            <div className="filter-buttons">
              <button
                className={`filter-button ${activeFilter === "latest" ? "active" : ""}`}
                onClick={() => setActiveFilter("latest")}
              >
                Latest
              </button>
              <button
                className={`filter-button ${activeFilter === "top" ? "active" : ""}`}
                onClick={() => setActiveFilter("top")}
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
            </div>
          )}

          <div className="posts-container">
            {filterPosts().map(post => (
              <div key={post.id} className="post-card">
                <div className="post-votes">
                  <button
                    className={`vote-button upvote ${post.userVote === 'up' ? 'voted' : ''}`}
                    onClick={() => handleVote(post.id, 'up')}
                    aria-label="Upvote"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor" />
                    </svg>
                  </button>
                  <span className="vote-count">{post.votes}</span>
                  <button
                    className={`vote-button downvote ${post.userVote === 'down' ? 'voted' : ''}`}
                    onClick={() => handleVote(post.id, 'down')}
                    aria-label="Downvote"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20L20 12H15V4H9V12H4L12 20Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-meta">
                      <div className="author-info">
                        <div className="author-avatar">{post.authorAvatar}</div>
                        <span className="post-author">Posted by {post.author}</span>
                      </div>
                      <span className="post-timestamp">{post.timestamp}</span>
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
  );
};

export default Community; 