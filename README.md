### Intro

Hi, My name is Andra. I just wanted to thank you personally for reviewing my code. I love feedback, good or bad; I want to hear it. Please if you don't mind sharing your thought with me after, it would be much appreciated.

---

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was only made for development and not hosted anywhere.

---

### Product Decisions

**Project Structure :)**

1. **ui_lib:** I created this folder to hold basic components that are highly flexible. These are the types of components I would expect to be in your internal UI library with company-specific styles.
2. **components:** I create this folder to hold components that have unique responsibilities. Therefore not shareable or flexible. e.g. Drug Interactions form.
3. **redux:** Holds my store and slices, which control state management.
4. **utils:** Holds different functions that do some computation that can be shared throughout the project.

**Tech Stack :)**
I wanted to keep this project simple. I believe you should not add any tech lib without having a good reason. This is why you will not find that many external libs in this project.

1. **React:** Flexible, easy way to build complex UIs. I love it!
2. **Redux:** This project is straightforward and, in my opinion, does not need Redux or any complex state management lib. I could have accomplished the same thing with Context/ Provider. My only reasoning for adding it was because the recruiter said you use it in-house. I wanted to learn something new, which is why I choose to use [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start). I found myself liking it a lot. First, it cuts down on annoying boilerplate and takes care of immutability for you. I'm going to star this project on Github :)

---

### What I would have done if I had more time

As you know, we only have some much time in a day. I left the following topics out, but I think they are essential and would had made the project stronger.

1. **Testing:** I would have added more tests. I would have tested everything in the utils folder and UI-lib. I might not have tested anything in the components folders because UIs are constantly changing. Ultimately, this is a team/business decision if those components get tested or not.
2. **Css:** I'm a big fan of CSS in JS. I like writing in the same language, and I love creating logic in CSS objects. In the end, I would have used Emotion.
