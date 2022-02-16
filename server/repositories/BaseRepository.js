const questions = [
  { id: 1, text: "EEEE" },
  { id: 2, text: "AAA" },
  { id: 3, text: "kaki si mi ka čojk" },
];

class BaseRepository {
  getAll = () => questions;
  getById = (id) => questions.find((x) => x.id === parseInt(id));
  post = (body) => {
    questions.push(body);
    return questions[questions.length - 1];
  };
}

module.exports = BaseRepository;
