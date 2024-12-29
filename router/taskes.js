const express = require('express');
const route = express.Router();
const Task = require("../modeles/db"); 

route.get('/tasks',(req,res)=>{
 Task.find({}) .then(()=>{
    console.log("donner inserstion ")
 }).catch(()=>{
    console.log("ne pas insertion")
 })
})
route.post('/tasks',  (req, res) => {
        console.log('Requête reçue :', req.body);
        const { name, description, status } = req.body;
        const newTask = new Task({
            name,description,status: status || false,});
        const savedTask =  newTask.save();
        console.log('Tâche sauvegardée :', savedTask);
        res.status(201).json(savedTask);
    
});
route.delete('/tasks/:id', async (req, res) => {
   await Task.findByIdAndDelete(req.params.id);
       
        res.send( "La tâche a été supprimée avec succès");
   
});

route.put('/tasks/:id', async (req, res) => {
    
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { name: req.body.name },
            { new: true } )
        if (!updatedTask) {
            return res.status(404).send({ message: "La tâche n'a pas été trouvée" });
        }
        res.send("Mise à jour effectuée avec succès");
   
});



module.exports = route;