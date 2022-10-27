import React from 'react';
import './Blog.css'
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div className='blog-style'>
    <Card>
      <Card.Body>
        <Card.Title># what is cors</Card.Title>
        <Card.Text>
        Use CORS to allow cross-origin access. 
    CORS is a part of HTTP that lets servers specify any other hosts 
   from which a browser should permit loading of content.
   How to block cross-origin access
   To prevent cross-origin writes, 
	check an unguessable token in the request — known as a Cross-Site Request Forgery CSRF token. 
    prevent cross-origin reads of pages that require this token.
   To prevent cross-origin reads of a resource, 
	ensure that it is not embeddable.
    prevent embedding because embedding a resource always leaks some information about it.
     To prevent cross-origin embeds, 
	ensure that your resource cannot be interpreted
    Browsers may not respect the Content-Type header. 
     For example, if you point a tag at an HTML document, the browser will try to parse the HTML as JavaScript. When your resource is not an entry point to your site, you can also use a CSRF token to prevent embedding.
        </Card.Text>
      </Card.Body>
    </Card>     
    <Card >
      <Card.Body>
        <Card.Title># Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
        <Card.Text>
            =The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
            =Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
        </Card.Text>
      </Card.Body>
    </Card>     
    <Card>
      <Card.Body>
        <Card.Title># How does the private route work?</Card.Title>
        <Card.Text>
        Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

         The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

         The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

          If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Card.Text>
      </Card.Body>
    </Card>     
    <Card>
      <Card.Body>
        <Card.Title># What is Node? How does Node work?</Card.Title>
        <Card.Text>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.


        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        <br></br>

               Node.js basically works on two concept
           <br></br>
            =Asynchronous
            = Non-blocking I/O
            Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
            <br></br>
            Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
          <br></br>
             To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

            Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

            Libuv implements two extremely important features of node.js  
           <br></br>
            =Event loop
           Thread pool
           Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing            callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is            not in the callback function. All the applications code that is inside callback functions will run in the            event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts            running right away. Most of the work is done in the event loop.
           
           Nodejs use event-driven-architecture.
            <br></br>
           =Events are emitted.
           Event loop picks them up.
           Callbacks are called.
           Event queue: As soon as the request is sent the thread places the request into a queue. It is known as an            event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they            are done with the work and event loop will pick up these events and call the callback functions that are            associated with each event and response is sent to the client. 
           <br></br>
           The event loop is an indefinite loop that continuously receives the request and processes them. It checks the            queue and waits for the incoming request indefinitely.
           <br></br>
           Thread pool: Though node.js is single-threaded it internally maintains a thread pool. When non-blocking            requests are accepted there are processed in an event loop, but while accepting blocking requests it checks            for available threads in a thread pool, assigns a thread to the client’s request which is then processed and            send back to the event loop, and response is sent to the respective client.
        </Card.Text>
      </Card.Body>
    </Card>         
        </div>
    );
};

export default Blog;