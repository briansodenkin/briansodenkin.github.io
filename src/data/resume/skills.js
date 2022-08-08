const skills = [
  {
    title: 'Node',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Machine learning'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Data Science', 'Machine learning'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Hadoop',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));
// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#e47272',
  '#cc7b94',
  '#c3423f',
  '#d75858',
  '#64cb7b',
];
const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));
export { categories, skills };
