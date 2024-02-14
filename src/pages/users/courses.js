const courses =[
      {
        "id":1,
        "name": "Programming Languages",
        "subcategories": [
          {
            "name": "Python",
            "courses": [
              {
                "id": 1,
                "title": "Python for Beginners",
                "short_description": "Introduction to Python programming language",
                "long_description": "This course is designed for beginners who want to learn Python programming from scratch. Topics covered include basic syntax, data types, control flow, and functions.",
                "icon_path": "python.png",
                "duration": "4 weeks",
                "rating": 4.5,
                "students_enrolled": 1000
              },
              {
                "id": 2,
                "title": "Advanced Python",
                "short_description": "Advanced concepts and applications of Python",
                "long_description": "In this course, you will delve into advanced topics of Python such as object-oriented programming, decorators, generators, and concurrency.",
                "icon_path": "pythonAdvance.jpg",
                "duration": "6 weeks",
                "rating": 4.8,
                "students_enrolled": 800
              }
            ]
          },
          {
            "name": "JavaScript",
            "courses": [
              {
                "id": 3,
                "title": "JavaScript Basics",
                "short_description": "Fundamentals of JavaScript programming language",
                "long_description": "This course covers the basics of JavaScript including variables, data types, operators, control structures, and functions.",
                "icon_path": "js.png",
                "duration": "4 weeks",
                "rating": 4.4,
                "students_enrolled": 1200
              },
              {
                "id": 4,
                "title": "React.js Fundamentals",
                "short_description": "Introduction to React.js library for building user interfaces",
                "long_description": "Learn the fundamentals of React.js, a JavaScript library for building user interfaces. Topics include JSX, components, props, state, and lifecycle methods.",
                "icon_path": "react.png",
                "duration": "5 weeks",
                "rating": 4.7,
                "students_enrolled": 900
              }
            ]
          }
        ]
      },
      {
        "id":2,
        "name": "Data Science",
        "subcategories": [
          {
            "name": "Machine Learning",
            "courses": [
              {
                "id": 5,
                "title": "Machine Learning Foundations",
                "short_description": "Introduction to machine learning concepts and algorithms",
                "long_description": "This course provides a foundational understanding of machine learning concepts and algorithms such as linear regression, logistic regression, decision trees, and k-nearest neighbors.",
                "icon_path": "ML.png",
                "duration": "6 weeks",
                "rating": 4.6,
                "students_enrolled": 1100
              },
              {
                "id": 6,
                "title": "Deep Learning with TensorFlow",
                "short_description": "Learn deep learning techniques using TensorFlow framework",
                "long_description": "This course covers deep learning techniques using the TensorFlow framework. Topics include neural networks, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and more.",
                "icon_path": "deepLearning.png",
                "duration": "8 weeks",
                "rating": 4.9,
                "students_enrolled": 950
              }
            ]
          },
          {
            "name": "Data Analysis",
            "courses": [
              {
                "id": 7,
                "title": "Data Analysis with Python",
                "short_description": "Learn data analysis techniques using Python",
                "long_description": "This course teaches data analysis techniques using Python libraries such as Pandas, NumPy, and Matplotlib. Topics include data manipulation, visualization, and statistical analysis.",
                "icon_path": "data-anal.png",
                "duration": "5 weeks",
                "rating": 4.5,
                "students_enrolled": 1000
              },
              {
                "id": 8,
                "title": "SQL for Data Science",
                "short_description": "Introduction to SQL for data manipulation and querying",
                "long_description": "In this course, you will learn SQL fundamentals for data manipulation and querying. Topics covered include basic SQL commands, joins, subqueries, and aggregations.",
                "icon_path": "Sql.png",
                "duration": "4 weeks",
                "rating": 4.3,
                "students_enrolled": 1200
              }
            ]
          }
        ]
      },
      {
        "id":3,
        "name": "Web Development",
        "subcategories": [
          {
            "name": "Frontend Development",
            "courses": [
              {
                "id": 9,
                "title": "HTML & CSS Fundamentals",
                "short_description": "Learn the basics of HTML and CSS for web development",
                "long_description": "This course covers the fundamentals of HTML and CSS for building web pages. Topics include semantic HTML, CSS selectors, box model, and responsive design.",
                "icon_path": "html-Css.jpg",
                "duration": "4 weeks",
                "rating": 4.4,
                "students_enrolled": 1100
              },
              {
                "id": 10,
                "title": "JavaScript Frameworks",
                "short_description": "Explore popular JavaScript frameworks for frontend development",
                "long_description": "In this course, you will explore popular JavaScript frameworks such as React.js, Vue.js, and Angular for frontend development. Topics include components, routing, state management, and more.",
                "icon_path": "js_Frame.png",
                "duration": "6 weeks",
                "rating": 4.7,
                "students_enrolled": 950
              }
            ]
          },
          {
            "name": "Backend Development",
            "courses": [
              {
                "id": 11,
                "title": "Node.js Fundamentals",
                "short_description": "Introduction to Node.js for backend development",
                "long_description": "Learn the fundamentals of Node.js for building scalable backend applications. Topics include asynchronous programming, Express.js framework, RESTful APIs, and MongoDB integration.",
                "icon_path": "nodejs.png",
                "duration": "5 weeks",
                "rating": 4.6,
                "students_enrolled": 1000
              },
              {
                "id": 12,
                "title": "Django Web Development",
                "short_description": "Build web applications with Django framework",
                "long_description": "This course teaches you how to build web applications using the Django framework in Python. Topics covered include models, views, templates, forms, and authentication.",
                "icon_path": "django.png",
                "duration": "6 weeks",
                "rating": 4.8,
                "students_enrolled": 800
              }
            ]
          }
        ]
      }
    ]
  
  export default courses;
