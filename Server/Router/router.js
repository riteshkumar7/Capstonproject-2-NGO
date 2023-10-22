const express=require('express');
const router=express.Router();


const UpcomingCampaign=require('../Model/upcomingCampaign_Data');
require ('../Database/connection');

const PriviousgCampaign=require('../Model/priviousCampaign_Data');
const Volunteer=require('../Model/volunteers_Data');


router.post('/addnewUpcomingCampaign', async(req,res)=>{
    try{
        const { CampaignID,CampaignName,CurrentFund,TotalFundRequired,CampaignDate,CampaignImageURL,CampaignInformation} = req.body;
        let data= UpcomingCampaign({CampaignID,CampaignName,CurrentFund,TotalFundRequired,CampaignDate,CampaignImageURL,CampaignInformation});
        await data.save();
        res.send('New Upcoming Campaign Added...')
        }

        catch (e) {
            console.log(e);
            res.send("An error occurred");
        }  
})



router.get('/getallUpcomingCampaign', async (req, res) => {
    try {
        let data = await UpcomingCampaign.find();
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});



router.patch('/updateDonationUpcomingCampaign', async(req,res)=>{
    try{
            const {CampaignID,CurrentFund}=req.body;
           await UpcomingCampaign.findOneAndUpdate({CampaignID:CampaignID},req.body,{new:true})
        
        }

    catch{
            (e)=>{console.log(e);}

         }    
});


router.delete('/deleteUpcomingCampaign/:Campaignid', async (req, res) => {
    try {
        const { Campaignid } = req.params;
        await UpcomingCampaign.findOneAndDelete({ CampaignID: Campaignid });
        res.send("Campaign deleted");
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});

router.patch('/updatenewUpcomingCampaign', async(req,res)=>{
    try{
            const {CampaignID}=req.body;
           await UpcomingCampaign.findOneAndUpdate({CampaignID:CampaignID},req.body,{new:true})
           res.send("Information Updated")
        
        }

    catch{
            (e)=>{console.log(e);}

         }    
});


/////////////


router.post('/addnewpriviousCampaign', async(req,res)=>{
    try{
        const { CampaignID,CampaignName,CampaignImageURL,CampaignInformation} = req.body;
        let data= PriviousgCampaign({CampaignID,CampaignName,CampaignImageURL,CampaignInformation});
        await data.save();
        res.send('New privious Campaign Added...')
        }

        catch (e) {
            console.log(e);
            res.send("An error occurred");
        }  
})


router.get('/getallpreviousCampaigns', async (req, res) => {
    try {
        let data = await PriviousgCampaign.find();
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});

router.patch('/updatePriviousCampaign', async(req,res)=>{
    try{
            const {CampaignID}=req.body;
           await PriviousgCampaign.findOneAndUpdate({CampaignID:CampaignID},req.body,{new:true})
           res.send("Information Updated")
        
        }

    catch{
            (e)=>{console.log(e);}

         }    
});

////////////////////////////////////////////

router.post('/addnewVolunteer', async(req,res)=>{
    try{
        const { volunteersName,volunteersquote,volunteersImageURL} = req.body;
        let data= Volunteer({volunteersName,volunteersquote,volunteersImageURL});
        await data.save();
        res.send('New volunteer Added...')
        }

        catch (e) {
            console.log(e);
            res.send("An error occurred");
        }  
})



router.get('/getallvolunteer', async (req, res) => {
    try {
        let data = await Volunteer.find();
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send("An error occurred");
    }
});


module.exports=router;