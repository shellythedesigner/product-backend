
import airModel from "../models/airModel";

export const getAllAir = async (req: any, res: any) => {
  try {
    const airModels = await airModel.find();

    res.status(200).json({
      status: "success",
      results: airModels.length,
      data: {
        airModels,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addAir = async (req: any, res: any) => {
  try {
    const newairModel = await airModel.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        airModel: newairModel,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAir = async (req: any, res: any) => {
  try {
     const data = await airModel.findById(req.params.id);
     res.status(200).json({
      status: "success",
      data
    });
  } catch (err) {
     res.status(404).json({message: 'airModel not found'});
  }
 }

//delete
export const deleteAir = async (req: any, res: any) => {
  try {
  const { id } = req.params;
  const data = await airModel.findByIdAndDelete(id);
  res.status(204).json({
    status: "success",
    data
  });
} catch (err) {
  res.status(500).json({ message: 'Error deleting entity'});
}
};


// // GET /airModels/:id: Retrieves a single airModel by its id.
// app.get("/airModels/:id", (req, res) => {
//   const { id } = req.params;
//   const airModel = airModels.find(t => t.id === parseInt(id));
  
//   if (airModel){
//     res.status(200).send(airModel);
//   } else {
//     res.status(404).send('airModel not found');
//   }
// });




// const airModels = [
//   { id: 1, title: "coding" },
//   { id: 2, title: "cleaning" }
// ];

// // GET /airModels: Returns an array of all airModel objects.
// app.get("/airModels", (req, res) => {
//   res.status(200).send(airModels);
// });

// // POST /airModels: Adds a new airModel to the list.
// app.post("/airModels", (req, res) => {
//   const newairModel ={
//     id: airModels.length + 1,
//     title: req.body.title
//   };
//   airModels.push(newairModel);
//   res.status(201).send({ message: 'Added Successfully', airModels: airModels });
// });

// // DELETE /airModels/:id: Removes a airModel from the list by its id.
// app.delete("/airModels/:id", (req, res) => {
//   const { id } = req.params;

//   res.status(200).send({ message: 'Deleted Successfully' });
// });



// // GET /airModels/:id: Retrieves a single airModel by its id.
// app.get("/airModels/:id", (req, res) => {
//   const { id } = req.params;
//   const airModel = airModels.find(t => t.id === parseInt(id));
  
//   if (airModel){
//     res.status(200).send(airModel);
//   } else {
//     res.status(404).send('airModel not found');
//   }
// });

// // Update an item name
// app.put("/airModels/:id", (req, res) => {
//   const { id } = req.params;
//   const newTitle = req.body.title;
//   const airModelId = parseInt(id, 10);
//   const index = airModels.findIndex(t => t.id === airModelId);
//   if (index !== -1) {
//     airModels[index].title = newTitle;
//     res.status(200).send({ message: 'airModel updated successfully', airModels: airModels });
//  } else {
//     res.status(404).send({ message: 'airModel not found' });
//  }
// });