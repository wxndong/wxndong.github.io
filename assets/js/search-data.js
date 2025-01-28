// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-深度学习从入门到入土",
      
        title: "深度学习从入门到入土",
      
      description: "深度学习笔记",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/DeepLearning/";
        
      },
    },{id: "news-blog-fixed-finally-smile",
          title: 'Blog fixed finally :smile:',
          description: "",
          section: "News",},{id: "news-uploaded-a-blog-post-about-deep-learning深度学习笔记",
          title: 'Uploaded a blog post about deep learning深度学习笔记',
          description: "",
          section: "News",},{id: "news-2025新年快乐-祝自己考研一战上岸浙软-梦想成真",
          title: '🎉2025新年快乐！🎉 📚✨祝自己考研一战上岸浙软，梦想成真！📚✨',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%75%72%6C%65%79%64%6F%6E%67@%31%36%33.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wxndong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
