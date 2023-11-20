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

  if (filters.topics) {
    query.topics = { $regex: filters.topics, $options: 'i' };
  }

  if (filters.sector) {
    query.sector = { $regex: filters.sector, $options: 'i' };
  }

  if (filters.region) {
    query.region = { $regex: filters.region, $options: 'i' };
  }

  if (filters.PEST) {
    query.PEST = { $regex: filters.PEST, $options: 'i' };
  }

  if (filters.source) {
    query.source = { $regex: filters.source, $options: 'i' };
  }

  if (filters.SWOT) {
    query.SWOT = { $regex: filters.SWOT, $options: 'i' };
  }

  if (filters.country) {
    query.country = { $regex: filters.country, $options: 'i' };
  }

  if (filters.city) {
    query.city = { $regex: filters.city, $options: 'i' };
  }

  try {
    const searchData = await DataModel.find(query);
    res.json(searchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
