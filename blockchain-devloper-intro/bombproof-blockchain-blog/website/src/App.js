import React, { useState, useEffect } from 'react';

import './App.css';
import AddBlogPost from './components/AddBlogPost';
import DisplayBlogPosts from './components/DisplayBlogPosts';
import getBlogPosts from './data/blog-posts';
import getComments from './data/comments';

const App = props => {
  const [blogPosts, setBlogPosts] = useState(getBlogPosts());
  const [comments, setComments] = useState(getComments());
  const [drizzleReadinessState, setDrizzleReadinessState] = useState({drizzleState: null, loading: true});
  const [stackId, setStackID] = useState(null);
  const { drizzle } = props;

  useEffect(
    () => {
      const unsubscribe = drizzle.store.subscribe( () => {
        // every time the store updates, grab the state from drizzle
        const drizzleState = drizzle.store.getState();
        // check to see if it's ready, if so, update local component state
        if (drizzleState.drizzleStatus.initialized) {
          setDrizzleReadinessState({drizzleState: drizzleState, loading: false});
        }
      });
      return () => {
        unsubscribe()
      }
    }, [drizzle.store, drizzleReadinessState]
  );

  const setValue = () => {
    console.log('((((((((((((((((((drizzleReadinessState))))))))))))))))))', drizzleReadinessState);
    if(drizzleReadinessState.loading) {
      return;
    }
    console.log('-----------------------------------------------------------------CONTRACTS:\n', drizzle.contracts);
    const contract = drizzle.contracts.Blog;
    // let drizzle know we want to call the `set` method with `value`
    // _published, string memory _author, string memory _content
    const stackId = contract.methods["post"].cacheSend("Blog title", "01-Oct-2019", "Homer Simpson", "Mmmmm, Donuts!", {
      from: drizzleReadinessState.accounts[0]
    });
    // save the `stackId` for later reference
    setStackID(stackId);
  };

  return (
    <div className="App">
      {
        drizzleReadinessState.loading ?
          console.log('++++++++++++++++++ LOADING ++++++++++++++++++++++++++++++++++++++++') :
          console.log('++++++++++++++++++ LOADED: ', drizzleReadinessState)
      }
      <header className="App-header centerAlign">
        Bulletproof Blockchain Blog
      </header>
        <DisplayBlogPosts
          blogPosts={blogPosts}
          comments={comments}
          setComments={setComments}
        />
        <AddBlogPost
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
          comments={comments}
          setComments={setComments}
        />
      <input onClick={setValue} type='submit' value='setValue' />
    </div>
  );
}

export default App;
