"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[750],{2849:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:function(){return b}});var c=n(9611);function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}var l=n(4942),u=n(1413),d=n(2791),p=n(184),m=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,p.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},f=function(e){var t=e.data,n=e.categories,r=t.category,c=t.competency,i=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,u.Z)((0,u.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return(0,p.jsxs)("div",{className:"skillbar clearfix",children:[(0,p.jsx)("div",{className:"skillbar-title",style:a,children:(0,p.jsx)("span",{children:i})}),(0,p.jsx)("div",{className:"skillbar-bar",style:o}),(0,p.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};f.defaultProps={categories:[]};var h=f,y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,c.Z)(e,t)}(o,e);var t,n,i,a=s(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,u.Z)((0,u.Z)({},n),{},(0,l.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,u.Z)((0,u.Z)({},e),{},(0,l.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,p.jsx)(h,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,p.jsx)(m,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,p.jsxs)("div",{className:"skills",children:[(0,p.jsx)("div",{className:"link-to",id:"skills"}),(0,p.jsx)("div",{className:"title",children:(0,p.jsx)("h3",{children:"Skills"})}),(0,p.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,p.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),o}(d.Component);y.defaultProps={skills:[],categories:[]};var b=y},4222:function(e,t,n){n.d(t,{b:function(){return l},n:function(){return o}});var r=n(907);var c=n(181);var i,a=n(1413),o=[{title:"Node",competency:4,category:["Web Development"]},{title:"React",competency:4,category:["Web Development"]},{title:"Bash",competency:3,category:["Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"SQL",competency:4,category:["Web Development","Databases"]},{title:"Express.JS",competency:4,category:["Web Development"]},{title:"Numpy",competency:3,category:["Data Science"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Machine learning"]},{title:"Pytorch",competency:3,category:["Data Science","Machine learning"]},{title:"Typescript",competency:2,category:["Web Development","Languages"]},{title:"Javascript",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:4,category:["Languages"]},{title:"C++",competency:2,category:["Languages"]},{title:"Java",competency:3,category:["Languages"]},{title:"Scala",competency:3,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science"]},{title:"Pandas",competency:3,category:["Data Science"]},{title:"Matplotlib",competency:3,category:["Data Science"]},{title:"Scikit-Learn",competency:4,category:["Data Science"]},{title:"Hadoop",competency:3,category:["Data Science"]},{title:"Spark",competency:2,category:["Data Science"]}].map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{category:e.category.sort()})})),s=["#6968b3","#37b1f5","#40494e","#e47272","#cc7b94","#c3423f","#d75858","#64cb7b"],l=(i=new Set(o.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,r.Z)(e)}(i)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||(0,c.Z)(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:s[t]}}))},4750:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});n(2791);var r=n(1523),c=n(7187),i=n(184),a=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,i.jsx)(a,{data:e},e.school)}))]})};o.defaultProps={data:[]};var s=o,l=function(e){var t=e.data;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,i.jsx)(l,{data:e},e.company)}))]})};u.defaultProps={data:[]};var d=u,p=function(e){var t=e.data,n=e.last;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};p.defaultProps={last:!1};var m=p,f=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,i.jsx)(m,{data:t,last:n===e.length-1},t.title)}))},h=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:f(t)})]})};h.defaultProps={data:[]};var y=h,b=n(2849),g=[{title:"Computer Vision",number:"CS 442",link:"https://edu.epfl.ch/coursebook/en/computer-vision-CS-442",university:"EPFL"},{title:"Machine Learning",number:"CS 233",link:"https://edu.epfl.ch/coursebook/en/introduction-to-machine-learning-ba4-CS-233-B",university:"EPFL"},{title:"Systems for Data Science",number:"CS 449",link:"https://moodle.epfl.ch/course/view.php?id=15596",university:"EPFL"},{title:"Software Engineering",number:"CSCI 3100",link:"https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/",university:"CUHK"},{title:"Algorithms",number:"CSCI 3160",link:"https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3160/",university:"CUHK"},{title:"Fundamentals of Artificial Intelligence",number:"CSCI 3230",link:"https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3230/",university:"CUHK"}],v=[{school:"EPFL",degree:"B.S. Computer Science - Semester Academic Exchange ",link:"https://www.epfl.ch/en/",year:2022},{school:"CUHK",degree:"B.S. Computer Science",link:"https://www.cse.cuhk.edu.hk/",year:2022}],j=[{company:"Alpha Quant",position:"Part time developer.",link:"http://alpha-qts.com/",daterange:"January 2022 - Present",points:["Trained and integrated a Multi Object Tracking model to track moving objects in real-time. ","Implemented POS prototype using Golang. "]},{company:"Huawei",position:"Reseach Intern, Firmware Engineer",link:"https://consumer.huawei.com/hk/",daterange:"June 2021 - Aug 2021",points:["Implemented a CPU performance analysis application to automate evaluation process","Estimated and optimized the performance of the chipset. "]},{company:"Civil Aviation Department",position:"Technology Intern",link:"https://www.cad.gov.hk/english/recruitment.html",daterange:"June 2020 - Aug 2020",points:["Implemented applications to analyze 2 years, 300000 flights data and integrate to dashboards. ","Performed data analysis on flight data and aircraft runway usage"]}],k=n(4222),x=["Education","Courses","Experience","Skills"],w=function(){return(0,i.jsx)(c.Z,{title:"Resume",description:"Brian's Resume.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(r.rU,{to:"resume",children:"Brian Resume"})}),(0,i.jsx)("div",{className:"link-container",children:x.map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,i.jsx)(s,{data:v}),(0,i.jsx)("div",{children:(0,i.jsx)(y,{data:g})}),(0,i.jsx)(d,{data:j}),(0,i.jsx)(b.Z,{skills:k.n,categories:k.b})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=750.76d50bcb.chunk.js.map