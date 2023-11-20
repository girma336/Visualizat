const DataModel = require('../model/dataModel');

// Controller function to handle the GET request for data
exports.getData = (req, res) => {
  const query = DataModel.find({});
  query
    .then((results) => {
      res.json(results); // Handle the query results
    })
    .catch((error) => {
      console.error(error); // Handle any errors
    });
};

exports.matchingData = async (req, res) => {
    try {
     const result =  await DataModel.aggregate([
        { $group: { _id: "$sector", count: { $sum: 1 } } }
      ])
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.searchData = async (req, res) => {
  const filters = req.query;
  const query = {};

  if (filters.endYear) {
    query.endYear = filters.endYear;
  }

  if (filters.topic) {
    query.topic = { $regex: filters.topic, $options: 'i' };
  }

  if (filters.sector) {
    query.sector = { $regex: filters.sector, $options: 'i' };
  }

  if (filters.region) {
    query.region = { $regex: filters.region, $options: 'i' };
  }

  if (filters.pestle) {
    query.pestle = { $regex: filters.pestle, $options: 'i' };
  }

  if (filters.source) {
    query.source = { $regex: filters.source, $options: 'i' };
  }

  if (filters.country) {
    query.country = { $regex: filters.country, $options: 'i' };
  }

  try {
    const searchData = await DataModel.find(query);
    res.json(searchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
