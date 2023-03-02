const router = require("express").Router()
const Student = require("../model/Student")

router.post("/adddata", async (req, res) => {
    const userdata = new Student(req.body)
    await userdata.save()
    res.status(200).json("Information added successfully")
})
router.get("/", async (req, res) => {
    try {
        const data = await Student.find().sort({createdAt: -1})
        res.status(200).json(data)
    } catch {
        res.status(400).json("something wrong here")
    }
})

router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const student = await Student.findByIdAndDelete(id);
  
      if (!student) {
        return res.status(404).send('Student not found');
      }
  
      res.send(student);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });      

  router.get("/students/:id", async(req,res) => {
    const {id} = req.params
    try{
const data = await Student.findById(id)
res.status(200).json(data)
    }catch{

    }
  })

router.put('/students/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const student = await Student.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      if (!student) {
        return res.status(404).send('Student not found');
      }
  
      res.send(student);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

module.exports = router