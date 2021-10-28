const express = require('express');
const app = express();
const memberRoutes = express.Router();

let Member = require("../model/Member")

//Defined store route

memberRoutes.route('/add').post(function(req,res){
    let member = new Member(req.body);
    member.save()
    .then(member =>{
        res.status(200).json({'Member':'Member has been added successfully'})
    })
    .catch(err=>{
        res.status(400).send('unabale to save in databbase');
    });
});
//defined getdata

memberRoutes.route('/').get(function(req,res){
    Member.find(function(err,members){
        if(err){
            console.log(err);
        }
        else
        {
            res.json(members);
        }
    });
  
});

//defined edit
memberRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Member.findById(id,function(err,member){
        res.json(member);
    });
  
});

///update

memberRoutes.route('/update/:id').post(function(req,res){
    Member.findById(req.params.id, function(err,member){
        if(!member)
        res.status(404).send('Record not found');
        else
        {
            member.MemberName = req.body.MemberName;
            member.UniversityName = req.body.UniversityName;
            member.DepartmentName = req.body.DepartmentName;
            member.GraduationYear = req.body.GraduationYear;
            member.MemberBio = req.body.MemberBio;
            member.MemberAge = req.body.MemberAge;
            
    
            member.save().then(member =>{
                res.json('update complette')
    
            })
            .catch(err=>{
                res.status(400).send('unable to update the database')
            });

        }
     
        
    });
});

//Deleteroute
memberRoutes.route('/delete/:id').get(function(req,res){
    Member.findByIdAndRemove({_id:req.params.id},function(err,member){
        if(err) res.json(err);
        else res.json('successfully removed');

    });
});

module.exports = memberRoutes;