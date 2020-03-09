
### Instructions

You're given a starter template with dummy data.

**Task**: Add interactivity to the app by refactoring the static code in this
template. Make a app that shows 2 Ghupshap chat windows for the
users there in the users array - For example there are currently two users, Aamir Pinger and you in the array. The messages they send to each other should
appear in both chat windows. On Aamir Pinger's screen, his messages should appear in green and
your's messages should appear in blue. On your's screen, your messages should appear in
green and Aamir Pinger's messages should appear in blue.

Remember to follow these steps from the [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html) when you're building your
React applications:

#### Step 1. Break down the app into a hierarchy of components. Draw a box around each React component.

#### Step 2. Determine the data in our app.

#### Step 3. Figure out the data that should be a part of our state:

1.  Is it passed in from a parent via props? If so, it probably isn’t state.

2.  Does it remain unchanged over time? If so, it probably isn’t state.

3.  Can you compute it based on any other state or props in your component?
    If so, it isn’t state.

#### Step 4. Identify where each piece of state lives.

1.  Identify every component that renders something based on that state.

2.  If multiple components need the same piece of state, put that piece of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

#### Step 5. Add Inverse Data Flow.

State should be updated inside of the component where that state lives.
If we pass state down from component A to component B and then need to update
the state based on something that happened in component B, we can do so via
callbacks: Component A will not only pass state to Component B, but it will
also pass a callback function that will fire whenever the state should be updated.
