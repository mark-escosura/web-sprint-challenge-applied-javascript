import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topic = document.createElement('div');
  const javaScriptTab = document.createElement('div');
  const bootStrapTab = document.createElement('div');
  const technologyTab = document.createElement('div');

  topic.appendChild(javaScriptTab);
  topic.appendChild(bootStrapTab);
  topic.appendChild(technologyTab);

  topic.classList.add('topics');
  javaScriptTab.classList.add('tab');
  bootStrapTab.classList.add('tab');
  technologyTab.classList.add('tab');

  javaScriptTab.textContent = topics[0];
  bootStrapTab.textContent = topics[1];
  technologyTab.textContent = topics[2];

  return topic;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/topics`)
  
  .then(response => {

    let tabsCb = Tabs(response.data.topics); // pass in arguments inside the parameters
    let tabs = document.querySelector(selector);

    tabs.appendChild(tabsCb);



    // const tabs = response.data.topics;
    // console.log(tabs);
    // const tabsOne = document.querySelector(selector);
    // console.log(tabsOne);
    // tabsOne.appendChild(Tabs(tabs));
  })

  .then(err => {
    console.log(err);
  })

}

export { Tabs, tabsAppender }
