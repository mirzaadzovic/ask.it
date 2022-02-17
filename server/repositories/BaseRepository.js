class BaseRepository {
  constructor(Model) {
    this.Model = Model;
    console.log(Model);
  }
  getAll() {
    return async (req, res) => {
      try {
        const response = await this.Model.findAll()
          .then((data) => data)
          .catch((err) => null);

        if (!response) return res.status(400).send("Bad request");

        res.status(200).json(response);
      } catch (err) {
        res.status(500).send(err.toString());
      }
    };
  }

  getById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const response = await this.Model.findByPk(id).catch((err) => null);

        if (!response) return res.status(404).send("Not found");

        res.status(200).json(response);
      } catch {
        res.status(500).send("Internal server error");
      }
    };
  }

  post() {
    return async (req, res) => {
      try {
        const response = await this.Model.create(req.body).catch((err) => null);
        if (!response) return res.status(400).send("Bad request");

        res.status(201).json(response);
      } catch {
        res.status(500).send("Internal server error");
      }
    };
  }

  update() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const entity = await this.Model.findByPk(id).catch((err) => null);
        if (!entity) return res.status(404).send("Not found");

        entity.set(req.body);
        const response = await entity.save();

        res.status(200).json(response);
      } catch {
        res.status(500).send("Internal server error");
      }
    };
  }

  delete() {
    return async (req, res) => {
      const { id } = req.params;
      console.log(id);
      const entity = await this.Model.findByPk(id);
      if (!entity) return res.status(404).send("Not found");

      await entity.destroy();
      res.status(204).send("Deleted");
    };
  }
}

module.exports = BaseRepository;
