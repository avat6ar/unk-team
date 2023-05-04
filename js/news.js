let postsList = document.getElementById("postsList");

let posts = [
  {
    id: Math.random() * 10,
    title: "Bots System",
    data: "March 3, 2023",
    day: 3,
    month: "March",
    massage:
      "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing software like Aldus.",
    categories: ["Discord", "Bots", "Bots System"],
    link: "",
  },
  {
    id: Math.random() * 10,
    title: "Spotify",
    data: "March 5, 2023",
    day: 8,
    month: "March",
    massage:
      "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing software like Aldus.",
    categories: ["Accounts", "Spotify"],
    link: "",
  },
  {
    id: Math.random() * 10,
    title: "Netflix",
    data: "March 8, 2023",
    day: 8,
    month: "March",
    massage:
      "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing software like Aldus.",
    categories: ["Accounts", "Netflix"],
    link: "",
  },
  {
    id: Math.random() * 10,
    title: "Account Discord",
    data: "March 10, 2023",
    day: 10,
    month: "March",
    massage:
      "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing software like Aldus.",
    categories: ["Discord", "Account Discord"],
    link: "",
  },
];
const displayPostsList = (posts) => {
  let AllPosts = "";
  posts.map((item) => {
    AllPosts += `
    <li class="post-holder row">
    <div class="col">
      <div class="post-date mb-3">
        <span class="day">${item.day}</span>
        <span class="month">${item.month}</span>
      </div>
    </div>
    <div class="col-md-11">
      <div class="border-bottom">
        <div class="post-header">
          <div class="post-title-holder">
            <h4 class="post-title">${item.title}</h4>
          </div>
        </div>
        <div class="post-content">
          <div class="post-description">
            <div class="post-text-hld">${item.massage}</div>
            <a href="${item.link}" class="post-read-more"> Read more » </a>
          </div>
        </div>
        <div class="post-footer">
          <div class="post-info d-flex">
            <div class="item post-posed-date">
              <span class="label me-2"
                ><i class="fa-regular fa-calendar-days"></i
              ></span>
              <span class="value">${item.data}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
    `;
  });
  postsList.innerHTML = AllPosts;
};

const customSort = (a, b) => {
  const dataA = new Date(a.data);
  const dataB = new Date(b.data);
  if (dataA < dataB) return 1;
  else if (dataA > dataB) return -1;
  return 0;
};

displayPostsList(posts.sort(customSort));
