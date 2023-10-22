const mongoose=require('mongoose');

const upcomingCampaign= new mongoose.Schema({

    CampaignID:{type:String},
    CampaignName:{type:String},
    CurrentFund:{type:Number},
    TotalFundRequired:{type:Number},
    CampaignDate:{type:String},
    CampaignImageURL:{type:String},
    CampaignInformation:{type:String}

});

const UpcomingCampaign=new mongoose.model('UpcomingCampaign',upcomingCampaign);
module.exports=UpcomingCampaign;
